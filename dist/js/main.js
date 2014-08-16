function text(e,t){"textContent"in document.body?e.textContent=t:e.innerText=t}function event(e,t,n,a){"add"===e?window.addEventListener?t.addEventListener(n,a):window.attachEvent&&t.attachEvent(n,a):"remove"===e&&(window.removeEventListener?t.removeEventListener(n,a):window.detachEvent&&t.detachEvent(n,a))}function async(e){var t=document.createElement("script"),n=document.scripts[0];t.src=e,n.parentNode.insertBefore(t,n)}function scrollAbr(){_gaq.push(["_trackEvent","Site","Scrolled","The user scrolled the page at least once"]),event("remove",window,"scroll",scrollAbr)}!function(e){"use strict";function t(e){for(var t,n,a=[],r=0,i=e.length;i>r;)t=e.charCodeAt(r++),55296==(63488&t)&&i>r?(n=e.charCodeAt(r++),56320==(64512&n)?a.push(((1023&t)<<10)+(1023&n)+65536):a.push(t,n)):a.push(t);return a}function n(e,t){var n=e&&("[object NodeList]"===Object.prototype.toString.call(e)&&e.length||1===e.nodeType),a=t&&"function"==typeof t;return"console"in window&&"warn"in console&&(n||console.warn("Countable: No valid elements were found"),a||console.warn('Countable: "'+t+'" is not a valid callback function')),n&&a}function a(e){var t={hardReturns:!1,stripTags:!1,ignoreReturns:!1};for(var n in e)t.hasOwnProperty(n)&&(t[n]=e[n]);return t}function r(e,n){var a,r="value"in e?e.value:e.innerText||e.textContent;return n.stripTags&&(r=r.replace(/<\/?[a-z][^>]*>/gi,"")),a=r.trim(),{paragraphs:a?(a.match(n.hardReturns?/\n{2,}/g:/\n+/g)||[]).length+1:0,words:a?(a.replace(/['";:,.?¿\-!¡]+/g,"").match(/\S+/g)||[]).length:0,characters:a?t(a.replace(/\s/g,"")).length:0,all:t(n.ignoreReturns?r.replace(/[\n\r]/g,""):r).length}}function i(e,t){var n=e.length;if("undefined"!=typeof n)for(;n--;)t(e[n]);else t(e)}var o=[],s="oninput"in document?"input":"keyup";String.prototype.trim||(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")});var l={live:function(e,t,l){var c=a(l),u=function(e){var n=function(){t.call(e,r(e,c))};o.push({element:e,handler:n}),n(),e.addEventListener?e.addEventListener(s,n,!1):e.attachEvent&&e.attachEvent("on"+s,n)};if(n(e,t))return e.length?i(e,u):u(e),this},die:function(e){return n(e,function(){})?(i(e,function(e){var t;i(o,function(n){n.element===e&&(t=n)}),t&&(e.removeEventListener?e.removeEventListener(s,t.handler,!1):e.detachEvent&&e.detachEvent("on"+s,t.handler),o.splice(o.indexOf(t),1))}),this):void 0},once:function(e,t,o){return n(e,t)?(i(e,function(e){t.call(e,r(e,a(o)))}),this):void 0},enabled:function(e){var t=!1;return e&&1===e.nodeType&&i(o,function(n){n.element===e&&(t=!0)}),t}};"object"==typeof exports?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):e.Countable=l}(this),setTimeout(function(){_gaq.push(["_trackEvent","Site","Read","The user stayed on the page for 15 seconds or longer"])},15e3),event("add",window,"scroll",scrollAbr);var fields={paragraphs:document.getElementById("result__paragraphs"),words:document.getElementById("result__words"),characters:document.getElementById("result__characters"),all:document.getElementById("result__all")};Countable.live(document.getElementById("countableArea"),function(e){for(var t in fields)text(fields[t],e[t])}),async("https://api.github.com/repos/RadLikeWhoa/Countable?callback=watchCount"),window.watchCount=function(e){if(e){var t=document.getElementById("github-watch-count"),n=e.data.watchers;if(t&&n){text(t,n),t.parentNode.style.display="inline-block",t.parentNode.title="Countable has "+n+" stargazers on GitHub";try{delete window.watchCount}catch(a){window.watchCount=void 0}}}};var _gaq=[["_setAccount","UA-39380123-1"],["_trackPageview"]];async("http://www.google-analytics.com/ga.js"),event("add",document.getElementById("github-button"),"click",function(){_gaq.push(["_trackEvent","Site","Downloads",'The user clicked the "Download on GitHub" button'])}),async("https://platform.twitter.com/widgets.js"),window.twttr=function(){var e;return window.twttr||(e={_e:[],ready:function(t){e._e.push(t)}})}(),twttr.ready(function(){var e=function(e){_gaq.push(["_trackEvent","Twitter",e.type])};twttr.events.bind("click",e),twttr.events.bind("tweet",e),twttr.events.bind("follow",e)}),Prism.languages.insertBefore("javascript","keyword",{"countable-class":/Countable/})(function(){var e=/\blang(?:uage)?-(?!\*)(\w+)\b/i,t=self.Prism={util:{type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},clone:function(e){var n=t.util.type(e);switch(n){case"Object":var a={};for(var r in e)e.hasOwnProperty(r)&&(a[r]=t.util.clone(e[r]));return a;case"Array":return e.slice()}return e}},languages:{extend:function(e,n){var a=t.util.clone(t.languages[e]);for(var r in n)a[r]=n[r];return a},insertBefore:function(e,n,a,r){r=r||t.languages;var i=r[e],o={};for(var s in i)if(i.hasOwnProperty(s)){if(s==n)for(var l in a)a.hasOwnProperty(l)&&(o[l]=a[l]);o[s]=i[s]}return r[e]=o},DFS:function(e,n){for(var a in e)n.call(e,a,e[a]),"Object"===t.util.type(e)&&t.languages.DFS(e[a],n)}},highlightAll:function(e,n){for(var a,r=document.querySelectorAll('code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'),i=0;a=r[i++];)t.highlightElement(a,e===!0,n)},highlightElement:function(a,r,i){for(var o,s,l=a;l&&!e.test(l.className);)l=l.parentNode;if(l&&(o=(l.className.match(e)||[,""])[1],s=t.languages[o]),s){a.className=a.className.replace(e,"").replace(/\s+/g," ")+" language-"+o,l=a.parentNode,/pre/i.test(l.nodeName)&&(l.className=l.className.replace(e,"").replace(/\s+/g," ")+" language-"+o);var c=a.textContent;if(c){c=c.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\u00a0/g," ");var u={element:a,language:o,grammar:s,code:c};if(t.hooks.run("before-highlight",u),r&&self.Worker){var g=new Worker(t.filename);g.onmessage=function(e){u.highlightedCode=n.stringify(JSON.parse(e.data),o),u.element.innerHTML=u.highlightedCode,i&&i.call(u.element),t.hooks.run("after-highlight",u)},g.postMessage(JSON.stringify({language:u.language,code:u.code}))}else u.highlightedCode=t.highlight(u.code,u.grammar,u.language),u.element.innerHTML=u.highlightedCode,i&&i.call(a),t.hooks.run("after-highlight",u)}}},highlight:function(e,a,r){return n.stringify(t.tokenize(e,a),r)},tokenize:function(e,n){var a=t.Token,r=[e],i=n.rest;if(i){for(var o in i)n[o]=i[o];delete n.rest}e:for(var o in n)if(n.hasOwnProperty(o)&&n[o]){var s=n[o],l=s.inside,c=!!s.lookbehind||0;s=s.pattern||s;for(var u=0;u<r.length;u++){var g=r[u];if(r.length>e.length)break e;if(!(g instanceof a)){s.lastIndex=0;var d=s.exec(g);if(d){c&&(c=d[1].length);var f=d.index-1+c,d=d[0].slice(c),h=d.length,p=f+h,v=g.slice(0,f+1),m=g.slice(p+1),w=[u,1];v&&w.push(v);var y=new a(o,l?t.tokenize(d,l):d);w.push(y),m&&w.push(m),Array.prototype.splice.apply(r,w)}}}}return r},hooks:{all:{},add:function(e,n){var a=t.hooks.all;a[e]=a[e]||[],a[e].push(n)},run:function(e,n){var a=t.hooks.all[e];if(a&&a.length)for(var r,i=0;r=a[i++];)r(n)}}},n=t.Token=function(e,t){this.type=e,this.content=t};if(n.stringify=function(e,a,r){if("string"==typeof e)return e;if("[object Array]"==Object.prototype.toString.call(e))return e.map(function(t){return n.stringify(t,a,e)}).join("");var i={type:e.type,content:n.stringify(e.content,a,r),tag:"span",classes:["token",e.type],attributes:{},language:a,parent:r};"comment"==i.type&&(i.attributes.spellcheck="true"),t.hooks.run("wrap",i);var o="";for(var s in i.attributes)o+=s+'="'+(i.attributes[s]||"")+'"';return"<"+i.tag+' class="'+i.classes.join(" ")+'" '+o+">"+i.content+"</"+i.tag+">"},!self.document)return void self.addEventListener("message",function(e){var n=JSON.parse(e.data),a=n.language,r=n.code;self.postMessage(JSON.stringify(t.tokenize(r,t.languages[a]))),self.close()},!1);var a=document.getElementsByTagName("script");a=a[a.length-1],a&&(t.filename=a.src,document.addEventListener&&!a.hasAttribute("data-manual")&&document.addEventListener("DOMContentLoaded",t.highlightAll))})(),Prism.languages.clike={comment:{pattern:/(^|[^\\])(\/\*[\w\W]*?\*\/|(^|[^:])\/\/.*?(\r?\n|$))/g,lookbehind:!0},string:/("|')(\\?.)*?\1/g,"class-name":{pattern:/((?:class|interface|extends|implements|trait|instanceof|new)\s+)[a-z0-9_\.\\]+/gi,lookbehind:!0,inside:{punctuation:/(\.|\\)/}},keyword:/\b(if|else|while|do|for|return|in|instanceof|function|new|try|catch|finally|null|break|continue)\b/g,"boolean":/\b(true|false)\b/g,"function":{pattern:/[a-z0-9_]+\(/gi,inside:{punctuation:/\(/}},number:/\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?)\b/g,operator:/[-+]{1,2}|!|=?&lt;|=?&gt;|={1,2}|(&amp;){1,2}|\|?\||\?|\*|\/|\~|\^|\%/g,ignore:/&(lt|gt|amp);/gi,punctuation:/[{}[\];(),.:]/g},Prism.languages.javascript=Prism.languages.extend("clike",{keyword:/\b(var|let|if|else|while|do|for|return|in|instanceof|function|new|with|typeof|try|catch|finally|null|break|continue)\b/g,number:/\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?|NaN|-?Infinity)\b/g}),Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:/(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\r\n])+\/[gim]{0,3}(?=\s*($|[\r\n,.;})]))/g,lookbehind:!0}}),Prism.languages.markup&&Prism.languages.insertBefore("markup","tag",{script:{pattern:/(&lt;|<)script[\w\W]*?(>|&gt;)[\w\W]*?(&lt;|<)\/script(>|&gt;)/gi,inside:{tag:{pattern:/(&lt;|<)script[\w\W]*?(>|&gt;)|(&lt;|<)\/script(>|&gt;)/gi,inside:Prism.languages.markup.tag.inside},rest:Prism.languages.javascript}}});