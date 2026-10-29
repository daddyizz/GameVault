// Game screenshots from Wikimedia Commons. Each image links to its source and license page.
// Screenshot availability depends on Wikimedia's public media service.
const commons=(file:string)=>'https://commons.wikimedia.org/wiki/Special:FilePath/'+encodeURIComponent(file)+'?width=720';
const source=(file:string)=>'https://commons.wikimedia.org/wiki/File:'+encodeURIComponent(file.replace(/ /g,'_'));
export const gameArtwork:Record<string,{images:string[];credit:string;creditUrl:string}>={
'0ad':{images:[commons('0 A.D. - blacksmiths.jpg'),commons('0 A.D. - Cité koushite.jpg')],credit:'Wikimedia Commons',creditUrl:source('0 A.D. - blacksmiths.jpg')},
'supertuxkart':{images:[commons('SuperTuxKart in-race (2018).png'),commons('SuperTuxKart kart selection screen 2018.png')],credit:'Wikimedia Commons',creditUrl:source('SuperTuxKart in-race (2018).png')},
'mindustry':{images:[commons('Mindustry multiplayer.jpg'),commons('Mindyscreenshot2.png')],credit:'Wikimedia Commons',creditUrl:source('Mindustry multiplayer.jpg')},
'wesnoth':{images:[commons('Wesnoth 1.18.4.png'),commons('Wesnoth full combat.png')],credit:'Wikimedia Commons',creditUrl:source('Wesnoth 1.18.4.png')},
'openttd':{images:[commons('OpenTTD-15.3-en.png'),commons('Map and Town of OpenTTD 14.1.png')],credit:'Wikimedia Commons',creditUrl:source('OpenTTD-15.3-en.png')}
};
