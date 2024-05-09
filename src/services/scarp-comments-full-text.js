const cheerio = require('cheerio');
const fs = require('fs');
const yaml = require('js-yaml');
const { getIndentation, convertToNestedJson } = require('./utils.js');
const SaveToFiles = require('./save-files.js')

// Sample HTML table as a string (replace with your HTML table)
const htmlTable = `
<div id="comments_wrap">
<table border="0" width="100%" cellpadding="1" cellspacing="0">
<tbody><tr><td><table border="0" width="100%" cellpadding="1" cellspacing="0" bgcolor="#000000">
<tbody><tr><td><table border="0" width="100%" cellpadding="3" cellspacing="0">
<tbody><tr bgcolor="#eeeeee"><td align="RIGHT" valign="top" nowrap="" width="50%" rowspan="2">
<font size="2" face="Arial" color="#000099">
<a name="1"><b>שלומי2</b></a>
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=%F9%EC%E5%EE%E92"><img src="https://rotter.net/forum/Images/5_star.gif" border="0" alt="לחץ כאן להצגת דירוג המשתמש"></a><br>
<font size="1">חבר מתאריך 20.6.14</font><br>
<font size="1">9218 הודעות</font>, <font size="1" color="006633"> <b>56 מדרגים</b></font>, <font color="red" size="1"> <b>111 נקודות. &nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=%F9%EC%E5%EE%E92"><font color="000099" size="-1"><u>ראה משוב</u></font></a></b></font></font></td><td align="LEFT" valign="top" width="50%" nowrap=""><font size="1" face="Arial" color="#000099"><font color="black">יום שני ז' בניסן תשפ''ד &nbsp;&nbsp;</font>
<font color="red">14:51</font> &nbsp; <font color="#eeeeee" size="1"> </font>15.04.24</font>&nbsp;&nbsp;&nbsp;</td></tr>
<tr bgcolor="#eeeeee"><td align="LEFT">
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=send_mesg&amp;userid=%F9%EC%E5%EE%E92" target="_new"><img src="https://rotter.net/forum/Images/mesg.gif" border="0" title="לחץ לשליחת הודעה פרטית למשתמש"></a> <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=user_profiles&amp;user=%F9%EC%E5%EE%E92"><img src="https://rotter.net/forum/Images/profile_small.gif" title="לחץ להצגת פרופיל המשתמש" border="0"></a><a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=add_buddy&amp;user=%25F9%25EC%25E5%25EE%25E92&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/mesg_add_buddy.gif" title="לחץ להוספת משתמש זה לרשימת החברים שלך" border="0"></a>
<a href="javascript:makeRemote('https://rotter.net/cgi-bin/forum/Lib/view_user_kartis.pl?user=%F9%EC%E5%EE%E92')">
<img src="https://rotter.net/forum/Images/kartis.gif" border="0" alt="כרטיס אישי"></a>&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_ip&amp;forum=scoops1&amp;om=845227&amp;omm=1&amp;name=%F9%EC%E5%EE%E92"><img src="https://rotter.net/forum/Images/ip.gif" border="0" alt="עבור לצ'אט"></a>
&nbsp;</td></tr>
<tr bgcolor="#FDFDFD"><td colspan="2" width="100%">
<font size="2" face="Arial" color="#000099">
&nbsp;&nbsp;<font class="text16b">1. לא צפיתי&nbsp;&nbsp;</font><br>
<font size="1" face="Arial" color="#000099"><a href="#0">בתגובה להודעה מספר 0</a></font><br>&nbsp;<br>
<table border="0" cellpadding="5" cellspacing="0" width="70%" style="display: inline-table;">
<tbody><tr><td valign="top" width="50" nowrap="">&nbsp;&nbsp;</td><td valign="top" width="100%">
<font size="2" face="Arial" color="#000099"><font class="text15"><b> <br> אבל צפוי</b><p><b>דת האחווה והשלום</b></p><p> <br> </p></font></font></td></tr></tbody></table>
<br></font></td></tr><tr bgcolor="#eeeeee"><td align="right" valign="top" nowrap="">
<font size="1" face="Arial" color="#000099">
&nbsp; <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=edit&amp;forum=scoops1&amp;om=845227&amp;omm=1"><img src="https://rotter.net/forum/Images/edit.gif" border="0"></a> &nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=post&amp;forum=scoops1&amp;om=845227&amp;omm=1"><font size="1" face="Arial" color="#000099"><img src="https://rotter.net/forum/Images/response.gif" border="0"></font></a><font size="1" face="Arial" color="#000099"> &nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=read_count&amp;om=845227&amp;forum=scoops1&amp;viewmode=all"><img src="https://rotter.net/forum/Images/all.gif" border="0"></a></font><font size="1">&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=list&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/gobk.gif" border="0"></a>
&nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?quote=not_empty&amp;az=post&amp;forum=scoops1&amp;om=845227&amp;omm=1"><font size="1" face="Arial" color="#000099"> תגובה עם ציטוט </font></a>&nbsp; | <a href="javascript:updatePropertyDisplay('1')"><font face="Arial" color="#000099">תגובה מהירה</font></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcadmin.cgi?az=admin_board_manager&amp;command=admin_remove_messages&amp;forum=scoops1&amp;thread_select=845227&amp;selected=1" onclick="return confirm('למחוק תגובה?')"><font size="1" face="Arial" color="#000099">(ניהול: מחק תגובה)</font></a></font></font></td>
<td align="left" nowrap="">
<font size="1" face="Arial" color="#000099"><br>
מכתב זה והנלווה אליו, על אחריות ועל דעת הכותב בלבד
</font></td></tr></tbody></table></td></tr></tbody></table>
</td></tr></tbody></table>
<table border="0" width="100%" cellpadding="1" cellspacing="0"><tbody><tr>
<td width="18"><img src="https://rotter.net/forum/Images/blank.gif" width="18" height="10"></td><td width="100%">
<table border="0" width="100%" cellpadding="0" cellspacing="0" bgcolor="#000000">
<tbody><tr><td><table border="0" width="100%" cellpadding="1" cellspacing="0">
<tbody><tr><td><table border="0" width="100%" cellpadding="3" cellspacing="0">
<tbody><tr bgcolor="#eeeeee"><td align="RIGHT" valign="top" nowrap="" width="50%" rowspan="2">
<font size="2" face="Arial" color="#000099">
<a name="14"><b>מבצבץ</b></a>
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=%EE%E1%F6%E1%F5"><img src="https://rotter.net/forum/Images/5_star.gif" border="0" alt="לחץ כאן להצגת דירוג המשתמש"></a><br>
<font size="1">חבר מתאריך 10.11.21</font><br>
<font size="1">12441 הודעות</font>, <font size="1" color="006633"> <b>58 מדרגים</b></font>, <font color="red" size="1"> <b>99 נקודות. &nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=%EE%E1%F6%E1%F5"><font color="000099" size="-1"><u>ראה משוב</u></font></a></b></font></font></td><td align="LEFT" valign="top" width="50%" nowrap=""><font size="1" face="Arial" color="#000099"><font color="black">יום שני ז' בניסן תשפ''ד &nbsp;&nbsp;</font>
<font color="red">15:00</font> &nbsp; <font color="#eeeeee" size="1"> </font>15.04.24</font>&nbsp;&nbsp;&nbsp;</td></tr>
<tr bgcolor="#eeeeee"><td align="LEFT">
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=send_mesg&amp;userid=%EE%E1%F6%E1%F5" target="_new"><img src="https://rotter.net/forum/Images/mesg.gif" border="0" title="לחץ לשליחת הודעה פרטית למשתמש"></a> <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=user_profiles&amp;user=%EE%E1%F6%E1%F5"><img src="https://rotter.net/forum/Images/profile_small.gif" title="לחץ להצגת פרופיל המשתמש" border="0"></a><a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=add_buddy&amp;user=%25EE%25E1%25F6%25E1%25F5&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/mesg_add_buddy.gif" title="לחץ להוספת משתמש זה לרשימת החברים שלך" border="0"></a>
<a href="javascript:makeRemote('https://rotter.net/cgi-bin/forum/Lib/view_user_kartis.pl?user=%EE%E1%F6%E1%F5')">
<img src="https://rotter.net/forum/Images/kartis.gif" border="0" alt="כרטיס אישי"></a>&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_ip&amp;forum=scoops1&amp;om=845227&amp;omm=14&amp;name=%EE%E1%F6%E1%F5"><img src="https://rotter.net/forum/Images/ip.gif" border="0" alt="עבור לצ'אט"></a>
&nbsp;</td></tr>
<tr bgcolor="#FDFDFD"><td colspan="2" width="100%">
<font size="2" face="Arial" color="#000099">
&nbsp;&nbsp;<font class="text16b">14. לא קשה לצפייה לדעתי&nbsp;&nbsp;</font><br>
<font size="1" face="Arial" color="#000099"><a href="#1">בתגובה להודעה מספר 1</a></font><br>&nbsp;<br>
<table border="0" cellpadding="5" cellspacing="0" width="70%" style="display: inline-table;">
<tbody><tr><td valign="top" width="50" nowrap="">&nbsp;&nbsp;</td><td valign="top" width="100%">
<font size="2" face="Arial" color="#000099"><font class="text15"><b> <br> </b><p> <br> </p></font></font></td></tr></tbody></table>
<br></font></td></tr><tr bgcolor="#eeeeee"><td align="right" valign="top" nowrap="">
<font size="1" face="Arial" color="#000099">
&nbsp; <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=edit&amp;forum=scoops1&amp;om=845227&amp;omm=14"><img src="https://rotter.net/forum/Images/edit.gif" border="0"></a> &nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=post&amp;forum=scoops1&amp;om=845227&amp;omm=14"><font size="1" face="Arial" color="#000099"><img src="https://rotter.net/forum/Images/response.gif" border="0"></font></a><font size="1" face="Arial" color="#000099"> &nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=read_count&amp;om=845227&amp;forum=scoops1&amp;viewmode=all"><img src="https://rotter.net/forum/Images/all.gif" border="0"></a></font><font size="1">&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=list&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/gobk.gif" border="0"></a>
&nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?quote=not_empty&amp;az=post&amp;forum=scoops1&amp;om=845227&amp;omm=14"><font size="1" face="Arial" color="#000099"> תגובה עם ציטוט </font></a>&nbsp; | <a href="javascript:updatePropertyDisplay('14')"><font face="Arial" color="#000099">תגובה מהירה</font></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcadmin.cgi?az=admin_board_manager&amp;command=admin_remove_messages&amp;forum=scoops1&amp;thread_select=845227&amp;selected=14" onclick="return confirm('למחוק תגובה?')"><font size="1" face="Arial" color="#000099">(ניהול: מחק תגובה)</font></a></font></font></td>
<td align="left" nowrap="">
<font size="1" face="Arial" color="#000099"><br>
מכתב זה והנלווה אליו, על אחריות ועל דעת הכותב בלבד
</font></td></tr></tbody></table></td></tr></tbody></table>
</td></tr></tbody></table>
</td></tr></tbody></table>
<table border="0" width="100%" cellpadding="1" cellspacing="0"><tbody><tr>
<td width="36"><img src="https://rotter.net/forum/Images/blank.gif" width="36" height="10"></td><td width="100%">
<table border="0" width="100%" cellpadding="0" cellspacing="0" bgcolor="#000000">
<tbody><tr><td><table border="0" width="100%" cellpadding="1" cellspacing="0">
<tbody><tr><td><table border="0" width="100%" cellpadding="3" cellspacing="0">
<tbody><tr bgcolor="#eeeeee"><td align="RIGHT" valign="top" nowrap="" width="50%" rowspan="2">
<font size="2" face="Arial" color="#000099">
<a name="16"><b>גליה</b></a>
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=%E2%EC%E9%E4"><img src="https://rotter.net/forum/Images/1_star.gif" border="0" alt="לחץ כאן להצגת דירוג המשתמש"></a><br>
<font size="1">חבר מתאריך 3.5.20</font><br>
<font size="1">663 הודעות</font>, <font size="1" color="006633"> <b>2 מדרגים</b></font>, <font color="red" size="1"> <b>4 נקודות. &nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=%E2%EC%E9%E4"><font color="000099" size="-1"><u>ראה משוב</u></font></a></b></font></font></td><td align="LEFT" valign="top" width="50%" nowrap=""><font size="1" face="Arial" color="#000099"><font color="black">יום שני ז' בניסן תשפ''ד &nbsp;&nbsp;</font>
<font color="red">15:03</font> &nbsp; <font color="#eeeeee" size="1"> </font>15.04.24</font>&nbsp;&nbsp;&nbsp;</td></tr>
<tr bgcolor="#eeeeee"><td align="LEFT">
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=send_mesg&amp;userid=%E2%EC%E9%E4" target="_new"><img src="https://rotter.net/forum/Images/mesg.gif" border="0" title="לחץ לשליחת הודעה פרטית למשתמש"></a> <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=user_profiles&amp;user=%E2%EC%E9%E4"><img src="https://rotter.net/forum/Images/profile_small.gif" title="לחץ להצגת פרופיל המשתמש" border="0"></a><a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=add_buddy&amp;user=%25E2%25EC%25E9%25E4&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/mesg_add_buddy.gif" title="לחץ להוספת משתמש זה לרשימת החברים שלך" border="0"></a>
<a href="javascript:makeRemote('https://rotter.net/cgi-bin/forum/Lib/view_user_kartis.pl?user=%E2%EC%E9%E4')">
<img src="https://rotter.net/forum/Images/kartis.gif" border="0" alt="כרטיס אישי"></a>&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_ip&amp;forum=scoops1&amp;om=845227&amp;omm=16&amp;name=%E2%EC%E9%E4"><img src="https://rotter.net/forum/Images/ip.gif" border="0" alt="עבור לצ'אט"></a>
&nbsp;</td></tr>
<tr bgcolor="#FDFDFD"><td colspan="2" width="100%">
<font size="2" face="Arial" color="#000099">
&nbsp;&nbsp;<font class="text16b">16. בדיוק בפרט שהוא אנטישמי&nbsp;&nbsp;</font><br>
<font size="1" face="Arial" color="#000099"><a href="#14">בתגובה להודעה מספר 14</a></font><br>&nbsp;<br>
<table border="0" cellpadding="5" cellspacing="0" width="70%" style="display: inline-table;">
<tbody><tr><td valign="top" width="50" nowrap="">&nbsp;&nbsp;</td><td valign="top" width="100%">
<font size="2" face="Arial" color="#000099"><font class="text15"><b> <br> </b><p> <br> </p></font></font></td></tr></tbody></table>
<br></font></td></tr><tr bgcolor="#eeeeee"><td align="right" valign="top" nowrap="">
<font size="1" face="Arial" color="#000099">
&nbsp; <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=edit&amp;forum=scoops1&amp;om=845227&amp;omm=16"><img src="https://rotter.net/forum/Images/edit.gif" border="0"></a> &nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=post&amp;forum=scoops1&amp;om=845227&amp;omm=16"><font size="1" face="Arial" color="#000099"><img src="https://rotter.net/forum/Images/response.gif" border="0"></font></a><font size="1" face="Arial" color="#000099"> &nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=read_count&amp;om=845227&amp;forum=scoops1&amp;viewmode=all"><img src="https://rotter.net/forum/Images/all.gif" border="0"></a></font><font size="1">&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=list&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/gobk.gif" border="0"></a>
&nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?quote=not_empty&amp;az=post&amp;forum=scoops1&amp;om=845227&amp;omm=16"><font size="1" face="Arial" color="#000099"> תגובה עם ציטוט </font></a>&nbsp; | <a href="javascript:updatePropertyDisplay('16')"><font face="Arial" color="#000099">תגובה מהירה</font></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcadmin.cgi?az=admin_board_manager&amp;command=admin_remove_messages&amp;forum=scoops1&amp;thread_select=845227&amp;selected=16" onclick="return confirm('למחוק תגובה?')"><font size="1" face="Arial" color="#000099">(ניהול: מחק תגובה)</font></a></font></font></td>
<td align="left" nowrap="">
<font size="1" face="Arial" color="#000099"><br>
מכתב זה והנלווה אליו, על אחריות ועל דעת הכותב בלבד
</font></td></tr></tbody></table></td></tr></tbody></table>
</td></tr></tbody></table>
</td></tr></tbody></table>
<table border="0" width="100%" cellpadding="1" cellspacing="0"><tbody><tr>
<td width="54"><img src="https://rotter.net/forum/Images/blank.gif" width="54" height="10"></td><td width="100%">
<table border="0" width="100%" cellpadding="0" cellspacing="0" bgcolor="#000000">
<tbody><tr><td><table border="0" width="100%" cellpadding="1" cellspacing="0">
<tbody><tr><td><table border="0" width="100%" cellpadding="3" cellspacing="0">
<tbody><tr bgcolor="#eeeeee"><td align="RIGHT" valign="top" nowrap="" width="50%" rowspan="2">
<font size="2" face="Arial" color="#000099">
<a name="17"><b>the hawk</b></a>
<br>
<font size="1">חבר מתאריך 28.8.18</font><br>
<font size="1">18539 הודעות</font></font></td><td align="LEFT" valign="top" width="50%" nowrap=""><font size="1" face="Arial" color="#000099"><font color="black">יום שני ז' בניסן תשפ''ד &nbsp;&nbsp;</font>
<font color="red">15:04</font> &nbsp; <font color="#eeeeee" size="1"> </font>15.04.24</font>&nbsp;&nbsp;&nbsp;</td></tr>
<tr bgcolor="#eeeeee"><td align="LEFT">
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=send_mesg&amp;userid=the%20hawk" target="_new"><img src="https://rotter.net/forum/Images/mesg.gif" border="0" title="לחץ לשליחת הודעה פרטית למשתמש"></a> <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=user_profiles&amp;user=the%20hawk"><img src="https://rotter.net/forum/Images/profile_small.gif" title="לחץ להצגת פרופיל המשתמש" border="0"></a><a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=add_buddy&amp;user=the%2520hawk&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/mesg_add_buddy.gif" title="לחץ להוספת משתמש זה לרשימת החברים שלך" border="0"></a>
<a href="javascript:makeRemote('https://rotter.net/cgi-bin/forum/Lib/view_user_kartis.pl?user=the%20hawk')">
<img src="https://rotter.net/forum/Images/kartis.gif" border="0" alt="כרטיס אישי"></a>&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_ip&amp;forum=scoops1&amp;om=845227&amp;omm=17&amp;name=the%20hawk"><img src="https://rotter.net/forum/Images/ip.gif" border="0" alt="עבור לצ'אט"></a>
&nbsp;</td></tr>
<tr bgcolor="#FDFDFD"><td colspan="2" width="100%">
<font size="2" face="Arial" color="#000099">
&nbsp;&nbsp;<font class="text16b">17. המטיף המטפטף&nbsp;&nbsp;</font><br>
<font size="1" face="Arial" color="#000099"><a href="#16">בתגובה להודעה מספר 16</a></font><br>&nbsp;<br>
<table border="0" cellpadding="5" cellspacing="0" width="70%" style="display: inline-table;">
<tbody><tr><td valign="top" width="50" nowrap="">&nbsp;&nbsp;</td><td valign="top" width="100%">
<font size="2" face="Arial" color="#000099"><font class="text15"><b> <br> </b><p> <br> </p></font></font></td></tr></tbody></table>
<br></font></td></tr><tr bgcolor="#eeeeee"><td align="right" valign="top" nowrap="">
<font size="1" face="Arial" color="#000099">
&nbsp; <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=edit&amp;forum=scoops1&amp;om=845227&amp;omm=17"><img src="https://rotter.net/forum/Images/edit.gif" border="0"></a> &nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=post&amp;forum=scoops1&amp;om=845227&amp;omm=17"><font size="1" face="Arial" color="#000099"><img src="https://rotter.net/forum/Images/response.gif" border="0"></font></a><font size="1" face="Arial" color="#000099"> &nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=read_count&amp;om=845227&amp;forum=scoops1&amp;viewmode=all"><img src="https://rotter.net/forum/Images/all.gif" border="0"></a></font><font size="1">&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=list&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/gobk.gif" border="0"></a>
&nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?quote=not_empty&amp;az=post&amp;forum=scoops1&amp;om=845227&amp;omm=17"><font size="1" face="Arial" color="#000099"> תגובה עם ציטוט </font></a>&nbsp; | <a href="javascript:updatePropertyDisplay('17')"><font face="Arial" color="#000099">תגובה מהירה</font></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcadmin.cgi?az=admin_board_manager&amp;command=admin_remove_messages&amp;forum=scoops1&amp;thread_select=845227&amp;selected=17" onclick="return confirm('למחוק תגובה?')"><font size="1" face="Arial" color="#000099">(ניהול: מחק תגובה)</font></a></font></font></td>
<td align="left" nowrap="">
<font size="1" face="Arial" color="#000099"><br>
מכתב זה והנלווה אליו, על אחריות ועל דעת הכותב בלבד
</font></td></tr></tbody></table></td></tr></tbody></table>
</td></tr></tbody></table>
</td></tr></tbody></table>
<table border="0" width="100%" cellpadding="1" cellspacing="0"><tbody><tr>
<td width="54"><img src="https://rotter.net/forum/Images/blank.gif" width="54" height="10"></td><td width="100%">
<table border="0" width="100%" cellpadding="0" cellspacing="0" bgcolor="#000000">
<tbody><tr><td><table border="0" width="100%" cellpadding="1" cellspacing="0">
<tbody><tr><td><table border="0" width="100%" cellpadding="3" cellspacing="0">
<tbody><tr bgcolor="#eeeeee"><td align="RIGHT" valign="top" nowrap="" width="50%" rowspan="2">
<font size="2" face="Arial" color="#000099">
<a name="41"><b>דמו</b></a>
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=%E3%EE%E5"><img src="https://rotter.net/forum/Images/5_star.gif" border="0" alt="לחץ כאן להצגת דירוג המשתמש"></a><br>
<font size="1">חבר מתאריך 17.2.19</font><br>
<font size="1">11784 הודעות</font>, <font size="1" color="006633"> <b>45 מדרגים</b></font>, <font color="red" size="1"> <b>81 נקודות. &nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=%E3%EE%E5"><font color="000099" size="-1"><u>ראה משוב</u></font></a></b></font></font></td><td align="LEFT" valign="top" width="50%" nowrap=""><font size="1" face="Arial" color="#000099"><font color="black">יום שני ז' בניסן תשפ''ד &nbsp;&nbsp;</font>
<font color="red">16:23</font> &nbsp; <font color="#eeeeee" size="1"> </font>15.04.24</font>&nbsp;&nbsp;&nbsp;</td></tr>
<tr bgcolor="#eeeeee"><td align="LEFT">
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=send_mesg&amp;userid=%E3%EE%E5" target="_new"><img src="https://rotter.net/forum/Images/mesg.gif" border="0" title="לחץ לשליחת הודעה פרטית למשתמש"></a> <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=user_profiles&amp;user=%E3%EE%E5"><img src="https://rotter.net/forum/Images/profile_small.gif" title="לחץ להצגת פרופיל המשתמש" border="0"></a><a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=add_buddy&amp;user=%25E3%25EE%25E5&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/mesg_add_buddy.gif" title="לחץ להוספת משתמש זה לרשימת החברים שלך" border="0"></a>
<a href="javascript:makeRemote('https://rotter.net/cgi-bin/forum/Lib/view_user_kartis.pl?user=%E3%EE%E5')">
<img src="https://rotter.net/forum/Images/kartis.gif" border="0" alt="כרטיס אישי"></a>&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_ip&amp;forum=scoops1&amp;om=845227&amp;omm=41&amp;name=%E3%EE%E5"><img src="https://rotter.net/forum/Images/ip.gif" border="0" alt="עבור לצ'אט"></a>
&nbsp;</td></tr>
<tr bgcolor="#FDFDFD"><td colspan="2" width="100%">
<font size="2" face="Arial" color="#000099">
&nbsp;&nbsp;<font class="text16b">41. שכל המטיפים האנטישמיים ככה יחטפו ...ולא שהאיסלמיסטים האנטישמים באוסטרליה טובים יותר כך שממש לא אצטער מתגובת נגד...&nbsp;&nbsp;</font><br>
<font size="1" face="Arial" color="#000099"><a href="#16">בתגובה להודעה מספר 16</a></font><br>&nbsp;<br>
<table border="0" cellpadding="5" cellspacing="0" width="70%" style="display: inline-table;">
<tbody><tr><td valign="top" width="50" nowrap="">&nbsp;&nbsp;</td><td valign="top" width="100%">
<font size="2" face="Arial" color="#000099"><font class="text15"><b> <br> </b><p> <br> </p></font></font></td></tr></tbody></table>
<br></font></td></tr><tr bgcolor="#eeeeee"><td align="right" valign="top" nowrap="">
<font size="1" face="Arial" color="#000099">
&nbsp; <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=edit&amp;forum=scoops1&amp;om=845227&amp;omm=41"><img src="https://rotter.net/forum/Images/edit.gif" border="0"></a> &nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=post&amp;forum=scoops1&amp;om=845227&amp;omm=41"><font size="1" face="Arial" color="#000099"><img src="https://rotter.net/forum/Images/response.gif" border="0"></font></a><font size="1" face="Arial" color="#000099"> &nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=read_count&amp;om=845227&amp;forum=scoops1&amp;viewmode=all"><img src="https://rotter.net/forum/Images/all.gif" border="0"></a></font><font size="1">&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=list&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/gobk.gif" border="0"></a>
&nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?quote=not_empty&amp;az=post&amp;forum=scoops1&amp;om=845227&amp;omm=41"><font size="1" face="Arial" color="#000099"> תגובה עם ציטוט </font></a>&nbsp; | <a href="javascript:updatePropertyDisplay('41')"><font face="Arial" color="#000099">תגובה מהירה</font></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcadmin.cgi?az=admin_board_manager&amp;command=admin_remove_messages&amp;forum=scoops1&amp;thread_select=845227&amp;selected=41" onclick="return confirm('למחוק תגובה?')"><font size="1" face="Arial" color="#000099">(ניהול: מחק תגובה)</font></a></font></font></td>
<td align="left" nowrap="">
<font size="1" face="Arial" color="#000099"><br>
מכתב זה והנלווה אליו, על אחריות ועל דעת הכותב בלבד
</font></td></tr></tbody></table></td></tr></tbody></table>
</td></tr></tbody></table>
</td></tr></tbody></table>
<table border="0" width="100%" cellpadding="1" cellspacing="0"><tbody><tr>
<td width="72"><img src="https://rotter.net/forum/Images/blank.gif" width="72" height="10"></td><td width="100%">
<table border="0" width="100%" cellpadding="0" cellspacing="0" bgcolor="#000000">
<tbody><tr><td><table border="0" width="100%" cellpadding="1" cellspacing="0">
<tbody><tr><td><table border="0" width="100%" cellpadding="3" cellspacing="0">
<tbody><tr bgcolor="#eeeeee"><td align="RIGHT" valign="top" nowrap="" width="50%" rowspan="2">
<font size="2" face="Arial" color="#000099">
<a name="44"><b>גליה</b></a>
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=%E2%EC%E9%E4"><img src="https://rotter.net/forum/Images/1_star.gif" border="0" alt="לחץ כאן להצגת דירוג המשתמש"></a><br>
<font size="1">חבר מתאריך 3.5.20</font><br>
<font size="1">663 הודעות</font>, <font size="1" color="006633"> <b>2 מדרגים</b></font>, <font color="red" size="1"> <b>4 נקודות. &nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=%E2%EC%E9%E4"><font color="000099" size="-1"><u>ראה משוב</u></font></a></b></font></font></td><td align="LEFT" valign="top" width="50%" nowrap=""><font size="1" face="Arial" color="#000099"><font color="black">יום שני ז' בניסן תשפ''ד &nbsp;&nbsp;</font>
<font color="red">16:26</font> &nbsp; <font color="#eeeeee" size="1"> </font>15.04.24</font>&nbsp;&nbsp;&nbsp;</td></tr>
<tr bgcolor="#eeeeee"><td align="LEFT">
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=send_mesg&amp;userid=%E2%EC%E9%E4" target="_new"><img src="https://rotter.net/forum/Images/mesg.gif" border="0" title="לחץ לשליחת הודעה פרטית למשתמש"></a> <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=user_profiles&amp;user=%E2%EC%E9%E4"><img src="https://rotter.net/forum/Images/profile_small.gif" title="לחץ להצגת פרופיל המשתמש" border="0"></a><a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=add_buddy&amp;user=%25E2%25EC%25E9%25E4&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/mesg_add_buddy.gif" title="לחץ להוספת משתמש זה לרשימת החברים שלך" border="0"></a>
<a href="javascript:makeRemote('https://rotter.net/cgi-bin/forum/Lib/view_user_kartis.pl?user=%E2%EC%E9%E4')">
<img src="https://rotter.net/forum/Images/kartis.gif" border="0" alt="כרטיס אישי"></a>&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_ip&amp;forum=scoops1&amp;om=845227&amp;omm=44&amp;name=%E2%EC%E9%E4"><img src="https://rotter.net/forum/Images/ip.gif" border="0" alt="עבור לצ'אט"></a>
&nbsp;</td></tr>
<tr bgcolor="#FDFDFD"><td colspan="2" width="100%">
<font size="2" face="Arial" color="#000099">
&nbsp;&nbsp;<font class="text16b">44. בדיוק&nbsp;&nbsp;</font><br>
<font size="1" face="Arial" color="#000099"><a href="#41">בתגובה להודעה מספר 41</a></font><br>&nbsp;<br>
<table border="0" cellpadding="5" cellspacing="0" width="70%" style="display: inline-table;">
<tbody><tr><td valign="top" width="50" nowrap="">&nbsp;&nbsp;</td><td valign="top" width="100%">
<font size="2" face="Arial" color="#000099"><font class="text15"><b> <br> </b><p> <br> </p></font></font></td></tr></tbody></table>
<br></font></td></tr><tr bgcolor="#eeeeee"><td align="right" valign="top" nowrap="">
<font size="1" face="Arial" color="#000099">
&nbsp; <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=edit&amp;forum=scoops1&amp;om=845227&amp;omm=44"><img src="https://rotter.net/forum/Images/edit.gif" border="0"></a> &nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=post&amp;forum=scoops1&amp;om=845227&amp;omm=44"><font size="1" face="Arial" color="#000099"><img src="https://rotter.net/forum/Images/response.gif" border="0"></font></a><font size="1" face="Arial" color="#000099"> &nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=read_count&amp;om=845227&amp;forum=scoops1&amp;viewmode=all"><img src="https://rotter.net/forum/Images/all.gif" border="0"></a></font><font size="1">&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=list&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/gobk.gif" border="0"></a>
&nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?quote=not_empty&amp;az=post&amp;forum=scoops1&amp;om=845227&amp;omm=44"><font size="1" face="Arial" color="#000099"> תגובה עם ציטוט </font></a>&nbsp; | <a href="javascript:updatePropertyDisplay('44')"><font face="Arial" color="#000099">תגובה מהירה</font></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcadmin.cgi?az=admin_board_manager&amp;command=admin_remove_messages&amp;forum=scoops1&amp;thread_select=845227&amp;selected=44" onclick="return confirm('למחוק תגובה?')"><font size="1" face="Arial" color="#000099">(ניהול: מחק תגובה)</font></a></font></font></td>
<td align="left" nowrap="">
<font size="1" face="Arial" color="#000099"><br>
מכתב זה והנלווה אליו, על אחריות ועל דעת הכותב בלבד
</font></td></tr></tbody></table></td></tr></tbody></table>
</td></tr></tbody></table>
</td></tr></tbody></table>
<table border="0" width="100%" cellpadding="1" cellspacing="0"><tbody><tr>
<td width="18"><img src="https://rotter.net/forum/Images/blank.gif" width="18" height="10"></td><td width="100%">
<table border="0" width="100%" cellpadding="0" cellspacing="0" bgcolor="#000000">
<tbody><tr><td><table border="0" width="100%" cellpadding="1" cellspacing="0">
<tbody><tr><td><table border="0" width="100%" cellpadding="3" cellspacing="0">
<tbody><tr bgcolor="#eeeeee"><td align="RIGHT" valign="top" nowrap="" width="50%" rowspan="2">
<font size="2" face="Arial" color="#000099">
<a name="25"><b>4X6GX</b></a>
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=4X6GX"><img src="https://rotter.net/forum/Images/4_star.gif" border="0" alt="לחץ כאן להצגת דירוג המשתמש"></a><br>
<font size="1">חבר מתאריך 14.9.16</font><br>
<font size="1">7317 הודעות</font>, <font size="1" color="006633"> <b>22 מדרגים</b></font>, <font color="red" size="1"> <b>37 נקודות. &nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=4X6GX"><font color="000099" size="-1"><u>ראה משוב</u></font></a></b></font></font></td><td align="LEFT" valign="top" width="50%" nowrap=""><font size="1" face="Arial" color="#000099"><font color="black">יום שני ז' בניסן תשפ''ד &nbsp;&nbsp;</font>
<font color="red">15:13</font> &nbsp; <font color="#eeeeee" size="1"> </font>15.04.24</font>&nbsp;&nbsp;&nbsp;</td></tr>
<tr bgcolor="#eeeeee"><td align="LEFT">
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=send_mesg&amp;userid=4X6GX" target="_new"><img src="https://rotter.net/forum/Images/mesg.gif" border="0" title="לחץ לשליחת הודעה פרטית למשתמש"></a> <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=user_profiles&amp;user=4X6GX"><img src="https://rotter.net/forum/Images/profile_small.gif" title="לחץ להצגת פרופיל המשתמש" border="0"></a><a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=add_buddy&amp;user=4X6GX&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/mesg_add_buddy.gif" title="לחץ להוספת משתמש זה לרשימת החברים שלך" border="0"></a>
<a href="javascript:makeRemote('https://rotter.net/cgi-bin/forum/Lib/view_user_kartis.pl?user=4X6GX')">
<img src="https://rotter.net/forum/Images/kartis.gif" border="0" alt="כרטיס אישי"></a>&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_ip&amp;forum=scoops1&amp;om=845227&amp;omm=25&amp;name=4X6GX"><img src="https://rotter.net/forum/Images/ip.gif" border="0" alt="עבור לצ'אט"></a>
&nbsp;</td></tr>
<tr bgcolor="#FDFDFD"><td colspan="2" width="100%">
<font size="2" face="Arial" color="#000099">
&nbsp;&nbsp;<font class="text16b">25. WIN WIN - פחות שני אנטישמיים חופשיים בעולם&nbsp;&nbsp;</font><br>
<font size="1" face="Arial" color="#000099"><a href="#1">בתגובה להודעה מספר 1</a></font><br>&nbsp;<br>
<table border="0" cellpadding="5" cellspacing="0" width="70%" style="display: inline-table;">
<tbody><tr><td valign="top" width="50" nowrap="">&nbsp;&nbsp;</td><td valign="top" width="100%">
<font size="2" face="Arial" color="#000099"><font class="text15"><b> <br> </b><p> <br> </p></font></font></td></tr></tbody></table>
<br></font></td></tr><tr bgcolor="#eeeeee"><td align="right" valign="top" nowrap="">
<font size="1" face="Arial" color="#000099">
&nbsp; <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=edit&amp;forum=scoops1&amp;om=845227&amp;omm=25"><img src="https://rotter.net/forum/Images/edit.gif" border="0"></a> &nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=post&amp;forum=scoops1&amp;om=845227&amp;omm=25"><font size="1" face="Arial" color="#000099"><img src="https://rotter.net/forum/Images/response.gif" border="0"></font></a><font size="1" face="Arial" color="#000099"> &nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=read_count&amp;om=845227&amp;forum=scoops1&amp;viewmode=all"><img src="https://rotter.net/forum/Images/all.gif" border="0"></a></font><font size="1">&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=list&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/gobk.gif" border="0"></a>
&nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?quote=not_empty&amp;az=post&amp;forum=scoops1&amp;om=845227&amp;omm=25"><font size="1" face="Arial" color="#000099"> תגובה עם ציטוט </font></a>&nbsp; | <a href="javascript:updatePropertyDisplay('25')"><font face="Arial" color="#000099">תגובה מהירה</font></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcadmin.cgi?az=admin_board_manager&amp;command=admin_remove_messages&amp;forum=scoops1&amp;thread_select=845227&amp;selected=25" onclick="return confirm('למחוק תגובה?')"><font size="1" face="Arial" color="#000099">(ניהול: מחק תגובה)</font></a></font></font></td>
<td align="left" nowrap="">
<font size="1" face="Arial" color="#000099"><br>
מכתב זה והנלווה אליו, על אחריות ועל דעת הכותב בלבד
</font></td></tr></tbody></table></td></tr></tbody></table>
</td></tr></tbody></table>
</td></tr></tbody></table>
<table border="0" width="100%" cellpadding="1" cellspacing="0">
<tbody><tr><td><table border="0" width="100%" cellpadding="1" cellspacing="0" bgcolor="#000000">
<tbody><tr><td><table border="0" width="100%" cellpadding="3" cellspacing="0">
<tbody><tr bgcolor="#eeeeee"><td align="RIGHT" valign="top" nowrap="" width="50%" rowspan="2">
<font size="2" face="Arial" color="#000099">
<a name="2"><b>קונטרס הספקות</b></a>
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=%F7%E5%F0%E8%F8%F1%20%E4%F1%F4%F7%E5%FA"><img src="https://rotter.net/forum/Images/5_star.gif" border="0" alt="לחץ כאן להצגת דירוג המשתמש"></a><br>
<font size="1">חבר מתאריך 16.4.19</font><br>
<font size="1">13552 הודעות</font>, <font size="1" color="006633"> <b>134 מדרגים</b></font>, <font color="red" size="1"> <b>265 נקודות. &nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=%F7%E5%F0%E8%F8%F1%20%E4%F1%F4%F7%E5%FA"><font color="000099" size="-1"><u>ראה משוב</u></font></a></b></font></font></td><td align="LEFT" valign="top" width="50%" nowrap=""><font size="1" face="Arial" color="#000099"><font color="black">יום שני ז' בניסן תשפ''ד &nbsp;&nbsp;</font>
<font color="red">14:51</font> &nbsp; <font color="#eeeeee" size="1"> </font>15.04.24</font>&nbsp;&nbsp;&nbsp;</td></tr>
<tr bgcolor="#eeeeee"><td align="LEFT">
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=send_mesg&amp;userid=%F7%E5%F0%E8%F8%F1%20%E4%F1%F4%F7%E5%FA" target="_new"><img src="https://rotter.net/forum/Images/mesg.gif" border="0" title="לחץ לשליחת הודעה פרטית למשתמש"></a> <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=user_profiles&amp;user=%F7%E5%F0%E8%F8%F1%20%E4%F1%F4%F7%E5%FA"><img src="https://rotter.net/forum/Images/profile_small.gif" title="לחץ להצגת פרופיל המשתמש" border="0"></a><a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=add_buddy&amp;user=%25F7%25E5%25F0%25E8%25F8%25F1%2520%25E4%25F1%25F4%25F7%25E5%25FA&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/mesg_add_buddy.gif" title="לחץ להוספת משתמש זה לרשימת החברים שלך" border="0"></a>
<a href="javascript:makeRemote('https://rotter.net/cgi-bin/forum/Lib/view_user_kartis.pl?user=%F7%E5%F0%E8%F8%F1%20%E4%F1%F4%F7%E5%FA')">
<img src="https://rotter.net/forum/Images/kartis.gif" border="0" alt="כרטיס אישי"></a>&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_ip&amp;forum=scoops1&amp;om=845227&amp;omm=2&amp;name=%F7%E5%F0%E8%F8%F1%20%E4%F1%F4%F7%E5%FA"><img src="https://rotter.net/forum/Images/ip.gif" border="0" alt="עבור לצ'אט"></a>
&nbsp;</td></tr>
<tr bgcolor="#FDFDFD"><td colspan="2" width="100%">
<font size="2" face="Arial" color="#000099">
&nbsp;&nbsp;<font class="text16b">2. מה נאמר… האנטישמים שתומכים במוסלמים מקבלים את השיעור מהמוסלמים עצמם…&nbsp;&nbsp;</font><br>
<font size="1" face="Arial" color="#000099"><a href="#0">בתגובה להודעה מספר 0</a></font><br>&nbsp;<br>
<table border="0" cellpadding="5" cellspacing="0" width="70%" style="display: inline-table;">
<tbody><tr><td valign="top" width="50" nowrap="">&nbsp;&nbsp;</td><td valign="top" width="100%">
<font size="2" face="Arial" color="#000099"><font class="text15"><b> <br> </b><p> <br> </p></font></font></td></tr></tbody></table>
<br></font></td></tr><tr bgcolor="#eeeeee"><td align="right" valign="top" nowrap="">
<font size="1" face="Arial" color="#000099">
&nbsp; <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=edit&amp;forum=scoops1&amp;om=845227&amp;omm=2"><img src="https://rotter.net/forum/Images/edit.gif" border="0"></a> &nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=post&amp;forum=scoops1&amp;om=845227&amp;omm=2"><font size="1" face="Arial" color="#000099"><img src="https://rotter.net/forum/Images/response.gif" border="0"></font></a><font size="1" face="Arial" color="#000099"> &nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=read_count&amp;om=845227&amp;forum=scoops1&amp;viewmode=all"><img src="https://rotter.net/forum/Images/all.gif" border="0"></a></font><font size="1">&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=list&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/gobk.gif" border="0"></a>
&nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?quote=not_empty&amp;az=post&amp;forum=scoops1&amp;om=845227&amp;omm=2"><font size="1" face="Arial" color="#000099"> תגובה עם ציטוט </font></a>&nbsp; | <a href="javascript:updatePropertyDisplay('2')"><font face="Arial" color="#000099">תגובה מהירה</font></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcadmin.cgi?az=admin_board_manager&amp;command=admin_remove_messages&amp;forum=scoops1&amp;thread_select=845227&amp;selected=2" onclick="return confirm('למחוק תגובה?')"><font size="1" face="Arial" color="#000099">(ניהול: מחק תגובה)</font></a></font></font></td>
<td align="left" nowrap="">
<font size="1" face="Arial" color="#000099"><br>
מכתב זה והנלווה אליו, על אחריות ועל דעת הכותב בלבד
</font></td></tr></tbody></table></td></tr></tbody></table>
</td></tr></tbody></table>
<table border="0" width="100%" cellpadding="1" cellspacing="0"><tbody><tr>
<td width="18"><img src="https://rotter.net/forum/Images/blank.gif" width="18" height="10"></td><td width="100%">
<table border="0" width="100%" cellpadding="0" cellspacing="0" bgcolor="#000000">
<tbody><tr><td><table border="0" width="100%" cellpadding="1" cellspacing="0">
<tbody><tr><td><table border="0" width="100%" cellpadding="3" cellspacing="0">
<tbody><tr bgcolor="#eeeeee"><td align="RIGHT" valign="top" nowrap="" width="50%" rowspan="2">
<font size="2" face="Arial" color="#000099">
<a name="15"><b>גליה</b></a>
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=%E2%EC%E9%E4"><img src="https://rotter.net/forum/Images/1_star.gif" border="0" alt="לחץ כאן להצגת דירוג המשתמש"></a><br>
<font size="1">חבר מתאריך 3.5.20</font><br>
<font size="1">663 הודעות</font>, <font size="1" color="006633"> <b>2 מדרגים</b></font>, <font color="red" size="1"> <b>4 נקודות. &nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=%E2%EC%E9%E4"><font color="000099" size="-1"><u>ראה משוב</u></font></a></b></font></font></td><td align="LEFT" valign="top" width="50%" nowrap=""><font size="1" face="Arial" color="#000099"><font color="black">יום שני ז' בניסן תשפ''ד &nbsp;&nbsp;</font>
<font color="red">15:02</font> &nbsp; <font color="#eeeeee" size="1"> </font>15.04.24</font>&nbsp;&nbsp;&nbsp;</td></tr>
<tr bgcolor="#eeeeee"><td align="LEFT">
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=send_mesg&amp;userid=%E2%EC%E9%E4" target="_new"><img src="https://rotter.net/forum/Images/mesg.gif" border="0" title="לחץ לשליחת הודעה פרטית למשתמש"></a> <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=user_profiles&amp;user=%E2%EC%E9%E4"><img src="https://rotter.net/forum/Images/profile_small.gif" title="לחץ להצגת פרופיל המשתמש" border="0"></a><a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=add_buddy&amp;user=%25E2%25EC%25E9%25E4&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/mesg_add_buddy.gif" title="לחץ להוספת משתמש זה לרשימת החברים שלך" border="0"></a>
<a href="javascript:makeRemote('https://rotter.net/cgi-bin/forum/Lib/view_user_kartis.pl?user=%E2%EC%E9%E4')">
<img src="https://rotter.net/forum/Images/kartis.gif" border="0" alt="כרטיס אישי"></a>&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_ip&amp;forum=scoops1&amp;om=845227&amp;omm=15&amp;name=%E2%EC%E9%E4"><img src="https://rotter.net/forum/Images/ip.gif" border="0" alt="עבור לצ'אט"></a>
&nbsp;</td></tr>
<tr bgcolor="#FDFDFD"><td colspan="2" width="100%">
<font size="2" face="Arial" color="#000099">
&nbsp;&nbsp;<font class="text16b">15. בדיוק&nbsp;&nbsp;</font><br>
<font size="1" face="Arial" color="#000099"><a href="#2">בתגובה להודעה מספר 2</a></font><br>&nbsp;<br>
<table border="0" cellpadding="5" cellspacing="0" width="70%" style="display: inline-table;">
<tbody><tr><td valign="top" width="50" nowrap="">&nbsp;&nbsp;</td><td valign="top" width="100%">
<font size="2" face="Arial" color="#000099"><font class="text15"><b> <br> </b><p> <br> </p></font></font></td></tr></tbody></table>
<br></font></td></tr><tr bgcolor="#eeeeee"><td align="right" valign="top" nowrap="">
<font size="1" face="Arial" color="#000099">
&nbsp; <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=edit&amp;forum=scoops1&amp;om=845227&amp;omm=15"><img src="https://rotter.net/forum/Images/edit.gif" border="0"></a> &nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=post&amp;forum=scoops1&amp;om=845227&amp;omm=15"><font size="1" face="Arial" color="#000099"><img src="https://rotter.net/forum/Images/response.gif" border="0"></font></a><font size="1" face="Arial" color="#000099"> &nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=read_count&amp;om=845227&amp;forum=scoops1&amp;viewmode=all"><img src="https://rotter.net/forum/Images/all.gif" border="0"></a></font><font size="1">&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=list&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/gobk.gif" border="0"></a>
&nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?quote=not_empty&amp;az=post&amp;forum=scoops1&amp;om=845227&amp;omm=15"><font size="1" face="Arial" color="#000099"> תגובה עם ציטוט </font></a>&nbsp; | <a href="javascript:updatePropertyDisplay('15')"><font face="Arial" color="#000099">תגובה מהירה</font></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcadmin.cgi?az=admin_board_manager&amp;command=admin_remove_messages&amp;forum=scoops1&amp;thread_select=845227&amp;selected=15" onclick="return confirm('למחוק תגובה?')"><font size="1" face="Arial" color="#000099">(ניהול: מחק תגובה)</font></a></font></font></td>
<td align="left" nowrap="">
<font size="1" face="Arial" color="#000099"><br>
מכתב זה והנלווה אליו, על אחריות ועל דעת הכותב בלבד
</font></td></tr></tbody></table></td></tr></tbody></table>
</td></tr></tbody></table>
</td></tr></tbody></table>
<table border="0" width="100%" cellpadding="1" cellspacing="0"><tbody><tr>
<td width="18"><img src="https://rotter.net/forum/Images/blank.gif" width="18" height="10"></td><td width="100%">
<table border="0" width="100%" cellpadding="0" cellspacing="0" bgcolor="#000000">
<tbody><tr><td><table border="0" width="100%" cellpadding="1" cellspacing="0">
<tbody><tr><td><table border="0" width="100%" cellpadding="3" cellspacing="0">
<tbody><tr bgcolor="#eeeeee"><td align="RIGHT" valign="top" nowrap="" width="50%" rowspan="2">
<font size="2" face="Arial" color="#000099">
<a name="34"><b>צינימיני</b></a>
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=%F6%E9%F0%E9%EE%E9%F0%E9"><img src="https://rotter.net/forum/Images/4_star.gif" border="0" alt="לחץ כאן להצגת דירוג המשתמש"></a><br>
<font size="1">חבר מתאריך 6.8.20</font><br>
<font size="1">4704 הודעות</font>, <font size="1" color="006633"> <b>23 מדרגים</b></font>, <font color="red" size="1"> <b>33 נקודות. &nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=%F6%E9%F0%E9%EE%E9%F0%E9"><font color="000099" size="-1"><u>ראה משוב</u></font></a></b></font></font></td><td align="LEFT" valign="top" width="50%" nowrap=""><font size="1" face="Arial" color="#000099"><font color="black">יום שני ז' בניסן תשפ''ד &nbsp;&nbsp;</font>
<font color="red">15:33</font> &nbsp; <font color="#eeeeee" size="1"> </font>15.04.24</font>&nbsp;&nbsp;&nbsp;</td></tr>
<tr bgcolor="#eeeeee"><td align="LEFT">
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=send_mesg&amp;userid=%F6%E9%F0%E9%EE%E9%F0%E9" target="_new"><img src="https://rotter.net/forum/Images/mesg.gif" border="0" title="לחץ לשליחת הודעה פרטית למשתמש"></a> <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=user_profiles&amp;user=%F6%E9%F0%E9%EE%E9%F0%E9"><img src="https://rotter.net/forum/Images/profile_small.gif" title="לחץ להצגת פרופיל המשתמש" border="0"></a><a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=add_buddy&amp;user=%25F6%25E9%25F0%25E9%25EE%25E9%25F0%25E9&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/mesg_add_buddy.gif" title="לחץ להוספת משתמש זה לרשימת החברים שלך" border="0"></a>
<a href="javascript:makeRemote('https://rotter.net/cgi-bin/forum/Lib/view_user_kartis.pl?user=%F6%E9%F0%E9%EE%E9%F0%E9')">
<img src="https://rotter.net/forum/Images/kartis.gif" border="0" alt="כרטיס אישי"></a>&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_ip&amp;forum=scoops1&amp;om=845227&amp;omm=34&amp;name=%F6%E9%F0%E9%EE%E9%F0%E9"><img src="https://rotter.net/forum/Images/ip.gif" border="0" alt="עבור לצ'אט"></a>
&nbsp;</td></tr>
<tr bgcolor="#FDFDFD"><td colspan="2" width="100%">
<font size="2" face="Arial" color="#000099">
&nbsp;&nbsp;<font class="text16b">34. לצערו שם אין בגץ שישחרר אותו בגלל אורך סכין&nbsp;&nbsp;</font><br>
<font size="1" face="Arial" color="#000099"><a href="#2">בתגובה להודעה מספר 2</a></font><br>&nbsp;<br>
<table border="0" cellpadding="5" cellspacing="0" width="70%" style="display: inline-table;">
<tbody><tr><td valign="top" width="50" nowrap="">&nbsp;&nbsp;</td><td valign="top" width="100%">
<font size="2" face="Arial" color="#000099"><font class="text15"><b> <br> </b><p> <br> </p></font></font></td></tr></tbody></table>
<br></font></td></tr><tr bgcolor="#eeeeee"><td align="right" valign="top" nowrap="">
<font size="1" face="Arial" color="#000099">
&nbsp; <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=edit&amp;forum=scoops1&amp;om=845227&amp;omm=34"><img src="https://rotter.net/forum/Images/edit.gif" border="0"></a> &nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=post&amp;forum=scoops1&amp;om=845227&amp;omm=34"><font size="1" face="Arial" color="#000099"><img src="https://rotter.net/forum/Images/response.gif" border="0"></font></a><font size="1" face="Arial" color="#000099"> &nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=read_count&amp;om=845227&amp;forum=scoops1&amp;viewmode=all"><img src="https://rotter.net/forum/Images/all.gif" border="0"></a></font><font size="1">&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=list&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/gobk.gif" border="0"></a>
&nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?quote=not_empty&amp;az=post&amp;forum=scoops1&amp;om=845227&amp;omm=34"><font size="1" face="Arial" color="#000099"> תגובה עם ציטוט </font></a>&nbsp; | <a href="javascript:updatePropertyDisplay('34')"><font face="Arial" color="#000099">תגובה מהירה</font></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcadmin.cgi?az=admin_board_manager&amp;command=admin_remove_messages&amp;forum=scoops1&amp;thread_select=845227&amp;selected=34" onclick="return confirm('למחוק תגובה?')"><font size="1" face="Arial" color="#000099">(ניהול: מחק תגובה)</font></a></font></font></td>
<td align="left" nowrap="">
<font size="1" face="Arial" color="#000099"><br>
מכתב זה והנלווה אליו, על אחריות ועל דעת הכותב בלבד
</font></td></tr></tbody></table></td></tr></tbody></table>
</td></tr></tbody></table>
</td></tr></tbody></table>
<table border="0" width="100%" cellpadding="1" cellspacing="0">
<tbody><tr><td><table border="0" width="100%" cellpadding="1" cellspacing="0" bgcolor="#000000">
<tbody><tr><td><table border="0" width="100%" cellpadding="3" cellspacing="0">
<tbody><tr bgcolor="#eeeeee"><td align="RIGHT" valign="top" nowrap="" width="50%" rowspan="2">
<font size="2" face="Arial" color="#000099">
<a name="3"><b>עבד לעם קדוש</b></a>
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=%F2%E1%E3%20%EC%F2%ED%20%F7%E3%E5%F9"><img src="https://rotter.net/forum/Images/5_star.gif" border="0" alt="לחץ כאן להצגת דירוג המשתמש"></a><br>
<font size="1">חבר מתאריך 5.9.19</font><br>
<font size="1">71183 הודעות</font>, <font size="1" color="006633"> <b>260 מדרגים</b></font>, <font color="red" size="1"> <b>460 נקודות. &nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=%F2%E1%E3%20%EC%F2%ED%20%F7%E3%E5%F9"><font color="000099" size="-1"><u>ראה משוב</u></font></a></b></font></font></td><td align="LEFT" valign="top" width="50%" nowrap=""><font size="1" face="Arial" color="#000099"><font color="black">יום שני ז' בניסן תשפ''ד &nbsp;&nbsp;</font>
<font color="red">14:52</font> &nbsp; <font color="#eeeeee" size="1"> </font>15.04.24</font>&nbsp;&nbsp;&nbsp;</td></tr>
<tr bgcolor="#eeeeee"><td align="LEFT">
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=send_mesg&amp;userid=%F2%E1%E3%20%EC%F2%ED%20%F7%E3%E5%F9" target="_new"><img src="https://rotter.net/forum/Images/mesg.gif" border="0" title="לחץ לשליחת הודעה פרטית למשתמש"></a> <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=user_profiles&amp;user=%F2%E1%E3%20%EC%F2%ED%20%F7%E3%E5%F9"><img src="https://rotter.net/forum/Images/profile_small.gif" title="לחץ להצגת פרופיל המשתמש" border="0"></a><a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=add_buddy&amp;user=%25F2%25E1%25E3%2520%25EC%25F2%25ED%2520%25F7%25E3%25E5%25F9&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/mesg_add_buddy.gif" title="לחץ להוספת משתמש זה לרשימת החברים שלך" border="0"></a>
<a href="javascript:makeRemote('https://rotter.net/cgi-bin/forum/Lib/view_user_kartis.pl?user=%F2%E1%E3%20%EC%F2%ED%20%F7%E3%E5%F9')">
<img src="https://rotter.net/forum/Images/kartis.gif" border="0" alt="כרטיס אישי"></a>&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_ip&amp;forum=scoops1&amp;om=845227&amp;omm=3&amp;name=%F2%E1%E3%20%EC%F2%ED%20%F7%E3%E5%F9"><img src="https://rotter.net/forum/Images/ip.gif" border="0" alt="עבור לצ'אט"></a>
&nbsp;</td></tr>
<tr bgcolor="#FDFDFD"><td colspan="2" width="100%">
<font size="2" face="Arial" color="#000099">
&nbsp;&nbsp;<font class="text16b">3. בהצלחה לשני הצדדים&nbsp;&nbsp;</font><br>
<font size="1" face="Arial" color="#000099"><a href="#0">בתגובה להודעה מספר 0</a></font><br>&nbsp;<br>
<table border="0" cellpadding="5" cellspacing="0" width="70%" style="display: inline-table;">
<tbody><tr><td valign="top" width="50" nowrap="">&nbsp;&nbsp;</td><td valign="top" width="100%">
<font size="2" face="Arial" color="#000099"><font class="text15"><b> <br> <table bgcolor="fffaf4" border="1" cellspacing="0" width="600" valign="middle" cellpading="0">
<tbody><tr><td align="right" bgcolor="fffaf4">אנטישמי) נדקר בשידור חי על ידי צעיר מוסלמי</td></tr></tbody></table></b><p> <br> </p></font></font></td></tr></tbody></table>
<br></font></td></tr><tr bgcolor="#eeeeee"><td align="right" valign="top" nowrap="">
<font size="1" face="Arial" color="#000099">
&nbsp; <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=edit&amp;forum=scoops1&amp;om=845227&amp;omm=3"><img src="https://rotter.net/forum/Images/edit.gif" border="0"></a> &nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=post&amp;forum=scoops1&amp;om=845227&amp;omm=3"><font size="1" face="Arial" color="#000099"><img src="https://rotter.net/forum/Images/response.gif" border="0"></font></a><font size="1" face="Arial" color="#000099"> &nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=read_count&amp;om=845227&amp;forum=scoops1&amp;viewmode=all"><img src="https://rotter.net/forum/Images/all.gif" border="0"></a></font><font size="1">&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=list&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/gobk.gif" border="0"></a>
&nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?quote=not_empty&amp;az=post&amp;forum=scoops1&amp;om=845227&amp;omm=3"><font size="1" face="Arial" color="#000099"> תגובה עם ציטוט </font></a>&nbsp; | <a href="javascript:updatePropertyDisplay('3')"><font face="Arial" color="#000099">תגובה מהירה</font></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcadmin.cgi?az=admin_board_manager&amp;command=admin_remove_messages&amp;forum=scoops1&amp;thread_select=845227&amp;selected=3" onclick="return confirm('למחוק תגובה?')"><font size="1" face="Arial" color="#000099">(ניהול: מחק תגובה)</font></a></font></font></td>
<td align="left" nowrap="">
<font size="1" face="Arial" color="#000099"><br>
מכתב זה והנלווה אליו, על אחריות ועל דעת הכותב בלבד
</font></td></tr></tbody></table></td></tr></tbody></table>
</td></tr></tbody></table>
<table border="0" width="100%" cellpadding="1" cellspacing="0"><tbody><tr>
<td width="18"><img src="https://rotter.net/forum/Images/blank.gif" width="18" height="10"></td><td width="100%">
<table border="0" width="100%" cellpadding="0" cellspacing="0" bgcolor="#000000">
<tbody><tr><td><table border="0" width="100%" cellpadding="1" cellspacing="0">
<tbody><tr><td><table border="0" width="100%" cellpadding="3" cellspacing="0">
<tbody><tr bgcolor="#eeeeee"><td align="RIGHT" valign="top" nowrap="" width="50%" rowspan="2">
<font size="2" face="Arial" color="#000099">
<a name="7"><b>tristen</b></a>
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=tristen"><img src="https://rotter.net/forum/Images/5_star.gif" border="0" alt="לחץ כאן להצגת דירוג המשתמש"></a><br>
<font size="1">חבר מתאריך 2.6.07</font><br>
<font size="1">14650 הודעות</font>, <font size="1" color="006633"> <b>76 מדרגים</b></font>, <font color="red" size="1"> <b>143 נקודות. &nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=tristen"><font color="000099" size="-1"><u>ראה משוב</u></font></a></b></font></font></td><td align="LEFT" valign="top" width="50%" nowrap=""><font size="1" face="Arial" color="#000099"><font color="black">יום שני ז' בניסן תשפ''ד &nbsp;&nbsp;</font>
<font color="red">14:54</font> &nbsp; <font color="#eeeeee" size="1"> </font>15.04.24</font>&nbsp;&nbsp;&nbsp;</td></tr>
<tr bgcolor="#eeeeee"><td align="LEFT">
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=send_mesg&amp;userid=tristen" target="_new"><img src="https://rotter.net/forum/Images/mesg.gif" border="0" title="לחץ לשליחת הודעה פרטית למשתמש"></a> <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=user_profiles&amp;user=tristen"><img src="https://rotter.net/forum/Images/profile_small.gif" title="לחץ להצגת פרופיל המשתמש" border="0"></a><a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=add_buddy&amp;user=tristen&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/mesg_add_buddy.gif" title="לחץ להוספת משתמש זה לרשימת החברים שלך" border="0"></a>
<a href="javascript:makeRemote('https://rotter.net/cgi-bin/forum/Lib/view_user_kartis.pl?user=tristen')">
<img src="https://rotter.net/forum/Images/kartis.gif" border="0" alt="כרטיס אישי"></a>&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_ip&amp;forum=scoops1&amp;om=845227&amp;omm=7&amp;name=tristen"><img src="https://rotter.net/forum/Images/ip.gif" border="0" alt="עבור לצ'אט"></a>
&nbsp;</td></tr>
<tr bgcolor="#FDFDFD"><td colspan="2" width="100%">
<font size="2" face="Arial" color="#000099">
&nbsp;&nbsp;<font class="text16b">7. תשמע אלוקים סוגר חשבונות ביניהם.&nbsp;&nbsp;</font><br>
<font size="1" face="Arial" color="#000099"><a href="#3">בתגובה להודעה מספר 3</a></font><br>&nbsp;<br>
<table border="0" cellpadding="5" cellspacing="0" width="70%" style="display: inline-table;">
<tbody><tr><td valign="top" width="50" nowrap="">&nbsp;&nbsp;</td><td valign="top" width="100%">
<font size="2" face="Arial" color="#000099"><font class="text15"><b> <br> </b><p> <br> </p></font></font></td></tr></tbody></table>
<br></font></td></tr><tr bgcolor="#eeeeee"><td align="right" valign="top" nowrap="">
<font size="1" face="Arial" color="#000099">
&nbsp; <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=edit&amp;forum=scoops1&amp;om=845227&amp;omm=7"><img src="https://rotter.net/forum/Images/edit.gif" border="0"></a> &nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=post&amp;forum=scoops1&amp;om=845227&amp;omm=7"><font size="1" face="Arial" color="#000099"><img src="https://rotter.net/forum/Images/response.gif" border="0"></font></a><font size="1" face="Arial" color="#000099"> &nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=read_count&amp;om=845227&amp;forum=scoops1&amp;viewmode=all"><img src="https://rotter.net/forum/Images/all.gif" border="0"></a></font><font size="1">&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=list&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/gobk.gif" border="0"></a>
&nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?quote=not_empty&amp;az=post&amp;forum=scoops1&amp;om=845227&amp;omm=7"><font size="1" face="Arial" color="#000099"> תגובה עם ציטוט </font></a>&nbsp; | <a href="javascript:updatePropertyDisplay('7')"><font face="Arial" color="#000099">תגובה מהירה</font></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcadmin.cgi?az=admin_board_manager&amp;command=admin_remove_messages&amp;forum=scoops1&amp;thread_select=845227&amp;selected=7" onclick="return confirm('למחוק תגובה?')"><font size="1" face="Arial" color="#000099">(ניהול: מחק תגובה)</font></a></font></font></td>
<td align="left" nowrap="">
<font size="1" face="Arial" color="#000099"><br>
מכתב זה והנלווה אליו, על אחריות ועל דעת הכותב בלבד
</font></td></tr></tbody></table></td></tr></tbody></table>
</td></tr></tbody></table>
</td></tr></tbody></table>
<table border="0" width="100%" cellpadding="1" cellspacing="0">
<tbody><tr><td><table border="0" width="100%" cellpadding="1" cellspacing="0" bgcolor="#000000">
<tbody><tr><td><table border="0" width="100%" cellpadding="3" cellspacing="0">
<tbody><tr bgcolor="#eeeeee"><td align="RIGHT" valign="top" nowrap="" width="50%" rowspan="2">
<font size="2" face="Arial" color="#000099">
<a name="4"><b>יוןויוןויוןוי</b></a>
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=%E9%E5%EF%E5%E9%E5%EF%E5%E9%E5%EF%E5%E9"><img src="https://rotter.net/forum/Images/5_star.gif" border="0" alt="לחץ כאן להצגת דירוג המשתמש"></a><br>
<font size="1">חבר מתאריך 13.11.17</font><br>
<font size="1">4957 הודעות</font>, <font size="1" color="006633"> <b>73 מדרגים</b></font>, <font color="red" size="1"> <b>142 נקודות. &nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=%E9%E5%EF%E5%E9%E5%EF%E5%E9%E5%EF%E5%E9"><font color="000099" size="-1"><u>ראה משוב</u></font></a></b></font></font></td><td align="LEFT" valign="top" width="50%" nowrap=""><font size="1" face="Arial" color="#000099"><font color="black">יום שני ז' בניסן תשפ''ד &nbsp;&nbsp;</font>
<font color="red">14:53</font> &nbsp; <font color="#eeeeee" size="1"> </font>15.04.24</font>&nbsp;&nbsp;&nbsp;</td></tr>
<tr bgcolor="#eeeeee"><td align="LEFT">
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=send_mesg&amp;userid=%E9%E5%EF%E5%E9%E5%EF%E5%E9%E5%EF%E5%E9" target="_new"><img src="https://rotter.net/forum/Images/mesg.gif" border="0" title="לחץ לשליחת הודעה פרטית למשתמש"></a> <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=user_profiles&amp;user=%E9%E5%EF%E5%E9%E5%EF%E5%E9%E5%EF%E5%E9"><img src="https://rotter.net/forum/Images/profile_small.gif" title="לחץ להצגת פרופיל המשתמש" border="0"></a><a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=add_buddy&amp;user=%25E9%25E5%25EF%25E5%25E9%25E5%25EF%25E5%25E9%25E5%25EF%25E5%25E9&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/mesg_add_buddy.gif" title="לחץ להוספת משתמש זה לרשימת החברים שלך" border="0"></a>
<a href="javascript:makeRemote('https://rotter.net/cgi-bin/forum/Lib/view_user_kartis.pl?user=%E9%E5%EF%E5%E9%E5%EF%E5%E9%E5%EF%E5%E9')">
<img src="https://rotter.net/forum/Images/kartis.gif" border="0" alt="כרטיס אישי"></a>&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_ip&amp;forum=scoops1&amp;om=845227&amp;omm=4&amp;name=%E9%E5%EF%E5%E9%E5%EF%E5%E9%E5%EF%E5%E9"><img src="https://rotter.net/forum/Images/ip.gif" border="0" alt="עבור לצ'אט"></a>
&nbsp;</td></tr>
<tr bgcolor="#FDFDFD"><td colspan="2" width="100%">
<font size="2" face="Arial" color="#000099">
&nbsp;&nbsp;<font class="text16b">4. שקרנים. הוא לא נגע בו, הוא עשה לו רוח כדי שיזכה לרוח הקודש. וגם הסיבה שהוא עשה את זה כי עשו את זה לעם שלו 1000 פעם&nbsp;&nbsp;</font><br>
<font size="1" face="Arial" color="#000099"><a href="#0">בתגובה להודעה מספר 0</a></font><br>&nbsp;<br>
<table border="0" cellpadding="5" cellspacing="0" width="70%" style="display: inline-table;">
<tbody><tr><td valign="top" width="50" nowrap="">&nbsp;&nbsp;</td><td valign="top" width="100%">
<font size="2" face="Arial" color="#000099"><font class="text15"><b> <br> Shame on you Australia <br>Shame on you Australia <br>Shame on you Australia</b><p> <br> </p></font></font></td></tr></tbody></table>
<br></font></td></tr><tr bgcolor="#eeeeee"><td align="right" valign="top" nowrap="">
<font size="1" face="Arial" color="#000099">
&nbsp; <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=edit&amp;forum=scoops1&amp;om=845227&amp;omm=4"><img src="https://rotter.net/forum/Images/edit.gif" border="0"></a> &nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=post&amp;forum=scoops1&amp;om=845227&amp;omm=4"><font size="1" face="Arial" color="#000099"><img src="https://rotter.net/forum/Images/response.gif" border="0"></font></a><font size="1" face="Arial" color="#000099"> &nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=read_count&amp;om=845227&amp;forum=scoops1&amp;viewmode=all"><img src="https://rotter.net/forum/Images/all.gif" border="0"></a></font><font size="1">&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=list&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/gobk.gif" border="0"></a>
&nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?quote=not_empty&amp;az=post&amp;forum=scoops1&amp;om=845227&amp;omm=4"><font size="1" face="Arial" color="#000099"> תגובה עם ציטוט </font></a>&nbsp; | <a href="javascript:updatePropertyDisplay('4')"><font face="Arial" color="#000099">תגובה מהירה</font></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcadmin.cgi?az=admin_board_manager&amp;command=admin_remove_messages&amp;forum=scoops1&amp;thread_select=845227&amp;selected=4" onclick="return confirm('למחוק תגובה?')"><font size="1" face="Arial" color="#000099">(ניהול: מחק תגובה)</font></a></font></font></td>
<td align="left" nowrap="">
<font size="1" face="Arial" color="#000099"><br>
מכתב זה והנלווה אליו, על אחריות ועל דעת הכותב בלבד
</font></td></tr></tbody></table></td></tr></tbody></table>
</td></tr></tbody></table>
<table border="0" width="100%" cellpadding="1" cellspacing="0">
<tbody><tr><td><table border="0" width="100%" cellpadding="1" cellspacing="0" bgcolor="#000000">
<tbody><tr><td><table border="0" width="100%" cellpadding="3" cellspacing="0">
<tbody><tr bgcolor="#eeeeee"><td align="RIGHT" valign="top" nowrap="" width="50%" rowspan="2">
<font size="2" face="Arial" color="#000099">
<a name="5"><b>rccool</b></a>
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=rccool"><img src="https://rotter.net/forum/Images/3_star.gif" border="0" alt="לחץ כאן להצגת דירוג המשתמש"></a><br>
<font size="1">חבר מתאריך 8.2.12</font><br>
<font size="1">6950 הודעות</font>, <font size="1" color="006633"> <b>39 מדרגים</b></font>, <font color="red" size="1"> <b>29 נקודות. &nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=rccool"><font color="000099" size="-1"><u>ראה משוב</u></font></a></b></font></font></td><td align="LEFT" valign="top" width="50%" nowrap=""><font size="1" face="Arial" color="#000099"><font color="black">יום שני ז' בניסן תשפ''ד &nbsp;&nbsp;</font>
<font color="red">14:53</font> &nbsp; <font color="#eeeeee" size="1"> </font>15.04.24</font>&nbsp;&nbsp;&nbsp;</td></tr>
<tr bgcolor="#eeeeee"><td align="LEFT">
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=send_mesg&amp;userid=rccool" target="_new"><img src="https://rotter.net/forum/Images/mesg.gif" border="0" title="לחץ לשליחת הודעה פרטית למשתמש"></a> <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=user_profiles&amp;user=rccool"><img src="https://rotter.net/forum/Images/profile_small.gif" title="לחץ להצגת פרופיל המשתמש" border="0"></a><a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=add_buddy&amp;user=rccool&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/mesg_add_buddy.gif" title="לחץ להוספת משתמש זה לרשימת החברים שלך" border="0"></a>
<a href="javascript:makeRemote('https://rotter.net/cgi-bin/forum/Lib/view_user_kartis.pl?user=rccool')">
<img src="https://rotter.net/forum/Images/kartis.gif" border="0" alt="כרטיס אישי"></a>&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_ip&amp;forum=scoops1&amp;om=845227&amp;omm=5&amp;name=rccool"><img src="https://rotter.net/forum/Images/ip.gif" border="0" alt="עבור לצ'אט"></a>
&nbsp;</td></tr>
<tr bgcolor="#FDFDFD"><td colspan="2" width="100%">
<font size="2" face="Arial" color="#000099">
&nbsp;&nbsp;<font class="text16b">5. סה״כ הטיף לו דם :-)&nbsp;&nbsp;</font><br>
<font size="1" face="Arial" color="#000099"><a href="#0">בתגובה להודעה מספר 0</a></font><br>&nbsp;<br>
<table border="0" cellpadding="5" cellspacing="0" width="70%" style="display: inline-table;">
<tbody><tr><td valign="top" width="50" nowrap="">&nbsp;&nbsp;</td><td valign="top" width="100%">
<font size="2" face="Arial" color="#000099"><font class="text15"><b> <br> ואיפה ישו!?<br></b><p> <br> </p></font></font></td></tr></tbody></table>
<br></font></td></tr><tr bgcolor="#eeeeee"><td align="right" valign="top" nowrap="">
<font size="1" face="Arial" color="#000099">
&nbsp; <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=edit&amp;forum=scoops1&amp;om=845227&amp;omm=5"><img src="https://rotter.net/forum/Images/edit.gif" border="0"></a> &nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=post&amp;forum=scoops1&amp;om=845227&amp;omm=5"><font size="1" face="Arial" color="#000099"><img src="https://rotter.net/forum/Images/response.gif" border="0"></font></a><font size="1" face="Arial" color="#000099"> &nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=read_count&amp;om=845227&amp;forum=scoops1&amp;viewmode=all"><img src="https://rotter.net/forum/Images/all.gif" border="0"></a></font><font size="1">&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=list&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/gobk.gif" border="0"></a>
&nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?quote=not_empty&amp;az=post&amp;forum=scoops1&amp;om=845227&amp;omm=5"><font size="1" face="Arial" color="#000099"> תגובה עם ציטוט </font></a>&nbsp; | <a href="javascript:updatePropertyDisplay('5')"><font face="Arial" color="#000099">תגובה מהירה</font></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcadmin.cgi?az=admin_board_manager&amp;command=admin_remove_messages&amp;forum=scoops1&amp;thread_select=845227&amp;selected=5" onclick="return confirm('למחוק תגובה?')"><font size="1" face="Arial" color="#000099">(ניהול: מחק תגובה)</font></a></font></font></td>
<td align="left" nowrap="">
<font size="1" face="Arial" color="#000099"><br>
מכתב זה והנלווה אליו, על אחריות ועל דעת הכותב בלבד
</font></td></tr></tbody></table></td></tr></tbody></table>
</td></tr></tbody></table>
<div id="taboola-mid-page---long-article-pages" style="border: 2px solid black;" class="trc_related_container trc_spotlight_widget tbl-rtl trc_elastic trc_elastic_thumbnails-g" observeid="tbl-observe-0 tbl-observe-16" data-placement-name="mid page - long article pages"><div class="trc_rbox_container"><div><div id="trc_wrapper_55956" class="trc_rbox thumbnails-g trc-content-sponsored " style="overflow: hidden; display: block;"><div id="trc_header_55956" class="trc_rbox_header trc_rbox_border_elm"><div class="trc_header_ext"><div class="logoDiv link-attribution "><a class="trc_desktop_attribution_link trc_attribution_position_top" rel="nofollow sponsored noopener" href="https://popup.taboola.com/he/?template=colorbox&amp;utm_source=rotter&amp;utm_medium=referral&amp;utm_content=thumbnails-g:mid page - long article pages:" target="_blank"><span>by Taboola</span></a><a class="trc_mobile_attribution_link trc_attribution_position_top" rel="nofollow sponsored noopener" href="https://popup.taboola.com/he/?template=colorbox&amp;utm_source=rotter&amp;utm_medium=referral&amp;utm_content=thumbnails-g:mid page - long article pages:" target="_blank"><span>by Taboola</span></a></div><div class="logoDiv link-disclosure  attribution-disclosure-link-sponsored"><a class="trc_desktop_disclosure_link trc_attribution_position_top" rel="nofollow sponsored noopener" href="https://popup.taboola.com/he/?template=colorbox&amp;utm_source=rotter&amp;utm_medium=referral&amp;utm_content=thumbnails-g:mid page - long article pages:" target="_blank"><span>Sponsored Links</span></a><a class="trc_mobile_disclosure_link trc_attribution_position_top" rel="nofollow sponsored noopener" href="https://popup.taboola.com/he/?template=colorbox&amp;utm_source=rotter&amp;utm_medium=referral&amp;utm_content=thumbnails-g:mid page - long article pages:" target="_blank"><span>Sponsored Links</span></a></div><div class="logoDiv link-disclosure  attribution-disclosure-link-hybrid"><a class="trc_desktop_disclosure_link trc_attribution_position_top" rel="nofollow sponsored noopener" href="https://popup.taboola.com/he/?template=colorbox&amp;utm_source=rotter&amp;utm_medium=referral&amp;utm_content=thumbnails-g:mid page - long article pages:" target="_blank"><span>Promoted Links</span></a><a class="trc_mobile_disclosure_link trc_attribution_position_top" rel="nofollow sponsored noopener" href="https://popup.taboola.com/he/?template=colorbox&amp;utm_source=rotter&amp;utm_medium=referral&amp;utm_content=thumbnails-g:mid page - long article pages:" target="_blank"><span>Promoted Links</span></a></div></div><span class="trc_rbox_header_span" role="Heading" aria-level="3">אולי יעניין אותך גם</span></div><div id="outer_55956" class="trc_rbox_outer"><div id="rbox-t2m" class="trc_rbox_div trc_rbox_border_elm"><div id="internal_trc_55956"><div observeid="tbl-observe-2 tbl-observe-3 tbl-observe-17" data-item-id="~~V1~~-6939103217308200893~~E6DmerD0SiaUhRwMLA2hm8EPYLAMBAJoGMNpD5UUk2jnoZueAsnM0UTkqRiz-o8uV9GNaet_FWxUAZ9PPPsFwdFfEAzNTcTeJIz2dnjOAqgMh56RGMVKC1m4G-ay_hzsBg-uQRix80OVeTv533TefUZeMP_JgNpPMwiW-jZLPKrclL-oGoLH5vtQ5o8Nwjzr0o8HUYz7pKhuTnvJXvMOdg" data-item-title="פולקסווגן קראפטר משלוח - עכשיו החל מ-₪233,000 כולל מע&amp;#34;מ" data-item-thumb="http://cdn.taboola.com/libtrc/static/thumbnails/STABLE_DIFFUSION_OUTCROP/ESD/2f8ee656-230d-4219-8bcd-64018e971af8__HrvPZNVM.jpg" data-item-syndicated="true" class="videoCube trc_spotlight_item origin-default thumbnail_top syndicatedItem textItem videoCube_1_child trc-first-recommendation trc-spotlight-first-recommendation  trc_excludable "><a attributionsrc="" title="פולקסווגן קראפטר משלוח - עכשיו החל מ-₪233,000 כולל מע&quot;מ" href="https://vwcv.co.il/lp/crafter-panel-van/" rel="nofollow noopener sponsored" target="_blank" class=" item-thumbnail-href " slot="thumbnail"><div class="thumbBlock_holder"><span class="thumbBlock" aria-label="Image for Taboola Advertising Unit" role="img" style="background-image: url(&quot;https://images.taboola.com/taboola/image/fetch/c_crop%2Cf_jpg%2Cq_auto%2Ce_sharpen%2Car_1.2%2Cw_1437%2Cx_621%2Cy_0/c_fill%2Cw_540%2Ch_450/http%3A//cdn.taboola.com/libtrc/static/thumbnails/STABLE_DIFFUSION_OUTCROP/ESD/2f8ee656-230d-4219-8bcd-64018e971af8__HrvPZNVM.jpg&quot;);"><span class="thumbnail-overlay"></span><span class="branding" role="link" aria-label="Volkswagen Commercial in Taboola advertising section">Volkswagen Commercial</span><span class="static-text top-right"></span></span><div class="videoCube_aspect"></div></div></a><a attributionsrc="" title="פולקסווגן קראפטר משלוח - עכשיו החל מ-₪233,000 כולל מע&quot;מ" href="https://vwcv.co.il/lp/crafter-panel-van/" rel="nofollow noopener sponsored" target="_blank" class="item-label-href video-cta-style non-feed-cta-item"><span class="video-label-box trc-main-label video-label-box-cta video-label-box-cta-non-ie"><span class="video-label video-title video-label-flex-cta-item trc_ellipsis " slot="title" role="link" style="-webkit-line-clamp: 1;">פולקסווגן קראפטר משלוח - עכשיו החל מ-₪233,000 כולל מע"מ</span><span class="branding video-branding-flex-cta-item" role="link" aria-label="Volkswagen Commercial in Taboola advertising section" slot="branding">Volkswagen Commercial</span><div class="video-cta-href"><button type="button" class="video-cta-button video-cta-style" style="border-color: rgb(0, 0, 0); font-weight: bold; font-family: Arial, Helvetica, sans-serif; color: rgb(0, 0, 0);">לקבלת הצעה</button></div></span></a><div class=" trc_user_exclude_btn " title="Remove this item"></div><div class=" trc_exclude_overlay trc_fade "></div><div class=" trc_undo_btn ">Undo</div></div><div observeid="tbl-observe-4 tbl-observe-5 tbl-observe-18" data-item-id="~~V1~~9171175633293729017~~-4_4UlMBaSPhKgGcAxEXlsEPYLAMBAJoGMNpD5UUk2jnoZueAsnM0UTkqRiz-o8uV9GNaet_FWxUAZ9PPPsFwe6lca7Ej_nE_iuF9lV3j-IMh56RGMVKC1m4G-ay_hzsBg-uQRix80OVeTv533TefUZeMP_JgNpPMwiW-jZLPKrclL-oGoLH5vtQ5o8Nwjzr0o8HUYz7pKhuTnvJXvMOdg" data-item-title="מחפשים רכב עבודה פרקטי עם הסכם אחזקה משתלם? כך תוכלו למצוא את זה" data-item-thumb="http://cdn.taboola.com/libtrc/static/thumbnails/f0df99e71c623c5a8c8f2ac82130c385.jpg" data-item-syndicated="true" class="videoCube trc_spotlight_item origin-default thumbnail_top syndicatedItem textItem videoCube_2_child trc_excludable "><a attributionsrc="" title="מחפשים רכב עבודה פרקטי עם הסכם אחזקה משתלם? כך תוכלו למצוא את זה" href="https://vwcv.co.il/lp/crafter-panel-van/" rel="nofollow noopener sponsored" target="_blank" class=" item-thumbnail-href " slot="thumbnail"><div class="thumbBlock_holder"><span class="thumbBlock" aria-label="Image for Taboola Advertising Unit" role="img" style="background-image: url(&quot;https://images.taboola.com/taboola/image/fetch/c_crop%2Cf_jpg%2Cq_auto%2Ce_sharpen%2Car_1.2%2Cw_720%2Cx_136%2Cy_0/c_fill%2Cw_540%2Ch_450/http%3A//cdn.taboola.com/libtrc/static/thumbnails/f0df99e71c623c5a8c8f2ac82130c385.jpg&quot;);"><span class="thumbnail-overlay"></span><span class="branding" role="link" aria-label="Volkswagen Commercial in Taboola advertising section">Volkswagen Commercial</span><span class="static-text top-right"></span></span><div class="videoCube_aspect"></div></div></a><a attributionsrc="" title="מחפשים רכב עבודה פרקטי עם הסכם אחזקה משתלם? כך תוכלו למצוא את זה" href="https://vwcv.co.il/lp/crafter-panel-van/" rel="nofollow noopener sponsored" target="_blank" class="item-label-href video-cta-style non-feed-cta-item"><span class="video-label-box trc-main-label video-label-box-cta video-label-box-cta-non-ie"><span class="video-label video-title video-label-flex-cta-item trc_ellipsis " slot="title" role="link" style="-webkit-line-clamp: 1;">מחפשים רכב עבודה פרקטי עם הסכם אחזקה משתלם? כך תוכלו למצוא את זה</span><span class="branding video-branding-flex-cta-item" role="link" aria-label="Volkswagen Commercial in Taboola advertising section" slot="branding">Volkswagen Commercial</span><div class="video-cta-href"><button type="button" class="video-cta-button video-cta-style" style="border-color: rgb(0, 0, 0); font-weight: bold; font-family: Arial, Helvetica, sans-serif; color: rgb(0, 0, 0);">לחצו כאן</button></div></span></a><div class=" trc_user_exclude_btn " title="Remove this item"></div><div class=" trc_exclude_overlay trc_fade "></div><div class=" trc_undo_btn ">Undo</div></div><div observeid="tbl-observe-6 tbl-observe-19" data-item-id="~~V1~~-4579501691172372289~~6RxGx_5h5lD4ALaO0yrFbJOibkYq5y3GrMg3nD_HU-7noZueAsnM0UTkqRiz-o8uuKa2_rupL9I0kvx1XVufut2qKIJrSNJ_InWKPTfYcgwvFg07WPu7ezROxGyxYeqUIOh1iq9ZRjArdQt8SjpaGKLrcKKVL0rFT8ui5sq7MHF7oId7KmFAZ8JWUTupr0Oq4B-zFmnHyoWU3B0bUAPTHybPrgt_llpq1D_-dRcwIvhIQyetKke-7-eyYEfm_FqkMO7Tswj5WH4cylUjQLFLHQ" data-item-title="משרדים אחרונים על הפארק:  100 אלף ₪ הון עצמי והיתרה ב-24 תשלומים" data-item-thumb="http://cdn.taboola.com/libtrc/static/thumbnails/39663f039a08414fa545daa92c4c9e23.png" data-item-syndicated="true" class="videoCube trc_spotlight_item origin-default thumbnail_top syndicatedItem textItem videoCube_3_child trc_excludable "><a attributionsrc="" title="משרדים אחרונים על הפארק:  100 אלף ₪ הון עצמי והיתרה ב-24 תשלומים" href="https://landing.round-table.co.il/bneibrak-britania-israel" rel="nofollow noopener sponsored" target="_blank" class=" item-thumbnail-href " slot="thumbnail"><div class="thumbBlock_holder"><span class="thumbBlock" aria-label="Image for Taboola Advertising Unit" role="img" style="background-image: url(&quot;https://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_auto%2Ch_450%2Cw_540%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/http%3A//cdn.taboola.com/libtrc/static/thumbnails/39663f039a08414fa545daa92c4c9e23.png&quot;);"><span class="thumbnail-overlay"></span><span class="branding" role="link" aria-label="Real Invest נדל&amp;#34;ן in Taboola advertising section">Real Invest נדל&amp;#34;ן</span><span class="static-text top-right"></span></span><div class="videoCube_aspect"></div></div></a><a attributionsrc="" title="משרדים אחרונים על הפארק:  100 אלף ₪ הון עצמי והיתרה ב-24 תשלומים" href="https://landing.round-table.co.il/bneibrak-britania-israel" rel="nofollow noopener sponsored" target="_blank" class=" item-label-href "><span class="video-label-box trc-main-label "><span class="video-label video-title trc_ellipsis " slot="title" role="link" style="-webkit-line-clamp: 1;">משרדים אחרונים על הפארק:  100 אלף ₪ הון עצמי והיתרה ב-24 תשלומים</span><span class="branding" role="link" aria-label="Real Invest נדל&quot;ן in Taboola advertising section" slot="branding">Real Invest נדל"ן</span></span></a><div class=" trc_user_exclude_btn " title="Remove this item"></div><div class=" trc_exclude_overlay trc_fade "></div><div class=" trc_undo_btn ">Undo</div></div><figure id="taboola-mid-page---long-article-pages-video" style="position: absolute; float: right; top: 0px; left: 0px; width: auto; margin: 0px 38.7344px 10px 0px; z-index: 90;"><div class="_cm-div" id="_cm-css-reset" data-tracked="true"></div></figure><div observeid="tbl-observe-7 tbl-observe-20" data-item-id="~~V1~~-7710708339337971793~~3sKmpRx_ugbcrR3uiVabvy677wE98WX3AFQdYLU2mhvB6wGpPWu_F_-PRJzQTUkvPuTtxRirX6AY3un3GYCxPqGmYY5zQdo_or9GdrjAFR-fCqOUlHkhZePNW8AQVmEARdbgwlJdnqyroTPEQNNEnyrGgfXraZfkqzxVI8YJiN0" data-item-title="בכל גיל: כך תלמדו לשחות חתירה ולרדת במשקל בלי להתאמץ" data-item-thumb="http://c3.taboola.com/libtrc/static/thumbnails/so_auto/f_jpg/v1703591710/oqpfalyktrp0as49qhjw.jpg" data-item-syndicated="true" class="videoCube trc_spotlight_item origin-default thumbnail_top syndicatedItem textItem videoCube_4_child trc_excludable "><a attributionsrc="" title="בכל גיל: כך תלמדו לשחות חתירה ולרדת במשקל בלי להתאמץ" href="https://lp.digitalpages.co.il/ti-swim-winter/" rel="nofollow noopener sponsored" target="_blank" class=" item-thumbnail-href " slot="thumbnail"><div class="thumbBlock_holder"><span class="thumbBlock" aria-label="Image for Taboola Advertising Unit" role="img" observeid="tbl-observe-51" style="background-image: url(&quot;https://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_auto%2Ch_450%2Cw_540%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/http%3A//c3.taboola.com/libtrc/static/thumbnails/so_auto/f_jpg/v1703591710/oqpfalyktrp0as49qhjw.jpg&quot;);"><span class="thumbnail-overlay"></span><span class="branding" role="link" aria-label="TI-Swim in Taboola advertising section">TI-Swim</span><span class="static-text top-right"></span></span><div class="videoCube_aspect"></div></div></a><a attributionsrc="" title="בכל גיל: כך תלמדו לשחות חתירה ולרדת במשקל בלי להתאמץ" href="https://lp.digitalpages.co.il/ti-swim-winter/" rel="nofollow noopener sponsored" target="_blank" class=" item-label-href "><span class="video-label-box trc-main-label "><span class="video-label video-title trc_ellipsis " slot="title" role="link" style="-webkit-line-clamp: 1;">בכל גיל: כך תלמדו לשחות חתירה ולרדת במשקל בלי להתאמץ</span><span class="branding" role="link" aria-label="TI-Swim in Taboola advertising section" slot="branding">TI-Swim</span></span></a><div class=" trc_user_exclude_btn " title="Remove this item"></div><div class=" trc_exclude_overlay trc_fade "></div><div class=" trc_undo_btn ">Undo</div></div><div observeid="tbl-observe-8 tbl-observe-9 tbl-observe-21" data-item-id="~~V1~~-6119948718282796630~~0ypqnEcbTM2NnsFj8tNU1Y31EDUThotr-Kwa0DktBpqJKXj05hAmitdyoIZhlGUCPuTtxRirX6AY3un3GYCxPmDhO5E_6-imRBoI9iCMb_Z2xjn6jGnlOlfIZCYzDfh_RdbgwlJdnqyroTPEQNNEnyrGgfXraZfkqzxVI8YJiN0" data-item-title="החל שיווק קרקעות להשקעה בהוד השרון ב-595 אלף שקל בלבד" data-item-thumb="http://cdn.taboola.com/libtrc/static/thumbnails/0ff9b0d1b9f7ecafd0ec463fdb512f7a.jpg" data-item-syndicated="true" class="videoCube trc_spotlight_item origin-default thumbnail_top syndicatedItem textItem videoCube_5_child trc_excludable "><a attributionsrc="" title="החל שיווק קרקעות להשקעה בהוד השרון ב-595 אלף שקל בלבד" href="https://gush-dan.co.il/%d7%94%d7%a9%d7%9b%d7%95%d7%a0%d7%94-%d7%94%d7%9b%d7%99-%d7%99%d7%95%d7%a7%d7%a8%d7%aa%d7%99%d7%aa-%d7%91%d7%94%d7%95%d7%93-%d7%94%d7%a9%d7%a8%d7%95%d7%9f/" rel="nofollow noopener sponsored" target="_blank" class=" item-thumbnail-href " slot="thumbnail"><div class="thumbBlock_holder"><span class="thumbBlock" aria-label="Image for Taboola Advertising Unit" role="img" style="background-image: url(&quot;https://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_auto%2Ch_450%2Cw_540%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/http%3A//cdn.taboola.com/libtrc/static/thumbnails/0ff9b0d1b9f7ecafd0ec463fdb512f7a.jpg&quot;);"><span class="thumbnail-overlay"></span><span class="branding" role="link" aria-label="חדשות גוש דן | השקעות נדל&amp;#34;ן in Taboola advertising section">חדשות גוש דן | השקעות נדל&amp;#34;ן</span><span class="static-text top-right"></span></span><div class="videoCube_aspect"></div></div></a><a attributionsrc="" title="החל שיווק קרקעות להשקעה בהוד השרון ב-595 אלף שקל בלבד" href="https://gush-dan.co.il/%d7%94%d7%a9%d7%9b%d7%95%d7%a0%d7%94-%d7%94%d7%9b%d7%99-%d7%99%d7%95%d7%a7%d7%a8%d7%aa%d7%99%d7%aa-%d7%91%d7%94%d7%95%d7%93-%d7%94%d7%a9%d7%a8%d7%95%d7%9f/" rel="nofollow noopener sponsored" target="_blank" class="item-label-href video-cta-style non-feed-cta-item"><span class="video-label-box trc-main-label video-label-box-cta video-label-box-cta-non-ie"><span class="video-label video-title video-label-flex-cta-item" slot="title" role="link">החל שיווק קרקעות להשקעה בהוד השרון ב-595 אלף שקל בלבד</span><span class="branding video-branding-flex-cta-item" role="link" aria-label="חדשות גוש דן | השקעות נדל&quot;ן in Taboola advertising section" slot="branding">חדשות גוש דן | השקעות נדל"ן</span><div class="video-cta-href"><button type="button" class="video-cta-button video-cta-style" style="border-color: black; font-weight: bold;">מידע נוסף</button></div></span></a><div class=" trc_user_exclude_btn " title="Remove this item"></div><div class=" trc_exclude_overlay trc_fade "></div><div class=" trc_undo_btn ">Undo</div></div><div observeid="tbl-observe-10 tbl-observe-22" data-item-id="~~V1~~7413946164872270089~~8inRBoyoJxAJY8oYfWHQMHZwlR7hmCzRJ7P0uu3dOebMa4tB0eO0O2k_1RH9-peSPuTtxRirX6AY3un3GYCxPjowmD1dHFsZAkeJWqwe710X9ehMBhfwN4uahbmvfIzIktuh36TVo6v9KUVKk0pJ3YhMlz0-coRydwg_rojbK5g" data-item-title="אם יש לכם עכבר, אתם חייבים לנסות את המשחק הזה. ללא התקנה, שחקו בחינם." data-item-thumb="http://c3.taboola.com/libtrc/static/thumbnails/so_auto/f_jpg/v1699356318/ukwhicqd4jh4kjgoipd8.jpg" data-item-syndicated="true" class="videoCube trc_spotlight_item origin-default thumbnail_top syndicatedItem textItem videoCube_6_child trc_excludable "><a attributionsrc="" title="אם יש לכם עכבר, אתם חייבים לנסות את המשחק הזה. ללא התקנה, שחקו בחינם." href="https://www.desertorder.com/" rel="nofollow noopener sponsored" target="_blank" class=" item-thumbnail-href " slot="thumbnail"><div class="thumbBlock_holder"><span class="thumbBlock" aria-label="Image for Taboola Advertising Unit" role="img" observeid="tbl-observe-52" style="background-image: url(&quot;https://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_auto%2Ch_450%2Cw_540%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/http%3A//c3.taboola.com/libtrc/static/thumbnails/so_auto/f_jpg/v1699356318/ukwhicqd4jh4kjgoipd8.jpg&quot;);"><span class="thumbnail-overlay"></span><span class="branding" role="link" aria-label="Desert Order Game in Taboola advertising section">Desert Order Game</span><span class="static-text top-right"></span></span><div class="videoCube_aspect"></div></div></a><a attributionsrc="" title="אם יש לכם עכבר, אתם חייבים לנסות את המשחק הזה. ללא התקנה, שחקו בחינם." href="https://www.desertorder.com/" rel="nofollow noopener sponsored" target="_blank" class=" item-label-href "><span class="video-label-box trc-main-label "><span class="video-label video-title" slot="title" role="link">אם יש לכם עכבר, אתם חייבים לנסות את המשחק הזה. ללא התקנה, שחקו בחינם.</span><span class="branding" role="link" aria-label="Desert Order Game in Taboola advertising section" slot="branding">Desert Order Game</span></span></a><div class=" trc_user_exclude_btn " title="Remove this item"></div><div class=" trc_exclude_overlay trc_fade "></div><div class=" trc_undo_btn ">Undo</div></div><div observeid="tbl-observe-11 tbl-observe-23" data-item-id="~~V1~~-607960472326596348~~JD-fx5b19Cx5uowiiqjJyHWnTihIXWbFwpGxRVtn-VH8HcKmr0pUqAxJBOoVOu9NDIeekRjFSgtZuBvmsv4c7NNwmMe7rhrRgAx1vdAvDtSPF8C2yPvlmbo_NIFLjI3JL_oNwT2ar9yKzDrB3_L1ng" data-item-title="התחנה הבאה: היתר בניה - מגרשים בטאבו להשקעה בגדרה נמכרים ב-185,000 ש&amp;#34;ח" data-item-thumb="http://cdn.taboola.com/libtrc/static/thumbnails/77379e79c72ae02742cbeab9258ce0e5.jpg" data-item-syndicated="true" class="videoCube trc_spotlight_item origin-default thumbnail_top syndicatedItem textItem videoCube_7_child trc_excludable "><a attributionsrc="" title="התחנה הבאה: היתר בניה - מגרשים בטאבו להשקעה בגדרה נמכרים ב-185,000 ש&quot;ח" href="https://landing.round-table.co.il/gedera/" rel="nofollow noopener sponsored" target="_blank" class=" item-thumbnail-href " slot="thumbnail"><div class="thumbBlock_holder"><span class="thumbBlock" aria-label="Image for Taboola Advertising Unit" role="img" style="background-image: url(&quot;https://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_auto%2Ch_450%2Cw_540%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/http%3A//cdn.taboola.com/libtrc/static/thumbnails/77379e79c72ae02742cbeab9258ce0e5.jpg&quot;);"><span class="thumbnail-overlay"></span><span class="branding" role="link" aria-label="מתחם 8 גדרה in Taboola advertising section">מתחם 8 גדרה</span><span class="static-text top-right"></span></span><div class="videoCube_aspect"></div></div></a><a attributionsrc="" title="התחנה הבאה: היתר בניה - מגרשים בטאבו להשקעה בגדרה נמכרים ב-185,000 ש&quot;ח" href="https://landing.round-table.co.il/gedera/" rel="nofollow noopener sponsored" target="_blank" class=" item-label-href "><span class="video-label-box trc-main-label "><span class="video-label video-title" slot="title" role="link">התחנה הבאה: היתר בניה - מגרשים בטאבו להשקעה בגדרה נמכרים ב-185,000 ש"ח</span><span class="branding" role="link" aria-label="מתחם 8 גדרה in Taboola advertising section" slot="branding">מתחם 8 גדרה</span></span></a><div class=" trc_user_exclude_btn " title="Remove this item"></div><div class=" trc_exclude_overlay trc_fade "></div><div class=" trc_undo_btn ">Undo</div></div><div observeid="tbl-observe-12 tbl-observe-13 tbl-observe-24" data-item-id="~~V1~~-3406803537200454368~~zXTWOAuzxNcPNOddbGnFESbdu7_18i2ZIYo5yL8IccrpZyC7dGVdvKnSHsaHrNsFor4BFHsO6eE08LLg-CvdODOX2UvxpHnd1zLjd8fZWYkvrczQdzvKje5uculci60WPpQeEM7YLot5CjodXRhQQ-T2CR0JrDO0uwX11QItf9I8AcG1c6seag0AI_rH09A5MBF2egrI6TS2jBNwCtqHtjsYtT0FuvjbmW3OA7kwBKI" data-item-title="בני 67 ומעלה? ייתכן שתוכלו לקבל מהביטוח הסיעודי קצבה משמעותית" data-item-thumb="http://cdn.taboola.com/libtrc/static/thumbnails/6c8115aae5de50446f9db4ba963ce4b4.jpeg" data-item-syndicated="true" class="videoCube trc_spotlight_item origin-default thumbnail_top syndicatedItem textItem videoCube_8_child trc_excludable "><a attributionsrc="" title="בני 67 ומעלה? ייתכן שתוכלו לקבל מהביטוח הסיעודי קצבה משמעותית" href="https://sites.ba-media.co.il/ashdod-law1/" rel="nofollow noopener sponsored" target="_blank" class=" item-thumbnail-href " slot="thumbnail"><div class="thumbBlock_holder"><span class="thumbBlock" aria-label="Image for Taboola Advertising Unit" role="img" style="background-image: url(&quot;https://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_auto%2Ch_450%2Cw_540%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/http%3A//cdn.taboola.com/libtrc/static/thumbnails/6c8115aae5de50446f9db4ba963ce4b4.jpeg&quot;);"><span class="thumbnail-overlay"></span><span class="branding" role="link" aria-label="עו״ד גונטמכר הילל-טבול in Taboola advertising section">עו״ד גונטמכר הילל-טבול</span><span class="static-text top-right"></span></span><div class="videoCube_aspect"></div></div></a><a attributionsrc="" title="בני 67 ומעלה? ייתכן שתוכלו לקבל מהביטוח הסיעודי קצבה משמעותית" href="https://sites.ba-media.co.il/ashdod-law1/" rel="nofollow noopener sponsored" target="_blank" class="item-label-href video-cta-style non-feed-cta-item"><span class="video-label-box trc-main-label video-label-box-cta video-label-box-cta-non-ie"><span class="video-label video-title video-label-flex-cta-item" slot="title" role="link">בני 67 ומעלה? ייתכן שתוכלו לקבל מהביטוח הסיעודי קצבה משמעותית</span><span class="branding video-branding-flex-cta-item" role="link" aria-label="עו״ד גונטמכר הילל-טבול in Taboola advertising section" slot="branding">עו״ד גונטמכר הילל-טבול</span><div class="video-cta-href"><button type="button" class="video-cta-button video-cta-style" style="border-color: black; font-weight: bold;">מידע נוסף</button></div></span></a><div class=" trc_user_exclude_btn " title="Remove this item"></div><div class=" trc_exclude_overlay trc_fade "></div><div class=" trc_undo_btn ">Undo</div></div><div observeid="tbl-observe-14 tbl-observe-25" data-item-id="~~V1~~8578471972635549053~~zO1fYZbr5ZnsiBJZBzCSwbET4jRW74qHBWhQ_YqSNsrnoZueAsnM0UTkqRiz-o8uV9GNaet_FWxUAZ9PPPsFwVO9QtZIfKpaFIvlow-X-oz8bAomk-DuzFeuQiiZyKbl9ojQ_Ax8xWu3KZryGHQo5m4lgGgYCFZCykuqgoxKJWbtWQ4PJW7nz3LbTbvf3t7X0DienrMXtv3R6ZWqDZ1725xFtVj1S2j8Uvlszv9Rgm8" data-item-title="לראשונה: מזרן אורתופדי יימכר במחיר נמוך ממחיר מזרן פשוט" data-item-thumb="http://cdn.taboola.com/libtrc/static/thumbnails/fbbeeb114c47f11869b8241969083936.jpeg" data-item-syndicated="true" class="videoCube trc_spotlight_item origin-default thumbnail_top syndicatedItem textItem videoCube_9_child trc_excludable "><a attributionsrc="" title="לראשונה: מזרן אורתופדי יימכר במחיר נמוך ממחיר מזרן פשוט" href="https://channel22.co.il/dr-comfort-low_price-ta/" rel="nofollow noopener sponsored" target="_blank" class=" item-thumbnail-href " slot="thumbnail"><div class="thumbBlock_holder"><span class="thumbBlock" aria-label="Image for Taboola Advertising Unit" role="img" style="background-image: url(&quot;https://images.taboola.com/taboola/image/fetch/c_crop%2Cf_jpg%2Cq_auto%2Ce_sharpen%2Car_1.2%2Cw_1024%2Cx_0%2Cy_0/c_fill%2Cw_540%2Ch_450/http%3A//cdn.taboola.com/libtrc/static/thumbnails/fbbeeb114c47f11869b8241969083936.jpeg&quot;);"><span class="thumbnail-overlay"></span><span class="branding" role="link" aria-label="Channel22 in Taboola advertising section">Channel22</span><span class="static-text top-right"></span></span><div class="videoCube_aspect"></div></div></a><a attributionsrc="" title="לראשונה: מזרן אורתופדי יימכר במחיר נמוך ממחיר מזרן פשוט" href="https://channel22.co.il/dr-comfort-low_price-ta/" rel="nofollow noopener sponsored" target="_blank" class=" item-label-href "><span class="video-label-box trc-main-label "><span class="video-label video-title" slot="title" role="link">לראשונה: מזרן אורתופדי יימכר במחיר נמוך ממחיר מזרן פשוט</span><span class="branding" role="link" aria-label="Channel22 in Taboola advertising section" slot="branding">Channel22</span></span></a><div class=" trc_user_exclude_btn " title="Remove this item"></div><div class=" trc_exclude_overlay trc_fade "></div><div class=" trc_undo_btn ">Undo</div></div><div observeid="tbl-observe-15 tbl-observe-26" data-item-id="~~V1~~6733769413356843583~~qo4RgwgebckwBwwJj8HY5JOibkYq5y3GrMg3nD_HU-7noZueAsnM0UTkqRiz-o8uuKa2_rupL9I0kvx1XVufut2qKIJrSNJ_InWKPTfYcgxmDZ79xzRh-pX-mW_AnWxSIOh1iq9ZRjArdQt8SjpaGKLrcKKVL0rFT8ui5sq7MHF7oId7KmFAZ8JWUTupr0Oq4B-zFmnHyoWU3B0bUAPTHybPrgt_llpq1D_-dRcwIvhIQyetKke-7-eyYEfm_FqkMO7Tswj5WH4cylUjQLFLHQ" data-item-title="בני ברק: הפרויקט שצפוי לייצר שכד של 4,550 ש&amp;#34;ח בעבור הון עצמי של 229,000 ש&amp;#34;ח" data-item-thumb="http://cdn.taboola.com/libtrc/static/thumbnails/7f2b567ff441cfd54aa7b2c57183de1b.jpg" data-item-syndicated="true" class="videoCube trc_spotlight_item origin-default thumbnail_top syndicatedItem textItem videoCube_10_child trc_excludable "><a attributionsrc="" title="בני ברק: הפרויקט שצפוי לייצר שכד של 4,550 ש&quot;ח בעבור הון עצמי של 229,000 ש&quot;ח" href="https://landing.round-table.co.il/bneibrak-britania-israel" rel="nofollow noopener sponsored" target="_blank" class=" item-thumbnail-href " slot="thumbnail"><div class="thumbBlock_holder"><span class="thumbBlock" aria-label="Image for Taboola Advertising Unit" role="img" style="background-image: url(&quot;https://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_auto%2Ch_450%2Cw_540%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/http%3A//cdn.taboola.com/libtrc/static/thumbnails/7f2b567ff441cfd54aa7b2c57183de1b.jpg&quot;);"><span class="thumbnail-overlay"></span><span class="branding" role="link" aria-label="Real Invest נדל&amp;#34;ן in Taboola advertising section">Real Invest נדל&amp;#34;ן</span><span class="static-text top-right"></span></span><div class="videoCube_aspect"></div></div></a><a attributionsrc="" title="בני ברק: הפרויקט שצפוי לייצר שכד של 4,550 ש&quot;ח בעבור הון עצמי של 229,000 ש&quot;ח" href="https://landing.round-table.co.il/bneibrak-britania-israel" rel="nofollow noopener sponsored" target="_blank" class=" item-label-href "><span class="video-label-box trc-main-label "><span class="video-label video-title" slot="title" role="link">בני ברק: הפרויקט שצפוי לייצר שכד של 4,550 ש"ח בעבור הון עצמי של 229,000 ש"ח</span><span class="branding" role="link" aria-label="Real Invest נדל&quot;ן in Taboola advertising section" slot="branding">Real Invest נדל"ן</span></span></a><div class=" trc_user_exclude_btn " title="Remove this item"></div><div class=" trc_exclude_overlay trc_fade "></div><div class=" trc_undo_btn ">Undo</div></div></div></div></div><div class="trc_clearer"></div></div></div></div></div>
<script type="text/javascript">
		  window._taboola = window._taboola || [];
		  _taboola.push({
		    mode: 'thumbnails-g',
		    container: 'taboola-mid-page---long-article-pages',
		    placement: 'mid page - long article pages',
		    target_type: 'mix'
		  });
		</script>
<table border="0" width="100%" cellpadding="1" cellspacing="0">
<tbody><tr><td><table border="0" width="100%" cellpadding="1" cellspacing="0" bgcolor="#000000">
<tbody><tr><td><table border="0" width="100%" cellpadding="3" cellspacing="0">
<tbody><tr bgcolor="#eeeeee"><td align="RIGHT" valign="top" nowrap="" width="50%" rowspan="2">
<font size="2" face="Arial" color="#000099">
<a name="6"><b>דור תשיעי</b></a>
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=%E3%E5%F8%20%FA%F9%E9%F2%E9"><img src="https://rotter.net/forum/Images/1_star.gif" border="0" alt="לחץ כאן להצגת דירוג המשתמש"></a><br>
<font size="1">חבר מתאריך 18.4.22</font><br>
<font size="1">5556 הודעות</font>, <font size="1" color="006633"> <b>20 מדרגים</b></font>, <font color="red" size="1"> <b>4 נקודות. &nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=%E3%E5%F8%20%FA%F9%E9%F2%E9"><font color="000099" size="-1"><u>ראה משוב</u></font></a></b></font></font></td><td align="LEFT" valign="top" width="50%" nowrap=""><font size="1" face="Arial" color="#000099"><font color="black">יום שני ז' בניסן תשפ''ד &nbsp;&nbsp;</font>
<font color="red">14:54</font> &nbsp; <font color="#eeeeee" size="1"> </font>15.04.24</font>&nbsp;&nbsp;&nbsp;</td></tr>
<tr bgcolor="#eeeeee"><td align="LEFT">
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=send_mesg&amp;userid=%E3%E5%F8%20%FA%F9%E9%F2%E9" target="_new"><img src="https://rotter.net/forum/Images/mesg.gif" border="0" title="לחץ לשליחת הודעה פרטית למשתמש"></a> <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=user_profiles&amp;user=%E3%E5%F8%20%FA%F9%E9%F2%E9"><img src="https://rotter.net/forum/Images/profile_small.gif" title="לחץ להצגת פרופיל המשתמש" border="0"></a><a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=add_buddy&amp;user=%25E3%25E5%25F8%2520%25FA%25F9%25E9%25F2%25E9&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/mesg_add_buddy.gif" title="לחץ להוספת משתמש זה לרשימת החברים שלך" border="0"></a>
<a href="javascript:makeRemote('https://rotter.net/cgi-bin/forum/Lib/view_user_kartis.pl?user=%E3%E5%F8%20%FA%F9%E9%F2%E9')">
<img src="https://rotter.net/forum/Images/kartis.gif" border="0" alt="כרטיס אישי"></a>&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_ip&amp;forum=scoops1&amp;om=845227&amp;omm=6&amp;name=%E3%E5%F8%20%FA%F9%E9%F2%E9"><img src="https://rotter.net/forum/Images/ip.gif" border="0" alt="עבור לצ'אט"></a>
&nbsp;</td></tr>
<tr bgcolor="#FDFDFD"><td colspan="2" width="100%">
<font size="2" face="Arial" color="#000099">
&nbsp;&nbsp;<font class="text16b">6. אני בשוק. אני בהלם. מוסלמי? לא יכול להיות.&nbsp;&nbsp;</font><br>
<font size="1" face="Arial" color="#000099"><a href="#0">בתגובה להודעה מספר 0</a></font><br>&nbsp;<br>
<table border="0" cellpadding="5" cellspacing="0" width="70%" style="display: inline-table;">
<tbody><tr><td valign="top" width="50" nowrap="">&nbsp;&nbsp;</td><td valign="top" width="100%">
<font size="2" face="Arial" color="#000099"><font class="text15"><b> <br> </b><p> <br> </p></font></font></td></tr></tbody></table>
<br></font></td></tr><tr bgcolor="#eeeeee"><td align="right" valign="top" nowrap="">
<font size="1" face="Arial" color="#000099">
&nbsp; <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=edit&amp;forum=scoops1&amp;om=845227&amp;omm=6"><img src="https://rotter.net/forum/Images/edit.gif" border="0"></a> &nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=post&amp;forum=scoops1&amp;om=845227&amp;omm=6"><font size="1" face="Arial" color="#000099"><img src="https://rotter.net/forum/Images/response.gif" border="0"></font></a><font size="1" face="Arial" color="#000099"> &nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=read_count&amp;om=845227&amp;forum=scoops1&amp;viewmode=all"><img src="https://rotter.net/forum/Images/all.gif" border="0"></a></font><font size="1">&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=list&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/gobk.gif" border="0"></a>
&nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?quote=not_empty&amp;az=post&amp;forum=scoops1&amp;om=845227&amp;omm=6"><font size="1" face="Arial" color="#000099"> תגובה עם ציטוט </font></a>&nbsp; | <a href="javascript:updatePropertyDisplay('6')"><font face="Arial" color="#000099">תגובה מהירה</font></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcadmin.cgi?az=admin_board_manager&amp;command=admin_remove_messages&amp;forum=scoops1&amp;thread_select=845227&amp;selected=6" onclick="return confirm('למחוק תגובה?')"><font size="1" face="Arial" color="#000099">(ניהול: מחק תגובה)</font></a></font></font></td>
<td align="left" nowrap="">
<font size="1" face="Arial" color="#000099"><br>
מכתב זה והנלווה אליו, על אחריות ועל דעת הכותב בלבד
</font></td></tr></tbody></table></td></tr></tbody></table>
</td></tr></tbody></table>
<table border="0" width="100%" cellpadding="1" cellspacing="0">
<tbody><tr><td><table border="0" width="100%" cellpadding="1" cellspacing="0" bgcolor="#000000">
<tbody><tr><td><table border="0" width="100%" cellpadding="3" cellspacing="0">
<tbody><tr bgcolor="#eeeeee"><td align="RIGHT" valign="top" nowrap="" width="50%" rowspan="2">
<font size="2" face="Arial" color="#000099">
<a name="8"><b>Prodigy</b></a>
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=Prodigy"><img src="https://rotter.net/forum/Images/5_star.gif" border="0" alt="לחץ כאן להצגת דירוג המשתמש"></a><br>
<font size="1">חבר מתאריך 17.2.15</font><br>
<font size="1">72383 הודעות</font>, <font size="1" color="006633"> <b>271 מדרגים</b></font>, <font color="red" size="1"> <b>351 נקודות. &nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=Prodigy"><font color="000099" size="-1"><u>ראה משוב</u></font></a></b></font></font></td><td align="LEFT" valign="top" width="50%" nowrap=""><font size="1" face="Arial" color="#000099"><font color="black">יום שני ז' בניסן תשפ''ד &nbsp;&nbsp;</font>
<font color="red">14:55</font> &nbsp; <font color="#eeeeee" size="1"> </font>15.04.24</font>&nbsp;&nbsp;&nbsp;</td></tr>
<tr bgcolor="#eeeeee"><td align="LEFT">
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=send_mesg&amp;userid=Prodigy" target="_new"><img src="https://rotter.net/forum/Images/mesg.gif" border="0" title="לחץ לשליחת הודעה פרטית למשתמש"></a> <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=user_profiles&amp;user=Prodigy"><img src="https://rotter.net/forum/Images/profile_small.gif" title="לחץ להצגת פרופיל המשתמש" border="0"></a><a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=add_buddy&amp;user=Prodigy&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/mesg_add_buddy.gif" title="לחץ להוספת משתמש זה לרשימת החברים שלך" border="0"></a>
<a href="javascript:makeRemote('https://rotter.net/cgi-bin/forum/Lib/view_user_kartis.pl?user=Prodigy')">
<img src="https://rotter.net/forum/Images/kartis.gif" border="0" alt="כרטיס אישי"></a>&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_ip&amp;forum=scoops1&amp;om=845227&amp;omm=8&amp;name=Prodigy"><img src="https://rotter.net/forum/Images/ip.gif" border="0" alt="עבור לצ'אט"></a>
&nbsp;</td></tr>
<tr bgcolor="#FDFDFD"><td colspan="2" width="100%">
<font size="2" face="Arial" color="#000099">
&nbsp;&nbsp;<font class="text16b">8. ידוע שהוא מוסלמי? גם בדקירה בקניון באוסטרליה אמרו שזה מוסלמי וזה היה פייק&nbsp;&nbsp;</font><br>
<font size="1" face="Arial" color="#000099"><a href="#0">בתגובה להודעה מספר 0</a></font><br>&nbsp;<br>
<table border="0" cellpadding="5" cellspacing="0" width="70%" style="display: inline-table;">
<tbody><tr><td valign="top" width="50" nowrap="">&nbsp;&nbsp;</td><td valign="top" width="100%">
<font size="2" face="Arial" color="#000099"><font class="text15"><b> <br> </b><p> <br> </p></font></font></td></tr></tbody></table>
<br></font></td></tr><tr bgcolor="#eeeeee"><td align="right" valign="top" nowrap="">
<font size="1" face="Arial" color="#000099">
&nbsp; <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=edit&amp;forum=scoops1&amp;om=845227&amp;omm=8"><img src="https://rotter.net/forum/Images/edit.gif" border="0"></a> &nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=post&amp;forum=scoops1&amp;om=845227&amp;omm=8"><font size="1" face="Arial" color="#000099"><img src="https://rotter.net/forum/Images/response.gif" border="0"></font></a><font size="1" face="Arial" color="#000099"> &nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=read_count&amp;om=845227&amp;forum=scoops1&amp;viewmode=all"><img src="https://rotter.net/forum/Images/all.gif" border="0"></a></font><font size="1">&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=list&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/gobk.gif" border="0"></a>
&nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?quote=not_empty&amp;az=post&amp;forum=scoops1&amp;om=845227&amp;omm=8"><font size="1" face="Arial" color="#000099"> תגובה עם ציטוט </font></a>&nbsp; | <a href="javascript:updatePropertyDisplay('8')"><font face="Arial" color="#000099">תגובה מהירה</font></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcadmin.cgi?az=admin_board_manager&amp;command=admin_remove_messages&amp;forum=scoops1&amp;thread_select=845227&amp;selected=8" onclick="return confirm('למחוק תגובה?')"><font size="1" face="Arial" color="#000099">(ניהול: מחק תגובה)</font></a></font></font></td>
<td align="left" nowrap="">
<font size="1" face="Arial" color="#000099"><br>
מכתב זה והנלווה אליו, על אחריות ועל דעת הכותב בלבד
</font></td></tr></tbody></table></td></tr></tbody></table>
</td></tr></tbody></table>
<table border="0" width="100%" cellpadding="1" cellspacing="0"><tbody><tr>
<td width="18"><img src="https://rotter.net/forum/Images/blank.gif" width="18" height="10"></td><td width="100%">
<table border="0" width="100%" cellpadding="0" cellspacing="0" bgcolor="#000000">
<tbody><tr><td><table border="0" width="100%" cellpadding="1" cellspacing="0">
<tbody><tr><td><table border="0" width="100%" cellpadding="3" cellspacing="0">
<tbody><tr bgcolor="#eeeeee"><td align="RIGHT" valign="top" nowrap="" width="50%" rowspan="2">
<font size="2" face="Arial" color="#000099">
<a name="12"><b>דיווח מיוחד</b></a>
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=%E3%E9%E5%E5%E7%20%EE%E9%E5%E7%E3"><img src="https://rotter.net/forum/Images/5_star.gif" border="0" alt="לחץ כאן להצגת דירוג המשתמש"></a><br>
<font size="1">חבר מתאריך 16.6.21</font><br>
<font size="1">6154 הודעות</font>, <font size="1" color="006633"> <b>95 מדרגים</b></font>, <font color="red" size="1"> <b>190 נקודות. &nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=%E3%E9%E5%E5%E7%20%EE%E9%E5%E7%E3"><font color="000099" size="-1"><u>ראה משוב</u></font></a></b></font></font></td><td align="LEFT" valign="top" width="50%" nowrap=""><font size="1" face="Arial" color="#000099"><font color="black">יום שני ז' בניסן תשפ''ד &nbsp;&nbsp;</font>
<font color="red">14:57</font> &nbsp; <font color="#eeeeee" size="1"> </font>15.04.24</font>&nbsp;&nbsp;&nbsp;</td></tr>
<tr bgcolor="#eeeeee"><td align="LEFT">
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=send_mesg&amp;userid=%E3%E9%E5%E5%E7%20%EE%E9%E5%E7%E3" target="_new"><img src="https://rotter.net/forum/Images/mesg.gif" border="0" title="לחץ לשליחת הודעה פרטית למשתמש"></a> <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=user_profiles&amp;user=%E3%E9%E5%E5%E7%20%EE%E9%E5%E7%E3"><img src="https://rotter.net/forum/Images/profile_small.gif" title="לחץ להצגת פרופיל המשתמש" border="0"></a><a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=add_buddy&amp;user=%25E3%25E9%25E5%25E5%25E7%2520%25EE%25E9%25E5%25E7%25E3&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/mesg_add_buddy.gif" title="לחץ להוספת משתמש זה לרשימת החברים שלך" border="0"></a>
<a href="javascript:makeRemote('https://rotter.net/cgi-bin/forum/Lib/view_user_kartis.pl?user=%E3%E9%E5%E5%E7%20%EE%E9%E5%E7%E3')">
<img src="https://rotter.net/forum/Images/kartis.gif" border="0" alt="כרטיס אישי"></a>&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_ip&amp;forum=scoops1&amp;om=845227&amp;omm=12&amp;name=%E3%E9%E5%E5%E7%20%EE%E9%E5%E7%E3"><img src="https://rotter.net/forum/Images/ip.gif" border="0" alt="עבור לצ'אט"></a>
&nbsp;</td></tr>
<tr bgcolor="#FDFDFD"><td colspan="2" width="100%">
<font size="2" face="Arial" color="#000099">
&nbsp;&nbsp;<font class="text16b">12. הבישוף שנדקר בסידני הוא אנטישמי ידוע שביקר ברצועת עזה ומסית נגד ישראל&nbsp;&nbsp;</font><br>
<font size="1" face="Arial" color="#000099"><a href="#8">בתגובה להודעה מספר 8</a></font><br>&nbsp;<br>
<table border="0" cellpadding="5" cellspacing="0" width="70%" style="display: inline-table;">
<tbody><tr><td valign="top" width="50" nowrap="">&nbsp;&nbsp;</td><td valign="top" width="100%">
<font size="2" face="Arial" color="#000099"><font class="text15"><b> <br> </b><p> <br> </p></font></font></td></tr></tbody></table>
<br></font></td></tr><tr bgcolor="#eeeeee"><td align="right" valign="top" nowrap="">
<font size="1" face="Arial" color="#000099">
&nbsp; <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=edit&amp;forum=scoops1&amp;om=845227&amp;omm=12"><img src="https://rotter.net/forum/Images/edit.gif" border="0"></a> &nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=post&amp;forum=scoops1&amp;om=845227&amp;omm=12"><font size="1" face="Arial" color="#000099"><img src="https://rotter.net/forum/Images/response.gif" border="0"></font></a><font size="1" face="Arial" color="#000099"> &nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=read_count&amp;om=845227&amp;forum=scoops1&amp;viewmode=all"><img src="https://rotter.net/forum/Images/all.gif" border="0"></a></font><font size="1">&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=list&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/gobk.gif" border="0"></a>
&nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?quote=not_empty&amp;az=post&amp;forum=scoops1&amp;om=845227&amp;omm=12"><font size="1" face="Arial" color="#000099"> תגובה עם ציטוט </font></a>&nbsp; | <a href="javascript:updatePropertyDisplay('12')"><font face="Arial" color="#000099">תגובה מהירה</font></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcadmin.cgi?az=admin_board_manager&amp;command=admin_remove_messages&amp;forum=scoops1&amp;thread_select=845227&amp;selected=12" onclick="return confirm('למחוק תגובה?')"><font size="1" face="Arial" color="#000099">(ניהול: מחק תגובה)</font></a></font></font></td>
<td align="left" nowrap="">
<font size="1" face="Arial" color="#000099"><br>
מכתב זה והנלווה אליו, על אחריות ועל דעת הכותב בלבד
</font></td></tr></tbody></table></td></tr></tbody></table>
</td></tr></tbody></table>
</td></tr></tbody></table>
<table border="0" width="100%" cellpadding="1" cellspacing="0"><tbody><tr>
<td width="36"><img src="https://rotter.net/forum/Images/blank.gif" width="36" height="10"></td><td width="100%">
<table border="0" width="100%" cellpadding="0" cellspacing="0" bgcolor="#000000">
<tbody><tr><td><table border="0" width="100%" cellpadding="1" cellspacing="0">
<tbody><tr><td><table border="0" width="100%" cellpadding="3" cellspacing="0">
<tbody><tr bgcolor="#eeeeee"><td align="RIGHT" valign="top" nowrap="" width="50%" rowspan="2">
<font size="2" face="Arial" color="#000099">
<a name="23"><b>Prodigy</b></a>
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=Prodigy"><img src="https://rotter.net/forum/Images/5_star.gif" border="0" alt="לחץ כאן להצגת דירוג המשתמש"></a><br>
<font size="1">חבר מתאריך 17.2.15</font><br>
<font size="1">72383 הודעות</font>, <font size="1" color="006633"> <b>271 מדרגים</b></font>, <font color="red" size="1"> <b>351 נקודות. &nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=Prodigy"><font color="000099" size="-1"><u>ראה משוב</u></font></a></b></font></font></td><td align="LEFT" valign="top" width="50%" nowrap=""><font size="1" face="Arial" color="#000099"><font color="black">יום שני ז' בניסן תשפ''ד &nbsp;&nbsp;</font>
<font color="red">15:11</font> &nbsp; <font color="#eeeeee" size="1"> </font>15.04.24</font>&nbsp;&nbsp;&nbsp;</td></tr>
<tr bgcolor="#eeeeee"><td align="LEFT">
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=send_mesg&amp;userid=Prodigy" target="_new"><img src="https://rotter.net/forum/Images/mesg.gif" border="0" title="לחץ לשליחת הודעה פרטית למשתמש"></a> <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=user_profiles&amp;user=Prodigy"><img src="https://rotter.net/forum/Images/profile_small.gif" title="לחץ להצגת פרופיל המשתמש" border="0"></a><a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=add_buddy&amp;user=Prodigy&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/mesg_add_buddy.gif" title="לחץ להוספת משתמש זה לרשימת החברים שלך" border="0"></a>
<a href="javascript:makeRemote('https://rotter.net/cgi-bin/forum/Lib/view_user_kartis.pl?user=Prodigy')">
<img src="https://rotter.net/forum/Images/kartis.gif" border="0" alt="כרטיס אישי"></a>&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_ip&amp;forum=scoops1&amp;om=845227&amp;omm=23&amp;name=Prodigy"><img src="https://rotter.net/forum/Images/ip.gif" border="0" alt="עבור לצ'אט"></a>
&nbsp;</td></tr>
<tr bgcolor="#FDFDFD"><td colspan="2" width="100%">
<font size="2" face="Arial" color="#000099">
&nbsp;&nbsp;<font class="text16b">23. אוקיי, איך זה קשור לשאלה שלי? וזה שאדם מבקר את ישראל, לא אומר שהוא אנטישמי - הוא באמת יצא נגד יהודים?&nbsp;&nbsp;</font><br>
<font size="1" face="Arial" color="#000099"><a href="#12">בתגובה להודעה מספר 12</a></font><br>&nbsp;<br>
<table border="0" cellpadding="5" cellspacing="0" width="70%" style="display: inline-table;">
<tbody><tr><td valign="top" width="50" nowrap="">&nbsp;&nbsp;</td><td valign="top" width="100%">
<font size="2" face="Arial" color="#000099"><font class="text15"><b> <br> </b><p> <br> </p></font></font></td></tr></tbody></table>
<br></font></td></tr><tr bgcolor="#eeeeee"><td align="right" valign="top" nowrap="">
<font size="1" face="Arial" color="#000099">
&nbsp; <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=edit&amp;forum=scoops1&amp;om=845227&amp;omm=23"><img src="https://rotter.net/forum/Images/edit.gif" border="0"></a> &nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=post&amp;forum=scoops1&amp;om=845227&amp;omm=23"><font size="1" face="Arial" color="#000099"><img src="https://rotter.net/forum/Images/response.gif" border="0"></font></a><font size="1" face="Arial" color="#000099"> &nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=read_count&amp;om=845227&amp;forum=scoops1&amp;viewmode=all"><img src="https://rotter.net/forum/Images/all.gif" border="0"></a></font><font size="1">&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=list&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/gobk.gif" border="0"></a>
&nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?quote=not_empty&amp;az=post&amp;forum=scoops1&amp;om=845227&amp;omm=23"><font size="1" face="Arial" color="#000099"> תגובה עם ציטוט </font></a>&nbsp; | <a href="javascript:updatePropertyDisplay('23')"><font face="Arial" color="#000099">תגובה מהירה</font></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcadmin.cgi?az=admin_board_manager&amp;command=admin_remove_messages&amp;forum=scoops1&amp;thread_select=845227&amp;selected=23" onclick="return confirm('למחוק תגובה?')"><font size="1" face="Arial" color="#000099">(ניהול: מחק תגובה)</font></a></font></font></td>
<td align="left" nowrap="">
<font size="1" face="Arial" color="#000099"><br>
מכתב זה והנלווה אליו, על אחריות ועל דעת הכותב בלבד
</font></td></tr></tbody></table></td></tr></tbody></table>
</td></tr></tbody></table>
</td></tr></tbody></table>
<table border="0" width="100%" cellpadding="1" cellspacing="0"><tbody><tr>
<td width="18"><img src="https://rotter.net/forum/Images/blank.gif" width="18" height="10"></td><td width="100%">
<table border="0" width="100%" cellpadding="0" cellspacing="0" bgcolor="#000000">
<tbody><tr><td><table border="0" width="100%" cellpadding="1" cellspacing="0">
<tbody><tr><td><table border="0" width="100%" cellpadding="3" cellspacing="0">
<tbody><tr bgcolor="#eeeeee"><td align="RIGHT" valign="top" nowrap="" width="50%" rowspan="2">
<font size="2" face="Arial" color="#000099">
<a name="45"><b>חנטריש</b></a>
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=%E7%F0%E8%F8%E9%F9"><img src="https://rotter.net/forum/Images/1_star.gif" border="0" alt="לחץ כאן להצגת דירוג המשתמש"></a><br>
<font size="1">חבר מתאריך 4.3.15</font><br>
<font size="1">1581 הודעות</font>, <font size="1" color="006633"> <b>8 מדרגים</b></font>, <font color="red" size="1"> <b>8 נקודות. &nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=%E7%F0%E8%F8%E9%F9"><font color="000099" size="-1"><u>ראה משוב</u></font></a></b></font></font></td><td align="LEFT" valign="top" width="50%" nowrap=""><font size="1" face="Arial" color="#000099"><font color="black">יום שני ז' בניסן תשפ''ד &nbsp;&nbsp;</font>
<font color="red">16:38</font> &nbsp; <font color="#eeeeee" size="1"> </font>15.04.24</font>&nbsp;&nbsp;&nbsp;</td></tr>
<tr bgcolor="#eeeeee"><td align="LEFT">
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=send_mesg&amp;userid=%E7%F0%E8%F8%E9%F9" target="_new"><img src="https://rotter.net/forum/Images/mesg.gif" border="0" title="לחץ לשליחת הודעה פרטית למשתמש"></a> <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=user_profiles&amp;user=%E7%F0%E8%F8%E9%F9"><img src="https://rotter.net/forum/Images/profile_small.gif" title="לחץ להצגת פרופיל המשתמש" border="0"></a><a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=add_buddy&amp;user=%25E7%25F0%25E8%25F8%25E9%25F9&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/mesg_add_buddy.gif" title="לחץ להוספת משתמש זה לרשימת החברים שלך" border="0"></a>
<a href="javascript:makeRemote('https://rotter.net/cgi-bin/forum/Lib/view_user_kartis.pl?user=%E7%F0%E8%F8%E9%F9')">
<img src="https://rotter.net/forum/Images/kartis.gif" border="0" alt="כרטיס אישי"></a>&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_ip&amp;forum=scoops1&amp;om=845227&amp;omm=45&amp;name=%E7%F0%E8%F8%E9%F9"><img src="https://rotter.net/forum/Images/ip.gif" border="0" alt="עבור לצ'אט"></a>
&nbsp;</td></tr>
<tr bgcolor="#FDFDFD"><td colspan="2" width="100%">
<font size="2" face="Arial" color="#000099">
&nbsp;&nbsp;<font class="text16b">45. מאיפה הבאת שהקניון זה פייק&nbsp;&nbsp;</font><br>
<font size="1" face="Arial" color="#000099"><a href="#8">בתגובה להודעה מספר 8</a></font><br>&nbsp;<br>
<table border="0" cellpadding="5" cellspacing="0" width="70%" style="display: inline-table;">
<tbody><tr><td valign="top" width="50" nowrap="">&nbsp;&nbsp;</td><td valign="top" width="100%">
<font size="2" face="Arial" color="#000099"><font class="text15"><b> <br> אני לא אופתע בכלל שמדובר באחד שהתאסלם. <br>אין כמעט סיבה למישהו בעולם לצאת למסע דקירות בקניון, למעט מלחמה בכופרים </b><p> <br> </p></font></font></td></tr></tbody></table>
<br></font></td></tr><tr bgcolor="#eeeeee"><td align="right" valign="top" nowrap="">
<font size="1" face="Arial" color="#000099">
&nbsp; <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=edit&amp;forum=scoops1&amp;om=845227&amp;omm=45"><img src="https://rotter.net/forum/Images/edit.gif" border="0"></a> &nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=post&amp;forum=scoops1&amp;om=845227&amp;omm=45"><font size="1" face="Arial" color="#000099"><img src="https://rotter.net/forum/Images/response.gif" border="0"></font></a><font size="1" face="Arial" color="#000099"> &nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=read_count&amp;om=845227&amp;forum=scoops1&amp;viewmode=all"><img src="https://rotter.net/forum/Images/all.gif" border="0"></a></font><font size="1">&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=list&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/gobk.gif" border="0"></a>
&nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?quote=not_empty&amp;az=post&amp;forum=scoops1&amp;om=845227&amp;omm=45"><font size="1" face="Arial" color="#000099"> תגובה עם ציטוט </font></a>&nbsp; | <a href="javascript:updatePropertyDisplay('45')"><font face="Arial" color="#000099">תגובה מהירה</font></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcadmin.cgi?az=admin_board_manager&amp;command=admin_remove_messages&amp;forum=scoops1&amp;thread_select=845227&amp;selected=45" onclick="return confirm('למחוק תגובה?')"><font size="1" face="Arial" color="#000099">(ניהול: מחק תגובה)</font></a></font></font></td>
<td align="left" nowrap="">
<font size="1" face="Arial" color="#000099"><br>
מכתב זה והנלווה אליו, על אחריות ועל דעת הכותב בלבד
</font></td></tr></tbody></table></td></tr></tbody></table>
</td></tr></tbody></table>
</td></tr></tbody></table>
<table border="0" width="100%" cellpadding="1" cellspacing="0">
<tbody><tr><td><table border="0" width="100%" cellpadding="1" cellspacing="0" bgcolor="#000000">
<tbody><tr><td><table border="0" width="100%" cellpadding="3" cellspacing="0">
<tbody><tr bgcolor="#eeeeee"><td align="RIGHT" valign="top" nowrap="" width="50%" rowspan="2">
<font size="2" face="Arial" color="#000099">
<a name="9"><b>עפרנח</b></a>
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=%F2%F4%F8%F0%E7"><img src="https://rotter.net/forum/Images/5_star.gif" border="0" alt="לחץ כאן להצגת דירוג המשתמש"></a><br>
<font size="1">חבר מתאריך 16.4.09</font><br>
<font size="1">20599 הודעות</font>, <font size="1" color="006633"> <b>148 מדרגים</b></font>, <font color="red" size="1"> <b>275 נקודות. &nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=%F2%F4%F8%F0%E7"><font color="000099" size="-1"><u>ראה משוב</u></font></a></b></font></font></td><td align="LEFT" valign="top" width="50%" nowrap=""><font size="1" face="Arial" color="#000099"><font color="black">יום שני ז' בניסן תשפ''ד &nbsp;&nbsp;</font>
<font color="red">14:55</font> &nbsp; <font color="#eeeeee" size="1"> </font>15.04.24</font>&nbsp;&nbsp;&nbsp;</td></tr>
<tr bgcolor="#eeeeee"><td align="LEFT">
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=send_mesg&amp;userid=%F2%F4%F8%F0%E7" target="_new"><img src="https://rotter.net/forum/Images/mesg.gif" border="0" title="לחץ לשליחת הודעה פרטית למשתמש"></a> <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=user_profiles&amp;user=%F2%F4%F8%F0%E7"><img src="https://rotter.net/forum/Images/profile_small.gif" title="לחץ להצגת פרופיל המשתמש" border="0"></a><a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=add_buddy&amp;user=%25F2%25F4%25F8%25F0%25E7&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/mesg_add_buddy.gif" title="לחץ להוספת משתמש זה לרשימת החברים שלך" border="0"></a>
<a href="javascript:makeRemote('https://rotter.net/cgi-bin/forum/Lib/view_user_kartis.pl?user=%F2%F4%F8%F0%E7')">
<img src="https://rotter.net/forum/Images/kartis.gif" border="0" alt="כרטיס אישי"></a>&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_ip&amp;forum=scoops1&amp;om=845227&amp;omm=9&amp;name=%F2%F4%F8%F0%E7"><img src="https://rotter.net/forum/Images/ip.gif" border="0" alt="עבור לצ'אט"></a>
&nbsp;</td></tr>
<tr bgcolor="#FDFDFD"><td colspan="2" width="100%">
<font size="2" face="Arial" color="#000099">
&nbsp;&nbsp;<font class="text16b">9. מה מוסלמי עושה בכנסיה?&nbsp;&nbsp;</font><br>
<font size="1" face="Arial" color="#000099"><a href="#0">בתגובה להודעה מספר 0</a></font><br>&nbsp;<br>
<table border="0" cellpadding="5" cellspacing="0" width="70%" style="display: inline-table;">
<tbody><tr><td valign="top" width="50" nowrap="">&nbsp;&nbsp;</td><td valign="top" width="100%">
<font size="2" face="Arial" color="#000099"><font class="text15"><b> <br> </b><p> <br> </p></font></font></td></tr></tbody></table>
<br></font></td></tr><tr bgcolor="#eeeeee"><td align="right" valign="top" nowrap="">
<font size="1" face="Arial" color="#000099">
&nbsp; <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=edit&amp;forum=scoops1&amp;om=845227&amp;omm=9"><img src="https://rotter.net/forum/Images/edit.gif" border="0"></a> &nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=post&amp;forum=scoops1&amp;om=845227&amp;omm=9"><font size="1" face="Arial" color="#000099"><img src="https://rotter.net/forum/Images/response.gif" border="0"></font></a><font size="1" face="Arial" color="#000099"> &nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=read_count&amp;om=845227&amp;forum=scoops1&amp;viewmode=all"><img src="https://rotter.net/forum/Images/all.gif" border="0"></a></font><font size="1">&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=list&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/gobk.gif" border="0"></a>
&nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?quote=not_empty&amp;az=post&amp;forum=scoops1&amp;om=845227&amp;omm=9"><font size="1" face="Arial" color="#000099"> תגובה עם ציטוט </font></a>&nbsp; | <a href="javascript:updatePropertyDisplay('9')"><font face="Arial" color="#000099">תגובה מהירה</font></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcadmin.cgi?az=admin_board_manager&amp;command=admin_remove_messages&amp;forum=scoops1&amp;thread_select=845227&amp;selected=9" onclick="return confirm('למחוק תגובה?')"><font size="1" face="Arial" color="#000099">(ניהול: מחק תגובה)</font></a></font></font></td>
<td align="left" nowrap="">
<font size="1" face="Arial" color="#000099"><br>
מכתב זה והנלווה אליו, על אחריות ועל דעת הכותב בלבד
</font></td></tr></tbody></table></td></tr></tbody></table>
</td></tr></tbody></table>
<table border="0" width="100%" cellpadding="1" cellspacing="0">
<tbody><tr><td><table border="0" width="100%" cellpadding="1" cellspacing="0" bgcolor="#000000">
<tbody><tr><td><table border="0" width="100%" cellpadding="3" cellspacing="0">
<tbody><tr bgcolor="#eeeeee"><td align="RIGHT" valign="top" nowrap="" width="50%" rowspan="2">
<font size="2" face="Arial" color="#000099">
<a name="10"><b>Idan</b></a>
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=Idan"><img src="https://rotter.net/forum/Images/5_star.gif" border="0" alt="לחץ כאן להצגת דירוג המשתמש"></a><br>
<font size="1">חבר מתאריך 27.5.13</font><br>
<font size="1">7868 הודעות</font>, <font size="1" color="006633"> <b>43 מדרגים</b></font>, <font color="red" size="1"> <b>78 נקודות. &nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=Idan"><font color="000099" size="-1"><u>ראה משוב</u></font></a></b></font></font></td><td align="LEFT" valign="top" width="50%" nowrap=""><font size="1" face="Arial" color="#000099"><font color="black">יום שני ז' בניסן תשפ''ד &nbsp;&nbsp;</font>
<font color="red">14:55</font> &nbsp; <font color="#eeeeee" size="1"> </font>15.04.24</font>&nbsp;&nbsp;&nbsp;</td></tr>
<tr bgcolor="#eeeeee"><td align="LEFT">
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=send_mesg&amp;userid=Idan" target="_new"><img src="https://rotter.net/forum/Images/mesg.gif" border="0" title="לחץ לשליחת הודעה פרטית למשתמש"></a> <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=user_profiles&amp;user=Idan"><img src="https://rotter.net/forum/Images/profile_small.gif" title="לחץ להצגת פרופיל המשתמש" border="0"></a><a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=add_buddy&amp;user=Idan&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/mesg_add_buddy.gif" title="לחץ להוספת משתמש זה לרשימת החברים שלך" border="0"></a>
<a href="javascript:makeRemote('https://rotter.net/cgi-bin/forum/Lib/view_user_kartis.pl?user=Idan')">
<img src="https://rotter.net/forum/Images/kartis.gif" border="0" alt="כרטיס אישי"></a>&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_ip&amp;forum=scoops1&amp;om=845227&amp;omm=10&amp;name=Idan"><img src="https://rotter.net/forum/Images/ip.gif" border="0" alt="עבור לצ'אט"></a>
&nbsp;</td></tr>
<tr bgcolor="#FDFDFD"><td colspan="2" width="100%">
<font size="2" face="Arial" color="#000099">
&nbsp;&nbsp;<font class="text16b">10. פרובוקציה של הכומר, רואים בבירור שהוא כובש ופרובוקטור. אם היה מדבר בערבית זה היה אחרת&nbsp;&nbsp;</font><br>
<font size="1" face="Arial" color="#000099"><a href="#0">בתגובה להודעה מספר 0</a></font><br>&nbsp;<br>
<table border="0" cellpadding="5" cellspacing="0" width="70%" style="display: inline-table;">
<tbody><tr><td valign="top" width="50" nowrap="">&nbsp;&nbsp;</td><td valign="top" width="100%">
<font size="2" face="Arial" color="#000099"><font class="text15"><b> <br> </b><p> <br> </p></font></font></td></tr></tbody></table>
<br></font></td></tr><tr bgcolor="#eeeeee"><td align="right" valign="top" nowrap="">
<font size="1" face="Arial" color="#000099">
&nbsp; <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=edit&amp;forum=scoops1&amp;om=845227&amp;omm=10"><img src="https://rotter.net/forum/Images/edit.gif" border="0"></a> &nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=post&amp;forum=scoops1&amp;om=845227&amp;omm=10"><font size="1" face="Arial" color="#000099"><img src="https://rotter.net/forum/Images/response.gif" border="0"></font></a><font size="1" face="Arial" color="#000099"> &nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=read_count&amp;om=845227&amp;forum=scoops1&amp;viewmode=all"><img src="https://rotter.net/forum/Images/all.gif" border="0"></a></font><font size="1">&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=list&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/gobk.gif" border="0"></a>
&nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?quote=not_empty&amp;az=post&amp;forum=scoops1&amp;om=845227&amp;omm=10"><font size="1" face="Arial" color="#000099"> תגובה עם ציטוט </font></a>&nbsp; | <a href="javascript:updatePropertyDisplay('10')"><font face="Arial" color="#000099">תגובה מהירה</font></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcadmin.cgi?az=admin_board_manager&amp;command=admin_remove_messages&amp;forum=scoops1&amp;thread_select=845227&amp;selected=10" onclick="return confirm('למחוק תגובה?')"><font size="1" face="Arial" color="#000099">(ניהול: מחק תגובה)</font></a></font></font></td>
<td align="left" nowrap="">
<font size="1" face="Arial" color="#000099"><br>
מכתב זה והנלווה אליו, על אחריות ועל דעת הכותב בלבד
</font></td></tr></tbody></table></td></tr></tbody></table>
</td></tr></tbody></table>
<table border="0" width="100%" cellpadding="1" cellspacing="0">
<tbody><tr><td><table border="0" width="100%" cellpadding="1" cellspacing="0" bgcolor="#000000">
<tbody><tr><td><table border="0" width="100%" cellpadding="3" cellspacing="0">
<tbody><tr bgcolor="#eeeeee"><td align="RIGHT" valign="top" nowrap="" width="50%" rowspan="2">
<font size="2" face="Arial" color="#000099">
<a name="11"><b>hutznik</b></a>
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=hutznik"><img src="https://rotter.net/forum/Images/5_star.gif" border="0" alt="לחץ כאן להצגת דירוג המשתמש"></a><br>
<font size="1">חבר מתאריך 2.4.12</font><br>
<font size="1">20238 הודעות</font>, <font size="1" color="006633"> <b>146 מדרגים</b></font>, <font color="red" size="1"> <b>292 נקודות. &nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=hutznik"><font color="000099" size="-1"><u>ראה משוב</u></font></a></b></font></font></td><td align="LEFT" valign="top" width="50%" nowrap=""><font size="1" face="Arial" color="#000099"><font color="black">יום שני ז' בניסן תשפ''ד &nbsp;&nbsp;</font>
<font color="red">14:56</font> &nbsp; <font color="#eeeeee" size="1"> </font>15.04.24</font>&nbsp;&nbsp;&nbsp;</td></tr>
<tr bgcolor="#eeeeee"><td align="LEFT">
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=send_mesg&amp;userid=hutznik" target="_new"><img src="https://rotter.net/forum/Images/mesg.gif" border="0" title="לחץ לשליחת הודעה פרטית למשתמש"></a> <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=user_profiles&amp;user=hutznik"><img src="https://rotter.net/forum/Images/profile_small.gif" title="לחץ להצגת פרופיל המשתמש" border="0"></a><a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=add_buddy&amp;user=hutznik&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/mesg_add_buddy.gif" title="לחץ להוספת משתמש זה לרשימת החברים שלך" border="0"></a>
<a href="javascript:makeRemote('https://rotter.net/cgi-bin/forum/Lib/view_user_kartis.pl?user=hutznik')">
<img src="https://rotter.net/forum/Images/kartis.gif" border="0" alt="כרטיס אישי"></a>&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_ip&amp;forum=scoops1&amp;om=845227&amp;omm=11&amp;name=hutznik"><img src="https://rotter.net/forum/Images/ip.gif" border="0" alt="עבור לצ'אט"></a>
&nbsp;</td></tr>
<tr bgcolor="#FDFDFD"><td colspan="2" width="100%">
<font size="2" face="Arial" color="#000099">
&nbsp;&nbsp;<font class="text16b">11. זה מה שקורה כשמכניסים נחש ארסי הביתה&nbsp;&nbsp;</font><br>
<font size="1" face="Arial" color="#000099"><a href="#0">בתגובה להודעה מספר 0</a></font><br>&nbsp;<br>
<table border="0" cellpadding="5" cellspacing="0" width="70%" style="display: inline-table;">
<tbody><tr><td valign="top" width="50" nowrap="">&nbsp;&nbsp;</td><td valign="top" width="100%">
<font size="2" face="Arial" color="#000099"><font class="text15"><b> <br> </b><p> <br> </p></font></font></td></tr></tbody></table>
<br></font></td></tr><tr bgcolor="#eeeeee"><td align="right" valign="top" nowrap="">
<font size="1" face="Arial" color="#000099">
&nbsp; <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=edit&amp;forum=scoops1&amp;om=845227&amp;omm=11"><img src="https://rotter.net/forum/Images/edit.gif" border="0"></a> &nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=post&amp;forum=scoops1&amp;om=845227&amp;omm=11"><font size="1" face="Arial" color="#000099"><img src="https://rotter.net/forum/Images/response.gif" border="0"></font></a><font size="1" face="Arial" color="#000099"> &nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=read_count&amp;om=845227&amp;forum=scoops1&amp;viewmode=all"><img src="https://rotter.net/forum/Images/all.gif" border="0"></a></font><font size="1">&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=list&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/gobk.gif" border="0"></a>
&nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?quote=not_empty&amp;az=post&amp;forum=scoops1&amp;om=845227&amp;omm=11"><font size="1" face="Arial" color="#000099"> תגובה עם ציטוט </font></a>&nbsp; | <a href="javascript:updatePropertyDisplay('11')"><font face="Arial" color="#000099">תגובה מהירה</font></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcadmin.cgi?az=admin_board_manager&amp;command=admin_remove_messages&amp;forum=scoops1&amp;thread_select=845227&amp;selected=11" onclick="return confirm('למחוק תגובה?')"><font size="1" face="Arial" color="#000099">(ניהול: מחק תגובה)</font></a></font></font></td>
<td align="left" nowrap="">
<font size="1" face="Arial" color="#000099"><br>
מכתב זה והנלווה אליו, על אחריות ועל דעת הכותב בלבד
</font></td></tr></tbody></table></td></tr></tbody></table>
</td></tr></tbody></table>
<table border="0" width="100%" cellpadding="1" cellspacing="0">
<tbody><tr><td><table border="0" width="100%" cellpadding="1" cellspacing="0" bgcolor="#000000">
<tbody><tr><td><table border="0" width="100%" cellpadding="3" cellspacing="0">
<tbody><tr bgcolor="#eeeeee"><td align="RIGHT" valign="top" nowrap="" width="50%" rowspan="2">
<font size="2" face="Arial" color="#000099">
<a name="13"><b>במבית</b></a>
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=%E1%EE%E1%E9%FA"><img src="https://rotter.net/forum/Images/5_star.gif" border="0" alt="לחץ כאן להצגת דירוג המשתמש"></a><br>
<font size="1">חבר מתאריך 26.5.18</font><br>
<font size="1">12324 הודעות</font>, <font size="1" color="006633"> <b>187 מדרגים</b></font>, <font color="red" size="1"> <b>374 נקודות. &nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=%E1%EE%E1%E9%FA"><font color="000099" size="-1"><u>ראה משוב</u></font></a></b></font></font></td><td align="LEFT" valign="top" width="50%" nowrap=""><font size="1" face="Arial" color="#000099"><font color="black">יום שני ז' בניסן תשפ''ד &nbsp;&nbsp;</font>
<font color="red">14:59</font> &nbsp; <font color="#eeeeee" size="1"> </font>15.04.24</font>&nbsp;&nbsp;&nbsp;</td></tr>
<tr bgcolor="#eeeeee"><td align="LEFT">
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=send_mesg&amp;userid=%E1%EE%E1%E9%FA" target="_new"><img src="https://rotter.net/forum/Images/mesg.gif" border="0" title="לחץ לשליחת הודעה פרטית למשתמש"></a> <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=user_profiles&amp;user=%E1%EE%E1%E9%FA"><img src="https://rotter.net/forum/Images/profile_small.gif" title="לחץ להצגת פרופיל המשתמש" border="0"></a><a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=add_buddy&amp;user=%25E1%25EE%25E1%25E9%25FA&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/mesg_add_buddy.gif" title="לחץ להוספת משתמש זה לרשימת החברים שלך" border="0"></a>
<a href="javascript:makeRemote('https://rotter.net/cgi-bin/forum/Lib/view_user_kartis.pl?user=%E1%EE%E1%E9%FA')">
<img src="https://rotter.net/forum/Images/kartis.gif" border="0" alt="כרטיס אישי"></a>&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_ip&amp;forum=scoops1&amp;om=845227&amp;omm=13&amp;name=%E1%EE%E1%E9%FA"><img src="https://rotter.net/forum/Images/ip.gif" border="0" alt="עבור לצ'אט"></a>
&nbsp;</td></tr>
<tr bgcolor="#FDFDFD"><td colspan="2" width="100%">
<font size="2" face="Arial" color="#000099">
&nbsp;&nbsp;<font class="text16b">13. הוא הטיף נגד ישראל&nbsp;&nbsp;</font><br>
<font size="1" face="Arial" color="#000099"><a href="#0">בתגובה להודעה מספר 0</a></font><br>&nbsp;<br>
<table border="0" cellpadding="5" cellspacing="0" width="70%" style="display: inline-table;">
<tbody><tr><td valign="top" width="50" nowrap="">&nbsp;&nbsp;</td><td valign="top" width="100%">
<font size="2" face="Arial" color="#000099"><font class="text15"><b> <br> לא קשה לצפייה ולא נעליים.</b><p> <br> </p></font></font></td></tr></tbody></table>
<br></font></td></tr><tr bgcolor="#eeeeee"><td align="right" valign="top" nowrap="">
<font size="1" face="Arial" color="#000099">
&nbsp; <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=edit&amp;forum=scoops1&amp;om=845227&amp;omm=13"><img src="https://rotter.net/forum/Images/edit.gif" border="0"></a> &nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=post&amp;forum=scoops1&amp;om=845227&amp;omm=13"><font size="1" face="Arial" color="#000099"><img src="https://rotter.net/forum/Images/response.gif" border="0"></font></a><font size="1" face="Arial" color="#000099"> &nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=read_count&amp;om=845227&amp;forum=scoops1&amp;viewmode=all"><img src="https://rotter.net/forum/Images/all.gif" border="0"></a></font><font size="1">&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=list&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/gobk.gif" border="0"></a>
&nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?quote=not_empty&amp;az=post&amp;forum=scoops1&amp;om=845227&amp;omm=13"><font size="1" face="Arial" color="#000099"> תגובה עם ציטוט </font></a>&nbsp; | <a href="javascript:updatePropertyDisplay('13')"><font face="Arial" color="#000099">תגובה מהירה</font></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcadmin.cgi?az=admin_board_manager&amp;command=admin_remove_messages&amp;forum=scoops1&amp;thread_select=845227&amp;selected=13" onclick="return confirm('למחוק תגובה?')"><font size="1" face="Arial" color="#000099">(ניהול: מחק תגובה)</font></a></font></font></td>
<td align="left" nowrap="">
<font size="1" face="Arial" color="#000099"><br>
מכתב זה והנלווה אליו, על אחריות ועל דעת הכותב בלבד
</font></td></tr></tbody></table></td></tr></tbody></table>
</td></tr></tbody></table>
<table border="0" width="100%" cellpadding="1" cellspacing="0">
<tbody><tr><td><table border="0" width="100%" cellpadding="1" cellspacing="0" bgcolor="#000000">
<tbody><tr><td><table border="0" width="100%" cellpadding="3" cellspacing="0">
<tbody><tr bgcolor="#eeeeee"><td align="RIGHT" valign="top" nowrap="" width="50%" rowspan="2">
<font size="2" face="Arial" color="#000099">
<a name="18"><b>פניקס</b></a>
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=%F4%F0%E9%F7%F1"><img src="https://rotter.net/forum/Images/2_star.gif" border="0" alt="לחץ כאן להצגת דירוג המשתמש"></a><br>
<font size="1">חבר מתאריך 16.10.23</font><br>
<font size="1">1435 הודעות</font>, <font size="1" color="006633"> <b>12 מדרגים</b></font>, <font color="red" size="1"> <b>13 נקודות. &nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=%F4%F0%E9%F7%F1"><font color="000099" size="-1"><u>ראה משוב</u></font></a></b></font></font></td><td align="LEFT" valign="top" width="50%" nowrap=""><font size="1" face="Arial" color="#000099"><font color="black">יום שני ז' בניסן תשפ''ד &nbsp;&nbsp;</font>
<font color="red">15:05</font> &nbsp; <font color="#eeeeee" size="1"> </font>15.04.24</font>&nbsp;&nbsp;&nbsp;</td></tr>
<tr bgcolor="#eeeeee"><td align="LEFT">
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=send_mesg&amp;userid=%F4%F0%E9%F7%F1" target="_new"><img src="https://rotter.net/forum/Images/mesg.gif" border="0" title="לחץ לשליחת הודעה פרטית למשתמש"></a> <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=user_profiles&amp;user=%F4%F0%E9%F7%F1"><img src="https://rotter.net/forum/Images/profile_small.gif" title="לחץ להצגת פרופיל המשתמש" border="0"></a><a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=add_buddy&amp;user=%25F4%25F0%25E9%25F7%25F1&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/mesg_add_buddy.gif" title="לחץ להוספת משתמש זה לרשימת החברים שלך" border="0"></a>
<a href="javascript:makeRemote('https://rotter.net/cgi-bin/forum/Lib/view_user_kartis.pl?user=%F4%F0%E9%F7%F1')">
<img src="https://rotter.net/forum/Images/kartis.gif" border="0" alt="כרטיס אישי"></a>&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_ip&amp;forum=scoops1&amp;om=845227&amp;omm=18&amp;name=%F4%F0%E9%F7%F1"><img src="https://rotter.net/forum/Images/ip.gif" border="0" alt="עבור לצ'אט"></a>
&nbsp;</td></tr>
<tr bgcolor="#FDFDFD"><td colspan="2" width="100%">
<font size="2" face="Arial" color="#000099">
&nbsp;&nbsp;<font class="text16b">18. אני קורא לאוסטרליה לשחרר מיד את בן המיעוט הנרדף&nbsp;&nbsp;</font><br>
<font size="1" face="Arial" color="#000099"><a href="#0">בתגובה להודעה מספר 0</a></font><br>&nbsp;<br>
<table border="0" cellpadding="5" cellspacing="0" width="70%" style="display: inline-table;">
<tbody><tr><td valign="top" width="50" nowrap="">&nbsp;&nbsp;</td><td valign="top" width="100%">
<font size="2" face="Arial" color="#000099"><font class="text15"><b> <br> </b><p> <br> </p></font></font></td></tr></tbody></table>
<br></font></td></tr><tr bgcolor="#eeeeee"><td align="right" valign="top" nowrap="">
<font size="1" face="Arial" color="#000099">
&nbsp; <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=edit&amp;forum=scoops1&amp;om=845227&amp;omm=18"><img src="https://rotter.net/forum/Images/edit.gif" border="0"></a> &nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=post&amp;forum=scoops1&amp;om=845227&amp;omm=18"><font size="1" face="Arial" color="#000099"><img src="https://rotter.net/forum/Images/response.gif" border="0"></font></a><font size="1" face="Arial" color="#000099"> &nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=read_count&amp;om=845227&amp;forum=scoops1&amp;viewmode=all"><img src="https://rotter.net/forum/Images/all.gif" border="0"></a></font><font size="1">&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=list&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/gobk.gif" border="0"></a>
&nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?quote=not_empty&amp;az=post&amp;forum=scoops1&amp;om=845227&amp;omm=18"><font size="1" face="Arial" color="#000099"> תגובה עם ציטוט </font></a>&nbsp; | <a href="javascript:updatePropertyDisplay('18')"><font face="Arial" color="#000099">תגובה מהירה</font></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcadmin.cgi?az=admin_board_manager&amp;command=admin_remove_messages&amp;forum=scoops1&amp;thread_select=845227&amp;selected=18" onclick="return confirm('למחוק תגובה?')"><font size="1" face="Arial" color="#000099">(ניהול: מחק תגובה)</font></a></font></font></td>
<td align="left" nowrap="">
<font size="1" face="Arial" color="#000099"><br>
מכתב זה והנלווה אליו, על אחריות ועל דעת הכותב בלבד
</font></td></tr></tbody></table></td></tr></tbody></table>
</td></tr></tbody></table>
<table border="0" width="100%" cellpadding="1" cellspacing="0">
<tbody><tr><td><table border="0" width="100%" cellpadding="1" cellspacing="0" bgcolor="#000000">
<tbody><tr><td><table border="0" width="100%" cellpadding="3" cellspacing="0">
<tbody><tr bgcolor="#eeeeee"><td align="RIGHT" valign="top" nowrap="" width="50%" rowspan="2">
<font size="2" face="Arial" color="#000099">
<a name="19"><b>Pinky Bite</b></a>
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=Pinky%20Bite"><img src="https://rotter.net/forum/Images/4_star.gif" border="0" alt="לחץ כאן להצגת דירוג המשתמש"></a><br>
<font size="1">חבר מתאריך 20.1.23</font><br>
<font size="1">1817 הודעות</font>, <font size="1" color="006633"> <b>19 מדרגים</b></font>, <font color="red" size="1"> <b>38 נקודות. &nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=Pinky%20Bite"><font color="000099" size="-1"><u>ראה משוב</u></font></a></b></font></font></td><td align="LEFT" valign="top" width="50%" nowrap=""><font size="1" face="Arial" color="#000099"><font color="black">יום שני ז' בניסן תשפ''ד &nbsp;&nbsp;</font>
<font color="red">15:07</font> &nbsp; <font color="#eeeeee" size="1"> </font>15.04.24</font>&nbsp;&nbsp;&nbsp;</td></tr>
<tr bgcolor="#eeeeee"><td align="LEFT">
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=send_mesg&amp;userid=Pinky%20Bite" target="_new"><img src="https://rotter.net/forum/Images/mesg.gif" border="0" title="לחץ לשליחת הודעה פרטית למשתמש"></a> <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=user_profiles&amp;user=Pinky%20Bite"><img src="https://rotter.net/forum/Images/profile_small.gif" title="לחץ להצגת פרופיל המשתמש" border="0"></a><a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=add_buddy&amp;user=Pinky%2520Bite&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/mesg_add_buddy.gif" title="לחץ להוספת משתמש זה לרשימת החברים שלך" border="0"></a>
<a href="javascript:makeRemote('https://rotter.net/cgi-bin/forum/Lib/view_user_kartis.pl?user=Pinky%20Bite')">
<img src="https://rotter.net/forum/Images/kartis.gif" border="0" alt="כרטיס אישי"></a>&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_ip&amp;forum=scoops1&amp;om=845227&amp;omm=19&amp;name=Pinky%20Bite"><img src="https://rotter.net/forum/Images/ip.gif" border="0" alt="עבור לצ'אט"></a>
&nbsp;</td></tr>
<tr bgcolor="#FDFDFD"><td colspan="2" width="100%">
<font size="2" face="Arial" color="#000099">
&nbsp;&nbsp;<font class="text16b">19. האיסלאם שוחר שלום וחוץ מזה האנטישמי נפל לו על הסכין, כולם ראו את זה&nbsp;&nbsp;</font><br>
<font size="1" face="Arial" color="#000099"><a href="#0">בתגובה להודעה מספר 0</a></font><br>&nbsp;<br>
<table border="0" cellpadding="5" cellspacing="0" width="70%" style="display: inline-table;">
<tbody><tr><td valign="top" width="50" nowrap="">&nbsp;&nbsp;</td><td valign="top" width="100%">
<font size="2" face="Arial" color="#000099"><font class="text15"><b> <br> </b><p> <br> </p></font></font></td></tr></tbody></table>
<br></font></td></tr><tr bgcolor="#eeeeee"><td align="right" valign="top" nowrap="">
<font size="1" face="Arial" color="#000099">
&nbsp; <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=edit&amp;forum=scoops1&amp;om=845227&amp;omm=19"><img src="https://rotter.net/forum/Images/edit.gif" border="0"></a> &nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=post&amp;forum=scoops1&amp;om=845227&amp;omm=19"><font size="1" face="Arial" color="#000099"><img src="https://rotter.net/forum/Images/response.gif" border="0"></font></a><font size="1" face="Arial" color="#000099"> &nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=read_count&amp;om=845227&amp;forum=scoops1&amp;viewmode=all"><img src="https://rotter.net/forum/Images/all.gif" border="0"></a></font><font size="1">&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=list&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/gobk.gif" border="0"></a>
&nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?quote=not_empty&amp;az=post&amp;forum=scoops1&amp;om=845227&amp;omm=19"><font size="1" face="Arial" color="#000099"> תגובה עם ציטוט </font></a>&nbsp; | <a href="javascript:updatePropertyDisplay('19')"><font face="Arial" color="#000099">תגובה מהירה</font></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcadmin.cgi?az=admin_board_manager&amp;command=admin_remove_messages&amp;forum=scoops1&amp;thread_select=845227&amp;selected=19" onclick="return confirm('למחוק תגובה?')"><font size="1" face="Arial" color="#000099">(ניהול: מחק תגובה)</font></a></font></font></td>
<td align="left" nowrap="">
<font size="1" face="Arial" color="#000099"><br>
מכתב זה והנלווה אליו, על אחריות ועל דעת הכותב בלבד
</font></td></tr></tbody></table></td></tr></tbody></table>
</td></tr></tbody></table>
<table border="0" width="100%" cellpadding="1" cellspacing="0">
<tbody><tr><td><table border="0" width="100%" cellpadding="1" cellspacing="0" bgcolor="#000000">
<tbody><tr><td><table border="0" width="100%" cellpadding="3" cellspacing="0">
<tbody><tr bgcolor="#eeeeee"><td align="RIGHT" valign="top" nowrap="" width="50%" rowspan="2">
<font size="2" face="Arial" color="#000099">
<a name="20"><b>Me רגוע</b></a>
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=Me%20%F8%E2%E5%F2"><img src="https://rotter.net/forum/Images/5_star.gif" border="0" alt="לחץ כאן להצגת דירוג המשתמש"></a><br>
<font size="1">חבר מתאריך 28.4.15</font><br>
<font size="1">4958 הודעות</font>, <font size="1" color="006633"> <b>54 מדרגים</b></font>, <font color="red" size="1"> <b>108 נקודות. &nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=Me%20%F8%E2%E5%F2"><font color="000099" size="-1"><u>ראה משוב</u></font></a></b></font></font></td><td align="LEFT" valign="top" width="50%" nowrap=""><font size="1" face="Arial" color="#000099"><font color="black">יום שני ז' בניסן תשפ''ד &nbsp;&nbsp;</font>
<font color="red">15:07</font> &nbsp; <font color="#eeeeee" size="1"> </font>15.04.24</font>&nbsp;&nbsp;&nbsp;</td></tr>
<tr bgcolor="#eeeeee"><td align="LEFT">
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=send_mesg&amp;userid=Me%20%F8%E2%E5%F2" target="_new"><img src="https://rotter.net/forum/Images/mesg.gif" border="0" title="לחץ לשליחת הודעה פרטית למשתמש"></a> <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=user_profiles&amp;user=Me%20%F8%E2%E5%F2"><img src="https://rotter.net/forum/Images/profile_small.gif" title="לחץ להצגת פרופיל המשתמש" border="0"></a><a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=add_buddy&amp;user=Me%2520%25F8%25E2%25E5%25F2&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/mesg_add_buddy.gif" title="לחץ להוספת משתמש זה לרשימת החברים שלך" border="0"></a>
<a href="javascript:makeRemote('https://rotter.net/cgi-bin/forum/Lib/view_user_kartis.pl?user=Me%20%F8%E2%E5%F2')">
<img src="https://rotter.net/forum/Images/kartis.gif" border="0" alt="כרטיס אישי"></a>&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_ip&amp;forum=scoops1&amp;om=845227&amp;omm=20&amp;name=Me%20%F8%E2%E5%F2"><img src="https://rotter.net/forum/Images/ip.gif" border="0" alt="עבור לצ'אט"></a>
&nbsp;</td></tr>
<tr bgcolor="#FDFDFD"><td colspan="2" width="100%">
<font size="2" face="Arial" color="#000099">
&nbsp;&nbsp;<font class="text16b">20. תגובת המוסלמים : הצעיר בטח יהודי שהתאסלם וחזר ליהדות&nbsp;&nbsp;</font><br>
<font size="1" face="Arial" color="#000099"><a href="#0">בתגובה להודעה מספר 0</a></font><br>&nbsp;<br>
<table border="0" cellpadding="5" cellspacing="0" width="70%" style="display: inline-table;">
<tbody><tr><td valign="top" width="50" nowrap="">&nbsp;&nbsp;</td><td valign="top" width="100%">
<font size="2" face="Arial" color="#000099"><font class="text15"><b> <br> </b><p> <br> </p></font></font></td></tr></tbody></table>
<br></font></td></tr><tr bgcolor="#eeeeee"><td align="right" valign="top" nowrap="">
<font size="1" face="Arial" color="#000099">
&nbsp; <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=edit&amp;forum=scoops1&amp;om=845227&amp;omm=20"><img src="https://rotter.net/forum/Images/edit.gif" border="0"></a> &nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=post&amp;forum=scoops1&amp;om=845227&amp;omm=20"><font size="1" face="Arial" color="#000099"><img src="https://rotter.net/forum/Images/response.gif" border="0"></font></a><font size="1" face="Arial" color="#000099"> &nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=read_count&amp;om=845227&amp;forum=scoops1&amp;viewmode=all"><img src="https://rotter.net/forum/Images/all.gif" border="0"></a></font><font size="1">&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=list&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/gobk.gif" border="0"></a>
&nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?quote=not_empty&amp;az=post&amp;forum=scoops1&amp;om=845227&amp;omm=20"><font size="1" face="Arial" color="#000099"> תגובה עם ציטוט </font></a>&nbsp; | <a href="javascript:updatePropertyDisplay('20')"><font face="Arial" color="#000099">תגובה מהירה</font></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcadmin.cgi?az=admin_board_manager&amp;command=admin_remove_messages&amp;forum=scoops1&amp;thread_select=845227&amp;selected=20" onclick="return confirm('למחוק תגובה?')"><font size="1" face="Arial" color="#000099">(ניהול: מחק תגובה)</font></a></font></font></td>
<td align="left" nowrap="">
<font size="1" face="Arial" color="#000099"><br>
מכתב זה והנלווה אליו, על אחריות ועל דעת הכותב בלבד
</font></td></tr></tbody></table></td></tr></tbody></table>
</td></tr></tbody></table>
<table border="0" width="100%" cellpadding="1" cellspacing="0">
<tbody><tr><td><table border="0" width="100%" cellpadding="1" cellspacing="0" bgcolor="#000000">
<tbody><tr><td><table border="0" width="100%" cellpadding="3" cellspacing="0">
<tbody><tr bgcolor="#eeeeee"><td align="RIGHT" valign="top" nowrap="" width="50%" rowspan="2">
<font size="2" face="Arial" color="#000099">
<a name="21"><b>Simulation</b></a>
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=Simulation"><img src="https://rotter.net/forum/Images/2_star.gif" border="0" alt="לחץ כאן להצגת דירוג המשתמש"></a><br>
<font size="1">חבר מתאריך 7.7.19</font><br>
<font size="1">5202 הודעות</font>, <font size="1" color="006633"> <b>15 מדרגים</b></font>, <font color="red" size="1"> <b>16 נקודות. &nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=Simulation"><font color="000099" size="-1"><u>ראה משוב</u></font></a></b></font></font></td><td align="LEFT" valign="top" width="50%" nowrap=""><font size="1" face="Arial" color="#000099"><font color="black">יום שני ז' בניסן תשפ''ד &nbsp;&nbsp;</font>
<font color="red">15:09</font> &nbsp; <font color="#eeeeee" size="1"> </font>15.04.24</font>&nbsp;&nbsp;&nbsp;</td></tr>
<tr bgcolor="#eeeeee"><td align="LEFT">
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=send_mesg&amp;userid=Simulation" target="_new"><img src="https://rotter.net/forum/Images/mesg.gif" border="0" title="לחץ לשליחת הודעה פרטית למשתמש"></a> <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=user_profiles&amp;user=Simulation"><img src="https://rotter.net/forum/Images/profile_small.gif" title="לחץ להצגת פרופיל המשתמש" border="0"></a><a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=add_buddy&amp;user=Simulation&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/mesg_add_buddy.gif" title="לחץ להוספת משתמש זה לרשימת החברים שלך" border="0"></a>
<a href="javascript:makeRemote('https://rotter.net/cgi-bin/forum/Lib/view_user_kartis.pl?user=Simulation')">
<img src="https://rotter.net/forum/Images/kartis.gif" border="0" alt="כרטיס אישי"></a>&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_ip&amp;forum=scoops1&amp;om=845227&amp;omm=21&amp;name=Simulation"><img src="https://rotter.net/forum/Images/ip.gif" border="0" alt="עבור לצ'אט"></a>
&nbsp;</td></tr>
<tr bgcolor="#FDFDFD"><td colspan="2" width="100%">
<font size="2" face="Arial" color="#000099">
&nbsp;&nbsp;<font class="text16b">21. !Free Australia&nbsp;&nbsp;</font><br>
<font size="1" face="Arial" color="#000099"><a href="#0">בתגובה להודעה מספר 0</a></font><br>&nbsp;<br>
<table border="0" cellpadding="5" cellspacing="0" width="70%" style="display: inline-table;">
<tbody><tr><td valign="top" width="50" nowrap="">&nbsp;&nbsp;</td><td valign="top" width="100%">
<font size="2" face="Arial" color="#000099"><font class="text15"><b> <br> </b><p> <br> </p></font></font></td></tr></tbody></table>
<br></font></td></tr><tr bgcolor="#eeeeee"><td align="right" valign="top" nowrap="">
<font size="1" face="Arial" color="#000099">
&nbsp; <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=edit&amp;forum=scoops1&amp;om=845227&amp;omm=21"><img src="https://rotter.net/forum/Images/edit.gif" border="0"></a> &nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=post&amp;forum=scoops1&amp;om=845227&amp;omm=21"><font size="1" face="Arial" color="#000099"><img src="https://rotter.net/forum/Images/response.gif" border="0"></font></a><font size="1" face="Arial" color="#000099"> &nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=read_count&amp;om=845227&amp;forum=scoops1&amp;viewmode=all"><img src="https://rotter.net/forum/Images/all.gif" border="0"></a></font><font size="1">&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=list&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/gobk.gif" border="0"></a>
&nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?quote=not_empty&amp;az=post&amp;forum=scoops1&amp;om=845227&amp;omm=21"><font size="1" face="Arial" color="#000099"> תגובה עם ציטוט </font></a>&nbsp; | <a href="javascript:updatePropertyDisplay('21')"><font face="Arial" color="#000099">תגובה מהירה</font></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcadmin.cgi?az=admin_board_manager&amp;command=admin_remove_messages&amp;forum=scoops1&amp;thread_select=845227&amp;selected=21" onclick="return confirm('למחוק תגובה?')"><font size="1" face="Arial" color="#000099">(ניהול: מחק תגובה)</font></a></font></font></td>
<td align="left" nowrap="">
<font size="1" face="Arial" color="#000099"><br>
מכתב זה והנלווה אליו, על אחריות ועל דעת הכותב בלבד
</font></td></tr></tbody></table></td></tr></tbody></table>
</td></tr></tbody></table>
<table border="0" width="100%" cellpadding="1" cellspacing="0"><tbody><tr>
<td width="18"><img src="https://rotter.net/forum/Images/blank.gif" width="18" height="10"></td><td width="100%">
<table border="0" width="100%" cellpadding="0" cellspacing="0" bgcolor="#000000">
<tbody><tr><td><table border="0" width="100%" cellpadding="1" cellspacing="0">
<tbody><tr><td><table border="0" width="100%" cellpadding="3" cellspacing="0">
<tbody><tr bgcolor="#eeeeee"><td align="RIGHT" valign="top" nowrap="" width="50%" rowspan="2">
<font size="2" face="Arial" color="#000099">
<a name="24"><b>Pinky Bite</b></a>
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=Pinky%20Bite"><img src="https://rotter.net/forum/Images/4_star.gif" border="0" alt="לחץ כאן להצגת דירוג המשתמש"></a><br>
<font size="1">חבר מתאריך 20.1.23</font><br>
<font size="1">1817 הודעות</font>, <font size="1" color="006633"> <b>19 מדרגים</b></font>, <font color="red" size="1"> <b>38 נקודות. &nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=Pinky%20Bite"><font color="000099" size="-1"><u>ראה משוב</u></font></a></b></font></font></td><td align="LEFT" valign="top" width="50%" nowrap=""><font size="1" face="Arial" color="#000099"><font color="black">יום שני ז' בניסן תשפ''ד &nbsp;&nbsp;</font>
<font color="red">15:11</font> &nbsp; <font color="#eeeeee" size="1"> </font>15.04.24</font>&nbsp;&nbsp;&nbsp;</td></tr>
<tr bgcolor="#eeeeee"><td align="LEFT">
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=send_mesg&amp;userid=Pinky%20Bite" target="_new"><img src="https://rotter.net/forum/Images/mesg.gif" border="0" title="לחץ לשליחת הודעה פרטית למשתמש"></a> <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=user_profiles&amp;user=Pinky%20Bite"><img src="https://rotter.net/forum/Images/profile_small.gif" title="לחץ להצגת פרופיל המשתמש" border="0"></a><a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=add_buddy&amp;user=Pinky%2520Bite&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/mesg_add_buddy.gif" title="לחץ להוספת משתמש זה לרשימת החברים שלך" border="0"></a>
<a href="javascript:makeRemote('https://rotter.net/cgi-bin/forum/Lib/view_user_kartis.pl?user=Pinky%20Bite')">
<img src="https://rotter.net/forum/Images/kartis.gif" border="0" alt="כרטיס אישי"></a>&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_ip&amp;forum=scoops1&amp;om=845227&amp;omm=24&amp;name=Pinky%20Bite"><img src="https://rotter.net/forum/Images/ip.gif" border="0" alt="עבור לצ'אט"></a>
&nbsp;</td></tr>
<tr bgcolor="#FDFDFD"><td colspan="2" width="100%">
<font size="2" face="Arial" color="#000099">
&nbsp;&nbsp;<font class="text16b">24. Free Playstation!&nbsp;&nbsp;</font><br>
<font size="1" face="Arial" color="#000099"><a href="#21">בתגובה להודעה מספר 21</a></font><br>&nbsp;<br>
<table border="0" cellpadding="5" cellspacing="0" width="70%" style="display: inline-table;">
<tbody><tr><td valign="top" width="50" nowrap="">&nbsp;&nbsp;</td><td valign="top" width="100%">
<font size="2" face="Arial" color="#000099"><font class="text15"><b> <br> </b><p> <br> </p></font></font></td></tr></tbody></table>
<br></font></td></tr><tr bgcolor="#eeeeee"><td align="right" valign="top" nowrap="">
<font size="1" face="Arial" color="#000099">
&nbsp; <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=edit&amp;forum=scoops1&amp;om=845227&amp;omm=24"><img src="https://rotter.net/forum/Images/edit.gif" border="0"></a> &nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=post&amp;forum=scoops1&amp;om=845227&amp;omm=24"><font size="1" face="Arial" color="#000099"><img src="https://rotter.net/forum/Images/response.gif" border="0"></font></a><font size="1" face="Arial" color="#000099"> &nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=read_count&amp;om=845227&amp;forum=scoops1&amp;viewmode=all"><img src="https://rotter.net/forum/Images/all.gif" border="0"></a></font><font size="1">&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=list&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/gobk.gif" border="0"></a>
&nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?quote=not_empty&amp;az=post&amp;forum=scoops1&amp;om=845227&amp;omm=24"><font size="1" face="Arial" color="#000099"> תגובה עם ציטוט </font></a>&nbsp; | <a href="javascript:updatePropertyDisplay('24')"><font face="Arial" color="#000099">תגובה מהירה</font></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcadmin.cgi?az=admin_board_manager&amp;command=admin_remove_messages&amp;forum=scoops1&amp;thread_select=845227&amp;selected=24" onclick="return confirm('למחוק תגובה?')"><font size="1" face="Arial" color="#000099">(ניהול: מחק תגובה)</font></a></font></font></td>
<td align="left" nowrap="">
<font size="1" face="Arial" color="#000099"><br>
מכתב זה והנלווה אליו, על אחריות ועל דעת הכותב בלבד
</font></td></tr></tbody></table></td></tr></tbody></table>
</td></tr></tbody></table>
</td></tr></tbody></table>
<table border="0" width="100%" cellpadding="1" cellspacing="0">
<tbody><tr><td><table border="0" width="100%" cellpadding="1" cellspacing="0" bgcolor="#000000">
<tbody><tr><td><table border="0" width="100%" cellpadding="3" cellspacing="0">
<tbody><tr bgcolor="#eeeeee"><td align="RIGHT" valign="top" nowrap="" width="50%" rowspan="2">
<font size="2" face="Arial" color="#000099">
<a name="22"><b>סלבדור</b></a>
<br>
<font size="1">חבר מתאריך 1.2.21</font><br>
<font size="1">395 הודעות</font></font></td><td align="LEFT" valign="top" width="50%" nowrap=""><font size="1" face="Arial" color="#000099"><font color="black">יום שני ז' בניסן תשפ''ד &nbsp;&nbsp;</font>
<font color="red">15:09</font> &nbsp; <font color="#eeeeee" size="1"> </font>15.04.24</font>&nbsp;&nbsp;&nbsp;</td></tr>
<tr bgcolor="#eeeeee"><td align="LEFT">
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=send_mesg&amp;userid=%F1%EC%E1%E3%E5%F8" target="_new"><img src="https://rotter.net/forum/Images/mesg.gif" border="0" title="לחץ לשליחת הודעה פרטית למשתמש"></a> <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=user_profiles&amp;user=%F1%EC%E1%E3%E5%F8"><img src="https://rotter.net/forum/Images/profile_small.gif" title="לחץ להצגת פרופיל המשתמש" border="0"></a><a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=add_buddy&amp;user=%25F1%25EC%25E1%25E3%25E5%25F8&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/mesg_add_buddy.gif" title="לחץ להוספת משתמש זה לרשימת החברים שלך" border="0"></a>
<a href="javascript:makeRemote('https://rotter.net/cgi-bin/forum/Lib/view_user_kartis.pl?user=%F1%EC%E1%E3%E5%F8')">
<img src="https://rotter.net/forum/Images/kartis.gif" border="0" alt="כרטיס אישי"></a>&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_ip&amp;forum=scoops1&amp;om=845227&amp;omm=22&amp;name=%F1%EC%E1%E3%E5%F8"><img src="https://rotter.net/forum/Images/ip.gif" border="0" alt="עבור לצ'אט"></a>
&nbsp;</td></tr>
<tr bgcolor="#FDFDFD"><td colspan="2" width="100%">
<font size="2" face="Arial" color="#000099">
&nbsp;&nbsp;<font class="text16b">22. לא צפיתי אבל אם הוא אנטישמי אז מקווה שהמחבל עשה&nbsp;&nbsp;</font><br>
<font size="1" face="Arial" color="#000099"><a href="#0">בתגובה להודעה מספר 0</a></font><br>&nbsp;<br>
<table border="0" cellpadding="5" cellspacing="0" width="70%" style="display: inline-table;">
<tbody><tr><td valign="top" width="50" nowrap="">&nbsp;&nbsp;</td><td valign="top" width="100%">
<font size="2" face="Arial" color="#000099"><font class="text15"><b> <br> עבודה טובה</b><p> <br> </p></font></font></td></tr></tbody></table>
<br></font></td></tr><tr bgcolor="#eeeeee"><td align="right" valign="top" nowrap="">
<font size="1" face="Arial" color="#000099">
&nbsp; <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=edit&amp;forum=scoops1&amp;om=845227&amp;omm=22"><img src="https://rotter.net/forum/Images/edit.gif" border="0"></a> &nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=post&amp;forum=scoops1&amp;om=845227&amp;omm=22"><font size="1" face="Arial" color="#000099"><img src="https://rotter.net/forum/Images/response.gif" border="0"></font></a><font size="1" face="Arial" color="#000099"> &nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=read_count&amp;om=845227&amp;forum=scoops1&amp;viewmode=all"><img src="https://rotter.net/forum/Images/all.gif" border="0"></a></font><font size="1">&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=list&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/gobk.gif" border="0"></a>
&nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?quote=not_empty&amp;az=post&amp;forum=scoops1&amp;om=845227&amp;omm=22"><font size="1" face="Arial" color="#000099"> תגובה עם ציטוט </font></a>&nbsp; | <a href="javascript:updatePropertyDisplay('22')"><font face="Arial" color="#000099">תגובה מהירה</font></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcadmin.cgi?az=admin_board_manager&amp;command=admin_remove_messages&amp;forum=scoops1&amp;thread_select=845227&amp;selected=22" onclick="return confirm('למחוק תגובה?')"><font size="1" face="Arial" color="#000099">(ניהול: מחק תגובה)</font></a></font></font></td>
<td align="left" nowrap="">
<font size="1" face="Arial" color="#000099"><br>
מכתב זה והנלווה אליו, על אחריות ועל דעת הכותב בלבד
</font></td></tr></tbody></table></td></tr></tbody></table>
</td></tr></tbody></table>
<table border="0" width="100%" cellpadding="1" cellspacing="0">
<tbody><tr><td><table border="0" width="100%" cellpadding="1" cellspacing="0" bgcolor="#000000">
<tbody><tr><td><table border="0" width="100%" cellpadding="3" cellspacing="0">
<tbody><tr bgcolor="#eeeeee"><td align="RIGHT" valign="top" nowrap="" width="50%" rowspan="2">
<font size="2" face="Arial" color="#000099">
<a name="26"><b>עוף החול</b></a>
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=%F2%E5%F3%20%E4%E7%E5%EC"><img src="https://rotter.net/forum/Images/5_star.gif" border="0" alt="לחץ כאן להצגת דירוג המשתמש"></a><br>
<font size="1">חבר מתאריך 27.3.19</font><br>
<font size="1">14027 הודעות</font>, <font size="1" color="006633"> <b>139 מדרגים</b></font>, <font color="red" size="1"> <b>252 נקודות. &nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=%F2%E5%F3%20%E4%E7%E5%EC"><font color="000099" size="-1"><u>ראה משוב</u></font></a></b></font></font></td><td align="LEFT" valign="top" width="50%" nowrap=""><font size="1" face="Arial" color="#000099"><font color="black">יום שני ז' בניסן תשפ''ד &nbsp;&nbsp;</font>
<font color="red">15:20</font> &nbsp; <font color="#eeeeee" size="1"> </font>15.04.24</font>&nbsp;&nbsp;&nbsp;</td></tr>
<tr bgcolor="#eeeeee"><td align="LEFT">
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=send_mesg&amp;userid=%F2%E5%F3%20%E4%E7%E5%EC" target="_new"><img src="https://rotter.net/forum/Images/mesg.gif" border="0" title="לחץ לשליחת הודעה פרטית למשתמש"></a> <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=user_profiles&amp;user=%F2%E5%F3%20%E4%E7%E5%EC"><img src="https://rotter.net/forum/Images/profile_small.gif" title="לחץ להצגת פרופיל המשתמש" border="0"></a><a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=add_buddy&amp;user=%25F2%25E5%25F3%2520%25E4%25E7%25E5%25EC&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/mesg_add_buddy.gif" title="לחץ להוספת משתמש זה לרשימת החברים שלך" border="0"></a>
<a href="javascript:makeRemote('https://rotter.net/cgi-bin/forum/Lib/view_user_kartis.pl?user=%F2%E5%F3%20%E4%E7%E5%EC')">
<img src="https://rotter.net/forum/Images/kartis.gif" border="0" alt="כרטיס אישי"></a>&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_ip&amp;forum=scoops1&amp;om=845227&amp;omm=26&amp;name=%F2%E5%F3%20%E4%E7%E5%EC"><img src="https://rotter.net/forum/Images/ip.gif" border="0" alt="עבור לצ'אט"></a>
&nbsp;</td></tr>
<tr bgcolor="#FDFDFD"><td colspan="2" width="100%">
<font size="2" face="Arial" color="#000099">
&nbsp;&nbsp;<font class="text16b">26. בהצלחה לשני הצדדים&nbsp;&nbsp;</font><br>
<font size="1" face="Arial" color="#000099"><a href="#0">בתגובה להודעה מספר 0</a></font><br>&nbsp;<br>
<table border="0" cellpadding="5" cellspacing="0" width="70%" style="display: inline-table;">
<tbody><tr><td valign="top" width="50" nowrap="">&nbsp;&nbsp;</td><td valign="top" width="100%">
<font size="2" face="Arial" color="#000099"><font class="text15"><b> <br> </b><p> <br> </p></font></font></td></tr></tbody></table>
<br></font></td></tr><tr bgcolor="#eeeeee"><td align="right" valign="top" nowrap="">
<font size="1" face="Arial" color="#000099">
&nbsp; <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=edit&amp;forum=scoops1&amp;om=845227&amp;omm=26"><img src="https://rotter.net/forum/Images/edit.gif" border="0"></a> &nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=post&amp;forum=scoops1&amp;om=845227&amp;omm=26"><font size="1" face="Arial" color="#000099"><img src="https://rotter.net/forum/Images/response.gif" border="0"></font></a><font size="1" face="Arial" color="#000099"> &nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=read_count&amp;om=845227&amp;forum=scoops1&amp;viewmode=all"><img src="https://rotter.net/forum/Images/all.gif" border="0"></a></font><font size="1">&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=list&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/gobk.gif" border="0"></a>
&nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?quote=not_empty&amp;az=post&amp;forum=scoops1&amp;om=845227&amp;omm=26"><font size="1" face="Arial" color="#000099"> תגובה עם ציטוט </font></a>&nbsp; | <a href="javascript:updatePropertyDisplay('26')"><font face="Arial" color="#000099">תגובה מהירה</font></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcadmin.cgi?az=admin_board_manager&amp;command=admin_remove_messages&amp;forum=scoops1&amp;thread_select=845227&amp;selected=26" onclick="return confirm('למחוק תגובה?')"><font size="1" face="Arial" color="#000099">(ניהול: מחק תגובה)</font></a></font></font></td>
<td align="left" nowrap="">
<font size="1" face="Arial" color="#000099"><br>
מכתב זה והנלווה אליו, על אחריות ועל דעת הכותב בלבד
</font></td></tr></tbody></table></td></tr></tbody></table>
</td></tr></tbody></table>
<table border="0" width="100%" cellpadding="1" cellspacing="0">
<tbody><tr><td><table border="0" width="100%" cellpadding="1" cellspacing="0" bgcolor="#000000">
<tbody><tr><td><table border="0" width="100%" cellpadding="3" cellspacing="0">
<tbody><tr bgcolor="#eeeeee"><td align="RIGHT" valign="top" nowrap="" width="50%" rowspan="2">
<font size="2" face="Arial" color="#000099">
<a name="27"><b>חצי לחם שחור</b></a>
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=%E7%F6%E9%20%EC%E7%ED%20%F9%E7%E5%F8"><img src="https://rotter.net/forum/Images/2_star.gif" border="0" alt="לחץ כאן להצגת דירוג המשתמש"></a><br>
<font size="1">חבר מתאריך 23.1.20</font><br>
<font size="1">1392 הודעות</font>, <font size="1" color="006633"> <b>7 מדרגים</b></font>, <font color="red" size="1"> <b>12 נקודות. &nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=%E7%F6%E9%20%EC%E7%ED%20%F9%E7%E5%F8"><font color="000099" size="-1"><u>ראה משוב</u></font></a></b></font></font></td><td align="LEFT" valign="top" width="50%" nowrap=""><font size="1" face="Arial" color="#000099"><font color="black">יום שני ז' בניסן תשפ''ד &nbsp;&nbsp;</font>
<font color="red">15:22</font> &nbsp; <font color="#eeeeee" size="1"> </font>15.04.24</font>&nbsp;&nbsp;&nbsp;</td></tr>
<tr bgcolor="#eeeeee"><td align="LEFT">
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=send_mesg&amp;userid=%E7%F6%E9%20%EC%E7%ED%20%F9%E7%E5%F8" target="_new"><img src="https://rotter.net/forum/Images/mesg.gif" border="0" title="לחץ לשליחת הודעה פרטית למשתמש"></a> <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=user_profiles&amp;user=%E7%F6%E9%20%EC%E7%ED%20%F9%E7%E5%F8"><img src="https://rotter.net/forum/Images/profile_small.gif" title="לחץ להצגת פרופיל המשתמש" border="0"></a><a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=add_buddy&amp;user=%25E7%25F6%25E9%2520%25EC%25E7%25ED%2520%25F9%25E7%25E5%25F8&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/mesg_add_buddy.gif" title="לחץ להוספת משתמש זה לרשימת החברים שלך" border="0"></a>
<a href="javascript:makeRemote('https://rotter.net/cgi-bin/forum/Lib/view_user_kartis.pl?user=%E7%F6%E9%20%EC%E7%ED%20%F9%E7%E5%F8')">
<img src="https://rotter.net/forum/Images/kartis.gif" border="0" alt="כרטיס אישי"></a>&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_ip&amp;forum=scoops1&amp;om=845227&amp;omm=27&amp;name=%E7%F6%E9%20%EC%E7%ED%20%F9%E7%E5%F8"><img src="https://rotter.net/forum/Images/ip.gif" border="0" alt="עבור לצ'אט"></a>
&nbsp;</td></tr>
<tr bgcolor="#FDFDFD"><td colspan="2" width="100%">
<font size="2" face="Arial" color="#000099">
&nbsp;&nbsp;<font class="text16b">27. נאחל לו שלא ישרוד את הפציעה&nbsp;&nbsp;</font><br>
<font size="1" face="Arial" color="#000099"><a href="#0">בתגובה להודעה מספר 0</a></font><br>&nbsp;<br>
<table border="0" cellpadding="5" cellspacing="0" width="70%" style="display: inline-table;">
<tbody><tr><td valign="top" width="50" nowrap="">&nbsp;&nbsp;</td><td valign="top" width="100%">
<font size="2" face="Arial" color="#000099"><font class="text15"><b> <br> </b><p> <br> </p></font></font></td></tr></tbody></table>
<br></font></td></tr><tr bgcolor="#eeeeee"><td align="right" valign="top" nowrap="">
<font size="1" face="Arial" color="#000099">
&nbsp; <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=edit&amp;forum=scoops1&amp;om=845227&amp;omm=27"><img src="https://rotter.net/forum/Images/edit.gif" border="0"></a> &nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=post&amp;forum=scoops1&amp;om=845227&amp;omm=27"><font size="1" face="Arial" color="#000099"><img src="https://rotter.net/forum/Images/response.gif" border="0"></font></a><font size="1" face="Arial" color="#000099"> &nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=read_count&amp;om=845227&amp;forum=scoops1&amp;viewmode=all"><img src="https://rotter.net/forum/Images/all.gif" border="0"></a></font><font size="1">&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=list&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/gobk.gif" border="0"></a>
&nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?quote=not_empty&amp;az=post&amp;forum=scoops1&amp;om=845227&amp;omm=27"><font size="1" face="Arial" color="#000099"> תגובה עם ציטוט </font></a>&nbsp; | <a href="javascript:updatePropertyDisplay('27')"><font face="Arial" color="#000099">תגובה מהירה</font></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcadmin.cgi?az=admin_board_manager&amp;command=admin_remove_messages&amp;forum=scoops1&amp;thread_select=845227&amp;selected=27" onclick="return confirm('למחוק תגובה?')"><font size="1" face="Arial" color="#000099">(ניהול: מחק תגובה)</font></a></font></font></td>
<td align="left" nowrap="">
<font size="1" face="Arial" color="#000099"><br>
מכתב זה והנלווה אליו, על אחריות ועל דעת הכותב בלבד
</font></td></tr></tbody></table></td></tr></tbody></table>
</td></tr></tbody></table>
<table border="0" width="100%" cellpadding="1" cellspacing="0">
<tbody><tr><td><table border="0" width="100%" cellpadding="1" cellspacing="0" bgcolor="#000000">
<tbody><tr><td><table border="0" width="100%" cellpadding="3" cellspacing="0">
<tbody><tr bgcolor="#eeeeee"><td align="RIGHT" valign="top" nowrap="" width="50%" rowspan="2">
<font size="2" face="Arial" color="#000099">
<a name="28"><b>Master_1</b></a>
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=Master_1"><img src="https://rotter.net/forum/Images/4_star.gif" border="0" alt="לחץ כאן להצגת דירוג המשתמש"></a><br>
<font size="1">חבר מתאריך 3.12.19</font><br>
<font size="1">3235 הודעות</font>, <font size="1" color="006633"> <b>17 מדרגים</b></font>, <font color="red" size="1"> <b>31 נקודות. &nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=Master_1"><font color="000099" size="-1"><u>ראה משוב</u></font></a></b></font></font></td><td align="LEFT" valign="top" width="50%" nowrap=""><font size="1" face="Arial" color="#000099"><font color="black">יום שני ז' בניסן תשפ''ד &nbsp;&nbsp;</font>
<font color="red">15:24</font> &nbsp; <font color="#eeeeee" size="1"> </font>15.04.24</font>&nbsp;&nbsp;&nbsp;</td></tr>
<tr bgcolor="#eeeeee"><td align="LEFT">
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=send_mesg&amp;userid=Master_1" target="_new"><img src="https://rotter.net/forum/Images/mesg.gif" border="0" title="לחץ לשליחת הודעה פרטית למשתמש"></a> <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=user_profiles&amp;user=Master_1"><img src="https://rotter.net/forum/Images/profile_small.gif" title="לחץ להצגת פרופיל המשתמש" border="0"></a><a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=add_buddy&amp;user=Master_1&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/mesg_add_buddy.gif" title="לחץ להוספת משתמש זה לרשימת החברים שלך" border="0"></a>
<a href="javascript:makeRemote('https://rotter.net/cgi-bin/forum/Lib/view_user_kartis.pl?user=Master_1')">
<img src="https://rotter.net/forum/Images/kartis.gif" border="0" alt="כרטיס אישי"></a>&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_ip&amp;forum=scoops1&amp;om=845227&amp;omm=28&amp;name=Master_1"><img src="https://rotter.net/forum/Images/ip.gif" border="0" alt="עבור לצ'אט"></a>
&nbsp;</td></tr>
<tr bgcolor="#FDFDFD"><td colspan="2" width="100%">
<font size="2" face="Arial" color="#000099">
&nbsp;&nbsp;<font class="text16b">28. עכשיו צריך רק פגוע בסגנון 9/11&nbsp;&nbsp;</font><br>
<font size="1" face="Arial" color="#000099"><a href="#0">בתגובה להודעה מספר 0</a></font><br>&nbsp;<br>
<table border="0" cellpadding="5" cellspacing="0" width="70%" style="display: inline-table;">
<tbody><tr><td valign="top" width="50" nowrap="">&nbsp;&nbsp;</td><td valign="top" width="100%">
<font size="2" face="Arial" color="#000099"><font class="text15"><b> <br> גם הארצות הברית וגם בארובה</b><p> <br> </p></font></font></td></tr></tbody></table>
<br></font></td></tr><tr bgcolor="#eeeeee"><td align="right" valign="top" nowrap="">
<font size="1" face="Arial" color="#000099">
&nbsp; <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=edit&amp;forum=scoops1&amp;om=845227&amp;omm=28"><img src="https://rotter.net/forum/Images/edit.gif" border="0"></a> &nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=post&amp;forum=scoops1&amp;om=845227&amp;omm=28"><font size="1" face="Arial" color="#000099"><img src="https://rotter.net/forum/Images/response.gif" border="0"></font></a><font size="1" face="Arial" color="#000099"> &nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=read_count&amp;om=845227&amp;forum=scoops1&amp;viewmode=all"><img src="https://rotter.net/forum/Images/all.gif" border="0"></a></font><font size="1">&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=list&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/gobk.gif" border="0"></a>
&nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?quote=not_empty&amp;az=post&amp;forum=scoops1&amp;om=845227&amp;omm=28"><font size="1" face="Arial" color="#000099"> תגובה עם ציטוט </font></a>&nbsp; | <a href="javascript:updatePropertyDisplay('28')"><font face="Arial" color="#000099">תגובה מהירה</font></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcadmin.cgi?az=admin_board_manager&amp;command=admin_remove_messages&amp;forum=scoops1&amp;thread_select=845227&amp;selected=28" onclick="return confirm('למחוק תגובה?')"><font size="1" face="Arial" color="#000099">(ניהול: מחק תגובה)</font></a></font></font></td>
<td align="left" nowrap="">
<font size="1" face="Arial" color="#000099"><br>
מכתב זה והנלווה אליו, על אחריות ועל דעת הכותב בלבד
</font></td></tr></tbody></table></td></tr></tbody></table>
</td></tr></tbody></table>
<table border="0" width="100%" cellpadding="1" cellspacing="0">
<tbody><tr><td><table border="0" width="100%" cellpadding="1" cellspacing="0" bgcolor="#000000">
<tbody><tr><td><table border="0" width="100%" cellpadding="3" cellspacing="0">
<tbody><tr bgcolor="#eeeeee"><td align="RIGHT" valign="top" nowrap="" width="50%" rowspan="2">
<font size="2" face="Arial" color="#000099">
<a name="29"><b>Gravemind</b></a>
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=Gravemind"><img src="https://rotter.net/forum/Images/3_star.gif" border="0" alt="לחץ כאן להצגת דירוג המשתמש"></a><br>
<font size="1">חבר מתאריך 31.3.22</font><br>
<font size="1">2097 הודעות</font>, <font size="1" color="006633"> <b>20 מדרגים</b></font>, <font color="red" size="1"> <b>28 נקודות. &nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=Gravemind"><font color="000099" size="-1"><u>ראה משוב</u></font></a></b></font></font></td><td align="LEFT" valign="top" width="50%" nowrap=""><font size="1" face="Arial" color="#000099"><font color="black">יום שני ז' בניסן תשפ''ד &nbsp;&nbsp;</font>
<font color="red">15:24</font> &nbsp; <font color="#eeeeee" size="1"> </font>15.04.24</font>&nbsp;&nbsp;&nbsp;</td></tr>
<tr bgcolor="#eeeeee"><td align="LEFT">
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=send_mesg&amp;userid=Gravemind" target="_new"><img src="https://rotter.net/forum/Images/mesg.gif" border="0" title="לחץ לשליחת הודעה פרטית למשתמש"></a> <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=user_profiles&amp;user=Gravemind"><img src="https://rotter.net/forum/Images/profile_small.gif" title="לחץ להצגת פרופיל המשתמש" border="0"></a><a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=add_buddy&amp;user=Gravemind&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/mesg_add_buddy.gif" title="לחץ להוספת משתמש זה לרשימת החברים שלך" border="0"></a>
<a href="javascript:makeRemote('https://rotter.net/cgi-bin/forum/Lib/view_user_kartis.pl?user=Gravemind')">
<img src="https://rotter.net/forum/Images/kartis.gif" border="0" alt="כרטיס אישי"></a>&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_ip&amp;forum=scoops1&amp;om=845227&amp;omm=29&amp;name=Gravemind"><img src="https://rotter.net/forum/Images/ip.gif" border="0" alt="עבור לצ'אט"></a>
&nbsp;</td></tr>
<tr bgcolor="#FDFDFD"><td colspan="2" width="100%">
<font size="2" face="Arial" color="#000099">
&nbsp;&nbsp;<font class="text16b">29. יואו איך הוא לכלך עלינו ביוטיוב אני זוכר את המנוול.&nbsp;&nbsp;</font><br>
<font size="1" face="Arial" color="#000099"><a href="#0">בתגובה להודעה מספר 0</a></font><br>&nbsp;<br>
<table border="0" cellpadding="5" cellspacing="0" width="70%" style="display: inline-table;">
<tbody><tr><td valign="top" width="50" nowrap="">&nbsp;&nbsp;</td><td valign="top" width="100%">
<font size="2" face="Arial" color="#000099"><font class="text15"><b> <br> </b><p> <br> </p></font></font></td></tr></tbody></table>
<br></font></td></tr><tr bgcolor="#eeeeee"><td align="right" valign="top" nowrap="">
<font size="1" face="Arial" color="#000099">
&nbsp; <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=edit&amp;forum=scoops1&amp;om=845227&amp;omm=29"><img src="https://rotter.net/forum/Images/edit.gif" border="0"></a> &nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=post&amp;forum=scoops1&amp;om=845227&amp;omm=29"><font size="1" face="Arial" color="#000099"><img src="https://rotter.net/forum/Images/response.gif" border="0"></font></a><font size="1" face="Arial" color="#000099"> &nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=read_count&amp;om=845227&amp;forum=scoops1&amp;viewmode=all"><img src="https://rotter.net/forum/Images/all.gif" border="0"></a></font><font size="1">&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=list&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/gobk.gif" border="0"></a>
&nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?quote=not_empty&amp;az=post&amp;forum=scoops1&amp;om=845227&amp;omm=29"><font size="1" face="Arial" color="#000099"> תגובה עם ציטוט </font></a>&nbsp; | <a href="javascript:updatePropertyDisplay('29')"><font face="Arial" color="#000099">תגובה מהירה</font></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcadmin.cgi?az=admin_board_manager&amp;command=admin_remove_messages&amp;forum=scoops1&amp;thread_select=845227&amp;selected=29" onclick="return confirm('למחוק תגובה?')"><font size="1" face="Arial" color="#000099">(ניהול: מחק תגובה)</font></a></font></font></td>
<td align="left" nowrap="">
<font size="1" face="Arial" color="#000099"><br>
מכתב זה והנלווה אליו, על אחריות ועל דעת הכותב בלבד
</font></td></tr></tbody></table></td></tr></tbody></table>
</td></tr></tbody></table>
<table border="0" width="100%" cellpadding="1" cellspacing="0">
<tbody><tr><td><table border="0" width="100%" cellpadding="1" cellspacing="0" bgcolor="#000000">
<tbody><tr><td><table border="0" width="100%" cellpadding="3" cellspacing="0">
<tbody><tr bgcolor="#eeeeee"><td align="RIGHT" valign="top" nowrap="" width="50%" rowspan="2">
<font size="2" face="Arial" color="#000099">
<a name="30"><b>Magimix</b></a>
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=Magimix"><img src="https://rotter.net/forum/Images/5_star.gif" border="0" alt="לחץ כאן להצגת דירוג המשתמש"></a><br>
<font size="1">חבר מתאריך 5.8.12</font><br>
<font size="1">8576 הודעות</font>, <font size="1" color="006633"> <b>30 מדרגים</b></font>, <font color="red" size="1"> <b>41 נקודות. &nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=Magimix"><font color="000099" size="-1"><u>ראה משוב</u></font></a></b></font></font></td><td align="LEFT" valign="top" width="50%" nowrap=""><font size="1" face="Arial" color="#000099"><font color="black">יום שני ז' בניסן תשפ''ד &nbsp;&nbsp;</font>
<font color="red">15:25</font> &nbsp; <font color="#eeeeee" size="1"> </font>15.04.24</font>&nbsp;&nbsp;&nbsp;</td></tr>
<tr bgcolor="#eeeeee"><td align="LEFT">
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=send_mesg&amp;userid=Magimix" target="_new"><img src="https://rotter.net/forum/Images/mesg.gif" border="0" title="לחץ לשליחת הודעה פרטית למשתמש"></a> <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=user_profiles&amp;user=Magimix"><img src="https://rotter.net/forum/Images/profile_small.gif" title="לחץ להצגת פרופיל המשתמש" border="0"></a><a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=add_buddy&amp;user=Magimix&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/mesg_add_buddy.gif" title="לחץ להוספת משתמש זה לרשימת החברים שלך" border="0"></a>
<a href="javascript:makeRemote('https://rotter.net/cgi-bin/forum/Lib/view_user_kartis.pl?user=Magimix')">
<img src="https://rotter.net/forum/Images/kartis.gif" border="0" alt="כרטיס אישי"></a>&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_ip&amp;forum=scoops1&amp;om=845227&amp;omm=30&amp;name=Magimix"><img src="https://rotter.net/forum/Images/ip.gif" border="0" alt="עבור לצ'אט"></a>
&nbsp;</td></tr>
<tr bgcolor="#FDFDFD"><td colspan="2" width="100%">
<font size="2" face="Arial" color="#000099">
&nbsp;&nbsp;<font class="text16b">30. בהצלחה לשני הצדדים&nbsp;&nbsp;</font><br>
<font size="1" face="Arial" color="#000099"><a href="#0">בתגובה להודעה מספר 0</a></font><br>&nbsp;<br>
<table border="0" cellpadding="5" cellspacing="0" width="70%" style="display: inline-table;">
<tbody><tr><td valign="top" width="50" nowrap="">&nbsp;&nbsp;</td><td valign="top" width="100%">
<font size="2" face="Arial" color="#000099"><font class="text15"><b> <br> </b><p> <br> </p></font></font></td></tr></tbody></table>
<br></font></td></tr><tr bgcolor="#eeeeee"><td align="right" valign="top" nowrap="">
<font size="1" face="Arial" color="#000099">
&nbsp; <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=edit&amp;forum=scoops1&amp;om=845227&amp;omm=30"><img src="https://rotter.net/forum/Images/edit.gif" border="0"></a> &nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=post&amp;forum=scoops1&amp;om=845227&amp;omm=30"><font size="1" face="Arial" color="#000099"><img src="https://rotter.net/forum/Images/response.gif" border="0"></font></a><font size="1" face="Arial" color="#000099"> &nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=read_count&amp;om=845227&amp;forum=scoops1&amp;viewmode=all"><img src="https://rotter.net/forum/Images/all.gif" border="0"></a></font><font size="1">&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=list&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/gobk.gif" border="0"></a>
&nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?quote=not_empty&amp;az=post&amp;forum=scoops1&amp;om=845227&amp;omm=30"><font size="1" face="Arial" color="#000099"> תגובה עם ציטוט </font></a>&nbsp; | <a href="javascript:updatePropertyDisplay('30')"><font face="Arial" color="#000099">תגובה מהירה</font></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcadmin.cgi?az=admin_board_manager&amp;command=admin_remove_messages&amp;forum=scoops1&amp;thread_select=845227&amp;selected=30" onclick="return confirm('למחוק תגובה?')"><font size="1" face="Arial" color="#000099">(ניהול: מחק תגובה)</font></a></font></font></td>
<td align="left" nowrap="">
<font size="1" face="Arial" color="#000099"><br>
מכתב זה והנלווה אליו, על אחריות ועל דעת הכותב בלבד
</font></td></tr></tbody></table></td></tr></tbody></table>
</td></tr></tbody></table>
<table border="0" width="100%" cellpadding="1" cellspacing="0">
<tbody><tr><td><table border="0" width="100%" cellpadding="1" cellspacing="0" bgcolor="#000000">
<tbody><tr><td><table border="0" width="100%" cellpadding="3" cellspacing="0">
<tbody><tr bgcolor="#eeeeee"><td align="RIGHT" valign="top" nowrap="" width="50%" rowspan="2">
<font size="2" face="Arial" color="#000099">
<a name="31"><b>udim</b></a>
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=udim"><img src="https://rotter.net/forum/Images/4_star.gif" border="0" alt="לחץ כאן להצגת דירוג המשתמש"></a><br>
<font size="1">חבר מתאריך 8.4.02</font><br>
<font size="1">1287 הודעות</font>, <font size="1" color="006633"> <b>19 מדרגים</b></font>, <font color="red" size="1"> <b>33 נקודות. &nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=udim"><font color="000099" size="-1"><u>ראה משוב</u></font></a></b></font></font></td><td align="LEFT" valign="top" width="50%" nowrap=""><font size="1" face="Arial" color="#000099"><font color="black">יום שני ז' בניסן תשפ''ד &nbsp;&nbsp;</font>
<font color="red">15:26</font> &nbsp; <font color="#eeeeee" size="1"> </font>15.04.24</font>&nbsp;&nbsp;&nbsp;</td></tr>
<tr bgcolor="#eeeeee"><td align="LEFT">
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=send_mesg&amp;userid=udim" target="_new"><img src="https://rotter.net/forum/Images/mesg.gif" border="0" title="לחץ לשליחת הודעה פרטית למשתמש"></a> <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=user_profiles&amp;user=udim"><img src="https://rotter.net/forum/Images/profile_small.gif" title="לחץ להצגת פרופיל המשתמש" border="0"></a><a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=add_buddy&amp;user=udim&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/mesg_add_buddy.gif" title="לחץ להוספת משתמש זה לרשימת החברים שלך" border="0"></a>
<a href="javascript:makeRemote('https://rotter.net/cgi-bin/forum/Lib/view_user_kartis.pl?user=udim')">
<img src="https://rotter.net/forum/Images/kartis.gif" border="0" alt="כרטיס אישי"></a>&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_ip&amp;forum=scoops1&amp;om=845227&amp;omm=31&amp;name=udim"><img src="https://rotter.net/forum/Images/ip.gif" border="0" alt="עבור לצ'אט"></a>
&nbsp;</td></tr>
<tr bgcolor="#FDFDFD"><td colspan="2" width="100%">
<font size="2" face="Arial" color="#000099">
&nbsp;&nbsp;<font class="text16b">31. השאלה היא אם הסכין לא היה קצר מדי...&nbsp;&nbsp;</font><br>
<font size="1" face="Arial" color="#000099"><a href="#0">בתגובה להודעה מספר 0</a></font><br>&nbsp;<br>
<table border="0" cellpadding="5" cellspacing="0" width="70%" style="display: inline-table;">
<tbody><tr><td valign="top" width="50" nowrap="">&nbsp;&nbsp;</td><td valign="top" width="100%">
<font size="2" face="Arial" color="#000099"><font class="text15"><b> <br> סליחה. זו שאלה לא רלוונטית באוסטרליה...</b><p> <br> </p></font></font></td></tr></tbody></table>
<br></font></td></tr><tr bgcolor="#eeeeee"><td align="right" valign="top" nowrap="">
<font size="1" face="Arial" color="#000099">
&nbsp; <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=edit&amp;forum=scoops1&amp;om=845227&amp;omm=31"><img src="https://rotter.net/forum/Images/edit.gif" border="0"></a> &nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=post&amp;forum=scoops1&amp;om=845227&amp;omm=31"><font size="1" face="Arial" color="#000099"><img src="https://rotter.net/forum/Images/response.gif" border="0"></font></a><font size="1" face="Arial" color="#000099"> &nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=read_count&amp;om=845227&amp;forum=scoops1&amp;viewmode=all"><img src="https://rotter.net/forum/Images/all.gif" border="0"></a></font><font size="1">&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=list&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/gobk.gif" border="0"></a>
&nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?quote=not_empty&amp;az=post&amp;forum=scoops1&amp;om=845227&amp;omm=31"><font size="1" face="Arial" color="#000099"> תגובה עם ציטוט </font></a>&nbsp; | <a href="javascript:updatePropertyDisplay('31')"><font face="Arial" color="#000099">תגובה מהירה</font></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcadmin.cgi?az=admin_board_manager&amp;command=admin_remove_messages&amp;forum=scoops1&amp;thread_select=845227&amp;selected=31" onclick="return confirm('למחוק תגובה?')"><font size="1" face="Arial" color="#000099">(ניהול: מחק תגובה)</font></a></font></font></td>
<td align="left" nowrap="">
<font size="1" face="Arial" color="#000099"><br>
מכתב זה והנלווה אליו, על אחריות ועל דעת הכותב בלבד
</font></td></tr></tbody></table></td></tr></tbody></table>
</td></tr></tbody></table>
<table border="0" width="100%" cellpadding="1" cellspacing="0">
<tbody><tr><td><table border="0" width="100%" cellpadding="1" cellspacing="0" bgcolor="#000000">
<tbody><tr><td><table border="0" width="100%" cellpadding="3" cellspacing="0">
<tbody><tr bgcolor="#eeeeee"><td align="RIGHT" valign="top" nowrap="" width="50%" rowspan="2">
<font size="2" face="Arial" color="#000099">
<a name="32"><b>קובון</b></a>
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=%F7%E5%E1%E5%EF"><img src="https://rotter.net/forum/Images/5_star.gif" border="0" alt="לחץ כאן להצגת דירוג המשתמש"></a><br>
<font size="1">חבר מתאריך 21.3.15</font><br>
<font size="1">7536 הודעות</font>, <font size="1" color="006633"> <b>58 מדרגים</b></font>, <font color="red" size="1"> <b>112 נקודות. &nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=%F7%E5%E1%E5%EF"><font color="000099" size="-1"><u>ראה משוב</u></font></a></b></font></font></td><td align="LEFT" valign="top" width="50%" nowrap=""><font size="1" face="Arial" color="#000099"><font color="black">יום שני ז' בניסן תשפ''ד &nbsp;&nbsp;</font>
<font color="red">15:27</font> &nbsp; <font color="#eeeeee" size="1"> </font>15.04.24</font>&nbsp;&nbsp;&nbsp;</td></tr>
<tr bgcolor="#eeeeee"><td align="LEFT">
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=send_mesg&amp;userid=%F7%E5%E1%E5%EF" target="_new"><img src="https://rotter.net/forum/Images/mesg.gif" border="0" title="לחץ לשליחת הודעה פרטית למשתמש"></a> <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=user_profiles&amp;user=%F7%E5%E1%E5%EF"><img src="https://rotter.net/forum/Images/profile_small.gif" title="לחץ להצגת פרופיל המשתמש" border="0"></a><a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=add_buddy&amp;user=%25F7%25E5%25E1%25E5%25EF&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/mesg_add_buddy.gif" title="לחץ להוספת משתמש זה לרשימת החברים שלך" border="0"></a>
<a href="javascript:makeRemote('https://rotter.net/cgi-bin/forum/Lib/view_user_kartis.pl?user=%F7%E5%E1%E5%EF')">
<img src="https://rotter.net/forum/Images/kartis.gif" border="0" alt="כרטיס אישי"></a>&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_ip&amp;forum=scoops1&amp;om=845227&amp;omm=32&amp;name=%F7%E5%E1%E5%EF"><img src="https://rotter.net/forum/Images/ip.gif" border="0" alt="עבור לצ'אט"></a>
&nbsp;</td></tr>
<tr bgcolor="#FDFDFD"><td colspan="2" width="100%">
<font size="2" face="Arial" color="#000099">
&nbsp;&nbsp;<font class="text16b">32. להההה....חברנו המוסלמים??? מי היה מאמין...&nbsp;&nbsp;</font><br>
<font size="1" face="Arial" color="#000099"><a href="#0">בתגובה להודעה מספר 0</a></font><br>&nbsp;<br>
<table border="0" cellpadding="5" cellspacing="0" width="70%" style="display: inline-table;">
<tbody><tr><td valign="top" width="50" nowrap="">&nbsp;&nbsp;</td><td valign="top" width="100%">
<font size="2" face="Arial" color="#000099"><font class="text15"><b> <br> נראה מתי יוציאו את דת האחווה והשלום הזאת מהחוק...</b><p> <br> </p></font></font></td></tr></tbody></table>
<br></font></td></tr><tr bgcolor="#eeeeee"><td align="right" valign="top" nowrap="">
<font size="1" face="Arial" color="#000099">
&nbsp; <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=edit&amp;forum=scoops1&amp;om=845227&amp;omm=32"><img src="https://rotter.net/forum/Images/edit.gif" border="0"></a> &nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=post&amp;forum=scoops1&amp;om=845227&amp;omm=32"><font size="1" face="Arial" color="#000099"><img src="https://rotter.net/forum/Images/response.gif" border="0"></font></a><font size="1" face="Arial" color="#000099"> &nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=read_count&amp;om=845227&amp;forum=scoops1&amp;viewmode=all"><img src="https://rotter.net/forum/Images/all.gif" border="0"></a></font><font size="1">&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=list&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/gobk.gif" border="0"></a>
&nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?quote=not_empty&amp;az=post&amp;forum=scoops1&amp;om=845227&amp;omm=32"><font size="1" face="Arial" color="#000099"> תגובה עם ציטוט </font></a>&nbsp; | <a href="javascript:updatePropertyDisplay('32')"><font face="Arial" color="#000099">תגובה מהירה</font></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcadmin.cgi?az=admin_board_manager&amp;command=admin_remove_messages&amp;forum=scoops1&amp;thread_select=845227&amp;selected=32" onclick="return confirm('למחוק תגובה?')"><font size="1" face="Arial" color="#000099">(ניהול: מחק תגובה)</font></a></font></font></td>
<td align="left" nowrap="">
<font size="1" face="Arial" color="#000099"><br>
מכתב זה והנלווה אליו, על אחריות ועל דעת הכותב בלבד
</font></td></tr></tbody></table></td></tr></tbody></table>
</td></tr></tbody></table>
<table border="0" width="100%" cellpadding="1" cellspacing="0">
<tbody><tr><td><table border="0" width="100%" cellpadding="1" cellspacing="0" bgcolor="#000000">
<tbody><tr><td><table border="0" width="100%" cellpadding="3" cellspacing="0">
<tbody><tr bgcolor="#eeeeee"><td align="RIGHT" valign="top" nowrap="" width="50%" rowspan="2">
<font size="2" face="Arial" color="#000099">
<a name="33"><b>מזל דלי</b></a>
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=%EE%E6%EC%20%E3%EC%E9"><img src="https://rotter.net/forum/Images/5_star.gif" border="0" alt="לחץ כאן להצגת דירוג המשתמש"></a><br>
<font size="1">חבר מתאריך 6.3.18</font><br>
<font size="1">55543 הודעות</font>, <font size="1" color="006633"> <b>161 מדרגים</b></font>, <font color="red" size="1"> <b>310 נקודות. &nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=%EE%E6%EC%20%E3%EC%E9"><font color="000099" size="-1"><u>ראה משוב</u></font></a></b></font></font></td><td align="LEFT" valign="top" width="50%" nowrap=""><font size="1" face="Arial" color="#000099"><font color="black">יום שני ז' בניסן תשפ''ד &nbsp;&nbsp;</font>
<font color="red">15:32</font> &nbsp; <font color="#eeeeee" size="1"> </font>15.04.24</font>&nbsp;&nbsp;&nbsp;</td></tr>
<tr bgcolor="#eeeeee"><td align="LEFT">
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=send_mesg&amp;userid=%EE%E6%EC%20%E3%EC%E9" target="_new"><img src="https://rotter.net/forum/Images/mesg.gif" border="0" title="לחץ לשליחת הודעה פרטית למשתמש"></a> <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=user_profiles&amp;user=%EE%E6%EC%20%E3%EC%E9"><img src="https://rotter.net/forum/Images/profile_small.gif" title="לחץ להצגת פרופיל המשתמש" border="0"></a><a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=add_buddy&amp;user=%25EE%25E6%25EC%2520%25E3%25EC%25E9&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/mesg_add_buddy.gif" title="לחץ להוספת משתמש זה לרשימת החברים שלך" border="0"></a>
<a href="javascript:makeRemote('https://rotter.net/cgi-bin/forum/Lib/view_user_kartis.pl?user=%EE%E6%EC%20%E3%EC%E9')">
<img src="https://rotter.net/forum/Images/kartis.gif" border="0" alt="כרטיס אישי"></a>&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_ip&amp;forum=scoops1&amp;om=845227&amp;omm=33&amp;name=%EE%E6%EC%20%E3%EC%E9"><img src="https://rotter.net/forum/Images/ip.gif" border="0" alt="עבור לצ'אט"></a>
&nbsp;</td></tr>
<tr bgcolor="#FDFDFD"><td colspan="2" width="100%">
<font size="2" face="Arial" color="#000099">
&nbsp;&nbsp;<font class="text16b">33. קבל את עונשו בלייב&nbsp;&nbsp;</font><br>
<font size="1" face="Arial" color="#000099"><a href="#0">בתגובה להודעה מספר 0</a></font><br>&nbsp;<br>
<table border="0" cellpadding="5" cellspacing="0" width="70%" style="display: inline-table;">
<tbody><tr><td valign="top" width="50" nowrap="">&nbsp;&nbsp;</td><td valign="top" width="100%">
<font size="2" face="Arial" color="#000099"><font class="text15"><b> <br> </b><p> <br> </p></font></font></td></tr></tbody></table>
<br></font></td></tr><tr bgcolor="#eeeeee"><td align="right" valign="top" nowrap="">
<font size="1" face="Arial" color="#000099">
&nbsp; <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=edit&amp;forum=scoops1&amp;om=845227&amp;omm=33"><img src="https://rotter.net/forum/Images/edit.gif" border="0"></a> &nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=post&amp;forum=scoops1&amp;om=845227&amp;omm=33"><font size="1" face="Arial" color="#000099"><img src="https://rotter.net/forum/Images/response.gif" border="0"></font></a><font size="1" face="Arial" color="#000099"> &nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=read_count&amp;om=845227&amp;forum=scoops1&amp;viewmode=all"><img src="https://rotter.net/forum/Images/all.gif" border="0"></a></font><font size="1">&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=list&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/gobk.gif" border="0"></a>
&nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?quote=not_empty&amp;az=post&amp;forum=scoops1&amp;om=845227&amp;omm=33"><font size="1" face="Arial" color="#000099"> תגובה עם ציטוט </font></a>&nbsp; | <a href="javascript:updatePropertyDisplay('33')"><font face="Arial" color="#000099">תגובה מהירה</font></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcadmin.cgi?az=admin_board_manager&amp;command=admin_remove_messages&amp;forum=scoops1&amp;thread_select=845227&amp;selected=33" onclick="return confirm('למחוק תגובה?')"><font size="1" face="Arial" color="#000099">(ניהול: מחק תגובה)</font></a></font></font></td>
<td align="left" nowrap="">
<font size="1" face="Arial" color="#000099"><br>
מכתב זה והנלווה אליו, על אחריות ועל דעת הכותב בלבד
</font></td></tr></tbody></table></td></tr></tbody></table>
</td></tr></tbody></table>
<table border="0" width="100%" cellpadding="1" cellspacing="0">
<tbody><tr><td><table border="0" width="100%" cellpadding="1" cellspacing="0" bgcolor="#000000">
<tbody><tr><td><table border="0" width="100%" cellpadding="3" cellspacing="0">
<tbody><tr bgcolor="#eeeeee"><td align="RIGHT" valign="top" nowrap="" width="50%" rowspan="2">
<font size="2" face="Arial" color="#000099">
<a name="35"><b>Brasilver</b></a>
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=Brasilver"><img src="https://rotter.net/forum/Images/5_star.gif" border="0" alt="לחץ כאן להצגת דירוג המשתמש"></a><br>
<font size="1">חבר מתאריך 7.8.17</font><br>
<font size="1">24294 הודעות</font>, <font size="1" color="006633"> <b>58 מדרגים</b></font>, <font color="red" size="1"> <b>115 נקודות. &nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=Brasilver"><font color="000099" size="-1"><u>ראה משוב</u></font></a></b></font></font></td><td align="LEFT" valign="top" width="50%" nowrap=""><font size="1" face="Arial" color="#000099"><font color="black">יום שני ז' בניסן תשפ''ד &nbsp;&nbsp;</font>
<font color="red">15:33</font> &nbsp; <font color="#eeeeee" size="1"> </font>15.04.24</font>&nbsp;&nbsp;&nbsp;</td></tr>
<tr bgcolor="#eeeeee"><td align="LEFT">
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=send_mesg&amp;userid=Brasilver" target="_new"><img src="https://rotter.net/forum/Images/mesg.gif" border="0" title="לחץ לשליחת הודעה פרטית למשתמש"></a> <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=user_profiles&amp;user=Brasilver"><img src="https://rotter.net/forum/Images/profile_small.gif" title="לחץ להצגת פרופיל המשתמש" border="0"></a><a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=add_buddy&amp;user=Brasilver&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/mesg_add_buddy.gif" title="לחץ להוספת משתמש זה לרשימת החברים שלך" border="0"></a>
<a href="javascript:makeRemote('https://rotter.net/cgi-bin/forum/Lib/view_user_kartis.pl?user=Brasilver')">
<img src="https://rotter.net/forum/Images/kartis.gif" border="0" alt="כרטיס אישי"></a>&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_ip&amp;forum=scoops1&amp;om=845227&amp;omm=35&amp;name=Brasilver"><img src="https://rotter.net/forum/Images/ip.gif" border="0" alt="עבור לצ'אט"></a>
&nbsp;</td></tr>
<tr bgcolor="#FDFDFD"><td colspan="2" width="100%">
<font size="2" face="Arial" color="#000099">
&nbsp;&nbsp;<font class="text16b">35. תאונה עצמית ..&nbsp;&nbsp;</font><br>
<font size="1" face="Arial" color="#000099"><a href="#0">בתגובה להודעה מספר 0</a></font><br>&nbsp;<br>
<table border="0" cellpadding="5" cellspacing="0" width="70%" style="display: inline-table;">
<tbody><tr><td valign="top" width="50" nowrap="">&nbsp;&nbsp;</td><td valign="top" width="100%">
<font size="2" face="Arial" color="#000099"><font class="text15"><b> <br> </b><p> <br> </p></font></font></td></tr></tbody></table>
<br></font></td></tr><tr bgcolor="#eeeeee"><td align="right" valign="top" nowrap="">
<font size="1" face="Arial" color="#000099">
&nbsp; <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=edit&amp;forum=scoops1&amp;om=845227&amp;omm=35"><img src="https://rotter.net/forum/Images/edit.gif" border="0"></a> &nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=post&amp;forum=scoops1&amp;om=845227&amp;omm=35"><font size="1" face="Arial" color="#000099"><img src="https://rotter.net/forum/Images/response.gif" border="0"></font></a><font size="1" face="Arial" color="#000099"> &nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=read_count&amp;om=845227&amp;forum=scoops1&amp;viewmode=all"><img src="https://rotter.net/forum/Images/all.gif" border="0"></a></font><font size="1">&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=list&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/gobk.gif" border="0"></a>
&nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?quote=not_empty&amp;az=post&amp;forum=scoops1&amp;om=845227&amp;omm=35"><font size="1" face="Arial" color="#000099"> תגובה עם ציטוט </font></a>&nbsp; | <a href="javascript:updatePropertyDisplay('35')"><font face="Arial" color="#000099">תגובה מהירה</font></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcadmin.cgi?az=admin_board_manager&amp;command=admin_remove_messages&amp;forum=scoops1&amp;thread_select=845227&amp;selected=35" onclick="return confirm('למחוק תגובה?')"><font size="1" face="Arial" color="#000099">(ניהול: מחק תגובה)</font></a></font></font></td>
<td align="left" nowrap="">
<font size="1" face="Arial" color="#000099"><br>
מכתב זה והנלווה אליו, על אחריות ועל דעת הכותב בלבד
</font></td></tr></tbody></table></td></tr></tbody></table>
</td></tr></tbody></table>
<table border="0" width="100%" cellpadding="1" cellspacing="0">
<tbody><tr><td><table border="0" width="100%" cellpadding="1" cellspacing="0" bgcolor="#000000">
<tbody><tr><td><table border="0" width="100%" cellpadding="3" cellspacing="0">
<tbody><tr bgcolor="#eeeeee"><td align="RIGHT" valign="top" nowrap="" width="50%" rowspan="2">
<font size="2" face="Arial" color="#000099">
<a name="36"><b>פובליציסט</b></a>
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=%F4%E5%E1%EC%E9%F6%E9%F1%E8"><img src="https://rotter.net/forum/Images/5_star.gif" border="0" alt="לחץ כאן להצגת דירוג המשתמש"></a><br>
<font size="1">חבר מתאריך 19.2.15</font><br>
<font size="1">15188 הודעות</font>, <font size="1" color="006633"> <b>124 מדרגים</b></font>, <font color="red" size="1"> <b>227 נקודות. &nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=%F4%E5%E1%EC%E9%F6%E9%F1%E8"><font color="000099" size="-1"><u>ראה משוב</u></font></a></b></font></font></td><td align="LEFT" valign="top" width="50%" nowrap=""><font size="1" face="Arial" color="#000099"><font color="black">יום שני ז' בניסן תשפ''ד &nbsp;&nbsp;</font>
<font color="red">15:39</font> &nbsp; <font color="#eeeeee" size="1"> </font>15.04.24</font>&nbsp;&nbsp;&nbsp;</td></tr>
<tr bgcolor="#eeeeee"><td align="LEFT">
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=send_mesg&amp;userid=%F4%E5%E1%EC%E9%F6%E9%F1%E8" target="_new"><img src="https://rotter.net/forum/Images/mesg.gif" border="0" title="לחץ לשליחת הודעה פרטית למשתמש"></a> <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=user_profiles&amp;user=%F4%E5%E1%EC%E9%F6%E9%F1%E8"><img src="https://rotter.net/forum/Images/profile_small.gif" title="לחץ להצגת פרופיל המשתמש" border="0"></a><a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=add_buddy&amp;user=%25F4%25E5%25E1%25EC%25E9%25F6%25E9%25F1%25E8&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/mesg_add_buddy.gif" title="לחץ להוספת משתמש זה לרשימת החברים שלך" border="0"></a>
<a href="javascript:makeRemote('https://rotter.net/cgi-bin/forum/Lib/view_user_kartis.pl?user=%F4%E5%E1%EC%E9%F6%E9%F1%E8')">
<img src="https://rotter.net/forum/Images/kartis.gif" border="0" alt="כרטיס אישי"></a>&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_ip&amp;forum=scoops1&amp;om=845227&amp;omm=36&amp;name=%F4%E5%E1%EC%E9%F6%E9%F1%E8"><img src="https://rotter.net/forum/Images/ip.gif" border="0" alt="עבור לצ'אט"></a>
&nbsp;</td></tr>
<tr bgcolor="#FDFDFD"><td colspan="2" width="100%">
<font size="2" face="Arial" color="#000099">
&nbsp;&nbsp;<font class="text16b">36. בהצלחה לשני הצדדים&nbsp;&nbsp;</font><br>
<font size="1" face="Arial" color="#000099"><a href="#0">בתגובה להודעה מספר 0</a></font><br>&nbsp;<br>
<table border="0" cellpadding="5" cellspacing="0" width="70%" style="display: inline-table;">
<tbody><tr><td valign="top" width="50" nowrap="">&nbsp;&nbsp;</td><td valign="top" width="100%">
<font size="2" face="Arial" color="#000099"><font class="text15"><b> <br> </b><p> <br> </p></font></font></td></tr></tbody></table>
<br></font></td></tr><tr bgcolor="#eeeeee"><td align="right" valign="top" nowrap="">
<font size="1" face="Arial" color="#000099">
&nbsp; <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=edit&amp;forum=scoops1&amp;om=845227&amp;omm=36"><img src="https://rotter.net/forum/Images/edit.gif" border="0"></a> &nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=post&amp;forum=scoops1&amp;om=845227&amp;omm=36"><font size="1" face="Arial" color="#000099"><img src="https://rotter.net/forum/Images/response.gif" border="0"></font></a><font size="1" face="Arial" color="#000099"> &nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=read_count&amp;om=845227&amp;forum=scoops1&amp;viewmode=all"><img src="https://rotter.net/forum/Images/all.gif" border="0"></a></font><font size="1">&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=list&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/gobk.gif" border="0"></a>
&nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?quote=not_empty&amp;az=post&amp;forum=scoops1&amp;om=845227&amp;omm=36"><font size="1" face="Arial" color="#000099"> תגובה עם ציטוט </font></a>&nbsp; | <a href="javascript:updatePropertyDisplay('36')"><font face="Arial" color="#000099">תגובה מהירה</font></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcadmin.cgi?az=admin_board_manager&amp;command=admin_remove_messages&amp;forum=scoops1&amp;thread_select=845227&amp;selected=36" onclick="return confirm('למחוק תגובה?')"><font size="1" face="Arial" color="#000099">(ניהול: מחק תגובה)</font></a></font></font></td>
<td align="left" nowrap="">
<font size="1" face="Arial" color="#000099"><br>
מכתב זה והנלווה אליו, על אחריות ועל דעת הכותב בלבד
</font></td></tr></tbody></table></td></tr></tbody></table>
</td></tr></tbody></table>
<table border="0" width="100%" cellpadding="1" cellspacing="0">
<tbody><tr><td><table border="0" width="100%" cellpadding="1" cellspacing="0" bgcolor="#000000">
<tbody><tr><td><table border="0" width="100%" cellpadding="3" cellspacing="0">
<tbody><tr bgcolor="#eeeeee"><td align="RIGHT" valign="top" nowrap="" width="50%" rowspan="2">
<font size="2" face="Arial" color="#000099">
<a name="37"><b>elib</b></a>
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=elib"><img src="https://rotter.net/forum/Images/5_star.gif" border="0" alt="לחץ כאן להצגת דירוג המשתמש"></a><br>
<font size="1">חבר מתאריך 13.12.07</font><br>
<font size="1">19918 הודעות</font>, <font size="1" color="006633"> <b>111 מדרגים</b></font>, <font color="red" size="1"> <b>131 נקודות. &nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=elib"><font color="000099" size="-1"><u>ראה משוב</u></font></a></b></font></font></td><td align="LEFT" valign="top" width="50%" nowrap=""><font size="1" face="Arial" color="#000099"><font color="black">יום שני ז' בניסן תשפ''ד &nbsp;&nbsp;</font>
<font color="red">15:39</font> &nbsp; <font color="#eeeeee" size="1"> </font>15.04.24</font>&nbsp;&nbsp;&nbsp;</td></tr>
<tr bgcolor="#eeeeee"><td align="LEFT">
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=send_mesg&amp;userid=elib" target="_new"><img src="https://rotter.net/forum/Images/mesg.gif" border="0" title="לחץ לשליחת הודעה פרטית למשתמש"></a> <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=user_profiles&amp;user=elib"><img src="https://rotter.net/forum/Images/profile_small.gif" title="לחץ להצגת פרופיל המשתמש" border="0"></a><a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=add_buddy&amp;user=elib&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/mesg_add_buddy.gif" title="לחץ להוספת משתמש זה לרשימת החברים שלך" border="0"></a>
<a href="javascript:makeRemote('https://rotter.net/cgi-bin/forum/Lib/view_user_kartis.pl?user=elib')">
<img src="https://rotter.net/forum/Images/kartis.gif" border="0" alt="כרטיס אישי"></a>&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_ip&amp;forum=scoops1&amp;om=845227&amp;omm=37&amp;name=elib"><img src="https://rotter.net/forum/Images/ip.gif" border="0" alt="עבור לצ'אט"></a>
&nbsp;</td></tr>
<tr bgcolor="#FDFDFD"><td colspan="2" width="100%">
<font size="2" face="Arial" color="#000099">
&nbsp;&nbsp;<font class="text16b">37. הנוצרי סופר סופר אנטישמי ימח שמו&nbsp;&nbsp;</font><br>
<font size="1" face="Arial" color="#000099"><a href="#0">בתגובה להודעה מספר 0</a></font><br>&nbsp;<br>
<table border="0" cellpadding="5" cellspacing="0" width="70%" style="display: inline-table;">
<tbody><tr><td valign="top" width="50" nowrap="">&nbsp;&nbsp;</td><td valign="top" width="100%">
<font size="2" face="Arial" color="#000099"><font class="text15"><b> <br> </b><p> <br> </p></font></font></td></tr></tbody></table>
<br></font></td></tr><tr bgcolor="#eeeeee"><td align="right" valign="top" nowrap="">
<font size="1" face="Arial" color="#000099">
&nbsp; <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=edit&amp;forum=scoops1&amp;om=845227&amp;omm=37"><img src="https://rotter.net/forum/Images/edit.gif" border="0"></a> &nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=post&amp;forum=scoops1&amp;om=845227&amp;omm=37"><font size="1" face="Arial" color="#000099"><img src="https://rotter.net/forum/Images/response.gif" border="0"></font></a><font size="1" face="Arial" color="#000099"> &nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=read_count&amp;om=845227&amp;forum=scoops1&amp;viewmode=all"><img src="https://rotter.net/forum/Images/all.gif" border="0"></a></font><font size="1">&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=list&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/gobk.gif" border="0"></a>
&nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?quote=not_empty&amp;az=post&amp;forum=scoops1&amp;om=845227&amp;omm=37"><font size="1" face="Arial" color="#000099"> תגובה עם ציטוט </font></a>&nbsp; | <a href="javascript:updatePropertyDisplay('37')"><font face="Arial" color="#000099">תגובה מהירה</font></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcadmin.cgi?az=admin_board_manager&amp;command=admin_remove_messages&amp;forum=scoops1&amp;thread_select=845227&amp;selected=37" onclick="return confirm('למחוק תגובה?')"><font size="1" face="Arial" color="#000099">(ניהול: מחק תגובה)</font></a></font></font></td>
<td align="left" nowrap="">
<font size="1" face="Arial" color="#000099"><br>
מכתב זה והנלווה אליו, על אחריות ועל דעת הכותב בלבד
</font></td></tr></tbody></table></td></tr></tbody></table>
</td></tr></tbody></table>
<table border="0" width="100%" cellpadding="1" cellspacing="0">
<tbody><tr><td><table border="0" width="100%" cellpadding="1" cellspacing="0" bgcolor="#000000">
<tbody><tr><td><table border="0" width="100%" cellpadding="3" cellspacing="0">
<tbody><tr bgcolor="#eeeeee"><td align="RIGHT" valign="top" nowrap="" width="50%" rowspan="2">
<font size="2" face="Arial" color="#000099">
<a name="38"><b>avivikan</b></a>
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=avivikan"><img src="https://rotter.net/forum/Images/2_star.gif" border="0" alt="לחץ כאן להצגת דירוג המשתמש"></a><br>
<font size="1">חבר מתאריך 2.5.16</font><br>
<font size="1">1661 הודעות</font>, <font size="1" color="006633"> <b>10 מדרגים</b></font>, <font color="red" size="1"> <b>16 נקודות. &nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=avivikan"><font color="000099" size="-1"><u>ראה משוב</u></font></a></b></font></font></td><td align="LEFT" valign="top" width="50%" nowrap=""><font size="1" face="Arial" color="#000099"><font color="black">יום שני ז' בניסן תשפ''ד &nbsp;&nbsp;</font>
<font color="red">15:45</font> &nbsp; <font color="#eeeeee" size="1"> </font>15.04.24</font>&nbsp;&nbsp;&nbsp;</td></tr>
<tr bgcolor="#eeeeee"><td align="LEFT">
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=send_mesg&amp;userid=avivikan" target="_new"><img src="https://rotter.net/forum/Images/mesg.gif" border="0" title="לחץ לשליחת הודעה פרטית למשתמש"></a> <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=user_profiles&amp;user=avivikan"><img src="https://rotter.net/forum/Images/profile_small.gif" title="לחץ להצגת פרופיל המשתמש" border="0"></a><a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=add_buddy&amp;user=avivikan&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/mesg_add_buddy.gif" title="לחץ להוספת משתמש זה לרשימת החברים שלך" border="0"></a>
<a href="javascript:makeRemote('https://rotter.net/cgi-bin/forum/Lib/view_user_kartis.pl?user=avivikan')">
<img src="https://rotter.net/forum/Images/kartis.gif" border="0" alt="כרטיס אישי"></a>&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_ip&amp;forum=scoops1&amp;om=845227&amp;omm=38&amp;name=avivikan"><img src="https://rotter.net/forum/Images/ip.gif" border="0" alt="עבור לצ'אט"></a>
&nbsp;</td></tr>
<tr bgcolor="#FDFDFD"><td colspan="2" width="100%">
<font size="2" face="Arial" color="#000099">
&nbsp;&nbsp;<font class="text16b">38. עלו והצליחו יחדיו&nbsp;&nbsp;</font><br>
<font size="1" face="Arial" color="#000099"><a href="#0">בתגובה להודעה מספר 0</a></font><br>&nbsp;<br>
<table border="0" cellpadding="5" cellspacing="0" width="70%" style="display: inline-table;">
<tbody><tr><td valign="top" width="50" nowrap="">&nbsp;&nbsp;</td><td valign="top" width="100%">
<font size="2" face="Arial" color="#000099"><font class="text15"><b> <br> </b><p> <br> </p></font></font></td></tr></tbody></table>
<br></font></td></tr><tr bgcolor="#eeeeee"><td align="right" valign="top" nowrap="">
<font size="1" face="Arial" color="#000099">
&nbsp; <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=edit&amp;forum=scoops1&amp;om=845227&amp;omm=38"><img src="https://rotter.net/forum/Images/edit.gif" border="0"></a> &nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=post&amp;forum=scoops1&amp;om=845227&amp;omm=38"><font size="1" face="Arial" color="#000099"><img src="https://rotter.net/forum/Images/response.gif" border="0"></font></a><font size="1" face="Arial" color="#000099"> &nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=read_count&amp;om=845227&amp;forum=scoops1&amp;viewmode=all"><img src="https://rotter.net/forum/Images/all.gif" border="0"></a></font><font size="1">&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=list&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/gobk.gif" border="0"></a>
&nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?quote=not_empty&amp;az=post&amp;forum=scoops1&amp;om=845227&amp;omm=38"><font size="1" face="Arial" color="#000099"> תגובה עם ציטוט </font></a>&nbsp; | <a href="javascript:updatePropertyDisplay('38')"><font face="Arial" color="#000099">תגובה מהירה</font></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcadmin.cgi?az=admin_board_manager&amp;command=admin_remove_messages&amp;forum=scoops1&amp;thread_select=845227&amp;selected=38" onclick="return confirm('למחוק תגובה?')"><font size="1" face="Arial" color="#000099">(ניהול: מחק תגובה)</font></a></font></font></td>
<td align="left" nowrap="">
<font size="1" face="Arial" color="#000099"><br>
מכתב זה והנלווה אליו, על אחריות ועל דעת הכותב בלבד
</font></td></tr></tbody></table></td></tr></tbody></table>
</td></tr></tbody></table>
<table border="0" width="100%" cellpadding="1" cellspacing="0">
<tbody><tr><td><table border="0" width="100%" cellpadding="1" cellspacing="0" bgcolor="#000000">
<tbody><tr><td><table border="0" width="100%" cellpadding="3" cellspacing="0">
<tbody><tr bgcolor="#eeeeee"><td align="RIGHT" valign="top" nowrap="" width="50%" rowspan="2">
<font size="2" face="Arial" color="#000099">
<a name="39"><b>יוסריאן</b></a>
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=%E9%E5%F1%F8%E9%E0%EF"><img src="https://rotter.net/forum/Images/5_star.gif" border="0" alt="לחץ כאן להצגת דירוג המשתמש"></a><br>
<font size="1">חבר מתאריך 2.4.12</font><br>
<font size="1">58377 הודעות</font>, <font size="1" color="006633"> <b>405 מדרגים</b></font>, <font color="red" size="1"> <b>794 נקודות. &nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=%E9%E5%F1%F8%E9%E0%EF"><font color="000099" size="-1"><u>ראה משוב</u></font></a></b></font></font></td><td align="LEFT" valign="top" width="50%" nowrap=""><font size="1" face="Arial" color="#000099"><font color="black">יום שני ז' בניסן תשפ''ד &nbsp;&nbsp;</font>
<font color="red">15:58</font> &nbsp; <font color="#eeeeee" size="1"> </font>15.04.24</font>&nbsp;&nbsp;&nbsp;</td></tr>
<tr bgcolor="#eeeeee"><td align="LEFT">
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=send_mesg&amp;userid=%E9%E5%F1%F8%E9%E0%EF" target="_new"><img src="https://rotter.net/forum/Images/mesg.gif" border="0" title="לחץ לשליחת הודעה פרטית למשתמש"></a> <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=user_profiles&amp;user=%E9%E5%F1%F8%E9%E0%EF"><img src="https://rotter.net/forum/Images/profile_small.gif" title="לחץ להצגת פרופיל המשתמש" border="0"></a><a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=add_buddy&amp;user=%25E9%25E5%25F1%25F8%25E9%25E0%25EF&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/mesg_add_buddy.gif" title="לחץ להוספת משתמש זה לרשימת החברים שלך" border="0"></a>
<a href="javascript:makeRemote('https://rotter.net/cgi-bin/forum/Lib/view_user_kartis.pl?user=%E9%E5%F1%F8%E9%E0%EF')">
<img src="https://rotter.net/forum/Images/kartis.gif" border="0" alt="כרטיס אישי"></a>&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_ip&amp;forum=scoops1&amp;om=845227&amp;omm=39&amp;name=%E9%E5%F1%F8%E9%E0%EF"><img src="https://rotter.net/forum/Images/ip.gif" border="0" alt="עבור לצ'אט"></a>
&nbsp;</td></tr>
<tr bgcolor="#FDFDFD"><td colspan="2" width="100%">
<font size="2" face="Arial" color="#000099">
&nbsp;&nbsp;<font class="text16b">39. יש לי חשש את מי הם ינסו לשחוט בסולחה&nbsp;&nbsp;</font><br>
<font size="1" face="Arial" color="#000099"><a href="#0">בתגובה להודעה מספר 0</a></font><br>&nbsp;<br>
<table border="0" cellpadding="5" cellspacing="0" width="70%" style="display: inline-table;">
<tbody><tr><td valign="top" width="50" nowrap="">&nbsp;&nbsp;</td><td valign="top" width="100%">
<font size="2" face="Arial" color="#000099"><font class="text15"><b> <br> </b><p> <br> </p></font></font></td></tr></tbody></table>
<br></font></td></tr><tr bgcolor="#eeeeee"><td align="right" valign="top" nowrap="">
<font size="1" face="Arial" color="#000099">
&nbsp; <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=edit&amp;forum=scoops1&amp;om=845227&amp;omm=39"><img src="https://rotter.net/forum/Images/edit.gif" border="0"></a> &nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=post&amp;forum=scoops1&amp;om=845227&amp;omm=39"><font size="1" face="Arial" color="#000099"><img src="https://rotter.net/forum/Images/response.gif" border="0"></font></a><font size="1" face="Arial" color="#000099"> &nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=read_count&amp;om=845227&amp;forum=scoops1&amp;viewmode=all"><img src="https://rotter.net/forum/Images/all.gif" border="0"></a></font><font size="1">&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=list&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/gobk.gif" border="0"></a>
&nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?quote=not_empty&amp;az=post&amp;forum=scoops1&amp;om=845227&amp;omm=39"><font size="1" face="Arial" color="#000099"> תגובה עם ציטוט </font></a>&nbsp; | <a href="javascript:updatePropertyDisplay('39')"><font face="Arial" color="#000099">תגובה מהירה</font></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcadmin.cgi?az=admin_board_manager&amp;command=admin_remove_messages&amp;forum=scoops1&amp;thread_select=845227&amp;selected=39" onclick="return confirm('למחוק תגובה?')"><font size="1" face="Arial" color="#000099">(ניהול: מחק תגובה)</font></a></font></font></td>
<td align="left" nowrap="">
<font size="1" face="Arial" color="#000099"><br>
מכתב זה והנלווה אליו, על אחריות ועל דעת הכותב בלבד
</font></td></tr></tbody></table></td></tr></tbody></table>
</td></tr></tbody></table>
<table border="0" width="100%" cellpadding="1" cellspacing="0">
<tbody><tr><td><table border="0" width="100%" cellpadding="1" cellspacing="0" bgcolor="#000000">
<tbody><tr><td><table border="0" width="100%" cellpadding="3" cellspacing="0">
<tbody><tr bgcolor="#eeeeee"><td align="RIGHT" valign="top" nowrap="" width="50%" rowspan="2">
<font size="2" face="Arial" color="#000099">
<a name="40"><b>אביר_לב</b></a>
<br>
<font size="1">חבר מתאריך 18.5.21</font><br>
<font size="1">866 הודעות</font></font></td><td align="LEFT" valign="top" width="50%" nowrap=""><font size="1" face="Arial" color="#000099"><font color="black">יום שני ז' בניסן תשפ''ד &nbsp;&nbsp;</font>
<font color="red">16:02</font> &nbsp; <font color="#eeeeee" size="1"> </font>15.04.24</font>&nbsp;&nbsp;&nbsp;</td></tr>
<tr bgcolor="#eeeeee"><td align="LEFT">
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=send_mesg&amp;userid=%E0%E1%E9%F8_%EC%E1" target="_new"><img src="https://rotter.net/forum/Images/mesg.gif" border="0" title="לחץ לשליחת הודעה פרטית למשתמש"></a> <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=user_profiles&amp;user=%E0%E1%E9%F8_%EC%E1"><img src="https://rotter.net/forum/Images/profile_small.gif" title="לחץ להצגת פרופיל המשתמש" border="0"></a><a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=add_buddy&amp;user=%25E0%25E1%25E9%25F8_%25EC%25E1&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/mesg_add_buddy.gif" title="לחץ להוספת משתמש זה לרשימת החברים שלך" border="0"></a>
<a href="javascript:makeRemote('https://rotter.net/cgi-bin/forum/Lib/view_user_kartis.pl?user=%E0%E1%E9%F8_%EC%E1')">
<img src="https://rotter.net/forum/Images/kartis.gif" border="0" alt="כרטיס אישי"></a>&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_ip&amp;forum=scoops1&amp;om=845227&amp;omm=40&amp;name=%E0%E1%E9%F8_%EC%E1"><img src="https://rotter.net/forum/Images/ip.gif" border="0" alt="עבור לצ'אט"></a>
&nbsp;</td></tr>
<tr bgcolor="#FDFDFD"><td colspan="2" width="100%">
<font size="2" face="Arial" color="#000099">
&nbsp;&nbsp;<font class="text16b">40. גזע ודת של נחותים, חייבים להשמיד אותם כדי להציל את העולם&nbsp;&nbsp;</font><br>
<font size="1" face="Arial" color="#000099"><a href="#0">בתגובה להודעה מספר 0</a></font><br>&nbsp;<br>
<table border="0" cellpadding="5" cellspacing="0" width="70%" style="display: inline-table;">
<tbody><tr><td valign="top" width="50" nowrap="">&nbsp;&nbsp;</td><td valign="top" width="100%">
<font size="2" face="Arial" color="#000099"><font class="text15"><b> <br> </b><p> <br> </p></font></font></td></tr></tbody></table>
<br></font></td></tr><tr bgcolor="#eeeeee"><td align="right" valign="top" nowrap="">
<font size="1" face="Arial" color="#000099">
&nbsp; <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=edit&amp;forum=scoops1&amp;om=845227&amp;omm=40"><img src="https://rotter.net/forum/Images/edit.gif" border="0"></a> &nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=post&amp;forum=scoops1&amp;om=845227&amp;omm=40"><font size="1" face="Arial" color="#000099"><img src="https://rotter.net/forum/Images/response.gif" border="0"></font></a><font size="1" face="Arial" color="#000099"> &nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=read_count&amp;om=845227&amp;forum=scoops1&amp;viewmode=all"><img src="https://rotter.net/forum/Images/all.gif" border="0"></a></font><font size="1">&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=list&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/gobk.gif" border="0"></a>
&nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?quote=not_empty&amp;az=post&amp;forum=scoops1&amp;om=845227&amp;omm=40"><font size="1" face="Arial" color="#000099"> תגובה עם ציטוט </font></a>&nbsp; | <a href="javascript:updatePropertyDisplay('40')"><font face="Arial" color="#000099">תגובה מהירה</font></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcadmin.cgi?az=admin_board_manager&amp;command=admin_remove_messages&amp;forum=scoops1&amp;thread_select=845227&amp;selected=40" onclick="return confirm('למחוק תגובה?')"><font size="1" face="Arial" color="#000099">(ניהול: מחק תגובה)</font></a></font></font></td>
<td align="left" nowrap="">
<font size="1" face="Arial" color="#000099"><br>
מכתב זה והנלווה אליו, על אחריות ועל דעת הכותב בלבד
</font></td></tr></tbody></table></td></tr></tbody></table>
</td></tr></tbody></table>
<table border="0" width="100%" cellpadding="1" cellspacing="0">
<tbody><tr><td><table border="0" width="100%" cellpadding="1" cellspacing="0" bgcolor="#000000">
<tbody><tr><td><table border="0" width="100%" cellpadding="3" cellspacing="0">
<tbody><tr bgcolor="#eeeeee"><td align="RIGHT" valign="top" nowrap="" width="50%" rowspan="2">
<font size="2" face="Arial" color="#000099">
<a name="42"><b>טלקו</b></a>
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=%E8%EC%F7%E5"><img src="https://rotter.net/forum/Images/5_star.gif" border="0" alt="לחץ כאן להצגת דירוג המשתמש"></a><br>
<font size="1">חבר מתאריך 2.8.18</font><br>
<font size="1">30569 הודעות</font>, <font size="1" color="006633"> <b>238 מדרגים</b></font>, <font color="red" size="1"> <b>454 נקודות. &nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=%E8%EC%F7%E5"><font color="000099" size="-1"><u>ראה משוב</u></font></a></b></font></font></td><td align="LEFT" valign="top" width="50%" nowrap=""><font size="1" face="Arial" color="#000099"><font color="black">יום שני ז' בניסן תשפ''ד &nbsp;&nbsp;</font>
<font color="red">16:26</font> &nbsp; <font color="#eeeeee" size="1"> </font>15.04.24</font>&nbsp;&nbsp;&nbsp;</td></tr>
<tr bgcolor="#eeeeee"><td align="LEFT">
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=send_mesg&amp;userid=%E8%EC%F7%E5" target="_new"><img src="https://rotter.net/forum/Images/mesg.gif" border="0" title="לחץ לשליחת הודעה פרטית למשתמש"></a> <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=user_profiles&amp;user=%E8%EC%F7%E5"><img src="https://rotter.net/forum/Images/profile_small.gif" title="לחץ להצגת פרופיל המשתמש" border="0"></a><a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=add_buddy&amp;user=%25E8%25EC%25F7%25E5&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/mesg_add_buddy.gif" title="לחץ להוספת משתמש זה לרשימת החברים שלך" border="0"></a>
<a href="javascript:makeRemote('https://rotter.net/cgi-bin/forum/Lib/view_user_kartis.pl?user=%E8%EC%F7%E5')">
<img src="https://rotter.net/forum/Images/kartis.gif" border="0" alt="כרטיס אישי"></a>&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_ip&amp;forum=scoops1&amp;om=845227&amp;omm=42&amp;name=%E8%EC%F7%E5"><img src="https://rotter.net/forum/Images/ip.gif" border="0" alt="עבור לצ'אט"></a>
&nbsp;</td></tr>
<tr bgcolor="#FDFDFD"><td colspan="2" width="100%">
<font size="2" face="Arial" color="#000099">
&nbsp;&nbsp;<font class="text16b">42. לא נורא. שניהם צריכים להיות תלויים על עמוד.&nbsp;&nbsp;</font><br>
<font size="1" face="Arial" color="#000099"><a href="#0">בתגובה להודעה מספר 0</a></font><br>&nbsp;<br>
<table border="0" cellpadding="5" cellspacing="0" width="70%" style="display: inline-table;">
<tbody><tr><td valign="top" width="50" nowrap="">&nbsp;&nbsp;</td><td valign="top" width="100%">
<font size="2" face="Arial" color="#000099"><font class="text15"><b> <br> </b><p> <br> </p></font></font></td></tr></tbody></table>
<br></font></td></tr><tr bgcolor="#eeeeee"><td align="right" valign="top" nowrap="">
<font size="1" face="Arial" color="#000099">
&nbsp; <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=edit&amp;forum=scoops1&amp;om=845227&amp;omm=42"><img src="https://rotter.net/forum/Images/edit.gif" border="0"></a> &nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=post&amp;forum=scoops1&amp;om=845227&amp;omm=42"><font size="1" face="Arial" color="#000099"><img src="https://rotter.net/forum/Images/response.gif" border="0"></font></a><font size="1" face="Arial" color="#000099"> &nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=read_count&amp;om=845227&amp;forum=scoops1&amp;viewmode=all"><img src="https://rotter.net/forum/Images/all.gif" border="0"></a></font><font size="1">&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=list&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/gobk.gif" border="0"></a>
&nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?quote=not_empty&amp;az=post&amp;forum=scoops1&amp;om=845227&amp;omm=42"><font size="1" face="Arial" color="#000099"> תגובה עם ציטוט </font></a>&nbsp; | <a href="javascript:updatePropertyDisplay('42')"><font face="Arial" color="#000099">תגובה מהירה</font></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcadmin.cgi?az=admin_board_manager&amp;command=admin_remove_messages&amp;forum=scoops1&amp;thread_select=845227&amp;selected=42" onclick="return confirm('למחוק תגובה?')"><font size="1" face="Arial" color="#000099">(ניהול: מחק תגובה)</font></a></font></font></td>
<td align="left" nowrap="">
<font size="1" face="Arial" color="#000099"><br>
מכתב זה והנלווה אליו, על אחריות ועל דעת הכותב בלבד
</font></td></tr></tbody></table></td></tr></tbody></table>
</td></tr></tbody></table>
<table border="0" width="100%" cellpadding="1" cellspacing="0">
<tbody><tr><td><table border="0" width="100%" cellpadding="1" cellspacing="0" bgcolor="#000000">
<tbody><tr><td><table border="0" width="100%" cellpadding="3" cellspacing="0">
<tbody><tr bgcolor="#eeeeee"><td align="RIGHT" valign="top" nowrap="" width="50%" rowspan="2">
<font size="2" face="Arial" color="#000099">
<a name="43"><b>Doom</b></a>
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=Doom"><img src="https://rotter.net/forum/Images/4_star.gif" border="0" alt="לחץ כאן להצגת דירוג המשתמש"></a><br>
<font size="1">חבר מתאריך 22.12.16</font><br>
<font size="1">3965 הודעות</font>, <font size="1" color="006633"> <b>19 מדרגים</b></font>, <font color="red" size="1"> <b>34 נקודות. &nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=Doom"><font color="000099" size="-1"><u>ראה משוב</u></font></a></b></font></font></td><td align="LEFT" valign="top" width="50%" nowrap=""><font size="1" face="Arial" color="#000099"><font color="black">יום שני ז' בניסן תשפ''ד &nbsp;&nbsp;</font>
<font color="red">16:26</font> &nbsp; <font color="#eeeeee" size="1"> </font>15.04.24</font>&nbsp;&nbsp;&nbsp;</td></tr>
<tr bgcolor="#eeeeee"><td align="LEFT">
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=send_mesg&amp;userid=Doom" target="_new"><img src="https://rotter.net/forum/Images/mesg.gif" border="0" title="לחץ לשליחת הודעה פרטית למשתמש"></a> <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=user_profiles&amp;user=Doom"><img src="https://rotter.net/forum/Images/profile_small.gif" title="לחץ להצגת פרופיל המשתמש" border="0"></a><a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=add_buddy&amp;user=Doom&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/mesg_add_buddy.gif" title="לחץ להוספת משתמש זה לרשימת החברים שלך" border="0"></a>
<a href="javascript:makeRemote('https://rotter.net/cgi-bin/forum/Lib/view_user_kartis.pl?user=Doom')">
<img src="https://rotter.net/forum/Images/kartis.gif" border="0" alt="כרטיס אישי"></a>&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_ip&amp;forum=scoops1&amp;om=845227&amp;omm=43&amp;name=Doom"><img src="https://rotter.net/forum/Images/ip.gif" border="0" alt="עבור לצ'אט"></a>
&nbsp;</td></tr>
<tr bgcolor="#FDFDFD"><td colspan="2" width="100%">
<font size="2" face="Arial" color="#000099">
&nbsp;&nbsp;<font class="text16b">43. גם הכומר מדבר בערבית לא ?&nbsp;&nbsp;</font><br>
<font size="1" face="Arial" color="#000099"><a href="#0">בתגובה להודעה מספר 0</a></font><br>&nbsp;<br>
<table border="0" cellpadding="5" cellspacing="0" width="70%" style="display: inline-table;">
<tbody><tr><td valign="top" width="50" nowrap="">&nbsp;&nbsp;</td><td valign="top" width="100%">
<font size="2" face="Arial" color="#000099"><font class="text15"><b> <br> החיוך שלו בסוף מספר הכל </b><p> <br> </p></font></font></td></tr></tbody></table>
<br></font></td></tr><tr bgcolor="#eeeeee"><td align="right" valign="top" nowrap="">
<font size="1" face="Arial" color="#000099">
&nbsp; <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=edit&amp;forum=scoops1&amp;om=845227&amp;omm=43"><img src="https://rotter.net/forum/Images/edit.gif" border="0"></a> &nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=post&amp;forum=scoops1&amp;om=845227&amp;omm=43"><font size="1" face="Arial" color="#000099"><img src="https://rotter.net/forum/Images/response.gif" border="0"></font></a><font size="1" face="Arial" color="#000099"> &nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=read_count&amp;om=845227&amp;forum=scoops1&amp;viewmode=all"><img src="https://rotter.net/forum/Images/all.gif" border="0"></a></font><font size="1">&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=list&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/gobk.gif" border="0"></a>
&nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?quote=not_empty&amp;az=post&amp;forum=scoops1&amp;om=845227&amp;omm=43"><font size="1" face="Arial" color="#000099"> תגובה עם ציטוט </font></a>&nbsp; | <a href="javascript:updatePropertyDisplay('43')"><font face="Arial" color="#000099">תגובה מהירה</font></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcadmin.cgi?az=admin_board_manager&amp;command=admin_remove_messages&amp;forum=scoops1&amp;thread_select=845227&amp;selected=43" onclick="return confirm('למחוק תגובה?')"><font size="1" face="Arial" color="#000099">(ניהול: מחק תגובה)</font></a></font></font></td>
<td align="left" nowrap="">
<font size="1" face="Arial" color="#000099"><br>
מכתב זה והנלווה אליו, על אחריות ועל דעת הכותב בלבד
</font></td></tr></tbody></table></td></tr></tbody></table>
</td></tr></tbody></table>
<table border="0" width="100%" cellpadding="1" cellspacing="0">
<tbody><tr><td><table border="0" width="100%" cellpadding="1" cellspacing="0" bgcolor="#000000">
<tbody><tr><td><table border="0" width="100%" cellpadding="3" cellspacing="0">
<tbody><tr bgcolor="#eeeeee"><td align="RIGHT" valign="top" nowrap="" width="50%" rowspan="2">
<font size="2" face="Arial" color="#000099">
<a name="46"><b>פלדל</b></a>
<br>
<font size="1">חבר מתאריך 10.7.13</font><br>
<font size="1">22025 הודעות</font></font></td><td align="LEFT" valign="top" width="50%" nowrap=""><font size="1" face="Arial" color="#000099"><font color="black">יום שני ז' בניסן תשפ''ד &nbsp;&nbsp;</font>
<font color="red">18:35</font> &nbsp; <font color="#eeeeee" size="1"> </font>15.04.24</font>&nbsp;&nbsp;&nbsp;</td></tr>
<tr bgcolor="#eeeeee"><td align="LEFT">
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=send_mesg&amp;userid=%F4%EC%E3%EC" target="_new"><img src="https://rotter.net/forum/Images/mesg.gif" border="0" title="לחץ לשליחת הודעה פרטית למשתמש"></a> <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=user_profiles&amp;user=%F4%EC%E3%EC"><img src="https://rotter.net/forum/Images/profile_small.gif" title="לחץ להצגת פרופיל המשתמש" border="0"></a><a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=add_buddy&amp;user=%25F4%25EC%25E3%25EC&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/mesg_add_buddy.gif" title="לחץ להוספת משתמש זה לרשימת החברים שלך" border="0"></a>
<a href="javascript:makeRemote('https://rotter.net/cgi-bin/forum/Lib/view_user_kartis.pl?user=%F4%EC%E3%EC')">
<img src="https://rotter.net/forum/Images/kartis.gif" border="0" alt="כרטיס אישי"></a>&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_ip&amp;forum=scoops1&amp;om=845227&amp;omm=46&amp;name=%F4%EC%E3%EC"><img src="https://rotter.net/forum/Images/ip.gif" border="0" alt="עבור לצ'אט"></a>
&nbsp;</td></tr>
<tr bgcolor="#FDFDFD"><td colspan="2" width="100%">
<font size="2" face="Arial" color="#000099">
&nbsp;&nbsp;<font class="text16b">46. יש עוד 4 פצועים. כנראה מאלה שניסו לחלץ את הכומר&nbsp;&nbsp;</font><br>
<font size="1" face="Arial" color="#000099"><a href="#0">בתגובה להודעה מספר 0</a></font><br>&nbsp;<br>
<table border="0" cellpadding="5" cellspacing="0" width="70%" style="display: inline-table;">
<tbody><tr><td valign="top" width="50" nowrap="">&nbsp;&nbsp;</td><td valign="top" width="100%">
<font size="2" face="Arial" color="#000099"><font class="text15"><b> <br> </b><p> <br> </p></font></font></td></tr></tbody></table>
<br></font></td></tr><tr bgcolor="#eeeeee"><td align="right" valign="top" nowrap="">
<font size="1" face="Arial" color="#000099">
&nbsp; <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=edit&amp;forum=scoops1&amp;om=845227&amp;omm=46"><img src="https://rotter.net/forum/Images/edit.gif" border="0"></a> &nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=post&amp;forum=scoops1&amp;om=845227&amp;omm=46"><font size="1" face="Arial" color="#000099"><img src="https://rotter.net/forum/Images/response.gif" border="0"></font></a><font size="1" face="Arial" color="#000099"> &nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=read_count&amp;om=845227&amp;forum=scoops1&amp;viewmode=all"><img src="https://rotter.net/forum/Images/all.gif" border="0"></a></font><font size="1">&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=list&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/gobk.gif" border="0"></a>
&nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?quote=not_empty&amp;az=post&amp;forum=scoops1&amp;om=845227&amp;omm=46"><font size="1" face="Arial" color="#000099"> תגובה עם ציטוט </font></a>&nbsp; | <a href="javascript:updatePropertyDisplay('46')"><font face="Arial" color="#000099">תגובה מהירה</font></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcadmin.cgi?az=admin_board_manager&amp;command=admin_remove_messages&amp;forum=scoops1&amp;thread_select=845227&amp;selected=46" onclick="return confirm('למחוק תגובה?')"><font size="1" face="Arial" color="#000099">(ניהול: מחק תגובה)</font></a></font></font></td>
<td align="left" nowrap="">
<font size="1" face="Arial" color="#000099"><br>
מכתב זה והנלווה אליו, על אחריות ועל דעת הכותב בלבד
</font></td></tr></tbody></table></td></tr></tbody></table>
</td></tr></tbody></table>
<table border="0" width="100%" cellpadding="1" cellspacing="0">
<tbody><tr><td><table border="0" width="100%" cellpadding="1" cellspacing="0" bgcolor="#000000">
<tbody><tr><td><table border="0" width="100%" cellpadding="3" cellspacing="0">
<tbody><tr bgcolor="#eeeeee"><td align="RIGHT" valign="top" nowrap="" width="50%" rowspan="2">
<font size="2" face="Arial" color="#000099">
<a name="47"><b>Omer-L</b></a>
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=Omer-L"><img src="https://rotter.net/forum/Images/3_star.gif" border="0" alt="לחץ כאן להצגת דירוג המשתמש"></a><br>
<font size="1">חבר מתאריך 21.8.16</font><br>
<font size="1">4700 הודעות</font>, <font size="1" color="006633"> <b>16 מדרגים</b></font>, <font color="red" size="1"> <b>20 נקודות. &nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=Omer-L"><font color="000099" size="-1"><u>ראה משוב</u></font></a></b></font></font></td><td align="LEFT" valign="top" width="50%" nowrap=""><font size="1" face="Arial" color="#000099"><font color="black">יום שני ז' בניסן תשפ''ד &nbsp;&nbsp;</font>
<font color="red">18:37</font> &nbsp; <font color="#eeeeee" size="1"> </font>15.04.24</font>&nbsp;&nbsp;&nbsp;</td></tr>
<tr bgcolor="#eeeeee"><td align="LEFT">
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=send_mesg&amp;userid=Omer-L" target="_new"><img src="https://rotter.net/forum/Images/mesg.gif" border="0" title="לחץ לשליחת הודעה פרטית למשתמש"></a> <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=user_profiles&amp;user=Omer-L"><img src="https://rotter.net/forum/Images/profile_small.gif" title="לחץ להצגת פרופיל המשתמש" border="0"></a><a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=add_buddy&amp;user=Omer-L&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/mesg_add_buddy.gif" title="לחץ להוספת משתמש זה לרשימת החברים שלך" border="0"></a>
<a href="javascript:makeRemote('https://rotter.net/cgi-bin/forum/Lib/view_user_kartis.pl?user=Omer-L')">
<img src="https://rotter.net/forum/Images/kartis.gif" border="0" alt="כרטיס אישי"></a>&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_ip&amp;forum=scoops1&amp;om=845227&amp;omm=47&amp;name=Omer-L"><img src="https://rotter.net/forum/Images/ip.gif" border="0" alt="עבור לצ'אט"></a>
&nbsp;</td></tr>
<tr bgcolor="#FDFDFD"><td colspan="2" width="100%">
<font size="2" face="Arial" color="#000099">
&nbsp;&nbsp;<font class="text16b">47. טוב מאוד , ככה לומדים ברך הקשה&nbsp;&nbsp;</font><br>
<font size="1" face="Arial" color="#000099"><a href="#0">בתגובה להודעה מספר 0</a></font><br>&nbsp;<br>
<table border="0" cellpadding="5" cellspacing="0" width="70%" style="display: inline-table;">
<tbody><tr><td valign="top" width="50" nowrap="">&nbsp;&nbsp;</td><td valign="top" width="100%">
<font size="2" face="Arial" color="#000099"><font class="text15"><b> <br> האוסטרלים ילמדו טוב טוב מה קורה למי שנותן במה לאסלם</b><p> <br> </p></font></font></td></tr></tbody></table>
<br></font></td></tr><tr bgcolor="#eeeeee"><td align="right" valign="top" nowrap="">
<font size="1" face="Arial" color="#000099">
&nbsp; <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=edit&amp;forum=scoops1&amp;om=845227&amp;omm=47"><img src="https://rotter.net/forum/Images/edit.gif" border="0"></a> &nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=post&amp;forum=scoops1&amp;om=845227&amp;omm=47"><font size="1" face="Arial" color="#000099"><img src="https://rotter.net/forum/Images/response.gif" border="0"></font></a><font size="1" face="Arial" color="#000099"> &nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=read_count&amp;om=845227&amp;forum=scoops1&amp;viewmode=all"><img src="https://rotter.net/forum/Images/all.gif" border="0"></a></font><font size="1">&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=list&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/gobk.gif" border="0"></a>
&nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?quote=not_empty&amp;az=post&amp;forum=scoops1&amp;om=845227&amp;omm=47"><font size="1" face="Arial" color="#000099"> תגובה עם ציטוט </font></a>&nbsp; | <a href="javascript:updatePropertyDisplay('47')"><font face="Arial" color="#000099">תגובה מהירה</font></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcadmin.cgi?az=admin_board_manager&amp;command=admin_remove_messages&amp;forum=scoops1&amp;thread_select=845227&amp;selected=47" onclick="return confirm('למחוק תגובה?')"><font size="1" face="Arial" color="#000099">(ניהול: מחק תגובה)</font></a></font></font></td>
<td align="left" nowrap="">
<font size="1" face="Arial" color="#000099"><br>
מכתב זה והנלווה אליו, על אחריות ועל דעת הכותב בלבד
</font></td></tr></tbody></table></td></tr></tbody></table>
</td></tr></tbody></table></div>

`

class RotterCommentsFullTextScarp {
    $;
    commentsTable = undefined;
    comments = undefined;
    simpleArray = undefined;
    nestedJSON = undefined;
    nestedYAML = undefined;

    constructor(htmlTable, targetUrl) {
        this.$ = cheerio.load(htmlTable);
        this.commentsTable = this.readTableRows(this.$);
        this.proccesTables(this.commentsTable)
        this.comments = this.readCommentFromTable(this.$);
        this.simpleArray = this.convertRowsDataToArray(this.comments);
        this.nestedJSON = convertToNestedJson(this.simpleArray);
        // Convert comments to nested YAML
        this.nestedYAML = yaml.dump(this.nestedJSON);
        this.saveToFiles(this.simpleArray, this.nestedJSON, this.nestedYAML, targetUrl);
        // this.printScreen();
    }

    readTableRows($){
        let tables = []
        $('table').each((index, row) => {
            tables.push(row)
        })
        return tables;
    }
    proccesTables(commentsTable){
        const comments = []
        commentsTable.each((index,$table)=>{
            comments.push(this.readCommentFromTable($table))
        })
    }

    readCommentFromTable($table) {
        let singleComment = undefined
        // Iterate through table rows
        $('tr').each((index, row) => {
            var englishAndDigits = /^[A-Za-z0-9 ]*$/;
            var english = /^[A-Za-z]*$/;
            const columns = $(row).find('td');
            const indentation = getIndentation($(columns[0]).html()); // Indentation is in td 0
            const indexValue = $(columns[3]).text(); // Index is in td 1
            const date = $(columns[2]).text();
            const author = englishAndDigits.test($(columns[1]).text()) === true ? $(columns[1]).text() : $(columns[1]).text().split('').reverse().join('');
            console.log($(columns[0]).children('font').eq(0).children('a').eq(0).children('font').eq(0).text().split('').reverse().join(''));
            const content = $(columns[0]).children('font').eq(0).children('a').eq(0).children('font').eq(0).text().split('').reverse().join(''); // Content is in td 4
            const links = []; //TODO extrat link to external source
            singleComment ={ indexValue, date, author, content, indentation, links };
        });

        return singleComment
    }

    convertRowsDataToArray(comments) {

        const simpleArray = comments.map(({ indexValue, date, author, content, indentation }) => ({
            indexValue,
            date,
            author,
            content,
            indentation,
        }))
        simpleArray.shift()
        return simpleArray;
    }

    saveToFiles(simpleArray, nestedJSON, nestedYAML, targetUrl) {
        let saveToFiles = new SaveToFiles()
        saveToFiles.saveToFiles(
            JSON.stringify(simpleArray, null, 2), 
            JSON.stringify(nestedJSON, null, 2), 
            nestedYAML.toString(),
             targetUrl)
    }
    printScreen() {
        // Print the results (you can also save them to files)
        console.log('Simple Array:');
        console.log(this.simpleArray);

        console.log('\nNested JSON:');
        console.log(this.nestedJSON);

        console.log('\nNested YAML:');
        console.log(this.nestedYAML);

    }




}

let a  = new RotterCommentsFullTextScarp(htmlTable,"https://rotter.net/forum/scoops1/845227.shtml")  


module.exports = RotterCommentsFullTextScarp;