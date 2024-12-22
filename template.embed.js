window['template.server'] = `

// Servidor padrão (Requerido)
const _DFT_SRV = "URL_DEL_PRIMER_VIDEO_EN_PANTALLA";
// Lista de servidores
const _SRV_LIST = [{
    caption: "Idioma",
    name: 'Español',
    servers: [{embed_list}
	]
},`;

window['template.server:fn'] = function (n) {
	if (n.length == 0) return "";

	const template = window['template.server'];
	let embed="";

	n.forEach(e=>{
		embed+=`
    {embed: "${e.url}", name: "${e.name}", caption: "${e.lang}${e.quality}", video: ${e.video}},`
	});

return template.replace(/{embed_list}/g, embed);
}
