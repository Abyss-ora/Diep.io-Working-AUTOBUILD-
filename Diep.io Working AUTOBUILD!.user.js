// ==UserScript==
// @name         Diep.io Working AUTOBUILD!
// @namespace    http://tampermonkey.net/
// @version      0.6
// @description  This is a work in progress! You can change the scripts to what you want. Also try my XandY mod! Try to take over the diep.io!
// @author       -{Abyss⌬}-ora
// @match        https://diep.io/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
//-------------------------------------[AUTOBUILD BUTTON]------------------------------------\\
var textG = document.createElement('div');
    document.getElementsByTagName('body')[0].appendChild(textG);
    textG.innerHTML = `
<html>
<head>
<style>
#myhover a {
  position: absolute;
  right: -222px;
  transition: 0.3s;
  padding: 15px;
  width: 200px;
  text-decoration: none;
  font-size: 10px;
  font-family: 'Monoton', cursive;
  text-shadow: black 0px 1px, purple 0px 2px, pink 0px 3px;
  src: url('https://fonts.googleapis.com/css2?family=Monoton&display=swap');
  color: white;
  border-radius: 5 5px 5px 5;
}

#myhover a:hover {
  right: 0;
}

#modtab {
  top: 200px;
  background-color: #555
}
</style>
</head>
<body>
<div id="myhover" class="hover">
<a id="modtab"> <h1> -{Abyss⌬}-ora's modmenu</h1>
<button title="My Factory" type="button" style="background-color:white; font-family: 'Monoton'; src: url('https://fonts.googleapis.com/css2?family=Monoton&display=swap'); color:black; width:200px; height:26px; text-shadow: white 0px 1px, purple 0px 2px, pink 0px 3px;" onclick="input.execute('game_stats_build 567456745678567456745678567488888')">⌬Factory</button>
<br><button title="w/less speed" type="button" style="background-color:purple; font-family: 'Monoton'; src: url('https://fonts.googleapis.com/css2?family=Monoton&display=swap'); color:white; width:200px; height:26px; text-shadow: black 0px 1px, purple 0px 2px, pink 0px 3px;" onclick="input.execute('game_stats_build 456745674567456745674567456788888')">⌬OverLord_2.0</button>
<br><button title="w/no reload" type="button" style="background-color:pink; font-family: 'Monoton'; src: url('https://fonts.googleapis.com/css2?family=Monoton&display=swap'); color:white; width:200px; height:26px; text-shadow: black 0px 1px, purple 0px 2px, pink 0px 3px;" onclick="input.execute('game_stats_build 555666555566664444444888888822111')">⌬OverLord</button>
<br><button title="Has speed and you run into things" type="button" style="background-color:white; font-family: 'Monoton'; src: url('https://fonts.googleapis.com/css2?family=Monoton&display=swap'); color:black; width:200px; height:26px; text-shadow: white 0px 1px, purple 0px 2px, pink 0px 3px;" onclick="input.execute('game_stats_build 213121312138238238883288327777777')">⌬Health/BodyDms</button>
<br><button title="A Smasher w/speed and few dms" type="button" style="background-color:purple; font-family: 'Monoton'; src: url('https://fonts.googleapis.com/css2?family=Monoton&display=swap'); color:white; width:200px; height:26px; text-shadow: black 0px 1px, purple 0px 2px, pink 0px 3px;" onclick="input.execute('game_stats_build 7654765476547654765476547654128128128312812812812831281281283')">⌬SmasherSpeed</button>
<br><button title="A Smasher w/no speed and high dms" type="button" style="background-color:pink; font-family: 'Monoton'; src: url('https://fonts.googleapis.com/css2?family=Monoton&display=swap'); color:white; width:200px; height:26px; text-shadow: black 0px 1px, purple 0px 2px, pink 0px 3px;" onclick="input.execute('game_stats_build 7654765476547654765476547654888123123123123123123123123123123')">⌬Smasher/Dms</button>
<br><button title="Has high dms and no speed" type="button" style="background-color:white; font-family: 'Monoton'; src: url('https://fonts.googleapis.com/css2?family=Monoton&display=swap'); color:black; width:200px; height:26px; text-shadow: white 0px 1px, purple 0px 2px, pink 0px 3px;" onclick="input.execute('game_stats_build 456456456456456456456123123123123')">⌬Destroyer</button>
<br><button title="Fast bullets good for spraying tanks" type="button" style="background-color:purple; font-family: 'Monoton'; src: url('https://fonts.googleapis.com/css2?family=Monoton&display=swap'); color:white; width:200px; height:26px; text-shadow: black 0px 1px, purple 0px 2px, pink 0px 3px;" onclick="input.execute('game_stats_build 456745674567456745674567456722111')">⌬Dms/speed</button>
<br><button title="slow bullets and fast speed good for spraying tanks" type="button" style="background-color:pink; font-family: 'Monoton'; src: url('https://fonts.googleapis.com/css2?family=Monoton&display=swap'); color:white; width:200px; height:26px; text-shadow: black 0px 1px, purple 0px 2px, pink 0px 3px;" onclick="input.execute('game_stats_build 567856785678567856785678567822111')">⌬Dms/Health</button>
<br><button title="My favorite was to use Tri-angle class HAS NO SPEED" type="button" style="background-color:white; font-family: 'Monoton'; src: url('https://fonts.googleapis.com/css2?family=Monoton&display=swap'); color:black; width:200px; height:26px; text-shadow: white 0px 1px, purple 0px 2px, pink 0px 3px;" onclick="input.execute('game_stats_build 567567567567567567567123123123123')">⌬Tri-angle</button>
<br><button title="click here to Reset" type="button" style="background-color:purple; font-family: 'Monoton'; src: url('https://fonts.googleapis.com/css2?family=Monoton&display=swap'); color:white; width:200px; height:26px; text-shadow: black 0px 1px, purple 0px 2px, pink 0px 3px;" onclick="input.execute('game_stats_build 0')">⌬Reset</button>
</a>
</div>
</body>
</html>`
//-------------------------------------[TESTING IDEA AREA]----------------------------------------\\
})();