const RotterPageScarp = require('../src/services/page-scarp');
const html = `
<html dir="RTL"><head>
<meta http-equiv="Content-Type" content="text/html; charset=windows-1255">
<meta name="robots" content="INDEX,FOLLOW">
<meta http-equiv="Content-Language" content="he">
<meta name="description" content="ראש מכון INSS אלוף במיל' תמיר היימן שיתף את ''פורום ראשי החברות'' במידע צבאי סודי האסור לפרסום - חדשות רוטר">
<title>ראש מכון INSS אלוף במיל תמיר היימן שיתף את פורום ראשי החברות במידע צבאי סודי האסור לפרסום - חדשות רוטר</title>
<meta http-equiv="Expires" content="Sat, 30-Dec-2000 21:00:00 GMT">
<meta http-equiv="pragma" content="no cache">
<link rel="alternate" media="only screen and (max-width: 640px)" href="https://rotter.net/mobile/viewmobile.php?forum=scoops1&amp;thread=838188">
<link rel="canonical" href="https://rotter.net/forum/scoops1/838188.shtml">
<meta property="og:url" content="https://rotter.net/forum/scoops1/838188.shtml">
<script type="text/javascript" src="https://cdn.taboola.com/scripts/cds-pips.js" charset="UTF-8" async="async"></script><script type="text/javascript" src="https://cdn.taboola.com/scripts/fraud-detect.js" charset="UTF-8" async="async"></script><script type="text/javascript" src="https://cdn.taboola.com/scripts/eid.es5.js" charset="UTF-8" async="async"></script><script charset="UTF-8" type="text/javascript" async="async" src="https://cdn.taboola.com/libtrc/feed-card-placeholder.20240219-6-RELEASE.es6.js"></script><script charset="UTF-8" type="text/javascript" async="async" src="https://cdn.taboola.com/libtrc/article-detection.20240219-6-RELEASE.es6.js"></script><script charset="UTF-8" type="text/javascript" async="async" src="https://cdn.taboola.com/libtrc/distance-from-article.20240219-6-RELEASE.es6.js"></script><script charset="UTF-8" type="text/javascript" async="async" src="https://cdn.taboola.com/libtrc/userx.20240219-6-RELEASE.es6.js"></script><script async="" src="//cse.google.com/adsense/search/async-ads.js"></script><script type="text/javascript" src="//gum.criteo.com/sync?c=72&amp;r=2&amp;j=TRC.getRTUS" charset="UTF-8" async="async"></script><script type="text/javascript" src="//gum.criteo.com/sync?c=72&amp;r=2&amp;j=TRC.getRTUS" charset="UTF-8" async="async"></script><script charset="UTF-8" type="text/javascript" async="async" src="https://cdn.taboola.com/libtrc/google-topics-api.20240219-6-RELEASE.es6.js"></script><script type="text/javascript" async="" src="https://www.googletagmanager.com/gtag/js?id=G-W7GFN1RJ7F&amp;cx=c&amp;_slc=1"></script><script charset="UTF-8" type="text/javascript" src="https://cdn.taboola.com/libtrc/impl.20240219-6-RELEASE.js"></script><script src="https://connect.facebook.net/signals/config/402556710235230?v=2.9.147&amp;r=stable&amp;domain=rotter.net&amp;hme=20c913bdcd4be51a752120153aa5caaecb3ee86c7f26cf737846e40b202aba68&amp;ex_m=62%2C106%2C94%2C98%2C53%2C3%2C88%2C61%2C14%2C86%2C79%2C44%2C46%2C150%2C153%2C164%2C160%2C161%2C163%2C25%2C89%2C45%2C68%2C162%2C145%2C148%2C157%2C158%2C165%2C115%2C13%2C43%2C169%2C168%2C117%2C16%2C29%2C32%2C1%2C36%2C57%2C58%2C59%2C63%2C83%2C15%2C12%2C85%2C82%2C81%2C95%2C97%2C31%2C96%2C26%2C22%2C146%2C149%2C124%2C24%2C9%2C10%2C11%2C5%2C6%2C21%2C19%2C20%2C49%2C54%2C56%2C66%2C90%2C23%2C67%2C8%2C7%2C71%2C41%2C18%2C92%2C91%2C17%2C4%2C73%2C80%2C72%2C78%2C40%2C39%2C77%2C33%2C35%2C76%2C48%2C74%2C28%2C37%2C65%2C0%2C84%2C75%2C2%2C30%2C55%2C34%2C93%2C38%2C70%2C60%2C99%2C52%2C51%2C27%2C87%2C50%2C47%2C42%2C69%2C64%2C100" async=""></script><script src="https://connect.facebook.net/en_US/sdk.js?hash=adc662470767cef3c97f2ae1cbdd975d" async="" crossorigin="anonymous"></script><script type="text/javascript" async="" src="https://cse.google.com/cse.js?cx=002506875823855302489:zhlssxjzpxk"></script><script id="facebook-jssdk" src="//connect.facebook.net/en_US/sdk.js#xfbml=1&amp;version=v2.5&amp;appId=195475010791014"></script><script async="" src="https://cdn.perfdrive.com/aperture/aperture.js"></script><script async="" src="https://connect.facebook.net/en_US/fbevents.js"></script><script async="" src="//cdn.taboola.com/libtrc/rotter/loader.js"></script><script async="" src="https://www.google-analytics.com/analytics.js"></script><script src="https://rotter.net/forum/dcf.js"></script>
<link rel="SHORTCUT ICON" href="https://rotter.net/forum/rotter_f.ico">
<meta name="Keywords" content="rotter.net, news, Israel, hebrew, forums, פורומים, סקופים, חדשות, כלכלה">
<meta name="Copyright" content="rotter.net">
<meta name="Author" content="rotter.net">
<meta name="Rating" content="General">
<meta name="Webmaster" content="Noam Rotter">
<meta property="og:title" content="ראש מכון INSS אלוף במיל תמיר היימן שיתף את פורום ראשי החברות במידע צבאי סודי האסור לפרסום - חדשות רוטר">
<meta property="og:site_name" content="Rotter.net">
<meta property="og:description" content="ראש מכון INSS אלוף במיל' תמיר היימן שיתף את ''פורום ראשי החברות'' במידע צבאי סודי האסור לפרסום - חדשות רוטר">
<meta property="og:image" content="https://rotter.net/ccc/rotter-600x315.jpg">
<meta name="twitter:image" content="https://rotter.net/ccc/rotter-600x315.jpg">
<meta name="twitter:card" content="summary">
<meta name="twitter:site" content="@rotternet">

<script type="text/javascript">
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-33997367-1', 'auto');
  ga('send', 'pageview');
</script>

<script src="https://www.googletagservices.com/tag/js/gpt.js"></script><meta http-equiv="origin-trial" content="As0hBNJ8h++fNYlkq8cTye2qDLyom8NddByiVytXGGD0YVE+2CEuTCpqXMDxdhOMILKoaiaYifwEvCRlJ/9GcQ8AAAB8eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3MTk1MzI3OTksImlzU3ViZG9tYWluIjp0cnVlfQ=="><meta http-equiv="origin-trial" content="AgRYsXo24ypxC89CJanC+JgEmraCCBebKl8ZmG7Tj5oJNx0cmH0NtNRZs3NB5ubhpbX/bIt7l2zJOSyO64NGmwMAAACCeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3MTk1MzI3OTksImlzU3ViZG9tYWluIjp0cnVlfQ=="><meta http-equiv="origin-trial" content="A/ERL66fN363FkXxgDc6F1+ucRUkAhjEca9W3la6xaLnD2Y1lABsqmdaJmPNaUKPKVBRpyMKEhXYl7rSvrQw+AkAAACNeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiRmxlZGdlQmlkZGluZ0FuZEF1Y3Rpb25TZXJ2ZXIiLCJleHBpcnkiOjE3MTkzNTk5OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9"><meta http-equiv="origin-trial" content="A6OdGH3fVf4eKRDbXb4thXA4InNqDJDRhZ8U533U/roYjp4Yau0T3YSuc63vmAs/8ga1cD0E3A7LEq6AXk1uXgsAAACTeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiRmxlZGdlQmlkZGluZ0FuZEF1Y3Rpb25TZXJ2ZXIiLCJleHBpcnkiOjE3MTkzNTk5OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9"><script src="https://securepubads.g.doubleclick.net/pagead/managed/js/gpt/m202402130101/pubads_impl.js" id="gpt-impl-0.3282413637606827"></script>
<script type="text/javascript">
var LogoSizeMap = googletag.sizeMapping().
  addSize([1300, 200], [970, 90]). 
  addSize([0, 0], [728, 90]). 
  build();

var TopSizeMap = googletag.sizeMapping().
  addSize([1900, 1070], [970, 250]). 
  addSize([992, 0], [970, 90]). 
  addSize([0, 0], [970, 250]). 
  build();

var ForumICSizeMap = googletag.sizeMapping().
  addSize([1024, 200], [970, 90]). 
  addSize([0, 0], [300, 250]). 
  build();

googletag.defineSlot('/69589285/Forum_Top_Leaderboard', [970, 90], 'div-gpt-ad-1418706841896-0').addService(googletag.pubads());
googletag.defineSlot('/69589285/Threads_Third_Leaderboard', [970, 250], 'div-gpt-ad-1419150760906-0').addService(googletag.pubads());
googletag.defineSlot('/69589285/Threads_Top_Leaderboard', [[970, 90], [970, 250]], 'div-gpt-ad-1418707187380-0').defineSizeMapping(TopSizeMap).addService(googletag.pubads());
googletag.defineSlot('/69589285/Forum_Below_Forum_Leaderboard', [970, 250], 'div-gpt-ad-1529830979123-0').addService(googletag.pubads());
googletag.defineSlot('/69589285/Forum_Logo_Line', [[600, 80], [728, 90], [970, 90]], 'div-gpt-ad-1418707589554-0').defineSizeMapping(LogoSizeMap).addService(googletag.pubads());
googletag.defineSlot('/69589285/Forum_Inside_Content', [300, 250], 'div-gpt-ad-1526999283254-0').addService(googletag.pubads());
googletag.defineSlot('/69589285/Threads_Bottom', [[600, 300], [300, 600], [970, 250]], 'div-gpt-ad-1545246482491-0').addService(googletag.pubads());
googletag.defineSlot('/69589285/Threads_Near_Content', [300, 600], 'div-gpt-ad-1527012163584-0').addService(googletag.pubads());
googletag.defineSlot('/69589285/Threads_Below_Main_Content', [[336, 280], [300, 250]], 'div-gpt-ad-1562605590809-0').addService(googletag.pubads());
googletag.enableServices();
</script>
<style type="TEXT/CSS">
 <!--

BODY {
	scrollbar-face-color: #3C5D8A; 
	scrollbar-shadow-color: #FAD2A4; 
	scrollbar-highlight-color: #FAD2A4; 
	scrollbar-3dlight-color: #000000; 
	scrollbar-darkshadow-color: #000000; 
	scrollbar-track-color: #6481AA;   
	scrollbar-arrow-color: #ffffff
}
a:link {text-decoration: none;}
a:visited {text-decoration: none;}
a:active {text-decoration: underline;}
a:hover {text-decoration: underline;}

.aborder{
border-width : 1px;
border-style : solid;
border-color : black;
}

.menu1  {font-family:Arial; FONT-SIZE: 16px; color: white; FONT-WEIGHT: bold;}
.menu2  {FONT-FAMILY:Times New Roman (Hebrew), Arial (Hebrew), David (Hebrew), Courier New (Hebrew); FONT-SIZE: 15px; COLOR: #FFFFFF; FONT-WEIGHT: bold; TEXT-DECORATION: underline}

.msg_b {background-color: 71B7E6;} 

._menu1b {background-color: 3293CD;} 
.menu1b {background-color: 2D8DCE;}

.icons  {background-color: FEFEFE;}
.icons2 {background-color: FFFFE8;}
._icons  {background-color: FF8400;}
._icons2 {background-color: FFDE7F;}

.tooltiptitle{COLOR: #FFFFFF; TEXT-DECORATION: none; CURSOR: Default; font-family: arial; font-weight: bold; font-size: 10pt}
.tooltipcontent{COLOR: #000000; TEXT-DECORATION: none; CURSOR: Default; font-family: arial; font-size: 9pt}
#ToolTip{position:absolute; width: 100px; top: 0px; right: 0px; z-index:4; visibility:hidden;}

.text12 {
        FONT-FAMILY: Arial (Hebrew), David (Hebrew), Courier New (Hebrew); FONT-SIZE: 12px; COLOR: #000099
}
.text13 {
        FONT-FAMILY: Arial (Hebrew), David (Hebrew), Courier New (Hebrew); FONT-SIZE: 13px; COLOR: #000099;
}
.text13b {
        FONT-FAMILY: Arial (Hebrew), David (Hebrew), Courier New (Hebrew); FONT-SIZE: 13px; COLOR: #000099; FONT-WEIGHT: bold; TEXT-DECORATION: underline
}
.text15n {
        FONT-FAMILY: Arial (Hebrew), David (Hebrew), Courier New (Hebrew); FONT-SIZE: 15px;
}
.text15 {
        FONT-FAMILY: Arial (Hebrew), David (Hebrew), Courier New (Hebrew); FONT-SIZE: 15px; COLOR: black
}
.text15b {
        FONT-FAMILY: Arial (Hebrew), David (Hebrew), Courier New (Hebrew); FONT-SIZE: 15px; COLOR: #000099; FONT-WEIGHT: bold; TEXT-DECORATION: underline
}
.text15bn {
        FONT-SIZE: 15px; 
}
.text16b {
        FONT-FAMILY: Arial (Hebrew), David (Hebrew), Courier New (Hebrew); FONT-SIZE: 16px; COLOR: #000099; FONT-WEIGHT: bold; TEXT-DECORATION: underline
}

INPUT, .bginput {
	FONT-SIZE: 14px;
FONT-FAMILY: arial; FONT-SIZE: 13px; COLOR: 000099; FONT-WEIGHT: bold;
}
.drop-list{
            background-color: #D9D9D9;
            padding : 1px 15px 1px 30px;
            font : 10pt Arial;
            text-align:right;
}
.drop-list-on{
            background-color: #FFFFFF;
            padding : 1px 15px 1px 30px;
            font : 8pt Arial;
}
-->
</style>
<script type="text/javascript">
function ShowDiv1(obj,arrow,right,index)
  {
  if (obj==null)
	return
	
   obj.style.right = document.body.clientWidth - arrow.offsetLeft;
   obj.style.display='';
   if(obj.clientHeight<5)
	 {
	    obj.style.display='none';
	    return;
	   }
   
   if (right == 1)
    obj.style.right = parseInt(obj.style.right)- arrow.offsetWidth +10;//-10
   else
    obj.style.right = parseInt(obj.style.right) - obj.clientWidth;
    
  }
  
  
function HideDiv1(obj,index)    
  {
  if (obj==null)
	return
   obj.style.display='none'; 
   
  }
</script>
<script async="" src="https://mrb.upapi.net/code?w=5711431416676352&amp;uponit=true"></script>
<script type="text/javascript">
   window._taboola = window._taboola || [];
   _taboola.push({article:'auto'});
   !function (e, f, u) {
     e.async = 1;
     e.src = u;
     f.parentNode.insertBefore(e, f);
   }(document.createElement('script'),
   document.getElementsByTagName('script')[0],
   '//cdn.taboola.com/libtrc/rotter/loader.js');
 </script>

<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window,document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
 fbq('init', '402556710235230'); 
fbq('track', 'PageView');
</script>
<noscript>
 <img height="1" width="1" 
src="https://www.facebook.com/tr?id=402556710235230&ev=PageView
&noscript=1"/>
</noscript>

<script>var __uzdbm_1 = "e17c1e62-c03f-41c4-88c8-ca5e3e57017b";var __uzdbm_2 = "NjQ5YjYyNzQtYzN3ci00ZGIxLWIzOWMtMWVlNWFlYzk4Zjc2JDJhMGQ6NmZjMjo2MTUxOjIxMDA6NzEyZjplYTA0OmM0NzI6Yjk4ZQ==";var __uzdbm_3 = "7f6000443bb74e-81cf-4425-81a2-fa67b836d07f169692316674411452774006-bb8faa4252d2bf922716";var __uzdbm_4 = "false";var __uzdbm_5 = "uzmx";var __uzdbm_6 = "7f9000f0a2d2bf-0106-4cb7-b9a1-67992fe35edc13-17062533801642122560586-c88f7b81e7748818913";var __uzdbm_7 = "rotter.net";</script> <script>(function(w, d, e, u, c, g, a, b){ w["SSJSConnectorObj"] = {ss_cid : c, domain_info: "auto"}; a = d.createElement(e); a.async = true; a.src = u; b = d.getElementsByTagName(e)[0]; b.parentNode.insertBefore(a, b); })(window,document,"script","https://cdn.perfdrive.com/aperture/aperture.js","c3wt","ssConf");</script><meta http-equiv="origin-trial" content="A+uXoByCfR5HCRAl94AWMQ8Y7DHd3670DSOPWj55vVOoaN/cUpF/r0yk6KbxjLIyaxJ2H3/YX4ZxkiI3srY5oQwAAABreyJvcmlnaW4iOiJodHRwczovL2Nkbi50YWJvb2xhLmNvbTo0NDMiLCJmZWF0dXJlIjoiU2NoZWR1bGVyWWllbGQiLCJleHBpcnkiOjE3MDk2ODMxOTksImlzVGhpcmRQYXJ0eSI6dHJ1ZX0="><script src="https://www.google.com/cse/static/element/8435450f13508ca1/cse_element__he.js?usqp=CAI%3D" type="text/javascript"></script><link type="text/css" href="https://www.google.com/cse/static/element/8435450f13508ca1/default+he.css" rel="stylesheet"><link type="text/css" href="https://www.google.com/cse/static/style/look/v4/default.css" rel="stylesheet"><link crossorigin="" href="https://googleads.g.doubleclick.net" rel="preconnect"><meta http-equiv="origin-trial" content="As0hBNJ8h++fNYlkq8cTye2qDLyom8NddByiVytXGGD0YVE+2CEuTCpqXMDxdhOMILKoaiaYifwEvCRlJ/9GcQ8AAAB8eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3MTk1MzI3OTksImlzU3ViZG9tYWluIjp0cnVlfQ=="><meta http-equiv="origin-trial" content="AgRYsXo24ypxC89CJanC+JgEmraCCBebKl8ZmG7Tj5oJNx0cmH0NtNRZs3NB5ubhpbX/bIt7l2zJOSyO64NGmwMAAACCeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3MTk1MzI3OTksImlzU3ViZG9tYWluIjp0cnVlfQ=="><meta http-equiv="origin-trial" content="A/ERL66fN363FkXxgDc6F1+ucRUkAhjEca9W3la6xaLnD2Y1lABsqmdaJmPNaUKPKVBRpyMKEhXYl7rSvrQw+AkAAACNeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiRmxlZGdlQmlkZGluZ0FuZEF1Y3Rpb25TZXJ2ZXIiLCJleHBpcnkiOjE3MTkzNTk5OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9"><meta http-equiv="origin-trial" content="A6OdGH3fVf4eKRDbXb4thXA4InNqDJDRhZ8U533U/roYjp4Yau0T3YSuc63vmAs/8ga1cD0E3A7LEq6AXk1uXgsAAACTeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiRmxlZGdlQmlkZGluZ0FuZEF1Y3Rpb25TZXJ2ZXIiLCJleHBpcnkiOjE3MTkzNTk5OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9"><style type="text/css">.gsc-control-cse{font-family:arial, sans-serif}.gsc-control-cse .gsc-table-result{font-family:arial, sans-serif}.gsc-refinementsGradient{background:linear-gradient(to right,rgba(255,255,255,1),rgba(255,255,255,0))}.gsc-control-cse{border-color:#FFFFFF;background-color:#FFFFFF}input.gsc-input,.gsc-input-box,.gsc-input-box-hover,.gsc-input-box-focus{border-color:#D9D9D9}.gsc-search-button-v2,.gsc-search-button-v2:hover,.gsc-search-button-v2:focus{border-color:#666666;background-color:#CECECE;background-image:none;filter:none}.gsc-search-button-v2 svg{fill:#FFFFFF}.gsc-tabHeader.gsc-tabhActive,.gsc-refinementHeader.gsc-refinementhActive{color:#CCCCCC;border-color:#CCCCCC;background-color:#FFFFFF}.gsc-tabHeader.gsc-tabhInactive,.gsc-refinementHeader.gsc-refinementhInactive{color:#CCCCCC;border-color:#CCCCCC;background-color:#FFFFFF}.gsc-webResult.gsc-result,.gsc-results .gsc-imageResult{border-color:#FFFFFF;background-color:#FFFFFF}.gsc-webResult.gsc-result:hover{border-color:#FFFFFF;background-color:#FFFFFF}.gs-webResult.gs-result a.gs-title:link,.gs-webResult.gs-result a.gs-title:link b,.gs-imageResult a.gs-title:link,.gs-imageResult a.gs-title:link b{color:#0000CC}.gs-webResult.gs-result a.gs-title:visited,.gs-webResult.gs-result a.gs-title:visited b,.gs-imageResult a.gs-title:visited,.gs-imageResult a.gs-title:visited b{color:#0000CC}.gs-webResult.gs-result a.gs-title:hover,.gs-webResult.gs-result a.gs-title:hover b,.gs-imageResult a.gs-title:hover,.gs-imageResult a.gs-title:hover b{color:#0000CC}.gs-webResult.gs-result a.gs-title:active,.gs-webResult.gs-result a.gs-title:active b,.gs-imageResult a.gs-title:active,.gs-imageResult a.gs-title:active b{color:#0000CC}.gsc-cursor-page{color:#0000CC}a.gsc-trailing-more-results:link{color:#0000CC}.gs-webResult:not(.gs-no-results-result):not(.gs-error-result) .gs-snippet,.gs-fileFormatType{color:#000000}.gs-webResult div.gs-visibleUrl{color:#008000}.gs-webResult div.gs-visibleUrl-short{color:#008000}.gsc-cursor-box{border-color:#FFFFFF}.gsc-results .gsc-cursor-box .gsc-cursor-page{border-color:#CCCCCC;background-color:#FFFFFF;color:#CCCCCC}.gsc-results .gsc-cursor-box .gsc-cursor-current-page{border-color:#CCCCCC;background-color:#FFFFFF;color:#CCCCCC}.gsc-webResult.gsc-result.gsc-promotion{border-color:#336699;background-color:#FFFFFF}.gsc-completion-title{color:#0000CC}.gsc-completion-snippet{color:#000000}.gs-promotion a.gs-title:link,.gs-promotion a.gs-title:link *,.gs-promotion .gs-snippet a:link{color:#0000CC}.gs-promotion a.gs-title:visited,.gs-promotion a.gs-title:visited *,.gs-promotion .gs-snippet a:visited{color:#0000CC}.gs-promotion a.gs-title:hover,.gs-promotion a.gs-title:hover *,.gs-promotion .gs-snippet a:hover{color:#0000CC}.gs-promotion a.gs-title:active,.gs-promotion a.gs-title:active *,.gs-promotion .gs-snippet a:active{color:#0000CC}.gs-promotion .gs-snippet,.gs-promotion .gs-title .gs-promotion-title-right,.gs-promotion .gs-title .gs-promotion-title-right *{color:#000000}.gs-promotion .gs-visibleUrl,.gs-promotion .gs-visibleUrl-short{color:#008000}.gcsc-find-more-on-google{color:#0000CC}.gcsc-find-more-on-google-magnifier{fill:#0000CC}</style><style type="text/css" data-fbcssmodules="css:fb.css.base css:fb.css.dialog css:fb.css.iframewidget css:fb.css.customer_chat_plugin_iframe">.fb_hidden{position:absolute;top:-10000px;z-index:10001}.fb_reposition{overflow:hidden;position:relative}.fb_invisible{display:none}.fb_reset{background:none;border:0;border-spacing:0;color:#000;cursor:auto;direction:ltr;font-family:'lucida grande', tahoma, verdana, arial, sans-serif;font-size:11px;font-style:normal;font-variant:normal;font-weight:normal;letter-spacing:normal;line-height:1;margin:0;overflow:visible;padding:0;text-align:left;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;visibility:visible;white-space:normal;word-spacing:normal}.fb_reset>div{overflow:hidden}@keyframes fb_transform{from{opacity:0;transform:scale(.95)}to{opacity:1;transform:scale(1)}}.fb_animate{animation:fb_transform .3s forwards}
.fb_hidden{position:absolute;top:-10000px;z-index:10001}.fb_reposition{overflow:hidden;position:relative}.fb_invisible{display:none}.fb_reset{background:none;border:0;border-spacing:0;color:#000;cursor:auto;direction:ltr;font-family:'lucida grande', tahoma, verdana, arial, sans-serif;font-size:11px;font-style:normal;font-variant:normal;font-weight:normal;letter-spacing:normal;line-height:1;margin:0;overflow:visible;padding:0;text-align:left;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;visibility:visible;white-space:normal;word-spacing:normal}.fb_reset>div{overflow:hidden}@keyframes fb_transform{from{opacity:0;transform:scale(.95)}to{opacity:1;transform:scale(1)}}.fb_animate{animation:fb_transform .3s forwards}
.fb_dialog{background:rgba(82, 82, 82, .7);position:absolute;top:-10000px;z-index:10001}.fb_dialog_advanced{border-radius:8px;padding:10px}.fb_dialog_content{background:#fff;color:#373737}.fb_dialog_close_icon{background:url(https://z-p3-static.xx.fbcdn.net/rsrc.php/v3/yq/r/IE9JII6Z1Ys.png) no-repeat scroll 0 0 transparent;cursor:pointer;display:block;height:15px;position:absolute;right:18px;top:17px;width:15px}.fb_dialog_mobile .fb_dialog_close_icon{left:5px;right:auto;top:5px}.fb_dialog_padding{background-color:transparent;position:absolute;width:1px;z-index:-1}.fb_dialog_close_icon:hover{background:url(https://z-p3-static.xx.fbcdn.net/rsrc.php/v3/yq/r/IE9JII6Z1Ys.png) no-repeat scroll 0 -15px transparent}.fb_dialog_close_icon:active{background:url(https://z-p3-static.xx.fbcdn.net/rsrc.php/v3/yq/r/IE9JII6Z1Ys.png) no-repeat scroll 0 -30px transparent}.fb_dialog_iframe{line-height:0}.fb_dialog_content .dialog_title{background:#6d84b4;border:1px solid #365899;color:#fff;font-size:14px;font-weight:bold;margin:0}.fb_dialog_content .dialog_title>span{background:url(https://z-p3-static.xx.fbcdn.net/rsrc.php/v3/yd/r/Cou7n-nqK52.gif) no-repeat 5px 50%;float:left;padding:5px 0 7px 26px}body.fb_hidden{height:100%;left:0;margin:0;overflow:visible;position:absolute;top:-10000px;transform:none;width:100%}.fb_dialog.fb_dialog_mobile.loading{background:url(https://z-p3-static.xx.fbcdn.net/rsrc.php/v3/ya/r/3rhSv5V8j3o.gif) white no-repeat 50% 50%;min-height:100%;min-width:100%;overflow:hidden;position:absolute;top:0;z-index:10001}.fb_dialog.fb_dialog_mobile.loading.centered{background:none;height:auto;min-height:initial;min-width:initial;width:auto}.fb_dialog.fb_dialog_mobile.loading.centered #fb_dialog_loader_spinner{width:100%}.fb_dialog.fb_dialog_mobile.loading.centered .fb_dialog_content{background:none}.loading.centered #fb_dialog_loader_close{clear:both;color:#fff;display:block;font-size:18px;padding-top:20px}#fb-root #fb_dialog_ipad_overlay{background:rgba(0, 0, 0, .4);bottom:0;left:0;min-height:100%;position:absolute;right:0;top:0;width:100%;z-index:10000}#fb-root #fb_dialog_ipad_overlay.hidden{display:none}.fb_dialog.fb_dialog_mobile.loading iframe{visibility:hidden}.fb_dialog_mobile .fb_dialog_iframe{position:sticky;top:0}.fb_dialog_content .dialog_header{background:linear-gradient(from(#738aba), to(#2c4987));border-bottom:1px solid;border-color:#043b87;box-shadow:white 0 1px 1px -1px inset;color:#fff;font:bold 14px Helvetica, sans-serif;text-overflow:ellipsis;text-shadow:rgba(0, 30, 84, .296875) 0 -1px 0;vertical-align:middle;white-space:nowrap}.fb_dialog_content .dialog_header table{height:43px;width:100%}.fb_dialog_content .dialog_header td.header_left{font-size:12px;padding-left:5px;vertical-align:middle;width:60px}.fb_dialog_content .dialog_header td.header_right{font-size:12px;padding-right:5px;vertical-align:middle;width:60px}.fb_dialog_content .touchable_button{background:linear-gradient(from(#4267B2), to(#2a4887));background-clip:padding-box;border:1px solid #29487d;border-radius:3px;display:inline-block;line-height:18px;margin-top:3px;max-width:85px;padding:4px 12px;position:relative}.fb_dialog_content .dialog_header .touchable_button input{background:none;border:none;color:#fff;font:bold 12px Helvetica, sans-serif;margin:2px -12px;padding:2px 6px 3px 6px;text-shadow:rgba(0, 30, 84, .296875) 0 -1px 0}.fb_dialog_content .dialog_header .header_center{color:#fff;font-size:16px;font-weight:bold;line-height:18px;text-align:center;vertical-align:middle}.fb_dialog_content .dialog_content{background:url(https://z-p3-static.xx.fbcdn.net/rsrc.php/v3/y9/r/jKEcVPZFk-2.gif) no-repeat 50% 50%;border:1px solid #4a4a4a;border-bottom:0;border-top:0;height:150px}.fb_dialog_content .dialog_footer{background:#f5f6f7;border:1px solid #4a4a4a;border-top-color:#ccc;height:40px}#fb_dialog_loader_close{float:left}.fb_dialog.fb_dialog_mobile .fb_dialog_close_icon{visibility:hidden}#fb_dialog_loader_spinner{animation:rotateSpinner 1.2s linear infinite;background-color:transparent;background-image:url(https://z-p3-static.xx.fbcdn.net/rsrc.php/v3/yD/r/t-wz8gw1xG1.png);background-position:50% 50%;background-repeat:no-repeat;height:24px;width:24px}@keyframes rotateSpinner{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}
.fb_iframe_widget{display:inline-block;position:relative}.fb_iframe_widget span{display:inline-block;position:relative;text-align:justify}.fb_iframe_widget iframe{position:absolute}.fb_iframe_widget_fluid_desktop,.fb_iframe_widget_fluid_desktop span,.fb_iframe_widget_fluid_desktop iframe{max-width:100%}.fb_iframe_widget_fluid_desktop iframe{min-width:220px;position:relative}.fb_iframe_widget_lift{z-index:1}.fb_iframe_widget_fluid{display:inline}.fb_iframe_widget_fluid span{width:100%}
.fb_mpn_mobile_landing_page_slide_out{animation-duration:200ms;animation-name:fb_mpn_landing_page_slide_out;transition-timing-function:ease-in}.fb_mpn_mobile_landing_page_slide_out_from_left{animation-duration:200ms;animation-name:fb_mpn_landing_page_slide_out_from_left;transition-timing-function:ease-in}.fb_mpn_mobile_landing_page_slide_up{animation-duration:500ms;animation-name:fb_mpn_landing_page_slide_up;transition-timing-function:ease-in}.fb_mpn_mobile_bounce_in{animation-duration:300ms;animation-name:fb_mpn_bounce_in;transition-timing-function:ease-in}.fb_mpn_mobile_bounce_out{animation-duration:300ms;animation-name:fb_mpn_bounce_out;transition-timing-function:ease-in}.fb_mpn_mobile_bounce_out_v2{animation-duration:300ms;animation-name:fb_mpn_fade_out;transition-timing-function:ease-in}.fb_customer_chat_bounce_in_v2{animation-duration:300ms;animation-name:fb_bounce_in_v2;transition-timing-function:ease-in}.fb_customer_chat_bounce_in_from_left{animation-duration:300ms;animation-name:fb_bounce_in_from_left;transition-timing-function:ease-in}.fb_customer_chat_bounce_out_v2{animation-duration:300ms;animation-name:fb_bounce_out_v2;transition-timing-function:ease-in}.fb_customer_chat_bounce_out_from_left{animation-duration:300ms;animation-name:fb_bounce_out_from_left;transition-timing-function:ease-in}.fb_invisible_flow{display:inherit;height:0;overflow-x:hidden;width:0}@keyframes fb_mpn_landing_page_slide_out{0%{margin:0 12px;width:100% - 24px}60%{border-radius:18px}100%{border-radius:50%;margin:0 24px;width:60px}}@keyframes fb_mpn_landing_page_slide_out_from_left{0%{left:12px;width:100% - 24px}60%{border-radius:18px}100%{border-radius:50%;left:12px;width:60px}}@keyframes fb_mpn_landing_page_slide_up{0%{bottom:0;opacity:0}100%{bottom:24px;opacity:1}}@keyframes fb_mpn_bounce_in{0%{opacity:.5;top:100%}100%{opacity:1;top:0}}@keyframes fb_mpn_fade_out{0%{bottom:30px;opacity:1}100%{bottom:0;opacity:0}}@keyframes fb_mpn_bounce_out{0%{opacity:1;top:0}100%{opacity:.5;top:100%}}@keyframes fb_bounce_in_v2{0%{opacity:0;transform:scale(0, 0);transform-origin:bottom right}50%{transform:scale(1.03, 1.03);transform-origin:bottom right}100%{opacity:1;transform:scale(1, 1);transform-origin:bottom right}}@keyframes fb_bounce_in_from_left{0%{opacity:0;transform:scale(0, 0);transform-origin:bottom left}50%{transform:scale(1.03, 1.03);transform-origin:bottom left}100%{opacity:1;transform:scale(1, 1);transform-origin:bottom left}}@keyframes fb_bounce_out_v2{0%{opacity:1;transform:scale(1, 1);transform-origin:bottom right}100%{opacity:0;transform:scale(0, 0);transform-origin:bottom right}}@keyframes fb_bounce_out_from_left{0%{opacity:1;transform:scale(1, 1);transform-origin:bottom left}100%{opacity:0;transform:scale(0, 0);transform-origin:bottom left}}@keyframes slideInFromBottom{0%{opacity:.1;transform:translateY(100%)}100%{opacity:1;transform:translateY(0)}}@keyframes slideInFromBottomDelay{0%{opacity:0;transform:translateY(100%)}97%{opacity:0;transform:translateY(100%)}100%{opacity:1;transform:translateY(0)}}</style><style type="text/css">.gscb_a{display:inline-block;font:27px/13px arial,sans-serif}.gsst_a .gscb_a{color:#a1b9ed;cursor:pointer}.gsst_a:hover .gscb_a,.gsst_a:focus .gscb_a{color:#36c}.gsst_a{display:inline-block}.gsst_a{cursor:pointer;padding:0 4px}.gsst_a:hover{text-decoration:none!important}.gsst_b{font-size:16px;padding:0 2px;position:relative;user-select:none;-webkit-user-select:none;white-space:nowrap}.gsst_e{vertical-align:middle;opacity:0.55;}.gsst_a:hover .gsst_e,.gsst_a:focus .gsst_e{opacity:0.72;}.gsst_a:active .gsst_e{opacity:1;}.gsst_f{background:white;text-align:left}.gsst_g{background-color:white;border:1px solid #ccc;border-top-color:#d9d9d9;box-shadow:0 2px 4px rgba(0,0,0,0.2);-webkit-box-shadow:0 2px 4px rgba(0,0,0,0.2);margin:-1px -3px;padding:0 6px}.gsst_h{background-color:white;height:1px;margin-bottom:-1px;position:relative;top:-1px}.gsib_a{width:100%;padding:4px 6px 0}.gsib_a,.gsib_b{vertical-align:top}.gssb_c{border:0;position:absolute;z-index:989}.gssb_e{border:1px solid #ccc;border-top-color:#d9d9d9;box-shadow:0 2px 4px rgba(0,0,0,0.2);-webkit-box-shadow:0 2px 4px rgba(0,0,0,0.2);cursor:default}.gssb_f{visibility:hidden;white-space:nowrap}.gssb_k{border:0;display:block;position:absolute;top:0;z-index:988}.gsdd_a{border:none!important}.gsq_a{padding:0}.gssb_a{padding:0 7px}.gssb_a,.gssb_a td{white-space:nowrap;overflow:hidden;line-height:22px}#gssb_b{font-size:11px;color:#36c;text-decoration:none}#gssb_b:hover{font-size:11px;color:#36c;text-decoration:underline}.gssb_g{text-align:center;padding:8px 0 7px;position:relative}.gssb_h{font-size:15px;height:28px;margin:0.2em;-webkit-appearance:button}.gssb_i{background:#eee}.gss_ifl{visibility:hidden;padding-left:5px}.gssb_i .gss_ifl{visibility:visible}a.gssb_j{font-size:13px;color:#36c;text-decoration:none;line-height:100%}a.gssb_j:hover{text-decoration:underline}.gssb_l{height:1px;background-color:#e5e5e5}.gssb_m{color:#000;background:#fff}.gssb_a{padding:0 9px}.gsib_a{padding:5px 9px 4px 9px}.gscb_a{line-height:27px}.gssb_e{border:0}.gssb_l{margin:5px 0}input.gsc-input::-webkit-input-placeholder{font-size:14px}input.gsc-input:-moz-placeholder{font-size:14px}input.gsc-input::-moz-placeholder{font-size:14px}input.gsc-input:-ms-input-placeholder{font-size:14px}input.gsc-input:focus::-webkit-input-placeholder{color:transparent}input.gsc-input:focus:-moz-placeholder{color:transparent}input.gsc-input:focus::-moz-placeholder{color:transparent}input.gsc-input:focus:-ms-input-placeholder{color:transparent}.gssb_c .gsc-completion-container{position:static}.gssb_c{z-index:5000}.gsc-completion-container table{background:transparent;font-size:inherit;font-family:inherit}.gssb_c > tbody > tr,.gssb_c > tbody > tr > td,.gssb_d,.gssb_d > tbody > tr,.gssb_d > tbody > tr > td,.gssb_e,.gssb_e > tbody > tr,.gssb_e > tbody > tr > td{padding:0;margin:0;border:0}.gssb_a table,.gssb_a table tr,.gssb_a table tr td{padding:0;margin:0;border:0}</style><script charset="utf-8" src="https://platform.twitter.com/js/tweet.d7aeb21a88e025d2ea5f5431a103f586.js"></script><style type="text/css">.trc_rbox_container{direction:ltr;text-align:left}.trc_rbox_container [class*=span]{float:none;margin-left:0}.trc_multi_widget_container{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}.trc_multi_widget_container .trc_rbox_div{margin:0}.trc_rbox_header{border:0 solid;overflow:hidden;vertical-align:middle}.trc_rbox_container .trc_img{display:inline-block!important}.trc_rbox_header_icon_div{display:table-cell;vertical-align:baseline}.trc_rbox_header .trc_rbox_header_icon_div .trc_rbox_header_icon_img{vertical-align:middle;width:auto}.trc_rbox_header_icon_span{display:inline-table}.in_trc_header{position:relative!important;float:right;margin:0}#trc_rbox_css_loaded{overflow:hidden;width:0;height:0}.trc_rbox{margin-top:0}.trc_rbox_div{margin:0 0 3px;direction:ltr;padding:0;box-sizing:border-box;-moz-box-sizing:border-box;-ms-box-sizing:border-box;-webkit-box-sizing:border-box;overflow:auto;position:relative;width:auto;border:solid #ccc 1px}.loading-animation span{display:block}.videoCube{zoom:1;cursor:pointer;float:none;overflow:hidden;box-sizing:border-box;-moz-box-sizing:border-box;-ms-box-sizing:border-box;-webkit-box-sizing:border-box}.videoCube_hover,div.videoCube:hover{cursor:pointer}.videoCube span.video-title:hover,.videoCube_hover span.video-title{text-decoration:underline}.videoCube a{text-decoration:none;border:0;color:#000;cursor:pointer}.videoCube a,.videoCube a:hover,.videoCube a:link,.videoCube_hover a{text-decoration:none!important;outline:0}.videoCube a .thumbBlock{float:left;display:block;overflow:hidden!important}.videoCube a img,.videoCube img{border:0;display:block;margin:0;height:auto;width:auto}.videoCube .video-label{display:block;overflow:hidden}.videoCube .video-label{width:auto!important;white-space:pre-wrap;white-space:-moz-pre-wrap;white-space:-o-pre-wrap;word-wrap:break-word}.videoCube .video-label-box.label-box-with-title-icon{display:table}.video-icon-container{float:left;display:table-cell;vertical-align:baseline}.video-icon-img{vertical-align:middle}.videoCube .video-duration{height:0;float:left;position:relative;color:#fff;font-size:11px}.videoCube .video-duration dt{border-radius:4px;-moz-border-radius:4px;-webkit-border-radius:4px;background-color:#000;opacity:.6}.videoCube span.video-label.trc_ellipsis{position:relative;overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical}.videoCube span.video-label.trc-smart-ellipsis{position:relative;overflow:hidden}.videoCube span.video-label.trc-smart-ellipsis ins{display:inline-block;text-decoration:inherit}.videoCube span.video-label.trc-smart-ellipsis.tbl-ltr-label{direction:ltr}.videoCube span.video-label.trc-smart-ellipsis.tbl-ltr-label ins{float:left;margin-right:5px;direction:ltr}.videoCube span.video-label.trc-smart-ellipsis.tbl-rtl-label{float:right;direction:rtl;width:100%!important}.videoCube span.video-label.trc-smart-ellipsis.tbl-rtl-label ins{float:right;margin-left:5px;direction:rtl}.videoCube span.video-label.trc-smart-ellipsis ins.lastLineEllipsis{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;word-wrap:normal;width:100%}.video-duration.video-duration-detail div{color:#fff}.trc_rbox .sponsored{position:relative;display:block;overflow:visible;height:auto;width:auto;padding-right:0;text-align:right;font-size:9px}.trc_rbox_div{height:410px}.videoCube{direction:ltr;font-size:11px;margin:0;color:#000;border-width:0}.videoCube.vertical:first-child{border-top:0;margin-top:0}.videoCube.horizontal:first-child{border-left:0;margin-left:0}.videoCube_hover,div.videoCube:hover{background-color:#ebf0ff;color:#000}.videoCube .thumbBlock{margin:0;border-style:solid}.videoCube a img,.videoCube img{border-color:#ececec}.videoCube .video-label-box{margin-left:81px}.videoCube .video-label dt{font-weight:700}.videoCube .video-title{height:auto;margin-bottom:3px;white-space:normal}.videoCube .trc_inline_detail_spacer{display:inline-block;white-space:pre}.loading-animation{font-family:sans;font-size:1.5em;text-align:center;color:gray;height:100%}.trc_rbox_header{font-family:Arial,Helvetica,sans-serif;font-size:12px;font-weight:700;text-decoration:none;color:#000}.trc_header_right_part{position:absolute;left:50%;top:0}.branding_div{overflow:visible;float:right}.branding_div img{height:20px}.videoCube .branding .logoDiv{font-size:inherit;line-height:inherit;background:0 0;margin:0;padding:0}.videoCube .branding .logoDiv a{vertical-align:inherit;color:inherit;line-height:inherit}.videoCube .branding .logoDiv a span{vertical-align:inherit}.trc_related_container .videoCube .branding .attribution-disclosure-link-sponsored{display:inline-block;float:none}.trc_related_container .videoCube .branding .attribution-disclosure-link-sponsored.align-disclosure-right{float:right;margin-left:auto;padding-left:2px}.videoCube .video-label-box .branding.composite-branding{display:-webkit-box;display:-ms-flexbox;display:flex}.branding.composite-branding>*{display:inline-block;vertical-align:bottom}.branding .branding-separator{margin:0 2px;font-weight:400}.branding .branding-inner{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.video-label-box span.branding.inline-branding{display:inline-block}.trc_related_container div.horizontal{float:left;box-sizing:border-box;-moz-box-sizing:border-box;-ms-box-sizing:border-box;-webkit-box-sizing:border-box}.trc_related_container DIV.videoCube.thumbnail_bottom .thumbBlock,.trc_related_container DIV.videoCube.thumbnail_top .thumbBlock{float:none}.vidiscovery-note{display:none}.videoCube .thumbBlock .trc_sponsored_overlay_base{display:block;width:auto;margin-left:0;position:absolute;color:#fff!important}.videoCube .thumbBlock .trc_sponsored_overlay{opacity:.6;display:block;position:absolute}.videoCube .thumbBlock .trc_sponsored_overlay_base .sponsored{position:relative;display:block;overflow:visible;width:auto;text-align:center;padding:0 5px;margin-top:0}.videoCube .thumbBlock .trc_sponsored_overlay_base.round .trc_sponsored_overlay{border-radius:4px;-moz-border-radius:4px;-webkit-border-radius:4px}.videoCube .thumbBlock .trc_sponsored_overlay_base.round{margin-left:4px}.thumbnail-emblem,.videoCube .thumbnail-overlay,.videoCube:hover .thumbnail-overlay,.videoCube_hover .thumbnail-overlay{position:absolute;background:transparent no-repeat;background-size:contain;z-index:50}.thumbnail_bottom{padding-bottom:8px}.trc_related_container .logoDiv{font-family:Arial,Helvetica,sans-serif;white-space:nowrap;font-size:9px}.trc_related_container .logoDiv a{font-size:9px;text-decoration:none!important;color:#000;margin-right:1px;vertical-align:text-bottom}.logoDiv a span:hover{text-decoration:underline}.trc_rbox_header .logoDiv{font-size:1em}.trc_tl .trc_rbox_header .logoDiv{position:relative;z-index:1}.trc_tl .trc_rbox_header_span .trc_header_right_column{position:absolute;width:48%;left:52%;top:0}.trc_tl .trc_rbox_div .videoCube.horizontal{clear:left}.trc_tl .trc_rbox_div .videoCube.trc_tl_right_col{float:none;clear:right;margin-left:auto}.trc_tl .videoCube .video-title .branding{line-height:1.3em}.trc_tl .videoCube:hover span.branding,.trc_tl .videoCube_hover span.branding{text-decoration:none}.trc_tl .trc_rbox_div .videoCube.thumbnail_none a{vertical-align:top;overflow:visible}.trc_tl .videoCube .video-label-box{display:inline-block;vertical-align:top;width:100%}.trc_rbox_container.trc_expandable{overflow:hidden;max-height:0;transition-property:max-height;-webkit-transition-property:max-height;-moz-transition-property:max-height;-o-transition-property:max-height;-webkit-transform:translateZ(0);-moz-transform:translateZ(0);-ms-transform:translateZ(0);-o-transform:translateZ(0);transform:translateZ(0)}.trc_related_container .videoCube .thumbBlock .branding{position:absolute;bottom:0;z-index:1;width:100%;margin:0;padding:5px 0;text-align:center}.syndicatedItem .branding{margin:0}.trc-inplayer-rbox{background:#333;background:rgba(30,30,30,.9);bottom:0;position:absolute;height:300px;text-align:center}.trc-inplayer-rbox .trc_rbox_container{margin:50px auto 0;width:640px}.trc_rbox.trc-auto-size{width:100%;height:100%}.videoCube.thumbnail_under .video-title{min-height:2.58em}.videoCube.thumbnail_under .tbl-text-over-container{width:100%;position:absolute;z-index:1;left:0;bottom:0;min-height:66%;max-height:66%;padding-top:2px;padding-bottom:2px;line-height:1.25em}.videoCube.thumbnail_under .tbl-text-over-container .tbl-text-over{height:100%;width:100%;position:absolute;background:linear-gradient(to bottom,rgba(0,0,0,0) 0,rgba(0,0,0,.8) 100%)}.videoCube.thumbnail_under .tbl-text-over-container span.branding,.videoCube.thumbnail_under .tbl-text-over-container span.video-description,.videoCube.thumbnail_under .tbl-text-over-container span.video-title{position:relative;z-index:1;padding:0 8px;margin:0}.videoCube.thumbnail_under .tbl-text-over-container span.video-title{margin-bottom:6px;min-height:auto}.videoCube.thumbnail_under .tbl-text-over-container .video-label-box{position:absolute;bottom:0;left:0;width:100%;padding:0 8px 6px 8px;min-height:auto;box-sizing:border-box}.trc-auto-size .trc_rbox_outer .trc_rbox_div{height:auto;width:auto}.trc-auto-size .trc_rbox_div .videoCube{height:auto}.trc-auto-size .trc_rbox_div .videoCube.trc-first-recommendation{margin-top:0}.trc_rbox .trc_rbox_outer .trc_rbox_div .videoCube.trc-first-in-row{margin-left:0}.trc_elastic .trc_rbox{width:auto}.trc_elastic .videoCube{overflow:hidden}.trc_elastic .videoCube .thumbBlock{background:transparent no-repeat center center;background-size:cover;position:absolute;display:inline-block;top:0;right:0;bottom:0;left:0;margin-left:0;margin-right:0}.trc_elastic .thumbBlock_holder{position:relative;width:100%}.trc_elastic .thumbnail_start .thumbBlock_holder{float:left;margin-right:10px}.trc_elastic .thumbnail_start.item-has-pre-label .thumbBlock_holder{margin-right:0}.trc_elastic .videoCube_aspect{width:1px}.trc_elastic .trc_rbox .trc_rbox_div{height:auto}.trc_elastic .thumbnail_start .trc-pre-label{float:left;padding-right:10px}.trc_elastic .thumbnail_start.trc-split-label .trc-main-label{float:left;padding-left:10px}.trc_elastic .video-label-box{display:block}.trc_elastic .thumbnail_start .video-label-box{box-sizing:border-box}.trc_user_adChoice_btn{background:url(//cdn.taboola.com/static/c5/c5ef96bc-30ab-456a-b3d5-a84f367c6a46.svg) no-repeat scroll 0 0 #fff;border-radius:0 0 0 5px;width:16px;height:16px;position:absolute;right:0;top:0;z-index:9000;cursor:pointer;border-width:2px 0 2px 4px;border-style:solid;border-color:#fff;opacity:.7;background-size:contain;visibility:hidden}.videoCube:hover .trc_user_adChoice_btn,.videoCube_hover .trc_user_adChoice_btn{visibility:visible}.videoCube .trc_user_adChoice_btn_static{visibility:visible}.p-video-overlay-container{position:absolute;width:100%;height:100%;top:0;left:0;background-color:transparent}.p-video-overlay.p-video-overlay-show{display:flex}.p-video-overlay{display:none;background-color:#000;opacity:.7;width:100%;height:100%;flex-direction:column}.p-video-overlay-action{color:#fff;width:100%;direction:ltr;text-align:center;display:flex;justify-content:center;flex-direction:column}.p-video-overlay-action.p-video-back-action{height:34%}.p-video-back-action-label{font-family:Helvetica Neue,serif;font-size:14px;font-weight:200;letter-spacing:1px}.p-video-overlay-action.p-video-goto-action{height:66%}.p-video-goto-action-url{font-family:Helvetica Neue,serif;font-size:24px;font-weight:400;text-decoration:underline;margin-top:5px}.p-video-goto-action-label{font-family:Helvetica Neue,serif;font-size:14px;font-weight:100;letter-spacing:1px}.trc_related_container .trc_clearer{clear:both;height:0;overflow:hidden;font-size:0;line-height:0;visibility:hidden}.link-adc{float:right!important}.trc-widget-footer .logoDiv{line-height:normal;padding-bottom:5px}.trc-widget-footer .link-adc a .trc_adc_wrapper,.trc_header_ext .link-adc a .trc_adc_wrapper{height:12px;width:18px;display:inline-block;padding-left:1px;margin-bottom:2px}.trc-widget-footer .link-adc a .trc_adc_b_logo,.trc-widget-footer .link-adc a .trc_adc_s_logo,.trc_header_ext .link-adc a .trc_adc_b_logo,.trc_header_ext .link-adc a .trc_adc_s_logo{vertical-align:middle;height:15px;display:inline-block;margin-top:-1px}.trc-widget-footer .link-adc a .trc_adc_s_logo,.trc_header_ext .link-adc a .trc_adc_s_logo{width:12px;height:14px;background:url(//cdn.taboola.com/static/c5/c5ef96bc-30ab-456a-b3d5-a84f367c6a46.svg) no-repeat;background-size:contain;vertical-align:middle}.trc-widget-footer .link-adc a .trc_adc_b_logo,.trc_header_ext .link-adc a .trc_adc_b_logo{width:77px;background:#fff url(//cdn.taboola.com/libtrc/static/thumbnails/0781f9c5a8637d1e162874f157460048.png) no-repeat!important;right:-1px;display:none;position:absolute}.logoDiv .trc_mobile_adc_link,.logoDiv .trc_mobile_attribution_link,.logoDiv .trc_mobile_disclosure_link{display:none}.logoDiv .trc_desktop_adc_link,.logoDiv .trc_desktop_attribution_link,.logoDiv .trc_desktop_disclosure_link{display:inline}@media screen and (max-width:767px){.logoDiv .trc_mobile_disclosure_link{display:inline}.logoDiv .trc_mobile_attribution_link{display:inline}.logoDiv .trc_mobile_adc_link{display:inline}.logoDiv .trc_desktop_disclosure_link{display:none}.logoDiv .trc_desktop_attribution_link{display:none}.logoDiv .trc_desktop_adc_link{display:none}}.trc_in_iframe .logoDiv .trc_mobile_attribution_link,.trc_in_iframe .logoDiv .trc_mobile_disclosure_link{display:inline}.trc_in_iframe .logoDiv .trc_desktop_attribution_link,.trc_in_iframe .logoDiv .trc_desktop_disclosure_link{display:none}.trc_related_container .logoDiv,.trc_related_container .trc_header_ext .logoDiv{float:right}.trc_related_container .logoDiv+.logoDiv{margin-right:2px}.trc_related_container .attribution-disclosure-link-hybrid,.trc_related_container .attribution-disclosure-link-sponsored{display:none}.trc-w2f.trc-content-sponsored .attribution-disclosure-link-sponsored,.trc_related_container .trc-content-sponsored .attribution-disclosure-link-sponsored{display:block}.trc-w2f.trc-content-hybrid .attribution-disclosure-link-hybrid,.trc_related_container .trc-content-hybrid .attribution-disclosure-link-hybrid{display:block}.trc_related_container .trc-widget-footer:hover a span,.trc_related_container .trc_header_ext:hover a span{text-decoration:underline!important}.logoDiv a span.trc_logos_v_align{display:inline-block!important;font-size:15px!important;line-height:1em!important;width:0!important}.trc_related_container .trc-widget-footer:hover a span.trc_adc_wrapper,.trc_related_container .trc-widget-footer:hover a span.trc_logos_v_align,.trc_related_container .trc_header_ext:hover a span.trc_adc_wrapper,.trc_related_container .trc_header_ext:hover a span.trc_logos_v_align{text-decoration:none!important}.trc_related_container .trc_rbox_header_span .trc_header_right_column{display:none}.trc_related_container img{max-width:none}.trc_related_container{clear:both}.tbl-loading-spinner{width:100%;height:40px;background:url(//cdn.taboola.com/static/91/91a25024-792d-4b52-84e6-ad1478c3f552.gif) center center no-repeat;background-size:40px}.tbl-hidden{display:none!important}.tbl-invisible{opacity:0;pointer-events:none}.tbl-batch-anchor{width:100%;height:1px}.iw_video_frame .trc_rbox_div{overflow:hidden}.trc-w2f .trc_rbox .trc-widget-footer,.trc-w2f .trc_rbox .trc_rbox_header{display:none!important}.trc_rbox_container{direction:rtl;text-align:right;}
.videoCube{direction:rtl;}
.videoCube .video-label-box{margin-left: auto; margin-right: 81px; direction:rtl;}
.sponsored{text-align:left;}
.trc_related_container div.horizontal{float:right; border-style:none none none solid;}
.videoCube a .thumbBlock {float: right; margin-left:5px; margin-right:1px;}
.videoCube .video-title { margin-left: 3px;margin-right: 0;}
.trc_rbox_div {direction:rtl;}
.videoCube .video-duration{position: relative; direction:ltr; text-align:left; }
.trc_elastic .thumbnail_start .thumbBlock_holder {
    float: right;
	margin-right: 0;
	margin-left: 10px;
}


.trc_elastic .thumbnail_start.item-has-pre-label .thumbBlock_holder {
	margin-left: 0;
}

.trc_elastic .thumbnail_start .trc-pre-label {
	float: right;
	padding-right: 0;
	padding-left: 10px;
}

.trc_elastic .thumbnail_start.trc-split-label .trc-main-label {
	float: right;
	padding-left: 0;
	padding-right: 10px;
}

.branding_div{
	float:left;
}

.in_trc_header{
	position: relative;
	float:left;	
	margin:0;
}

.trc_related_container .trc_rbox_header .trc_rbox_header_span .trc_header_right_part {
	right: 52%;
}

.trc_header_ext,
.trc-widget-footer {
	float: left;
}

.trc_related_container .videoCube .video-label-box,
.trc_related_container .trc_rbox .trc_rbox_div .videoCube .video-label-box .branding {
	text-align: right;
}

.trc_related_container.trc_tl .trc_rbox_div .videoCube.horizontal {
	padding: 3px 0 3px 3px;
	clear: right;
}

.trc_related_container.trc_tl .trc_rbox_div .videoCube.thumbnail_none a {
	margin-right: 15px;
}

.trc_related_container.trc_tl .trc_rbox_div .videoCube.trc_tl_right_col {
	clear: left;
	margin-right: auto;
	margin-left: 0;
}

.video-icon-container {
	float: right;
}

/*------------- Multi-widget -------------*/
.trc_multi_widget_container {
	direction: rtl;
}
/*----------------------------------------*/.alternating-thumbnails-a .video-title{font-family:Arial, Helvetica, sans-serif;font-size:18.0px;line-height:24.0px;font-weight:bold;max-height:96.0px;*height:96.0px;color:#000000;text-decoration:none;}.alternating-thumbnails-a .video-description{font-family:Arial, Helvetica, sans-serif;font-size:14px;line-height:19.0px;font-weight:normal;max-height:2.2em;*height:2.2em;color:black;text-decoration:none;}.alternating-thumbnails-a .trc_rbox_div{width:auto;_width:99%;height:410px;border-width:0;padding:0;}.alternating-thumbnails-a .videoCube .video-duration{left:36px;display:none;}.alternating-thumbnails-a .video-label,.alternating-thumbnails-a .sponsored,.alternating-thumbnails-a .sponsored-url{font-family:Arial, Helvetica, sans-serif;}.alternating-thumbnails-a .trc_rbox_header{font-family:Arial, Helvetica, sans-serif;font-size:20.0px;font-weight:bold;text-decoration:none;color:#000099;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 6px 0px;line-height:1.2em;display:block;margin:0px 0px 0px 0px;position:relative;background-color:transparent;box-sizing:initial;height:auto;width:auto;_width:auto;}.alternating-thumbnails-a .sponsored-url{font-size:9px;font-weight:bold;text-decoration:underline;color:green;}.alternating-thumbnails-a .sponsored{font-size:9px;font-weight:normal;text-decoration:none;color:#9C9A9C;}.alternating-thumbnails-a .video-category{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.alternating-thumbnails-a .video-duration-detail{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.alternating-thumbnails-a .video-rating{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.alternating-thumbnails-a .video-uploader{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.alternating-thumbnails-a .video-views{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.alternating-thumbnails-a .video-published-date{font-size:10px;font-weight:normal;text-decoration:none;color:black;display:inherit;}.alternating-thumbnails-a .sponsored-default .video-title{max-height:2.58em;*height:2.58em;}.alternating-thumbnails-a .sponsored-default .video-description{max-height:2.2em;*height:2.2em;}.alternating-thumbnails-a .videoCube{width:auto;_width:auto;background-color:transparent;border-width:1px 1px 1px 1px;border-color:#D6D5D3;padding:0px 0px 0px 0px;height:auto;margin-left:0px;margin-top:0px;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-style:NONE;}.alternating-thumbnails-a div.videoCube:hover,.alternating-thumbnails-a  div.videoCube_hover{background-color:transparent;}.alternating-thumbnails-a .sponsored-default{background-color:#F7F6C6;}.alternating-thumbnails-a div.sponsored-default:hover,.alternating-thumbnails-a  div.sponsored-default.videoCube_hover{background-color:inherit;}.alternating-thumbnails-a .videoCube .thumbnail-overlay{background-image:null;background-position:5% 5%;}.alternating-thumbnails-a .videoCube:hover .thumbnail-overlay,.alternating-thumbnails-a  .videoCube_hover .thumbnail-overlay{background-image:null;}.alternating-thumbnails-a .trc_rbox_border_elm{border-color:darkgray;}.alternating-thumbnails-a .videoCube .thumbBlock{border-width:0px;border-color:darkgray;}.alternating-thumbnails-a div.videoCube:hover .thumbBlock{border-color:inherit;}.alternating-thumbnails-a .pager_enabled{color:#0056b3;}.alternating-thumbnails-a .trc_pager_counter{color:#000000;}.alternating-thumbnails-a .pager_disabled{color:#7d898f;}.alternating-thumbnails-a .trc_pager_prev:hover,.alternating-thumbnails-a  .trc_pager_next:hover{color:#6497ED;}.alternating-thumbnails-a .trc_pager_selected{color:#0056b3;}.alternating-thumbnails-a .trc_pager_unselected{color:#7d898f;}.alternating-thumbnails-a div.trc_pager_pages div:hover{color:#6497ED;}.alternating-thumbnails-a .trc_lightbox_overlay{background-color:#000000;opacity:0.70;filter:alpha(opacity=70);}.alternating-thumbnails-a .video-label-box{text-align:left;height:96px;margin:5px 0px 0px 0px;}.alternating-thumbnails-a .trc_sponsored_overlay{background-color:black;}.alternating-thumbnails-a .thumbnail-emblem{background-position:5% 5%;width:35;_width:35;height:35;}.alternating-thumbnails-a .videoCube .sponsored{margin-top:-7px;}.alternating-thumbnails-a {width:300px;_width:300px;border-width:0px 0px 0px 0px;border-style:solid solid solid solid;border-color:#DFDFDF;padding:0px 13px 0px 13px;border-radius:0;-moz-border-radius:0;-webkit-border-radius:0;box-shadow:none;}.alternating-thumbnails-a .videoCube.vertical{border-style:solid none none none;}.alternating-thumbnails-a .videoCube.horizontal{border-style:none;}.alternating-thumbnails-a .trc_pager_prev,.alternating-thumbnails-a .trc_pager_next{font-size:12px;font-weight:normal;text-decoration:none;}.alternating-thumbnails-a .trc_pager_pages div{font-size:12px;font-weight:normal;text-decoration:none;}.alternating-thumbnails-a .video-external-data{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.alternating-thumbnails-a .trc_pager div{font-family:serif;}.alternating-thumbnails-a .playerCube .thumbnail-overlay{background-image:null;background-position:5% 5%;}.alternating-thumbnails-a .playerCube:hover .thumbnail-overlay,.alternating-thumbnails-a  .playerCube_hover .thumbnail-overlay{background-image:null;}.alternating-thumbnails-a .playerCube .videoCube{background-color:transparent;border-color:#D6D5D3;border-width:1px;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;margin-left:0px;margin-top:0px;padding:3px;}.alternating-thumbnails-a .playerCube .videoCube.horizontal{border-style:none none none none;}.alternating-thumbnails-a .playerCube .videoCube .video-label-box{margin-left:81px;margin-right:0px;}.alternating-thumbnails-a .playerCube .video-duration-detail{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.alternating-thumbnails-a .playerCube .video-external-data{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.alternating-thumbnails-a .playerCube .video-label-box{text-align:left;}.alternating-thumbnails-a .playerCube .video-published-date{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.alternating-thumbnails-a .playerCube .video-category{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.alternating-thumbnails-a .playerCube .video-description{font-family:Arial, Helvetica, sans-serif;font-size:10px;line-height:11px;font-weight:normal;text-decoration:none;max-height:2.2em;*height:2.2em;color:black;}.alternating-thumbnails-a .playerCube .videoCube .video-duration{display:block;left:36px;}.alternating-thumbnails-a .playerCube .videoCube .thumbBlock{border-width:0px;border-color:darkgray;}.alternating-thumbnails-a .playerCube .video-rating{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.alternating-thumbnails-a .playerCube .video-uploader{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.alternating-thumbnails-a .playerCube .video-views{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.alternating-thumbnails-a .playerCube .video-title{font-family:Arial, Helvetica, sans-serif;text-decoration:none;font-size:14px;line-height:17.5px;font-weight:bold;max-height:2.58em;*height:2.58em;color:black;}.alternating-thumbnails-a .playerCube div.videoCube:hover,.alternating-thumbnails-a  div.videoCube_hover{background-color:transparent;}.alternating-thumbnails-a .whatsThisSyndicated{font-family:Arial, Verdana, sans-serif;font-size:9px;font-weight:normal;color:black;text-decoration:none;padding:0;}.alternating-thumbnails-a div.syndicatedItem:hover,.alternating-thumbnails-a  div.syndicatedItem.videoCube_hover{background-color:transparent;}.alternating-thumbnails-a div.syndicatedItem:hover .thumbBlock{border-color:inherit;}.alternating-thumbnails-a .videoCube.syndicatedItem{background-color:transparent;border-color:#D6D5D3;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-width:1px 1px 1px 1px;border-style:NONE;}.alternating-thumbnails-a .videoCube.syndicatedItem.horizontal{border-style:none;}.alternating-thumbnails-a .videoCube.syndicatedItem .thumbBlock{border-color:darkgray;border-width:0px;}.alternating-thumbnails-a .videoCube.syndicatedItem .thumbnail-overlay{background-image:null;background-position:5% 5%;}.alternating-thumbnails-a .videoCube.syndicatedItem.vertical{border-style:solid none none none;}.alternating-thumbnails-a .videoCube.syndicatedItem .video-duration{display:none;left:36px;}.alternating-thumbnails-a .syndicatedItem{background-color:transparent;}.alternating-thumbnails-a .syndicatedItem .video-description{max-height:2.2em;*height:2.2em;color:black;font-family:Arial, Helvetica, sans-serif;font-size:14px;font-weight:normal;line-height:19.0px;text-decoration:none;}.alternating-thumbnails-a .syndicatedItem .video-title{max-height:72.0px;*height:72.0px;color:#000000;font-family:Arial, Helvetica, sans-serif;font-size:18.0px;line-height:24.0px;font-weight:bold;text-decoration:none;padding:0;}.alternating-thumbnails-a .syndicatedItem .sponsored{color:#9C9A9C;font-size:9px;font-weight:normal;text-decoration:none;}.alternating-thumbnails-a .syndicatedItem .sponsored-url{color:green;font-size:9px;font-weight:bold;text-decoration:underline;}.alternating-thumbnails-a .syndicatedItem .video-category{color:black;font-size:10px;font-weight:normal;text-decoration:none;}.alternating-thumbnails-a .syndicatedItem .video-duration-detail{color:black;font-size:10px;font-weight:normal;text-decoration:none;}.alternating-thumbnails-a .syndicatedItem .video-external-data{color:black;font-size:10px;font-weight:normal;text-decoration:none;}.alternating-thumbnails-a .syndicatedItem .video-published-date{color:black;font-size:10px;font-weight:normal;text-decoration:none;display:inherit;}.alternating-thumbnails-a .syndicatedItem .video-rating{color:black;font-size:10px;font-weight:normal;text-decoration:none;}.alternating-thumbnails-a .syndicatedItem .video-uploader{color:black;font-size:10px;font-weight:normal;text-decoration:none;}.alternating-thumbnails-a .syndicatedItem .video-views{color:black;font-size:10px;font-weight:normal;text-decoration:none;}.alternating-thumbnails-a .syndicatedItem .branding{color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;line-height:24.0px;}.alternating-thumbnails-a .videoCube.syndicatedItem .thumbBlock .branding{text-align:left;background-color:transparent;display:none;left:0px;color:black;font-size:10px;font-weight:normal;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;}.alternating-thumbnails-a .videoCube.syndicatedItem .thumbBlock .static-text{text-align:left;background-color:black;display:none;color:white;font-size:10px;font-weight:normal;text-decoration:none;font-family:Arial, Helvetica, sans-serif;}.alternating-thumbnails-a .videoCube.thumbnail_start .thumbBlock_holder{width:40%;_width:40%;}.alternating-thumbnails-a .trc_rbox_header_icon_img{margin:0px;height:18px;}.alternating-thumbnails-a .video-icon-img{margin:0px;height:18px;}.alternating-thumbnails-a .video-label-box.trc-pre-label{height:0px;}.alternating-thumbnails-a .syndicatedItem .video-label-box.trc-pre-label{height:0px;}.alternating-thumbnails-a .videoCube.thumbnail_start .trc-pre-label{width:60%;_width:60%;}.alternating-thumbnails-a .videoCube.thumbnail_start.trc-split-label .trc-main-label{width:30%;_width:30%;}.alternating-thumbnails-a .videoCube.thumbnail_start.trc-split-label .trc-pre-label{width:30%;_width:30%;}.alternating-thumbnails-a .videoCube .video-label-box.trc-pre-label{margin:0px 0px 0px 0px;}.alternating-thumbnails-a .branding{color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;line-height:24.0px;}.alternating-thumbnails-a .branding .logoDiv a span{color:inherit;font-size:inherit;}.alternating-thumbnails-a .branding div.logoDiv{font-family:inherit;}.alternating-thumbnails-a .videoCube .thumbBlock .static-text{font-weight:normal;font-family:Arial, Helvetica, sans-serif;text-decoration:none;font-size:11px;background-color:#a30202;display:block;color:#ffffff;text-align:left;}.alternating-thumbnails-a .syndicatedItem .video-label-box{height:96px;margin:5px 0px 0px 0px;}.alternating-thumbnails-a .logoDiv a span{font-size:11.0px;color:#000000;display:inline;font-weight:normal;}.alternating-thumbnails-a .tbl-cta-style .cta-button{font-family:Helvetica, Arial, sans-serif;background-color:transparent;border-color:#999990;color:#333333;}.alternating-thumbnails-a .tbl-cta-style .cta-button:hover{color:inherit;border-color:#999990;}.alternating-thumbnails-a .videoCube:hover .video-label-box .video-description{text-decoration:underline;}.alternating-thumbnails-a .videoCube .video-label-box .video-title{margin:0 0 0 0;}.alternating-thumbnails-a .video-label-box .branding{display:block;}.alternating-thumbnails-a .trc_header_left_column{width:48%;_width:48%;display:inline-block;height:auto;}.alternating-thumbnails-a .trc_rbox_header .trc_header_ext{position:relative;top:auto;right:auto;}.alternating-thumbnails-a .logoDiv a{font-size:100%;}.alternating-thumbnails-a .videoCube a{padding:0 0 0 0;}.alternating-thumbnails-a .trc_rbox_header .logoDiv{line-height:normal;}.alternating-thumbnails-a .trc_rbox_header_span .trc_header_right_column{height:auto;}.alternating-thumbnails-a .trc_header_right_part{margin:0px 0 0 0;}.alternating-thumbnails-a .videoCube .story-widget.story-widget-text-under .tbl-text-under-title-background{background-color:#EBEBEB;}.alternating-thumbnails-a .videoCube .story-widget.story-widget-text-under .tbl-ui-line{background-color:#333333;}.alternating-thumbnails-a .tbl-recommendation-reel .tbl-text-under-branding-background{background-color:#EBEBEB;}.alternating-thumbnails-a .tbl-recommendation-reel .tbl-text-under-title-background{background-color:#EBEBEB;}.alternating-thumbnails-a .tbl-recommendation-reel .tbl-ui-line{background-color:#333333;}.alternating-thumbnails-a .tbl-reco-reel-slider{z-index:99999;margin:initial;top:50%;}.alternating-thumbnails-a .tbl-vignette-background-screen{background-color:#fff;opacity:0.8;filter:alpha(opacity=80);}.alternating-thumbnails-a .tbl-vignette-attribution{color:#6B6666;font-size:15px;}.alternating-thumbnails-a vignette{xButtonColor:#fff;backgroundColor:#fff;backgroundOpacity:0.8;xButtonBGColor:#000;}.alternating-thumbnails-a .tbl-vignette-close-btn-wrp{height:15;background:#000;}.alternating-thumbnails-a recommendationReel{min-adx-line-color:#2abfd5;min-adx-progress-color:#FFF;}.thumbnails-g .video-title{font-family:Arial, Helvetica, sans-serif;font-size:14.0px;line-height:19.0px;font-weight:bold;max-height:76.0px;*height:76.0px;color:#000000;text-decoration:none;}.thumbnails-g .video-description{font-family:Arial, Helvetica, sans-serif;font-size:10px;line-height:11px;font-weight:normal;max-height:2.2em;*height:2.2em;color:black;text-decoration:none;}.thumbnails-g .trc_rbox_div{width:auto;_width:99%;height:410px;border-width:0;padding:0;}.thumbnails-g .videoCube .video-duration{left:36px;display:none;}.thumbnails-g .video-label,.thumbnails-g .sponsored,.thumbnails-g .sponsored-url{font-family:Arial, Helvetica, sans-serif;}.thumbnails-g .trc_rbox_header{font-family:Arial, Helvetica, sans-serif;font-size:16.0px;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 6px 0px;}.thumbnails-g .sponsored-url{font-size:9px;font-weight:bold;text-decoration:underline;color:green;}.thumbnails-g .sponsored{font-size:9px;font-weight:normal;text-decoration:none;color:#9C9A9C;}.thumbnails-g .video-category{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.thumbnails-g .video-duration-detail{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.thumbnails-g .video-rating{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.thumbnails-g .video-uploader{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.thumbnails-g .video-views{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.thumbnails-g .video-published-date{font-size:10px;font-weight:normal;text-decoration:none;color:black;display:inherit;}.thumbnails-g .sponsored-default .video-title{max-height:2.58em;*height:2.58em;}.thumbnails-g .sponsored-default .video-description{max-height:2.2em;*height:2.2em;}.thumbnails-g .videoCube{width:auto;_width:auto;background-color:transparent;border-width:0px 0px 0px 0px;border-color:#E4E4E4;padding:0px 0px 0px 0px;height:auto;margin-left:0px;margin-top:0px;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-style:SOLID;}.thumbnails-g div.videoCube:hover,.thumbnails-g  div.videoCube_hover{background-color:transparent;}.thumbnails-g .sponsored-default{background-color:#F7F6C6;}.thumbnails-g div.sponsored-default:hover,.thumbnails-g  div.sponsored-default.videoCube_hover{background-color:inherit;}.thumbnails-g .videoCube .thumbnail-overlay{background-image:null;background-position:5% 5%;}.thumbnails-g .videoCube:hover .thumbnail-overlay,.thumbnails-g  .videoCube_hover .thumbnail-overlay{background-image:null;}.thumbnails-g .trc_rbox_border_elm{border-color:darkgray;}.thumbnails-g .videoCube .thumbBlock{border-width:0px;border-color:darkgray;}.thumbnails-g div.videoCube:hover .thumbBlock{border-color:inherit;}.thumbnails-g .pager_enabled{color:#0056b3;}.thumbnails-g .trc_pager_counter{color:#000000;}.thumbnails-g .pager_disabled{color:#7d898f;}.thumbnails-g .trc_pager_prev:hover,.thumbnails-g  .trc_pager_next:hover{color:#6497ED;}.thumbnails-g .trc_pager_selected{color:#0056b3;}.thumbnails-g .trc_pager_unselected{color:#7d898f;}.thumbnails-g div.trc_pager_pages div:hover{color:#6497ED;}.thumbnails-g .trc_lightbox_overlay{background-color:#000000;opacity:0.70;filter:alpha(opacity=70);}.thumbnails-g .video-label-box{text-align:left;}.thumbnails-g .trc_sponsored_overlay{background-color:black;}.thumbnails-g .thumbnail-emblem{background-position:5% 5%;width:35;_width:35;height:35;}.thumbnails-g .videoCube .sponsored{margin-top:-7px;}.thumbnails-g {width:300px;_width:300px;border-width:0px 0px 0px 0px;border-style:solid solid solid solid;border-color:#DFDFDF;padding:0px 0px 0px 0px;border-radius:0;-moz-border-radius:0;-webkit-border-radius:0;box-shadow:none;}.thumbnails-g .videoCube.vertical{border-style:solid none none none;}.thumbnails-g .videoCube.horizontal{border-style:none;}.thumbnails-g .trc_pager_prev,.thumbnails-g .trc_pager_next{font-size:12px;font-weight:normal;text-decoration:none;}.thumbnails-g .trc_pager_pages div{font-size:12px;font-weight:normal;text-decoration:none;}.thumbnails-g .video-external-data{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.thumbnails-g .trc_pager div{font-family:serif;}.thumbnails-g .playerCube .thumbnail-overlay{background-image:null;background-position:5% 5%;}.thumbnails-g .playerCube:hover .thumbnail-overlay,.thumbnails-g  .playerCube_hover .thumbnail-overlay{background-image:null;}.thumbnails-g .playerCube .videoCube{background-color:transparent;border-color:#D6D5D3;border-width:1px;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;margin-left:0px;margin-top:0px;padding:3px;}.thumbnails-g .playerCube .videoCube.horizontal{border-style:none none none none;}.thumbnails-g .playerCube .videoCube .video-label-box{margin-left:81px;margin-right:0px;}.thumbnails-g .playerCube .video-duration-detail{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.thumbnails-g .playerCube .video-external-data{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.thumbnails-g .playerCube .video-label-box{text-align:left;}.thumbnails-g .playerCube .video-published-date{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.thumbnails-g .playerCube .video-category{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.thumbnails-g .playerCube .video-description{font-family:Arial, Helvetica, sans-serif;font-size:10px;line-height:11px;font-weight:normal;text-decoration:none;max-height:2.2em;*height:2.2em;color:black;}.thumbnails-g .playerCube .videoCube .video-duration{display:block;left:36px;}.thumbnails-g .playerCube .videoCube .thumbBlock{border-width:0px;border-color:darkgray;}.thumbnails-g .playerCube .video-rating{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.thumbnails-g .playerCube .video-uploader{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.thumbnails-g .playerCube .video-views{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.thumbnails-g .playerCube .video-title{font-family:Arial, Helvetica, sans-serif;text-decoration:none;font-size:14px;line-height:17.5px;font-weight:bold;max-height:2.58em;*height:2.58em;color:black;}.thumbnails-g .playerCube div.videoCube:hover,.thumbnails-g  div.videoCube_hover{background-color:transparent;}.thumbnails-g .whatsThisSyndicated{font-family:Arial, Verdana, sans-serif;font-size:9px;font-weight:normal;color:black;text-decoration:none;padding:0;}.thumbnails-g div.syndicatedItem:hover,.thumbnails-g  div.syndicatedItem.videoCube_hover{background-color:transparent;}.thumbnails-g div.syndicatedItem:hover .thumbBlock{border-color:inherit;}.thumbnails-g .videoCube.syndicatedItem{background-color:transparent;border-color:#E4E4E4;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-width:0px 0px 0px 0px;border-style:SOLID;}.thumbnails-g .videoCube.syndicatedItem.horizontal{border-style:none;}.thumbnails-g .videoCube.syndicatedItem .thumbBlock{border-color:darkgray;border-width:0px;}.thumbnails-g .videoCube.syndicatedItem .thumbnail-overlay{background-image:null;background-position:5% 5%;}.thumbnails-g .videoCube.syndicatedItem.vertical{border-style:solid none none none;}.thumbnails-g .videoCube.syndicatedItem .video-duration{display:none;left:36px;}.thumbnails-g .syndicatedItem{background-color:transparent;}.thumbnails-g .syndicatedItem .video-description{max-height:2.2em;*height:2.2em;color:black;font-family:Arial, Helvetica, sans-serif;font-size:10px;font-weight:normal;line-height:11px;text-decoration:none;}.thumbnails-g .syndicatedItem .video-title{max-height:57.0px;*height:57.0px;color:#000000;font-family:Arial, Helvetica, sans-serif;font-size:14.0px;line-height:19.0px;font-weight:bold;text-decoration:none;padding:0;}.thumbnails-g .syndicatedItem .sponsored{color:#9C9A9C;font-size:9px;font-weight:normal;text-decoration:none;}.thumbnails-g .syndicatedItem .sponsored-url{color:green;font-size:9px;font-weight:bold;text-decoration:underline;}.thumbnails-g .syndicatedItem .video-category{color:black;font-size:10px;font-weight:normal;text-decoration:none;}.thumbnails-g .syndicatedItem .video-duration-detail{color:black;font-size:10px;font-weight:normal;text-decoration:none;}.thumbnails-g .syndicatedItem .video-external-data{color:black;font-size:10px;font-weight:normal;text-decoration:none;}.thumbnails-g .syndicatedItem .video-published-date{color:black;font-size:10px;font-weight:normal;text-decoration:none;display:inherit;}.thumbnails-g .syndicatedItem .video-rating{color:black;font-size:10px;font-weight:normal;text-decoration:none;}.thumbnails-g .syndicatedItem .video-uploader{color:black;font-size:10px;font-weight:normal;text-decoration:none;}.thumbnails-g .syndicatedItem .video-views{color:black;font-size:10px;font-weight:normal;text-decoration:none;}.thumbnails-g .syndicatedItem .branding{color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;}.thumbnails-g .videoCube.syndicatedItem .thumbBlock .branding{text-align:left;background-color:transparent;display:none;left:0px;color:black;font-size:10px;font-weight:normal;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;}.thumbnails-g .videoCube.syndicatedItem .thumbBlock .static-text{text-align:left;background-color:black;display:none;color:white;font-size:10px;font-weight:normal;text-decoration:none;font-family:Arial, Helvetica, sans-serif;}.thumbnails-g .videoCube.thumbnail_start .thumbBlock_holder{width:40%;_width:40%;}.thumbnails-g .trc_rbox_header_icon_img{margin:0px;height:18px;}.thumbnails-g .video-icon-img{margin:0px;height:18px;}.thumbnails-g .video-label-box.trc-pre-label{height:0px;}.thumbnails-g .syndicatedItem .video-label-box.trc-pre-label{height:0px;}.thumbnails-g .videoCube.thumbnail_start .trc-pre-label{width:60%;_width:60%;}.thumbnails-g .videoCube.thumbnail_start.trc-split-label .trc-main-label{width:30%;_width:30%;}.thumbnails-g .videoCube.thumbnail_start.trc-split-label .trc-pre-label{width:30%;_width:30%;}.thumbnails-g .videoCube .video-label-box.trc-pre-label{margin:0px 0px 0px 0px;}.thumbnails-g .branding{color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;}.thumbnails-g .branding .logoDiv a span{color:inherit;font-size:inherit;}.thumbnails-g .branding div.logoDiv{font-family:inherit;}.thumbnails-g .videoCube .thumbBlock .static-text{font-weight:normal;font-family:Arial, Helvetica, sans-serif;text-decoration:none;font-size:11px;background-color:#a30202;display:block;color:#ffffff;text-align:left;}.thumbnails-g .tbl-cta-style .cta-button{font-family:Helvetica, Arial, sans-serif;background-color:transparent;border-color:#999990;color:#333333;}.thumbnails-g .tbl-cta-style .cta-button:hover{color:inherit;border-color:#999990;}.thumbnails-g .videoCube .story-widget.story-widget-text-under .tbl-text-under-title-background{background-color:#EBEBEB;}.thumbnails-g .videoCube .story-widget.story-widget-text-under .tbl-ui-line{background-color:#333333;}.thumbnails-g .tbl-recommendation-reel .tbl-text-under-branding-background{background-color:#EBEBEB;}.thumbnails-g .tbl-recommendation-reel .tbl-text-under-title-background{background-color:#EBEBEB;}.thumbnails-g .tbl-recommendation-reel .tbl-ui-line{background-color:#333333;}.thumbnails-g .tbl-reco-reel-slider{z-index:99999;margin:initial;top:50%;}.thumbnails-g .tbl-vignette-background-screen{background-color:#fff;opacity:0.8;filter:alpha(opacity=80);}.thumbnails-g .tbl-vignette-attribution{color:#6B6666;font-size:15px;}.thumbnails-g vignette{xButtonColor:#fff;backgroundColor:#fff;backgroundOpacity:0.8;xButtonBGColor:#000;}.thumbnails-g .tbl-vignette-close-btn-wrp{height:15;background:#000;}.thumbnails-g recommendationReel{min-adx-line-color:#2abfd5;min-adx-progress-color:#FFF;}.thumbs-feed-01 .video-title{font-family:Arial, Helvetica, sans-serif;font-size:20.0px;line-height:27.0px;font-weight:bold;max-height:81.0px;*height:81.0px;color:#000000;text-decoration:none;}.thumbs-feed-01 .video-description{font-family:Arial, Helvetica, sans-serif;font-size:16.0px;line-height:22.0px;font-weight:normal;max-height:44.0px;*height:44.0px;color:black;text-decoration:none;}.thumbs-feed-01 .trc_rbox_div{width:auto;_width:99%;height:410px;border-width:0;padding:0;}.thumbs-feed-01 .videoCube .video-duration{left:36px;display:none;}.thumbs-feed-01 .video-label,.thumbs-feed-01 .sponsored,.thumbs-feed-01 .sponsored-url{font-family:Arial, Helvetica, sans-serif;}.thumbs-feed-01 .trc_rbox_header{font-family:Arial, Helvetica, sans-serif;font-size:100%;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 2px 0px;line-height:1.2em;display:none;margin:0px 0px 0px 0px;position:relative;background-color:transparent;box-sizing:initial;height:auto;width:auto;_width:auto;}.thumbs-feed-01 .sponsored-url{font-size:9px;font-weight:bold;text-decoration:underline;color:green;}.thumbs-feed-01 .sponsored{font-size:9px;font-weight:normal;text-decoration:none;color:#9C9A9C;}.thumbs-feed-01 .video-category{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.thumbs-feed-01 .video-duration-detail{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.thumbs-feed-01 .video-rating{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.thumbs-feed-01 .video-uploader{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.thumbs-feed-01 .video-views{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.thumbs-feed-01 .video-published-date{font-size:10px;font-weight:normal;text-decoration:none;color:black;display:inherit;}.thumbs-feed-01 .sponsored-default .video-title{max-height:2.58em;*height:2.58em;}.thumbs-feed-01 .sponsored-default .video-description{max-height:2.2em;*height:2.2em;}.thumbs-feed-01 .videoCube{width:auto;_width:auto;background-color:transparent;border-width:0px 0px 0px 0px;border-color:#E4E4E4;padding:0px 0px 0px 0px;height:auto;margin-left:0px;margin-top:0px;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-style:SOLID;}.thumbs-feed-01 div.videoCube:hover,.thumbs-feed-01  div.videoCube_hover{background-color:transparent;}.thumbs-feed-01 .sponsored-default{background-color:#F7F6C6;}.thumbs-feed-01 div.sponsored-default:hover,.thumbs-feed-01  div.sponsored-default.videoCube_hover{background-color:inherit;}.thumbs-feed-01 .videoCube .thumbnail-overlay{background-image:null;background-position:5% 5%;}.thumbs-feed-01 .videoCube:hover .thumbnail-overlay,.thumbs-feed-01  .videoCube_hover .thumbnail-overlay{background-image:null;}.thumbs-feed-01 .trc_rbox_border_elm{border-color:darkgray;}.thumbs-feed-01 .videoCube .thumbBlock{border-width:0px;border-color:darkgray;}.thumbs-feed-01 div.videoCube:hover .thumbBlock{border-color:inherit;}.thumbs-feed-01 .pager_enabled{color:#0056b3;}.thumbs-feed-01 .trc_pager_counter{color:#000000;}.thumbs-feed-01 .pager_disabled{color:#7d898f;}.thumbs-feed-01 .trc_pager_prev:hover,.thumbs-feed-01  .trc_pager_next:hover{color:#6497ED;}.thumbs-feed-01 .trc_pager_selected{color:#0056b3;}.thumbs-feed-01 .trc_pager_unselected{color:#7d898f;}.thumbs-feed-01 div.trc_pager_pages div:hover{color:#6497ED;}.thumbs-feed-01 .trc_lightbox_overlay{background-color:#000000;opacity:0.70;filter:alpha(opacity=70);}.thumbs-feed-01 .video-label-box{text-align:left;height:125px;margin:5px 0px 0px 0px;}.thumbs-feed-01 .trc_sponsored_overlay{background-color:black;}.thumbs-feed-01 .thumbnail-emblem{background-position:5% 5%;width:35;_width:35;height:35;}.thumbs-feed-01 .videoCube .sponsored{margin-top:-7px;}.thumbs-feed-01 {width:300px;_width:300px;border-width:0px 0px 0px 0px;border-style:solid solid solid solid;border-color:#DFDFDF;padding:0px 0px 0px 0px;border-radius:0;-moz-border-radius:0;-webkit-border-radius:0;box-shadow:none;}.thumbs-feed-01 .videoCube.vertical{border-style:solid none none none;}.thumbs-feed-01 .videoCube.horizontal{border-style:none;}.thumbs-feed-01 .trc_pager_prev,.thumbs-feed-01 .trc_pager_next{font-size:12px;font-weight:normal;text-decoration:none;}.thumbs-feed-01 .trc_pager_pages div{font-size:12px;font-weight:normal;text-decoration:none;}.thumbs-feed-01 .video-external-data{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.thumbs-feed-01 .trc_pager div{font-family:serif;}.thumbs-feed-01 .playerCube .thumbnail-overlay{background-image:null;background-position:5% 5%;}.thumbs-feed-01 .playerCube:hover .thumbnail-overlay,.thumbs-feed-01  .playerCube_hover .thumbnail-overlay{background-image:null;}.thumbs-feed-01 .playerCube .videoCube{background-color:transparent;border-color:#D6D5D3;border-width:1px;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;margin-left:0px;margin-top:0px;padding:3px;}.thumbs-feed-01 .playerCube .videoCube.horizontal{border-style:none none none none;}.thumbs-feed-01 .playerCube .videoCube .video-label-box{margin-left:81px;margin-right:0px;}.thumbs-feed-01 .playerCube .video-duration-detail{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.thumbs-feed-01 .playerCube .video-external-data{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.thumbs-feed-01 .playerCube .video-label-box{text-align:left;}.thumbs-feed-01 .playerCube .video-published-date{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.thumbs-feed-01 .playerCube .video-category{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.thumbs-feed-01 .playerCube .video-description{font-family:Arial, Helvetica, sans-serif;font-size:10px;line-height:11px;font-weight:normal;text-decoration:none;max-height:2.2em;*height:2.2em;color:black;}.thumbs-feed-01 .playerCube .videoCube .video-duration{display:block;left:36px;}.thumbs-feed-01 .playerCube .videoCube .thumbBlock{border-width:0px;border-color:darkgray;}.thumbs-feed-01 .playerCube .video-rating{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.thumbs-feed-01 .playerCube .video-uploader{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.thumbs-feed-01 .playerCube .video-views{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.thumbs-feed-01 .playerCube .video-title{font-family:Arial, Helvetica, sans-serif;text-decoration:none;font-size:14px;line-height:17.5px;font-weight:bold;max-height:2.58em;*height:2.58em;color:black;}.thumbs-feed-01 .playerCube div.videoCube:hover,.thumbs-feed-01  div.videoCube_hover{background-color:transparent;}.thumbs-feed-01 .whatsThisSyndicated{font-family:Arial, Verdana, sans-serif;font-size:9px;font-weight:normal;color:black;text-decoration:none;padding:0;}.thumbs-feed-01 div.syndicatedItem:hover,.thumbs-feed-01  div.syndicatedItem.videoCube_hover{background-color:transparent;}.thumbs-feed-01 div.syndicatedItem:hover .thumbBlock{border-color:inherit;}.thumbs-feed-01 .videoCube.syndicatedItem{background-color:transparent;border-color:#E4E4E4;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-width:0px 0px 0px 0px;border-style:SOLID;}.thumbs-feed-01 .videoCube.syndicatedItem.horizontal{border-style:none;}.thumbs-feed-01 .videoCube.syndicatedItem .thumbBlock{border-color:darkgray;border-width:0px;}.thumbs-feed-01 .videoCube.syndicatedItem .thumbnail-overlay{background-image:null;background-position:5% 5%;}.thumbs-feed-01 .videoCube.syndicatedItem.vertical{border-style:solid none none none;}.thumbs-feed-01 .videoCube.syndicatedItem .video-duration{display:none;left:36px;}.thumbs-feed-01 .syndicatedItem{background-color:transparent;}.thumbs-feed-01 .syndicatedItem .video-description{max-height:44.0px;*height:44.0px;color:#000000;font-family:Arial, Helvetica, sans-serif;font-size:16.0px;font-weight:normal;line-height:22.0px;text-decoration:none;}.thumbs-feed-01 .syndicatedItem .video-title{max-height:54.0px;*height:54.0px;color:#000000;font-family:Arial, Helvetica, sans-serif;font-size:20.0px;line-height:27.0px;font-weight:bold;text-decoration:none;padding:0;}.thumbs-feed-01 .syndicatedItem .sponsored{color:#9C9A9C;font-size:9px;font-weight:normal;text-decoration:none;}.thumbs-feed-01 .syndicatedItem .sponsored-url{color:green;font-size:9px;font-weight:bold;text-decoration:underline;}.thumbs-feed-01 .syndicatedItem .video-category{color:black;font-size:10px;font-weight:normal;text-decoration:none;}.thumbs-feed-01 .syndicatedItem .video-duration-detail{color:black;font-size:10px;font-weight:normal;text-decoration:none;}.thumbs-feed-01 .syndicatedItem .video-external-data{color:black;font-size:10px;font-weight:normal;text-decoration:none;}.thumbs-feed-01 .syndicatedItem .video-published-date{color:black;font-size:10px;font-weight:normal;text-decoration:none;display:inherit;}.thumbs-feed-01 .syndicatedItem .video-rating{color:black;font-size:10px;font-weight:normal;text-decoration:none;}.thumbs-feed-01 .syndicatedItem .video-uploader{color:black;font-size:10px;font-weight:normal;text-decoration:none;}.thumbs-feed-01 .syndicatedItem .video-views{color:black;font-size:10px;font-weight:normal;text-decoration:none;}.thumbs-feed-01 .syndicatedItem .branding{color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;line-height:27.0px;}.thumbs-feed-01 .videoCube.syndicatedItem .thumbBlock .branding{text-align:left;background-color:transparent;display:none;left:0px;color:black;font-size:10px;font-weight:normal;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;}.thumbs-feed-01 .videoCube.syndicatedItem .thumbBlock .static-text{text-align:left;background-color:black;display:none;color:white;font-size:10px;font-weight:normal;text-decoration:none;font-family:Arial, Helvetica, sans-serif;}.thumbs-feed-01 .videoCube.thumbnail_start .thumbBlock_holder{width:40%;_width:40%;}.thumbs-feed-01 .trc_rbox_header_icon_img{margin:0px;height:18px;}.thumbs-feed-01 .video-icon-img{margin:0px;height:18px;}.thumbs-feed-01 .video-label-box.trc-pre-label{height:0px;}.thumbs-feed-01 .syndicatedItem .video-label-box.trc-pre-label{height:0px;}.thumbs-feed-01 .videoCube.thumbnail_start .trc-pre-label{width:60%;_width:60%;}.thumbs-feed-01 .videoCube.thumbnail_start.trc-split-label .trc-main-label{width:30%;_width:30%;}.thumbs-feed-01 .videoCube.thumbnail_start.trc-split-label .trc-pre-label{width:30%;_width:30%;}.thumbs-feed-01 .videoCube .video-label-box.trc-pre-label{margin:0px 0px 0px 0px;}.thumbs-feed-01 .branding{color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;line-height:27.0px;}.thumbs-feed-01 .branding .logoDiv a span{color:inherit;font-size:inherit;}.thumbs-feed-01 .branding div.logoDiv{font-family:inherit;}.thumbs-feed-01 .videoCube .thumbBlock .static-text{font-weight:normal;font-family:Arial, Helvetica, sans-serif;text-decoration:none;font-size:11px;background-color:#a30202;display:block;color:#ffffff;text-align:left;}.thumbs-feed-01 .syndicatedItem .video-label-box{height:125px;margin:5px 0px 0px 0px;}.thumbs-feed-01 .logoDiv a span{font-size:11.0px;color:#999999;display:inline;font-weight:normal;}.thumbs-feed-01 .tbl-cta-style .cta-button{font-family:Helvetica, Arial, sans-serif;background-color:transparent;border-color:#999990;color:#333333;}.thumbs-feed-01 .tbl-cta-style .cta-button:hover{color:inherit;border-color:#999990;}.thumbs-feed-01 .videoCube:hover .video-label-box .video-description{text-decoration:underline;}.thumbs-feed-01 .videoCube .video-label-box .video-title{margin:0 0 0 0;}.thumbs-feed-01 .video-label-box .branding{display:block;}.thumbs-feed-01 .trc_rbox_header .trc_header_ext{position:relative;top:auto;right:auto;}.thumbs-feed-01 .logoDiv a{font-size:100%;}.thumbs-feed-01 .videoCube a{padding:0 0 0 0;}.thumbs-feed-01 .trc_rbox_header .logoDiv{line-height:normal;}.thumbs-feed-01 .trc_rbox_header_span .trc_header_right_column{height:auto;}.thumbs-feed-01 .trc_header_left_column{height:auto;}.thumbs-feed-01 .trc_header_right_part{margin:0px 0 0 0;}.thumbs-feed-01 .videoCube .story-widget.story-widget-text-under .tbl-text-under-title-background{background-color:#EBEBEB;}.thumbs-feed-01 .videoCube .story-widget.story-widget-text-under .tbl-ui-line{background-color:#333333;}.thumbs-feed-01 .tbl-recommendation-reel .tbl-text-under-branding-background{background-color:#EBEBEB;}.thumbs-feed-01 .tbl-recommendation-reel .tbl-text-under-title-background{background-color:#EBEBEB;}.thumbs-feed-01 .tbl-recommendation-reel .tbl-ui-line{background-color:#333333;}.thumbs-feed-01 .tbl-reco-reel-slider{z-index:99999;margin:initial;top:50%;}.thumbs-feed-01 .tbl-vignette-background-screen{background-color:#fff;opacity:0.8;filter:alpha(opacity=80);}.thumbs-feed-01 .tbl-vignette-attribution{color:#6B6666;font-size:15px;}.thumbs-feed-01 vignette{xButtonColor:#fff;backgroundColor:#fff;backgroundOpacity:0.8;xButtonBGColor:#000;}.thumbs-feed-01 .tbl-vignette-close-btn-wrp{height:15;background:#000;}.thumbs-feed-01 recommendationReel{min-adx-line-color:#2abfd5;min-adx-progress-color:#FFF;}.organic-thumbs-feed-01 .video-title{font-family:Arial, Helvetica, sans-serif;font-size:20.0px;line-height:27.0px;font-weight:bold;max-height:54.0px;*height:54.0px;color:#000000;text-decoration:none;}.organic-thumbs-feed-01 .video-description{font-family:Arial, Helvetica, sans-serif;font-size:16.0px;line-height:22.0px;font-weight:normal;max-height:44.0px;*height:44.0px;color:black;text-decoration:none;}.organic-thumbs-feed-01 .trc_rbox_div{width:auto;_width:99%;height:410px;border-width:0;padding:0;}.organic-thumbs-feed-01 .videoCube .video-duration{left:36px;display:none;}.organic-thumbs-feed-01 .video-label,.organic-thumbs-feed-01 .sponsored,.organic-thumbs-feed-01 .sponsored-url{font-family:Arial, Helvetica, sans-serif;}.organic-thumbs-feed-01 .trc_rbox_header{font-family:Arial, Helvetica, sans-serif;font-size:100%;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 6px 0px;line-height:1.2em;display:none;margin:0px 0px 0px 0px;position:relative;background-color:transparent;box-sizing:initial;height:auto;width:auto;_width:auto;}.organic-thumbs-feed-01 .sponsored-url{font-size:9px;font-weight:bold;text-decoration:underline;color:green;}.organic-thumbs-feed-01 .sponsored{font-size:9px;font-weight:normal;text-decoration:none;color:#9C9A9C;}.organic-thumbs-feed-01 .video-category{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.organic-thumbs-feed-01 .video-duration-detail{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.organic-thumbs-feed-01 .video-rating{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.organic-thumbs-feed-01 .video-uploader{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.organic-thumbs-feed-01 .video-views{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.organic-thumbs-feed-01 .video-published-date{font-size:10px;font-weight:normal;text-decoration:none;color:black;display:inherit;}.organic-thumbs-feed-01 .sponsored-default .video-title{max-height:2.58em;*height:2.58em;}.organic-thumbs-feed-01 .sponsored-default .video-description{max-height:2.2em;*height:2.2em;}.organic-thumbs-feed-01 .videoCube{width:auto;_width:auto;background-color:transparent;border-width:0px 0px 0px 0px;border-color:#E4E4E4;padding:0px 0px 0px 0px;height:auto;margin-left:0px;margin-top:0px;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-style:SOLID;}.organic-thumbs-feed-01 div.videoCube:hover,.organic-thumbs-feed-01  div.videoCube_hover{background-color:transparent;}.organic-thumbs-feed-01 .sponsored-default{background-color:#F7F6C6;}.organic-thumbs-feed-01 div.sponsored-default:hover,.organic-thumbs-feed-01  div.sponsored-default.videoCube_hover{background-color:inherit;}.organic-thumbs-feed-01 .videoCube .thumbnail-overlay{background-image:null;background-position:5% 5%;}.organic-thumbs-feed-01 .videoCube:hover .thumbnail-overlay,.organic-thumbs-feed-01  .videoCube_hover .thumbnail-overlay{background-image:null;}.organic-thumbs-feed-01 .trc_rbox_border_elm{border-color:darkgray;}.organic-thumbs-feed-01 .videoCube .thumbBlock{border-width:0px;border-color:darkgray;}.organic-thumbs-feed-01 div.videoCube:hover .thumbBlock{border-color:inherit;}.organic-thumbs-feed-01 .pager_enabled{color:#0056b3;}.organic-thumbs-feed-01 .trc_pager_counter{color:#000000;}.organic-thumbs-feed-01 .pager_disabled{color:#7d898f;}.organic-thumbs-feed-01 .trc_pager_prev:hover,.organic-thumbs-feed-01  .trc_pager_next:hover{color:#6497ED;}.organic-thumbs-feed-01 .trc_pager_selected{color:#0056b3;}.organic-thumbs-feed-01 .trc_pager_unselected{color:#7d898f;}.organic-thumbs-feed-01 div.trc_pager_pages div:hover{color:#6497ED;}.organic-thumbs-feed-01 .trc_lightbox_overlay{background-color:#000000;opacity:0.70;filter:alpha(opacity=70);}.organic-thumbs-feed-01 .video-label-box{text-align:left;height:125px;margin:5px 0px 0px 0px;}.organic-thumbs-feed-01 .trc_sponsored_overlay{background-color:black;}.organic-thumbs-feed-01 .thumbnail-emblem{background-position:5% 5%;width:35;_width:35;height:35;}.organic-thumbs-feed-01 .videoCube .sponsored{margin-top:-7px;}.organic-thumbs-feed-01 {width:300px;_width:300px;border-width:0px 0px 0px 0px;border-style:solid solid solid solid;border-color:#DFDFDF;padding:0px 0px 0px 0px;border-radius:0;-moz-border-radius:0;-webkit-border-radius:0;box-shadow:none;}.organic-thumbs-feed-01 .videoCube.vertical{border-style:solid none none none;}.organic-thumbs-feed-01 .videoCube.horizontal{border-style:none;}.organic-thumbs-feed-01 .trc_pager_prev,.organic-thumbs-feed-01 .trc_pager_next{font-size:12px;font-weight:normal;text-decoration:none;}.organic-thumbs-feed-01 .trc_pager_pages div{font-size:12px;font-weight:normal;text-decoration:none;}.organic-thumbs-feed-01 .video-external-data{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.organic-thumbs-feed-01 .trc_pager div{font-family:serif;}.organic-thumbs-feed-01 .playerCube .thumbnail-overlay{background-image:null;background-position:5% 5%;}.organic-thumbs-feed-01 .playerCube:hover .thumbnail-overlay,.organic-thumbs-feed-01  .playerCube_hover .thumbnail-overlay{background-image:null;}.organic-thumbs-feed-01 .playerCube .videoCube{background-color:transparent;border-color:#D6D5D3;border-width:1px;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;margin-left:0px;margin-top:0px;padding:3px;}.organic-thumbs-feed-01 .playerCube .videoCube.horizontal{border-style:none none none none;}.organic-thumbs-feed-01 .playerCube .videoCube .video-label-box{margin-left:81px;margin-right:0px;}.organic-thumbs-feed-01 .playerCube .video-duration-detail{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.organic-thumbs-feed-01 .playerCube .video-external-data{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.organic-thumbs-feed-01 .playerCube .video-label-box{text-align:left;}.organic-thumbs-feed-01 .playerCube .video-published-date{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.organic-thumbs-feed-01 .playerCube .video-category{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.organic-thumbs-feed-01 .playerCube .video-description{font-family:Arial, Helvetica, sans-serif;font-size:10px;line-height:11px;font-weight:normal;text-decoration:none;max-height:2.2em;*height:2.2em;color:black;}.organic-thumbs-feed-01 .playerCube .videoCube .video-duration{display:block;left:36px;}.organic-thumbs-feed-01 .playerCube .videoCube .thumbBlock{border-width:0px;border-color:darkgray;}.organic-thumbs-feed-01 .playerCube .video-rating{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.organic-thumbs-feed-01 .playerCube .video-uploader{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.organic-thumbs-feed-01 .playerCube .video-views{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.organic-thumbs-feed-01 .playerCube .video-title{font-family:Arial, Helvetica, sans-serif;text-decoration:none;font-size:14px;line-height:17.5px;font-weight:bold;max-height:2.58em;*height:2.58em;color:black;}.organic-thumbs-feed-01 .playerCube div.videoCube:hover,.organic-thumbs-feed-01  div.videoCube_hover{background-color:transparent;}.organic-thumbs-feed-01 .whatsThisSyndicated{font-family:Arial, Verdana, sans-serif;font-size:9px;font-weight:normal;color:black;text-decoration:none;padding:0;}.organic-thumbs-feed-01 div.syndicatedItem:hover,.organic-thumbs-feed-01  div.syndicatedItem.videoCube_hover{background-color:transparent;}.organic-thumbs-feed-01 div.syndicatedItem:hover .thumbBlock{border-color:inherit;}.organic-thumbs-feed-01 .videoCube.syndicatedItem{background-color:transparent;border-color:#E4E4E4;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-width:0px 0px 0px 0px;border-style:SOLID;}.organic-thumbs-feed-01 .videoCube.syndicatedItem.horizontal{border-style:none;}.organic-thumbs-feed-01 .videoCube.syndicatedItem .thumbBlock{border-color:darkgray;border-width:0px;}.organic-thumbs-feed-01 .videoCube.syndicatedItem .thumbnail-overlay{background-image:null;background-position:5% 5%;}.organic-thumbs-feed-01 .videoCube.syndicatedItem.vertical{border-style:solid none none none;}.organic-thumbs-feed-01 .videoCube.syndicatedItem .video-duration{display:none;left:36px;}.organic-thumbs-feed-01 .syndicatedItem{background-color:transparent;}.organic-thumbs-feed-01 .syndicatedItem .video-description{max-height:44.0px;*height:44.0px;color:black;font-family:Arial, Helvetica, sans-serif;font-size:16.0px;font-weight:normal;line-height:22.0px;text-decoration:none;}.organic-thumbs-feed-01 .syndicatedItem .video-title{max-height:54.0px;*height:54.0px;color:#000000;font-family:Arial, Helvetica, sans-serif;font-size:20.0px;line-height:27.0px;font-weight:bold;text-decoration:none;padding:0;}.organic-thumbs-feed-01 .syndicatedItem .sponsored{color:#9C9A9C;font-size:9px;font-weight:normal;text-decoration:none;}.organic-thumbs-feed-01 .syndicatedItem .sponsored-url{color:green;font-size:9px;font-weight:bold;text-decoration:underline;}.organic-thumbs-feed-01 .syndicatedItem .video-category{color:black;font-size:10px;font-weight:normal;text-decoration:none;}.organic-thumbs-feed-01 .syndicatedItem .video-duration-detail{color:black;font-size:10px;font-weight:normal;text-decoration:none;}.organic-thumbs-feed-01 .syndicatedItem .video-external-data{color:black;font-size:10px;font-weight:normal;text-decoration:none;}.organic-thumbs-feed-01 .syndicatedItem .video-published-date{color:black;font-size:10px;font-weight:normal;text-decoration:none;display:inherit;}.organic-thumbs-feed-01 .syndicatedItem .video-rating{color:black;font-size:10px;font-weight:normal;text-decoration:none;}.organic-thumbs-feed-01 .syndicatedItem .video-uploader{color:black;font-size:10px;font-weight:normal;text-decoration:none;}.organic-thumbs-feed-01 .syndicatedItem .video-views{color:black;font-size:10px;font-weight:normal;text-decoration:none;}.organic-thumbs-feed-01 .syndicatedItem .branding{color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;line-height:27.0px;}.organic-thumbs-feed-01 .videoCube.syndicatedItem .thumbBlock .branding{text-align:left;background-color:transparent;display:none;left:0px;color:black;font-size:10px;font-weight:normal;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;}.organic-thumbs-feed-01 .videoCube.syndicatedItem .thumbBlock .static-text{text-align:left;background-color:black;display:none;color:white;font-size:10px;font-weight:normal;text-decoration:none;font-family:Arial, Helvetica, sans-serif;}.organic-thumbs-feed-01 .videoCube.thumbnail_start .thumbBlock_holder{width:40%;_width:40%;}.organic-thumbs-feed-01 .trc_rbox_header_icon_img{margin:0px;height:18px;}.organic-thumbs-feed-01 .video-icon-img{margin:0px;height:18px;}.organic-thumbs-feed-01 .video-label-box.trc-pre-label{height:0px;}.organic-thumbs-feed-01 .syndicatedItem .video-label-box.trc-pre-label{height:0px;}.organic-thumbs-feed-01 .videoCube.thumbnail_start .trc-pre-label{width:60%;_width:60%;}.organic-thumbs-feed-01 .videoCube.thumbnail_start.trc-split-label .trc-main-label{width:30%;_width:30%;}.organic-thumbs-feed-01 .videoCube.thumbnail_start.trc-split-label .trc-pre-label{width:30%;_width:30%;}.organic-thumbs-feed-01 .videoCube .video-label-box.trc-pre-label{margin:0px 0px 0px 0px;}.organic-thumbs-feed-01 .branding{color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;line-height:27.0px;}.organic-thumbs-feed-01 .branding .logoDiv a span{color:inherit;font-size:inherit;}.organic-thumbs-feed-01 .branding div.logoDiv{font-family:inherit;}.organic-thumbs-feed-01 .videoCube .thumbBlock .static-text{font-weight:normal;font-family:Arial, Helvetica, sans-serif;text-decoration:none;font-size:11px;background-color:#a30202;display:block;color:#ffffff;text-align:left;}.organic-thumbs-feed-01 .syndicatedItem .video-label-box{height:125px;margin:5px 0px 0px 0px;}.organic-thumbs-feed-01 .logoDiv a span{font-size:11px;color:#000000;display:inline;font-weight:normal;}.organic-thumbs-feed-01 .tbl-cta-style .cta-button{font-family:Helvetica, Arial, sans-serif;background-color:transparent;border-color:#999990;color:#333333;}.organic-thumbs-feed-01 .tbl-cta-style .cta-button:hover{color:inherit;border-color:#999990;}.organic-thumbs-feed-01 .videoCube:hover .video-label-box .video-description{text-decoration:underline;}.organic-thumbs-feed-01 .videoCube .video-label-box .video-title{margin:0 0 0 0;}.organic-thumbs-feed-01 .video-label-box .branding{display:block;}.organic-thumbs-feed-01 .trc_rbox_header .trc_header_ext{position:relative;top:auto;right:auto;}.organic-thumbs-feed-01 .logoDiv a{font-size:100%;}.organic-thumbs-feed-01 .videoCube a{padding:0 0 0 0;}.organic-thumbs-feed-01 .trc_rbox_header .logoDiv{line-height:normal;}.organic-thumbs-feed-01 .trc_rbox_header_span .trc_header_right_column{height:auto;}.organic-thumbs-feed-01 .trc_header_left_column{height:auto;}.organic-thumbs-feed-01 .trc_header_right_part{margin:0px 0 0 0;}.organic-thumbs-feed-01 .videoCube .story-widget.story-widget-text-under .tbl-text-under-title-background{background-color:#EBEBEB;}.organic-thumbs-feed-01 .videoCube .story-widget.story-widget-text-under .tbl-ui-line{background-color:#333333;}.organic-thumbs-feed-01 .tbl-recommendation-reel .tbl-text-under-branding-background{background-color:#EBEBEB;}.organic-thumbs-feed-01 .tbl-recommendation-reel .tbl-text-under-title-background{background-color:#EBEBEB;}.organic-thumbs-feed-01 .tbl-recommendation-reel .tbl-ui-line{background-color:#333333;}.organic-thumbs-feed-01 .tbl-reco-reel-slider{z-index:99999;margin:initial;top:50%;}.organic-thumbs-feed-01 .tbl-vignette-background-screen{background-color:#fff;opacity:0.8;filter:alpha(opacity=80);}.organic-thumbs-feed-01 .tbl-vignette-attribution{color:#6B6666;font-size:15px;}.organic-thumbs-feed-01 vignette{xButtonColor:#fff;backgroundColor:#fff;backgroundOpacity:0.8;xButtonBGColor:#000;}.organic-thumbs-feed-01 .tbl-vignette-close-btn-wrp{height:15;background:#000;}.organic-thumbs-feed-01 recommendationReel{min-adx-line-color:#2abfd5;min-adx-progress-color:#FFF;}.thumbs-feed-01-a .video-title{font-family:Arial, Helvetica, sans-serif;font-size:18.0px;line-height:24.0px;font-weight:bold;max-height:72.0px;*height:72.0px;color:#000000;text-decoration:none;}.thumbs-feed-01-a .video-description{font-family:Arial, Helvetica, sans-serif;font-size:16.0px;line-height:22.0px;font-weight:normal;max-height:44.0px;*height:44.0px;color:black;text-decoration:none;}.thumbs-feed-01-a .trc_rbox_div{width:auto;_width:99%;height:410px;border-width:0;padding:0;}.thumbs-feed-01-a .videoCube .video-duration{left:36px;display:none;}.thumbs-feed-01-a .video-label,.thumbs-feed-01-a .sponsored,.thumbs-feed-01-a .sponsored-url{font-family:Arial, Helvetica, sans-serif;}.thumbs-feed-01-a .trc_rbox_header{font-family:Arial, Helvetica, sans-serif;font-size:100%;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:5px 0px 5px 5px;line-height:1.2em;display:none;margin:0px 0px 0px 0px;position:relative;background-color:transparent;box-sizing:initial;height:auto;width:auto;_width:auto;}.thumbs-feed-01-a .sponsored-url{font-size:9px;font-weight:bold;text-decoration:underline;color:green;}.thumbs-feed-01-a .sponsored{font-size:9px;font-weight:normal;text-decoration:none;color:#9C9A9C;}.thumbs-feed-01-a .video-category{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.thumbs-feed-01-a .video-duration-detail{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.thumbs-feed-01-a .video-rating{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.thumbs-feed-01-a .video-uploader{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.thumbs-feed-01-a .video-views{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.thumbs-feed-01-a .video-published-date{font-size:10px;font-weight:normal;text-decoration:none;color:black;display:inherit;}.thumbs-feed-01-a .sponsored-default .video-title{max-height:2.58em;*height:2.58em;}.thumbs-feed-01-a .sponsored-default .video-description{max-height:2.2em;*height:2.2em;}.thumbs-feed-01-a .videoCube{width:auto;_width:auto;background-color:transparent;border-width:0px 0px 0px 0px;border-color:#E4E4E4;padding:0px 0px 0px 0px;height:auto;margin-left:0px;margin-top:0px;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-style:SOLID;}.thumbs-feed-01-a div.videoCube:hover,.thumbs-feed-01-a  div.videoCube_hover{background-color:transparent;}.thumbs-feed-01-a .sponsored-default{background-color:#F7F6C6;}.thumbs-feed-01-a div.sponsored-default:hover,.thumbs-feed-01-a  div.sponsored-default.videoCube_hover{background-color:inherit;}.thumbs-feed-01-a .videoCube .thumbnail-overlay{background-image:null;background-position:5% 5%;}.thumbs-feed-01-a .videoCube:hover .thumbnail-overlay,.thumbs-feed-01-a  .videoCube_hover .thumbnail-overlay{background-image:null;}.thumbs-feed-01-a .trc_rbox_border_elm{border-color:darkgray;}.thumbs-feed-01-a .videoCube .thumbBlock{border-width:0px;border-color:darkgray;}.thumbs-feed-01-a div.videoCube:hover .thumbBlock{border-color:inherit;}.thumbs-feed-01-a .pager_enabled{color:#0056b3;}.thumbs-feed-01-a .trc_pager_counter{color:#000000;}.thumbs-feed-01-a .pager_disabled{color:#7d898f;}.thumbs-feed-01-a .trc_pager_prev:hover,.thumbs-feed-01-a  .trc_pager_next:hover{color:#6497ED;}.thumbs-feed-01-a .trc_pager_selected{color:#0056b3;}.thumbs-feed-01-a .trc_pager_unselected{color:#7d898f;}.thumbs-feed-01-a div.trc_pager_pages div:hover{color:#6497ED;}.thumbs-feed-01-a .trc_lightbox_overlay{background-color:#000000;opacity:0.70;filter:alpha(opacity=70);}.thumbs-feed-01-a .video-label-box{text-align:left;height:116px;margin:5px 0px 0px 0px;}.thumbs-feed-01-a .trc_sponsored_overlay{background-color:black;}.thumbs-feed-01-a .thumbnail-emblem{background-position:5% 5%;width:35;_width:35;height:35;}.thumbs-feed-01-a .videoCube .sponsored{margin-top:-7px;}.thumbs-feed-01-a {width:300px;_width:300px;border-width:0px 0px 0px 0px;border-style:solid solid solid solid;border-color:#DFDFDF;padding:0px 0px 0px 0px;border-radius:0;-moz-border-radius:0;-webkit-border-radius:0;box-shadow:none;}.thumbs-feed-01-a .videoCube.vertical{border-style:solid none none none;}.thumbs-feed-01-a .videoCube.horizontal{border-style:none;}.thumbs-feed-01-a .trc_pager_prev,.thumbs-feed-01-a .trc_pager_next{font-size:12px;font-weight:normal;text-decoration:none;}.thumbs-feed-01-a .trc_pager_pages div{font-size:12px;font-weight:normal;text-decoration:none;}.thumbs-feed-01-a .video-external-data{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.thumbs-feed-01-a .trc_pager div{font-family:serif;}.thumbs-feed-01-a .playerCube .thumbnail-overlay{background-image:null;background-position:5% 5%;}.thumbs-feed-01-a .playerCube:hover .thumbnail-overlay,.thumbs-feed-01-a  .playerCube_hover .thumbnail-overlay{background-image:null;}.thumbs-feed-01-a .playerCube .videoCube{background-color:transparent;border-color:#D6D5D3;border-width:1px;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;margin-left:0px;margin-top:0px;padding:3px;}.thumbs-feed-01-a .playerCube .videoCube.horizontal{border-style:none none none none;}.thumbs-feed-01-a .playerCube .videoCube .video-label-box{margin-left:81px;margin-right:0px;}.thumbs-feed-01-a .playerCube .video-duration-detail{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.thumbs-feed-01-a .playerCube .video-external-data{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.thumbs-feed-01-a .playerCube .video-label-box{text-align:left;}.thumbs-feed-01-a .playerCube .video-published-date{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.thumbs-feed-01-a .playerCube .video-category{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.thumbs-feed-01-a .playerCube .video-description{font-family:Arial, Helvetica, sans-serif;font-size:10px;line-height:11px;font-weight:normal;text-decoration:none;max-height:2.2em;*height:2.2em;color:black;}.thumbs-feed-01-a .playerCube .videoCube .video-duration{display:block;left:36px;}.thumbs-feed-01-a .playerCube .videoCube .thumbBlock{border-width:0px;border-color:darkgray;}.thumbs-feed-01-a .playerCube .video-rating{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.thumbs-feed-01-a .playerCube .video-uploader{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.thumbs-feed-01-a .playerCube .video-views{font-size:10px;font-weight:normal;text-decoration:none;color:black;}.thumbs-feed-01-a .playerCube .video-title{font-family:Arial, Helvetica, sans-serif;text-decoration:none;font-size:14px;line-height:17.5px;font-weight:bold;max-height:2.58em;*height:2.58em;color:black;}.thumbs-feed-01-a .playerCube div.videoCube:hover,.thumbs-feed-01-a  div.videoCube_hover{background-color:transparent;}.thumbs-feed-01-a .whatsThisSyndicated{font-family:Arial, Verdana, sans-serif;font-size:9px;font-weight:normal;color:black;text-decoration:none;padding:0;}.thumbs-feed-01-a div.syndicatedItem:hover,.thumbs-feed-01-a  div.syndicatedItem.videoCube_hover{background-color:transparent;}.thumbs-feed-01-a div.syndicatedItem:hover .thumbBlock{border-color:inherit;}.thumbs-feed-01-a .videoCube.syndicatedItem{background-color:transparent;border-color:#E4E4E4;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-width:0px 0px 0px 0px;border-style:SOLID;}.thumbs-feed-01-a .videoCube.syndicatedItem.horizontal{border-style:none;}.thumbs-feed-01-a .videoCube.syndicatedItem .thumbBlock{border-color:darkgray;border-width:0px;}.thumbs-feed-01-a .videoCube.syndicatedItem .thumbnail-overlay{background-image:null;background-position:5% 5%;}.thumbs-feed-01-a .videoCube.syndicatedItem.vertical{border-style:solid none none none;}.thumbs-feed-01-a .videoCube.syndicatedItem .video-duration{display:none;left:36px;}.thumbs-feed-01-a .syndicatedItem{background-color:transparent;}.thumbs-feed-01-a .syndicatedItem .video-description{max-height:44.0px;*height:44.0px;color:#000000;font-family:Arial, Helvetica, sans-serif;font-size:16.0px;font-weight:normal;line-height:22.0px;text-decoration:none;}.thumbs-feed-01-a .syndicatedItem .video-title{max-height:48.0px;*height:48.0px;color:#000000;font-family:Arial, Helvetica, sans-serif;font-size:18.0px;line-height:24.0px;font-weight:bold;text-decoration:none;padding:0;}.thumbs-feed-01-a .syndicatedItem .sponsored{color:#9C9A9C;font-size:9px;font-weight:normal;text-decoration:none;}.thumbs-feed-01-a .syndicatedItem .sponsored-url{color:green;font-size:9px;font-weight:bold;text-decoration:underline;}.thumbs-feed-01-a .syndicatedItem .video-category{color:black;font-size:10px;font-weight:normal;text-decoration:none;}.thumbs-feed-01-a .syndicatedItem .video-duration-detail{color:black;font-size:10px;font-weight:normal;text-decoration:none;}.thumbs-feed-01-a .syndicatedItem .video-external-data{color:black;font-size:10px;font-weight:normal;text-decoration:none;}.thumbs-feed-01-a .syndicatedItem .video-published-date{color:black;font-size:10px;font-weight:normal;text-decoration:none;display:inherit;}.thumbs-feed-01-a .syndicatedItem .video-rating{color:black;font-size:10px;font-weight:normal;text-decoration:none;}.thumbs-feed-01-a .syndicatedItem .video-uploader{color:black;font-size:10px;font-weight:normal;text-decoration:none;}.thumbs-feed-01-a .syndicatedItem .video-views{color:black;font-size:10px;font-weight:normal;text-decoration:none;}.thumbs-feed-01-a .syndicatedItem .branding{color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;line-height:24.0px;}.thumbs-feed-01-a .videoCube.syndicatedItem .thumbBlock .branding{text-align:left;background-color:transparent;display:none;left:0px;color:black;font-size:10px;font-weight:normal;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;}.thumbs-feed-01-a .videoCube.syndicatedItem .thumbBlock .static-text{text-align:left;background-color:black;display:none;color:white;font-size:10px;font-weight:normal;text-decoration:none;font-family:Arial, Helvetica, sans-serif;}.thumbs-feed-01-a .videoCube.thumbnail_start .thumbBlock_holder{width:40%;_width:40%;}.thumbs-feed-01-a .trc_rbox_header_icon_img{margin:0px;height:18px;}.thumbs-feed-01-a .video-icon-img{margin:0px;height:18px;}.thumbs-feed-01-a .video-label-box.trc-pre-label{height:0px;}.thumbs-feed-01-a .syndicatedItem .video-label-box.trc-pre-label{height:0px;}.thumbs-feed-01-a .videoCube.thumbnail_start .trc-pre-label{width:60%;_width:60%;}.thumbs-feed-01-a .videoCube.thumbnail_start.trc-split-label .trc-main-label{width:30%;_width:30%;}.thumbs-feed-01-a .videoCube.thumbnail_start.trc-split-label .trc-pre-label{width:30%;_width:30%;}.thumbs-feed-01-a .videoCube .video-label-box.trc-pre-label{margin:0px 0px 0px 0px;}.thumbs-feed-01-a .branding{color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;line-height:24.0px;}.thumbs-feed-01-a .branding .logoDiv a span{color:inherit;font-size:inherit;}.thumbs-feed-01-a .branding div.logoDiv{font-family:inherit;}.thumbs-feed-01-a .videoCube .thumbBlock .static-text{font-weight:normal;font-family:Arial, Helvetica, sans-serif;text-decoration:none;font-size:11px;background-color:#a30202;display:block;color:#ffffff;text-align:left;}.thumbs-feed-01-a .syndicatedItem .video-label-box{height:116px;margin:5px 0px 0px 0px;}.thumbs-feed-01-a .logoDiv a span{font-size:11.0px;color:#999999;display:inline;font-weight:normal;}.thumbs-feed-01-a .tbl-cta-style .cta-button{font-family:Helvetica, Arial, sans-serif;background-color:transparent;border-color:#999990;color:#333333;}.thumbs-feed-01-a .tbl-cta-style .cta-button:hover{color:inherit;border-color:#999990;}.thumbs-feed-01-a .videoCube:hover .video-label-box .video-description{text-decoration:underline;}.thumbs-feed-01-a .videoCube .video-label-box .video-title{margin:0 0 0 0;}.thumbs-feed-01-a .video-label-box .branding{display:block;}.thumbs-feed-01-a .trc_rbox_header .trc_header_ext{position:relative;top:auto;right:auto;}.thumbs-feed-01-a .logoDiv a{font-size:100%;}.thumbs-feed-01-a .videoCube a{padding:0 0 0 0;}.thumbs-feed-01-a .trc_rbox_header .logoDiv{line-height:normal;}.thumbs-feed-01-a .trc_rbox_header_span .trc_header_right_column{height:auto;}.thumbs-feed-01-a .trc_header_left_column{height:auto;}.thumbs-feed-01-a .trc_header_right_part{margin:0px 0 0 0;}.thumbs-feed-01-a .videoCube .story-widget.story-widget-text-under .tbl-text-under-title-background{background-color:#EBEBEB;}.thumbs-feed-01-a .videoCube .story-widget.story-widget-text-under .tbl-ui-line{background-color:#333333;}.thumbs-feed-01-a .tbl-recommendation-reel .tbl-text-under-branding-background{background-color:#EBEBEB;}.thumbs-feed-01-a .tbl-recommendation-reel .tbl-text-under-title-background{background-color:#EBEBEB;}.thumbs-feed-01-a .tbl-recommendation-reel .tbl-ui-line{background-color:#333333;}.thumbs-feed-01-a .tbl-reco-reel-slider{z-index:99999;margin:initial;top:50%;}.thumbs-feed-01-a .tbl-vignette-background-screen{background-color:#fff;opacity:0.8;filter:alpha(opacity=80);}.thumbs-feed-01-a .tbl-vignette-attribution{color:#6B6666;font-size:15px;}.thumbs-feed-01-a vignette{xButtonColor:#fff;backgroundColor:#fff;backgroundOpacity:0.8;xButtonBGColor:#000;}.thumbs-feed-01-a .tbl-vignette-close-btn-wrp{height:15;background:#000;}.thumbs-feed-01-a recommendationReel{min-adx-line-color:#2abfd5;min-adx-progress-color:#FFF;}
@media only screen and (min-width: 481px)
{
.tbl-read-more-box .tbl-read-more-btn.tbl-rtl-read-more-btn{
padding: 10px 120px 10px 120px !important;
background: #3293CD;
color:#000000;
}
}

@media only screen and (max-width: 480px){
    #tbl-next-up
    {
       z-index: 2000;
    }
}/* s-split-alternating-thumbnails-a *//* override bootstrap default span definitions */
.alternating-thumbnails-a [class*=span] {
    float:none;
    margin-left:0;
}

.alternating-thumbnails-a .trc_rbox_header_span .trc_header_right_column {
	background: transparent;
}

.alternating-thumbnails-a .trc_rbox_header .logoDiv {
        font-size: inherit;
}
.alternating-thumbnails-a .trc_header_left_column {
	background: transparent;
}/* e-split-alternating-thumbnails-a *//* s-split-thumbnails-g */.thumbnails-g img {
        max-width: none;
}

/* override bootstrap default span definitions */
.thumbnails-g [class*=span] {
    float:none;
    margin-left:0;
}


.thumbnails-g .trc_rbox_header {
        line-height: 1.2em;
        position: relative;
        display: block;
        width: auto;
	margin: 0px 0px 0px 0px;
	background: transparent;
	height: auto;
	background-color: transparent;
	padding: 0 0 6px 0;
	box-sizing: initial;
}

.thumbnails-g .trc_rbox_header_span .trc_header_right_column {
        display: none;
	background: transparent;
	height: auto;
}

.thumbnails-g .trc_rbox_header .logoDiv {
        font-size: inherit;
        line-height: normal;
}

.thumbnails-g .logoDiv a {
    font-size: 100%;
}

.thumbnails-g .logoDiv a span {
    display: inline;
    color: #000000;
    font-weight: normal;
    font-size: 11.0px;
}

.thumbnails-g .videoCube a {
    padding: 0;
}

.thumbnails-g .thumbBlock {
    margin: 0;
}

.trc_elastic .thumbnails-g .video-label-box {
    height: 76px;
	margin: 5px 0px 0px 0px;
}

.thumbnails-g 
}

.thumbnails-g .videoCube .video-label-box .video-title {
    text-decoration: none;
    margin: 0;
}

.thumbnails-g .videoCube:hover .video-label-box .video-title {
    text-decoration: underline;
}

.thumbnails-g .video-label-box .branding {
    display: block;
	line-height: 19.0px;
}

.thumbnails-g .syndicatedItem .branding {
    line-height: 19.0px;
}
.thumbnails-g .trc_header_left_column {
	width: 48%;
	display: inline-block;
	background: transparent;
	height: auto;
}

.thumbnails-g .trc_header_right_part {
	margin-top: 0px;
}

.thumbnails-g .trc_rbox_header .logoDiv a {
	font-size: 100%;
}

.thumbnails-g .trc_rbox_header .trc_header_ext {
	position: relative;
	top: auto;
	right: auto;
}

.thumbnails-g .syndicatedItem .video-label-box {
	margin: 5px 0px 0px 0px;
	height: 76px;
}
/* e-split-thumbnails-g *//* s-split-thumbs-feed-01 *//* override bootstrap default span definitions */
.thumbs-feed-01 [class*=span] {
    float:none;
    margin-left:0;
}

.thumbs-feed-01 .trc_rbox_header_span .trc_header_right_column {
	background: transparent;
}

.thumbs-feed-01 .trc_rbox_header .logoDiv {
        font-size: inherit;
}
.thumbs-feed-01 .trc_header_left_column {
	background: transparent;
}/* e-split-thumbs-feed-01 *//* s-split-organic-thumbs-feed-01 *//* override bootstrap default span definitions */
.organic-thumbs-feed-01 [class*=span] {
    float:none;
    margin-left:0;
}

.organic-thumbs-feed-01 .trc_rbox_header_span .trc_header_right_column {
	background: transparent;
}

.organic-thumbs-feed-01 .trc_rbox_header .logoDiv {
        font-size: inherit;
}
.organic-thumbs-feed-01 .trc_header_left_column {
	background: transparent;
}/* e-split-organic-thumbs-feed-01 *//* s-split-thumbs-feed-01-a *//* override bootstrap default span definitions */
.thumbs-feed-01-a [class*=span] {
    float:none;
    margin-left:0;
}

.thumbs-feed-01-a .trc_rbox_header_span .trc_header_right_column {
	background: transparent;
}

.thumbs-feed-01-a .trc_rbox_header .logoDiv {
        font-size: inherit;
}
.thumbs-feed-01-a .trc_header_left_column {
	background: transparent;
}/* e-split-thumbs-feed-01-a */</style><style type="text/css">@media screen and (min-width: 0px) and (max-width: 1px) {.trc_elastic_thumbnails-g .trc_rbox_outer{margin-right:-2%;}.trc_elastic_thumbnails-g .videoCube_aspect{padding-bottom:66.66666666666666%; width: 100%;}.trc_elastic_thumbnails-g .videoCube{width: 17.997999999999998%; position: relative; float: right; margin: 0 0 2% 0; margin-right: 2%;}.trc_elastic_thumbnails-g :nth-child(5n+1 of .videoCube):not(:nth-child(1 of .videoCube)){clear:both;}.trc_elastic_thumbnails-g div.videoCube:nth-of-type(-n+10){display:block;visibility:visible;}.trc_elastic_thumbnails-g div.videoCube:nth-of-type(n+11){display:none;visibility:hidden;}} @media screen and (min-width: 2px) and (max-width: 419px) {.trc_elastic_thumbnails-g .trc_rbox_outer .videoCube .video-label-box {height:auto;}.trc_elastic_thumbnails-g .trc_rbox_outer .videoCube {margin-bottom:10px;}.trc_elastic_thumbnails-g .trc_rbox_outer{margin-right:-2%;}.trc_elastic_thumbnails-g .videoCube_aspect{padding-bottom:66.66666666666666%; width: 100%;}.trc_elastic_thumbnails-g .videoCube{width: 97.99%; position: relative; float: right; margin: 0 0 2% 0; margin-right: 2%;}.trc_elastic_thumbnails-g div.videoCube:nth-of-type(-n+1){display:block;visibility:visible;}.trc_elastic_thumbnails-g div.videoCube:nth-of-type(n+2){display:none;visibility:hidden;}} @media screen and (min-width: 420px) and (max-width: 499px) {.trc_elastic_thumbnails-g .trc_rbox_outer .videoCube .trc-main-label {height:auto;}.trc_elastic_thumbnails-g .trc_rbox_outer .videoCube {margin-bottom:10px;}.trc_elastic_thumbnails-g .trc_rbox_outer{margin-right:-2%;}.trc_elastic_thumbnails-g .videoCube_aspect{padding-bottom:83.33333333333334%; width: 100%;}.trc_elastic_thumbnails-g .videoCube{width: 47.995%; position: relative; float: right; margin: 0 0 2% 0; margin-right: 2%;}.trc_elastic_thumbnails-g div.videoCube:nth-of-type(-n+2){display:block;visibility:visible;}.trc_elastic_thumbnails-g div.videoCube:nth-of-type(n+3){display:none;visibility:hidden;}} @media screen and (min-width: 500px) {.trc_elastic_thumbnails-g .trc_rbox_outer .videoCube .trc-main-label {height:auto;}.trc_elastic_thumbnails-g .trc_rbox_outer .videoCube {margin-bottom:10px;}.trc_elastic_thumbnails-g .trc_rbox_outer{margin-right:-2%;}.trc_elastic_thumbnails-g .videoCube_aspect{padding-bottom:83.33333333333334%; width: 100%;}.trc_elastic_thumbnails-g .videoCube{width: 22.9975%; position: relative; float: right; margin: 0 0 2% 0; margin-right: 2%;}.trc_elastic_thumbnails-g div.videoCube:nth-of-type(-n+4){display:block;visibility:visible;}.trc_elastic_thumbnails-g div.videoCube:nth-of-type(n+5){display:none;visibility:hidden;}} </style><style type="text/css">.app-install-branding-wrapper { display: inline-block; display: inline-flex; flex-direction: row; align-items: stretch; gap: 5px; width: 100%; min-height: 100%; } .app-install-branding-wrapper .app-install-logo { display: inline-block; max-height: 36px; min-height: 36px; height: 36px; max-width: 36px; min-width: 36px; width: 36px; object-fit: contain; } .app-install-branding-wrapper .app-install-branding-text { margin: 0; display: flex; flex-direction: column; width: calc(100% - (36px + 5px)); } .app-install-branding-wrapper .app-install-branding-text .video-branding-flex-cta-rating { padding: 0; margin: 0; line-height: 1; display: flex; align-items: flex-end; direction: inherit; } .app-install-branding-wrapper .app-install-branding-title { line-height: 1; display: inline; }.videoCube:not(:last-of-type) tbl-app-install-grid[version="2"].tbl-app-install-grid-multi-slot { padding-bottom: 13px; border-bottom-width: 1px; border-bottom-style: solid; display: block; }tbl-app-install-grid .app-install-branding-wrapper .app-install-branding-title { display: flex; align-items: center; flex-wrap: wrap; }tbl-app-install-grid .branding.branding.branding { line-height: 1; float: none; direction: inherit; min-height: 36px; display: flex; } tbl-app-install-grid .branding.branding.branding .app-install-branding-wrapper { min-height: 36px; } tbl-app-install-grid .branding.branding.branding .app-install-branding-text-inner { max-width: calc(100% - 11px); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; display: inline-block; } tbl-app-install-grid .branding.branding.branding:before, tbl-app-install-grid .branding.branding.branding:after { display: none; }</style><style type="text/css">.videoCube a.video-cta-style { width: 100%; } .videoCube a.video-cta-style span.video-label-box.video-label-box-cta { display: flex; flex-wrap: wrap; align-content: flex-start; align-items: center; } .videoCube a.video-cta-style span.video-label-box.video-label-box-cta.video-label-box-cta-non-ie { justify-content: space-between; } .videoCube a.video-cta-style span.video-label-box.video-label-box-cta.app-install-full-grid.app-install-full-grid { align-items: center; align-content: center; display: grid; grid-template-columns: 8fr 2fr; min-width: 100%; width: 100%; padding: 0; margin: 0 0 8px; direction: inherit; } .videoCube a.video-cta-style span.video-label-box.video-label-box-cta.app-install-full-grid.app-install-full-grid .video-cta-href { min-width: 65px; max-height: 36px; min-height: 36px; height: 36px; margin: 0; } .videoCube a.video-cta-style span.video-label-box.video-label-box-cta.app-install-full-grid.app-install-full-grid.app-install-bottom { row-gap: 3px; } .videoCube a.video-cta-style span.video-label-box.video-label-box-cta.app-install-full-grid.app-install-full-grid.app-install-bottom .video-title { grid-column: 1 / -1; } .videoCube a.video-cta-style span.video-label-box.video-label-box-cta.app-install-full-grid.app-install-full-grid.app-install-bottom .video-description { grid-column: 1 / -1; } .videoCube a.video-cta-style span.video-label-box.video-label-box-cta.app-install-full-grid.app-install-full-grid .video-cta-button { min-height: 100%; height: 100%; } .videoCube a.video-cta-style span.video-label-box.video-label-box-cta.app-install-full-grid.app-install-full-grid .video-branding-flex-cta-item { white-space: normal; overflow: visible; text-overflow: clip; padding: 0; border: 0; margin: 0; display: flex; height: 100%; min-height: 100%; direction: inherit; } .videoCube a.video-cta-style span.video-label-box.video-label-box-cta.app-install-full-grid.app-install-full-grid .video-branding-flex-cta-item::after { display: none; } .videoCube a.video-cta-style span.video-label-flex-cta-item { flex-basis: 100%; } .videoCube a.video-cta-style span.video-branding-flex-cta-item { margin-top: 1px; flex-grow: 1; flex-basis: 1px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }.videoCube .video-cta-href { display: inline-block; margin-top: 1px; margin-inline-start: 2px; padding: 0; max-width: 100%; min-width: 72px; min-width: calc(min(100%, 72px)); bottom: 0; vertical-align: top; position: relative; box-sizing: content-box; flex-shrink: 0; font-size: 10px; line-height: 13.2px; } .videoCube .video-cta-href button.video-cta-button { margin: 0; height: 24px; font-size: 10px; line-height: 13.2px; border-radius: 4px; border: 1px solid; background-color: inherit; border-color: #999999; text-transform: none; letter-spacing: normal; box-sizing: border-box; font-weight: bold; cursor: pointer; outline: none; font-family: Helvetica; padding: 1px 4px; width: 100%; min-width: 1px; opacity: 1; box-shadow: none; user-select: none; transition: none; text-decoration: none; transform: none; } .videoCube .video-cta-href button.video-cta-button:hover { color: inherit; border-color: inherit; background-color: inherit; letter-spacing: normal; }tbl-app-install-grid .video-cta-href.video-cta-href.video-cta-href { padding: 0; } tbl-app-install-grid .video-cta-href.video-cta-href.video-cta-href, tbl-app-install-grid .video-cta-href.video-cta-href.video-cta-href .video-cta-button { min-width: 100%; min-height: 36px; max-width: 100%; height: 36px; margin: 0; } tbl-app-install-grid .video-cta-href.video-cta-href.video-cta-href .video-cta-button { padding: 0 5px; white-space: nowrap; }</style><style type="text/css">.tbl-isi-card .tbl-isi-container { position: relative; display: grid; grid-template-rows: 0.5fr 0.5fr; }.tbl-isi-card .thumbBlock_holder { min-height: 100%; height: 100%; } .tbl-isi-card .thumbBlock_holder .thumbBlock .thumbnail-emblem { width: 20%; height: 50%; background-size: contain; margin: 2%; background-position: 0 0; }</style><style type="text/css">.thumbnail-emblem { height: 35px; width: 35px; }.trc_related_container .thumbnail-emblem.bottom-right, .trc_related_container .static-text.bottom-right { bottom: 0; right: 0; background-position: bottom; }.trc_related_container .thumbnail-emblem.top-right, .trc_related_container .static-text.top-right { top: 0; right: 0; background-position: top; }.trc_related_container .thumbnail-emblem.bottom-left, .trc_related_container .static-text.bottom-left { bottom: 0; left: 0; background-position: bottom; }.trc_related_container .thumbnail-emblem.top-left, .trc_related_container .static-text.top-left { top: 0; left: 0; background-position: top; }.trc_related_container .thumbnail-emblem.top, .trc_related_container .static-text.top { width: 100%; top: 0; }.trc_related_container .thumbnail-emblem.bottom, .trc_related_container .static-text.bottom { width: 100%; bottom: 0; padding: 2px 0; }.trc_related_container .videoCube .thumbBlock .static-text { position: absolute; z-index: 1; margin: 0; padding: 5px; display: block; opacity: 0.7; } .trc_related_container .videoCube .thumbBlock .static-text.tbl-fixed-label { opacity: 1; padding: 0 5px; text-align: center; } .trc_related_container .videoCube .thumbBlock .static-text.tbl-fixed-label.tbl-small-label { min-width: 107px; min-height: 27px; line-height: 27px; letter-spacing: 0.31px; } .trc_related_container .videoCube .thumbBlock .static-text.tbl-fixed-label.tbl-big-label { min-width: 140px; min-height: 33px; font-size: 14px; line-height: 33px; letter-spacing: 0.39px; }.trc_related_container .thumbnail-emblem { background-position-x: center; }</style><script src="//vidstat.taboola.com/lite-unit/4.7.8/UnitWidgetItemDesktop.min.js" crossorigin="anonymous"></script><script src="//vidstat.taboola.com/lite-unit/4.7.8/UnitFeedManagerDesktop.min.js" crossorigin="anonymous"></script><style type="text/css">[data-feed-main-container-id="taboola-below-article-thumbnails-2nd"]{position:relative;margin-top:3px;-webkit-text-size-adjust:100%;clear:both;padding:0;background-color:transparent}[data-feed-main-container-id="taboola-below-article-thumbnails-2nd"] .tbl-feed-header{padding:0 5px 10px;background:0;box-sizing:border-box}[data-feed-main-container-id="taboola-below-article-thumbnails-2nd"] .tbl-feed-header-logo{height:11px;width:76px;display:inline-block;margin:0;background-image:url(//cdn.taboola.com/static/f8/f89e1763-220d-4e09-ba69-9e040548fb7a.svg);background-repeat:no-repeat;background-position:0 0;background-size:contain}[data-feed-main-container-id="taboola-below-article-thumbnails-2nd"] .tbl-feed-header.tbl-header-with-text.tbl-logo-right-position{padding:0 5px 10px 0}[data-feed-main-container-id="taboola-below-article-thumbnails-2nd"] .tbl-feed-header.tbl-header-with-text.tbl-logo-left-position{padding:0 0 10px 5px}[data-feed-main-container-id="taboola-below-article-thumbnails-2nd"] .tbl-feed-header.tbl-header-with-text{display:table;width:100%}[data-feed-main-container-id="taboola-below-article-thumbnails-2nd"] .tbl-header-with-text .tbl-feed-header-logo{display:table-cell;background-position-y:100%}[data-feed-main-container-id="taboola-below-article-thumbnails-2nd"] .tbl-header-with-text .tbl-feed-header-text{display:table-cell;width:calc(100% - 76px);word-break:break-word}[data-feed-main-container-id="taboola-below-article-thumbnails-2nd"] .tbl-logo-left-position{direction:ltr}[data-feed-main-container-id="taboola-below-article-thumbnails-2nd"] .tbl-header-with-text.tbl-logo-left-position .tbl-feed-header-text{text-align:right}[data-feed-main-container-id="taboola-below-article-thumbnails-2nd"] .tbl-logo-right-position{direction:rtl}[data-feed-main-container-id="taboola-below-article-thumbnails-2nd"] .tbl-header-with-text.tbl-logo-right-position .tbl-feed-header-text{text-align:left;direction:ltr}[data-feed-main-container-id="taboola-below-article-thumbnails-2nd"] .tbl-feed-card{margin-bottom:10px;background-color:transparent;overflow:hidden;padding-bottom:0}[data-feed-main-container-id="taboola-below-article-thumbnails-2nd"] .tbl-loading-spinner{margin-bottom:10px}[data-feed-main-container-id="taboola-below-article-thumbnails-2nd"].tbl-feed-frame-DIVIDER .tbl-feed-card{box-shadow:0 1px #e6ecf0;margin-bottom:22px}[data-feed-main-container-id="taboola-below-article-thumbnails-2nd"].tbl-feed-frame-FRAME .tbl-feed-card{box-shadow:0 2px 5px 0 #e6ecf0;margin:0 2px 22px 2px}[data-feed-main-container-id="taboola-below-article-thumbnails-2nd"].tbl-feed-frame-SEMI_FRAME .tbl-feed-card{overflow:visible;position:relative}[data-feed-main-container-id="taboola-below-article-thumbnails-2nd"].tbl-feed-frame-SEMI_FRAME .tbl-feed-card::after,[data-feed-main-container-id="taboola-below-article-thumbnails-2nd"].tbl-feed-frame-SEMI_FRAME .tbl-feed-card::before{content:"";width:100%;left:0;position:absolute;display:block}[data-feed-main-container-id="taboola-below-article-thumbnails-2nd"].tbl-feed-frame-SEMI_FRAME .tbl-feed-card::after{height:50px;box-shadow:0 2px 5px 0 #e6ecf0;bottom:0}[data-feed-main-container-id="taboola-below-article-thumbnails-2nd"].tbl-feed-abp{max-width:770px;margin:3px auto 0}[data-feed-main-container-id="taboola-below-article-thumbnails-2nd"] .tbl-feed-card .video-label-box .video-description{margin-top:2px}@media screen and (max-width:480px){[data-feed-main-container-id="taboola-below-article-thumbnails-2nd"].tbl-feed-full-width{padding:0px 8px}[data-feed-main-container-id="taboola-below-article-thumbnails-2nd"] .tbl-feed-card{margin-bottom:5px}[data-feed-main-container-id="taboola-below-article-thumbnails-2nd"] .trc-widget-footer,[data-feed-main-container-id="taboola-below-article-thumbnails-2nd"] .trc_header_ext{padding-right:3px}[data-feed-main-container-id="taboola-below-article-thumbnails-2nd"].tbl-feed-frame-DIVIDER .tbl-feed-card{margin-bottom:16px}[data-feed-main-container-id="taboola-below-article-thumbnails-2nd"].tbl-feed-frame-FRAME .tbl-feed-card{margin:0 0 16px 0}}[data-feed-main-container-id="taboola-below-article-thumbnails-2nd"][data-feed-container-num] {background-color: TRANSPARENT; padding: 0px 0px 0px 0px;}[data-feed-main-container-id="taboola-below-article-thumbnails-2nd"] .tbl-feed-header {padding: 0px 5px 10px 5px; background: transparent; text-align: initial; display: table; width: 100%;}div#taboola-below-article-thumbnails-2nd {    width: 1024px;}</style><style type="text/css">@media screen and (min-width: 0px) and (max-width: 480px) {.trc_elastic_thumbs-feed-01 .trc_rbox_outer .videoCube .video-label-box {height:auto;}.trc_elastic_thumbs-feed-01 .trc_rbox_outer .videoCube {margin-bottom:10px;}.trc_elastic_thumbs-feed-01 .trc_rbox_outer{margin-right:-2%;}.trc_elastic_thumbs-feed-01 .videoCube_aspect{padding-bottom:56.25%; width: 100%;}.trc_elastic_thumbs-feed-01 .videoCube{width: 97.99%; position: relative; float: right; margin: 0 0 2% 0; margin-right: 2%;}.trc_elastic_thumbs-feed-01 div.videoCube:nth-of-type(-n+1){display:block;visibility:visible;}.trc_elastic_thumbs-feed-01 div.videoCube:nth-of-type(n+2){display:none;visibility:hidden;}} @media screen and (min-width: 481px) {.trc_elastic_thumbs-feed-01 .trc_rbox_outer .videoCube .video-label-box {height:auto;}.trc_elastic_thumbs-feed-01 .trc_rbox_outer .videoCube {margin-bottom:10px;}.trc_elastic_thumbs-feed-01 .trc_rbox_outer{margin-right:-2%;}.trc_elastic_thumbs-feed-01 .videoCube_aspect{padding-bottom:50%; width: 100%;}.trc_elastic_thumbs-feed-01 .videoCube{width: 97.99%; position: relative; float: right; margin: 0 0 2% 0; margin-right: 2%;}.trc_elastic_thumbs-feed-01 div.videoCube:nth-of-type(-n+1){display:block;visibility:visible;}.trc_elastic_thumbs-feed-01 div.videoCube:nth-of-type(n+2){display:none;visibility:hidden;}} </style><style type="text/css">@media screen and (min-width: 0px) and (max-width: 480px) {.trc_elastic_thumbs-feed-01-a .trc_rbox_outer .videoCube .video-label-box {height:auto;}.trc_elastic_thumbs-feed-01-a .trc_rbox_outer .videoCube {margin-bottom:10px;}.trc_elastic_thumbs-feed-01-a .trc_rbox_outer{margin-right:-2%;}.trc_elastic_thumbs-feed-01-a .videoCube_aspect{padding-bottom:56.25%; width: 100%;}.trc_elastic_thumbs-feed-01-a .videoCube{width: 97.99%; position: relative; float: right; margin: 0 0 2% 0; margin-right: 2%;}.trc_elastic_thumbs-feed-01-a div.videoCube:nth-of-type(-n+1){display:block;visibility:visible;}.trc_elastic_thumbs-feed-01-a div.videoCube:nth-of-type(n+2){display:none;visibility:hidden;}} @media screen and (min-width: 481px) {.trc_elastic_thumbs-feed-01-a .trc_rbox_outer .videoCube .trc-main-label {height:auto;}.trc_elastic_thumbs-feed-01-a .trc_rbox_outer .videoCube {margin-bottom:10px;}.trc_elastic_thumbs-feed-01-a .trc_rbox_outer{margin-right:-2%;}.trc_elastic_thumbs-feed-01-a .videoCube_aspect{padding-bottom:56.25%; width: 100%;}.trc_elastic_thumbs-feed-01-a .videoCube{width: 47.995%; position: relative; float: right; margin: 0 0 2% 0; margin-right: 2%;}.trc_elastic_thumbs-feed-01-a div.videoCube:nth-of-type(-n+2){display:block;visibility:visible;}.trc_elastic_thumbs-feed-01-a div.videoCube:nth-of-type(n+3){display:none;visibility:hidden;}} </style><style type="text/css">@media screen and (min-width: 0px) and (max-width: 419px) {.trc_elastic_alternating-thumbnails-a .trc_rbox_outer{margin-right:-2%;}.trc_elastic_alternating-thumbnails-a .videoCube_aspect{padding-bottom:66.66666666666666%; width: 100%;}.trc_elastic_alternating-thumbnails-a .videoCube{width: 47.995%; position: relative; float: right; margin: 0 0 2% 0; margin-right: 2%;}.trc_elastic_alternating-thumbnails-a :nth-child(2n+1 of .videoCube):not(:nth-child(1 of .videoCube)){clear:both;}.trc_elastic_alternating-thumbnails-a div.videoCube:nth-of-type(-n+16){display:block;visibility:visible;}.trc_elastic_alternating-thumbnails-a div.videoCube:nth-of-type(n+17){display:none;visibility:hidden;}} @media screen and (min-width: 420px) and (max-width: 1009px) {.trc_elastic_alternating-thumbnails-a .trc_rbox_outer .videoCube .trc-main-label {height:auto;}.trc_elastic_alternating-thumbnails-a .trc_rbox_outer .videoCube {margin-bottom:10px;}.trc_elastic_alternating-thumbnails-a .trc_rbox_outer{margin-right:-2%;}.trc_elastic_alternating-thumbnails-a .videoCube_aspect{padding-bottom:56.25%; width: 100%;}.trc_elastic_alternating-thumbnails-a .videoCube{width: 47.995%; position: relative; float: right; margin: 0 0 2% 0; margin-right: 2%;}.trc_elastic_alternating-thumbnails-a div.videoCube:nth-of-type(-n+2){display:block;visibility:visible;}.trc_elastic_alternating-thumbnails-a div.videoCube:nth-of-type(n+3){display:none;visibility:hidden;}} @media screen and (min-width: 1010px) and (max-width: 1259px) {.trc_elastic_alternating-thumbnails-a .trc_rbox_outer .videoCube .trc-main-label {height:auto;}.trc_elastic_alternating-thumbnails-a .trc_rbox_outer .videoCube {margin-bottom:10px;}.trc_elastic_alternating-thumbnails-a .trc_rbox_outer{margin-right:-2%;}.trc_elastic_alternating-thumbnails-a .videoCube_aspect{padding-bottom:56.25%; width: 100%;}.trc_elastic_alternating-thumbnails-a .videoCube{width: 31.33%; position: relative; float: right; margin: 0 0 2% 0; margin-right: 2%;}.trc_elastic_alternating-thumbnails-a div.videoCube:nth-of-type(-n+3){display:block;visibility:visible;}.trc_elastic_alternating-thumbnails-a div.videoCube:nth-of-type(n+4){display:none;visibility:hidden;}} @media screen and (min-width: 1260px) {.trc_elastic_alternating-thumbnails-a .trc_rbox_outer .videoCube .trc-main-label {height:auto;}.trc_elastic_alternating-thumbnails-a .trc_rbox_outer .videoCube {margin-bottom:10px;}.trc_elastic_alternating-thumbnails-a .trc_rbox_outer{margin-right:-2%;}.trc_elastic_alternating-thumbnails-a .videoCube_aspect{padding-bottom:56.25%; width: 100%;}.trc_elastic_alternating-thumbnails-a .videoCube{width: 22.9975%; position: relative; float: right; margin: 0 0 2% 0; margin-right: 2%;}.trc_elastic_alternating-thumbnails-a div.videoCube:nth-of-type(-n+4){display:block;visibility:visible;}.trc_elastic_alternating-thumbnails-a div.videoCube:nth-of-type(n+5){display:none;visibility:hidden;}} </style><style type="text/css">.motion-ads-wrapper { overflow: hidden; } .motion-ads-wrapper .motion-ads-container { height: 100%; width: 100%; background-color: transparent; background-size: auto; text-align: center; overflow: hidden; display: block; } .motion-ads-wrapper .motion-ads-container.is-playing { background-color: black; } .motion-ads-wrapper .motion-ads-container video { width: 100%; height: 100%; object-fit: contain; object-position: 50% 50%; -o-object-fit: contain; -o-object-position: 50% 50%; }</style><style type="text/css">.trc_user_exclude_btn { background: url("//cdn.taboola.com/libtrc/static/thumbnails/f539211219b796ffbb49949997c764f0.png") no-repeat scroll 0 0 transparent; width: 12px; height: 12px; position: absolute; right: 2px; top: 2px; z-index: 9000; cursor: pointer; visibility: hidden; }.trc_undo_btn { font-family: Arial, Helvetica, sans-serif; font-size: 11px; line-height: 14px; font-weight: normal; color: #3366CC; text-decoration: underline; cursor: pointer; position: absolute; right: 2px; top: 2px; padding: 0 1px; z-index: 11000; visibility: hidden; }.videoCube:hover .trc_user_exclude_btn,.videoCube_hover .trc_user_exclude_btn,.trc_user_excluded.videoCube:hover .trc_undo_btn,.trc_user_excluded.videoCube_hover .trc_undo_btn,.trc_undo_btn.trc_anchor { visibility: visible; }.videoCube.trc_user_excluded .trc_user_exclude_btn { visibility: hidden; }.trc_fade { opacity: 0; filter: alpha(opacity=0); visibility: hidden; -webkit-transition: opacity 500ms 0s, visibility 0s 500ms; -moz-transition: opacity 500ms 0s, visibility 0s 500ms; -ms-transition: opacity 500ms 0s, visibility 0s 500ms; -o-transition: opacity 500ms 0s, visibility 0s 500ms; transition: opacity 500ms 0s, visibility 0s 500ms; }.trc_fade.trc_in,.trc_user_excluded .trc_exclude_overlay { visibility: visible; opacity: 1; filter: alpha(opacity=100); -webkit-transition-delay: 0s, 0s; -moz-transition-delay: 0s, 0s; -ms-transition-delay: 0s, 0s; -o-transition-delay: 0s, 0s; transition-delay: 0s, 0s; }.trc_excludable .trc_exclude_overlay { position: absolute; z-index: 10000; top: 0; left: 0; width: 100%; height: 100%; cursor: default; background-color: white; /* this is to make elements from underneath this overlay unclickable in IE */ }.videoCube.trc_user_excluded .trc_exclude_overlay { visibility: visible; opacity: 0.8; filter: alpha(opacity=80); }.videoCube.trc_user_excluded .thumbBlock { filter: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><filter id='grayscale'><feColorMatrix type='matrix' values='0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0' /></filter></svg>#grayscale"); filter: gray; -webkit-filter: grayscale(100%); }.videoCube.trc_user_excluded:hover a .video-label-box .video-title,.videoCube_hover.trc_user_excluded a .video-label-box .video-title { text-decoration: none; }.videoCube.trc_user_excluded a .video-label-box *,.videoCube.trc_user_excluded:hover a .video-label-box *,.videoCube_hover.trc_user_excluded a .video-label-box * { color: #000000; overflow: hidden; /* fixes a bug in IE7 - opacity does not work with overflow: visible */ -webkit-transition: color 500ms 0s; -moz-transition: color 500ms 0s; -ms-transition: color 500ms 0s; -o-transition: color 500ms 0s; transition: color 500ms 0s; }
                .trc_popover_aug_container { position: static; }#tbl-aug-50moj9 #tbl-aug-qz4h0w #tbl-aug-kjl9iq .trc_popover { position: absolute; font-family: Arial, Helvetica, sans-serif; font-size: 12px; line-height: 16px; color: #000000; cursor: default; top: 0; right: 0; z-index: 12000; width: 180px; padding: 1px; text-align: left; white-space: normal; background-color: #ffffff; border: 1px solid rgba(0, 0, 0, 0.2); -webkit-border-radius: 6px; -moz-border-radius: 6px; -ms-border-radius: 6px; -o-border-radius: 6px; border-radius: 6px; -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2); -moz-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2); -ms-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2); -o-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2); box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2); -webkit-background-clip: padding-box; -moz-background-clip: padding-box; -ms-background-clip: padding-box; -o-background-clip: padding-box; background-clip: padding-box; -moz-background-clip: padding; -webkit-box-sizing: content-box; -moz-box-sizing: content-box; -ms-box-sizing: content-box; -o-box-sizing: content-box; box-sizing: content-box; } #tbl-aug-50moj9 #tbl-aug-qz4h0w #tbl-aug-kjl9iq .trc_popover.trc_bottom { margin-top: 10px; } #tbl-aug-50moj9 #tbl-aug-qz4h0w #tbl-aug-kjl9iq .trc_popover.trc_bottom .trc_popover_arrow { top: -11px; right: 11px; margin-left: -11px; border-bottom-color: #999; border-bottom-color: rgba(0, 0, 0, 0.25); border-top-width: 0; } #tbl-aug-50moj9 #tbl-aug-qz4h0w #tbl-aug-kjl9iq .trc_popover.trc_bottom .trc_popover_arrow:after { top: 1px; margin-left: -10px; border-bottom-color: #ffffff; border-top-width: 0; } #tbl-aug-50moj9 #tbl-aug-qz4h0w #tbl-aug-kjl9iq .trc_popover iframe { width: 100%; } #tbl-aug-50moj9 #tbl-aug-qz4h0w #tbl-aug-kjl9iq .trc_popover .trc_popover_arrow, #tbl-aug-50moj9 #tbl-aug-qz4h0w #tbl-aug-kjl9iq .trc_popover .trc_popover_arrow:after { position: absolute; display: block; width: 0; height: 0; border: solid transparent; } #tbl-aug-50moj9 #tbl-aug-qz4h0w #tbl-aug-kjl9iq .trc_popover .trc_popover_arrow { border-width: 11px; } #tbl-aug-50moj9 #tbl-aug-qz4h0w #tbl-aug-kjl9iq .trc_popover .trc_popover_arrow:after { border-width: 10px; content: ""; }#tbl-aug-50moj9 #tbl-aug-qz4h0w #tbl-aug-kjl9iq .trc_popover_fade { visibility: hidden; opacity: 0; filter: alpha(opacity=0); -webkit-transition: opacity 500ms 0s, visibility 0s 500ms; -moz-transition: opacity 500ms 0s, visibility 0s 500ms; -ms-transition: opacity 500ms 0s, visibility 0s 500ms; -o-transition: opacity 500ms 0s, visibility 0s 500ms; transition: opacity 500ms 0s, visibility 0s 500ms; } #tbl-aug-50moj9 #tbl-aug-qz4h0w #tbl-aug-kjl9iq .trc_popover_fade.trc_in { visibility: visible; opacity: 1; filter: alpha(opacity=100); -webkit-transition-delay: 0s, 0s; -moz-transition-delay: 0s, 0s; -ms-transition-delay: 0s, 0s; -o-transition-delay: 0s, 0s; transition-delay: 0s, 0s; }</style><style type="text/css">.tbl-loading-spinner.tbl-loading-cards-placeholder { background: transparent; background-size: 100%; height: auto; margin-top: 40px; }.tbl-placeholder-card { background: #f6f7f9; height: 125px; overflow: hidden; position: relative; margin-bottom: 48px; }.tbl-placeholder-card:before { background-color: #f6f7f9; background-image: url(//cdn.taboola.com/static/91/9117a6d9-cbf1-4ea6-8caa-7461ce6554bc.gif); background-repeat: repeat-y; background-size: 100% 1px; content: ' '; display: block; height: 100%; }.tbl-masker { position: absolute; width: calc(100% - 190px - 24px); background-color: #fff; box-sizing: content-box; border-color: #fff; border-style: solid; border-left-width: 24px; }.tbl-first-row-pl, .tbl-second-row-pl, .tbl-third-row-pl { background: transparent; z-index: 1; }.tbl-first-row-pl { top: 0; height: 18px; left: 190px; border-top-width: 11px; border-bottom-width: 18px; }.tbl-second-row-pl { top: 47px; height: 18px; left: 190px; border-top-width: 0; border-bottom-width: 18px; }.tbl-third-row-pl { top: 83px; height: 15px; left: 190px; border-top-width: 0; border-bottom-width: 35px; }.tbl-last-row-right-padding { top: 83px; left: calc(30% + 130px); width: 100%; height: 15px; border-width: 0; }.tbl-img-top-padding, .tbl-img-bottom-padding, .tbl-first-col-padding { display: none; }.tbl-second-col-padding { display: block; width: 24px; height: 100%; border-width: 0; top: 0; right: 0; }.render-late-effect.tbl-feed-container .thumbBlock { opacity: 0; transition: opacity 0.75s; }.render-late-effect.tbl-feed-container .thumbBlock[style*="background-image"] { opacity: 1; }.tbl-loading-placeholder-dir-rtl .tbl-masker { border-right-width: 24px; }.tbl-loading-placeholder-dir-rtl .tbl-first-row-pl, .tbl-loading-placeholder-dir-rtl .tbl-second-row-pl, .tbl-loading-placeholder-dir-rtl .tbl-third-row-pl { right: 190px; left: auto; }.tbl-loading-placeholder-dir-rtl .tbl-last-row-right-padding { right: calc(30% + 130px); left: auto; }.tbl-loading-placeholder-dir-rtl .tbl-second-col-padding { right: auto; left: 0; }@media screen and (max-width: 480px) and (min-width: 0px) { .tbl-loading-spinner.tbl-loading-cards-placeholder { margin-top: 8px; } .tbl-placeholder-card { height: 87px; margin-bottom: 8px; } .tbl-masker { width: calc(100% - 114px - 12px); border-left-width: 12px; } .tbl-loading-placeholder-dir-rtl .tbl-masker { border-right-width: 12px; } .tbl-first-row-pl { top: 0; height: 10px; left: 114px; border-top-width: 16px; border-bottom-width: 10px; } .tbl-second-row-pl { top: 36px; height: 10px; left: 114px; border-top-width: 0; border-bottom-width: 11px; } .tbl-third-row-pl { top: 57px; height: 8px; left: 114px; border-top-width: 0; border-bottom-width: 22px; } .tbl-last-row-right-padding { top: 57px; height: 8px; } .block-no-border, .tbl-img-top-padding, .tbl-img-bottom-padding, .tbl-first-col-padding { display: block; border-width: 0; } .tbl-img-top-padding { height: 10px; width: 100%; top: 0; } .tbl-img-bottom-padding { height: 10px; width: 100%; bottom: 0; } .tbl-first-col-padding { height: 100%; width: 8px; top: 0; left: 0; } .tbl-second-col-padding { display: none; } .tbl-loading-placeholder-dir-rtl .tbl-first-col-padding { right: 0; left: auto; } .tbl-loading-placeholder-dir-rtl .tbl-first-row-pl, .tbl-loading-placeholder-dir-rtl .tbl-second-row-pl, .tbl-loading-placeholder-dir-rtl .tbl-third-row-pl { right: 114px; left: auto; } }</style><link type="text/css" rel="stylesheet" href="//vidstat.taboola.com/vpaid/units/33_7_9/assets/css/cmOsUnit.css"><script type="text/javascript" crossorigin="anonymous" src="//vidstat.taboola.com/vpaid/units/33_7_9/infra/cmTagWIDGET_ITEM.js"></script><script src="//vidstat.taboola.com/vpaid/vPlayer/player/v16.0.0/OvaMediaPlayer.js" async="" crossorigin="anonymous"></script><style type="text/css">#_cm-css-reset {
    height: inherit;
    width: inherit;
    direction: ltr;
    text-align: left;
}

#_cm-css-reset.vpaid-player-container .vjs-tech {
    background-color: #000000;
}

#_cm-css-reset.vpaid-player-container {
    position: relative;
    z-index: 99;
}

#_cm-css-reset.vpaid-player-container video ~ iframe {
    z-index: 10;
    position: absolute;
    left: 0;
    top: 0;
}

#_cm-css-reset .vpaid-ad-controls {
    -webkit-transition: opacity 500ms ease-out;
    -moz-transition: opacity 500ms ease-out;
    -o-transition: opacity 500ms ease-out;
    transition: opacity 500ms ease-out;
    opacity: 0;
}

#_cm-css-reset.vpaid-player-container:hover .vpaid-ad-controls {
    opacity: 1;
}

#_cm-css-reset.vpaid-player-container .vpaid-ad-controls,
#_cm-css-reset.vpaid-player-container .vpaid-ad-pause {
    height: 30px;
    right: 0;
    position: absolute;
    left: 0px;
    bottom: 0;
    z-index: 1001;
    background-color: rgba(0, 0, 0, 1);
    border-top: 1px rgba(255, 255, 255, 0.7) solid;
}

#_cm-css-reset .vpaid-ad-controls.vjs-default-skin .vjs-control {
    width: 2em;
}
/*
#_cm-css-reset .vpaid-ad-controls.vjs-default-skin .vjs-control:before {
    line-height: 2;
    font-size: 16px;
}*/

#_cm-css-reset
    .vpaid-ad-controls.vjs-default-skin
    .vjs-control.c-paused:before {
    content: '\e001';
}

#_cm-css-reset.vpaid-player-container .vpaid-ad-volume-container {
    height: 30px;
    width: 60px;
    position: relative;
    float: right;
    margin-right: 10px;
    top: 0;
    cursor: pointer;
}

#_cm-css-reset.vpaid-player-container .vpaid-ad-mute-container {
    height: 30px;
    width: 30px;
    position: relative;
    float: right;
    top: 0;
    cursor: pointer;
}

#_cm-css-reset.vpaid-player-container .vpaid-ad-volume-track {
    height: 8px;
    border: 1px #000000 solid;
    box-shadow: 0 0 5px 1px rgb(255, 255, 255);
    position: absolute;
    z-index: 0;
    right: 0;
    top: 11px;
    left: 0;
    background: rgba(51, 51, 51, 0.9);
}

#_cm-css-reset.vpaid-player-container .vpaid-ad-volume-slider {
    height: 8px;
    border: 1px #000000 solid;
    position: absolute;
    width: 40%;
    top: 11px;
    left: 0;
    background: rgba(183, 234, 187, 0.9);
    z-index: 1;
}

/*#_cm-css-reset .mpegcnv::before {
    content: "";
    position: absolute;
    
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 100;
}*/

#_cm-css-reset .tbl-text {
    font-family: Arial, Helvetica, sans-serif;
    white-space: nowrap;
    font-size: 11px;
    color: #fff;
    left: 10px;
    top: 4px;
    position: absolute;
    font-weight: bold;
    z-index: 1001;
}

#_cm-css-reset .mc-video {
    z-index: 101;
}

#_cm-css-reset .vpaid-handler {
    z-index: 1000;
    height: 100%;
    width: 100%;
}

#_cm-css-reset .speaker {
    position: absolute;
    width: 46px;
    height: 46px;
    bottom: -3px;
    right: -5px;
    z-index: 1001;
    background-image: url('https://vidstat.taboola.com/player-assets/mob-vol-on.svg');
}
#_cm-css-reset .speaker.mute {
    background-image: url('https://vidstat.taboola.com/player-assets/mob-vol-off.svg');
}

#_cm-css-reset .hide {
    display: none;
}

#_cm-css-reset .mc-loud-video {
    position: absolute;
    pointer-events: none;
}
#_cm-css-reset .mc-loud-video::-webkit-media-controls-panel {
    display: none !important;
    -webkit-appearance: none;
}

/* Old shadow dom for play button */

#_cm-css-reset .mc-loud-video::--webkit-media-controls-play-button {
    display: none !important;
    -webkit-appearance: none;
}

/* New shadow dom for play button */

/* This one works */

#_cm-css-reset .mc-loud-video::-webkit-media-controls-start-playback-button {
    display: none !important;
    -webkit-appearance: none;
}

#_cm-css-reset .mc-loud-video::-webkit-media-controls {
    display: none !important;
}
#_cm-css-reset .mc-loud-video::-webkit-media-controls-enclosure {
    display: none !important;
}

#_cm-css-reset ._cm-video-ad.vpaid-player-container .video_controls.show {
    display: block;
    margin: 0;
    padding: 0;
    position: initial;
}

#_cm-css-reset ._cm-video-ad.vpaid-player-container .video_controls.show * {
    position: absolute !important;
    display: block;
    margin: 0;
    padding: 0;
    background-color: transparent;
}

#_cm-css-reset ._cm-video-ad.vpaid-player-container .video_controls {
    width: 100%;
    height: 100%;
    z-index: 1000;
    left: 0;
    bottom: -32px;
    -webkit-transition: bottom 0.35s ease-in-out;
    -moz-transition: bottom 0.35s ease-in-out;
    -o-transition: bottom 0.35s ease-in-out;
    transition: bottom 0.35s ease-in-out;
}

#_cm-css-reset ._cm-video-ad.vpaid-player-container .video_controls .control {
    z-index: 100;
}

#_cm-css-reset
    ._cm-video-ad.vpaid-player-container
    .video_controls
    .interactive {
    pointer-events: all;
    cursor: pointer;
}

#_cm-css-reset ._cm-video-ad.vpaid-player-container .video_controls.hide,
#_cm-css-reset ._cm-video-ad.vpaid-player-container .video_controls .hide {
    display: none;
}

#_cm-css-reset ._cm-video-ad.vpaid-player-container .video_controls.show,
#_cm-css-reset ._cm-video-ad.vpaid-player-container .video_controls .show {
    display: block;
}

#_cm-css-reset
    ._cm-video-ad.vpaid-player-container
    .video_controls
    .cm_video_controls_progressbar_area {
    width: 100%;
    height: 5px;
    bottom: 0%;
    cursor: default;
}

#_cm-css-reset
    ._cm-video-ad.vpaid-player-container
    .video_controls
    .cm_video_controls_progressbar_area
    .cm_video_controls_progressbar {
    height: 100%;
}

#_cm-css-reset
    ._cm-video-ad.vpaid-player-container
    .video_controls
    .cm_video_controls_progressbar_area
    .cm_video_controls_progressbar_bg {
    width: 100%;
    height: 100%;
}

#_cm-css-reset ._cm-video-ad.vpaid-player-container .video_controls .white_bg {
    background: rgba(255, 255, 255, 0.3);
}

#_cm-css-reset ._cm-video-ad.vpaid-player-container .video_controls .blue_bg {
    background: rgba(21, 75, 145, 1);
    -webkit-transition: width 0.5s ease;
    -moz-transition: width 0.5s ease;
    -o-transition: width 0.5s ease;
    transition: width 0.5s ease;
    width: 0%;
}

#_cm-css-reset
    ._cm-video-ad.vpaid-player-container
    .video_controls
    .blue_bg.init_bg {
    -webkit-transition: none;
    -moz-transition: none;
    -o-transition: none;
    transition: none;
}

#_cm-css-reset ._cm-video-ad.vpaid-player-container .video_controls {
    width: 100%;
    height: 27px;
}

#_cm-css-reset
    ._cm-video-ad.vpaid-player-container
    .video_controls
    .cm_video_controls_main_area
    .play_pause {
    top: 3px;
    left: 5px;
    width: 20px;
    height: 20px;
}

#_cm-css-reset
    ._cm-video-ad.vpaid-player-container
    .video_controls
    .cm_video_controls_main_area
    .play_pause
    .pause {
    width: 40px;
    height: 27px;
    top: -7px;
    left: -8px;
    background-image: url('https://vidstat.taboola.com/player-assets/pause2.svg');
    background-size: 36px;
}

#_cm-css-reset
    ._cm-video-ad.vpaid-player-container
    .video_controls
    .cm_video_controls_main_area
    .play_pause
    .play {
    border-top: 5px solid transparent;
    border-left: 10px solid #fff;
    border-bottom: 5px solid transparent;
    left: 6px;
    top: 5px;
    z-index: 102;
}

#_cm-css-reset
    ._cm-video-ad.vpaid-player-container
    .video_controls
    .cm_video_controls_main_area
    .title {
    top: 7px;
    left: 30px;
    width: 140px;
    text-align: left;
}

#_cm-css-reset
    ._cm-video-ad.vpaid-player-container
    .video_controls
    .cm_video_controls_main_area
    .timer {
    top: 6px;
    right: 110px;
}

#_cm-css-reset ._cm-video-ad.vpaid-player-container .video_controls .text {
    color: white;
    font-size: 13px;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
    top: 10px;
    left: 28px;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    cursor: default;
}

#_cm-css-reset
    ._cm-video-ad.vpaid-player-container
    .video_controls
    .text.opt-out-hidden {
    left: 13px;
}

#_cm-css-reset ._cm-video-ad.vpaid-player-container .video_controls {
    width: 100%;
    height: 100%;
    right: 0px;
    bottom: 0;
}

#_cm-css-reset
    ._cm-video-ad.vpaid-player-container
    .video_controls
    .video_controls_main_area
    .cm_video_controls_mute {
    width: 35px;
    height: 27px;
    right: 8px;
    bottom: 5px;
    background-size: 44px;
    box-sizing: content-box;
    background-position-y: center;
}

#_cm-css-reset
    ._cm-video-ad.vpaid-player-container
    .video_controls
    .video_controls_main_area
    .cm_video_controls_mute.display_mute {
    background-image: url('https://vidstat.taboola.com/player-assets/desk_muted2.svg');
}

#_cm-css-reset
    ._cm-video-ad.vpaid-player-container
    .video_controls
    .video_controls_main_area
    .cm_video_controls_mute.display_unmute {
    background-image: url('https://vidstat.taboola.com/player-assets/desk_playing2.svg');
}

#_cm-css-reset
    ._cm-video-ad.vpaid-player-container
    .video_controls
    .video_controls_main_area
    .video-controls-scroller-area {
    width: 80px;
    height: 100%;
    right: 5px;
    top: 0%;
}

#_cm-css-reset ._cm-video-ad.vpaid-player-container .video_controls_mobile {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    z-index: 1001;
}

#_cm-css-reset
    ._cm-video-ad.vpaid-player-container
    .video_controls
    .video_controls_main_area {
    pointer-events: none;
}

#_cm-css-reset
    ._cm-video-ad.vpaid-player-container
    .video_controls
    .video_controls_main_area
    .cm_video_controls_playpause.hide {
    display: none;
}

#_cm-css-reset
    ._cm-video-ad.vpaid-player-container
    .video_controls
    .video_controls_main_area
    .cm_video_controls_playpause.show {
    display: block;
}

#_cm-css-reset
    ._cm-video-ad.vpaid-player-container
    .video_controls
    .video_controls_main_area
    .cm_video_controls_playpause {
    bottom: 28px;
    left: 5px;
}

#_cm-css-reset
    ._cm-video-ad.vpaid-player-container
    .video_controls
    .video_controls_main_area
    .cm_video_controls_playpause
    .pause {
    width: 40px;
    height: 27px;
    top: -10px;
    left: -8px;
    background-image: url(https://vidstat.taboola.com/player-assets/pause2.svg);
    background-size: 40px;
}

#_cm-css-reset
    ._cm-video-ad.vpaid-player-container
    .video_controls
    .video_controls_main_area
    .cm_video_controls_playpause
    .play {
    border-top: 6px solid transparent;
    border-left: 10px solid #fff;
    border-bottom: 6px solid transparent;
    left: 7px;
    top: 3px;
    z-index: 102;
}

#_cm-css-reset .mc-play {
    width: 0;
    height: 0;
    border-top: 7px solid transparent;
    border-left: 9px solid #fff;
    border-bottom: 7px solid transparent;
    left: 14px;
    position: absolute;
    bottom: 10px;
    z-index: 1001;
}

#_cm-css-reset .mc-pause {
    display: block;
    width: 42px;
    height: 42px;
    left: -4px;
    position: absolute;
    bottom: -2px;
    z-index: 1001;
    background-image: url('https://vidstat.taboola.com/player-assets/mob-pause.svg');
}

#_cm-css-reset .mc-pause.hide,
#_cm-css-reset .mc-play.hide {
    display: none;
}

#_cm-css-reset .mc-pause.show,
#_cm-css-reset .mc-play.show {
    display: block;
}

#_cm-css-reset .mc-progressbar_area {
    width: 100%;
    height: 5px;
    bottom: 0%;
    position: absolute;
    z-index: 9999;
}

#_cm-css-reset .mc-progressbar_area .mc-progressbar_bg.white_bg {
    background: rgba(255, 255, 255, 0.3);
    width: 100%;
    height: 100%;
}

#_cm-css-reset .mc-progressbar_area .mc-progressbar_bg.blue_bg {
    background: rgba(21, 75, 145, 1);
    -webkit-transition: width 0.5s ease;
    -moz-transition: width 0.5s ease;
    -o-transition: width 0.5s ease;
    transition: width 0.5s ease;
    position: absolute;
    bottom: 0%;
    height: 100%;
}

#_cm-css-reset .mc-progressbar_area .mc-progressbar_bg.blue_bg.init_bg {
    -webkit-transition: none;
    -moz-transition: none;
    -o-transition: none;
    transition: none;
}

#_cm-css-reset > .multi-vpaids {
    height: 0px;
}

#_cm-css-reset *::-webkit-media-controls-panel {
    display: none !important;
    -webkit-appearance: none;
}

/* Old shadow dom for play button */

#_cm-css-reset *::-webkit-media-controls-play-button {
    display: none !important;
    -webkit-appearance: none;
}

/* New shadow dom for play button */

/* This one works! */

#_cm-css-reset *::-webkit-media-controls-start-playback-button {
    display: none !important;
    -webkit-appearance: none;
}

#_cm-css-reset .cm-ad-player {
    cursor: pointer;
    position: absolute;
    left: 0px;
    top: 0px;
    z-index: 0;
}

@supports (object-fit: cover) {
    #_cm-css-reset .cm-ad-player {
        object-fit: cover;
    }

    #_cm-css-reset .cm-ad-player.vertical-video {
        object-fit: contain;
    }
}

#_cm-css-reset .cm-ad-player.ie-black-edges {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

#_cm-css-reset .cm-ad-player-active {
    visibility: visible;
}

#_cm-css-reset ._cm-ad-feed-manager ._cm-ad {
    display: block !important;
    visibility: hidden !important;
}

#_cm-css-reset ._cm-ad-choices-player {
    position: absolute;
    top: 16px;
    left: 13px;
}

#_cm-css-reset ._cm-ad-choices-player-anchor {
    display: inline-block;
    opacity: 0.5;
    vertical-align: middle;
}

#_cm-css-reset .interactive-video {
    position: absolute;
    z-index: 999 !important;
    cursor: pointer;
    transition:
        visibility 0.2s,
        opacity 0.5s linear;
    display: initial !important;
    opacity: 0.8;
    font-size: 0.875rem;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
    font-weight: 600;
    border-radius: 9999px;
    font-size: 3.5vmin;
    text-shadow: 1px 1px black;
    font-family: Impact, Charcoal, sans-serif !important;
    letter-spacing: 0.2px;
}

#_cm-css-reset .interactive-video-lbls {
    font-family: Impact, Charcoal, sans-serif !important;
    letter-spacing: 0.2px;
}

#_cm-css-reset .interactive-video.center {
    position: relative;
}

#_cm-css-reset .interactive-video.hide {
    opacity: 0;
    visibility: hidden;
}

#_cm-css-reset .interactive-video-wrapper {
    position: absolute;
    width: 100%;
    text-align: center;
}

#_cm-css-reset .interactive-video-wrapper.hide {
    opacity: 0;
    visibility: hidden;
}

#_cm-css-reset .interactive-video.show {
    opacity: 1;
    visibility: visible;
}

#_cm-css-reset .interactive-video-effect {
    -webkit-transition: width 0s ease;
    -moz-transition: width 0s ease;
    -o-transition: width 0s ease;
    transition: width 0s ease;
    height: 1px;
    background-color: white;
    pointer-events: none;
}

#_cm-css-reset .interactive-video-effect-wrapper {
    padding-left: 0.75rem;
}

@media only screen and (max-width: 768px) {
    #_cm-css-reset .interactive-video {
        font-size: 3vmin;
    }
}

#_cm-css-reset .cm-vpaid-iframe {
    position: absolute;
    left: 0px;
    top: 0px;
    margin: 0px !important;
    padding: 0px;
    border: none;
    width: 100%;
    height: 100%;
    z-index: 1;
}

.buff-vid {
    z-index: 2147483647 !important;
    position: fixed;
    right: 0;
    width: 1px;
    height: 1px;
}

#_cm-css-reset ._cm-ad-choices-player {
    z-index: 1;
}

#_cm-css-reset ._cm-ad-choices-player-anchor {
    width: 19px;
    height: 15px;
}
</style><link type="text/css" rel="stylesheet" href="//vidstat.taboola.com/vpaid/units/33_7_9/assets/css/cmOsUnit.css"><script type="text/javascript" crossorigin="anonymous" src="//vidstat.taboola.com/vpaid/units/33_7_9/infra/cmTagFEED_MANAGER.js"></script><style type="text/css">#_cm-css-reset._cm-ad video { visibility: hidden !important; }</style></head><iframe name="goog_topics_frame" src="https://securepubads.g.doubleclick.net/static/topics/topics_frame.html" style="display: none;"></iframe>
<body style="margin-top:0px" bgcolor="FEFEFE" vlink="#909090" alink="Black" rightmargin="0" leftmargin="0" link="#000099">
<div id="fb-root" class=" fb_reset"><div style="position: absolute; top: -10000px; width: 0px; height: 0px;"><div></div></div></div>
<script>(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.5&appId=195475010791014";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>
<div dir="RTL">
<center>
<b></b>
<table border="0" cellpadding="0" cellspacing="0" vspace="0" hspace="0" width="100%" align="center" bgcolor="71B7E6"><tbody><tr>
<td width="0%" height="90"><img src="https://rotter.net/forum/Images/spacer.gif"></td>
<td valign="top">
<div id="div-gpt-ad-1418707589554-0" data-google-query-id="CLX-9aikuIQDFQpRQQIdQVgAwA">
<div id="google_ads_iframe_/69589285/Forum_Logo_Line_0__container__" style="border: 0pt none;"><iframe id="google_ads_iframe_/69589285/Forum_Logo_Line_0" name="google_ads_iframe_/69589285/Forum_Logo_Line_0" title="3rd party ad content" width="970" height="90" scrolling="no" marginwidth="0" marginheight="0" frameborder="0" aria-label="Advertisement" tabindex="0" allow="attribution-reporting" style="border: 0px; vertical-align: bottom;" data-load-complete="true" data-google-container-id="1"></iframe></div>
</div>
</td><td width="35%"></td>
<script>
function tel5(url){
	remote = window.open(url,"remotewin","width=700,height=300,scrollbars=1");
	remote.location.href = url;
	if (remote.opener == null) remote.opener = window;
}
</script>
<td valign="top" align="left"><a href="/"><img src="https://rotter.net/forum/Images/logo_012b.gif" border="0">&nbsp;&nbsp;&nbsp;&nbsp;
</a></td>

</tr><tr> <td colspan="5" bgcolor="000000"><img src="https://rotter.net/forum/Images/spacer.gif"></td>
</tr><tr>
<td colspan="5">
</td></tr></tbody></table>
<table dir="ltr" width="100%" border="0" cellspacing="0" cellpadding="0">
<tbody><tr>
<td><table width="100%" border="0" cellpadding="0" cellspacing="0" background="https://rotter.co.il/ccc/blue_back_search.gif">
<tbody><tr style="height:32px;">
<td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</td><td valign="top">
<p dir="ltr" align="left"><select title="Rotter.Net" class="cnnMenuText" name="Rotter.Net" size="1" style="background-color: #2d8dce; color: yellow; font-weight: bold; vertical-align: middle" onchange="if (this.options[selectedIndex].value != '') location.href=this.options[selectedIndex].value">
<option value="" selected="">בחר פורום</option>
<option value="">---------</option>
<option value="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=list&amp;forum=scoops1">סקופים</option>
<option value="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=list&amp;forum=ihaveasay">הזעקה</option>
<option value="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=list&amp;forum=politics">פוליטיקה</option>
<option value="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=list&amp;forum=tikshoret">ביקורת תקשורת</option>
<option value="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=list&amp;forum=gil">מסמכים</option>
<option value="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=list&amp;forum=kafe">הקפה</option>
<option value="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=list&amp;forum=law">משפטים</option>
<option value="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=list&amp;forum=torah">בית המדרש</option>
<option value="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=list&amp;forum=forg">עיתונות זרה</option>
<option value="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=list&amp;forum=modein">מודיעין</option>
</select>
</p></td>
<td valign="top">
<select title="Rotter.Net" class="cnnMenuText" name="Rotter.Net" size="1" style="background-color: #2d8dce; color: yellow; font-weight: bold; vertical-align: middle" onchange="if (this.options[selectedIndex].value != '') location.href=this.options[selectedIndex].value">
<option value="" selected="">הפורום האקסקלוסיבי</option>
<option value="https://rotter.name/cgi-bin/nor/dcboard.cgi?az=list&amp;forum=chat">שיחות</option>
<option value="https://rotter.name/cgi-bin/nor/dcboard.cgi?az=list&amp;forum=cryptocoins">ביטקוין ומטבעות קריפטו</option>
<option value="https://rotter.name/cgi-bin/nor/dcboard.cgi?az=list&amp;forum=party">כושר ופיתוח גוף</option>
<option value="https://rotter.name/cgi-bin/nor/dcboard.cgi?az=list&amp;forum=study">לימודים</option>
<option value="https://rotter.name/cgi-bin/nor/dcboard.cgi?az=list&amp;forum=sale">צרכנות</option>
<option value="https://rotter.name/cgi-bin/nor/dcboard.cgi?az=list&amp;forum=kaniti">הרגע קניתי</option>
<option value="https://rotter.name/cgi-bin/nor/dcboard.cgi?az=list&amp;forum=economy">כלכלה</option>
<option value="https://rotter.name/cgi-bin/nor/dcboard.cgi?az=list&amp;forum=bogrim">בני ה-20</option>
<option value="https://rotter.name/cgi-bin/nor/dcboard.cgi?az=list&amp;forum=modiein">מודיעין</option>
<option value="https://rotter.name/cgi-bin/nor/dcboard.cgi?az=list&amp;forum=computer">משחקים</option>
<option value="https://rotter.name/cgi-bin/nor/dcboard.cgi?az=list&amp;forum=soft">תוכנה</option>
<option value="https://rotter.name/cgi-bin/nor/dcboard.cgi?az=list&amp;forum=hard">חומרה</option>
<option value="https://rotter.name/cgi-bin/nor/dcboard.cgi?az=list&amp;forum=prog">תיכנות</option>
<option value="https://rotter.name/cgi-bin/nor/dcboard.cgi?az=list&amp;forum=iphone">סמארטפונים</option>
<option value="https://rotter.name/cgi-bin/nor/dcboard.cgi?az=list&amp;forum=Downloads">Downloads</option>
<option value="https://rotter.name/cgi-bin/nor/dcboard.cgi?az=list&amp;forum=sharing">שיתוף</option>
<option value="https://rotter.name/cgi-bin/nor/dcboard.cgi?az=list&amp;forum=music">מוזיקה</option>
<option value="https://rotter.name/cgi-bin/nor/dcboard.cgi?az=list&amp;forum=movies">סרטים</option>
<option value="https://rotter.name/cgi-bin/nor/dcboard.cgi?az=list&amp;forum=photo">צילום</option>
<option value="https://rotter.name/cgi-bin/nor/dcboard.cgi?az=list&amp;forum=motors">מוטוריקה</option>
<option value="https://rotter.name/cgi-bin/nor/dcboard.cgi">לובי</option>
</select>
</td>
<td width="20">&nbsp;&nbsp;&nbsp;&nbsp;
</td>
<td valign="top">

<table class="PageDir" width="100%" border="0" cellspacing="0" cellpadding="0">
<tbody><tr>
<td style="position:relative;" id="Menu6" onmouseover="ShowDiv1(document.all.DivMenu6,this,1,0,4)" onmouseout="HideDiv1(document.all.DivMenu6,2);"><div style="text-align:center; margin: 0 10px; font-weight:bold; z-index:1;"><font size="4" color="ffffff">חופשה</font></div></td>
</tr>
</tbody></table>


<table border="1" class="PageDir" id="DivMenu6" onmouseout="HideDiv1(this,1);" onmouseover="ShowDiv1(this,document.all.Menu6,1,0,1)" style="DISPLAY: none;  POSITION: absolute; background:#c6e0fb; z-index:1;" cellpadding="0" cellspacing="0">
<tbody><tr><td style="cursor:pointer;" class="drop-list" onmouseover="this.style.backgroundColor='#FFFFFF';" onmouseout="this.style.backgroundColor='#d9d9d9';" onclick="location.href='https://rotter.net';"><span style="width:100%;cursor:hand;" class="MyDir"><span title=""></span></span></td></tr>
<tr><td style="cursor:pointer;" class="drop-list" onmouseover="this.style.backgroundColor='#FFFFFF';" onmouseout="this.style.backgroundColor='#d9d9d9';" onclick="window.open('https://www.booking.com/index.html?aid=1592808','_blank');"><span style="width:100%;cursor:hand;" class="MyDir"><span title="Booking">Booking.com</span></span></td></tr>
<tr><td style="cursor:pointer;" class="drop-list" onmouseover="this.style.backgroundColor='#FFFFFF';" onmouseout="this.style.backgroundColor='#d9d9d9';" onclick="window.open('http://bit.ly/2LmOrU3','_blank');"><span style="width:100%;cursor:hand;" class="MyDir"><span title="Kiwi'">Kiwi</span></span></td></tr>
<tr><td style="cursor:pointer;" class="drop-list" onmouseover="this.style.backgroundColor='#FFFFFF';" onmouseout="this.style.backgroundColor='#d9d9d9';" onclick="window.open('http://bit.ly/2uLLyBY','_blank');"><span style="width:100%;cursor:hand;" class="MyDir"><span title="Skyscanner'">Skyscanner</span></span></td></tr>
<tr><td style="cursor:pointer;" class="drop-list" onmouseover="this.style.backgroundColor='#FFFFFF';" onmouseout="this.style.backgroundColor='#d9d9d9';" onclick="window.open('http://bit.ly/2uM7Rrl','_blank');"><span style="width:100%;cursor:hand;" class="MyDir"><span title="Amazon'">TripAdvisor</span></span></td></tr>
</tbody></table>
</td>
<td width="20%"></td>
<td dir="rtl" align="right" width="20%" colspan="2" height="20" valign="top">
<script>
  (function() {
    var cx = '002506875823855302489:zhlssxjzpxk';
    var gcse = document.createElement('script');
    gcse.type = 'text/javascript';
    gcse.async = true;
    gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gcse, s);
  })();
</script>
<div id="___gcse_0"><div class="gsc-control-searchbox-only gsc-control-searchbox-only-iw" dir="rtl"><form class="gsc-search-box gsc-search-box-tools" accept-charset="utf-8"><table cellspacing="0" cellpadding="0" role="presentation" class="gsc-search-box"><tbody><tr><td class="gsc-input"><div class="gsc-input-box" id="gsc-iw-id1"><table cellspacing="0" cellpadding="0" role="presentation" id="gs_id50" class="gstl_50 gsc-input" style="width: 100%; padding: 0px;"><tbody><tr><td id="gs_tti50" class="gsib_a"><input autocomplete="off" type="text" size="10" class="gsc-input" name="search" title="חיפוש" aria-label="חיפוש" id="gsc-i-id1" dir="rtl" spellcheck="false" style="width: 100%; padding: 0px; border: none; margin: 0px; height: auto; background: url(&quot;https://www.google.com/cse/static/images/1x/he/branding.png&quot;) right center no-repeat rgb(255, 255, 255); outline: none;"></td><td class="gsib_b"><div class="gsst_b" id="gs_st50" dir="rtl"><a class="gsst_a" href="javascript:void(0)" title="ניקוי של תיבת החיפוש" role="button" style="display: none;"><span class="gscb_a" id="gs_cb50" aria-hidden="true">×</span></a></div></td></tr></tbody></table></div></td><td class="gsc-search-button"><button class="gsc-search-button gsc-search-button-v2"><svg width="13" height="13" viewBox="0 0 13 13"><title>חיפוש</title><path d="m4.8495 7.8226c0.82666 0 1.5262-0.29146 2.0985-0.87438 0.57232-0.58292 0.86378-1.2877 0.87438-2.1144 0.010599-0.82666-0.28086-1.5262-0.87438-2.0985-0.59352-0.57232-1.293-0.86378-2.0985-0.87438-0.8055-0.010599-1.5103 0.28086-2.1144 0.87438-0.60414 0.59352-0.8956 1.293-0.87438 2.0985 0.021197 0.8055 0.31266 1.5103 0.87438 2.1144 0.56172 0.60414 1.2665 0.8956 2.1144 0.87438zm4.4695 0.2115 3.681 3.6819-1.259 1.284-3.6817-3.7 0.0019784-0.69479-0.090043-0.098846c-0.87973 0.76087-1.92 1.1413-3.1207 1.1413-1.3553 0-2.5025-0.46363-3.4417-1.3909s-1.4088-2.0686-1.4088-3.4239c0-1.3553 0.4696-2.4966 1.4088-3.4239 0.9392-0.92727 2.0864-1.3969 3.4417-1.4088 1.3553-0.011889 2.4906 0.45771 3.406 1.4088 0.9154 0.95107 1.379 2.0924 1.3909 3.4239 0 1.2126-0.38043 2.2588-1.1413 3.1385l0.098834 0.090049z"></path></svg></button></td><td class="gsc-clear-button"><div class="gsc-clear-button" title="ניקוי התוצאות">&nbsp;</div></td></tr></tbody></table></form></div></div>
</td>
<td dir="rtl" background="https://rotter.co.il/ccc/blue_back_search.gif">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
</tr>
</tbody></table></td>
</tr>
<tr>
<td align="center"><table width="975" border="0" align="center" cellpadding="0" cellspacing="0">
<tbody><tr valign="top">
<td width="11"><img src="https://rotter.co.il/ccc/trans.gif" width="11" height="2"></td>
<td width="141"><a href="javascript:seenews('https://rotter.net/search-news.php')"><img src="https://rotter.co.il/ccc/blue_link_archive.gif" width="141" height="25" border="0"></a></td>
<td width="120"><a href="https://rotter.net/forum/takanon.htm" target="new"><img src="https://rotter.co.il/ccc/blue_link_takanon.gif" width="120" height="25" border="0"></a></td>

<td width="156"><a href="https://www.charidy.com/shaarei-dea" target="_new" alt="שערי דעה" title="שערי דעה"><img src="https://rotter.co.il/ccc/blue_link_Shaarei.gif" width="120" height="25" border="0"></a></td>
<td width="156"><a href="https://rotter.net/luach.php" target="_new" alt="לוח שנה" title="לוח שנה"><img src="https://rotter.co.il/ccc/blue_link_luach2.gif" width="120" height="25" border="0"></a></td>

<td width="111"><a href="https://rotter.net/news/news.php" target="new"><img src="https://rotter.co.il/ccc/blue_link_mivzakim.gif" width="111" height="25" border="0"></a></td>
<td width="134"><a href="https://rotter.net/magazin.php" target="new"><img src="https://rotter.co.il/ccc/blue_link_chat.gif" width="134" height="25" border="0"></a></td>
<td width="147"><a href="https://rotter.net"><img src="https://rotter.co.il/ccc/blue_link_home.gif" width="147" height="25" title="tv" border="0"></a></td>
<td width="71"><img src="https://rotter.co.il/ccc/blue_links_bar_right.gif" width="71" height="25"></td>
</tr>
</tbody></table></td>
</tr>
<tr>
<td align="center"><table width="975" border="0" align="center" cellpadding="0" cellspacing="0">
<tbody><tr valign="top">
<td width="11"><img src="https://rotter.co.il/ccc/trans.gif" width="11" height="2"></td>
<td width="32"><img src="https://rotter.co.il/ccc/trans.gif" width="32" height="2"></td>
<td width="195"><a href="http://chatroll.com/embed/chat/rotternet?name=rotternet" target="_n"><img src="https://rotter.co.il/ccc/orange_link_gil.gif" width="195" height="24" border="0"></a></td>
<td width="166"><a href="https://rotter.net/forum/listforum.php"><img src="https://rotter.co.il/ccc/orange_link_scoopsb.gif" width="166" height="24" border="0"></a></td>
<td width="187"><a href="https://rotter.name/cgi-bin/nor/managment/toda-all.pl" target="new"><img src="https://rotter.co.il/ccc/orange_link_downloads.gif" width="187" height="24" border="0"></a></td>
<td width="116"><a href="https://rotter.net/rss/rotternews.xml" target="new"><img src="https://rotter.co.il/ccc/orange_link_rss.gif" width="116" height="24" border="0"></a></td>
<td width="197"><a href="https://rotter.net/votes/vote100/seker.htm" target="new"><img src="https://rotter.co.il/ccc/orange_link_skarim.gif" width="197" height="24" border="0"></a></td>
<td width="71"><img src="https://rotter.co.il/ccc/orange_link_bar_right.gif" width="71" height="24"></td>
</tr>
</tbody></table></td>
</tr>
<tr><td dir="rtl" background="https://rotter.co.il/ccc/blue_back_search.gif">
</td>
</tr>
</tbody></table>
<p align="center"><font size="3" face="Arial" color="#000099"><b></b></font></p>
<font face="Arial" color="#000099" size="3">
<table border="0" width="100%" cellspacing="1" cellpadding="3">
<tbody><tr><td align="RIGHT" valign="BOTTOM" width="100%">
<font face="Arial" color="#000099" size="-1">
<script>
      var cookie_name = 'DCForumUser';
      if (check_cookie(cookie_name)) {
         document.write('<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=add_bookmark&om=838188&forum=scoops1&archive="><img src="https://rotter.net/forum/Images/bookmark.gif" border="0" align="middle"><font SIZE="-1">הוסף לשמורים</font></a>&nbsp;&nbsp;');
      }
   </script><a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=add_bookmark&amp;om=838188&amp;forum=scoops1&amp;archive="><img src="https://rotter.net/forum/Images/bookmark.gif" border="0" align="middle"><font size="-1">הוסף לשמורים</font></a>&nbsp;&nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=printer_format&amp;om=838188&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/printer_friendly.gif" align="middle" border="0"><font size="-1">גירסת הדפסה</font></a>&nbsp;&nbsp;
<script>
      var cookie_name = 'DCForumUser';
      if (check_cookie(cookie_name)) {
         document.write('<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=subscribe_to_topic&om=838188&forum=scoops1"><img src="https://rotter.net/forum/Images/subscribe_thread.gif" border="0" align="middle"><font SIZE="-1">קבלת עדכונים</font></a>&nbsp;&nbsp;');
      }
   </script><a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=subscribe_to_topic&amp;om=838188&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/subscribe_thread.gif" border="0" align="middle"><font size="-1">קבלת עדכונים</font></a>&nbsp;&nbsp;
</font>
</td><td align="LEFT" valign="BOTTOM" nowrap="">
<font face="Arial" color="#000099" size="-1"><b></b>&nbsp;</font>
&nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=list&amp;forum=scoops1"><font size="-1" color="#000099" face="Arial"><img src="https://rotter.net/forum/Images/gobk.gif" border="0" title="לפורומים"></font></a>&nbsp;
<form id="reportthread" name="reportthread" method="post" action="https://rotter.net/cgi-bin/edit/report-luach-a.pl" style="display: inline;">
<input type="hidden" name="report" maxlength="50" value="111">
<input type="hidden" name="username" value="חיפוי אוירי">
<input type="hidden" name="linka" value="https://rotter.net/forum/scoops1/838188.shtml">
<input type="hidden" name="kotar" value="אחרי גלעד קריב">
<input type="hidden" name="forum" value="scoops1">
</form>
<a href="#" onclick="document.getElementById('reportthread').submit();"><font size="-1" color="#000099" face="Arial"><img src="https://rotter.net/forum/Images/reportthread.png" border="0" title="לפורומים"></font></a>&nbsp;
<font size="-1" color="#000099" face="Arial">
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?forum=scoops1&amp;mark=838188&amp;az=previous_topic"><font size="-1" color="#000099" face="Arial"><img src="https://rotter.net/forum/Images/goprev.gif" border="0" title="אשכול קודם"></font></a>&nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?forum=scoops1&amp;mark=838188&amp;az=next_topic"><font size="-1" color="#000099" face="Arial"><img src="https://rotter.net/forum/Images/gonext.gif" border="0" title="אשכול הבא"></font></a></font> </td></tr></tbody></table>
<table border="0" width="100%" bgcolor="#000000" cellspacing="0" cellpadding="0">
<tbody><tr><td><table border="0" width="100%" cellspacing="0" cellpadding="3">
<tbody><tr bgcolor="#3293CD">
<th align="RIGHT" valign="BOTTOM">
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi"><font face="Arial" color="#FFFFFF" size="2">קבוצות דיון</font></a>
<img src="https://rotter.net/forum/Images/dir.gif">
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=list&amp;forum=scoops1"><font face="Arial" color="#FFFFFF" size="2">סקופים</font></a>
<img src="https://rotter.net/forum/Images/dir.gif"> <font face="Arial" color="#FFFFFF" size="2">נושא #838188</font>
</th><th align="left" valign="BOTTOM" bgcolor="#3293CD" colspan="5" width="50%">
<font face="Arial" color="White" size="2">מנהל</font><img src="https://rotter.net/forum/Images/manager_icon.gif">&nbsp;&nbsp;&nbsp;
<font face="Arial" color="White" size="2">סגן המנהל</font><img src="https://rotter.net/forum/Images/moderator_icon.gif">&nbsp;&nbsp;&nbsp;
<font face="Arial" color="White" size="2">מפקח</font><img src="https://rotter.net/forum/Images/supervisor_icon.gif">&nbsp;&nbsp;
<font face="Arial" color="White" size="2">עיתונאי מקוון</font><img src="https://rotter.net/forum/Images/report_iconx.gif">&nbsp;&nbsp;&nbsp;
<font face="Arial" color="White" size="2">צל"ש</font><img src="https://rotter.net/forum/Images/team_iconx.gif">&nbsp;&nbsp;
</th></tr>
</tbody></table><table> </table><table border="0" width="100%" cellspacing="1" cellpadding="3">

<tbody><tr><td align="RIGHT" bgcolor="71B7E6">
<font size="-1" face="Arial" color="black">
אשכול מספר <a href="#">838188</a>
</font></td>
<td align="LEFT" bgcolor="71B7E6"><input class="blue" type="button" value="ראה תגובות בסדר כרונולוגי" onclick="location= ('https://rotter.net/forum/byorder.php?thread=838188');">&nbsp;&nbsp;<input class="blue" type="button" value="ניהול" onclick="location= ('https://rotter.net/forum/scoops1/838188.shtml#manage');">&nbsp;&nbsp;
<input class="blue" type="button" value=" ראה תגובה ראשונה" onclick="location= ('https://rotter.net/forum/scoops1/838188.shtml#1');">&nbsp;&nbsp;
<input class="blue" type="button" value=" ראה תגובה אחרונה (22)" onclick="location= ('https://rotter.net/forum/scoops1/838188.shtml#22');"></td>
</tr></tbody></table>
</td></tr></tbody></table>

<div id="div-gpt-ad-1418707187380-0" style="text-align: right; padding-right: 10px; margin: 10px; min-height:90px;" data-google-query-id="CKbyhKmkuIQDFepJQQIdBloG0A">
<div id="google_ads_iframe_/69589285/Threads_Top_Leaderboard_0__container__" style="border: 0pt none;"><iframe id="google_ads_iframe_/69589285/Threads_Top_Leaderboard_0" name="google_ads_iframe_/69589285/Threads_Top_Leaderboard_0" title="3rd party ad content" width="970" height="90" scrolling="no" marginwidth="0" marginheight="0" frameborder="0" aria-label="Advertisement" tabindex="0" allow="attribution-reporting" style="border: 0px; vertical-align: bottom;" data-load-complete="true" data-google-container-id="2"></iframe></div>
</div>
<table border="0" width="100%" cellpadding="1" cellspacing="0">
<tbody><tr><td><table border="0" width="100%" cellpadding="1" cellspacing="0" bgcolor="#000000">
<tbody><tr><td><table border="0" width="100%" cellpadding="3" cellspacing="0">
<tbody><tr bgcolor="#eeeeee"><td align="RIGHT" valign="top" nowrap="" width="50%" rowspan="2">
<font size="2" face="Arial" color="#000099">
<a name="0"><b>חיפוי אוירי</b></a>
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=%E7%E9%F4%E5%E9%20%E0%E5%E9%F8%E9"><img src="https://rotter.net/forum/Images/1_star.gif" border="0" alt="לחץ כאן להצגת דירוג המשתמש"></a><br>
<font size="1">חבר מתאריך 21.3.23</font><br>
<font size="1">1070 הודעות</font>, <font size="1" color="006633"> <b>10 מדרגים</b></font>, <font color="red" size="1"> <b>8 נקודות. &nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=חיפוי אוירי"><font color="000099" size="-1"><u>ראה משוב</u></font></a></b></font></font></td><td align="LEFT" valign="top" width="50%" nowrap=""><font size="1" face="Arial" color="#000099"><font color="black">יום שני י' 'באדר א תשפ''ד &nbsp;&nbsp;</font>
<font color="red">22:23</font> &nbsp; <font color="#eeeeee" size="1"> </font>19.02.24</font>&nbsp;&nbsp;&nbsp;</td></tr>
<tr bgcolor="#eeeeee"><td align="LEFT">
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=send_mesg&amp;userid=%E7%E9%F4%E5%E9%20%E0%E5%E9%F8%E9" target="_new"><img src="https://rotter.net/forum/Images/mesg.gif" border="0" title="לחץ לשליחת הודעה פרטית למשתמש"></a> <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=user_profiles&amp;user=%E7%E9%F4%E5%E9%20%E0%E5%E9%F8%E9"><img src="https://rotter.net/forum/Images/profile_small.gif" title="לחץ להצגת פרופיל המשתמש" border="0"></a><a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=add_buddy&amp;user=%E7%E9%F4%E5%E9%20%E0%E5%E9%F8%E9&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/mesg_add_buddy.gif" title="לחץ להוספת משתמש זה לרשימת החברים שלך" border="0"></a>
<a href="javascript:makeRemote('https://rotter.net/cgi-bin/forum/Lib/view_user_kartis.pl?user=חיפוי אוירי')">
<img src="https://rotter.net/forum/Images/kartis.gif" border="0" alt="כרטיס אישי"></a>&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_ip&amp;forum=scoops1&amp;om=838188&amp;omm=0&amp;name=חיפוי אוירי"><img src="https://rotter.net/forum/Images/ip.gif" border="0" alt="עבור לצ'אט"></a>
&nbsp;</td></tr>
<tr bgcolor="#FDFDFD"><td colspan="2" width="100%">
<h1 class="text16b" style="margin:0px; padding-right:10px;">ראש מכון INSS אלוף במיל' תמיר היימן שיתף את ''פורום ראשי החברות'' במידע צבאי סודי האסור לפרסום&nbsp;&nbsp;</h1>
&nbsp;<br>
<font size="2" face="Arial" color="#000099">
<table border="0" cellpadding="5" cellspacing="0" width="70%" style="display: inline-table;">
<tbody><tr><td valign="top" width="50" nowrap="">&nbsp;&nbsp;</td><td valign="top" width="100%">
<font size="2" face="Arial" color="#000099"><font class="text15"><b> <br> ראש מכון INSS אלוף במיל' תמיר היימן שיתף את "פורום ראשי החברות" במידע צבאי סודי האסור לפרסום<p>
<script src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
</p><div id="twtcon-1759673867713290463"><div class="twitter-tweet twitter-tweet-rendered" style="display: flex; max-width: 550px; width: 100%; margin-top: 10px; margin-bottom: 10px;"><iframe id="twitter-widget-0" scrolling="no" frameborder="0" allowtransparency="true" allowfullscreen="true" class="" style="position: static; visibility: visible; width: 550px; height: 873px; display: block; flex-grow: 1;" title="X Post" src="https://platform.twitter.com/embed/Tweet.html?dnt=false&amp;embedId=twitter-widget-0&amp;features=eyJ0ZndfdGltZWxpbmVfbGlzdCI6eyJidWNrZXQiOltdLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2ZvbGxvd2VyX2NvdW50X3N1bnNldCI6eyJidWNrZXQiOnRydWUsInZlcnNpb24iOm51bGx9LCJ0ZndfdHdlZXRfZWRpdF9iYWNrZW5kIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19yZWZzcmNfc2Vzc2lvbiI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfZm9zbnJfc29mdF9pbnRlcnZlbnRpb25zX2VuYWJsZWQiOnsiYnVja2V0Ijoib24iLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X21peGVkX21lZGlhXzE1ODk3Ijp7ImJ1Y2tldCI6InRyZWF0bWVudCIsInZlcnNpb24iOm51bGx9LCJ0ZndfZXhwZXJpbWVudHNfY29va2llX2V4cGlyYXRpb24iOnsiYnVja2V0IjoxMjA5NjAwLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X3Nob3dfYmlyZHdhdGNoX3Bpdm90c19lbmFibGVkIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19kdXBsaWNhdGVfc2NyaWJlc190b19zZXR0aW5ncyI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfdXNlX3Byb2ZpbGVfaW1hZ2Vfc2hhcGVfZW5hYmxlZCI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfdmlkZW9faGxzX2R5bmFtaWNfbWFuaWZlc3RzXzE1MDgyIjp7ImJ1Y2tldCI6InRydWVfYml0cmF0ZSIsInZlcnNpb24iOm51bGx9LCJ0ZndfbGVnYWN5X3RpbWVsaW5lX3N1bnNldCI6eyJidWNrZXQiOnRydWUsInZlcnNpb24iOm51bGx9LCJ0ZndfdHdlZXRfZWRpdF9mcm9udGVuZCI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9fQ%3D%3D&amp;frame=false&amp;hideCard=false&amp;hideThread=false&amp;id=1759673867713290463&amp;lang=en&amp;origin=https%3A%2F%2Frotter.net%2Fforum%2Fscoops1%2F838188.shtml&amp;sessionId=7f738e2a149ec88904d9e029a15dde94aa135847&amp;siteScreenName=rotternet&amp;theme=light&amp;widgetsVersion=2615f7e52b7e0%3A1702314776716&amp;width=550px" data-tweet-id="1759673867713290463"></iframe></div></div>
<script>
		twttr.widgets.createTweet(
		  '1759673867713290463',
		  document.getElementById('twtcon-1759673867713290463'),
		  {
		    theme: 'white'
		  }
		);
		</script>
<a href="https://twitter.com/Torat_IDF/status/1759673867713290463?t=5rIhNtwy6Xi1Mahu7VlqeA&amp;s=19" target="new"><font color="red">לחץ כאן לצפיה דרך טוויטר</font></a><br>
</b><p>

</p><div id="div-gpt-ad-1562605590809-0" style="margin: 10px 0px; height: 280px;" data-google-query-id="CJr2hamkuIQDFSNUpAQdU88EBA">
<div id="google_ads_iframe_/69589285/Threads_Below_Main_Content_0__container__" style="border: 0pt none;"><iframe id="google_ads_iframe_/69589285/Threads_Below_Main_Content_0" name="google_ads_iframe_/69589285/Threads_Below_Main_Content_0" title="3rd party ad content" width="336" height="280" scrolling="no" marginwidth="0" marginheight="0" frameborder="0" aria-label="Advertisement" tabindex="0" allow="attribution-reporting" style="border: 0px; vertical-align: bottom;" data-load-complete="true" data-google-container-id="3"></iframe></div>
</div> <br> <p></p></font></font></td></tr></tbody></table>
<br></font></td></tr><tr bgcolor="#eeeeee"><td align="right" valign="top" nowrap="">
<font size="1" face="Arial" color="#000099">
&nbsp; <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=edit&amp;forum=scoops1&amp;om=838188&amp;omm=0"><img src="https://rotter.net/forum/Images/edit.gif" border="0"></a> &nbsp; <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=up&amp;forum=scoops1&amp;om=838188&amp;omm=0"><img src="https://rotter.net/forum/Images/up.gif" border="0"></a> &nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=post&amp;forum=scoops1&amp;om=838188&amp;omm=0"><font size="1" face="Arial" color="#000099"><img src="https://rotter.net/forum/Images/response.gif" border="0"></font></a><font size="1" face="Arial" color="#000099"> &nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=read_count&amp;om=838188&amp;forum=scoops1&amp;viewmode=all"><img src="https://rotter.net/forum/Images/all.gif" border="0"></a></font><font size="1">&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=list&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/gobk.gif" border="0"></a>
&nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?quote=not_empty&amp;az=post&amp;forum=scoops1&amp;om=838188&amp;omm=0"><font size="1" face="Arial" color="#000099"> תגובה עם ציטוט </font></a>&nbsp; | <a href="javascript:updatePropertyDisplay('0')"><font face="Arial" color="#000099">תגובה מהירה</font></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=up_news&amp;forum=scoops1&amp;om=838188&amp;omm=0">(ניהול: למבזק)</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;</font></font></td>
<td align="left" nowrap="">
<font size="1" face="Arial" color="#000099"><br>
מכתב זה והנלווה אליו, על אחריות ועל דעת הכותב בלבד
</font></td></tr></tbody></table></td></tr></tbody></table>
</td></tr></tbody></table>
<br><div id="taboola-below-article-thumbnails" style="min-height: 280px;" class=" trc_related_container trc_spotlight_widget tbl-rtl trc_elastic trc_elastic_alternating-thumbnails-a " data-placement-name="Below Article Thumbnails" observeid="tbl-observe-45"><div class="trc_rbox_container"><div><div id="trc_wrapper_73692" class="trc_rbox alternating-thumbnails-a trc-content-sponsored " style="overflow: hidden; display: block;"><div id="trc_header_73692" class="trc_rbox_header trc_rbox_border_elm"><div class="trc_header_ext"><div class="logoDiv link-attribution "><a class="trc_desktop_attribution_link trc_attribution_position_top" rel="nofollow sponsored noopener" href="https://popup.taboola.com/he/?template=colorbox&amp;utm_source=rotter&amp;utm_medium=referral&amp;utm_content=alternating-thumbnails-a:Below Article Thumbnails:" target="_blank"><span>by Taboola</span></a><a class="trc_mobile_attribution_link trc_attribution_position_top" rel="nofollow sponsored noopener" href="https://popup.taboola.com/he/?template=colorbox&amp;utm_source=rotter&amp;utm_medium=referral&amp;utm_content=alternating-thumbnails-a:Below Article Thumbnails:" target="_blank"><span>by Taboola</span></a></div><div class="logoDiv link-disclosure  attribution-disclosure-link-sponsored"><a class="trc_desktop_disclosure_link trc_attribution_position_top" rel="nofollow sponsored noopener" href="https://popup.taboola.com/he/?template=colorbox&amp;utm_source=rotter&amp;utm_medium=referral&amp;utm_content=alternating-thumbnails-a:Below Article Thumbnails:" target="_blank"><span>Sponsored Links</span></a><a class="trc_mobile_disclosure_link trc_attribution_position_top" rel="nofollow sponsored noopener" href="https://popup.taboola.com/he/?template=colorbox&amp;utm_source=rotter&amp;utm_medium=referral&amp;utm_content=alternating-thumbnails-a:Below Article Thumbnails:" target="_blank"><span>Sponsored Links</span></a></div><div class="logoDiv link-disclosure  attribution-disclosure-link-hybrid"><a class="trc_desktop_disclosure_link trc_attribution_position_top" rel="nofollow sponsored noopener" href="https://popup.taboola.com/he/?template=colorbox&amp;utm_source=rotter&amp;utm_medium=referral&amp;utm_content=alternating-thumbnails-a:Below Article Thumbnails:" target="_blank"><span>Promoted Links</span></a><a class="trc_mobile_disclosure_link trc_attribution_position_top" rel="nofollow sponsored noopener" href="https://popup.taboola.com/he/?template=colorbox&amp;utm_source=rotter&amp;utm_medium=referral&amp;utm_content=alternating-thumbnails-a:Below Article Thumbnails:" target="_blank"><span>Promoted Links</span></a></div></div><span class="trc_rbox_header_span">כתבות נוספות</span></div><div id="outer_73692" class="trc_rbox_outer"><div id="rbox-t2m" class="trc_rbox_div trc_rbox_border_elm"><div id="internal_trc_73692"><div observeid="tbl-observe-41 tbl-observe-46" data-item-id="~~V1~~8442874144271480036~~Om98W8lixmu-cAHFl2CkaN-dFXq-vdNsvJvAccl_07mKvh0UWYZCeE-99c3ugGgwObk2vzlLZSPU_Pg-9BQ93RAHo1omPmWJk3RENxKEOp5q7ZH2C_U9wGtMuoAKo-fPHrd_yA2WaFPAOPp9ho8DfYoymyXauLZJFOwtSgTR0Kx6tr6ZkD5yyreI5APWn9Q35dhV8sDThzNayNb9SACfzhrYNLkG8VWSduqjsI3Dya-4ipVpRnaCWHnrcjEO67bTZAn7ZGWOTzySahaZ0NEEPw" data-item-title="Master AI Programming w/Python" data-item-thumb="https://tpc.googlesyndication.com/simgad/13948592993370812344/14763004658117789537" data-item-syndicated="true" class="videoCube trc_spotlight_item origin-default thumbnail_top syndicatedItem textItem videoCube_1_child trc-first-recommendation trc-spotlight-first-recommendation "><a attributionsrc="" title="Master AI Programming w/Python" href="https://www.googleadservices.com/pagead/aclk" rel="nofollow noopener sponsored" target="_blank" class=" item-thumbnail-href " slot="thumbnail"><div class="thumbBlock_holder"><span class="thumbBlock" style="background-image: none;"><iframe id="google_ad_frame" title="Advertisement" scrolling="no" frameborder="0" marginwidth="0" marginheight="0" width="100%" height="100%" onload="(function(){this.contentWindow.postMessage('https://googleads.g.doubleclick.net/pagead/anif?awbid_n=AKAmf-AsF1hcmC4KjVOIYMFWWvO4YQNje9rM630BwaKou7JuiVb_mgwx3UhK0mWi9CgD9CcT-iV_ozZjdFvAg2xvOBPK5GtxQ_Vh3CzWubQA7Nsi7-66Pr4Hs8xv2j8-qqjj6z7EWAmiFYXnq-wXYuH_QJ94CDuDa1oulsi-XFOvdR14Kd31zWu4tolR3Z-0sfYKhaAL15Rcj-vokI7JRAiiGP3PXuBo_e6bMDnNR6AgraR1nPLfQH9F2UG35NdOIq8se208jVGKFryH4fPkLQRRr4trMt-0Smnm4QfGmxEfGF4u-98EWvH9XDaik25vPpLwmEVHZFtfrFncp6MImnzs2ZhBaLDyu19ESDPWw_YQHXspM-yqdlV6LnTmI8B-SThpXGT58oorjv4O8IAkNxDKbt1KL2glY8QOA24p86umcl5tA7T702v26wmFdEkUwvH29-TMMUQlOnS4WK0iAjLkbS8T0IvpZMXWmbyd3S1lBH6l35qxyu5wm5xnk8QCJTH1XC8NvdeqvslwJtZe6Fqt52sUC8GVbh1uawx1V7vkCWykUO_hn9A4feSUyPC-pHq_bop4joqPX2EPhh5UWMh6P9-vPaGNiG7K5uHZ2tq2o2s6l6CCNc4z8UXLkZrVQYZNiVMF9QHPdBHHjA54ID8qrNdYve5jW9x0AQkuTy5K35wz0BiXiu68RGvj55Hp2HmrInYsn806uTqlw9fsj9OgMBru_7yKfLYbPF5VsEsteZi1a8J4Ae5-ZDCxbShblTbmOXGlLiW8AIoEiqHIjT_x14To7Hm8BkEO8p-rqDMplp3u61HfLrdbaHKxpFif2NCsao3O2agRIt5Bh-aYomg_oeOLVWX3SKVy6GOvWQMg-4Tr_t15DBqdnXbtdkSNW3uUxMSWin3AKte0cOdhfDxjL1FHkPDkZccAE4hVOtWH9HECAVMB_dD3Cgd4DBL5x8jsJL4dU1DFpFTy5fjQW0-1r6ww1VlTAWqd2IiJjnTp_V_uPYck-UuZffC0lJQWVnXYZB8VwTxrOma-hblu1dPggfM25R23iEy7LJ7E4OVsOpnEdrLsAqq4MDflY_HabZoX5v35fw4PlpVOpQEf3rqTJIn-r5XSrgoGMJkh-9xmKQBD9KudKtTTyGkO-KZoOKRxHZc51Z689eTAOKr3vxrMwa3pH6zOmOX3PbhmUwOVk6I_t6nnfN_Ezy6c7oYSvWTF-F2e_XOp66upDQbwiiY8-wjtLPfiq0blN0yQeVw8gDCTVahfGKpFqSPRzzPS5yk2Xvy-rH190qMUW-P6wa-0h5pkxOBq-h7RnF_rzDnktW76gbvk67adP-hBBPfIRD8AwC7-2FG0XIYkGCwQgagxXADdciUW5M0SntNJZ7NBWBF-U6DlsY06t4NYeVbfqDlel8-VRFv_k5-ShApsOcVGJIfD5P2G4-sijFrCFOGeP4MopnkgmWK-FXg9YHdY_x5SfQHXtM4uXT0VuaHVnV1eHFXjI3atoPVwAe-2KyxKHAifgMyh-IOsh828gpy4BAxvKxY0I_zPZkCqrWxHbwC2Rp3UxYE9nVP61TiMuOO4Ctof_hL3aTC2kFplClBA7q0nAYO7QkdDQXfPw3q_JB8WylRTUKrFJ5wnD3-BKT0iZQmiKBeBMqimUXMeMEjWww9IgMVohF_Tuv-8BvwBLRMtBsnda2I6Zv1kSxuZHTvBSBi_F-O2q59S2MwMr5WsksEmQqWont-CQoz7sJOnLA4HQ9KQ3qRTPyJeauVKudl-RiIdf8O7F6EK6VIxIYQDnWku0_Vg4PJxtWOZ-lU0l9mYjPM27p8o7EGP-W5MGMtbG1Cl0QUyjgHUc-eLcMKfy-mwXPvtrocBJLtoNlqMbdD9eIHPNUyu9GMmbntPJcH2phWBchQ3_p1xaoKG4Ss5TBTlQPVk77Rt8J4iaBn5Drkzwu3P74bRUXnQxkmFgEfzOFWv5Rnp_MuuM5OiG54a0eDePeyBOoha-SU2UNz5OH8g-5bpgx7MtbF3gFkpxkQ2xKumTuUpw7rs97Lo8MhLkmvppqWvP1jshZSuE1K_39Mq8xpnvgLNr1p099oZwtu6e4rLL9MHJbmuh_uxgtYq6Rstw7uS-yrq0QK5ztCq_kOHGgPx38K7qMFmRgCwz0d0zkfmodjekB49qRJehRhYO_A8EVCn1o1YuboMv2aFr27CZcM2thYuUBd5T1c-LKWhbqj2mgi8VPu0l3ba6-0YO9NIyhzPFrWHFdnhYMA04u4MDtNg1JSovh5znSp7jkKaERfHCjE9KnXlNIFDv3tbrw2RVKsS89dPcPyS74ubTb07CBo_wPG_Gci5n6AQJ_AmhraRxvSQJtZs3tRQjdySsBXNvJh3OmpPp2nmjFnUt3_icrU6AsOV89FpcyPcrDGoMcsFhCJMAcWYEqmt_lLtrQNuVk3deJ2QdwLkRF_CkooswU6PtxZS3I3pe77kdCg1Ajd9PRFPOSw&amp;img_url=https://tpc.googlesyndication.com/simgad/13948592993370812344/14763004658117789537&amp;clkurl=https://www.googleadservices.com/pagead/aclk%3Fsa%3DL%26ai%3DCv-yxhb_TZfi1LeaP9fgPkYKKiAWo0vy3cuKMudO8ENKbraSOGxABIKHHp0lg-dryg5QQoAGk6pHNA8gBBqgDAcgDywSqBLgCT9BiyvRVOLNpowJz1kyDSI6nEDsL5jIV0tqzYnKNpAUu-edfYs4c4c536YyHrRUNsWxlKzQc_qZgY_ouCNX3l2OOX0uFUvCW0ymMpB2uqO6BOSYAasaSTMwXc87P-Gbs-TKaWeWG-omIifDkxu3T-WgcdgpOk_P5SrDoZd8mAziXPKXs7SuTKdx45OFUt3akgEpsFR5m52dspWHkWh5oxnzuxDFmFt1IPio_Jlku5hq6Q70t1JFJpd5PURY_vjR-2mGb8uayHcfbnVD1SNtV7_Kgh4jQ9MsQXPUzrvi-MHDBaIttr_mkC6Tep7_B2Yo7wnELaO_nGs9eXTgiwJpNJmVAhCMw5aUqAYKzyngas_ybMHunlWSBCht8Zm6wPWYhJTe7CxdJ2V23vSPg8sdx-I2FHxN9OYCWwATn5r--_AOIBfbjlZtBoAY3gAfEle4yqAfZtrECqAeOzhuoB5PYG6gH7paxAqgH_p6xAqgHr76xAqgH1ckbqAemvhuoB5oGqAfz0RuoB5bYG6gHqpuxAqgHg62xAqgH4L2xAqgH_56xAqgH35-xAqgHyqmxAqgH66WxAqgH6rGxAqgHmbWxAqgHvrexAtgHAfIHBBC_7SHSCCQIgGEQARhdMgKKAjoJgECAwICAgIAISL39wTpY6ueZqaS4hAPyCA5iaWRkZXItMTMxMTM0NrEJbCWYil1l_SeACgSYCwHICwHaDBAKChDgh8L21rPMgjoSAgEDqg0CSUzIDQHYEwyIFBDQFQGYFgH4FgGAFwE%26ase%3D2%26gclid%3DEAIaIQobChMIuIyaqaS4hAMV5kcdCR0RgQJREAEYASAAEgIuJvD_BwE%26num%3D1%26pr%3D76:ZdO_hgAAB9AGPAheA0Jy8bhQWX8p49svKP-4Jg==%26cid%3DCAQSKQAvHhf_9NJRx1UmOTTN--91CpHu6OjKM4QL6YZHqLw6s-Tp4aUeW4-8GAE%26sig%3DAOD64_3jwBCDUx-h280fl65oz4VhJ-ZRKQ%26client%3Dca-pub-7398773146227056%26adurl%3Dhttps://www.udacity.com/course/ai-programming-python-nanodegree--nd089%253Fcoupon%253DFEB40%2526utm_source%253Dgdn%2526utm_medium%253Dads_r%2526utm_campaign%253D17505284598_c_individuals%2526utm_term%253D136496280423%2526utm_keyword%253D_%2526utm_source%253Dgdn%2526utm_medium%253Dads_r%2526utm_campaign%253D17505284598_c_individuals%2526utm_term%253D136496280423%2526utm_keyword%253D_&amp;click=https%3A%2F%2Ftrc.taboola.com%2Frotter%2Flog%2F3%2Fclick%3Fpi%3D%252Fforum%252Fscoops1%252F838188.shtml%26ri%3D5dd942fae0ec44dcf9935aafeb3d3e4b%26sd%3Dv2_b36f72b7c55d1e0d83d45343419c35d8_4ab5dcaf-13dc-4a3a-8abc-828405254e1f-tuct98cb47b_1708373211_1708375941_CIi3jgYQvO0_GK7DkJncMSAJKAMwZjiI6wpArpAQSNbS2ANQ____________AVgAYOgOaKuno9LrgLWnoQFwAQ%26ui%3D4ab5dcaf-13dc-4a3a-8abc-828405254e1f-tuct98cb47b%26it%3Dtext%26ii%3D~~V1~~8442874144271480036~~Om98W8lixmu-cAHFl2CkaN-dFXq-vdNsvJvAccl_07mKvh0UWYZCeE-99c3ugGgwObk2vzlLZSPU_Pg-9BQ93RAHo1omPmWJk3RENxKEOp5q7ZH2C_U9wGtMuoAKo-fPHrd_yA2WaFPAOPp9ho8DfYoymyXauLZJFOwtSgTR0Kx6tr6ZkD5yyreI5APWn9Q35dhV8sDThzNayNb9SACfzhrYNLkG8VWSduqjsI3Dya-4ipVpRnaCWHnrcjEO67bTZAn7ZGWOTzySahaZ0NEEPw%26pt%3Dtext%26li%3Drbox-t2m%26sig%3Df41e66fae8dfe5884efdd88cc597a4481435cbb13e54%26vi%3D1708375941550%26p%3Dgoogle-gdn%26r%3D50%26tvi2%3D-2%26tvi50%3D9864%26lti%3Ddeflated%26ppb%3DCKEG%26cpb%3DEhIyMDI0MDIxOS02LVJFTEVBU0UYnA4gnP__________ASoWdGFib29sYXN5bmRpY2F0aW9uLmNvbTIIdHJjMDAyMjI4gAJAiOsKSK6QEFDW0tgDWP___________wFjCKo1EIhNGDJkYwj-__________8BEP7__________wEYAmRjCN7__________wEQ3v__________ARgiZGMI1xYQ1R8YI2RjCKohEKYtGAdkYwjSAxDgBhgIZGMIlhQQmRwYGGRjCO8DEIkHGAlkYwj_RhCNZhgdZGMI9BQQnh0YH2RjCKQnEIM1GC9kcgwqDW_CYVEhAHEv6gR4AYABAogBh7ShqQKQARyYAYvEkJncMQ%26redir%3D&amp;adk=3418305179&amp;ikey=1407858807','https://googleads.g.doubleclick.net')}).call(this);" src="https://googleads.g.doubleclick.net/pagead/render_post_image_v1.html"></iframe></span><div class="videoCube_aspect"></div></div></a><a attributionsrc="" title="Master AI Programming w/Python" href="https://www.googleadservices.com/pagead/aclk" rel="nofollow noopener sponsored" target="_blank" class=" item-label-href "><span class="video-label-box trc-main-label "><span class="video-label video-title trc_ellipsis " slot="title" style="-webkit-line-clamp: 1;">Master AI Programming w/Python</span><span class="branding" slot="branding">Udacity</span></span></a></div><div observeid="tbl-observe-42 tbl-observe-47" data-item-id="~~V1~~2623629896564712105~~lR5p4d5TdDWoLA8Q59oVDsaAIBZsmyqbLTjFcX6jzeJyNpbgedRdYuhjTdtdbeHkBUfj1pcX-xHl9rIF6cHKJgHKe0kDJoZdBa1KfDiOxrXsV8UzRUgEA234HoxCZVWobwucVtNjB2V5CX0gCP-xM6YrUxfsxaffgxnLdeUSfQM" data-item-title="אם יש לכם עכבר, המשחק הזה ישאיר אתכם ערים כל הלילה. חינם." data-item-thumb="http://cdn.taboola.com/libtrc/static/thumbnails/ea9237c7b37b6922784cef6d530bdfe4.jpg" data-item-syndicated="true" class="videoCube trc_spotlight_item origin-default thumbnail_top syndicatedItem textItem videoCube_2_child trc_excludable "><a attributionsrc="" title="אם יש לכם עכבר, המשחק הזה ישאיר אתכם ערים כל הלילה. חינם." href="https://www.combatsiege.com/" rel="nofollow noopener sponsored" target="_blank" class=" item-thumbnail-href " slot="thumbnail"><div class="thumbBlock_holder"><span class="thumbBlock motion-ads-wrapper " style="background-image: url(&quot;https://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_auto%2Ch_245%2Cw_440%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/http%3A//cdn.taboola.com/libtrc/static/thumbnails/ea9237c7b37b6922784cef6d530bdfe4.jpg&quot;);"><span class="thumbnail-overlay"></span><span class="branding">Combat Siege Game</span><span class="static-text top-right"></span><div class="motion-ads-container is-playing "><video preload="auto" loop="" muted="" playsinline="" autoplay="" src="https://videos.taboola.com/taboola/video/fetch/q_auto:low/https%3A%2F%2Fcdn.taboola.com%2Flibtrc%2Fstatic%2Fvideo%2Ft_PERFORMANCE_VIDEO_OPTIMIZATION_1%2Fh_400%2Cc_scale%2Fv1681904074%2Fzm8joys1ywnxoemszvur.mp4" style="visibility: visible;"></video></div></span><div class="videoCube_aspect"></div></div></a><a attributionsrc="" title="אם יש לכם עכבר, המשחק הזה ישאיר אתכם ערים כל הלילה. חינם." href="https://www.combatsiege.com/" rel="nofollow noopener sponsored" target="_blank" class=" item-label-href "><span class="video-label-box trc-main-label "><span class="video-label video-title trc_ellipsis " slot="title" style="-webkit-line-clamp: 2;">אם יש לכם עכבר, המשחק הזה ישאיר אתכם ערים כל הלילה. חינם.</span><span class="branding" slot="branding">Combat Siege Game</span></span></a><div class=" trc_user_exclude_btn " title="Remove this item"></div><div class=" trc_exclude_overlay trc_fade "></div><div class=" trc_undo_btn ">Undo</div></div><div observeid="tbl-observe-43 tbl-observe-48" data-item-id="~~V1~~992590847226455591~~1jxBviix08I5wZ8qUzPM3ZN-i1RDWKkCcSeOK1fz8ol9_9IWyVTZYEw3zPc60dwzHu_TYvngZ3fIkOCpr71_kGX2zx8CgVUVkHH9GQANp1eKPTbzaya6tn1yEoEtV0UxMDTF1-cnV5W03PGgg96bm7O6Jnq0pylfdD-_sdIN5nWaPD6l5ASRS-fGo4DXal0ZJqkFtfkiuP2J1urNpQRZUg" data-item-title="אם יש לכם עכבר אתם חייבים לשחק את זה. ללא התקנה, שחקו בחינם." data-item-thumb="http://cdn.taboola.com/libtrc/static/thumbnails/27c7c697921798646fb1259dd91740ba.jpg" data-item-syndicated="true" class="videoCube trc_spotlight_item origin-default thumbnail_top syndicatedItem textItem videoCube_3_child trc_excludable "><a attributionsrc="" title="אם יש לכם עכבר אתם חייבים לשחק את זה. ללא התקנה, שחקו בחינם." href="https://navy.quest/" rel="nofollow noopener sponsored" target="_blank" class=" item-thumbnail-href " slot="thumbnail"><div class="thumbBlock_holder"><span class="thumbBlock motion-ads-wrapper " style="background-image: url(&quot;https://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_auto%2Ch_245%2Cw_440%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/http%3A//cdn.taboola.com/libtrc/static/thumbnails/27c7c697921798646fb1259dd91740ba.jpg&quot;);"><span class="thumbnail-overlay"></span><span class="branding">Navy.Quest Game</span><span class="static-text top-right"></span><div class="motion-ads-container is-playing "><video preload="auto" loop="" muted="" playsinline="" autoplay="" src="https://videos.taboola.com/taboola/video/fetch/q_auto:low/https%3A%2F%2Fcdn.taboola.com%2Flibtrc%2Fstatic%2Fvideo%2Fv1695030125%2Ffkhx2ilm98wztbshvdgd.mp4" style="visibility: visible;"></video></div></span><div class="videoCube_aspect"></div></div></a><a attributionsrc="" title="אם יש לכם עכבר אתם חייבים לשחק את זה. ללא התקנה, שחקו בחינם." href="https://navy.quest/" rel="nofollow noopener sponsored" target="_blank" class=" item-label-href "><span class="video-label-box trc-main-label "><span class="video-label video-title trc_ellipsis " slot="title" style="-webkit-line-clamp: 2;">אם יש לכם עכבר אתם חייבים לשחק את זה. ללא התקנה, שחקו בחינם.</span><span class="branding" slot="branding">Navy.Quest Game</span></span></a><div class=" trc_user_exclude_btn " title="Remove this item"></div><div class=" trc_exclude_overlay trc_fade "></div><div class=" trc_undo_btn ">Undo</div></div><div observeid="tbl-observe-44 tbl-observe-49" data-item-id="~~V1~~-8847843054302397430~~wDVE9dBSthdVDCL3xCuKJkJCtFRKuwa9cLAjZztCfFbB6wGpPWu_F_-PRJzQTUkvBUfj1pcX-xHl9rIF6cHKJiCocIWOsi4129MgSY75WUpSLq-jiVS_QmkVncH2gTYvRvCU0ZOp_H_JfgCYLQCcEibPrgt_llpq1D_-dRcwIvgAfDEOQ8Eq8LowWsfWsllG" data-item-title="אריה התגרה בלביאה, צפו בתגובות שלה." data-item-thumb="http://cdn.taboola.com/libtrc/static/thumbnails/69603be959bee3abf20ca03027a46ca2.jpg" data-item-syndicated="true" class="videoCube trc_spotlight_item origin-default thumbnail_top syndicatedItem photoItem videoCube_4_child trc_excludable "><a attributionsrc="" title="אריה התגרה בלביאה, צפו בתגובות שלה." href="https://kingdomofmen.com/categories/il/lion-pair/" rel="nofollow noopener sponsored" target="_blank" class=" item-thumbnail-href " slot="thumbnail"><div class="thumbBlock_holder"><span class="thumbBlock" style="background-image: url(&quot;https://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_auto%2Ch_245%2Cw_440%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/http%3A//cdn.taboola.com/libtrc/static/thumbnails/69603be959bee3abf20ca03027a46ca2.jpg&quot;);"><span class="thumbnail-overlay"></span><span class="branding">Daily Rythm</span><span class="static-text top-right"></span></span><div class="videoCube_aspect"></div></div></a><a attributionsrc="" title="אריה התגרה בלביאה, צפו בתגובות שלה." href="https://kingdomofmen.com/categories/il/lion-pair/" rel="nofollow noopener sponsored" target="_blank" class="item-label-href video-cta-style non-feed-cta-item"><span class="video-label-box trc-main-label video-label-box-cta video-label-box-cta-non-ie"><span class="video-label video-title video-label-flex-cta-item trc_ellipsis " slot="title" style="-webkit-line-clamp: 1;">אריה התגרה בלביאה, צפו בתגובות שלה.</span><span class="branding video-branding-flex-cta-item" slot="branding">Daily Rythm</span><div class="video-cta-href"><button type="button" class="video-cta-button video-cta-style" style="border-color: rgb(0, 0, 0); font-weight: bold; font-family: Arial, Helvetica, sans-serif; color: rgb(0, 0, 0);">מידע נוסף</button></div></span></a><div class=" trc_user_exclude_btn " title="Remove this item"></div><div class=" trc_exclude_overlay trc_fade "></div><div class=" trc_undo_btn ">Undo</div></div></div></div></div><div class="trc_clearer"></div></div></div></div></div>
<script type="text/javascript">
	   window._taboola = window._taboola || [];
	   _taboola.push({
	     mode: 'alternating-thumbnails-a',
	     container: 'taboola-below-article-thumbnails',
	     placement: 'Below Article Thumbnails',
	     target_type: 'mix'
	   });
	 </script>
<br></font></center><font face="Arial" color="#000099" size="3">
<center>
<table border="0" width="100%" cellspacing="1" cellpadding="1">
<tbody><tr bgcolor="#eeeeee">
<th align="right" width="100%" nowrap=""><font size="-1" face="Arial" color="#000099">&nbsp;&nbsp;האשכול&nbsp;&nbsp;</font></th>
<th align="center" nowrap=""><font size="-1" face="Arial" color="#000099">&nbsp;&nbsp;מחבר&nbsp;&nbsp;</font></th>
<th align="center" nowrap=""><font size="-1" face="Arial" color="#000099">&nbsp;&nbsp;תאריך כתיבה&nbsp;&nbsp;</font></th>
<th align="center" nowrap=""><font size="-1" face="Arial" color="#000099">&nbsp;&nbsp;מספר&nbsp;&nbsp;</font></th>
</tr>
<tr bgcolor="#eeeeee">
<td align="RIGHT" width="100%" nowrap="">&nbsp;&nbsp;<img src="https://rotter.net/forum/Images/message.gif"><font size="2" face="Arial" color="#000099"><a href="#1"><font color="">לא נורמלי</font></a></font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">SWITCH</font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">19.02.24 <font size="1" face="Arial" color="red">22:24</font></font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">1</font></td>
</tr>
<tr bgcolor="#FDFDFD"><td nowrap="" align="RIGHT" width="100%">&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://rotter.net/forum/Images/reply_message.gif"> <font size="2" face="Arial" color="#000099"><a href="#6"><font color="">למי שמהצד הנכון הכל נורמלי ולגיטימי.</font></a></font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">מלאכת_מחשבת</font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">19.02.24 <font size="1" face="Arial" color="red">22:27</font></font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">6</font></td>
</tr>
<tr bgcolor="#eeeeee">
<td align="RIGHT" width="100%" nowrap="">&nbsp;&nbsp;<img src="https://rotter.net/forum/Images/message.gif"><font size="2" face="Arial" color="#000099"><a href="#2"><font color="">פרשנות עקומה כרגיל של ערוץ שטנה קיצוני שפוגע בצה''ל. כך סתם ירשמו את זה באתר הבית ? כנראה קיבל</font></a></font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">ZioNLight</font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">19.02.24 <font size="1" face="Arial" color="red">22:26</font></font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">2</font></td>
</tr>
<tr bgcolor="#FDFDFD"><td nowrap="" align="RIGHT" width="100%">&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://rotter.net/forum/Images/reply_message.gif"> <font size="2" face="Arial" color="#000099"><a href="#7"><font color="">איך פרשנות ? זה מופיע בפירוש במודעה של פורום ראשי החברות</font></a></font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">FactsOnly</font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">19.02.24 <font size="1" face="Arial" color="red">22:28</font></font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">7</font></td>
</tr>
<tr bgcolor="#eeeeee"><td nowrap="" align="RIGHT" width="100%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://rotter.net/forum/Images/reply_message.gif"> <font size="2" face="Arial" color="#000099"><a href="#9"><font color="">++1000</font></a></font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">totoloto</font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">19.02.24 <font size="1" face="Arial" color="red">22:29</font></font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">9</font></td>
</tr>
<tr bgcolor="#FDFDFD"><td nowrap="" align="RIGHT" width="100%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://rotter.net/forum/Images/reply_message.gif"> <font size="2" face="Arial" color="#000099"><a href="#10"><font color="">אתה מבין לאן הציוץ הזה מנסה להוביל אתכם. תעמולה קשקושית .</font></a></font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">ZioNLight</font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">19.02.24 <font size="1" face="Arial" color="red">22:29</font></font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">10</font></td>
</tr>
<tr bgcolor="#eeeeee"><td nowrap="" align="RIGHT" width="100%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://rotter.net/forum/Images/reply_message.gif"> <font size="2" face="Arial" color="#000099"><a href="#12"><font color="">מה תעמולה? זה קרה או לא קרה?</font></a></font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">Y to Y</font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">19.02.24 <font size="1" face="Arial" color="red">22:32</font></font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">12</font></td>
</tr>
<tr bgcolor="#FDFDFD"><td nowrap="" align="RIGHT" width="100%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://rotter.net/forum/Images/reply_message.gif"> <font size="2" face="Arial" color="#000099"><a href="#13"><font color="">'' אתכם''? ממש התיחסות ענינית</font></a></font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">FactsOnly</font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">19.02.24 <font size="1" face="Arial" color="red">22:32</font></font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">13</font></td>
</tr>
<tr bgcolor="#eeeeee"><td nowrap="" align="RIGHT" width="100%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://rotter.net/forum/Images/reply_message.gif"> <font size="2" face="Arial" color="#000099"><a href="#16"><font color="">מנסה להוביל אותנו למדינה מתוקנת בה שמירה על סודות צבאיים מחייבת את כולם!!!</font></a></font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">עבד לעם קדוש</font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">19.02.24 <font size="1" face="Arial" color="red">22:38</font></font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">16</font></td>
</tr>
<tr bgcolor="#FDFDFD"><td nowrap="" align="RIGHT" width="100%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://rotter.net/forum/Images/reply_message.gif"> <font size="2" face="Arial" color="#000099"><a href="#19"><font color="">לא שאני מתיימר לדעת למה התכוונו אבל..</font></a></font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">Cutting Edge</font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">19.02.24 <font size="1" face="Arial" color="red">22:43</font></font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">19</font></td>
</tr>
<tr bgcolor="#eeeeee"><td nowrap="" align="RIGHT" width="100%">&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://rotter.net/forum/Images/reply_message.gif"> <font size="2" face="Arial" color="#000099"><a href="#15"><font color="">+++ ראיתי מי הממליצים והבנתי באיזה עמותה עם רקע בטחוני מדובר</font></a></font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">עדי</font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">19.02.24 <font size="1" face="Arial" color="red">22:35</font></font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">15</font></td>
</tr>
<tr bgcolor="#FDFDFD">
<td align="RIGHT" width="100%" nowrap="">&nbsp;&nbsp;<img src="https://rotter.net/forum/Images/message.gif"><font size="2" face="Arial" color="#000099"><a href="#3"><font color="">ומדוע לאיש הזה יש מידע אקטואלי סודי ביותר?</font></a></font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">FactsOnly</font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">19.02.24 <font size="1" face="Arial" color="red">22:26</font></font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">3</font></td>
</tr>
<tr bgcolor="#eeeeee"><td nowrap="" align="RIGHT" width="100%">&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://rotter.net/forum/Images/reply_message.gif"> <font size="2" face="Arial" color="#000099"><a href="#8"><font color="">תשאל את גלנט</font></a></font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">מלול הגדול</font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">19.02.24 <font size="1" face="Arial" color="red">22:28</font></font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">8</font></td>
</tr>
<tr bgcolor="#FDFDFD"><td nowrap="" align="RIGHT" width="100%">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://rotter.net/forum/Images/reply_message.gif"> <font size="2" face="Arial" color="#000099"><a href="#11"><font color="">יוסי יהושוע כתב על כך:</font></a></font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">totoloto</font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">19.02.24 <font size="1" face="Arial" color="red">22:30</font></font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">11</font></td>
</tr>
<tr bgcolor="#eeeeee"><td nowrap="" align="RIGHT" width="100%">&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://rotter.net/forum/Images/reply_message.gif"> <font size="2" face="Arial" color="#000099"><a href="#20"><font color="">לפי פרסום של יוסי יהושוע מ27.10.23 היימן חבר הצוות ייעוץ אסטרטגי מצומצם שגלנט הקים לעצמו.</font></a></font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">חיפוי אוירי</font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">19.02.24 <font size="1" face="Arial" color="red">22:45</font></font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">20</font></td>
</tr>
<tr bgcolor="#FDFDFD">
<td align="RIGHT" width="100%" nowrap="">&nbsp;&nbsp;<img src="https://rotter.net/forum/Images/message.gif"><font size="2" face="Arial" color="#000099"><a href="#4"><font color="">מותר</font></a></font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">סמי הכבאי</font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">19.02.24 <font size="1" face="Arial" color="red">22:26</font></font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">4</font></td>
</tr>
<tr bgcolor="#eeeeee">
<td align="RIGHT" width="100%" nowrap="">&nbsp;&nbsp;<img src="https://rotter.net/forum/Images/message.gif"><font size="2" face="Arial" color="#000099"><a href="#5"><font color="">למעשה הinss הרדים את ישראל השאלה מאיזה מניעים ושיקולים זרים .</font></a></font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">פלומה</font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">19.02.24 <font size="1" face="Arial" color="red">22:27</font></font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">5</font></td>
</tr>
<tr bgcolor="#FDFDFD">
<td align="RIGHT" width="100%" nowrap="">&nbsp;&nbsp;<img src="https://rotter.net/forum/Images/message.gif"><font size="2" face="Arial" color="#000099"><a href="#14"><font color="">ממתי ישיבות סגורות זה רק חומרים סודיים ? ומי אמר שהוא חשף חומרים סודיים ? הערות לדעות שנאמרות בישיבות זה משהו שאסור ?</font></a></font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">עדי</font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">19.02.24 <font size="1" face="Arial" color="red">22:34</font></font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">14</font></td>
</tr>
<tr bgcolor="#eeeeee"><td nowrap="" align="RIGHT" width="100%">&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://rotter.net/forum/Images/reply_message.gif"> <font size="2" face="Arial" color="#000099"><a href="#18"><font color="">אז למה ההרצאה ''לא הותרה לפרסום''?</font></a></font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">פרה אדומה</font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">19.02.24 <font size="1" face="Arial" color="red">22:41</font></font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">18</font></td>
</tr>
<tr bgcolor="#FDFDFD">
<td align="RIGHT" width="100%" nowrap="">&nbsp;&nbsp;<img src="https://rotter.net/forum/Images/message.gif"><font size="2" face="Arial" color="#000099"><a href="#17"><font color="">שמאלני ?? אז מותר לו</font></a></font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">Idf</font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">19.02.24 <font size="1" face="Arial" color="red">22:39</font></font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">17</font></td>
</tr>
<tr bgcolor="#eeeeee">
<td align="RIGHT" width="100%" nowrap="">&nbsp;&nbsp;<img src="https://rotter.net/forum/Images/message.gif"><font size="2" face="Arial" color="#000099"><a href="#21"><font color="">מיד היועמ''שית מתפנה להורות על חקירה</font></a></font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">צללפון</font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">19.02.24 <font size="1" face="Arial" color="red">22:45</font></font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">21</font></td>
</tr>
<tr bgcolor="#FDFDFD"><td nowrap="" align="RIGHT" width="100%">&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://rotter.net/forum/Images/reply_message.gif"> <font size="2" face="Arial" color="#000099"><a href="#22"><font color="">אחרי גלעד קריב</font></a></font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">חיפוי אוירי</font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">19.02.24 <font size="1" face="Arial" color="red">22:47</font></font></td>
<td align="center" nowrap=""><font size="1" face="Arial" color="#000099">22</font></td>
</tr>
</tbody></table><br>
<script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>

<div align="right">
<div id="div-gpt-ad-1419150760906-0" style="width:970px; height:250px; margin: 10px 0px;" data-google-query-id="CO78oqmkuIQDFVmyJwId_WgBQQ">
<div id="google_ads_iframe_/69589285/Threads_Third_Leaderboard_0__container__" style="border: 0pt none;"><iframe id="google_ads_iframe_/69589285/Threads_Third_Leaderboard_0" name="google_ads_iframe_/69589285/Threads_Third_Leaderboard_0" title="3rd party ad content" width="970" height="250" scrolling="no" marginwidth="0" marginheight="0" frameborder="0" aria-label="Advertisement" tabindex="0" allow="attribution-reporting" style="border: 0px; vertical-align: bottom;" data-load-complete="true" data-google-container-id="4"></iframe></div>
</div>
</div>
<table border="0" width="100%" cellspacing="0" cellpadding="4">
<tbody><tr><td align="LEFT">
<font size="-1" color="#000099" face="Arial">
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi"><font size="-1" color="#000099" face="Arial"><img src="https://rotter.net/forum/Images/goloby.gif" border="0" title="לובי"></font></a>&nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=list&amp;forum=scoops1"><font size="-1" color="#000099" face="Arial"><img src="https://rotter.net/forum/Images/gobk.gif" border="0" title="לפורומים"></font></a>&nbsp;
<form id="reportthread" name="reportthread" method="post" action="https://rotter.net/cgi-bin/edit/report-luach-a.pl" style="display: inline;">
<input type="hidden" name="report" maxlength="50" value="111">
<input type="hidden" name="username" value="חיפוי אוירי">
<input type="hidden" name="linka" value="https://rotter.net/forum/scoops1/838188.shtml">
<input type="hidden" name="kotar" value="אחרי גלעד קריב">
<input type="hidden" name="forum" value="scoops1">
</form>
<a href="#" onclick="document.getElementById('reportthread').submit();"><font size="-1" color="#000099" face="Arial"><img src="https://rotter.net/forum/Images/reportthread.png" border="0" title="לפורומים"></font></a>&nbsp;
<font size="-1" color="#000099" face="Arial">
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?forum=scoops1&amp;mark=838188&amp;az=previous_topic"><font size="-1" color="#000099" face="Arial"><img src="https://rotter.net/forum/Images/goprev.gif" border="0" title="אשכול קודם"></font></a>&nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?forum=scoops1&amp;mark=838188&amp;az=next_topic"><font size="-1" color="#000099" face="Arial"><img src="https://rotter.net/forum/Images/gonext.gif" border="0" title="אשכול הבא"></font></a></font> </font></td></tr></tbody></table>
<div id="comments_wrap">
<table border="0" width="100%" cellpadding="1" cellspacing="0">
<tbody><tr><td><table border="0" width="100%" cellpadding="1" cellspacing="0" bgcolor="#000000">
<tbody><tr><td><table border="0" width="100%" cellpadding="3" cellspacing="0">
<tbody><tr bgcolor="#eeeeee"><td align="RIGHT" valign="top" nowrap="" width="50%" rowspan="2">
<font size="2" face="Arial" color="#000099">
<a name="1"><b>SWITCH</b></a>
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=SWITCH"><img src="https://rotter.net/forum/Images/5_star.gif" border="0" alt="לחץ כאן להצגת דירוג המשתמש"></a><br>
<font size="1">חבר מתאריך 11.9.19</font><br>
<font size="1">14836 הודעות</font>, <font size="1" color="006633"> <b>50 מדרגים</b></font>, <font color="red" size="1"> <b>94 נקודות. &nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=SWITCH"><font color="000099" size="-1"><u>ראה משוב</u></font></a></b></font></font></td><td align="LEFT" valign="top" width="50%" nowrap=""><font size="1" face="Arial" color="#000099"><font color="black">יום שני י' 'באדר א תשפ''ד &nbsp;&nbsp;</font>
<font color="red">22:24</font> &nbsp; <font color="#eeeeee" size="1"> </font>19.02.24</font>&nbsp;&nbsp;&nbsp;</td></tr>
<tr bgcolor="#eeeeee"><td align="LEFT">
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=send_mesg&amp;userid=SWITCH" target="_new"><img src="https://rotter.net/forum/Images/mesg.gif" border="0" title="לחץ לשליחת הודעה פרטית למשתמש"></a> <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=user_profiles&amp;user=SWITCH"><img src="https://rotter.net/forum/Images/profile_small.gif" title="לחץ להצגת פרופיל המשתמש" border="0"></a><a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=add_buddy&amp;user=SWITCH&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/mesg_add_buddy.gif" title="לחץ להוספת משתמש זה לרשימת החברים שלך" border="0"></a>
<a href="javascript:makeRemote('https://rotter.net/cgi-bin/forum/Lib/view_user_kartis.pl?user=SWITCH')">
<img src="https://rotter.net/forum/Images/kartis.gif" border="0" alt="כרטיס אישי"></a>&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_ip&amp;forum=scoops1&amp;om=838188&amp;omm=1&amp;name=SWITCH"><img src="https://rotter.net/forum/Images/ip.gif" border="0" alt="עבור לצ'אט"></a>
&nbsp;</td></tr>
<tr bgcolor="#FDFDFD"><td colspan="2" width="100%">
<font size="2" face="Arial" color="#000099">
&nbsp;&nbsp;<font class="text16b">1. לא נורמלי&nbsp;&nbsp;</font><br>
<font size="1" face="Arial" color="#000099"><a href="#0">בתגובה להודעה מספר 0</a></font><br>&nbsp;<br>
<table border="0" cellpadding="5" cellspacing="0" width="70%" style="display: inline-table;">
<tbody><tr><td valign="top" width="50" nowrap="">&nbsp;&nbsp;</td><td valign="top" width="100%">
<font size="2" face="Arial" color="#000099"><font class="text15"><b> <br> </b><p> <br> </p></font></font></td></tr></tbody></table>
<br></font></td></tr><tr bgcolor="#eeeeee"><td align="right" valign="top" nowrap="">
<font size="1" face="Arial" color="#000099">
&nbsp; <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=edit&amp;forum=scoops1&amp;om=838188&amp;omm=1"><img src="https://rotter.net/forum/Images/edit.gif" border="0"></a> &nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=post&amp;forum=scoops1&amp;om=838188&amp;omm=1"><font size="1" face="Arial" color="#000099"><img src="https://rotter.net/forum/Images/response.gif" border="0"></font></a><font size="1" face="Arial" color="#000099"> &nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=read_count&amp;om=838188&amp;forum=scoops1&amp;viewmode=all"><img src="https://rotter.net/forum/Images/all.gif" border="0"></a></font><font size="1">&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=list&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/gobk.gif" border="0"></a>
&nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?quote=not_empty&amp;az=post&amp;forum=scoops1&amp;om=838188&amp;omm=1"><font size="1" face="Arial" color="#000099"> תגובה עם ציטוט </font></a>&nbsp; | <a href="javascript:updatePropertyDisplay('1')"><font face="Arial" color="#000099">תגובה מהירה</font></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcadmin.cgi?az=admin_board_manager&amp;command=admin_remove_messages&amp;forum=scoops1&amp;thread_select=838188&amp;selected=1" onclick="return confirm('למחוק תגובה?')"><font size="1" face="Arial" color="#000099">(ניהול: מחק תגובה)</font></a></font></font></td>
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
<a name="6"><b>מלאכת_מחשבת</b></a>
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=%EE%EC%E0%EB%FA_%EE%E7%F9%E1%FA"><img src="https://rotter.net/forum/Images/5_star.gif" border="0" alt="לחץ כאן להצגת דירוג המשתמש"></a><br>
<font size="1">חבר מתאריך 22.2.21</font><br>
<font size="1">4329 הודעות</font>, <font size="1" color="006633"> <b>69 מדרגים</b></font>, <font color="red" size="1"> <b>131 נקודות. &nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=מלאכת_מחשבת"><font color="000099" size="-1"><u>ראה משוב</u></font></a></b></font></font></td><td align="LEFT" valign="top" width="50%" nowrap=""><font size="1" face="Arial" color="#000099"><font color="black">יום שני י' 'באדר א תשפ''ד &nbsp;&nbsp;</font>
<font color="red">22:27</font> &nbsp; <font color="#eeeeee" size="1"> </font>19.02.24</font>&nbsp;&nbsp;&nbsp;</td></tr>
<tr bgcolor="#eeeeee"><td align="LEFT">
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=send_mesg&amp;userid=%EE%EC%E0%EB%FA_%EE%E7%F9%E1%FA" target="_new"><img src="https://rotter.net/forum/Images/mesg.gif" border="0" title="לחץ לשליחת הודעה פרטית למשתמש"></a> <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=user_profiles&amp;user=%EE%EC%E0%EB%FA_%EE%E7%F9%E1%FA"><img src="https://rotter.net/forum/Images/profile_small.gif" title="לחץ להצגת פרופיל המשתמש" border="0"></a><a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=add_buddy&amp;user=%EE%EC%E0%EB%FA_%EE%E7%F9%E1%FA&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/mesg_add_buddy.gif" title="לחץ להוספת משתמש זה לרשימת החברים שלך" border="0"></a>
<a href="javascript:makeRemote('https://rotter.net/cgi-bin/forum/Lib/view_user_kartis.pl?user=מלאכת_מחשבת')">
<img src="https://rotter.net/forum/Images/kartis.gif" border="0" alt="כרטיס אישי"></a>&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_ip&amp;forum=scoops1&amp;om=838188&amp;omm=6&amp;name=מלאכת_מחשבת"><img src="https://rotter.net/forum/Images/ip.gif" border="0" alt="עבור לצ'אט"></a>
&nbsp;</td></tr>
<tr bgcolor="#FDFDFD"><td colspan="2" width="100%">
<font size="2" face="Arial" color="#000099">
&nbsp;&nbsp;<font class="text16b">6. למי שמהצד הנכון הכל נורמלי ולגיטימי.&nbsp;&nbsp;</font><br>
<font size="1" face="Arial" color="#000099"><a href="#1">בתגובה להודעה מספר 1</a></font><br>&nbsp;<br>
<table border="0" cellpadding="5" cellspacing="0" width="70%" style="display: inline-table;">
<tbody><tr><td valign="top" width="50" nowrap="">&nbsp;&nbsp;</td><td valign="top" width="100%">
<font size="2" face="Arial" color="#000099"><font class="text15"><b> <br> </b><p> <br> </p></font></font></td></tr></tbody></table>
<br></font></td></tr><tr bgcolor="#eeeeee"><td align="right" valign="top" nowrap="">
<font size="1" face="Arial" color="#000099">
&nbsp; <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=edit&amp;forum=scoops1&amp;om=838188&amp;omm=6"><img src="https://rotter.net/forum/Images/edit.gif" border="0"></a> &nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=post&amp;forum=scoops1&amp;om=838188&amp;omm=6"><font size="1" face="Arial" color="#000099"><img src="https://rotter.net/forum/Images/response.gif" border="0"></font></a><font size="1" face="Arial" color="#000099"> &nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=read_count&amp;om=838188&amp;forum=scoops1&amp;viewmode=all"><img src="https://rotter.net/forum/Images/all.gif" border="0"></a></font><font size="1">&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=list&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/gobk.gif" border="0"></a>
&nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?quote=not_empty&amp;az=post&amp;forum=scoops1&amp;om=838188&amp;omm=6"><font size="1" face="Arial" color="#000099"> תגובה עם ציטוט </font></a>&nbsp; | <a href="javascript:updatePropertyDisplay('6')"><font face="Arial" color="#000099">תגובה מהירה</font></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcadmin.cgi?az=admin_board_manager&amp;command=admin_remove_messages&amp;forum=scoops1&amp;thread_select=838188&amp;selected=6" onclick="return confirm('למחוק תגובה?')"><font size="1" face="Arial" color="#000099">(ניהול: מחק תגובה)</font></a></font></font></td>
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
<a name="2"><b>ZioNLight</b></a>
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=ZioNLight"><img src="https://rotter.net/forum/Images/5_star.gif" border="0" alt="לחץ כאן להצגת דירוג המשתמש"></a><br>
<font size="1">חבר מתאריך 22.4.16</font><br>
<font size="1">58270 הודעות</font>, <font size="1" color="006633"> <b>399 מדרגים</b></font>, <font color="red" size="1"> <b>426 נקודות. &nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=ZioNLight"><font color="000099" size="-1"><u>ראה משוב</u></font></a></b></font></font></td><td align="LEFT" valign="top" width="50%" nowrap=""><font size="1" face="Arial" color="#000099"><font color="black">יום שני י' 'באדר א תשפ''ד &nbsp;&nbsp;</font>
<font color="red">22:26</font> &nbsp; <font color="#eeeeee" size="1"> </font>19.02.24</font>&nbsp;&nbsp;&nbsp;</td></tr>
<tr bgcolor="#eeeeee"><td align="LEFT">
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=send_mesg&amp;userid=ZioNLight" target="_new"><img src="https://rotter.net/forum/Images/mesg.gif" border="0" title="לחץ לשליחת הודעה פרטית למשתמש"></a> <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=user_profiles&amp;user=ZioNLight"><img src="https://rotter.net/forum/Images/profile_small.gif" title="לחץ להצגת פרופיל המשתמש" border="0"></a><a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=add_buddy&amp;user=ZioNLight&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/mesg_add_buddy.gif" title="לחץ להוספת משתמש זה לרשימת החברים שלך" border="0"></a> <a href="https://twitter.com/ZioNLight1/with_replies"><img src="https://rotter.net/forum/Images/twitter.png" title="לחץ לצפייה בטוויטר של המשתמש" border="0"></a>
<a href="javascript:makeRemote('https://rotter.net/cgi-bin/forum/Lib/view_user_kartis.pl?user=ZioNLight')">
<img src="https://rotter.net/forum/Images/kartis.gif" border="0" alt="כרטיס אישי"></a>&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_ip&amp;forum=scoops1&amp;om=838188&amp;omm=2&amp;name=ZioNLight"><img src="https://rotter.net/forum/Images/ip.gif" border="0" alt="עבור לצ'אט"></a>
&nbsp;</td></tr>
<tr bgcolor="#FDFDFD"><td colspan="2" width="100%">
<font size="2" face="Arial" color="#000099">
&nbsp;&nbsp;<font class="text16b">2. פרשנות עקומה כרגיל של ערוץ שטנה קיצוני שפוגע בצה''ל. כך סתם ירשמו את זה באתר הבית ? כנראה קיבל&nbsp;&nbsp;</font><br>
<font size="1" face="Arial" color="#000099"><a href="#0">בתגובה להודעה מספר 0</a></font><br>&nbsp;<br>
<table border="0" cellpadding="5" cellspacing="0" width="70%" style="display: inline-table;">
<tbody><tr><td valign="top" width="50" nowrap="">&nbsp;&nbsp;</td><td valign="top" width="100%">
<font size="2" face="Arial" color="#000099"><font class="text15"><b> <br> אישור לספר דברים בפורום הזה . </b><p> <br> </p></font></font></td></tr></tbody></table>
<br></font></td></tr><tr bgcolor="#eeeeee"><td align="right" valign="top" nowrap="">
<font size="1" face="Arial" color="#000099">
&nbsp; <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=edit&amp;forum=scoops1&amp;om=838188&amp;omm=2"><img src="https://rotter.net/forum/Images/edit.gif" border="0"></a> &nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=post&amp;forum=scoops1&amp;om=838188&amp;omm=2"><font size="1" face="Arial" color="#000099"><img src="https://rotter.net/forum/Images/response.gif" border="0"></font></a><font size="1" face="Arial" color="#000099"> &nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=read_count&amp;om=838188&amp;forum=scoops1&amp;viewmode=all"><img src="https://rotter.net/forum/Images/all.gif" border="0"></a></font><font size="1">&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=list&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/gobk.gif" border="0"></a>
&nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?quote=not_empty&amp;az=post&amp;forum=scoops1&amp;om=838188&amp;omm=2"><font size="1" face="Arial" color="#000099"> תגובה עם ציטוט </font></a>&nbsp; | <a href="javascript:updatePropertyDisplay('2')"><font face="Arial" color="#000099">תגובה מהירה</font></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcadmin.cgi?az=admin_board_manager&amp;command=admin_remove_messages&amp;forum=scoops1&amp;thread_select=838188&amp;selected=2" onclick="return confirm('למחוק תגובה?')"><font size="1" face="Arial" color="#000099">(ניהול: מחק תגובה)</font></a></font></font></td>
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
<a name="7"><b>FactsOnly</b></a>
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=FactsOnly"><img src="https://rotter.net/forum/Images/3_star.gif" border="0" alt="לחץ כאן להצגת דירוג המשתמש"></a><br>
<font size="1">חבר מתאריך 15.12.19</font><br>
<font size="1">8113 הודעות</font>, <font size="1" color="006633"> <b>19 מדרגים</b></font>, <font color="red" size="1"> <b>28 נקודות. &nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=FactsOnly"><font color="000099" size="-1"><u>ראה משוב</u></font></a></b></font></font></td><td align="LEFT" valign="top" width="50%" nowrap=""><font size="1" face="Arial" color="#000099"><font color="black">יום שני י' 'באדר א תשפ''ד &nbsp;&nbsp;</font>
<font color="red">22:28</font> &nbsp; <font color="#eeeeee" size="1"> </font>19.02.24</font>&nbsp;&nbsp;&nbsp;</td></tr>
<tr bgcolor="#eeeeee"><td align="LEFT">
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=send_mesg&amp;userid=FactsOnly" target="_new"><img src="https://rotter.net/forum/Images/mesg.gif" border="0" title="לחץ לשליחת הודעה פרטית למשתמש"></a> <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=user_profiles&amp;user=FactsOnly"><img src="https://rotter.net/forum/Images/profile_small.gif" title="לחץ להצגת פרופיל המשתמש" border="0"></a><a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=add_buddy&amp;user=FactsOnly&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/mesg_add_buddy.gif" title="לחץ להוספת משתמש זה לרשימת החברים שלך" border="0"></a>
<a href="javascript:makeRemote('https://rotter.net/cgi-bin/forum/Lib/view_user_kartis.pl?user=FactsOnly')">
<img src="https://rotter.net/forum/Images/kartis.gif" border="0" alt="כרטיס אישי"></a>&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_ip&amp;forum=scoops1&amp;om=838188&amp;omm=7&amp;name=FactsOnly"><img src="https://rotter.net/forum/Images/ip.gif" border="0" alt="עבור לצ'אט"></a>
&nbsp;</td></tr>
<tr bgcolor="#FDFDFD"><td colspan="2" width="100%">
<font size="2" face="Arial" color="#000099">
&nbsp;&nbsp;<font class="text16b">7. איך פרשנות ? זה מופיע בפירוש במודעה של פורום ראשי החברות&nbsp;&nbsp;</font><br>
<font size="1" face="Arial" color="#000099"><a href="#2">בתגובה להודעה מספר 2</a></font><br>&nbsp;<br>
<table border="0" cellpadding="5" cellspacing="0" width="70%" style="display: inline-table;">
<tbody><tr><td valign="top" width="50" nowrap="">&nbsp;&nbsp;</td><td valign="top" width="100%">
<font size="2" face="Arial" color="#000099"><font class="text15"><b> <br> </b><p> <br> </p></font></font></td></tr></tbody></table>
<br></font></td></tr><tr bgcolor="#eeeeee"><td align="right" valign="top" nowrap="">
<font size="1" face="Arial" color="#000099">
&nbsp; <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=edit&amp;forum=scoops1&amp;om=838188&amp;omm=7"><img src="https://rotter.net/forum/Images/edit.gif" border="0"></a> &nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=post&amp;forum=scoops1&amp;om=838188&amp;omm=7"><font size="1" face="Arial" color="#000099"><img src="https://rotter.net/forum/Images/response.gif" border="0"></font></a><font size="1" face="Arial" color="#000099"> &nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=read_count&amp;om=838188&amp;forum=scoops1&amp;viewmode=all"><img src="https://rotter.net/forum/Images/all.gif" border="0"></a></font><font size="1">&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=list&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/gobk.gif" border="0"></a>
&nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?quote=not_empty&amp;az=post&amp;forum=scoops1&amp;om=838188&amp;omm=7"><font size="1" face="Arial" color="#000099"> תגובה עם ציטוט </font></a>&nbsp; | <a href="javascript:updatePropertyDisplay('7')"><font face="Arial" color="#000099">תגובה מהירה</font></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcadmin.cgi?az=admin_board_manager&amp;command=admin_remove_messages&amp;forum=scoops1&amp;thread_select=838188&amp;selected=7" onclick="return confirm('למחוק תגובה?')"><font size="1" face="Arial" color="#000099">(ניהול: מחק תגובה)</font></a></font></font></td>
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
<a name="9"><b>totoloto</b></a>
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=totoloto"><img src="https://rotter.net/forum/Images/5_star.gif" border="0" alt="לחץ כאן להצגת דירוג המשתמש"></a><br>
<font size="1">חבר מתאריך 24.4.12</font><br>
<font size="1">45217 הודעות</font>, <font size="1" color="006633"> <b>287 מדרגים</b></font>, <font color="red" size="1"> <b>555 נקודות. &nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=totoloto"><font color="000099" size="-1"><u>ראה משוב</u></font></a></b></font></font></td><td align="LEFT" valign="top" width="50%" nowrap=""><font size="1" face="Arial" color="#000099"><font color="black">יום שני י' 'באדר א תשפ''ד &nbsp;&nbsp;</font>
<font color="red">22:29</font> &nbsp; <font color="#eeeeee" size="1"> </font>19.02.24</font>&nbsp;&nbsp;&nbsp;</td></tr>
<tr bgcolor="#eeeeee"><td align="LEFT">
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=send_mesg&amp;userid=totoloto" target="_new"><img src="https://rotter.net/forum/Images/mesg.gif" border="0" title="לחץ לשליחת הודעה פרטית למשתמש"></a> <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=user_profiles&amp;user=totoloto"><img src="https://rotter.net/forum/Images/profile_small.gif" title="לחץ להצגת פרופיל המשתמש" border="0"></a><a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=add_buddy&amp;user=totoloto&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/mesg_add_buddy.gif" title="לחץ להוספת משתמש זה לרשימת החברים שלך" border="0"></a>
<a href="javascript:makeRemote('https://rotter.net/cgi-bin/forum/Lib/view_user_kartis.pl?user=totoloto')">
<img src="https://rotter.net/forum/Images/kartis.gif" border="0" alt="כרטיס אישי"></a>&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_ip&amp;forum=scoops1&amp;om=838188&amp;omm=9&amp;name=totoloto"><img src="https://rotter.net/forum/Images/ip.gif" border="0" alt="עבור לצ'אט"></a>
&nbsp;</td></tr>
<tr bgcolor="#FDFDFD"><td colspan="2" width="100%">
<font size="2" face="Arial" color="#000099">
&nbsp;&nbsp;<font class="text16b">9. ++1000&nbsp;&nbsp;</font><br>
<font size="1" face="Arial" color="#000099"><a href="#7">בתגובה להודעה מספר 7</a></font><br>&nbsp;<br>
<table border="0" cellpadding="5" cellspacing="0" width="70%" style="display: inline-table;">
<tbody><tr><td valign="top" width="50" nowrap="">&nbsp;&nbsp;</td><td valign="top" width="100%">
<font size="2" face="Arial" color="#000099"><font class="text15"><b> <br> </b><p> <br> </p></font></font></td></tr></tbody></table>
<br></font></td></tr><tr bgcolor="#eeeeee"><td align="right" valign="top" nowrap="">
<font size="1" face="Arial" color="#000099">
&nbsp; <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=edit&amp;forum=scoops1&amp;om=838188&amp;omm=9"><img src="https://rotter.net/forum/Images/edit.gif" border="0"></a> &nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=post&amp;forum=scoops1&amp;om=838188&amp;omm=9"><font size="1" face="Arial" color="#000099"><img src="https://rotter.net/forum/Images/response.gif" border="0"></font></a><font size="1" face="Arial" color="#000099"> &nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=read_count&amp;om=838188&amp;forum=scoops1&amp;viewmode=all"><img src="https://rotter.net/forum/Images/all.gif" border="0"></a></font><font size="1">&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=list&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/gobk.gif" border="0"></a>
&nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?quote=not_empty&amp;az=post&amp;forum=scoops1&amp;om=838188&amp;omm=9"><font size="1" face="Arial" color="#000099"> תגובה עם ציטוט </font></a>&nbsp; | <a href="javascript:updatePropertyDisplay('9')"><font face="Arial" color="#000099">תגובה מהירה</font></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcadmin.cgi?az=admin_board_manager&amp;command=admin_remove_messages&amp;forum=scoops1&amp;thread_select=838188&amp;selected=9" onclick="return confirm('למחוק תגובה?')"><font size="1" face="Arial" color="#000099">(ניהול: מחק תגובה)</font></a></font></font></td>
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
<a name="10"><b>ZioNLight</b></a>
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=ZioNLight"><img src="https://rotter.net/forum/Images/5_star.gif" border="0" alt="לחץ כאן להצגת דירוג המשתמש"></a><br>
<font size="1">חבר מתאריך 22.4.16</font><br>
<font size="1">58270 הודעות</font>, <font size="1" color="006633"> <b>399 מדרגים</b></font>, <font color="red" size="1"> <b>426 נקודות. &nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=ZioNLight"><font color="000099" size="-1"><u>ראה משוב</u></font></a></b></font></font></td><td align="LEFT" valign="top" width="50%" nowrap=""><font size="1" face="Arial" color="#000099"><font color="black">יום שני י' 'באדר א תשפ''ד &nbsp;&nbsp;</font>
<font color="red">22:29</font> &nbsp; <font color="#eeeeee" size="1"> </font>19.02.24</font>&nbsp;&nbsp;&nbsp;</td></tr>
<tr bgcolor="#eeeeee"><td align="LEFT">
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=send_mesg&amp;userid=ZioNLight" target="_new"><img src="https://rotter.net/forum/Images/mesg.gif" border="0" title="לחץ לשליחת הודעה פרטית למשתמש"></a> <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=user_profiles&amp;user=ZioNLight"><img src="https://rotter.net/forum/Images/profile_small.gif" title="לחץ להצגת פרופיל המשתמש" border="0"></a><a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=add_buddy&amp;user=ZioNLight&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/mesg_add_buddy.gif" title="לחץ להוספת משתמש זה לרשימת החברים שלך" border="0"></a> <a href="https://twitter.com/ZioNLight1/with_replies"><img src="https://rotter.net/forum/Images/twitter.png" title="לחץ לצפייה בטוויטר של המשתמש" border="0"></a>
<a href="javascript:makeRemote('https://rotter.net/cgi-bin/forum/Lib/view_user_kartis.pl?user=ZioNLight')">
<img src="https://rotter.net/forum/Images/kartis.gif" border="0" alt="כרטיס אישי"></a>&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_ip&amp;forum=scoops1&amp;om=838188&amp;omm=10&amp;name=ZioNLight"><img src="https://rotter.net/forum/Images/ip.gif" border="0" alt="עבור לצ'אט"></a>
&nbsp;</td></tr>
<tr bgcolor="#FDFDFD"><td colspan="2" width="100%">
<font size="2" face="Arial" color="#000099">
&nbsp;&nbsp;<font class="text16b">10. אתה מבין לאן הציוץ הזה מנסה להוביל אתכם. תעמולה קשקושית .&nbsp;&nbsp;</font><br>
<font size="1" face="Arial" color="#000099"><a href="#7">בתגובה להודעה מספר 7</a></font><br>&nbsp;<br>
<table border="0" cellpadding="5" cellspacing="0" width="70%" style="display: inline-table;">
<tbody><tr><td valign="top" width="50" nowrap="">&nbsp;&nbsp;</td><td valign="top" width="100%">
<font size="2" face="Arial" color="#000099"><font class="text15"><b> <br> </b><p> <br> </p></font></font></td></tr></tbody></table>
<br></font></td></tr><tr bgcolor="#eeeeee"><td align="right" valign="top" nowrap="">
<font size="1" face="Arial" color="#000099">
&nbsp; <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=edit&amp;forum=scoops1&amp;om=838188&amp;omm=10"><img src="https://rotter.net/forum/Images/edit.gif" border="0"></a> &nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=post&amp;forum=scoops1&amp;om=838188&amp;omm=10"><font size="1" face="Arial" color="#000099"><img src="https://rotter.net/forum/Images/response.gif" border="0"></font></a><font size="1" face="Arial" color="#000099"> &nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=read_count&amp;om=838188&amp;forum=scoops1&amp;viewmode=all"><img src="https://rotter.net/forum/Images/all.gif" border="0"></a></font><font size="1">&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=list&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/gobk.gif" border="0"></a>
&nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?quote=not_empty&amp;az=post&amp;forum=scoops1&amp;om=838188&amp;omm=10"><font size="1" face="Arial" color="#000099"> תגובה עם ציטוט </font></a>&nbsp; | <a href="javascript:updatePropertyDisplay('10')"><font face="Arial" color="#000099">תגובה מהירה</font></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcadmin.cgi?az=admin_board_manager&amp;command=admin_remove_messages&amp;forum=scoops1&amp;thread_select=838188&amp;selected=10" onclick="return confirm('למחוק תגובה?')"><font size="1" face="Arial" color="#000099">(ניהול: מחק תגובה)</font></a></font></font></td>
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
<a name="12"><b>Y to Y</b></a>
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=Y%20to%20Y"><img src="https://rotter.net/forum/Images/5_star.gif" border="0" alt="לחץ כאן להצגת דירוג המשתמש"></a><br>
<font size="1">חבר מתאריך 20.3.18</font><br>
<font size="1">15380 הודעות</font>, <font size="1" color="006633"> <b>58 מדרגים</b></font>, <font color="red" size="1"> <b>107 נקודות. &nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=Y to Y"><font color="000099" size="-1"><u>ראה משוב</u></font></a></b></font></font></td><td align="LEFT" valign="top" width="50%" nowrap=""><font size="1" face="Arial" color="#000099"><font color="black">יום שני י' 'באדר א תשפ''ד &nbsp;&nbsp;</font>
<font color="red">22:32</font> &nbsp; <font color="#eeeeee" size="1"> </font>19.02.24</font>&nbsp;&nbsp;&nbsp;</td></tr>
<tr bgcolor="#eeeeee"><td align="LEFT">
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=send_mesg&amp;userid=Y%20to%20Y" target="_new"><img src="https://rotter.net/forum/Images/mesg.gif" border="0" title="לחץ לשליחת הודעה פרטית למשתמש"></a> <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=user_profiles&amp;user=Y%20to%20Y"><img src="https://rotter.net/forum/Images/profile_small.gif" title="לחץ להצגת פרופיל המשתמש" border="0"></a><a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=add_buddy&amp;user=Y%20to%20Y&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/mesg_add_buddy.gif" title="לחץ להוספת משתמש זה לרשימת החברים שלך" border="0"></a>
<a href="javascript:makeRemote('https://rotter.net/cgi-bin/forum/Lib/view_user_kartis.pl?user=Y to Y')">
<img src="https://rotter.net/forum/Images/kartis.gif" border="0" alt="כרטיס אישי"></a>&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_ip&amp;forum=scoops1&amp;om=838188&amp;omm=12&amp;name=Y to Y"><img src="https://rotter.net/forum/Images/ip.gif" border="0" alt="עבור לצ'אט"></a>
&nbsp;</td></tr>
<tr bgcolor="#FDFDFD"><td colspan="2" width="100%">
<font size="2" face="Arial" color="#000099">
&nbsp;&nbsp;<font class="text16b">12. מה תעמולה? זה קרה או לא קרה?&nbsp;&nbsp;</font><br>
<font size="1" face="Arial" color="#000099"><a href="#10">בתגובה להודעה מספר 10</a></font><br>&nbsp;<br>
<table border="0" cellpadding="5" cellspacing="0" width="70%" style="display: inline-table;">
<tbody><tr><td valign="top" width="50" nowrap="">&nbsp;&nbsp;</td><td valign="top" width="100%">
<font size="2" face="Arial" color="#000099"><font class="text15"><b> <br> </b><p> <br> </p></font></font></td></tr></tbody></table>
<br></font></td></tr><tr bgcolor="#eeeeee"><td align="right" valign="top" nowrap="">
<font size="1" face="Arial" color="#000099">
&nbsp; <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=edit&amp;forum=scoops1&amp;om=838188&amp;omm=12"><img src="https://rotter.net/forum/Images/edit.gif" border="0"></a> &nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=post&amp;forum=scoops1&amp;om=838188&amp;omm=12"><font size="1" face="Arial" color="#000099"><img src="https://rotter.net/forum/Images/response.gif" border="0"></font></a><font size="1" face="Arial" color="#000099"> &nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=read_count&amp;om=838188&amp;forum=scoops1&amp;viewmode=all"><img src="https://rotter.net/forum/Images/all.gif" border="0"></a></font><font size="1">&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=list&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/gobk.gif" border="0"></a>
&nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?quote=not_empty&amp;az=post&amp;forum=scoops1&amp;om=838188&amp;omm=12"><font size="1" face="Arial" color="#000099"> תגובה עם ציטוט </font></a>&nbsp; | <a href="javascript:updatePropertyDisplay('12')"><font face="Arial" color="#000099">תגובה מהירה</font></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcadmin.cgi?az=admin_board_manager&amp;command=admin_remove_messages&amp;forum=scoops1&amp;thread_select=838188&amp;selected=12" onclick="return confirm('למחוק תגובה?')"><font size="1" face="Arial" color="#000099">(ניהול: מחק תגובה)</font></a></font></font></td>
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
<a name="13"><b>FactsOnly</b></a>
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=FactsOnly"><img src="https://rotter.net/forum/Images/3_star.gif" border="0" alt="לחץ כאן להצגת דירוג המשתמש"></a><br>
<font size="1">חבר מתאריך 15.12.19</font><br>
<font size="1">8113 הודעות</font>, <font size="1" color="006633"> <b>19 מדרגים</b></font>, <font color="red" size="1"> <b>28 נקודות. &nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=FactsOnly"><font color="000099" size="-1"><u>ראה משוב</u></font></a></b></font></font></td><td align="LEFT" valign="top" width="50%" nowrap=""><font size="1" face="Arial" color="#000099"><font color="black">יום שני י' 'באדר א תשפ''ד &nbsp;&nbsp;</font>
<font color="red">22:32</font> &nbsp; <font color="#eeeeee" size="1"> </font>19.02.24</font>&nbsp;&nbsp;&nbsp;</td></tr>
<tr bgcolor="#eeeeee"><td align="LEFT">
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=send_mesg&amp;userid=FactsOnly" target="_new"><img src="https://rotter.net/forum/Images/mesg.gif" border="0" title="לחץ לשליחת הודעה פרטית למשתמש"></a> <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=user_profiles&amp;user=FactsOnly"><img src="https://rotter.net/forum/Images/profile_small.gif" title="לחץ להצגת פרופיל המשתמש" border="0"></a><a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=add_buddy&amp;user=FactsOnly&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/mesg_add_buddy.gif" title="לחץ להוספת משתמש זה לרשימת החברים שלך" border="0"></a>
<a href="javascript:makeRemote('https://rotter.net/cgi-bin/forum/Lib/view_user_kartis.pl?user=FactsOnly')">
<img src="https://rotter.net/forum/Images/kartis.gif" border="0" alt="כרטיס אישי"></a>&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_ip&amp;forum=scoops1&amp;om=838188&amp;omm=13&amp;name=FactsOnly"><img src="https://rotter.net/forum/Images/ip.gif" border="0" alt="עבור לצ'אט"></a>
&nbsp;</td></tr>
<tr bgcolor="#FDFDFD"><td colspan="2" width="100%">
<font size="2" face="Arial" color="#000099">
&nbsp;&nbsp;<font class="text16b">13. '' אתכם''? ממש התיחסות ענינית&nbsp;&nbsp;</font><br>
<font size="1" face="Arial" color="#000099"><a href="#10">בתגובה להודעה מספר 10</a></font><br>&nbsp;<br>
<table border="0" cellpadding="5" cellspacing="0" width="70%" style="display: inline-table;">
<tbody><tr><td valign="top" width="50" nowrap="">&nbsp;&nbsp;</td><td valign="top" width="100%">
<font size="2" face="Arial" color="#000099"><font class="text15"><b> <br> תהיה ענייני ותסביר מה הפרשנות שלך למודעה?<br>האמת,לולא דבריך לא הייתי שם לב למביא הידיעה.</b><p> <br> </p></font></font></td></tr></tbody></table>
<br></font></td></tr><tr bgcolor="#eeeeee"><td align="right" valign="top" nowrap="">
<font size="1" face="Arial" color="#000099">
&nbsp; <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=edit&amp;forum=scoops1&amp;om=838188&amp;omm=13"><img src="https://rotter.net/forum/Images/edit.gif" border="0"></a> &nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=post&amp;forum=scoops1&amp;om=838188&amp;omm=13"><font size="1" face="Arial" color="#000099"><img src="https://rotter.net/forum/Images/response.gif" border="0"></font></a><font size="1" face="Arial" color="#000099"> &nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=read_count&amp;om=838188&amp;forum=scoops1&amp;viewmode=all"><img src="https://rotter.net/forum/Images/all.gif" border="0"></a></font><font size="1">&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=list&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/gobk.gif" border="0"></a>
&nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?quote=not_empty&amp;az=post&amp;forum=scoops1&amp;om=838188&amp;omm=13"><font size="1" face="Arial" color="#000099"> תגובה עם ציטוט </font></a>&nbsp; | <a href="javascript:updatePropertyDisplay('13')"><font face="Arial" color="#000099">תגובה מהירה</font></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcadmin.cgi?az=admin_board_manager&amp;command=admin_remove_messages&amp;forum=scoops1&amp;thread_select=838188&amp;selected=13" onclick="return confirm('למחוק תגובה?')"><font size="1" face="Arial" color="#000099">(ניהול: מחק תגובה)</font></a></font></font></td>
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
<a name="16"><b>עבד לעם קדוש</b></a>
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=%F2%E1%E3%20%EC%F2%ED%20%F7%E3%E5%F9"><img src="https://rotter.net/forum/Images/5_star.gif" border="0" alt="לחץ כאן להצגת דירוג המשתמש"></a><br>
<font size="1">חבר מתאריך 5.9.19</font><br>
<font size="1">69875 הודעות</font>, <font size="1" color="006633"> <b>260 מדרגים</b></font>, <font color="red" size="1"> <b>460 נקודות. &nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=עבד לעם קדוש"><font color="000099" size="-1"><u>ראה משוב</u></font></a></b></font></font></td><td align="LEFT" valign="top" width="50%" nowrap=""><font size="1" face="Arial" color="#000099"><font color="black">יום שני י' 'באדר א תשפ''ד &nbsp;&nbsp;</font>
<font color="red">22:38</font> &nbsp; <font color="#eeeeee" size="1"> </font>19.02.24</font>&nbsp;&nbsp;&nbsp;</td></tr>
<tr bgcolor="#eeeeee"><td align="LEFT">
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=send_mesg&amp;userid=%F2%E1%E3%20%EC%F2%ED%20%F7%E3%E5%F9" target="_new"><img src="https://rotter.net/forum/Images/mesg.gif" border="0" title="לחץ לשליחת הודעה פרטית למשתמש"></a> <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=user_profiles&amp;user=%F2%E1%E3%20%EC%F2%ED%20%F7%E3%E5%F9"><img src="https://rotter.net/forum/Images/profile_small.gif" title="לחץ להצגת פרופיל המשתמש" border="0"></a><a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=add_buddy&amp;user=%F2%E1%E3%20%EC%F2%ED%20%F7%E3%E5%F9&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/mesg_add_buddy.gif" title="לחץ להוספת משתמש זה לרשימת החברים שלך" border="0"></a>
<a href="javascript:makeRemote('https://rotter.net/cgi-bin/forum/Lib/view_user_kartis.pl?user=עבד לעם קדוש')">
<img src="https://rotter.net/forum/Images/kartis.gif" border="0" alt="כרטיס אישי"></a>&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_ip&amp;forum=scoops1&amp;om=838188&amp;omm=16&amp;name=עבד לעם קדוש"><img src="https://rotter.net/forum/Images/ip.gif" border="0" alt="עבור לצ'אט"></a>
&nbsp;</td></tr>
<tr bgcolor="#FDFDFD"><td colspan="2" width="100%">
<font size="2" face="Arial" color="#000099">
&nbsp;&nbsp;<font class="text16b">16. מנסה להוביל אותנו למדינה מתוקנת בה שמירה על סודות צבאיים מחייבת את כולם!!!&nbsp;&nbsp;</font><br>
<font size="1" face="Arial" color="#000099"><a href="#10">בתגובה להודעה מספר 10</a></font><br>&nbsp;<br>
<table border="0" cellpadding="5" cellspacing="0" width="70%" style="display: inline-table;">
<tbody><tr><td valign="top" width="50" nowrap="">&nbsp;&nbsp;</td><td valign="top" width="100%">
<font size="2" face="Arial" color="#000099"><font class="text15"><b> <br> <font size="1" color="#FF0000"> ערכתי לאחרונה בתאריך 19.02.24 בשעה 22:46 בברכה, עבד לעם קדוש</font><br>&nbsp;<br></b><p> <br> </p></font></font></td></tr></tbody></table>
<br></font></td></tr><tr bgcolor="#eeeeee"><td align="right" valign="top" nowrap="">
<font size="1" face="Arial" color="#000099">
&nbsp; <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=edit&amp;forum=scoops1&amp;om=838188&amp;omm=16"><img src="https://rotter.net/forum/Images/edit.gif" border="0"></a> &nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=post&amp;forum=scoops1&amp;om=838188&amp;omm=16"><font size="1" face="Arial" color="#000099"><img src="https://rotter.net/forum/Images/response.gif" border="0"></font></a><font size="1" face="Arial" color="#000099"> &nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=read_count&amp;om=838188&amp;forum=scoops1&amp;viewmode=all"><img src="https://rotter.net/forum/Images/all.gif" border="0"></a></font><font size="1">&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=list&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/gobk.gif" border="0"></a>
&nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?quote=not_empty&amp;az=post&amp;forum=scoops1&amp;om=838188&amp;omm=16"><font size="1" face="Arial" color="#000099"> תגובה עם ציטוט </font></a>&nbsp; | <a href="javascript:updatePropertyDisplay('16')"><font face="Arial" color="#000099">תגובה מהירה</font></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcadmin.cgi?az=admin_board_manager&amp;command=admin_remove_messages&amp;forum=scoops1&amp;thread_select=838188&amp;selected=16" onclick="return confirm('למחוק תגובה?')"><font size="1" face="Arial" color="#000099">(ניהול: מחק תגובה)</font></a></font></font></td>
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
<a name="19"><b>Cutting Edge</b></a>
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=Cutting%20Edge"><img src="https://rotter.net/forum/Images/3_star.gif" border="0" alt="לחץ כאן להצגת דירוג המשתמש"></a><br>
<font size="1">חבר מתאריך 21.7.11</font><br>
<font size="1">5678 הודעות</font>, <font size="1" color="006633"> <b>32 מדרגים</b></font>, <font color="red" size="1"> <b>26 נקודות. &nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=Cutting Edge"><font color="000099" size="-1"><u>ראה משוב</u></font></a></b></font></font></td><td align="LEFT" valign="top" width="50%" nowrap=""><font size="1" face="Arial" color="#000099"><font color="black">יום שני י' 'באדר א תשפ''ד &nbsp;&nbsp;</font>
<font color="red">22:43</font> &nbsp; <font color="#eeeeee" size="1"> </font>19.02.24</font>&nbsp;&nbsp;&nbsp;</td></tr>
<tr bgcolor="#eeeeee"><td align="LEFT">
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=send_mesg&amp;userid=Cutting%20Edge" target="_new"><img src="https://rotter.net/forum/Images/mesg.gif" border="0" title="לחץ לשליחת הודעה פרטית למשתמש"></a> <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=user_profiles&amp;user=Cutting%20Edge"><img src="https://rotter.net/forum/Images/profile_small.gif" title="לחץ להצגת פרופיל המשתמש" border="0"></a><a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=add_buddy&amp;user=Cutting%20Edge&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/mesg_add_buddy.gif" title="לחץ להוספת משתמש זה לרשימת החברים שלך" border="0"></a>
<a href="javascript:makeRemote('https://rotter.net/cgi-bin/forum/Lib/view_user_kartis.pl?user=Cutting Edge')">
<img src="https://rotter.net/forum/Images/kartis.gif" border="0" alt="כרטיס אישי"></a>&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_ip&amp;forum=scoops1&amp;om=838188&amp;omm=19&amp;name=Cutting Edge"><img src="https://rotter.net/forum/Images/ip.gif" border="0" alt="עבור לצ'אט"></a>
&nbsp;</td></tr>
<tr bgcolor="#FDFDFD"><td colspan="2" width="100%">
<font size="2" face="Arial" color="#000099">
&nbsp;&nbsp;<font class="text16b">19. לא שאני מתיימר לדעת למה התכוונו אבל..&nbsp;&nbsp;</font><br>
<font size="1" face="Arial" color="#000099"><a href="#7">בתגובה להודעה מספר 7</a></font><br>&nbsp;<br>
<table border="0" cellpadding="5" cellspacing="0" width="70%" style="display: inline-table;">
<tbody><tr><td valign="top" width="50" nowrap="">&nbsp;&nbsp;</td><td valign="top" width="100%">
<font size="2" face="Arial" color="#000099"><font class="text15"><b> <br> גוף אמיתי ורשמי לא מתבטא ככה. <br>סודיות יכולה להיות גם מידע עסקי סודי, אבל לתחושתי זה סתם בשביל הווסאח ו/או שלא רצו לקחת סיכון מבלי להבין שזה מוציא אותו רע. </b><p><b>ממש לא תומך בו, אבל מהיכרות עם החיים זה סתם מישהו שהחליט לכתוב ככה. הבן אדם לא בצבא כבר איזה זמן..</b></p><p> <br> </p></font></font></td></tr></tbody></table>
<br></font></td></tr><tr bgcolor="#eeeeee"><td align="right" valign="top" nowrap="">
<font size="1" face="Arial" color="#000099">
&nbsp; <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=edit&amp;forum=scoops1&amp;om=838188&amp;omm=19"><img src="https://rotter.net/forum/Images/edit.gif" border="0"></a> &nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=post&amp;forum=scoops1&amp;om=838188&amp;omm=19"><font size="1" face="Arial" color="#000099"><img src="https://rotter.net/forum/Images/response.gif" border="0"></font></a><font size="1" face="Arial" color="#000099"> &nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=read_count&amp;om=838188&amp;forum=scoops1&amp;viewmode=all"><img src="https://rotter.net/forum/Images/all.gif" border="0"></a></font><font size="1">&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=list&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/gobk.gif" border="0"></a>
&nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?quote=not_empty&amp;az=post&amp;forum=scoops1&amp;om=838188&amp;omm=19"><font size="1" face="Arial" color="#000099"> תגובה עם ציטוט </font></a>&nbsp; | <a href="javascript:updatePropertyDisplay('19')"><font face="Arial" color="#000099">תגובה מהירה</font></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcadmin.cgi?az=admin_board_manager&amp;command=admin_remove_messages&amp;forum=scoops1&amp;thread_select=838188&amp;selected=19" onclick="return confirm('למחוק תגובה?')"><font size="1" face="Arial" color="#000099">(ניהול: מחק תגובה)</font></a></font></font></td>
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
<a name="15"><b>עדי</b></a>
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=%F2%E3%E9"><img src="https://rotter.net/forum/Images/5_star.gif" border="0" alt="לחץ כאן להצגת דירוג המשתמש"></a><br>
<font size="1">חבר מתאריך 6.9.19</font><br>
<font size="1">35565 הודעות</font>, <font size="1" color="006633"> <b>79 מדרגים</b></font>, <font color="red" size="1"> <b>41 נקודות. &nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=עדי"><font color="000099" size="-1"><u>ראה משוב</u></font></a></b></font></font></td><td align="LEFT" valign="top" width="50%" nowrap=""><font size="1" face="Arial" color="#000099"><font color="black">יום שני י' 'באדר א תשפ''ד &nbsp;&nbsp;</font>
<font color="red">22:35</font> &nbsp; <font color="#eeeeee" size="1"> </font>19.02.24</font>&nbsp;&nbsp;&nbsp;</td></tr>
<tr bgcolor="#eeeeee"><td align="LEFT">
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=send_mesg&amp;userid=%F2%E3%E9" target="_new"><img src="https://rotter.net/forum/Images/mesg.gif" border="0" title="לחץ לשליחת הודעה פרטית למשתמש"></a> <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=user_profiles&amp;user=%F2%E3%E9"><img src="https://rotter.net/forum/Images/profile_small.gif" title="לחץ להצגת פרופיל המשתמש" border="0"></a><a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=add_buddy&amp;user=%F2%E3%E9&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/mesg_add_buddy.gif" title="לחץ להוספת משתמש זה לרשימת החברים שלך" border="0"></a>
<a href="javascript:makeRemote('https://rotter.net/cgi-bin/forum/Lib/view_user_kartis.pl?user=עדי')">
<img src="https://rotter.net/forum/Images/kartis.gif" border="0" alt="כרטיס אישי"></a>&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_ip&amp;forum=scoops1&amp;om=838188&amp;omm=15&amp;name=עדי"><img src="https://rotter.net/forum/Images/ip.gif" border="0" alt="עבור לצ'אט"></a>
&nbsp;</td></tr>
<tr bgcolor="#FDFDFD"><td colspan="2" width="100%">
<font size="2" face="Arial" color="#000099">
&nbsp;&nbsp;<font class="text16b">15. +++ ראיתי מי הממליצים והבנתי באיזה עמותה עם רקע בטחוני מדובר&nbsp;&nbsp;</font><br>
<font size="1" face="Arial" color="#000099"><a href="#2">בתגובה להודעה מספר 2</a></font><br>&nbsp;<br>
<table border="0" cellpadding="5" cellspacing="0" width="70%" style="display: inline-table;">
<tbody><tr><td valign="top" width="50" nowrap="">&nbsp;&nbsp;</td><td valign="top" width="100%">
<font size="2" face="Arial" color="#000099"><font class="text15"><b> <br> <a href="https://www.torah-idf.org.il/%D7%90%D7%95%D7%93%D7%95%D7%AA/" target="_blank" rel="nofollow"><font size="-1" color="red"><u>https://www.torah-idf.org.il/%D7%90%D7%95%D7%93%D7%95%D7%AA/</u></font></a></b><p> <br> </p></font></font></td></tr></tbody></table>
<br></font></td></tr><tr bgcolor="#eeeeee"><td align="right" valign="top" nowrap="">
<font size="1" face="Arial" color="#000099">
&nbsp; <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=edit&amp;forum=scoops1&amp;om=838188&amp;omm=15"><img src="https://rotter.net/forum/Images/edit.gif" border="0"></a> &nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=post&amp;forum=scoops1&amp;om=838188&amp;omm=15"><font size="1" face="Arial" color="#000099"><img src="https://rotter.net/forum/Images/response.gif" border="0"></font></a><font size="1" face="Arial" color="#000099"> &nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=read_count&amp;om=838188&amp;forum=scoops1&amp;viewmode=all"><img src="https://rotter.net/forum/Images/all.gif" border="0"></a></font><font size="1">&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=list&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/gobk.gif" border="0"></a>
&nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?quote=not_empty&amp;az=post&amp;forum=scoops1&amp;om=838188&amp;omm=15"><font size="1" face="Arial" color="#000099"> תגובה עם ציטוט </font></a>&nbsp; | <a href="javascript:updatePropertyDisplay('15')"><font face="Arial" color="#000099">תגובה מהירה</font></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcadmin.cgi?az=admin_board_manager&amp;command=admin_remove_messages&amp;forum=scoops1&amp;thread_select=838188&amp;selected=15" onclick="return confirm('למחוק תגובה?')"><font size="1" face="Arial" color="#000099">(ניהול: מחק תגובה)</font></a></font></font></td>
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
<a name="3"><b>FactsOnly</b></a>
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=FactsOnly"><img src="https://rotter.net/forum/Images/3_star.gif" border="0" alt="לחץ כאן להצגת דירוג המשתמש"></a><br>
<font size="1">חבר מתאריך 15.12.19</font><br>
<font size="1">8113 הודעות</font>, <font size="1" color="006633"> <b>19 מדרגים</b></font>, <font color="red" size="1"> <b>28 נקודות. &nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=FactsOnly"><font color="000099" size="-1"><u>ראה משוב</u></font></a></b></font></font></td><td align="LEFT" valign="top" width="50%" nowrap=""><font size="1" face="Arial" color="#000099"><font color="black">יום שני י' 'באדר א תשפ''ד &nbsp;&nbsp;</font>
<font color="red">22:26</font> &nbsp; <font color="#eeeeee" size="1"> </font>19.02.24</font>&nbsp;&nbsp;&nbsp;</td></tr>
<tr bgcolor="#eeeeee"><td align="LEFT">
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=send_mesg&amp;userid=FactsOnly" target="_new"><img src="https://rotter.net/forum/Images/mesg.gif" border="0" title="לחץ לשליחת הודעה פרטית למשתמש"></a> <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=user_profiles&amp;user=FactsOnly"><img src="https://rotter.net/forum/Images/profile_small.gif" title="לחץ להצגת פרופיל המשתמש" border="0"></a><a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=add_buddy&amp;user=FactsOnly&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/mesg_add_buddy.gif" title="לחץ להוספת משתמש זה לרשימת החברים שלך" border="0"></a>
<a href="javascript:makeRemote('https://rotter.net/cgi-bin/forum/Lib/view_user_kartis.pl?user=FactsOnly')">
<img src="https://rotter.net/forum/Images/kartis.gif" border="0" alt="כרטיס אישי"></a>&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_ip&amp;forum=scoops1&amp;om=838188&amp;omm=3&amp;name=FactsOnly"><img src="https://rotter.net/forum/Images/ip.gif" border="0" alt="עבור לצ'אט"></a>
&nbsp;</td></tr>
<tr bgcolor="#FDFDFD"><td colspan="2" width="100%">
<font size="2" face="Arial" color="#000099">
&nbsp;&nbsp;<font class="text16b">3. ומדוע לאיש הזה יש מידע אקטואלי סודי ביותר?&nbsp;&nbsp;</font><br>
<font size="1" face="Arial" color="#000099"><a href="#0">בתגובה להודעה מספר 0</a></font><br>&nbsp;<br>
<table border="0" cellpadding="5" cellspacing="0" width="70%" style="display: inline-table;">
<tbody><tr><td valign="top" width="50" nowrap="">&nbsp;&nbsp;</td><td valign="top" width="100%">
<font size="2" face="Arial" color="#000099"><font class="text15"><b> <br> </b><p> <br> </p></font></font></td></tr></tbody></table>
<br></font></td></tr><tr bgcolor="#eeeeee"><td align="right" valign="top" nowrap="">
<font size="1" face="Arial" color="#000099">
&nbsp; <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=edit&amp;forum=scoops1&amp;om=838188&amp;omm=3"><img src="https://rotter.net/forum/Images/edit.gif" border="0"></a> &nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=post&amp;forum=scoops1&amp;om=838188&amp;omm=3"><font size="1" face="Arial" color="#000099"><img src="https://rotter.net/forum/Images/response.gif" border="0"></font></a><font size="1" face="Arial" color="#000099"> &nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=read_count&amp;om=838188&amp;forum=scoops1&amp;viewmode=all"><img src="https://rotter.net/forum/Images/all.gif" border="0"></a></font><font size="1">&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=list&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/gobk.gif" border="0"></a>
&nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?quote=not_empty&amp;az=post&amp;forum=scoops1&amp;om=838188&amp;omm=3"><font size="1" face="Arial" color="#000099"> תגובה עם ציטוט </font></a>&nbsp; | <a href="javascript:updatePropertyDisplay('3')"><font face="Arial" color="#000099">תגובה מהירה</font></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcadmin.cgi?az=admin_board_manager&amp;command=admin_remove_messages&amp;forum=scoops1&amp;thread_select=838188&amp;selected=3" onclick="return confirm('למחוק תגובה?')"><font size="1" face="Arial" color="#000099">(ניהול: מחק תגובה)</font></a></font></font></td>
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
<a name="8"><b>מלול הגדול</b></a>
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=%EE%EC%E5%EC%20%E4%E2%E3%E5%EC"><img src="https://rotter.net/forum/Images/3_star.gif" border="0" alt="לחץ כאן להצגת דירוג המשתמש"></a><br>
<font size="1">חבר מתאריך 9.7.14</font><br>
<font size="1">1008 הודעות</font>, <font size="1" color="006633"> <b>10 מדרגים</b></font>, <font color="red" size="1"> <b>20 נקודות. &nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=מלול הגדול"><font color="000099" size="-1"><u>ראה משוב</u></font></a></b></font></font></td><td align="LEFT" valign="top" width="50%" nowrap=""><font size="1" face="Arial" color="#000099"><font color="black">יום שני י' 'באדר א תשפ''ד &nbsp;&nbsp;</font>
<font color="red">22:28</font> &nbsp; <font color="#eeeeee" size="1"> </font>19.02.24</font>&nbsp;&nbsp;&nbsp;</td></tr>
<tr bgcolor="#eeeeee"><td align="LEFT">
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=send_mesg&amp;userid=%EE%EC%E5%EC%20%E4%E2%E3%E5%EC" target="_new"><img src="https://rotter.net/forum/Images/mesg.gif" border="0" title="לחץ לשליחת הודעה פרטית למשתמש"></a> <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=user_profiles&amp;user=%EE%EC%E5%EC%20%E4%E2%E3%E5%EC"><img src="https://rotter.net/forum/Images/profile_small.gif" title="לחץ להצגת פרופיל המשתמש" border="0"></a><a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=add_buddy&amp;user=%EE%EC%E5%EC%20%E4%E2%E3%E5%EC&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/mesg_add_buddy.gif" title="לחץ להוספת משתמש זה לרשימת החברים שלך" border="0"></a>
<a href="javascript:makeRemote('https://rotter.net/cgi-bin/forum/Lib/view_user_kartis.pl?user=מלול הגדול')">
<img src="https://rotter.net/forum/Images/kartis.gif" border="0" alt="כרטיס אישי"></a>&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_ip&amp;forum=scoops1&amp;om=838188&amp;omm=8&amp;name=מלול הגדול"><img src="https://rotter.net/forum/Images/ip.gif" border="0" alt="עבור לצ'אט"></a>
&nbsp;</td></tr>
<tr bgcolor="#FDFDFD"><td colspan="2" width="100%">
<font size="2" face="Arial" color="#000099">
&nbsp;&nbsp;<font class="text16b">8. תשאל את גלנט&nbsp;&nbsp;</font><br>
<font size="1" face="Arial" color="#000099"><a href="#3">בתגובה להודעה מספר 3</a></font><br>&nbsp;<br>
<table border="0" cellpadding="5" cellspacing="0" width="70%" style="display: inline-table;">
<tbody><tr><td valign="top" width="50" nowrap="">&nbsp;&nbsp;</td><td valign="top" width="100%">
<font size="2" face="Arial" color="#000099"><font class="text15"><b> <br> לקח את הקונספציונר שהיה ראש אמ"ן לפני חליווה, ושם אותו בצוות "איפכא מסתברא" מתחילת המלחמה.<br>תסביר לי איך זה הגיוני לשים בן אדם שהיה חלק מהריקבון באמ"ן שיחשוב אחרת מה6.10</b><p> <br> </p></font></font></td></tr></tbody></table>
<br></font></td></tr><tr bgcolor="#eeeeee"><td align="right" valign="top" nowrap="">
<font size="1" face="Arial" color="#000099">
&nbsp; <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=edit&amp;forum=scoops1&amp;om=838188&amp;omm=8"><img src="https://rotter.net/forum/Images/edit.gif" border="0"></a> &nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=post&amp;forum=scoops1&amp;om=838188&amp;omm=8"><font size="1" face="Arial" color="#000099"><img src="https://rotter.net/forum/Images/response.gif" border="0"></font></a><font size="1" face="Arial" color="#000099"> &nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=read_count&amp;om=838188&amp;forum=scoops1&amp;viewmode=all"><img src="https://rotter.net/forum/Images/all.gif" border="0"></a></font><font size="1">&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=list&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/gobk.gif" border="0"></a>
&nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?quote=not_empty&amp;az=post&amp;forum=scoops1&amp;om=838188&amp;omm=8"><font size="1" face="Arial" color="#000099"> תגובה עם ציטוט </font></a>&nbsp; | <a href="javascript:updatePropertyDisplay('8')"><font face="Arial" color="#000099">תגובה מהירה</font></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcadmin.cgi?az=admin_board_manager&amp;command=admin_remove_messages&amp;forum=scoops1&amp;thread_select=838188&amp;selected=8" onclick="return confirm('למחוק תגובה?')"><font size="1" face="Arial" color="#000099">(ניהול: מחק תגובה)</font></a></font></font></td>
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
<a name="11"><b>totoloto</b></a>
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=totoloto"><img src="https://rotter.net/forum/Images/5_star.gif" border="0" alt="לחץ כאן להצגת דירוג המשתמש"></a><br>
<font size="1">חבר מתאריך 24.4.12</font><br>
<font size="1">45217 הודעות</font>, <font size="1" color="006633"> <b>287 מדרגים</b></font>, <font color="red" size="1"> <b>555 נקודות. &nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=totoloto"><font color="000099" size="-1"><u>ראה משוב</u></font></a></b></font></font></td><td align="LEFT" valign="top" width="50%" nowrap=""><font size="1" face="Arial" color="#000099"><font color="black">יום שני י' 'באדר א תשפ''ד &nbsp;&nbsp;</font>
<font color="red">22:30</font> &nbsp; <font color="#eeeeee" size="1"> </font>19.02.24</font>&nbsp;&nbsp;&nbsp;</td></tr>
<tr bgcolor="#eeeeee"><td align="LEFT">
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=send_mesg&amp;userid=totoloto" target="_new"><img src="https://rotter.net/forum/Images/mesg.gif" border="0" title="לחץ לשליחת הודעה פרטית למשתמש"></a> <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=user_profiles&amp;user=totoloto"><img src="https://rotter.net/forum/Images/profile_small.gif" title="לחץ להצגת פרופיל המשתמש" border="0"></a><a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=add_buddy&amp;user=totoloto&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/mesg_add_buddy.gif" title="לחץ להוספת משתמש זה לרשימת החברים שלך" border="0"></a>
<a href="javascript:makeRemote('https://rotter.net/cgi-bin/forum/Lib/view_user_kartis.pl?user=totoloto')">
<img src="https://rotter.net/forum/Images/kartis.gif" border="0" alt="כרטיס אישי"></a>&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_ip&amp;forum=scoops1&amp;om=838188&amp;omm=11&amp;name=totoloto"><img src="https://rotter.net/forum/Images/ip.gif" border="0" alt="עבור לצ'אט"></a>
&nbsp;</td></tr>
<tr bgcolor="#FDFDFD"><td colspan="2" width="100%">
<font size="2" face="Arial" color="#000099">
&nbsp;&nbsp;<font class="text16b">11. יוסי יהושוע כתב על כך:&nbsp;&nbsp;</font><br>
<font size="1" face="Arial" color="#000099"><a href="#8">בתגובה להודעה מספר 8</a></font><br>&nbsp;<br>
<table border="0" cellpadding="5" cellspacing="0" width="70%" style="display: inline-table;">
<tbody><tr><td valign="top" width="50" nowrap="">&nbsp;&nbsp;</td><td valign="top" width="100%">
<font size="2" face="Arial" color="#000099"><font class="text15"><b> <br> רוצים להבין מה זאת ה"קונספציה"? <br>שר הביטחון גלנט הקים צוות "איפכא מסתברא" לסוגיית המודיעין. ואת מי הוא שם בראשו? את ראש אמ"ן הקודם, תמיר היימן, שחשב בדיוק כמו ראש אמ"ן הנוכחי, אהרון חליווה.<br>ועם מי גלנט התייעץ בענייני פיקוד דרום? עם האלוף הקודם, אליעזר טולדנו, עוד אחד מאבות הקונספציה.<br>לא איפכא ולא מסתברא<br>שניהם אגב יצטרכו לתת דין וחשבון לועידת הבדיקה/ חקירה שתוקם<br><a href="https://twitter.com/YehoshuaYosi/status/1727011659472933274?t=qVmMBuZssXHt4QFJYe4QhQ&amp;s=19" target="_blank" rel="nofollow"><font size="-1" color="red"><u>https://twitter.com/YehoshuaYosi/status/1727011659472933274?t=qVmMBuZssXHt4QFJYe4QhQ&amp;s=19</u></font></a></b><p> <br> </p></font></font></td></tr></tbody></table>
<br></font></td></tr><tr bgcolor="#eeeeee"><td align="right" valign="top" nowrap="">
<font size="1" face="Arial" color="#000099">
&nbsp; <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=edit&amp;forum=scoops1&amp;om=838188&amp;omm=11"><img src="https://rotter.net/forum/Images/edit.gif" border="0"></a> &nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=post&amp;forum=scoops1&amp;om=838188&amp;omm=11"><font size="1" face="Arial" color="#000099"><img src="https://rotter.net/forum/Images/response.gif" border="0"></font></a><font size="1" face="Arial" color="#000099"> &nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=read_count&amp;om=838188&amp;forum=scoops1&amp;viewmode=all"><img src="https://rotter.net/forum/Images/all.gif" border="0"></a></font><font size="1">&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=list&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/gobk.gif" border="0"></a>
&nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?quote=not_empty&amp;az=post&amp;forum=scoops1&amp;om=838188&amp;omm=11"><font size="1" face="Arial" color="#000099"> תגובה עם ציטוט </font></a>&nbsp; | <a href="javascript:updatePropertyDisplay('11')"><font face="Arial" color="#000099">תגובה מהירה</font></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcadmin.cgi?az=admin_board_manager&amp;command=admin_remove_messages&amp;forum=scoops1&amp;thread_select=838188&amp;selected=11" onclick="return confirm('למחוק תגובה?')"><font size="1" face="Arial" color="#000099">(ניהול: מחק תגובה)</font></a></font></font></td>
<td align="left" nowrap="">
<font size="1" face="Arial" color="#000099"><br>
מכתב זה והנלווה אליו, על אחריות ועל דעת הכותב בלבד
</font></td></tr></tbody></table></td></tr></tbody></table>
</td></tr></tbody></table>
</td></tr></tbody></table>
<div id="taboola-mid-page---long-article-pages" style="border: 2px solid black;" class="trc_related_container trc_spotlight_widget tbl-rtl trc_elastic trc_elastic_thumbnails-g" observeid="tbl-observe-0 tbl-observe-12" data-placement-name="mid page - long article pages"><div class="trc_rbox_container"><div><div id="trc_wrapper_62213" class="trc_rbox thumbnails-g trc-content-sponsored " style="overflow: hidden; display: block;"><div id="trc_header_62213" class="trc_rbox_header trc_rbox_border_elm"><div class="trc_header_ext"><div class="logoDiv link-attribution "><a class="trc_desktop_attribution_link trc_attribution_position_top" rel="nofollow sponsored noopener" href="https://popup.taboola.com/he/?template=colorbox&amp;utm_source=rotter&amp;utm_medium=referral&amp;utm_content=thumbnails-g:mid page - long article pages:" target="_blank"><span>by Taboola</span></a><a class="trc_mobile_attribution_link trc_attribution_position_top" rel="nofollow sponsored noopener" href="https://popup.taboola.com/he/?template=colorbox&amp;utm_source=rotter&amp;utm_medium=referral&amp;utm_content=thumbnails-g:mid page - long article pages:" target="_blank"><span>by Taboola</span></a></div><div class="logoDiv link-disclosure  attribution-disclosure-link-sponsored"><a class="trc_desktop_disclosure_link trc_attribution_position_top" rel="nofollow sponsored noopener" href="https://popup.taboola.com/he/?template=colorbox&amp;utm_source=rotter&amp;utm_medium=referral&amp;utm_content=thumbnails-g:mid page - long article pages:" target="_blank"><span>Sponsored Links</span></a><a class="trc_mobile_disclosure_link trc_attribution_position_top" rel="nofollow sponsored noopener" href="https://popup.taboola.com/he/?template=colorbox&amp;utm_source=rotter&amp;utm_medium=referral&amp;utm_content=thumbnails-g:mid page - long article pages:" target="_blank"><span>Sponsored Links</span></a></div><div class="logoDiv link-disclosure  attribution-disclosure-link-hybrid"><a class="trc_desktop_disclosure_link trc_attribution_position_top" rel="nofollow sponsored noopener" href="https://popup.taboola.com/he/?template=colorbox&amp;utm_source=rotter&amp;utm_medium=referral&amp;utm_content=thumbnails-g:mid page - long article pages:" target="_blank"><span>Promoted Links</span></a><a class="trc_mobile_disclosure_link trc_attribution_position_top" rel="nofollow sponsored noopener" href="https://popup.taboola.com/he/?template=colorbox&amp;utm_source=rotter&amp;utm_medium=referral&amp;utm_content=thumbnails-g:mid page - long article pages:" target="_blank"><span>Promoted Links</span></a></div></div><span class="trc_rbox_header_span">אולי יעניין אותך גם</span></div><div id="outer_62213" class="trc_rbox_outer"><div id="rbox-t2m" class="trc_rbox_div trc_rbox_border_elm"><div id="internal_trc_62213"><div observeid="tbl-observe-2 tbl-observe-13" data-item-id="~~V1~~-6687721670825960925~~MHF0KZ9bKfcs4Scc-aws48Mr4sVxW-1fFfy49L6MnjXnoZueAsnM0UTkqRiz-o8uuKa2_rupL9I0kvx1XVufut2qKIJrSNJ_InWKPTfYcgzi8Q9xrwCRV91TiD30JiLnIOh1iq9ZRjArdQt8SjpaGBHr-4krr3UAEcCo0fSKrH57oId7KmFAZ8JWUTupr0OqHyt95TYShh2rGAhm1MDH9CbPrgt_llpq1D_-dRcwIvhIQyetKke-7-eyYEfm_FqkMO7Tswj5WH4cylUjQLFLHQ" data-item-title="יש לכם מעל 300 אלף בחיסכון? אלו הקרנות האלטרנטיביות שעשויות להכניס עד פי 3 תשואה" data-item-thumb="http://cdn.taboola.com/libtrc/static/thumbnails/e5a6d3b78a6c0f7ae66f9bb813283a53.png" data-item-syndicated="true" class="videoCube trc_spotlight_item origin-default thumbnail_top syndicatedItem textItem videoCube_1_child trc-first-recommendation trc-spotlight-first-recommendation  trc_excludable "><a attributionsrc="" title="יש לכם מעל 300 אלף בחיסכון? אלו הקרנות האלטרנטיביות שעשויות להכניס עד פי 3 תשואה" href="https://nownet.co.il/alternative-3800/" rel="nofollow noopener sponsored" target="_blank" class=" item-thumbnail-href " slot="thumbnail"><div class="thumbBlock_holder"><span class="thumbBlock" style="background-image: url(&quot;https://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_auto%2Ch_367%2Cw_440%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/http%3A//cdn.taboola.com/libtrc/static/thumbnails/e5a6d3b78a6c0f7ae66f9bb813283a53.png&quot;);"><span class="thumbnail-overlay"></span><span class="branding"> NowNet - השקעות אלטרנטיביות</span><span class="static-text top-right"></span></span><div class="videoCube_aspect"></div></div></a><a attributionsrc="" title="יש לכם מעל 300 אלף בחיסכון? אלו הקרנות האלטרנטיביות שעשויות להכניס עד פי 3 תשואה" href="https://nownet.co.il/alternative-3800/" rel="nofollow noopener sponsored" target="_blank" class="item-label-href video-cta-style non-feed-cta-item"><span class="video-label-box trc-main-label video-label-box-cta video-label-box-cta-non-ie"><span class="video-label video-title video-label-flex-cta-item trc_ellipsis " slot="title" style="-webkit-line-clamp: 2;">יש לכם מעל 300 אלף בחיסכון? אלו הקרנות האלטרנטיביות שעשויות להכניס עד פי 3 תשואה</span><span class="branding video-branding-flex-cta-item" slot="branding"> NowNet - השקעות אלטרנטיביות</span><div class="video-cta-href"><button type="button" class="video-cta-button video-cta-style" style="border-color: rgb(0, 0, 0); font-weight: bold; font-family: Arial, Helvetica, sans-serif; color: rgb(0, 0, 0);">מידע נוסף</button></div></span></a><div class=" trc_user_exclude_btn " title="Remove this item"></div><div class=" trc_exclude_overlay trc_fade "></div><div class=" trc_undo_btn ">Undo</div></div><div observeid="tbl-observe-3 tbl-observe-14" data-item-id="~~V1~~-5449992148991571486~~lR0pJZ1Lm-EnblxU2HplBTE2JVotVK-2fUmlPzWG7nDpZyC7dGVdvKnSHsaHrNsFor4BFHsO6eE08LLg-CvdOB2tkbJ0H19gkwcUX8p5JFHbzsxfM0k_3_siGm-c3uad7qVxrsSP-cT-K4X2VXeP4vAIB0EivzWdFaw5hCc2FdPnMWdfhFz1Nsbcv-K0Xg_fjxfAtsj75Zm6PzSBS4yNydyUv6gagsfm-1Dmjw3CPOvSjwdRjPukqG5Oe8le8w52" data-item-title="עזרו לילדים שלכם לטפל בפצעי האקנה, עם השיטה הייחודית של רבקה זיידה" data-item-thumb="http://cdn.taboola.com/libtrc/static/thumbnails/0556ae166ad9c0a88fd8f81dcf378f8c.jpg" data-item-syndicated="true" class="videoCube trc_spotlight_item origin-default thumbnail_top syndicatedItem textItem videoCube_2_child trc_excludable "><a attributionsrc="" title="עזרו לילדים שלכם לטפל בפצעי האקנה, עם השיטה הייחודית של רבקה זיידה" href="https://rivkazaide.co.il/" rel="nofollow noopener sponsored" target="_blank" class=" item-thumbnail-href " slot="thumbnail"><div class="thumbBlock_holder"><span class="thumbBlock" style="background-image: url(&quot;https://images.taboola.com/taboola/image/fetch/c_crop%2Cf_jpg%2Cq_auto%2Ce_sharpen%2Car_1.2%2Cw_1296%2Cx_380%2Cy_0/c_fill%2Cw_440%2Ch_367/http%3A//cdn.taboola.com/libtrc/static/thumbnails/0556ae166ad9c0a88fd8f81dcf378f8c.jpg&quot;);"><span class="thumbnail-overlay"></span><span class="branding">Rivka Zaide</span><span class="static-text top-right"></span></span><div class="videoCube_aspect"></div></div></a><a attributionsrc="" title="עזרו לילדים שלכם לטפל בפצעי האקנה, עם השיטה הייחודית של רבקה זיידה" href="https://rivkazaide.co.il/" rel="nofollow noopener sponsored" target="_blank" class="item-label-href video-cta-style non-feed-cta-item"><span class="video-label-box trc-main-label video-label-box-cta video-label-box-cta-non-ie"><span class="video-label video-title video-label-flex-cta-item trc_ellipsis " slot="title" style="-webkit-line-clamp: 2;">עזרו לילדים שלכם לטפל בפצעי האקנה, עם השיטה הייחודית של רבקה זיידה</span><span class="branding video-branding-flex-cta-item" slot="branding">Rivka Zaide</span><div class="video-cta-href"><button type="button" class="video-cta-button video-cta-style" style="border-color: rgb(0, 0, 0); font-weight: bold; font-family: Arial, Helvetica, sans-serif; color: rgb(0, 0, 0);">קראו עוד</button></div></span></a><div class=" trc_user_exclude_btn " title="Remove this item"></div><div class=" trc_exclude_overlay trc_fade "></div><div class=" trc_undo_btn ">Undo</div></div><div observeid="tbl-observe-4 tbl-observe-15" data-item-id="~~V1~~6744790915010159540~~LRdya4Y-KSVQIh1mBB3DtBKMBLGb7LQY_367jzBn44_noZueAsnM0UTkqRiz-o8uuKa2_rupL9I0kvx1XVufut2qKIJrSNJ_InWKPTfYcgwvFg07WPu7ezROxGyxYeqUIOh1iq9ZRjArdQt8SjpaGDNmI9CGe6sUcIRPqEDfSV6mFc-L4uWe4JwY6BUyMeDtTS8Maux2jWC1gRU3nx5A7mTz7RJrna_FhEtrqIV2thboYD60qVYzKB_9uZqcHlwH" data-item-title="חצית את גיל 60?&nbsp;האמת מאחורי העלויות הגבוהות" data-item-thumb="http://cdn.taboola.com/libtrc/static/thumbnails/67de910c613339c90764fc3d757ea2dc.png" data-item-syndicated="true" class="videoCube trc_spotlight_item origin-default thumbnail_top syndicatedItem textItem videoCube_3_child trc_excludable "><a attributionsrc="" title="חצית את גיל 60?&nbsp;האמת מאחורי העלויות הגבוהות" href="https://www.seleb.co.il/%D7%94%D7%99%D7%A9%D7%A8%D7%90%D7%9C%D7%99%D7%9D-%D7%A9%D7%97%D7%AA%D7%9B%D7%95-%D7%90%D7%AA-%D7%A2%D7%9C%D7%95%D7%99%D7%95%D7%AA-%D7%94%D7%91%D7%99%D7%98%D7%95%D7%97-%D7%94%D7%A4%D7%A8%D7%98%D7%99/" rel="nofollow noopener sponsored" target="_blank" class=" item-thumbnail-href " slot="thumbnail"><div class="thumbBlock_holder"><span class="thumbBlock" style="background-image: url(&quot;https://images.taboola.com/taboola/image/fetch/c_crop%2Cf_jpg%2Cq_auto%2Ce_sharpen%2Car_1.2%2Cw_960%2Cx_80%2Cy_0/c_fill%2Cw_440%2Ch_367/http%3A//cdn.taboola.com/libtrc/static/thumbnails/67de910c613339c90764fc3d757ea2dc.png&quot;);"><span class="thumbnail-overlay"></span><span class="branding">Seleb</span><span class="static-text top-right"></span></span><div class="videoCube_aspect"></div></div></a><a attributionsrc="" title="חצית את גיל 60?&nbsp;האמת מאחורי העלויות הגבוהות" href="https://www.seleb.co.il/%D7%94%D7%99%D7%A9%D7%A8%D7%90%D7%9C%D7%99%D7%9D-%D7%A9%D7%97%D7%AA%D7%9B%D7%95-%D7%90%D7%AA-%D7%A2%D7%9C%D7%95%D7%99%D7%95%D7%AA-%D7%94%D7%91%D7%99%D7%98%D7%95%D7%97-%D7%94%D7%A4%D7%A8%D7%98%D7%99/" rel="nofollow noopener sponsored" target="_blank" class=" item-label-href "><span class="video-label-box trc-main-label "><span class="video-label video-title trc_ellipsis " slot="title" style="-webkit-line-clamp: 1;">חצית את גיל 60?&nbsp;האמת מאחורי העלויות הגבוהות</span><span class="branding" slot="branding">Seleb</span></span></a><div class=" trc_user_exclude_btn " title="Remove this item"></div><div class=" trc_exclude_overlay trc_fade "></div><div class=" trc_undo_btn ">Undo</div></div><figure id="taboola-mid-page---long-article-pages-video" style="position: absolute; float: right; top: 0px; left: 0px; width: auto; margin: 0px 30.925px 10px 0px; z-index: 90;"><div class="_cm-div" id="_cm-css-reset" data-tracked="true"></div></figure><div observeid="tbl-observe-5 tbl-observe-16" data-item-id="~~V1~~3191429725884904468~~7pmPdfxy6CaecmJGPvmSAIjPSZa-XVAchEfCwGEtRSp9_9IWyVTZYEw3zPc60dwzHu_TYvngZ3fIkOCpr71_kNsEc1Z_zcbixnbk0JPozAnwpVFuIynrD_v0_9yFcoCMfe1hepjUAQzjn_rbUHeUUsxwM9vnrM__lwNlNYuqS14vSoa27qmMTRLIFZNG4Jso8FVvB3EAALxt-faU4cAhPZpInogMnLXIzf74SLDck6Q" data-item-title="הכירו את 20 גזעי הכלבים החכמים ביותר!" data-item-thumb="http://cdn.taboola.com/libtrc/static/thumbnails/5e4b5c405c97263a50c50fa4b2a89063.jpg" data-item-syndicated="true" class="videoCube trc_spotlight_item origin-default thumbnail_top syndicatedItem photoItem videoCube_4_child trc_excludable "><a attributionsrc="" title="הכירו את 20 גזעי הכלבים החכמים ביותר!" href="https://thefamilybreeze.com/categories/il/smartest-dogs/" rel="nofollow noopener sponsored" target="_blank" class=" item-thumbnail-href " slot="thumbnail"><div class="thumbBlock_holder"><span class="thumbBlock" style="background-image: url(&quot;https://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_auto%2Ch_367%2Cw_440%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/http%3A//cdn.taboola.com/libtrc/static/thumbnails/5e4b5c405c97263a50c50fa4b2a89063.jpg&quot;);"><span class="thumbnail-overlay"></span><span class="branding">The Family Breeze</span><span class="static-text top-right"></span></span><div class="videoCube_aspect"></div></div></a><a attributionsrc="" title="הכירו את 20 גזעי הכלבים החכמים ביותר!" href="https://thefamilybreeze.com/categories/il/smartest-dogs/" rel="nofollow noopener sponsored" target="_blank" class=" item-label-href "><span class="video-label-box trc-main-label "><span class="video-label video-title trc_ellipsis " slot="title" style="-webkit-line-clamp: 1;">הכירו את 20 גזעי הכלבים החכמים ביותר!</span><span class="branding" slot="branding">The Family Breeze</span></span></a><div class=" trc_user_exclude_btn " title="Remove this item"></div><div class=" trc_exclude_overlay trc_fade "></div><div class=" trc_undo_btn ">Undo</div></div><div observeid="tbl-observe-6 tbl-observe-17" data-item-id="~~V1~~-8748214387923386415~~ZbeUqVhNnwniLkble35-ixcg7LBS1DZ_zwlB22aokwLnoZueAsnM0UTkqRiz-o8uuKa2_rupL9I0kvx1XVufut2qKIJrSNJ_InWKPTfYcgw4bmp9dC4J5X4cXdDUi5jtIOh1iq9ZRjArdQt8SjpaGDNmI9CGe6sUcIRPqEDfSV5QkoTuyu-bHNTzEQb8zhD4TS8Maux2jWC1gRU3nx5A7mTz7RJrna_FhEtrqIV2thboYD60qVYzKB_9uZqcHlwH" data-item-title="פיני בלילי, מסיר שיער עם סנסילייט פרו כמו אלפי משתמשות ומשתמשים בארץ ובעולם!&nbsp;" data-item-thumb="http://cdn.taboola.com/libtrc/static/thumbnails/3e0eb6b78d15bc740c729b73836d3da8.jpg" data-item-syndicated="true" class="videoCube trc_spotlight_item origin-default thumbnail_top syndicatedItem textItem videoCube_5_child trc_excludable "><a attributionsrc="" title="פיני בלילי, מסיר שיער עם סנסילייט פרו כמו אלפי משתמשות ומשתמשים בארץ ובעולם!&nbsp;" href="https://life-mag.co.il/slp-pini/" rel="nofollow noopener sponsored" target="_blank" class=" item-thumbnail-href " slot="thumbnail"><div class="thumbBlock_holder"><span class="thumbBlock" style="background-image: url(&quot;https://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_auto%2Ch_367%2Cw_440%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/http%3A//cdn.taboola.com/libtrc/static/thumbnails/3e0eb6b78d15bc740c729b73836d3da8.jpg&quot;);"><span class="thumbnail-overlay"></span><span class="branding">Life-mag | מגזין יופי ואיכות חיים</span><span class="static-text top-right"></span></span><div class="videoCube_aspect"></div></div></a><a attributionsrc="" title="פיני בלילי, מסיר שיער עם סנסילייט פרו כמו אלפי משתמשות ומשתמשים בארץ ובעולם!&nbsp;" href="https://life-mag.co.il/slp-pini/" rel="nofollow noopener sponsored" target="_blank" class="item-label-href video-cta-style non-feed-cta-item"><span class="video-label-box trc-main-label video-label-box-cta video-label-box-cta-non-ie"><span class="video-label video-title video-label-flex-cta-item" slot="title">פיני בלילי, מסיר שיער עם סנסילייט פרו כמו אלפי משתמשות ומשתמשים בארץ ובעולם!&nbsp;</span><span class="branding video-branding-flex-cta-item" slot="branding">Life-mag | מגזין יופי ואיכות חיים</span><div class="video-cta-href"><button type="button" class="video-cta-button video-cta-style" style="border-color: black; font-weight: bold;">מידע נוסף</button></div></span></a><div class=" trc_user_exclude_btn " title="Remove this item"></div><div class=" trc_exclude_overlay trc_fade "></div><div class=" trc_undo_btn ">Undo</div></div><div observeid="tbl-observe-7 tbl-observe-18" data-item-id="~~V1~~7065906489632573983~~-QmpXOwBqyfKbVftia16qhcSIGs7oWsOqhCan2CkEOznoZueAsnM0UTkqRiz-o8uV9GNaet_FWxUAZ9PPPsFwfJyD_klkQSGyyVr_plwI0W179UkoYbyUH3C-CtCJBW3_OeFEccbM5tXcOHWzNhpSBJc2JojBluQ484jUwWlV9XtWQ4PJW7nz3LbTbvf3t7X0DienrMXtv3R6ZWqDZ1725xFtVj1S2j8Uvlszv9Rgm8" data-item-title="מוצרי ספיגה למבוגרים: כך חוסכים אלפי שקלים בשנה מבלי להתפשר על האיכות" data-item-thumb="http://cdn.taboola.com/libtrc/static/thumbnails/d52e8376645b57ccd50c2b5a4171bcd9.jpg" data-item-syndicated="true" class="videoCube trc_spotlight_item origin-default thumbnail_top syndicatedItem textItem videoCube_6_child trc_excludable "><a attributionsrc="" title="מוצרי ספיגה למבוגרים: כך חוסכים אלפי שקלים בשנה מבלי להתפשר על האיכות" href="https://gush-dan.co.il/%d7%9e%d7%95%d7%a6%d7%a8%d7%99-%d7%a1%d7%a4%d7%99%d7%92%d7%94-%d7%9c%d7%9e%d7%91%d7%95%d7%92%d7%a8%d7%99%d7%9d-%d7%9e%d7%95%d7%a8-%d7%90%d7%a0%d7%93-%d7%91%d7%98%d7%a8-%d7%a9%d7%95%d7%91%d7%a8%d7%aa/" rel="nofollow noopener sponsored" target="_blank" class=" item-thumbnail-href " slot="thumbnail"><div class="thumbBlock_holder"><span class="thumbBlock" style="background-image: url(&quot;https://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_auto%2Ch_367%2Cw_440%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/http%3A//cdn.taboola.com/libtrc/static/thumbnails/d52e8376645b57ccd50c2b5a4171bcd9.jpg&quot;);"><span class="thumbnail-overlay"></span><span class="branding">Gush Dan מגזין</span><span class="static-text top-right"></span></span><div class="videoCube_aspect"></div></div></a><a attributionsrc="" title="מוצרי ספיגה למבוגרים: כך חוסכים אלפי שקלים בשנה מבלי להתפשר על האיכות" href="https://gush-dan.co.il/%d7%9e%d7%95%d7%a6%d7%a8%d7%99-%d7%a1%d7%a4%d7%99%d7%92%d7%94-%d7%9c%d7%9e%d7%91%d7%95%d7%92%d7%a8%d7%99%d7%9d-%d7%9e%d7%95%d7%a8-%d7%90%d7%a0%d7%93-%d7%91%d7%98%d7%a8-%d7%a9%d7%95%d7%91%d7%a8%d7%aa/" rel="nofollow noopener sponsored" target="_blank" class=" item-label-href "><span class="video-label-box trc-main-label "><span class="video-label video-title" slot="title">מוצרי ספיגה למבוגרים: כך חוסכים אלפי שקלים בשנה מבלי להתפשר על האיכות</span><span class="branding" slot="branding">Gush Dan מגזין</span></span></a><div class=" trc_user_exclude_btn " title="Remove this item"></div><div class=" trc_exclude_overlay trc_fade "></div><div class=" trc_undo_btn ">Undo</div></div><div observeid="tbl-observe-8 tbl-observe-19" data-item-id="~~V1~~-7736137641551299983~~Po-eDQDeeu3XPzUgIYXX35N-i1RDWKkCcSeOK1fz8ol9_9IWyVTZYEw3zPc60dwzHu_TYvngZ3fIkOCpr71_kEG7ZV-otJlb-HW-fz6du33wpVFuIynrD_v0_9yFcoCMMOp_esxumCR3JezYBZo_T_yKQ8O1lgNDOYVtYu9UYiKdIH0g5w8SzkdC5fAcQJEmo6MO7abayHm7QAnUu85_Zg" data-item-title="שחקו את המשחק הזה לדקה ותבינו למה כולם מכורים. ללא התקנה." data-item-thumb="http://cdn.taboola.com/libtrc/static/thumbnails/77564c603753aaf3b221a81be1d737e0.jpg" data-item-syndicated="true" class="videoCube trc_spotlight_item origin-default thumbnail_top syndicatedItem textItem videoCube_7_child trc_excludable "><a attributionsrc="" title="שחקו את המשחק הזה לדקה ותבינו למה כולם מכורים. ללא התקנה." href="https://navy.quest/" rel="nofollow noopener sponsored" target="_blank" class=" item-thumbnail-href " slot="thumbnail"><div class="thumbBlock_holder"><span class="thumbBlock" style="background-image: url(&quot;https://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_auto%2Ch_367%2Cw_440%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/http%3A//cdn.taboola.com/libtrc/static/thumbnails/77564c603753aaf3b221a81be1d737e0.jpg&quot;);"><span class="thumbnail-overlay"></span><span class="branding">Navy.Quest Game</span><span class="static-text top-right"></span></span><div class="videoCube_aspect"></div></div></a><a attributionsrc="" title="שחקו את המשחק הזה לדקה ותבינו למה כולם מכורים. ללא התקנה." href="https://navy.quest/" rel="nofollow noopener sponsored" target="_blank" class=" item-label-href "><span class="video-label-box trc-main-label "><span class="video-label video-title" slot="title">שחקו את המשחק הזה לדקה ותבינו למה כולם מכורים. ללא התקנה.</span><span class="branding" slot="branding">Navy.Quest Game</span></span></a><div class=" trc_user_exclude_btn " title="Remove this item"></div><div class=" trc_exclude_overlay trc_fade "></div><div class=" trc_undo_btn ">Undo</div></div><div observeid="tbl-observe-9 tbl-observe-20" data-item-id="~~V1~~-2287371532150928486~~lUQ2NZNfIvrg4dY6WDqdK62zrssFny7vNAXVsC3p8ujPfpbKAjCpgMGfy8go7n7Pi_--gEjntwmGGbcNzahs3-F_Cx8vhyFnWnNa1HWPsjSn8Wzt4btAtVyLmI7LX3so7VkODyVu589y2027397e12ht2tLGbThBbTRFqZEXHKM" data-item-title="למקסם את תיק ההשקעות: &amp;#34;הזדמנויות נוצרות גם בשוק תנודתי&amp;#34;" data-item-thumb="http://cdn.taboola.com/libtrc/static/thumbnails/e05d3dc0479cc880343d2d5bb7ff7c37.jpg" data-item-syndicated="true" class="videoCube trc_spotlight_item origin-default thumbnail_top syndicatedItem textItem videoCube_8_child trc_excludable "><a attributionsrc="" title="למקסם את תיק ההשקעות: &quot;הזדמנויות נוצרות גם בשוק תנודתי&quot;" href="https://real-invest.co.il/" rel="nofollow noopener sponsored" target="_blank" class=" item-thumbnail-href " slot="thumbnail"><div class="thumbBlock_holder"><span class="thumbBlock" style="background-image: url(&quot;https://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_auto%2Ch_367%2Cw_440%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/http%3A//cdn.taboola.com/libtrc/static/thumbnails/e05d3dc0479cc880343d2d5bb7ff7c37.jpg&quot;);"><span class="thumbnail-overlay"></span><span class="branding">Real Invest השקעות</span><span class="static-text top-right"></span></span><div class="videoCube_aspect"></div></div></a><a attributionsrc="" title="למקסם את תיק ההשקעות: &quot;הזדמנויות נוצרות גם בשוק תנודתי&quot;" href="https://real-invest.co.il/" rel="nofollow noopener sponsored" target="_blank" class=" item-label-href "><span class="video-label-box trc-main-label "><span class="video-label video-title" slot="title">למקסם את תיק ההשקעות: "הזדמנויות נוצרות גם בשוק תנודתי"</span><span class="branding" slot="branding">Real Invest השקעות</span></span></a><div class=" trc_user_exclude_btn " title="Remove this item"></div><div class=" trc_exclude_overlay trc_fade "></div><div class=" trc_undo_btn ">Undo</div></div><div observeid="tbl-observe-10 tbl-observe-21" data-item-id="~~V1~~-43936150023445268~~DmUCVtRAz1eEOOlnBFOPua2zrssFny7vNAXVsC3p8uhTvULWSHyqWhSL5aMPl_qMi_--gEjntwmGGbcNzahs3-F_Cx8vhyFnWnNa1HWPsjSn8Wzt4btAtVyLmI7LX3so7VkODyVu589y2027397e12ht2tLGbThBbTRFqZEXHKM" data-item-title="ניהול תיק השקעות בעיתות משבר: ראייה אסטרטגית לבעלי הון נזיל של 300,000 שקל ומעלה" data-item-thumb="http://cdn.taboola.com/libtrc/static/thumbnails/6ae1f94497381a2b91ace8d2af95391b.jpg" data-item-syndicated="true" class="videoCube trc_spotlight_item origin-default thumbnail_top syndicatedItem textItem videoCube_9_child trc_excludable "><a attributionsrc="" title="ניהול תיק השקעות בעיתות משבר: ראייה אסטרטגית לבעלי הון נזיל של 300,000 שקל ומעלה" href="https://real-invest.co.il/" rel="nofollow noopener sponsored" target="_blank" class=" item-thumbnail-href " slot="thumbnail"><div class="thumbBlock_holder"><span class="thumbBlock" style="background-image: url(&quot;https://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_auto%2Ch_367%2Cw_440%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/http%3A//cdn.taboola.com/libtrc/static/thumbnails/6ae1f94497381a2b91ace8d2af95391b.jpg&quot;);"><span class="thumbnail-overlay"></span><span class="branding">Real Invest השקעות</span><span class="static-text top-right"></span></span><div class="videoCube_aspect"></div></div></a><a attributionsrc="" title="ניהול תיק השקעות בעיתות משבר: ראייה אסטרטגית לבעלי הון נזיל של 300,000 שקל ומעלה" href="https://real-invest.co.il/" rel="nofollow noopener sponsored" target="_blank" class=" item-label-href "><span class="video-label-box trc-main-label "><span class="video-label video-title" slot="title">ניהול תיק השקעות בעיתות משבר: ראייה אסטרטגית לבעלי הון נזיל של 300,000 שקל ומעלה</span><span class="branding" slot="branding">Real Invest השקעות</span></span></a><div class=" trc_user_exclude_btn " title="Remove this item"></div><div class=" trc_exclude_overlay trc_fade "></div><div class=" trc_undo_btn ">Undo</div></div><div observeid="tbl-observe-11 tbl-observe-22" data-item-id="~~V1~~-4887389870635182581~~R8X6EXDFBC7d7JJzGDcJE9x2uV8-QlnFDeNV9ZYbH5QndpXq_nTToVci-tV_1bYyPVPbFHdycXfyr1VxmozLcRtMUwo-H2zCE_QWzxLHq2s17oBI1YzMwYXL57ZPuJHnDqm8VCJ3ipFztq32hGI__dvOzF8zST_f-yIab5ze5p2pa8iPgEdkjMZUK71vsCeunIhfF0bZrE1L0KG4iVCFcpybUns6inaBzyA-6mNhlkyPF8C2yPvlmbo_NIFLjI3J3JS_qBqCx-b7UOaPDcI86wVpSry0riSMBf7iqNHTahE" data-item-title="הכאבים והדלקת מפריעים לך בשגרה?" data-item-thumb="http://cdn.taboola.com/libtrc/static/thumbnails/7eb3876a25aaeddd57d8faff74a17808.jpg" data-item-syndicated="true" class="videoCube trc_spotlight_item origin-default thumbnail_top syndicatedItem textItem videoCube_10_child trc_excludable "><a attributionsrc="" title="הכאבים והדלקת מפריעים לך בשגרה?" href="https://amorphicure.co.il/directlp/" rel="nofollow noopener sponsored" target="_blank" class=" item-thumbnail-href " slot="thumbnail"><div class="thumbBlock_holder"><span class="thumbBlock" style="background-image: url(&quot;https://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_auto%2Ch_367%2Cw_440%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/http%3A//cdn.taboola.com/libtrc/static/thumbnails/7eb3876a25aaeddd57d8faff74a17808.jpg&quot;);"><span class="thumbnail-overlay"></span><span class="branding">AMORpHICURE</span><span class="static-text top-right"></span></span><div class="videoCube_aspect"></div></div></a><a attributionsrc="" title="הכאבים והדלקת מפריעים לך בשגרה?" href="https://amorphicure.co.il/directlp/" rel="nofollow noopener sponsored" target="_blank" class="item-label-href video-cta-style non-feed-cta-item"><span class="video-label-box trc-main-label video-label-box-cta video-label-box-cta-non-ie"><span class="video-label video-title video-label-flex-cta-item" slot="title">הכאבים והדלקת מפריעים לך בשגרה?</span><span class="branding video-branding-flex-cta-item" slot="branding">AMORpHICURE</span><div class="video-cta-href"><button type="button" class="video-cta-button video-cta-style" style="border-color: black; font-weight: bold;">מידע נוסף</button></div></span></a><div class=" trc_user_exclude_btn " title="Remove this item"></div><div class=" trc_exclude_overlay trc_fade "></div><div class=" trc_undo_btn ">Undo</div></div></div></div></div><div class="trc_clearer"></div></div></div></div></div>
<script type="text/javascript">
		  window._taboola = window._taboola || [];
		  _taboola.push({
		    mode: 'thumbnails-g',
		    container: 'taboola-mid-page---long-article-pages',
		    placement: 'mid page - long article pages',
		    target_type: 'mix'
		  });
		</script>
<table border="0" width="100%" cellpadding="1" cellspacing="0"><tbody><tr>
<td width="18"><img src="https://rotter.net/forum/Images/blank.gif" width="18" height="10"></td><td width="100%">
<table border="0" width="100%" cellpadding="0" cellspacing="0" bgcolor="#000000">
<tbody><tr><td><table border="0" width="100%" cellpadding="1" cellspacing="0">
<tbody><tr><td><table border="0" width="100%" cellpadding="3" cellspacing="0">
<tbody><tr bgcolor="#eeeeee"><td align="RIGHT" valign="top" nowrap="" width="50%" rowspan="2">
<font size="2" face="Arial" color="#000099">
<a name="20"><b>חיפוי אוירי</b></a>
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=%E7%E9%F4%E5%E9%20%E0%E5%E9%F8%E9"><img src="https://rotter.net/forum/Images/1_star.gif" border="0" alt="לחץ כאן להצגת דירוג המשתמש"></a><br>
<font size="1">חבר מתאריך 21.3.23</font><br>
<font size="1">1070 הודעות</font>, <font size="1" color="006633"> <b>10 מדרגים</b></font>, <font color="red" size="1"> <b>8 נקודות. &nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=חיפוי אוירי"><font color="000099" size="-1"><u>ראה משוב</u></font></a></b></font></font></td><td align="LEFT" valign="top" width="50%" nowrap=""><font size="1" face="Arial" color="#000099"><font color="black">יום שני י' 'באדר א תשפ''ד &nbsp;&nbsp;</font>
<font color="red">22:45</font> &nbsp; <font color="#eeeeee" size="1"> </font>19.02.24</font>&nbsp;&nbsp;&nbsp;</td></tr>
<tr bgcolor="#eeeeee"><td align="LEFT">
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=send_mesg&amp;userid=%E7%E9%F4%E5%E9%20%E0%E5%E9%F8%E9" target="_new"><img src="https://rotter.net/forum/Images/mesg.gif" border="0" title="לחץ לשליחת הודעה פרטית למשתמש"></a> <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=user_profiles&amp;user=%E7%E9%F4%E5%E9%20%E0%E5%E9%F8%E9"><img src="https://rotter.net/forum/Images/profile_small.gif" title="לחץ להצגת פרופיל המשתמש" border="0"></a><a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=add_buddy&amp;user=%E7%E9%F4%E5%E9%20%E0%E5%E9%F8%E9&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/mesg_add_buddy.gif" title="לחץ להוספת משתמש זה לרשימת החברים שלך" border="0"></a>
<a href="javascript:makeRemote('https://rotter.net/cgi-bin/forum/Lib/view_user_kartis.pl?user=חיפוי אוירי')">
<img src="https://rotter.net/forum/Images/kartis.gif" border="0" alt="כרטיס אישי"></a>&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_ip&amp;forum=scoops1&amp;om=838188&amp;omm=20&amp;name=חיפוי אוירי"><img src="https://rotter.net/forum/Images/ip.gif" border="0" alt="עבור לצ'אט"></a>
&nbsp;</td></tr>
<tr bgcolor="#FDFDFD"><td colspan="2" width="100%">
<font size="2" face="Arial" color="#000099">
&nbsp;&nbsp;<font class="text16b">20. לפי פרסום של יוסי יהושוע מ27.10.23 היימן חבר הצוות ייעוץ אסטרטגי מצומצם שגלנט הקים לעצמו.&nbsp;&nbsp;</font><br>
<font size="1" face="Arial" color="#000099"><a href="#3">בתגובה להודעה מספר 3</a></font><br>&nbsp;<br>
<table border="0" cellpadding="5" cellspacing="0" width="70%" style="display: inline-table;">
<tbody><tr><td valign="top" width="50" nowrap="">&nbsp;&nbsp;</td><td valign="top" width="100%">
<font size="2" face="Arial" color="#000099"><font class="text15"><b> <br> לפי פרסום של יוסי יהושוע מ27.10.23 היימן חבר הצוות ייעוץ אסטרטגי מצומצם שגלנט הקים לעצמו.</b><p><b><a href="https://twitter.com/meiretingr/status/1759676099766681883?t=bXDe4WVANnHog-sZgbCo5A&amp;s=19" target="_blank" rel="nofollow"><font size="-1" color="red"><u>https://twitter.com/meiretingr/status/1759676099766681883?t=bXDe4WVANnHog-sZgbCo5A&amp;s=19</u></font></a></b></p><p> <br> </p></font></font></td></tr></tbody></table>
<br></font></td></tr><tr bgcolor="#eeeeee"><td align="right" valign="top" nowrap="">
<font size="1" face="Arial" color="#000099">
&nbsp; <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=edit&amp;forum=scoops1&amp;om=838188&amp;omm=20"><img src="https://rotter.net/forum/Images/edit.gif" border="0"></a> &nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=post&amp;forum=scoops1&amp;om=838188&amp;omm=20"><font size="1" face="Arial" color="#000099"><img src="https://rotter.net/forum/Images/response.gif" border="0"></font></a><font size="1" face="Arial" color="#000099"> &nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=read_count&amp;om=838188&amp;forum=scoops1&amp;viewmode=all"><img src="https://rotter.net/forum/Images/all.gif" border="0"></a></font><font size="1">&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=list&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/gobk.gif" border="0"></a>
&nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?quote=not_empty&amp;az=post&amp;forum=scoops1&amp;om=838188&amp;omm=20"><font size="1" face="Arial" color="#000099"> תגובה עם ציטוט </font></a>&nbsp; | <a href="javascript:updatePropertyDisplay('20')"><font face="Arial" color="#000099">תגובה מהירה</font></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcadmin.cgi?az=admin_board_manager&amp;command=admin_remove_messages&amp;forum=scoops1&amp;thread_select=838188&amp;selected=20" onclick="return confirm('למחוק תגובה?')"><font size="1" face="Arial" color="#000099">(ניהול: מחק תגובה)</font></a></font></font></td>
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
<a name="4"><b>סמי הכבאי</b></a>
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=%F1%EE%E9%20%E4%EB%E1%E0%E9"><img src="https://rotter.net/forum/Images/5_star.gif" border="0" alt="לחץ כאן להצגת דירוג המשתמש"></a><br>
<font size="1">חבר מתאריך 27.1.15</font><br>
<font size="1">13918 הודעות</font>, <font size="1" color="006633"> <b>151 מדרגים</b></font>, <font color="red" size="1"> <b>297 נקודות. &nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=סמי הכבאי"><font color="000099" size="-1"><u>ראה משוב</u></font></a></b></font></font></td><td align="LEFT" valign="top" width="50%" nowrap=""><font size="1" face="Arial" color="#000099"><font color="black">יום שני י' 'באדר א תשפ''ד &nbsp;&nbsp;</font>
<font color="red">22:26</font> &nbsp; <font color="#eeeeee" size="1"> </font>19.02.24</font>&nbsp;&nbsp;&nbsp;</td></tr>
<tr bgcolor="#eeeeee"><td align="LEFT">
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=send_mesg&amp;userid=%F1%EE%E9%20%E4%EB%E1%E0%E9" target="_new"><img src="https://rotter.net/forum/Images/mesg.gif" border="0" title="לחץ לשליחת הודעה פרטית למשתמש"></a> <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=user_profiles&amp;user=%F1%EE%E9%20%E4%EB%E1%E0%E9"><img src="https://rotter.net/forum/Images/profile_small.gif" title="לחץ להצגת פרופיל המשתמש" border="0"></a><a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=add_buddy&amp;user=%F1%EE%E9%20%E4%EB%E1%E0%E9&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/mesg_add_buddy.gif" title="לחץ להוספת משתמש זה לרשימת החברים שלך" border="0"></a>
<a href="javascript:makeRemote('https://rotter.net/cgi-bin/forum/Lib/view_user_kartis.pl?user=סמי הכבאי')">
<img src="https://rotter.net/forum/Images/kartis.gif" border="0" alt="כרטיס אישי"></a>&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_ip&amp;forum=scoops1&amp;om=838188&amp;omm=4&amp;name=סמי הכבאי"><img src="https://rotter.net/forum/Images/ip.gif" border="0" alt="עבור לצ'אט"></a>
&nbsp;</td></tr>
<tr bgcolor="#FDFDFD"><td colspan="2" width="100%">
<font size="2" face="Arial" color="#000099">
&nbsp;&nbsp;<font class="text16b">4. מותר&nbsp;&nbsp;</font><br>
<font size="1" face="Arial" color="#000099"><a href="#0">בתגובה להודעה מספר 0</a></font><br>&nbsp;<br>
<table border="0" cellpadding="5" cellspacing="0" width="70%" style="display: inline-table;">
<tbody><tr><td valign="top" width="50" nowrap="">&nbsp;&nbsp;</td><td valign="top" width="100%">
<font size="2" face="Arial" color="#000099"><font class="text15"><b> <br> </b><p> <br> </p></font></font></td></tr></tbody></table>
<br></font></td></tr><tr bgcolor="#eeeeee"><td align="right" valign="top" nowrap="">
<font size="1" face="Arial" color="#000099">
&nbsp; <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=edit&amp;forum=scoops1&amp;om=838188&amp;omm=4"><img src="https://rotter.net/forum/Images/edit.gif" border="0"></a> &nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=post&amp;forum=scoops1&amp;om=838188&amp;omm=4"><font size="1" face="Arial" color="#000099"><img src="https://rotter.net/forum/Images/response.gif" border="0"></font></a><font size="1" face="Arial" color="#000099"> &nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=read_count&amp;om=838188&amp;forum=scoops1&amp;viewmode=all"><img src="https://rotter.net/forum/Images/all.gif" border="0"></a></font><font size="1">&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=list&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/gobk.gif" border="0"></a>
&nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?quote=not_empty&amp;az=post&amp;forum=scoops1&amp;om=838188&amp;omm=4"><font size="1" face="Arial" color="#000099"> תגובה עם ציטוט </font></a>&nbsp; | <a href="javascript:updatePropertyDisplay('4')"><font face="Arial" color="#000099">תגובה מהירה</font></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcadmin.cgi?az=admin_board_manager&amp;command=admin_remove_messages&amp;forum=scoops1&amp;thread_select=838188&amp;selected=4" onclick="return confirm('למחוק תגובה?')"><font size="1" face="Arial" color="#000099">(ניהול: מחק תגובה)</font></a></font></font></td>
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
<a name="5"><b>פלומה</b></a>
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=%F4%EC%E5%EE%E4"><img src="https://rotter.net/forum/Images/5_star.gif" border="0" alt="לחץ כאן להצגת דירוג המשתמש"></a><br>
<font size="1">חבר מתאריך 13.1.15</font><br>
<font size="1">93798 הודעות</font>, <font size="1" color="006633"> <b>217 מדרגים</b></font>, <font color="red" size="1"> <b>402 נקודות. &nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=פלומה"><font color="000099" size="-1"><u>ראה משוב</u></font></a></b></font></font></td><td align="LEFT" valign="top" width="50%" nowrap=""><font size="1" face="Arial" color="#000099"><font color="black">יום שני י' 'באדר א תשפ''ד &nbsp;&nbsp;</font>
<font color="red">22:27</font> &nbsp; <font color="#eeeeee" size="1"> </font>19.02.24</font>&nbsp;&nbsp;&nbsp;</td></tr>
<tr bgcolor="#eeeeee"><td align="LEFT">
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=send_mesg&amp;userid=%F4%EC%E5%EE%E4" target="_new"><img src="https://rotter.net/forum/Images/mesg.gif" border="0" title="לחץ לשליחת הודעה פרטית למשתמש"></a> <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=user_profiles&amp;user=%F4%EC%E5%EE%E4"><img src="https://rotter.net/forum/Images/profile_small.gif" title="לחץ להצגת פרופיל המשתמש" border="0"></a><a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=add_buddy&amp;user=%F4%EC%E5%EE%E4&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/mesg_add_buddy.gif" title="לחץ להוספת משתמש זה לרשימת החברים שלך" border="0"></a>
<a href="javascript:makeRemote('https://rotter.net/cgi-bin/forum/Lib/view_user_kartis.pl?user=פלומה')">
<img src="https://rotter.net/forum/Images/kartis.gif" border="0" alt="כרטיס אישי"></a>&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_ip&amp;forum=scoops1&amp;om=838188&amp;omm=5&amp;name=פלומה"><img src="https://rotter.net/forum/Images/ip.gif" border="0" alt="עבור לצ'אט"></a>
&nbsp;</td></tr>
<tr bgcolor="#FDFDFD"><td colspan="2" width="100%">
<font size="2" face="Arial" color="#000099">
&nbsp;&nbsp;<font class="text16b">5. למעשה הinss הרדים את ישראל השאלה מאיזה מניעים ושיקולים זרים .&nbsp;&nbsp;</font><br>
<font size="1" face="Arial" color="#000099"><a href="#0">בתגובה להודעה מספר 0</a></font><br>&nbsp;<br>
<table border="0" cellpadding="5" cellspacing="0" width="70%" style="display: inline-table;">
<tbody><tr><td valign="top" width="50" nowrap="">&nbsp;&nbsp;</td><td valign="top" width="100%">
<font size="2" face="Arial" color="#000099"><font class="text15"><b> <br> </b><p> <br> </p></font></font></td></tr></tbody></table>
<br></font></td></tr><tr bgcolor="#eeeeee"><td align="right" valign="top" nowrap="">
<font size="1" face="Arial" color="#000099">
&nbsp; <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=edit&amp;forum=scoops1&amp;om=838188&amp;omm=5"><img src="https://rotter.net/forum/Images/edit.gif" border="0"></a> &nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=post&amp;forum=scoops1&amp;om=838188&amp;omm=5"><font size="1" face="Arial" color="#000099"><img src="https://rotter.net/forum/Images/response.gif" border="0"></font></a><font size="1" face="Arial" color="#000099"> &nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=read_count&amp;om=838188&amp;forum=scoops1&amp;viewmode=all"><img src="https://rotter.net/forum/Images/all.gif" border="0"></a></font><font size="1">&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=list&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/gobk.gif" border="0"></a>
&nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?quote=not_empty&amp;az=post&amp;forum=scoops1&amp;om=838188&amp;omm=5"><font size="1" face="Arial" color="#000099"> תגובה עם ציטוט </font></a>&nbsp; | <a href="javascript:updatePropertyDisplay('5')"><font face="Arial" color="#000099">תגובה מהירה</font></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcadmin.cgi?az=admin_board_manager&amp;command=admin_remove_messages&amp;forum=scoops1&amp;thread_select=838188&amp;selected=5" onclick="return confirm('למחוק תגובה?')"><font size="1" face="Arial" color="#000099">(ניהול: מחק תגובה)</font></a></font></font></td>
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
<a name="14"><b>עדי</b></a>
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=%F2%E3%E9"><img src="https://rotter.net/forum/Images/5_star.gif" border="0" alt="לחץ כאן להצגת דירוג המשתמש"></a><br>
<font size="1">חבר מתאריך 6.9.19</font><br>
<font size="1">35565 הודעות</font>, <font size="1" color="006633"> <b>79 מדרגים</b></font>, <font color="red" size="1"> <b>41 נקודות. &nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=עדי"><font color="000099" size="-1"><u>ראה משוב</u></font></a></b></font></font></td><td align="LEFT" valign="top" width="50%" nowrap=""><font size="1" face="Arial" color="#000099"><font color="black">יום שני י' 'באדר א תשפ''ד &nbsp;&nbsp;</font>
<font color="red">22:34</font> &nbsp; <font color="#eeeeee" size="1"> </font>19.02.24</font>&nbsp;&nbsp;&nbsp;</td></tr>
<tr bgcolor="#eeeeee"><td align="LEFT">
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=send_mesg&amp;userid=%F2%E3%E9" target="_new"><img src="https://rotter.net/forum/Images/mesg.gif" border="0" title="לחץ לשליחת הודעה פרטית למשתמש"></a> <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=user_profiles&amp;user=%F2%E3%E9"><img src="https://rotter.net/forum/Images/profile_small.gif" title="לחץ להצגת פרופיל המשתמש" border="0"></a><a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=add_buddy&amp;user=%F2%E3%E9&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/mesg_add_buddy.gif" title="לחץ להוספת משתמש זה לרשימת החברים שלך" border="0"></a>
<a href="javascript:makeRemote('https://rotter.net/cgi-bin/forum/Lib/view_user_kartis.pl?user=עדי')">
<img src="https://rotter.net/forum/Images/kartis.gif" border="0" alt="כרטיס אישי"></a>&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_ip&amp;forum=scoops1&amp;om=838188&amp;omm=14&amp;name=עדי"><img src="https://rotter.net/forum/Images/ip.gif" border="0" alt="עבור לצ'אט"></a>
&nbsp;</td></tr>
<tr bgcolor="#FDFDFD"><td colspan="2" width="100%">
<font size="2" face="Arial" color="#000099">
&nbsp;&nbsp;<font class="text16b">14. ממתי ישיבות סגורות זה רק חומרים סודיים ? ומי אמר שהוא חשף חומרים סודיים ? הערות לדעות שנאמרות בישיבות זה משהו שאסור ?&nbsp;&nbsp;</font><br>
<font size="1" face="Arial" color="#000099"><a href="#0">בתגובה להודעה מספר 0</a></font><br>&nbsp;<br>
<table border="0" cellpadding="5" cellspacing="0" width="70%" style="display: inline-table;">
<tbody><tr><td valign="top" width="50" nowrap="">&nbsp;&nbsp;</td><td valign="top" width="100%">
<font size="2" face="Arial" color="#000099"><font class="text15"><b> <br> </b><p> <br> </p></font></font></td></tr></tbody></table>
<br></font></td></tr><tr bgcolor="#eeeeee"><td align="right" valign="top" nowrap="">
<font size="1" face="Arial" color="#000099">
&nbsp; <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=edit&amp;forum=scoops1&amp;om=838188&amp;omm=14"><img src="https://rotter.net/forum/Images/edit.gif" border="0"></a> &nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=post&amp;forum=scoops1&amp;om=838188&amp;omm=14"><font size="1" face="Arial" color="#000099"><img src="https://rotter.net/forum/Images/response.gif" border="0"></font></a><font size="1" face="Arial" color="#000099"> &nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=read_count&amp;om=838188&amp;forum=scoops1&amp;viewmode=all"><img src="https://rotter.net/forum/Images/all.gif" border="0"></a></font><font size="1">&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=list&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/gobk.gif" border="0"></a>
&nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?quote=not_empty&amp;az=post&amp;forum=scoops1&amp;om=838188&amp;omm=14"><font size="1" face="Arial" color="#000099"> תגובה עם ציטוט </font></a>&nbsp; | <a href="javascript:updatePropertyDisplay('14')"><font face="Arial" color="#000099">תגובה מהירה</font></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcadmin.cgi?az=admin_board_manager&amp;command=admin_remove_messages&amp;forum=scoops1&amp;thread_select=838188&amp;selected=14" onclick="return confirm('למחוק תגובה?')"><font size="1" face="Arial" color="#000099">(ניהול: מחק תגובה)</font></a></font></font></td>
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
<a name="18"><b>פרה אדומה</b></a>
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=%F4%F8%E4%20%E0%E3%E5%EE%E4"><img src="https://rotter.net/forum/Images/5_star.gif" border="0" alt="לחץ כאן להצגת דירוג המשתמש"></a><br>
<font size="1">חבר מתאריך 30.4.12</font><br>
<font size="1">61815 הודעות</font>, <font size="1" color="006633"> <b>372 מדרגים</b></font>, <font color="red" size="1"> <b>731 נקודות. &nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=פרה אדומה"><font color="000099" size="-1"><u>ראה משוב</u></font></a></b></font></font></td><td align="LEFT" valign="top" width="50%" nowrap=""><font size="1" face="Arial" color="#000099"><font color="black">יום שני י' 'באדר א תשפ''ד &nbsp;&nbsp;</font>
<font color="red">22:41</font> &nbsp; <font color="#eeeeee" size="1"> </font>19.02.24</font>&nbsp;&nbsp;&nbsp;</td></tr>
<tr bgcolor="#eeeeee"><td align="LEFT">
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=send_mesg&amp;userid=%F4%F8%E4%20%E0%E3%E5%EE%E4" target="_new"><img src="https://rotter.net/forum/Images/mesg.gif" border="0" title="לחץ לשליחת הודעה פרטית למשתמש"></a> <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=user_profiles&amp;user=%F4%F8%E4%20%E0%E3%E5%EE%E4"><img src="https://rotter.net/forum/Images/profile_small.gif" title="לחץ להצגת פרופיל המשתמש" border="0"></a><a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=add_buddy&amp;user=%F4%F8%E4%20%E0%E3%E5%EE%E4&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/mesg_add_buddy.gif" title="לחץ להוספת משתמש זה לרשימת החברים שלך" border="0"></a>
<a href="javascript:makeRemote('https://rotter.net/cgi-bin/forum/Lib/view_user_kartis.pl?user=פרה אדומה')">
<img src="https://rotter.net/forum/Images/kartis.gif" border="0" alt="כרטיס אישי"></a>&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_ip&amp;forum=scoops1&amp;om=838188&amp;omm=18&amp;name=פרה אדומה"><img src="https://rotter.net/forum/Images/ip.gif" border="0" alt="עבור לצ'אט"></a>
&nbsp;</td></tr>
<tr bgcolor="#FDFDFD"><td colspan="2" width="100%">
<font size="2" face="Arial" color="#000099">
&nbsp;&nbsp;<font class="text16b">18. אז למה ההרצאה ''לא הותרה לפרסום''?&nbsp;&nbsp;</font><br>
<font size="1" face="Arial" color="#000099"><a href="#14">בתגובה להודעה מספר 14</a></font><br>&nbsp;<br>
<table border="0" cellpadding="5" cellspacing="0" width="70%" style="display: inline-table;">
<tbody><tr><td valign="top" width="50" nowrap="">&nbsp;&nbsp;</td><td valign="top" width="100%">
<font size="2" face="Arial" color="#000099"><font class="text15"><b> <br> </b><p> <br> </p></font></font></td></tr></tbody></table>
<br></font></td></tr><tr bgcolor="#eeeeee"><td align="right" valign="top" nowrap="">
<font size="1" face="Arial" color="#000099">
&nbsp; <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=edit&amp;forum=scoops1&amp;om=838188&amp;omm=18"><img src="https://rotter.net/forum/Images/edit.gif" border="0"></a> &nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=post&amp;forum=scoops1&amp;om=838188&amp;omm=18"><font size="1" face="Arial" color="#000099"><img src="https://rotter.net/forum/Images/response.gif" border="0"></font></a><font size="1" face="Arial" color="#000099"> &nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=read_count&amp;om=838188&amp;forum=scoops1&amp;viewmode=all"><img src="https://rotter.net/forum/Images/all.gif" border="0"></a></font><font size="1">&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=list&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/gobk.gif" border="0"></a>
&nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?quote=not_empty&amp;az=post&amp;forum=scoops1&amp;om=838188&amp;omm=18"><font size="1" face="Arial" color="#000099"> תגובה עם ציטוט </font></a>&nbsp; | <a href="javascript:updatePropertyDisplay('18')"><font face="Arial" color="#000099">תגובה מהירה</font></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcadmin.cgi?az=admin_board_manager&amp;command=admin_remove_messages&amp;forum=scoops1&amp;thread_select=838188&amp;selected=18" onclick="return confirm('למחוק תגובה?')"><font size="1" face="Arial" color="#000099">(ניהול: מחק תגובה)</font></a></font></font></td>
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
<a name="17"><b>Idf</b></a>
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=Idf"><img src="https://rotter.net/forum/Images/5_star.gif" border="0" alt="לחץ כאן להצגת דירוג המשתמש"></a><br>
<font size="1">חבר מתאריך 17.2.19</font><br>
<font size="1">4579 הודעות</font>, <font size="1" color="006633"> <b>27 מדרגים</b></font>, <font color="red" size="1"> <b>42 נקודות. &nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=Idf"><font color="000099" size="-1"><u>ראה משוב</u></font></a></b></font></font></td><td align="LEFT" valign="top" width="50%" nowrap=""><font size="1" face="Arial" color="#000099"><font color="black">יום שני י' 'באדר א תשפ''ד &nbsp;&nbsp;</font>
<font color="red">22:39</font> &nbsp; <font color="#eeeeee" size="1"> </font>19.02.24</font>&nbsp;&nbsp;&nbsp;</td></tr>
<tr bgcolor="#eeeeee"><td align="LEFT">
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=send_mesg&amp;userid=Idf" target="_new"><img src="https://rotter.net/forum/Images/mesg.gif" border="0" title="לחץ לשליחת הודעה פרטית למשתמש"></a> <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=user_profiles&amp;user=Idf"><img src="https://rotter.net/forum/Images/profile_small.gif" title="לחץ להצגת פרופיל המשתמש" border="0"></a><a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=add_buddy&amp;user=Idf&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/mesg_add_buddy.gif" title="לחץ להוספת משתמש זה לרשימת החברים שלך" border="0"></a>
<a href="javascript:makeRemote('https://rotter.net/cgi-bin/forum/Lib/view_user_kartis.pl?user=Idf')">
<img src="https://rotter.net/forum/Images/kartis.gif" border="0" alt="כרטיס אישי"></a>&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_ip&amp;forum=scoops1&amp;om=838188&amp;omm=17&amp;name=Idf"><img src="https://rotter.net/forum/Images/ip.gif" border="0" alt="עבור לצ'אט"></a>
&nbsp;</td></tr>
<tr bgcolor="#FDFDFD"><td colspan="2" width="100%">
<font size="2" face="Arial" color="#000099">
&nbsp;&nbsp;<font class="text16b">17. שמאלני ?? אז מותר לו&nbsp;&nbsp;</font><br>
<font size="1" face="Arial" color="#000099"><a href="#0">בתגובה להודעה מספר 0</a></font><br>&nbsp;<br>
<table border="0" cellpadding="5" cellspacing="0" width="70%" style="display: inline-table;">
<tbody><tr><td valign="top" width="50" nowrap="">&nbsp;&nbsp;</td><td valign="top" width="100%">
<font size="2" face="Arial" color="#000099"><font class="text15"><b> <br> ימני או ביבי תיק חדש בפרקליטות</b><p> <br> </p></font></font></td></tr></tbody></table>
<br></font></td></tr><tr bgcolor="#eeeeee"><td align="right" valign="top" nowrap="">
<font size="1" face="Arial" color="#000099">
&nbsp; <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=edit&amp;forum=scoops1&amp;om=838188&amp;omm=17"><img src="https://rotter.net/forum/Images/edit.gif" border="0"></a> &nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=post&amp;forum=scoops1&amp;om=838188&amp;omm=17"><font size="1" face="Arial" color="#000099"><img src="https://rotter.net/forum/Images/response.gif" border="0"></font></a><font size="1" face="Arial" color="#000099"> &nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=read_count&amp;om=838188&amp;forum=scoops1&amp;viewmode=all"><img src="https://rotter.net/forum/Images/all.gif" border="0"></a></font><font size="1">&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=list&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/gobk.gif" border="0"></a>
&nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?quote=not_empty&amp;az=post&amp;forum=scoops1&amp;om=838188&amp;omm=17"><font size="1" face="Arial" color="#000099"> תגובה עם ציטוט </font></a>&nbsp; | <a href="javascript:updatePropertyDisplay('17')"><font face="Arial" color="#000099">תגובה מהירה</font></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcadmin.cgi?az=admin_board_manager&amp;command=admin_remove_messages&amp;forum=scoops1&amp;thread_select=838188&amp;selected=17" onclick="return confirm('למחוק תגובה?')"><font size="1" face="Arial" color="#000099">(ניהול: מחק תגובה)</font></a></font></font></td>
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
<a name="21"><b>צללפון</b></a>
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=%F6%EC%EC%F4%E5%EF"><img src="https://rotter.net/forum/Images/5_star.gif" border="0" alt="לחץ כאן להצגת דירוג המשתמש"></a><br>
<font size="1">חבר מתאריך 30.8.13</font><br>
<font size="1">17536 הודעות</font>, <font size="1" color="006633"> <b>70 מדרגים</b></font>, <font color="red" size="1"> <b>130 נקודות. &nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=צללפון"><font color="000099" size="-1"><u>ראה משוב</u></font></a></b></font></font></td><td align="LEFT" valign="top" width="50%" nowrap=""><font size="1" face="Arial" color="#000099"><font color="black">יום שני י' 'באדר א תשפ''ד &nbsp;&nbsp;</font>
<font color="red">22:45</font> &nbsp; <font color="#eeeeee" size="1"> </font>19.02.24</font>&nbsp;&nbsp;&nbsp;</td></tr>
<tr bgcolor="#eeeeee"><td align="LEFT">
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=send_mesg&amp;userid=%F6%EC%EC%F4%E5%EF" target="_new"><img src="https://rotter.net/forum/Images/mesg.gif" border="0" title="לחץ לשליחת הודעה פרטית למשתמש"></a> <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=user_profiles&amp;user=%F6%EC%EC%F4%E5%EF"><img src="https://rotter.net/forum/Images/profile_small.gif" title="לחץ להצגת פרופיל המשתמש" border="0"></a><a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=add_buddy&amp;user=%F6%EC%EC%F4%E5%EF&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/mesg_add_buddy.gif" title="לחץ להוספת משתמש זה לרשימת החברים שלך" border="0"></a>
<a href="javascript:makeRemote('https://rotter.net/cgi-bin/forum/Lib/view_user_kartis.pl?user=צללפון')">
<img src="https://rotter.net/forum/Images/kartis.gif" border="0" alt="כרטיס אישי"></a>&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_ip&amp;forum=scoops1&amp;om=838188&amp;omm=21&amp;name=צללפון"><img src="https://rotter.net/forum/Images/ip.gif" border="0" alt="עבור לצ'אט"></a>
&nbsp;</td></tr>
<tr bgcolor="#FDFDFD"><td colspan="2" width="100%">
<font size="2" face="Arial" color="#000099">
&nbsp;&nbsp;<font class="text16b">21. מיד היועמ''שית מתפנה להורות על חקירה&nbsp;&nbsp;</font><br>
<font size="1" face="Arial" color="#000099"><a href="#0">בתגובה להודעה מספר 0</a></font><br>&nbsp;<br>
<table border="0" cellpadding="5" cellspacing="0" width="70%" style="display: inline-table;">
<tbody><tr><td valign="top" width="50" nowrap="">&nbsp;&nbsp;</td><td valign="top" width="100%">
<font size="2" face="Arial" color="#000099"><font class="text15"><b> <br> </b><p> <br> </p></font></font></td></tr></tbody></table>
<br></font></td></tr><tr bgcolor="#eeeeee"><td align="right" valign="top" nowrap="">
<font size="1" face="Arial" color="#000099">
&nbsp; <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=edit&amp;forum=scoops1&amp;om=838188&amp;omm=21"><img src="https://rotter.net/forum/Images/edit.gif" border="0"></a> &nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=post&amp;forum=scoops1&amp;om=838188&amp;omm=21"><font size="1" face="Arial" color="#000099"><img src="https://rotter.net/forum/Images/response.gif" border="0"></font></a><font size="1" face="Arial" color="#000099"> &nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=read_count&amp;om=838188&amp;forum=scoops1&amp;viewmode=all"><img src="https://rotter.net/forum/Images/all.gif" border="0"></a></font><font size="1">&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=list&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/gobk.gif" border="0"></a>
&nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?quote=not_empty&amp;az=post&amp;forum=scoops1&amp;om=838188&amp;omm=21"><font size="1" face="Arial" color="#000099"> תגובה עם ציטוט </font></a>&nbsp; | <a href="javascript:updatePropertyDisplay('21')"><font face="Arial" color="#000099">תגובה מהירה</font></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcadmin.cgi?az=admin_board_manager&amp;command=admin_remove_messages&amp;forum=scoops1&amp;thread_select=838188&amp;selected=21" onclick="return confirm('למחוק תגובה?')"><font size="1" face="Arial" color="#000099">(ניהול: מחק תגובה)</font></a></font></font></td>
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
<a name="22"><b>חיפוי אוירי</b></a>
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=%E7%E9%F4%E5%E9%20%E0%E5%E9%F8%E9"><img src="https://rotter.net/forum/Images/1_star.gif" border="0" alt="לחץ כאן להצגת דירוג המשתמש"></a><br>
<font size="1">חבר מתאריך 21.3.23</font><br>
<font size="1">1070 הודעות</font>, <font size="1" color="006633"> <b>10 מדרגים</b></font>, <font color="red" size="1"> <b>8 נקודות. &nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_user_ratings&amp;user=חיפוי אוירי"><font color="000099" size="-1"><u>ראה משוב</u></font></a></b></font></font></td><td align="LEFT" valign="top" width="50%" nowrap=""><font size="1" face="Arial" color="#000099"><font color="black">יום שני י' 'באדר א תשפ''ד &nbsp;&nbsp;</font>
<font color="red">22:47</font> &nbsp; <font color="#eeeeee" size="1"> </font>19.02.24</font>&nbsp;&nbsp;&nbsp;</td></tr>
<tr bgcolor="#eeeeee"><td align="LEFT">
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=send_mesg&amp;userid=%E7%E9%F4%E5%E9%20%E0%E5%E9%F8%E9" target="_new"><img src="https://rotter.net/forum/Images/mesg.gif" border="0" title="לחץ לשליחת הודעה פרטית למשתמש"></a> <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=user_profiles&amp;user=%E7%E9%F4%E5%E9%20%E0%E5%E9%F8%E9"><img src="https://rotter.net/forum/Images/profile_small.gif" title="לחץ להצגת פרופיל המשתמש" border="0"></a><a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=add_buddy&amp;user=%E7%E9%F4%E5%E9%20%E0%E5%E9%F8%E9&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/mesg_add_buddy.gif" title="לחץ להוספת משתמש זה לרשימת החברים שלך" border="0"></a>
<a href="javascript:makeRemote('https://rotter.net/cgi-bin/forum/Lib/view_user_kartis.pl?user=חיפוי אוירי')">
<img src="https://rotter.net/forum/Images/kartis.gif" border="0" alt="כרטיס אישי"></a>&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=view_ip&amp;forum=scoops1&amp;om=838188&amp;omm=22&amp;name=חיפוי אוירי"><img src="https://rotter.net/forum/Images/ip.gif" border="0" alt="עבור לצ'אט"></a>
&nbsp;</td></tr>
<tr bgcolor="#FDFDFD"><td colspan="2" width="100%">
<font size="2" face="Arial" color="#000099">
&nbsp;&nbsp;<font class="text16b">22. אחרי גלעד קריב&nbsp;&nbsp;</font><br>
<font size="1" face="Arial" color="#000099"><a href="#21">בתגובה להודעה מספר 21</a></font><br>&nbsp;<br>
<table border="0" cellpadding="5" cellspacing="0" width="70%" style="display: inline-table;">
<tbody><tr><td valign="top" width="50" nowrap="">&nbsp;&nbsp;</td><td valign="top" width="100%">
<font size="2" face="Arial" color="#000099"><font class="text15"><b> <br> </b><p> <br> </p></font></font></td></tr></tbody></table>
<br></font></td></tr><tr bgcolor="#eeeeee"><td align="right" valign="top" nowrap="">
<font size="1" face="Arial" color="#000099">
&nbsp; <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=edit&amp;forum=scoops1&amp;om=838188&amp;omm=22"><img src="https://rotter.net/forum/Images/edit.gif" border="0"></a> &nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=post&amp;forum=scoops1&amp;om=838188&amp;omm=22"><font size="1" face="Arial" color="#000099"><img src="https://rotter.net/forum/Images/response.gif" border="0"></font></a><font size="1" face="Arial" color="#000099"> &nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=read_count&amp;om=838188&amp;forum=scoops1&amp;viewmode=all"><img src="https://rotter.net/forum/Images/all.gif" border="0"></a></font><font size="1">&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=list&amp;forum=scoops1"><img src="https://rotter.net/forum/Images/gobk.gif" border="0"></a>
&nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?quote=not_empty&amp;az=post&amp;forum=scoops1&amp;om=838188&amp;omm=22"><font size="1" face="Arial" color="#000099"> תגובה עם ציטוט </font></a>&nbsp; | <a href="javascript:updatePropertyDisplay('22')"><font face="Arial" color="#000099">תגובה מהירה</font></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcadmin.cgi?az=admin_board_manager&amp;command=admin_remove_messages&amp;forum=scoops1&amp;thread_select=838188&amp;selected=22" onclick="return confirm('למחוק תגובה?')"><font size="1" face="Arial" color="#000099">(ניהול: מחק תגובה)</font></a></font></font></td>
<td align="left" nowrap="">
<font size="1" face="Arial" color="#000099"><br>
מכתב זה והנלווה אליו, על אחריות ועל דעת הכותב בלבד
</font></td></tr></tbody></table></td></tr></tbody></table>
</td></tr></tbody></table>
</td></tr></tbody></table></div><br> <a name="#z"></a><table border="0" width="100%" cellspacing="0" cellpadding="3"><tbody><tr><td align="RIGHT"><font size="-1" color="#000099" face="Arial">
</font><br>

<div id="div-gpt-ad-1545246482491-0" data-google-query-id="CNnEtamkuIQDFUVXpAQdBZwMYA">
<div id="google_ads_iframe_/69589285/Threads_Bottom_0__container__" style="border: 0pt none;"><iframe id="google_ads_iframe_/69589285/Threads_Bottom_0" name="google_ads_iframe_/69589285/Threads_Bottom_0" title="3rd party ad content" width="970" height="250" scrolling="no" marginwidth="0" marginheight="0" frameborder="0" aria-label="Advertisement" tabindex="0" allow="attribution-reporting" style="border: 0px; vertical-align: bottom;" data-load-complete="true" data-google-container-id="5"></iframe></div>
</div>


<br>
<form name="post_form" action="https://rotter.net/cgi-bin/forum/dcboard.cgi" method="post" onsubmit="return false;">
<input type="hidden" name="max" value="80">
<input type="hidden" name="rand" value="101101">
<input type="hidden" name="om" value="838188">
<input type="hidden" name="forum" value="scoops1">
<input type="hidden" name="orig_url" value="">
<input type="hidden" name="no_signature" value="">
<input type="hidden" name="az" value="a_mesg">
<input type="hidden" name="name" value="אורח">
<input type="hidden" name="topic_type" value="0">
<input type="hidden" name="tm" value="tm">
<table border="0" cellpadding="0" cellspacing="0">
<tbody><tr bgcolor="#eeeeee" colspan="2" align="RIGHT">
<td><b><font size="-1" color="#000099">תגובה מהירה</font></b></td> <td><font size="-1" color="#000099"><b>&nbsp;למכתב מספר:&nbsp;</b></font></td>
</tr>
<tr>
<td align="CENTER"><input type="text" name="subject" value="" size="90" maxlength="90"></td>
<td align="CENTER">&nbsp;<select size="1" dir="rtl" name="omm"> <option value="0">0 - הכותרת</option> <option value="1">1</option> <option value="6">6</option> <option value="2">2</option> <option value="7">7</option> <option value="9">9</option> <option value="10">10</option> <option value="12">12</option> <option value="13">13</option> <option value="16">16</option> <option value="19">19</option> <option value="15">15</option> <option value="3">3</option> <option value="8">8</option> <option value="11">11</option> <option value="20">20</option> <option value="4">4</option> <option value="5">5</option> <option value="14">14</option> <option value="18">18</option> <option value="17">17</option> <option value="21">21</option> <option value="22">22</option></select></td></tr>
<tr><td bgcolor="#eeeeee" colspan="2" align="RIGHT"><input type="submit" id="post" name="post" value="שלח תגובה מהירה" onclick="post_form.submit();this.disabled=true;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="BUTTON" id="post" name="post" value="תגובה רגילה למכתב המסומן כאן ^" onclick="post_form.submit();this.disabled=true;"></td>
</tr></tbody></table>
<br>__________________________________________________________________________<br><a name="manage">למנהלים:</a>&nbsp;&nbsp;<a href="https://rotter.net/cgi-bin/forum/dcadmin.cgi?az=admin_board_manager&amp;command=admin_lock_threads&amp;forum=scoops1&amp;selected=838188"><font size="-1" color="#000099" face="Arial">נעל</font></a> |
<a href="javascript:makeRemotets('https://rotter.net/cgi-bin/forum/dcboard.cgi?az=lock_thread&amp;forum=scoops1&amp;selected=838188','move_thread','height=100,width=400');"><font size="-1" color="#000099" face="Arial">נעל אשכול עם סיבה</font></a> |
<a href="https://rotter.net/cgi-bin/forum/dcadmin.cgi?az=del_res&amp;forum=scoops1&amp;title=ראש מכון INSS אלוף במיל%27 תמיר היימן שיתף את %27%27פורום ראשי החברות%27%27 במידע צבאי סודי האסור לפרסום&amp;num=838188"><font size="-1" color="#000099" face="Arial">מחק</font></a> |
<a href="javascript:makeRemotet('https://rotter.net/cgi-bin/forum/dcboard.cgi?az=move_thread_to_forum&amp;forum=scoops1&amp;selected=838188&amp;archive=','move_thread','height=100,width=400');"><font size="-1" color="#000099" face="Arial">העבר לפורום אחר</font></a> |
<a href="javascript:makeRemotets('https://rotter.net/cgi-bin/forum/dcboard.cgi?az=cluster_thread&amp;forum=scoops1&amp;selected=838188','move_thread','height=100,width=400');"><font size="-1" color="#000099" face="Arial">מזג לאשכול אחר</font></a> |
<a href="https://rotter.net/cgi-bin/forum/dcadmin.cgi?az=admin_board_manager&amp;command=admin_list_messages&amp;forum=scoops1&amp;thread_select=838188&amp;archive="><font size="-1" color="#000099" face="Arial">מחק תגובות</font></a>
| <a href="https://rotter.net/cgi-bin/forum/gib-file.pl?forum=scoops1&amp;thread_select=838188&amp;type=Protected"><font size="-1" color="#000099" face="Arial">גיבוי אשכול</font></a>
| <a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=do_anchor&amp;om=838188&amp;forum=scoops1&amp;omm=0"><font size="2" color="#000099" face="Arial">עגן אשכול</font></a>
</form></td><td align="LEFT">
<font size="-1" color="#000099" face="Arial">
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi"><font size="-1" color="#000099" face="Arial"><img src="https://rotter.net/forum/Images/goloby.gif" border="0" title="לובי"></font></a>&nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=list&amp;forum=scoops1"><font size="-1" color="#000099" face="Arial"><img src="https://rotter.net/forum/Images/gobk.gif" border="0" title="לפורומים"></font></a>&nbsp;
<form id="reportthread" name="reportthread" method="post" action="https://rotter.net/cgi-bin/edit/report-luach-a.pl" style="display: inline;">
<input type="hidden" name="report" maxlength="50" value="111">
<input type="hidden" name="username" value="חיפוי אוירי">
<input type="hidden" name="linka" value="https://rotter.net/forum/scoops1/838188.shtml">
<input type="hidden" name="kotar" value="אחרי גלעד קריב">
<input type="hidden" name="forum" value="scoops1">
</form>
<a href="#" onclick="document.getElementById('reportthread').submit();"><font size="-1" color="#000099" face="Arial"><img src="https://rotter.net/forum/Images/reportthread.png" border="0" title="לפורומים"></font></a>&nbsp;
<font size="-1" color="#000099" face="Arial">
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?forum=scoops1&amp;mark=838188&amp;az=previous_topic"><font size="-1" color="#000099" face="Arial"><img src="https://rotter.net/forum/Images/goprev.gif" border="0" title="אשכול קודם"></font></a>&nbsp;
<a href="https://rotter.net/cgi-bin/forum/dcboard.cgi?forum=scoops1&amp;mark=838188&amp;az=next_topic"><font size="-1" color="#000099" face="Arial"><img src="https://rotter.net/forum/Images/gonext.gif" border="0" title="אשכול הבא"></font></a></font> </font>
</td></tr>
</tbody></table><script type="text/javascript">InitRedLines();</script>
<form action="https://rotter.net/cgi-bin/forum/dcboard.cgi" method="POST">
<input type="hidden" name="az" value="jump">
<table border="0" width="100%" cellpadding="3" cellspacing="1">
<tbody><tr><td align="LEFT" valign="TOP"><select title="rotter.net" dir="rtl" name="rotter.net" size="1" onchange="if (this.options[selectedIndex].value != '') location.href=this.options[selectedIndex].value">
<option value="" selected="">בחר פורום</option>
<option value="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=list&amp;forum=scoops1">סקופים</option>
<option value="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=list&amp;forum=ihaveasay">הזעקה</option>
<option value="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=list&amp;forum=tikshoret">ביקורת תקשורת</option>
<option value="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=list&amp;forum=politics">פוליטיקה</option>
<option value="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=list&amp;forum=gil">מסמכים</option>
<option value="https://rotter.name/cgi-bin/kolot/dcboard.cgi?az=list&amp;forum=prime">אברכים</option>
<option value="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=list&amp;forum=kafe">הקפה</option>
<option value="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=list&amp;forum=law">משפטים</option>
<option value="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=list&amp;forum=torah">בית המדרש</option>
<option value="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=list&amp;forum=forg">עיתונות זרה</option>
<option value="https://rotter.net/cgi-bin/forum/dcboard.cgi?az=list&amp;forum=modein">מודיעין</option>
</select><br>
</td></tr></tbody></table>
<table border="0" width="100%">
<tbody><tr><td align="center">
</td></tr>
<tr><td align="center">
<center>
<a href="https://rotter.net/cgi-bin/kesher-forum.pl"><img src="/forum/Images/leave_msg.gif" border="0"></a><br>
<font size="-2" color="#444444" face="Arial">© כל הזכויות שמורות ל-רוטר.נט בע"מ </font>
<a href="https://rotter.net"><font size="-2" face="Arial" color="#444444">rotter.net</font></a><br>
<a href="https://rotter.net"><font size="1" color="gray"><b>חדשות</b></font></a><br>
<br><br></center>
</td></tr></tbody></table>
<div id="taboola-below-article-thumbnails-2nd" class=" trc_related_container trc_spotlight_widget tbl-rtl tbl-feed-container tbl-feed-frame-DIVIDER  render-late-effect" data-feed-container-num="1" data-feed-main-container-id="taboola-below-article-thumbnails-2nd" data-parent-placement-name="Below Article Thumbnails 2nd" data-pub-lang="he" observeid="tbl-observe-24" tbl-data-mutation-observer="true"><div class=" tbl-feed-header tbl-logo-left-position"><div class="tbl-feed-header-logo"></div></div><div id="taboola-below-article-thumbnails-2nd-sca1" data-batch-num="1" tbl-feed-card="" class=" trc_related_container trc_spotlight_widget tbl-rtl trc_multi_widget" style="display: none;"><div class=" trc_multi_widget_container" style="flex-direction: column;"><div class=" trc_related_container trc_spotlight_widget tbl-rtl" widget-name="thumbs-feed-01" style="flex: 1 1 0%; overflow: hidden; margin-bottom: 0.5em;"><div class="trc_rbox_container" style="display: none;"><div><div id="trc_wrapper_97274" class="trc_rbox thumbs-feed-01" style="overflow: hidden; display: none;"></div></div></div></div><div class=" trc_related_container trc_spotlight_widget tbl-rtl" widget-name="organic-thumbs-feed-01" style="flex: 1 1 0%; overflow: hidden;"><div class="trc_rbox_container" style="display: none;"><div><div id="trc_wrapper_38580" class="trc_rbox organic-thumbs-feed-01" style="overflow: hidden; display: none;"></div></div></div></div></div></div><div data-card-index="1" id="taboola-below-article-thumbnails-2nd-pl1" data-batch-num="1" tbl-feed-card="" class=" trc_related_container trc_spotlight_widget tbl-rtl trc_elastic trc_elastic_thumbs-feed-01  tbl-feed-card " data-placement-name="Below Article Thumbnails 2nd | Card 1" observeid="tbl-observe-26" style="padding: 0px;"><div class="trc_rbox_container"><div><div id="trc_wrapper_28866" class="trc_rbox thumbs-feed-01 trc-content-sponsored " style="overflow: hidden; display: block;"><div id="trc_header_28866" class="trc_rbox_header trc_rbox_border_elm"><div class="trc_header_ext"></div><span class="trc_rbox_header_span"></span></div><div id="outer_28866" class="trc_rbox_outer"><div id="rbox-t2v" class="trc_rbox_div trc_rbox_border_elm"><div id="internal_trc_28866"><div observeid="tbl-observe-25 tbl-observe-27" data-item-id="~~V1~~-8847843054302397430~~wDVE9dBSthdVDCL3xCuKJkJCtFRKuwa9cLAjZztCfFZw6cLzOYgYTH58zK8cIqqS0gndFZBj7kjnBwEB62GTSWYIr5xr1EP1godu7kYO6sIpr43AfzWL_nA_cXmQwbOHGfafOuL-jgdpt72HavLnuPmDIhCreX2gYPy11UC2511jY_vJujClyqWEf7KKKAEb" data-item-title="אריה התגרה בלביאה, צפו בתגובות שלה." data-item-thumb="http://cdn.taboola.com/libtrc/static/thumbnails/69603be959bee3abf20ca03027a46ca2.jpg" data-item-syndicated="true" class="videoCube trc_spotlight_item origin-undefined thumbnail_top syndicatedItem photoItem videoCube_1_child trc-first-recommendation trc-spotlight-first-recommendation  trc_excludable "><a attributionsrc="" title="אריה התגרה בלביאה, צפו בתגובות שלה." href="https://kingdomofmen.com/categories/il/lion-pair/" rel="nofollow noopener sponsored" target="_blank" class=" item-thumbnail-href " slot="thumbnail"><div class="thumbBlock_holder"><span class="thumbBlock" style="background-image: url(&quot;https://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_auto%2Ch_620%2Cw_1240%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/http%3A//cdn.taboola.com/libtrc/static/thumbnails/69603be959bee3abf20ca03027a46ca2.jpg&quot;);"><span class="thumbnail-overlay"></span><span class="branding">Daily Rythm</span><span class="static-text top-right"></span></span><div class="videoCube_aspect"></div></div></a><a attributionsrc="" title="אריה התגרה בלביאה, צפו בתגובות שלה." href="https://kingdomofmen.com/categories/il/lion-pair/" rel="nofollow noopener sponsored" target="_blank" class="item-label-href video-cta-style"><span class="video-label-box trc-main-label video-label-box-cta video-label-box-cta-non-ie"><span class="video-label video-title video-label-flex-cta-item trc_ellipsis " slot="title" style="-webkit-line-clamp: 1;">אריה התגרה בלביאה, צפו בתגובות שלה.</span><span class="video-label video-description video-label-flex-cta-item" slot="description" title="&quot;Description: &quot;"></span><span class="branding composite-branding video-branding-flex-cta-item" slot="branding"><span class="branding-inner">Daily Rythm</span><span class="branding-separator">|</span><div class="logoDiv link-disclosure  attribution-disclosure-link-sponsored align-disclosure-left"><a class="trc_desktop_disclosure_link trc_attribution_position_after_branding" rel="nofollow sponsored noopener" href="https://popup.taboola.com/he/?template=colorbox&amp;utm_source=rotter&amp;utm_medium=referral&amp;utm_content=thumbs-feed-01:Below Article Thumbnails 2nd | Card 1:" target="_blank"><span>Sponsored</span></a><a class="trc_mobile_disclosure_link trc_attribution_position_after_branding" rel="nofollow sponsored noopener" href="https://popup.taboola.com/he/?template=colorbox&amp;utm_source=rotter&amp;utm_medium=referral&amp;utm_content=thumbs-feed-01:Below Article Thumbnails 2nd | Card 1:" target="_blank"><span>Sponsored</span></a></div></span><div class="video-cta-href"><button type="button" class="video-cta-button video-cta-style" style="border-color: rgb(0, 0, 0); font-weight: bold; font-family: Arial, Helvetica, sans-serif; color: rgb(0, 0, 0);">מידע נוסף</button></div></span></a><div class=" trc_user_exclude_btn " title="Remove this item"></div><div class=" trc_exclude_overlay trc_fade "></div><div class=" trc_undo_btn ">Undo</div></div></div></div></div><div class="trc_clearer"></div></div></div></div></div><div data-card-index="2" id="taboola-below-article-thumbnails-2nd-pl2" data-batch-num="1" tbl-feed-card="" class=" trc_related_container trc_spotlight_widget tbl-rtl trc_elastic trc_elastic_thumbs-feed-01-a  tbl-feed-card " data-placement-name="Below Article Thumbnails 2nd | Card 2" observeid="tbl-observe-30" style="padding: 0px;"><div class="trc_rbox_container"><div><div id="trc_wrapper_78175" class="trc_rbox thumbs-feed-01-a trc-content-sponsored " style="overflow: hidden; display: block;"><div id="trc_header_78175" class="trc_rbox_header trc_rbox_border_elm"><div class="trc_header_ext"></div><span class="trc_rbox_header_span"></span></div><div id="outer_78175" class="trc_rbox_outer"><div id="rbox-t2v" class="trc_rbox_div trc_rbox_border_elm"><div id="internal_trc_78175"><div observeid="tbl-observe-28 tbl-observe-31" data-item-id="~~V1~~-6687721670825960925~~eVvSee4y4nc-DIe9GPy0v8Mr4sVxW-1fFfy49L6MnjXnoZueAsnM0UTkqRiz-o8uuKa2_rupL9I0kvx1XVufut2qKIJrSNJ_InWKPTfYcgzi8Q9xrwCRV91TiD30JiLni3IocnaFvAmpsk_4YcGgBBHr-4krr3UAEcCo0fSKrH57oId7KmFAZ8JWUTupr0OqHyt95TYShh2rGAhm1MDH9OO_Rs2enqk6pz-XiHzj4ShIQyetKke-7-eyYEfm_FqkMO7Tswj5WH4cylUjQLFLHQ" data-item-title="יש לכם מעל 300 אלף בחיסכון? אלו הקרנות האלטרנטיביות שעשויות להכניס עד פי 3 תשואה" data-item-thumb="http://cdn.taboola.com/libtrc/static/thumbnails/e5a6d3b78a6c0f7ae66f9bb813283a53.png" data-item-syndicated="true" class="videoCube trc_spotlight_item origin-default thumbnail_top syndicatedItem textItem videoCube_1_child trc-first-recommendation trc-spotlight-first-recommendation  trc_excludable "><a attributionsrc="" title="יש לכם מעל 300 אלף בחיסכון? אלו הקרנות האלטרנטיביות שעשויות להכניס עד פי 3 תשואה" href="https://nownet.co.il/alternative-3800/" rel="nofollow noopener sponsored" target="_blank" class=" item-thumbnail-href " slot="thumbnail"><div class="thumbBlock_holder"><span class="thumbBlock" style="background-image: url(&quot;https://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_auto%2Ch_345%2Cw_620%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/http%3A//cdn.taboola.com/libtrc/static/thumbnails/e5a6d3b78a6c0f7ae66f9bb813283a53.png&quot;);"><span class="thumbnail-overlay"></span><span class="branding"> NowNet - השקעות אלטרנטיביות</span><span class="static-text top-right"></span></span><div class="videoCube_aspect"></div></div></a><a attributionsrc="" title="יש לכם מעל 300 אלף בחיסכון? אלו הקרנות האלטרנטיביות שעשויות להכניס עד פי 3 תשואה" href="https://nownet.co.il/alternative-3800/" rel="nofollow noopener sponsored" target="_blank" class="item-label-href video-cta-style"><span class="video-label-box trc-main-label video-label-box-cta video-label-box-cta-non-ie"><span class="video-label video-title video-label-flex-cta-item trc_ellipsis " slot="title" style="-webkit-line-clamp: 2;">יש לכם מעל 300 אלף בחיסכון? אלו הקרנות האלטרנטיביות שעשויות להכניס עד פי 3 תשואה</span><span class="video-label video-description video-label-flex-cta-item" slot="description" title="&quot;Description: &quot;"></span><span class="branding composite-branding video-branding-flex-cta-item" slot="branding"><span class="branding-inner"> NowNet - השקעות אלטרנטיביות</span><span class="branding-separator">|</span><div class="logoDiv link-disclosure  attribution-disclosure-link-sponsored align-disclosure-left"><a class="trc_desktop_disclosure_link trc_attribution_position_after_branding" rel="nofollow sponsored noopener" href="https://popup.taboola.com/he/?template=colorbox&amp;utm_source=rotter&amp;utm_medium=referral&amp;utm_content=thumbs-feed-01-a:Below Article Thumbnails 2nd | Card 2:" target="_blank"><span>Sponsored</span></a><a class="trc_mobile_disclosure_link trc_attribution_position_after_branding" rel="nofollow sponsored noopener" href="https://popup.taboola.com/he/?template=colorbox&amp;utm_source=rotter&amp;utm_medium=referral&amp;utm_content=thumbs-feed-01-a:Below Article Thumbnails 2nd | Card 2:" target="_blank"><span>Sponsored</span></a></div></span><div class="video-cta-href"><button type="button" class="video-cta-button video-cta-style" style="border-color: rgb(0, 0, 0); font-weight: bold; font-family: Arial, Helvetica, sans-serif; color: rgb(0, 0, 0);">מידע נוסף</button></div></span></a><div class=" trc_user_exclude_btn " title="Remove this item"></div><div class=" trc_exclude_overlay trc_fade "></div><div class=" trc_undo_btn ">Undo</div></div><div observeid="tbl-observe-29 tbl-observe-32" data-item-id="~~V1~~6744790915010159540~~kp9HScPRvpK8MlxFMfL19RKMBLGb7LQY_367jzBn44_noZueAsnM0UTkqRiz-o8uuKa2_rupL9I0kvx1XVufut2qKIJrSNJ_InWKPTfYcgzaXzWc0vY2-B5N-kofkML8i3IocnaFvAmpsk_4YcGgBDNmI9CGe6sUcIRPqEDfSV6mFc-L4uWe4JwY6BUyMeDtTS8Maux2jWC1gRU3nx5A7rEVxuOWKWhrQzvXHgQEr6voYD60qVYzKB_9uZqcHlwH" data-item-title="חצית את גיל 60?&nbsp;האמת מאחורי העלויות הגבוהות" data-item-thumb="http://cdn.taboola.com/libtrc/static/thumbnails/67de910c613339c90764fc3d757ea2dc.png" data-item-syndicated="true" class="videoCube trc_spotlight_item origin-default thumbnail_top syndicatedItem textItem videoCube_2_child trc_excludable "><a attributionsrc="" title="חצית את גיל 60?&nbsp;האמת מאחורי העלויות הגבוהות" href="https://www.seleb.co.il/%D7%94%D7%99%D7%A9%D7%A8%D7%90%D7%9C%D7%99%D7%9D-%D7%A9%D7%97%D7%AA%D7%9B%D7%95-%D7%90%D7%AA-%D7%A2%D7%9C%D7%95%D7%99%D7%95%D7%AA-%D7%94%D7%91%D7%99%D7%98%D7%95%D7%97-%D7%94%D7%A4%D7%A8%D7%98%D7%99/" rel="nofollow noopener sponsored" target="_blank" class=" item-thumbnail-href " slot="thumbnail"><div class="thumbBlock_holder"><span class="thumbBlock" style="background-image: url(&quot;https://images.taboola.com/taboola/image/fetch/c_crop%2Cf_jpg%2Cq_auto%2Ce_sharpen%2Car_1.7778%2Cw_1200%2Cx_0%2Cy_125/c_fill%2Cw_620%2Ch_345/http%3A//cdn.taboola.com/libtrc/static/thumbnails/67de910c613339c90764fc3d757ea2dc.png&quot;);"><span class="thumbnail-overlay"></span><span class="branding">Seleb</span><span class="static-text top-right"></span></span><div class="videoCube_aspect"></div></div></a><a attributionsrc="" title="חצית את גיל 60?&nbsp;האמת מאחורי העלויות הגבוהות" href="https://www.seleb.co.il/%D7%94%D7%99%D7%A9%D7%A8%D7%90%D7%9C%D7%99%D7%9D-%D7%A9%D7%97%D7%AA%D7%9B%D7%95-%D7%90%D7%AA-%D7%A2%D7%9C%D7%95%D7%99%D7%95%D7%AA-%D7%94%D7%91%D7%99%D7%98%D7%95%D7%97-%D7%94%D7%A4%D7%A8%D7%98%D7%99/" rel="nofollow noopener sponsored" target="_blank" class=" item-label-href "><span class="video-label-box trc-main-label "><span class="video-label video-title trc_ellipsis " slot="title" style="-webkit-line-clamp: 1;">חצית את גיל 60?&nbsp;האמת מאחורי העלויות הגבוהות</span><span class="video-label video-description" slot="description" title="&quot;Description: &quot;"></span><span class="branding composite-branding" slot="branding"><span class="branding-inner">Seleb</span><span class="branding-separator">|</span><div class="logoDiv link-disclosure  attribution-disclosure-link-sponsored align-disclosure-left"><a class="trc_desktop_disclosure_link trc_attribution_position_after_branding" rel="nofollow sponsored noopener" href="https://popup.taboola.com/he/?template=colorbox&amp;utm_source=rotter&amp;utm_medium=referral&amp;utm_content=thumbs-feed-01-a:Below Article Thumbnails 2nd | Card 2:" target="_blank"><span>Sponsored</span></a><a class="trc_mobile_disclosure_link trc_attribution_position_after_branding" rel="nofollow sponsored noopener" href="https://popup.taboola.com/he/?template=colorbox&amp;utm_source=rotter&amp;utm_medium=referral&amp;utm_content=thumbs-feed-01-a:Below Article Thumbnails 2nd | Card 2:" target="_blank"><span>Sponsored</span></a></div></span></span></a><div class=" trc_user_exclude_btn " title="Remove this item"></div><div class=" trc_exclude_overlay trc_fade "></div><div class=" trc_undo_btn ">Undo</div></div></div></div></div><div class="trc_clearer"></div></div></div></div></div><div data-card-index="3" id="taboola-below-article-thumbnails-2nd-pl3" data-batch-num="1" tbl-feed-card="" class=" trc_related_container trc_spotlight_widget tbl-rtl trc_elastic trc_elastic_thumbs-feed-01  tbl-feed-card " data-placement-name="Below Article Thumbnails 2nd | Card 3" observeid="tbl-observe-34" style="padding: 0px;"><div class="trc_rbox_container"><div><div id="trc_wrapper_80102" class="trc_rbox thumbs-feed-01 trc-content-sponsored " style="overflow: hidden; display: block;"><div id="trc_header_80102" class="trc_rbox_header trc_rbox_border_elm"><div class="trc_header_ext"></div><span class="trc_rbox_header_span"></span></div><div id="outer_80102" class="trc_rbox_outer"><div id="rbox-t2v" class="trc_rbox_div trc_rbox_border_elm"><div id="internal_trc_80102"><div observeid="tbl-observe-33 tbl-observe-35" data-item-id="~~V1~~-5449992148991571486~~6qbSmHyCOCgJPBJoMXH9ADE2JVotVK-2fUmlPzWG7nDpZyC7dGVdvKnSHsaHrNsFor4BFHsO6eE08LLg-CvdOB2tkbJ0H19gkwcUX8p5JFHbzsxfM0k_3_siGm-c3uad6Wxbvd84JFsrXagFhpemZvAIB0EivzWdFaw5hCc2FdPnMWdfhFz1Nsbcv-K0Xg_fjxfAtsj75Zm6PzSBS4yNyYA1hzzJM453ex3GxZug7nfSjwdRjPukqG5Oe8le8w52" data-item-title="עזרו לילדים שלכם לטפל בפצעי האקנה, עם השיטה הייחודית של רבקה זיידה" data-item-thumb="http://cdn.taboola.com/libtrc/static/thumbnails/0556ae166ad9c0a88fd8f81dcf378f8c.jpg" data-item-syndicated="true" class="videoCube trc_spotlight_item origin-undefined thumbnail_top syndicatedItem textItem videoCube_1_child trc-first-recommendation trc-spotlight-first-recommendation  trc_excludable "><a attributionsrc="" title="עזרו לילדים שלכם לטפל בפצעי האקנה, עם השיטה הייחודית של רבקה זיידה" href="https://rivkazaide.co.il/" rel="nofollow noopener sponsored" target="_blank" class=" item-thumbnail-href " slot="thumbnail"><div class="thumbBlock_holder"><span class="thumbBlock" style="background-image: url(&quot;https://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_auto%2Ch_620%2Cw_1240%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/http%3A//cdn.taboola.com/libtrc/static/thumbnails/0556ae166ad9c0a88fd8f81dcf378f8c.jpg&quot;);"><span class="thumbnail-overlay"></span><span class="branding">Rivka Zaide</span><span class="static-text top-right"></span></span><div class="videoCube_aspect"></div></div></a><a attributionsrc="" title="עזרו לילדים שלכם לטפל בפצעי האקנה, עם השיטה הייחודית של רבקה זיידה" href="https://rivkazaide.co.il/" rel="nofollow noopener sponsored" target="_blank" class="item-label-href video-cta-style"><span class="video-label-box trc-main-label video-label-box-cta video-label-box-cta-non-ie"><span class="video-label video-title video-label-flex-cta-item trc_ellipsis " slot="title" style="-webkit-line-clamp: 1;">עזרו לילדים שלכם לטפל בפצעי האקנה, עם השיטה הייחודית של רבקה זיידה</span><span class="video-label video-description video-label-flex-cta-item trc_ellipsis " slot="description" title="&quot;Description: השיטה סייעה ל-60 אלף ישראלים להיפטר מפצעי האקנה ולחזק את הביטחון העצמי&quot;" style="-webkit-line-clamp: 1;">השיטה סייעה ל-60 אלף ישראלים להיפטר מפצעי האקנה ולחזק את הביטחון העצמי</span><span class="branding composite-branding video-branding-flex-cta-item" slot="branding"><span class="branding-inner">Rivka Zaide</span><span class="branding-separator">|</span><div class="logoDiv link-disclosure  attribution-disclosure-link-sponsored align-disclosure-left"><a class="trc_desktop_disclosure_link trc_attribution_position_after_branding" rel="nofollow sponsored noopener" href="https://popup.taboola.com/he/?template=colorbox&amp;utm_source=rotter&amp;utm_medium=referral&amp;utm_content=thumbs-feed-01:Below Article Thumbnails 2nd | Card 3:" target="_blank"><span>Sponsored</span></a><a class="trc_mobile_disclosure_link trc_attribution_position_after_branding" rel="nofollow sponsored noopener" href="https://popup.taboola.com/he/?template=colorbox&amp;utm_source=rotter&amp;utm_medium=referral&amp;utm_content=thumbs-feed-01:Below Article Thumbnails 2nd | Card 3:" target="_blank"><span>Sponsored</span></a></div></span><div class="video-cta-href"><button type="button" class="video-cta-button video-cta-style" style="border-color: rgb(0, 0, 0); font-weight: bold; font-family: Arial, Helvetica, sans-serif; color: rgb(0, 0, 0);">קראו עוד</button></div></span></a><div class=" trc_user_exclude_btn " title="Remove this item"></div><div class=" trc_exclude_overlay trc_fade "></div><div class=" trc_undo_btn ">Undo</div></div></div></div></div><div class="trc_clearer"></div></div></div></div></div><div data-card-index="4" id="taboola-below-article-thumbnails-2nd-pl4" data-batch-num="1" tbl-feed-card="" class=" trc_related_container trc_spotlight_widget tbl-rtl trc_elastic trc_elastic_thumbs-feed-01-a  tbl-feed-card " data-placement-name="Below Article Thumbnails 2nd | Card 4" observeid="tbl-observe-38" style="padding: 0px;"><div class="trc_rbox_container"><div><div id="trc_wrapper_45721" class="trc_rbox thumbs-feed-01-a trc-content-sponsored " style="overflow: hidden; display: block;"><div id="trc_header_45721" class="trc_rbox_header trc_rbox_border_elm"><div class="trc_header_ext"></div><span class="trc_rbox_header_span"></span></div><div id="outer_45721" class="trc_rbox_outer"><div id="rbox-t2v" class="trc_rbox_div trc_rbox_border_elm"><div id="internal_trc_45721"><div observeid="tbl-observe-36 tbl-observe-39" data-item-id="~~V1~~3191429725884904468~~7pmPdfxy6CaecmJGPvmSAIjPSZa-XVAchEfCwGEtRSp9_9IWyVTZYEw3zPc60dwzHu_TYvngZ3fIkOCpr71_kAqE0_yL1hRu0U20mv8_l14FfzKdMM7HX6414t4c5_gDfe1hepjUAQzjn_rbUHeUUsxwM9vnrM__lwNlNYuqS14vSoa27qmMTRLIFZNG4JsoME3FIWDZNlT7mtVeMfctYZpInogMnLXIzf74SLDck6Q" data-item-title="הכירו את 20 גזעי הכלבים החכמים ביותר!" data-item-thumb="http://cdn.taboola.com/libtrc/static/thumbnails/5e4b5c405c97263a50c50fa4b2a89063.jpg" data-item-syndicated="true" class="videoCube trc_spotlight_item origin-default thumbnail_top syndicatedItem photoItem videoCube_1_child trc-first-recommendation trc-spotlight-first-recommendation  trc_excludable "><a attributionsrc="" title="הכירו את 20 גזעי הכלבים החכמים ביותר!" href="https://thefamilybreeze.com/categories/il/smartest-dogs/" rel="nofollow noopener sponsored" target="_blank" class=" item-thumbnail-href " slot="thumbnail"><div class="thumbBlock_holder"><span class="thumbBlock" style="background-image: url(&quot;https://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_auto%2Ch_345%2Cw_620%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/http%3A//cdn.taboola.com/libtrc/static/thumbnails/5e4b5c405c97263a50c50fa4b2a89063.jpg&quot;);"><span class="thumbnail-overlay"></span><span class="branding">The Family Breeze</span><span class="static-text top-right"></span></span><div class="videoCube_aspect"></div></div></a><a attributionsrc="" title="הכירו את 20 גזעי הכלבים החכמים ביותר!" href="https://thefamilybreeze.com/categories/il/smartest-dogs/" rel="nofollow noopener sponsored" target="_blank" class=" item-label-href "><span class="video-label-box trc-main-label "><span class="video-label video-title trc_ellipsis " slot="title" style="-webkit-line-clamp: 1;">הכירו את 20 גזעי הכלבים החכמים ביותר!</span><span class="video-label video-description" slot="description" title="&quot;Description: &quot;"></span><span class="branding composite-branding" slot="branding"><span class="branding-inner">The Family Breeze</span><span class="branding-separator">|</span><div class="logoDiv link-disclosure  attribution-disclosure-link-sponsored align-disclosure-left"><a class="trc_desktop_disclosure_link trc_attribution_position_after_branding" rel="nofollow sponsored noopener" href="https://popup.taboola.com/he/?template=colorbox&amp;utm_source=rotter&amp;utm_medium=referral&amp;utm_content=thumbs-feed-01-a:Below Article Thumbnails 2nd | Card 4:" target="_blank"><span>Sponsored</span></a><a class="trc_mobile_disclosure_link trc_attribution_position_after_branding" rel="nofollow sponsored noopener" href="https://popup.taboola.com/he/?template=colorbox&amp;utm_source=rotter&amp;utm_medium=referral&amp;utm_content=thumbs-feed-01-a:Below Article Thumbnails 2nd | Card 4:" target="_blank"><span>Sponsored</span></a></div></span></span></a><div class=" trc_user_exclude_btn " title="Remove this item"></div><div class=" trc_exclude_overlay trc_fade "></div><div class=" trc_undo_btn ">Undo</div></div><div observeid="tbl-observe-37 tbl-observe-40" data-item-id="~~V1~~-8748214387923386415~~l4ilx7QwlKy2uxKIyB9jcRcg7LBS1DZ_zwlB22aokwLnoZueAsnM0UTkqRiz-o8uuKa2_rupL9I0kvx1XVufut2qKIJrSNJ_InWKPTfYcgzaXzWc0vY2-B5N-kofkML8zE8A-nrl5ZO5TbDagFaVTDNmI9CGe6sUcIRPqEDfSV5QkoTuyu-bHNTzEQb8zhD4TS8Maux2jWC1gRU3nx5A7rEVxuOWKWhrQzvXHgQEr6voYD60qVYzKB_9uZqcHlwH" data-item-title="פיני בלילי, מסיר שיער עם סנסילייט פרו כמו אלפי משתמשות ומשתמשים בארץ ובעולם!&nbsp;" data-item-thumb="http://cdn.taboola.com/libtrc/static/thumbnails/3e0eb6b78d15bc740c729b73836d3da8.jpg" data-item-syndicated="true" class="videoCube trc_spotlight_item origin-default thumbnail_top syndicatedItem textItem videoCube_2_child trc_excludable "><a attributionsrc="" title="פיני בלילי, מסיר שיער עם סנסילייט פרו כמו אלפי משתמשות ומשתמשים בארץ ובעולם!&nbsp;" href="https://life-mag.co.il/slp-pini/" rel="nofollow noopener sponsored" target="_blank" class=" item-thumbnail-href " slot="thumbnail"><div class="thumbBlock_holder"><span class="thumbBlock" style="background-image: url(&quot;https://images.taboola.com/taboola/image/fetch/c_crop%2Cf_jpg%2Cq_auto%2Ce_sharpen%2Car_1.7778%2Cw_8256%2Cx_0%2Cy_0/c_fill%2Cw_620%2Ch_345/http%3A//cdn.taboola.com/libtrc/static/thumbnails/3e0eb6b78d15bc740c729b73836d3da8.jpg&quot;);"><span class="thumbnail-overlay"></span><span class="branding">Life-mag | מגזין יופי ואיכות חיים</span><span class="static-text top-right"></span></span><div class="videoCube_aspect"></div></div></a><a attributionsrc="" title="פיני בלילי, מסיר שיער עם סנסילייט פרו כמו אלפי משתמשות ומשתמשים בארץ ובעולם!&nbsp;" href="https://life-mag.co.il/slp-pini/" rel="nofollow noopener sponsored" target="_blank" class="item-label-href video-cta-style"><span class="video-label-box trc-main-label video-label-box-cta video-label-box-cta-non-ie"><span class="video-label video-title video-label-flex-cta-item trc_ellipsis " slot="title" style="-webkit-line-clamp: 2;">פיני בלילי, מסיר שיער עם סנסילייט פרו כמו אלפי משתמשות ומשתמשים בארץ ובעולם!&nbsp;</span><span class="video-label video-description video-label-flex-cta-item trc_ellipsis " slot="description" title="&quot;Description: זה הזמן להתחדש בסנסילייט פרו – המכשיר הביתי להסרת שיער שמגיע עם 60 ימי התנסות + הטבה מפתיעה! שתי חלוניות טיפול והדרכה על ידי צוות קוסמטיקאיות מקצועי. כדי להשיג את הסנסילייט פרו שלכם – השאירו פרטים עכשיו!&quot;" style="-webkit-line-clamp: 2;">זה הזמן להתחדש בסנסילייט פרו – המכשיר הביתי להסרת שיער שמגיע עם 60 ימי התנסות + הטבה מפתיעה! שתי חלוניות טיפול והדרכה על ידי צוות קוסמטיקאיות מקצועי. כדי להשיג את הסנסילייט פרו שלכם – השאירו פרטים עכשיו!</span><span class="branding composite-branding video-branding-flex-cta-item" slot="branding"><span class="branding-inner">Life-mag | מגזין יופי ואיכות חיים</span><span class="branding-separator">|</span><div class="logoDiv link-disclosure  attribution-disclosure-link-sponsored align-disclosure-left"><a class="trc_desktop_disclosure_link trc_attribution_position_after_branding" rel="nofollow sponsored noopener" href="https://popup.taboola.com/he/?template=colorbox&amp;utm_source=rotter&amp;utm_medium=referral&amp;utm_content=thumbs-feed-01-a:Below Article Thumbnails 2nd | Card 4:" target="_blank"><span>Sponsored</span></a><a class="trc_mobile_disclosure_link trc_attribution_position_after_branding" rel="nofollow sponsored noopener" href="https://popup.taboola.com/he/?template=colorbox&amp;utm_source=rotter&amp;utm_medium=referral&amp;utm_content=thumbs-feed-01-a:Below Article Thumbnails 2nd | Card 4:" target="_blank"><span>Sponsored</span></a></div></span><div class="video-cta-href"><button type="button" class="video-cta-button video-cta-style" style="border-color: rgb(0, 0, 0); font-weight: bold; font-family: Arial, Helvetica, sans-serif; color: rgb(0, 0, 0);">מידע נוסף</button></div></span></a><div class=" trc_user_exclude_btn " title="Remove this item"></div><div class=" trc_exclude_overlay trc_fade "></div><div class=" trc_undo_btn ">Undo</div></div></div></div></div><div class="trc_clearer"></div></div></div></div></div><div class="tbl-batch-anchor" observeid="tbl-observe-52"></div><div class=" tbl-hidden tbl-loading-spinner tbl-loading-cards-placeholder tbl-hidden tbl-loading-placeholder-dir-rtl">
                <div class="tbl-placeholder-card">
                    <div class="tbl-first-row-pl tbl-masker"></div>
                    <div class="tbl-second-row-pl tbl-masker"></div>
                    <div class="tbl-third-row-pl tbl-masker"></div>
                    <div class="tbl-last-row-right-padding tbl-masker"></div>
                    <div class="tbl-img-top-padding tbl-masker"></div>
                    <div class="tbl-img-bottom-padding tbl-masker"></div>
                    <div class="tbl-first-col-padding tbl-masker"></div>
                    <div class="tbl-second-col-padding tbl-masker"></div>
                </div>
            
                <div class="tbl-placeholder-card">
                    <div class="tbl-first-row-pl tbl-masker"></div>
                    <div class="tbl-second-row-pl tbl-masker"></div>
                    <div class="tbl-third-row-pl tbl-masker"></div>
                    <div class="tbl-last-row-right-padding tbl-masker"></div>
                    <div class="tbl-img-top-padding tbl-masker"></div>
                    <div class="tbl-img-bottom-padding tbl-masker"></div>
                    <div class="tbl-first-col-padding tbl-masker"></div>
                    <div class="tbl-second-col-padding tbl-masker"></div>
                </div>
            
                <div class="tbl-placeholder-card">
                    <div class="tbl-first-row-pl tbl-masker"></div>
                    <div class="tbl-second-row-pl tbl-masker"></div>
                    <div class="tbl-third-row-pl tbl-masker"></div>
                    <div class="tbl-last-row-right-padding tbl-masker"></div>
                    <div class="tbl-img-top-padding tbl-masker"></div>
                    <div class="tbl-img-bottom-padding tbl-masker"></div>
                    <div class="tbl-first-col-padding tbl-masker"></div>
                    <div class="tbl-second-col-padding tbl-masker"></div>
                </div>
            </div><div id="_cm-css-reset" class="_cm-ad-feed-manager vpaid-player-container multi-vpaids" style="width: 700px; height: 0px; position: absolute; top: 1084.4px; left: 0px; z-index: 999 !important;"><div class="_cm-ad-feed-manager vpaid-player-container multi-vpaids vpaid-handler" id="0__cm-css-reset" style="width: 700px; height: 0px; position: absolute; top: 0px; left: 0px; border: 0px; z-index: 999 !important;"></div></div><div id="1708375943437" class="_cm-ad-feed-manager" style="width: 700px; height: 0px; position: absolute; top: 1084.4px; left: 0px; z-index: 999 !important;"></div></div>
<script type="text/javascript">
	  window._taboola = window._taboola || [];
	  _taboola.push({
	    mode: 'thumbnails-g',
	    container: 'taboola-below-article-thumbnails-2nd',
	    placement: 'Below Article Thumbnails 2nd',
	    target_type: 'mix'
	  });
	</script>
<script type="text/javascript">
   window._taboola = window._taboola || [];
   _taboola.push({flush: true});
 </script>

</form></center></font></div><img src="https://ad-delivery.net/px.gif?ch=2" style="display: none !important; width: 1px !important; height: 1px !important;"><img src="https://ad.doubleclick.net/favicon.ico?ad=300x250&amp;ad_box_=1&amp;adnet=1&amp;showad=1&amp;size=250x250" style="display: none !important; width: 1px !important; height: 1px !important;"><img src="https://ad-delivery.net/px.gif?ch=1&amp;e=0.5872189919834248" style="display: none !important; width: 1px !important; height: 1px !important;"><iframe scrolling="no" frameborder="0" allowtransparency="true" src="https://platform.twitter.com/widgets/widget_iframe.2f70fb173b9000da126c79afe2098f02.html?origin=https%3A%2F%2Frotter.net" title="Twitter settings iframe" style="display: none;"></iframe><table cellspacing="0" cellpadding="0" role="presentation" class="gstl_50 gssb_c" style="width: 113px; display: none; top: 122px; position: absolute; left: 712px;"><tbody><tr><td class="gssb_f"></td><td class="gssb_e" style="width: 100%;"></td></tr></tbody></table><iframe src="https://www.google.com/recaptcha/api2/aframe" width="0" height="0" style="display: none;"></iframe><span><img width="0" height="0" src="https://bid.g.doubleclick.net/pagead/adview?ai=CYHDXhb_TZfi1LeaP9fgPkYKKiAWo0vy3cuKMudO8ENKbraSOGxABIKHHp0lg-dryg5QQoAGk6pHNA8gBBqgDAcgDAqoEuQJP0GLK9FU4s2mjAnPWTINIjqcQOwvmMhXS2rNico2kBS75519izhzhznfpjIetFQ2xbGUrNBz-pmBj-i4I1feXY45fS4VS8JbTKYykHa6o7oE5Jlhqf1-OCp0-huN0DaT5MmSuDoXqfM9882xCHdCEqxl2hppm8H8SOmtvU6aDzZQ2puzt3pDc33jkFFdCdaSAv2_gHWfnkm9RYuRa62szf-7ExGXj3kg-3zzTWi7m77m2vi3UZEpQ3U9R4zxLN37alJgH5bIVMthVXPS6FmTm1LWigCQRd7F-MA9Bwng7P7ORGPJ597xGtdmvuFz_YifzBPugTo1yOnLDUqYZOaU8cDUPd7CUGO0MtaI6lSt-tEM4eX0FTKucKhdzrarIbAx6l74qPGvZUaNQKc2tZ37ajYsJnUxSlVWowATn5r--_AOIBfbjlZtBkgUECAQYAZIFBAgFGASSBQQIBRgYkgUFCAUYqAGgBjeAB8SV7jKoB9m2sQKoB47OG6gHk9gbqAfulrECqAf-nrECqAevvrECqAfVyRuoB6a-G9gHAfIHBBC_7SHSCCQIgGEQARhdMgKKAjoJgECAwICAgIAISL39wTpY6ueZqaS4hAPyCA5iaWRkZXItMTMxMTM0NpoJvgFodHRwczovL3d3dy51ZGFjaXR5LmNvbS9jb3Vyc2UvYWktcHJvZ3JhbW1pbmctcHl0aG9uLW5hbm9kZWdyZWUtLW5kMDg5P2NvdXBvbj1GRUI0MCZ1dG1fc291cmNlPWdkbiZ1dG1fbWVkaXVtPWFkc19yJnV0bV9jYW1wYWlnbj0xNzUwNTI4NDU5OF9jX2luZGl2aWR1YWxzJnV0bV90ZXJtPTEzNjQ5NjI4MDQyMyZ1dG1fa2V5d29yZD1fgAoEyAsB2gwQCgoQ4IfC9tazzII6EgIBA9gTDIgUENAVAZgWAYAXAbIXCAoGCAASABgA&amp;sigh=20eWV-tiLeo&amp;uach_m=%5BUACH%5D&amp;ase=2&amp;nis=4&amp;pr=76:ZdO_hgAAB9Bc5xrMJxS9NIkDSbrX-8tSlvvonw==&amp;cid=CAQSKQAvHhf_9NJRx1UmOTTN--91CpHu6OjKM4QL6YZHqLw6s-Tp4aUeW4-8GAE&amp;template_id=492"></span><iframe id="rufous-sandbox" scrolling="no" frameborder="0" allowtransparency="true" allowfullscreen="true" style="position: absolute; visibility: hidden; display: none; width: 0px; height: 0px; padding: 0px; border: none;" title="Twitter analytics iframe"></iframe><div id="tbl-aug-50moj9" class="trc_popover_aug_container"><div id="tbl-aug-qz4h0w" class="trc_popover_aug_container"><div id="tbl-aug-kjl9iq" class="trc_popover_aug_container"><div class=" trc_popover trc_popover_fade trc_bottom "><div class=" trc_popover_arrow "></div><iframe frameborder="0" scrolling="no" src="javascript:void(0)" style="width: 100%;"></iframe></div></div></div></div><iframe src="//imprammp.taboola.com/st?cijs=convusmp&amp;ttype=0&amp;cisd=convusmp&amp;cipid=66361655&amp;crid=-1&amp;dast=V9qLICABYDAFG3z8zX97nmBABRt8_M1_e55gUAAAAABgYA9AcAJLZyzTwWz8wtcaxma9FwsFsrJzOXW2ZaOHa7zWTicNiMAEBiK9fMY_HM3BLHarYWDQe7tXIyc7llpoVjt9tMJg6HzQoAI8ZymQxqgYRl9vsOCsrp6TG7DKKi622xO5xmz0EyN7kBoAVNp8PnutdL_qbTy3KXu0x_md_yevs1H7_f8HnshZvhYjica46mt9kOAAAAAAAPAP____8QAAAAAAARAAAAAAASAAAAAAAUAAEVAP8WAAIXAAAAAAAYAP____8aAABnHAAJ6rK8Pg-zy-0PAAAAAAAQAAAAAAASAICBicASAAAKp5cTgP__________GIAB-swbGYD_____GwCDHgCABx8AgAchAAAAgJAhgOzL0P_aHLgFIgAAgILfIgBGAAAAAAAAAAAARwCTADoBoAKwqAL4___vtwIAuAIAAAhoHCYR-coC0B2UeAsDAAAAGBADmLXjgBVV71UcA1igh8XvNzvsGr_bZQD__________2YA_2cA_2gAQf4o9mkAQgzXCmoAv4AAAGsAv4AAAGwA6gYggP8GMAAHEHIAJmg6HT7XvV7yN51elrvcZfrL_JbX2y92ek43v-X1tguOhtMBELRiMFgdAEEMJ4PZAQAAAADcAfz____jAczaccCKqvcq6gGAiGc2800mvo1rNXKsDCPjZmRabUab0WK58axGxu0BCD3KwAegh0L3AZQIy-z3HRSU09NjdhlERdfbYnc4zZ6DZG4yiA8ahuVkEMwPYMIWo9VkslkOZ8vFZDAcDUej_QEMxGQxQICJGCyXk8lisluNVqPNcDeaDRYIIBCDCQJQtGgwWY1Gk8VkuBpNVrPlYrfbIABFq1az0WYwXM0ms91uNRwMl6MRAkzYYrSaTDbL4Wy5mAyGo-FoNEQAGFpYXCOPw-ZWbEYet2jhWbiFC4vHLZwMR4PVZDVaOWZu0etjeg43FtNu4kUAwQCXvUieFulENTI5R5OZw2VYeUyjkcfmXG5WC4fNZfGMPCvTxCKWaE4W6UR22Vc8s5lvMvFtXKuRY2UYGTcj02oz2owWy41nNTLuSwuLa-Rx2NyKzcjjFi08C7dwYfG4hZPhaLCarEYrx8wten1Mz-HGYtpN_I3dYLjZbSaLxb6xGww3u9VytNh3mEzP1Ods1P6EfY_LG3GtdI-b06ByGWzetep00naHB-XwYHTqFE9lQWf0-_1-v9_v9_v9foPWczD7PD_Dy7r7nWPKz8yr-x013oNREUsEF-lE8jedXpaLWKI0XaQTvcxveb39mo_fb_g89sLNcDEczjVH09tsEUsEp4t0InoZTxf1HwFOZGEYWWczj2U6W6wW08liMJjuFpOZdeUwjKYb024ynTiHK1cCAAAAAAAAAABYAsAEkAlwEwAAAACAE8BABovZYLFOgIPYbAa7zWq5AAAP9ry6AD-pZkh-FoqYuwDbwEY3j-tUrsUAjQEeAxjI33R6Wa4MAPDgv84MsBngMwBBrNVqWQMAAAAMYAMAAAAEcAPoBuANIKBsigP8____jwMAAACQkQOgBwAAAKDfBwCyWiv0wI1i5wcgyOFstH8AAAEKsVar1e3GWq1WQABB7BajCQT8____EwQAAAAAAACYICIECGy7!&amp;cmcv=&amp;pix=undefined&amp;cb=1708375942757&amp;uv=3379&amp;tms=1708375942757&amp;abt=adxsub-out_vA!adxsub-out_vB!pl154846-133_vB!rbcatc_vA!tmaxc_vB!ufm_vC!uftchrwf_vC!unf_vC&amp;ru=https://rotter.net/forum/listforum.php&amp;ft=0&amp;su=2&amp;unm=FEED_MANAGER&amp;aure=false&amp;agl=1&amp;cirid=6e5fcb3f-b156-4807-92fe-f4a17732baaf&amp;excid=e22lLINE_ITEM_ID_WILL_BE_HERE_ON_SERVINGc&amp;tst=1&amp;docw=0&amp;cs=true&amp;cias=1" style="display: none;"></iframe><iframe src="https://am-match.taboola.com/sync?dast=V9qLICABYDAFG3z8zX97nmBABRt8_M1_e55gUAAAAABgYA9AcAJLZyzTwWz8wtcaxma9FwsFsrJzOXW2ZaOHa7zWTicNiMAEBiK9fMY_HM3BLHarYWDQe7tXIyc7llpoVjt9tMJg6HzQoAI8ZymQxqgYRl9vsOCsrp6TG7DKKi622xO5xmz0EyN7kBoAVNp8PnutdL_qbTy3KXu0x_md_yevs1H7_f8HnshZvhYjica46mt9kOAAAAAAAPAP____8QAAAAAAARAAAAAAASAAAAAAAUAAEVAP8WAAIXAAAAAAAYAP____8aAABnHAAJ6rK8Pg-zy-0PAAAAAAAQAAAAAAASAICBicASAAAKp5cTgP__________GIAB-swbGYD_____GwCDHgCABx8AgAchAAAAgJAhgOzL0P_aHLgFIgAAgILfIgBGAAAAAAAAAAAARwCTADoBoAKwqAL4___vtwIAuAIAAAhoHCYR-coC0B2UeAsDAAAAGBADmLXjgBVV71UcA1igh8XvNzvsGr_bZQD__________2YA_2cA_2gAQf4o9mkAQgzXCmoAv4AAAGsAv4AAAGwA6gYggP8GMAAHEHIAJmg6HT7XvV7yN51elrvcZfrL_JbX2y92ek43v-X1tguOhtMBELRiMFgdAEEMJ4PZAQAAAADcAfz____jAczaccCKqvcq6gGAiGc2800mvo1rNXKsDCPjZmRabUab0WK58axGxu0BCD3KwAegh0L3AZQIy-z3HRSU09NjdhlERdfbYnc4zZ6DZG4yiA8ahuVkEMwPYMIWo9VkslkOZ8vFZDAcDUej_QEMxGQxQICJGCyXk8lisluNVqPNcDeaDRYIIBCDCQJQtGgwWY1Gk8VkuBpNVrPlYrfbIABFq1az0WYwXM0ms91uNRwMl6MRAkzYYrSaTDbL4Wy5mAyGo-FoNEQAGFpYXCOPw-ZWbEYet2jhWbiFC4vHLZwMR4PVZDVaOWZu0etjeg43FtNu4kUAwQCXvUieFulENTI5R5OZw2VYeUyjkcfmXG5WC4fNZfGMPCvTxCKWaE4W6UR22Vc8s5lvMvFtXKuRY2UYGTcj02oz2owWy41nNTLuSwuLa-Rx2NyKzcjjFi08C7dwYfG4hZPhaLCarEYrx8wten1Mz-HGYtpN_I3dYLjZbSaLxb6xGww3u9VytNh3mEzP1Ods1P6EfY_LG3GtdI-b06ByGWzetep00naHB-XwYHTqFE9lQWf0-_1-v9_v9_v9foPWczD7PD_Dy7r7nWPKz8yr-x013oNREUsEF-lE8jedXpaLWKI0XaQTvcxveb39mo_fb_g89sLNcDEczjVH09tsEUsEp4t0InoZTxf1HwFOZGEYWWczj2U6W6wW08liMJjuFpOZdeUwjKYb024ynTiHK1cCAAAAAAAAAABYAsAEkAlwEwAAAACAE8BABovZYLFOgIPYbAa7zWq5AAAP9ry6AD-pZkh-FoqYuwDbwEY3j-tUrsUAjQEeAxjI33R6Wa4MAPDgv84MsBngMwBBrNVqWQMAAAAMYAMAAAAEcAPoBuANIKBsigP8____jwMAAACQkQOgBwAAAKDfBwCyWiv0wI1i5wcgyOFstH8AAAEKsVar1e3GWq1WQABB7BajCQT8____EwQAAAAAAACYICIECGy7!&amp;excid=22&amp;docw=0&amp;cijs=1&amp;nlb=false" style="display: none;"></iframe><div class="_cm-communication-input" data-unit-info=""></div><div id="_cm-css-reset" class="_cm-video" style="text-align: left; width: 356px; height: 0px;"><div class="_cm-video-ad vpaid-player-container" id="_cm-css-reset" width="356" height="200" style="width: 356px; height: 200px;"><div class="_cm-video-ad vpaid-player-container vpaid-handler" id="0__cm-css-reset" style="width: 356px; height: 200px; position: absolute; top: 0px; left: 0px; border: 0px; z-index: 0;"><div class="_cm-ad" id="_cm-css-reset"><div class="_cm-video-ad vpaid-player-container vpaid-handler 1" id="vpaid-player-container" width="356" height="200" style="width: 356px; border: 0px; z-index: 0; position: absolute; overflow: hidden; top: 0px; height: 200px; left: 0px;"><video class="cm-ad-player" width="356" height="200" preload="auto" style="width: 356px; height: 200px;"><source src="//vidstat.taboola.com/uploadedVideos/ta/67411562/bunfaak7s24gw2ipukn5WXiw_MOBILE.mp4" type="video/mp4"></video><div class="video_controls hide"><div class="video_controls video_controls_main_area">
                <div class="title text opt-out-hidden"></div>
                <div class="cm_video_controls_progressbar_area">
                    <div class="cm_video_controls_progressbar_bg white_bg"></div>
                    <div class="cm_video_controls_progressbar blue_bg" style="width: 0%;"></div>
                </div>
                <div class="cm_video_controls_mute interactive display_mute hide"></div>
                <div class="cm_video_controls_playpause interactive hide">
                    <div class="pause show"></div>
                    <div class="play hide"></div>
                </div>
            </div></div></div></div></div></div> </div><iframe src="https://am-match.taboola.com/sync?dast=V93nYCABYDAFG3z8zX97nmBABRt8_M1_e55gUAAAAABgYABAcAJLnbDSYe53ItWM1WbtFmtFkrd5PFWjBbjFbOiWfmnM2GAECSu91g4nEu14LVbOUWbUabtXI3WawFs8Vo5Zx4Zs7ZbAoAHe00GQQPn8ugFoj9dp9BYTk9PWaXQfDwuTxvAGhB0-nwue71kr_p9LLc5S7TX-a3vN5-zcfvN3wee-FmuBgO55qj6W22AwAAAADAA8D___8_BAAAAABABAAAAACABAAAAAAABUBABcC_BYDABQAAAAAABsD___-_BgDAGQdAgrosr8_D7HL7AwAAAAAABAAAAACABAAAAACgBAAAAADgBOD_________PwZggD7zRgbg_____wbAoAcA4MEHAOBBCAAAACBkCEBZphsqbq7EjggAAKDAuAiAEQAAAAAAAAAAwBHAJIBOAKgALKoA_v__-60AAK4AAAACGodJRLKyAHQHJd7CAAAAAAbEAGbtOGBF1XsVxwAW6GHx-80Ou8bvdhnA_________78ZwP8ZwD8aQJA_in0agBDDtYIawC8gAMAawC8gAAAbgLoBCOC_AQzAAYQcgAmaTofPda-X_E2nl-Uud5n-Mr_l9faLnZ7TzW95ve2Co-F0AAStGAxWB0AQw8lgdgAAAAAAdwD_____eACzdhywouq9inoAIOKZzXyTiW_jWo0cK8PIuBmZVpvRZrRYbjyrkXF7AEKPMvAB6KHQfQAd7TQZBA-fy6AWiP12n0FhOT09ZpdB8PC5PPcDmLDFaDWZbJbD2XIxGQxHw9FofwADMVkMEGAiBsvlZLKY7Faj1Wgz3I1mgwUCCMRgggAULRpMVqPRZDEZrkaT1Wy52O02CEDRqtVstBkMV7PJbLdbDQfD5WiEABO2GK0mk81yOFsuJoPhaDgaDREAhhYW18jjsLkVm5HHLVp4Fm7hwuJxCyfD0WA1WY1Wjplb9PqYnsONxbSbeBFAMMBlL5KnRTpRjUzO0WTmcBlWHtNo5LE5l5vVwmFzWTwjz8o0sYglmpNFOpFd9hXPbOabTHwb12rkWBlGxs3ItNqMNqPFcuNZjYz70sLiGnkcNrdiM_K4RQvPwi1cWDxu4WQ4Gqwmq9HKMXOLXh_Tc7ixmHYTf2M3GG52m8lisW_sBsPNbrUcLfYdJtMz9TkbtT9h3-PyRlwr3ePmNKhcBpt3rTqdtN3hQTk8GJ06xVNZ0Bn9fr_f7_f7_X6_36D1HMw-z8_wsu5-55jyM_PqfkeN92BUxBLBRTqR_E2nl-UilihNF-lEL_NbXm-_5uP3Gz6PvXAzXAyHc83R9DZbxBLB6SKdiF7G00X9R4ATWRhG1tnMY5nOFqvFdLIYDKa7xWRmXTkMo-nGtJtMJ87hypUAAAAAAAAAAACWADABZALcBAAAAADgBAiA5QIAPNjz6gL8ZKP0PiiypO0CbAMb3TyuU7kWAzQGeAxgIH_T6WW5MgDAg_86M8BmgM8ABLFWq2UNAAAAMIANAAAAEMANoBuAN4CAsikO8P___z8OAAAAQEYOgB4AAACAYB8AqGmt0AM3ip0fgCCHs9H-AQAEKMRarVa3G2u1WgEBBLFbjCYQ8P___08QAAAAAAAAYIKIECCw7QI!&amp;excid=22&amp;docw=0&amp;cijs=1&amp;nlb=false" style="display: none;"></iframe><iframe src="https://am-match.taboola.com/sync?dast=V9qLICABYDAFG3z8zX97nmBABRt8_M1_e55gUAAAAABgYA9AcAJLZyzTwWz8wtcaxma9FwsFsrJzOXW2ZaOHa7zWTicNiMAEBiK9fMY_HM3BLHarYWDQe7tXIyc7llpoVjt9tMJg6HzQoAI8ZymQxqgYRl9vsOCsrp6TG7DKKi622xO5xmz0EyN7kBoAVNp8PnutdL_qbTy3KXu0x_md_yevs1H7_f8HnshZvhYjica46mt9kOAAAAAAAPAP____8QAAAAAAARAAAAAAASAAAAAAAUAAEVAP8WAAIXAAAAAAAYAP____8aAABnHAAJ6rK8Pg-zy-0PAAAAAAAQAAAAAAASAICBicASAAAKp5cTgP__________GIAB-swbGYD_____GwCDHgCABx8AgAchAAAAgJAhgOzL0P_aHLgFIgAAgILfIgBGAAAAAAAAAAAARwCTADoBoAKwqAL4___vtwIAuAIAAAhoHCYR-coC0B2UeAsDAAAAGBADmLXjgBVV71UcA1igh8XvNzvsGr_bZQD__________2YA_2cA_2gAQf4o9mkAQgzXCmoAv4AAAGsAv4AAAGwA6gYggP8GMAAHEHIAJmg6HT7XvV7yN51elrvcZfrL_JbX2y92ek43v-X1tguOhtMBELRiMFgdAEEMJ4PZAQAAAADcAfz____jAczaccCKqvcq6gGAiGc2800mvo1rNXKsDCPjZmRabUab0WK58axGxu0BCD3KwAegh0L3AZQIy-z3HRSU09NjdhlERdfbYnc4zZ6DZG4yiA8ahuVkEMwPYMIWo9VkslkOZ8vFZDAcDUej_QEMxGQxQICJGCyXk8lisluNVqPNcDeaDRYIIBCDCQJQtGgwWY1Gk8VkuBpNVrPlYrfbIABFq1az0WYwXM0ms91uNRwMl6MRAkzYYrSaTDbL4Wy5mAyGo-FoNEQAGFpYXCOPw-ZWbEYet2jhWbiFC4vHLZwMR4PVZDVaOWZu0etjeg43FtNu4kUAwQCXvUieFulENTI5R5OZw2VYeUyjkcfmXG5WC4fNZfGMPCvTxCKWaE4W6UR22Vc8s5lvMvFtXKuRY2UYGTcj02oz2owWy41nNTLuSwuLa-Rx2NyKzcjjFi08C7dwYfG4hZPhaLCarEYrx8wten1Mz-HGYtpN_I3dYLjZbSaLxb6xGww3u9VytNh3mEzP1Ods1P6EfY_LG3GtdI-b06ByGWzetep00naHB-XwYHTqFE9lQWf0-_1-v9_v9_v9foPWczD7PD_Dy7r7nWPKz8yr-x013oNREUsEF-lE8jedXpaLWKI0XaQTvcxveb39mo_fb_g89sLNcDEczjVH09tsEUsEp4t0InoZTxf1HwFOZGEYWWczj2U6W6wW08liMJjuFpOZdeUwjKYb024ynTiHK1cCAAAAAAAAAABYAsAEkAlwEwAAAACAE8BABovZYLFOgIPYbAa7zWq5AAAP9ry6AD-pZkh-FoqYuwDbwEY3j-tUrsUAjQEeAxjI33R6Wa4MAPDgv84MsBngMwBBrNVqWQMAAAAMYAMAAAAEcAPoBuANIKBsigP8____jwMAAACQkQOgBwAAAKDfBwCyWiv0wI1i5wcgyOFstH8AAAEKsVar1e3GWq1WQABB7BajCQT8____EwQAAAAAAACYICIECGy7!&amp;excid=22&amp;docw=0&amp;cijs=1&amp;nlb=false" style="display: none;"></iframe><iframe src="https://am-match.taboola.com/sync?dast=V9qLICABYDAFG3z8zX97nmBABRt8_M1_e55gUAAAAABgYA9AcAJLZyzTwWz8wtcaxma9FwsFsrJzOXW2ZaOHa7zWTicNiMAEBiK9fMY_HM3BLHarYWDQe7tXIyc7llpoVjt9tMJg6HzQoAI8ZymQxqgYRl9vsOCsrp6TG7DKKi622xO5xmz0EyN7kBoAVNp8PnutdL_qbTy3KXu0x_md_yevs1H7_f8HnshZvhYjica46mt9kOAAAAAAAPAP____8QAAAAAAARAAAAAAASAAAAAAAUAAEVAP8WAAIXAAAAAAAYAP____8aAABnHAAJ6rK8Pg-zy-0PAAAAAAAQAAAAAAASAICBicASAAAKp5cTgP__________GIAB-swbGYD_____GwCDHgCABx8AgAchAAAAgJAhgOzL0P_aHLgFIgAAgILfIgBGAAAAAAAAAAAARwCTADoBoAKwqAL4___vtwIAuAIAAAhoHCYR-coC0B2UeAsDAAAAGBADmLXjgBVV71UcA1igh8XvNzvsGr_bZQD__________2YA_2cA_2gAQf4o9mkAQgzXCmoAv4AAAGsAv4AAAGwA6gYggP8GMAAHEHIAJmg6HT7XvV7yN51elrvcZfrL_JbX2y92ek43v-X1tguOhtMBELRiMFgdAEEMJ4PZAQAAAADcAfz____jAczaccCKqvcq6gGAiGc2800mvo1rNXKsDCPjZmRabUab0WK58axGxu0BCD3KwAegh0L3AZQIy-z3HRSU09NjdhlERdfbYnc4zZ6DZG4yiA8ahuVkEMwPYMIWo9VkslkOZ8vFZDAcDUej_QEMxGQxQICJGCyXk8lisluNVqPNcDeaDRYIIBCDCQJQtGgwWY1Gk8VkuBpNVrPlYrfbIABFq1az0WYwXM0ms91uNRwMl6MRAkzYYrSaTDbL4Wy5mAyGo-FoNEQAGFpYXCOPw-ZWbEYet2jhWbiFC4vHLZwMR4PVZDVaOWZu0etjeg43FtNu4kUAwQCXvUieFulENTI5R5OZw2VYeUyjkcfmXG5WC4fNZfGMPCvTxCKWaE4W6UR22Vc8s5lvMvFtXKuRY2UYGTcj02oz2owWy41nNTLuSwuLa-Rx2NyKzcjjFi08C7dwYfG4hZPhaLCarEYrx8wten1Mz-HGYtpN_I3dYLjZbSaLxb6xGww3u9VytNh3mEzP1Ods1P6EfY_LG3GtdI-b06ByGWzetep00naHB-XwYHTqFE9lQWf0-_1-v9_v9_v9foPWczD7PD_Dy7r7nWPKz8yr-x013oNREUsEF-lE8jedXpaLWKI0XaQTvcxveb39mo_fb_g89sLNcDEczjVH09tsEUsEp4t0InoZTxf1HwFOZGEYWWczj2U6W6wW08liMJjuFpOZdeUwjKYb024ynTiHK1cCAAAAAAAAAABYAsAEkAlwEwAAAACAE8BABovZYLFOgIPYbAa7zWq5AAAP9ry6AD-pZkh-FoqYuwDbwEY3j-tUrsUAjQEeAxjI33R6Wa4MAPDgv84MsBngMwBBrNVqWQMAAAAMYAMAAAAEcAPoBuANIKBsigP8____jwMAAACQkQOgBwAAAKDfBwCyWiv0wI1i5wcgyOFstH8AAAEKsVar1e3GWq1WQABB7BajCQT8____EwQAAAAAAACYICIECGy7!&amp;excid=22&amp;docw=0&amp;cijs=1&amp;nlb=false" style="display: none;"></iframe></body><iframe id="google_esf" name="google_esf" src="https://googleads.g.doubleclick.net/pagead/html/r20240215/r20190131/zrt_lookup_fy2021.html" style="display: none;"></iframe></html>

`
const test = new RotterPageScarp(html, 'https://rotter.net/forum/scoops1/838188.shtml')