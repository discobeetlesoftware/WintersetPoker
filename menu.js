function writeJS() {
var str='';
str+='<ul>';
str+='<li id="one"><a href="\/" title="home">home<\/a><\/li>';
str+='<li id="two"><a href="\/bb\/" title="forums">forums<\/a><\/li>';
str+='<li id="three"><a href="\/prevgames\/" title="previous games">past games<\/a><\/li>';
str+='<li id="four"><a href="\/stats\/" title="stats">stats<\/a><\/li>';
str+='<li id="five"><a href="\/bios\/" title="biographies">bios<\/a><\/li>';
str+='<li id="six"><a href="\/tourneyinfo\/" title="tourney info">tourney info<\/a><\/li>';
str+='<li id="seven"><a href="\/links\/" title="links">links<\/a><\/li>';
str+='<li id="eight"><a href="\/downloads\/" title="media">media<\/a><\/li>';
str+='<li id="nine"><a href="http:\/\/validator.w3.org\/check?uri=referer" title="HTML 4.01 Valid">html valid<\/a>';
str+='<\/ul>';
document.write(str);
}
writeJS();