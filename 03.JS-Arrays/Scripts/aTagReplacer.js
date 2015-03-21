var str;
function solve(input){
    str = input.replace("\<ul>    <li>    <a", "\<ul>\n <li>\n   [URL");
    str=str.replace("\</a></li></ul>", "\[/URL]\n </li>\n</ul>");

}

var input= "<ul>\
    <li>\
    <a href=http://softuni.bg>SoftUni</a>\
</li>\
</ul>";
solve(input);
console.log(str);