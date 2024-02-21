const cheerio = require('cheerio');
const fs = require('fs');
const yaml = require('js-yaml');
const { getIndentation, convertToNestedJson } = require('./utils.js');
const SaveToFiles = require('./save-files.js')

// Sample HTML table as a string (replace with your HTML table)
const htmlTable = `
<table border="0" width="100%" cellspacing="1" cellpadding="1">
<tbody><tr bgcolor="#eeeeee">
<th align="right" width="100%" nowrap=""><font size="-1" face="Arial" color="#000099">&nbsp;&nbsp;האשכול&nbsp;&nbsp;</font></th>
<th align="center" nowrap=""><font size="-1" face="Arial" color="#000099">&nbsp;&nbsp;מחבר&nbsp;&nbsp;</font></th>
<th align="center" nowrap=""><font size="-1" face="Arial" color="#000099">&nbsp;&nbsp;תאריך כתיבה&nbsp;&nbsp;</font></th>
<th align="center" nowrap=""><font size="-1" face="Arial" color="#000099">&nbsp;&nbsp;מספר&nbsp;&nbsp;</font></th>
</tr>
<tr bgcolor="#eeeeee">
<td align="RIGHT" width="100%" nowrap="">&nbsp;&nbsp;<img src="https://rotter.net/forum/Images/message.gif"><font size="2" face="Arial" color="#000099"><a href="#1"><font color="">שיום השמחה יהפך להם לאבל אמן</font></a></font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">red diamond</font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">21.05.21 <font size="1" face="Arial" color="red">05:15</font></font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">1</font></td>
</tr>
<tr bgcolor="#FDFDFD"><td nowrap="" align="RIGHT" width="100%">&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://rotter.net/forum/Images/reply_message.gif"> <font size="2" face="Arial" color="#000099"><a href="#3"><font color="">הם לא אשמים</font></a></font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">Iback</font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">21.05.21 <font size="1" face="Arial" color="red">05:29</font></font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">3</font></td>
</tr>
<tr bgcolor="#eeeeee"><td nowrap="" align="RIGHT" width="100%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://rotter.net/forum/Images/reply_message.gif"> <font size="2" face="Arial" color="#000099"><a href="#4"><font color="">++11</font></a></font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">דייזי</font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">21.05.21 <font size="1" face="Arial" color="red">05:34</font></font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">4</font></td>
</tr>
<tr bgcolor="#FDFDFD"><td nowrap="" align="RIGHT" width="100%">&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://rotter.net/forum/Images/reply_message.gif"> <font size="2" face="Arial" color="#000099"><a href="#6"><font color="">יהי רצון שיקום לנו מנהיג אמיץ ונחוש</font></a></font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">חושב_פעמיים</font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">21.05.21 <font size="1" face="Arial" color="red">05:49</font></font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">6</font></td>
</tr>
<tr bgcolor="#eeeeee">
<td align="RIGHT" width="100%" nowrap="">&nbsp;&nbsp;<img src="https://rotter.net/forum/Images/message.gif"><font size="2" face="Arial" color="#000099"><a href="#2"><font color="">תתי אדם.צריכים לחיות בביוב.</font></a></font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">since1936</font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">21.05.21 <font size="1" face="Arial" color="red">05:27</font></font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">2</font></td>
</tr>
<tr bgcolor="#FDFDFD">
<td align="RIGHT" width="100%" nowrap="">&nbsp;&nbsp;<img src="https://rotter.net/forum/Images/message.gif"><font size="2" face="Arial" color="#000099"><a href="#5"><font color="">השב''כ צריך להמשיך ללכוד את המסיתים לאלימות נגד היהודים</font></a></font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">אריה33</font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">21.05.21 <font size="1" face="Arial" color="red">05:36</font></font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">5</font></td>
</tr>
<tr bgcolor="#eeeeee"><td nowrap="" align="RIGHT" width="100%">&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://rotter.net/forum/Images/reply_message.gif"> <font size="2" face="Arial" color="#000099"><a href="#7"><font color="">לא שב״כ ולא ממשלה. הכול תלוי בנו</font></a></font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">המאזין</font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">21.05.21 <font size="1" face="Arial" color="red">05:55</font></font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">7</font></td>
</tr>
<tr bgcolor="#FDFDFD"><td nowrap="" align="RIGHT" width="100%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://rotter.net/forum/Images/reply_message.gif"> <font size="2" face="Arial" color="#000099"><a href="#23"><font color="">אין סתירה בין המעשים הטובים שטוב שהיהודים יעשו לבין מלחמה נחושה מול האויב שרוצה בהשמדתינו</font></a></font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">אריה33</font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">21.05.21 <font size="1" face="Arial" color="red">08:09</font></font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">23</font></td>
</tr>
<tr bgcolor="#eeeeee"><td nowrap="" align="RIGHT" width="100%">&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://rotter.net/forum/Images/reply_message.gif"> <font size="2" face="Arial" color="#000099"><a href="#26"><font color="">אנחנו צריכים לדרוש חומת מגן 2</font></a></font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">הבלגי</font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">21.05.21 <font size="1" face="Arial" color="red">10:35</font></font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">26</font></td>
</tr>
<tr bgcolor="#FDFDFD"><td nowrap="" align="RIGHT" width="100%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://rotter.net/forum/Images/reply_message.gif"> <font size="2" face="Arial" color="#000099"><a href="#32"><font color="">השב''כ עם משמר הגבול לבד יכולים לעצור ולזרוק לכלא 10,000 מסיתים ופורעים ואז הכל ירגע</font></a></font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">אריה33</font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">21.05.21 <font size="1" face="Arial" color="red">10:50</font></font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">32</font></td>
</tr>
<tr bgcolor="#eeeeee">
<td align="RIGHT" width="100%" nowrap="">&nbsp;&nbsp;<img src="https://rotter.net/forum/Images/message.gif"><font size="2" face="Arial" color="#000099"><a href="#8"><font color="">ביבי הביא חורמן על שיבת העם היהודי לארצו בעת החדשה</font></a></font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">גשש-בלש</font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">21.05.21 <font size="1" face="Arial" color="red">07:34</font></font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">8</font></td>
</tr>

<tr bgcolor="#FDFDFD">
<td align="RIGHT" width="100%" nowrap="">&nbsp;&nbsp;<img src="https://rotter.net/forum/Images/message.gif"><font size="2" face="Arial" color="#000099"><a href="#9"><font color="">אבל בן גביר..</font></a></font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">שומרוני</font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">21.05.21 <font size="1" face="Arial" color="red">07:35</font></font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">9</font></td>
</tr>
<tr bgcolor="#eeeeee">
<td align="RIGHT" width="100%" nowrap="">&nbsp;&nbsp;<img src="https://rotter.net/forum/Images/message.gif"><font size="2" face="Arial" color="#000099"><a href="#10"><font color="">כשיפתחו את הר הבית (כנראה ביום א) כל עם ישראל מוזמן לעלות בהמוניו להר הבית בטהרה</font></a></font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">משה בן אברהם</font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">21.05.21 <font size="1" face="Arial" color="red">07:38</font></font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">10</font></td>
</tr>
<tr bgcolor="#FDFDFD"><td nowrap="" align="RIGHT" width="100%">&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://rotter.net/forum/Images/reply_message.gif"> <font size="2" face="Arial" color="#000099"><a href="#11"><font color="">רק שלא יתנו לנו לעלות</font></a></font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">גורי</font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">21.05.21 <font size="1" face="Arial" color="red">07:38</font></font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">11</font></td>
</tr>
<tr bgcolor="#eeeeee"><td nowrap="" align="RIGHT" width="100%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://rotter.net/forum/Images/reply_message.gif"> <font size="2" face="Arial" color="#000099"><a href="#12"><font color="">מה זה האשכול שפתחת? הגיג?</font></a></font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">שומרוני</font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">21.05.21 <font size="1" face="Arial" color="red">07:41</font></font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">12</font></td>
</tr>
<tr bgcolor="#FDFDFD"><td nowrap="" align="RIGHT" width="100%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://rotter.net/forum/Images/reply_message.gif"> <font size="2" face="Arial" color="#000099"><a href="#13"><font color="">לא חשבתי ככה...</font></a></font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">גורי</font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">21.05.21 <font size="1" face="Arial" color="red">07:42</font></font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">13</font></td>
</tr>
<tr bgcolor="#eeeeee"><td nowrap="" align="RIGHT" width="100%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://rotter.net/forum/Images/reply_message.gif"> <font size="2" face="Arial" color="#000099"><a href="#14"><font color="">אבל כתבת כל מיני דעות שלך. תערוך, תמחק את כל מה שלא 'חדשה' ותכניס בתגובות</font></a></font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">שומרוני</font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">21.05.21 <font size="1" face="Arial" color="red">07:43</font></font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">14</font></td>
</tr>
<tr bgcolor="#FDFDFD"><td nowrap="" align="RIGHT" width="100%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://rotter.net/forum/Images/reply_message.gif"> <font size="2" face="Arial" color="#000099"><a href="#15"><font color="">מחילה אלה לא דיעות שלי</font></a></font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">גורי</font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">21.05.21 <font size="1" face="Arial" color="red">07:45</font></font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">15</font></td>
</tr>
<tr bgcolor="#eeeeee"><td nowrap="" align="RIGHT" width="100%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://rotter.net/forum/Images/reply_message.gif"> <font size="2" face="Arial" color="#000099"><a href="#16"><font color="">או עכשיו יותר ברור. תמיד צריך להוסיף קישור</font></a></font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">שומרוני</font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">21.05.21 <font size="1" face="Arial" color="red">07:46</font></font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">16</font></td>
</tr>
<tr bgcolor="#FDFDFD"><td nowrap="" align="RIGHT" width="100%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://rotter.net/forum/Images/reply_message.gif"> <font size="2" face="Arial" color="#000099"><a href="#17"><font color="">צודק מאה אחוז</font></a></font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">גורי</font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">21.05.21 <font size="1" face="Arial" color="red">07:46</font></font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">17</font></td>
</tr>
<tr bgcolor="#eeeeee"><td nowrap="" align="RIGHT" width="100%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://rotter.net/forum/Images/reply_message.gif"> <font size="2" face="Arial" color="#000099"><a href="#18"><font color="">שומרוני. מדריך מוסמך.</font></a></font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">שומרוני</font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">21.05.21 <font size="1" face="Arial" color="red">07:47</font></font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">18</font></td>
</tr>
<tr bgcolor="#FDFDFD"><td nowrap="" align="RIGHT" width="100%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://rotter.net/forum/Images/reply_message.gif"> <font size="2" face="Arial" color="#000099"><a href="#19"><font color="">דורג:)</font></a></font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">גורי</font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">21.05.21 <font size="1" face="Arial" color="red">07:48</font></font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">19</font></td>
</tr>
<tr bgcolor="#eeeeee"><td nowrap="" align="RIGHT" width="100%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://rotter.net/forum/Images/reply_message.gif"> <font size="2" face="Arial" color="#000099"><a href="#21"><font color="">סופסוף הבנת😉</font></a></font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">שומרוני</font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">21.05.21 <font size="1" face="Arial" color="red">07:49</font></font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">21</font></td>
</tr>
<tr bgcolor="#FDFDFD"><td nowrap="" align="RIGHT" width="100%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://rotter.net/forum/Images/reply_message.gif"> <font size="2" face="Arial" color="#000099"><a href="#22"><font color="">לפעמים החדשות עושות לי ככ רע</font></a></font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">גורי</font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">21.05.21 <font size="1" face="Arial" color="red">07:50</font></font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">22</font></td>
</tr>
<tr bgcolor="#eeeeee"><td nowrap="" align="RIGHT" width="100%">&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://rotter.net/forum/Images/reply_message.gif"> <font size="2" face="Arial" color="#000099"><a href="#31"><font color="">רבבה</font></a></font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">בחצרות בית ה'</font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">21.05.21 <font size="1" face="Arial" color="red">10:49</font></font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">31</font></td>
</tr>
<tr bgcolor="#FDFDFD">
<td align="RIGHT" width="100%" nowrap="">&nbsp;&nbsp;<img src="https://rotter.net/forum/Images/message.gif"><font size="2" face="Arial" color="#000099"><a href="#20"><font color="">מה שקורה במדינה זה המבחן האמיתי</font></a></font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">Metal-MaN</font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">21.05.21 <font size="1" face="Arial" color="red">07:49</font></font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">20</font></td>
</tr>
<tr bgcolor="#eeeeee">
<td align="RIGHT" width="100%" nowrap="">&nbsp;&nbsp;<img src="https://rotter.net/forum/Images/message.gif"><font size="2" face="Arial" color="#000099"><a href="#24"><font color="">רק לדמיין אם יהודים היו צועקים ככה בבתי הכנסת על ערבים והיו משליכים אבנים ובקתב''ים על שוטרים</font></a></font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">joniboy</font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">21.05.21 <font size="1" face="Arial" color="red">08:22</font></font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">24</font></td>
</tr>
<tr bgcolor="#FDFDFD">
<td align="RIGHT" width="100%" nowrap="">&nbsp;&nbsp;<img src="https://rotter.net/forum/Images/message.gif"><font size="2" face="Arial" color="#000099"><a href="#25"><font color="">לא מפתיע.</font></a></font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">ביריון</font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">21.05.21 <font size="1" face="Arial" color="red">08:34</font></font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">25</font></td>
</tr>
<tr bgcolor="#eeeeee">
<td align="RIGHT" width="100%" nowrap="">&nbsp;&nbsp;<img src="https://rotter.net/forum/Images/message.gif"><font size="2" face="Arial" color="#000099"><a href="#27"><font color="">מה חדש? חזרנו לשיגרה</font></a></font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">אוהבחדשות<img src="https://rotter.net/forum/Images/team_iconx.gif" title="צל''ש" border="0"></font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">21.05.21 <font size="1" face="Arial" color="red">10:37</font></font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">27</font></td>
</tr>
<tr bgcolor="#FDFDFD">
<td align="RIGHT" width="100%" nowrap="">&nbsp;&nbsp;<img src="https://rotter.net/forum/Images/message.gif"><font size="2" face="Arial" color="#000099"><a href="#28"><font color="">איפה המשטרה / צהל .</font></a></font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">Howlowcanugo</font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">21.05.21 <font size="1" face="Arial" color="red">10:38</font></font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">28</font></td>
</tr>
<tr bgcolor="#eeeeee">
<td align="RIGHT" width="100%" nowrap="">&nbsp;&nbsp;<img src="https://rotter.net/forum/Images/message.gif"><font size="2" face="Arial" color="#000099"><a href="#29"><font color="">יש להשמיד את האויב. הגיע הזמן לנכבה 2.</font></a></font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">יוסף</font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">21.05.21 <font size="1" face="Arial" color="red">10:46</font></font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">29</font></td>
</tr>
<tr bgcolor="#FDFDFD">
<td align="RIGHT" width="100%" nowrap="">&nbsp;&nbsp;<img src="https://rotter.net/forum/Images/message.gif"><font size="2" face="Arial" color="#000099"><a href="#30"><font color="">לא ניצחנו, ודאי שלא בתוך ישראל</font></a></font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">מוישי</font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">21.05.21 <font size="1" face="Arial" color="red">10:48</font></font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">30</font></td>
</tr>
<tr bgcolor="#eeeeee">
<td align="RIGHT" width="100%" nowrap="">&nbsp;&nbsp;<img src="https://rotter.net/forum/Images/message.gif"><font size="2" face="Arial" color="#000099"><a href="#33"><font color="">מי שנתן לגיטמציה מלכתחילה לכל מה שקרה בירושלים</font></a></font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">Yuval</font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">21.05.21 <font size="1" face="Arial" color="red">10:50</font></font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">33</font></td>
</tr>
<tr bgcolor="#FDFDFD">
<td align="RIGHT" width="100%" nowrap="">&nbsp;&nbsp;<img src="https://rotter.net/forum/Images/message.gif"><font size="2" face="Arial" color="#000099"><a href="#34"><font color="">תמיד הר הבית היה המוקד.</font></a></font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">יואל גלוברמן</font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">06.06.21 <font size="1" face="Arial" color="red">15:16</font></font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">34</font></td>
</tr>
<tr bgcolor="#eeeeee">
<td align="RIGHT" width="100%" nowrap="">&nbsp;&nbsp;<img src="https://rotter.net/forum/Images/message.gif"><font size="2" face="Arial" color="#000099"><a href="#35"><font color="">וואו</font></a></font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">יפית שמשון</font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">09.06.21 <font size="1" face="Arial" color="red">14:56</font></font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">35</font></td>
</tr>
</tbody></table>
`

class RotterCommentsFullTextScarp {
    $;
    comments = undefined;
    simpleArray = undefined;
    nestedJSON = undefined;
    nestedYAML = undefined;

    constructor(htmlTable, targetUrl) {
        this.$ = cheerio.load(htmlTable);
        this.comments = this.readTableRows(this.$);
        this.simpleArray = this.convertRowsDataToArray(this.comments);
        this.nestedJSON = convertToNestedJson(simpleArray);
        // Convert comments to nested YAML
        this.nestedYAML = yaml.dump(nestedJSON);
        this.saveToFiles(this.simpleArray, this.nestedJSON, this.nestedYAML, targetUrl);
        // this.printScreen();
    }


    readTableRows($) {
        const comments = []
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
            comments.push({ indexValue, date, author, content, indentation, links });
        });

        return comments
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


module.exports = RotterCommentsFullTextScarp;