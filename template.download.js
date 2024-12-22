window['template.download'] = `{download_list}]`;
/*
    {
    name: "mega",
    quality: "1080p",
    size: "300mb",
    url: "#url-mega-1"
    }
*/
window['template.download:fn'] = function ( n ) {
	if (n.length == 0) return "";
	
	const template = window['template.download'];
	let dl="";

	n.forEach(link=>{
    dl+="{";
    dl+="\n    name: " + `"${link.size}",`;
    dl+="\n    caption: " + `"Idioma",`;
    dl+="\n    servers: " + `[
	{embed: "${link.url}", name: "${link.name}", caption: "${link.quality}", video: false},
    {embed: "_____", name: "________", caption: "${link.quality}", video: false},
    {embed: "_____", name: "________", caption: "${link.quality}", video: false},
    {embed: "_____", name: "________", caption: "${link.quality}", video: false},
	]`;
		dl+="\n},";
	});

	return template.replace(/{download_list}/g, dl);

}