function countDivs(html){
    var count1 = (html.match(/<div/g) || []).length;

console.log(count1);
}

var html= '<!DOCTYPE html>\
<html>\
<head lang="en">\
<meta charset="UTF-8">\
<title>index</title>\
<script src="/yourScript.js" defer></script>\
</head>\
<body>\
<div id="outerDiv">\
<div\
class="first">\
<div><div>hello</div></div>\
</div>\
<div>hi<div></div></div>\
<div>I am a div</div>\
</div>\
</body>\
</html>';
countDivs(html);
