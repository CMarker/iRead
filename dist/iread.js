javascript:(function(){function doLongSpeak(e){if(e&&e.split)for(var n=e.split(/[—.,?]+/),t=0;t<n.length;t++){var o=new SpeechSynthesisUtterance(n[t]);o.onstart=function(e){console.log("The utterance started to be spoken."),isSpeaking=!0},o.onend=function(e){console.log("The utterance ended."),isSpeaking=!1},o.onerror=function(e){console.log("The utterance has error - "+e),isSpeaking=!1},o.onpause=function(e){console.log("The utterance paused."),isSpeaking=!1},o.onresume=function(e){console.log("The utterance resumed."),isSpeaking=!0},o.onmark=function(e){console.log("The utterance hit a mark.")},o.onboundary=function(e){console.log("The utterance hit a boundary - "+e)},speechSynthesis.speak(o)}}function selectCrawler(){var e=window.location.href;for(key in crawlers){var n=e.match(new RegExp(key));if(n&&n.length)return crawlers[key]}return null}var embeddedBody='<div id="color-palette">\n    <style type="text/css" media="screen">\n        #color-palette {\n            position: fixed;\n            top: 25%;\n            left: 25%;\n            background-color: white;\n            padding: 20px;\n            border-color: gray;\n            border-style: dashed;\n            width: 50%;\n            height: 50%;\n        }\n        #footer { position: relative; margin: 10px;}\n    </style>\n\n    <div id="close-palette">X</div>\n    Testing yo\n</div>',embeddedScript="/*window.jQuery('#close-palette').click(function(){\n    window.jQuery('#palette-inject').remove();\n});*/",crawlers={};if(crawlers["reddit.com\\/r\\/.*\\/comments/"]={0:"div.expando p",1:".commentarea div.md > p"},crawlers["azlyrics.com/lyrics/.*/.*.html"]={0:"div.row > div.text-center > div:eq(6)"},crawlers["medium.com/.*/.*"]={0:"div.section-content"},crawlers["businessinsider.com/.*"]={0:"h1:eq(0)",1:"div.post-content > p"},crawlers["chrome-extension://oemmndcbldboiebfnladdacbdfmadadm/.*"]={0:"div.textLayer"},crawlers["digitaltrends.com/.*/.*/"]={0:"h1",1:"article"},console.log("Reading"),"undefined"!=typeof _isInjected&&speechSynthesis.speaking)isPaused?(speechSynthesis.resume(),isPaused=!1):(speechSynthesis.pause(),isSpeaking=!1,isPaused=!0);else if(isSpeaking=!1,isPaused=!1,_isInjected=!0,window.getSelection()&&window.getSelection().toString().length){var selectedText=window.getSelection().toString().replace(/\r?\n|\r/gm,"");selectedText&&(speechSynthesis.cancel(),doLongSpeak(selectedText))}else{var crawler=selectCrawler();if(crawler){speechSynthesis.cancel();for(key in crawler){var currentSelector=crawler[key];$(currentSelector).each(function(e,n){var t=n.textContent;t&&(window.isReading=!0,doLongSpeak(t),isReading=!1)})}}else console.log("No matching crawler found")}window.onbeforeunload=function(){speechSynthesis.cancel()};})();