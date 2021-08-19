(this["webpackJsonpJohans-Resume-Website"]=this["webpackJsonpJohans-Resume-Website"]||[]).push([[0],{37:function(n,e,t){"use strict";t.r(e);var r,o,i,c,a,s,l,u,f,d,b,p,h,x,j,g,m,O,y,w,v,S,k,z,T=t(22),C=t.n(T),E=t(15),I=t(5),P=t(9),L=t(4),F=t(1),D=t(6),M=t(3),A=t(2),R={width:10,height:20},J={size:32,spacing:0},N=t(0),H=A.b.div(r||(r=Object(M.a)(["\n    width: ","px;\n    height: ","px;\n    position: relative;\n    transform-style: preserve-3d;\n    transform: translateX(","px) translateY(","px)\n        translateZ(","px);\n    transition: transform 1s;\n\n    ","\n"])),J.size,J.size,J.spacing/2,J.spacing/2,J.size,(function(n){return!n.transparent&&"\n        &::after {\n            content: '';\n            position: absolute;\n            width: ".concat(J.size,"px;\n            height: ").concat(J.size,"px;\n            background: rgba(0,0,0,.1);\n            box-shadow: 0 0 10px rgba(0,0,0,.1);\n            transform: translateZ(-").concat(J.size,"px);\n        }\n    ")})),U=A.b.div(o||(o=Object(M.a)(["\n    position: absolute;\n    width: ","px;\n    height: ","px;\n    background: ",";\n    line-height: ","px;\n    font-size: 40px;\n    font-weight: bold;\n    color: white;\n    text-align: center;\n    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1) inset;\n    transform: ",";\n"])),J.size-2*J.spacing,J.size-2*J.spacing,(function(n){var e=n.tetrominoType;return n.theme.tetrominos[e].color}),J.size,(function(n){var e=n.face;return"".concat(function(n){switch(n){case"right":return"rotateY(90deg)";case"back":return"rotateY(180deg)";case"left":return"rotateY(-90deg)";case"top":return"rotateX(90deg)";case"bottom":return"rotateX(-90deg)";default:case"front":return"rotateY(0deg)"}}(e)," translateZ(").concat(J.size/2-J.spacing,"px)")})),W=function(n){return 0===n.tetrominoType?Object(N.jsx)(H,{transparent:!0}):Object(N.jsxs)(H,{children:[Object(N.jsx)(U,{face:"front",tetrominoType:n.tetrominoType}),Object(N.jsx)(U,{face:"back",tetrominoType:n.tetrominoType}),Object(N.jsx)(U,{face:"right",tetrominoType:n.tetrominoType}),Object(N.jsx)(U,{face:"left",tetrominoType:n.tetrominoType}),Object(N.jsx)(U,{face:"top",tetrominoType:n.tetrominoType}),Object(N.jsx)(U,{face:"bottom",tetrominoType:n.tetrominoType})]})},Z=A.b.div(i||(i=Object(M.a)(["\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: ",";\n    padding: 20px;\n"])),(function(n){return n.theme.modal.color})),B=function(){return Object(N.jsxs)(Z,{children:["Keybindings:",Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),"Up = Rotate tetromino",Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),"Left = Move tetromino left one cell",Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),"Right = Move tetromino right one cell",Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),"Down = Move tetromino down one cell",Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),"PageDown or End = Move tetromino all the way down"]})},G=A.b.div(c||(c=Object(M.a)(["\n    width: ",";\n    height: ",";\n    display: flex;\n    flex-flow: column nowrap;\n    justify-content: flex-end;\n    align-items: flex-end;\n    background: ",";\n\n    ","\n\n    box-shadow: 0 0 0 1px "," inset;\n    border: "," solid ",";\n    border-radius: 8px;\n    position: relative;\n\n    "," {\n        box-shadow: none;\n        filter: ",";\n    }\n"])),(function(){return"".concat(R.width*J.size,"px")}),(function(){return"".concat(R.height*J.size,"px")}),(function(n){return n.theme.stage.background}),(function(n){var e=n.showInstructions,t=n.theme;return!e&&"\n        background-image: linear-gradient(".concat(t.stage.lines," 1px, transparent 1px),\n            linear-gradient(90deg, ").concat(t.stage.lines," 1px, transparent 1px);\n        background-size: ").concat(J.size,"px ").concat(J.size,"px,\n            ").concat(J.size,"px ").concat(J.size,"px;\n        background-position: -1px -1px, -1px -1px;\n    ")}),(function(n){return n.theme.stage.lines}),(function(n){return n.theme.main.borderWidth}),(function(n){return n.theme.main.borderColor}),H,(function(n){return n.paused?"blur(15px)":"none"})),X=A.b.div(a||(a=Object(M.a)(["\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: ",";\n    padding: 20px;\n    font-size: 40px;\n"])),(function(n){return n.theme.modal.color})),Y=A.b.div(s||(s=Object(M.a)(["\n    display: flex;\n    height: ","px;\n    width: 100%;\n"])),J.size),_=A.b.div(l||(l=Object(M.a)(["\n    position: absolute;\n    left: ",";\n    width: ",";\n    top: 0;\n    bottom: 0;\n    background: ",";\n"])),(function(n){var e=n.left,t=n.columnWidth;return"".concat(e*t,"px")}),(function(n){var e=n.size,t=n.columnWidth;return"".concat(e*t,"px")}),(function(n){return n.theme.stage.guide})),K=function(n){return Object(N.jsxs)(G,{showInstructions:n.showInstructions,paused:n.paused,children:[n.showInstructions&&Object(N.jsx)(B,{}),n.paused&&Object(N.jsx)(X,{children:"Paused"}),n.activeColumns.size>0&&Object(N.jsx)(_,Object(D.a)(Object(D.a)({},n.activeColumns),{},{columnWidth:J.size})),n.stage.map((function(n,e){return Object(N.jsx)(Y,{children:n.map((function(n,t){var r=Object(L.a)(n,1)[0];return Object(N.jsx)(W,{tetrominoType:r},e+t)}))},e)}))]})},q=function(){return Array.from(Array(R.height),(function(){return new Array(R.width).fill([0,"clear"])}))},V=function(n,e,t){for(var r=t.x,o=t.y,i=0;i<n.tetromino.length;i+=1)for(var c=0;c<n.tetromino[i].length;c+=1)if(0!==n.tetromino[i][c]&&(!e[i+n.pos.y+o]||!e[i+n.pos.y+o][c+n.pos.x+r]||"clear"!==e[i+n.pos.y+o][c+n.pos.x+r][1]))return!0},Q=[["?",0,"?"],[0,"?",0],["?",0,"?"]],$={0:{shape:[[0]],preview:[[0]]},I:{shape:[[0,"I",0,0],[0,"I",0,0],[0,"I",0,0],[0,"I",0,0]],preview:[["I"],["I"],["I"],["I"]]},J:{shape:[[0,"J",0],[0,"J",0],["J","J",0]],preview:[[0,"J"],[0,"J"],["J","J"]]},L:{shape:[[0,"L",0],[0,"L",0],[0,"L","L"]],preview:[["L",0],["L",0],["L","L"]]},O:{shape:[["O","O"],["O","O"]],preview:[["O","O"],["O","O"]]},S:{shape:[[0,"S","S"],["S","S",0],[0,0,0]],preview:[[0,"S","S"],["S","S",0]]},T:{shape:[[0,0,0],["T","T","T"],[0,"T",0]],preview:[["T","T","T"],[0,"T",0]]},Z:{shape:[["Z","Z",0],[0,"Z","Z"],[0,0,0]],preview:[["Z","Z",0],[0,"Z","Z"]]}},nn=function(){var n="IJLOSTZ",e=n[Math.floor(Math.random()*n.length)];return $[e]},en={pos:{x:0,y:0},tetromino:$[0].shape,collided:!1},tn=function(n,e){var t=Object(F.useState)(q()),r=Object(L.a)(t,2),o=r[0],i=r[1],c=Object(F.useState)(0),a=Object(L.a)(c,2),s=a[0],l=a[1],u=Object(F.useState)({left:0,size:0}),f=Object(L.a)(u,2),d=f[0],b=f[1];return Object(F.useEffect)((function(){l(0);var t=function(t){var r=t.map((function(n){return n.map((function(n){return"clear"===n[1]?[0,"clear"]:n}))})),o=n.tetromino.map((function(n){var e=n.map((function(n,e){return 0!==n?e+1:0})).filter((function(n){return n>0}));return e.length>0?[Math.min.apply(Math,Object(P.a)(e)),Math.max.apply(Math,Object(P.a)(e))]:[]})).filter((function(n){return n.length>0})).flat();return b({left:n.pos.x+(Math.min.apply(Math,Object(P.a)(o))-1),size:Math.max.apply(Math,Object(P.a)(o))-Math.min.apply(Math,Object(P.a)(o))+1}),n.tetromino.forEach((function(e,t){e.forEach((function(e,o){if(0!==e){var i=t+n.pos.y,c=o+n.pos.x;r[i][c]=[e,n.collided?"merged":"clear"]}}))})),n.collided?(e(),function(n){return n.reduce((function(e,t){return-1===t.findIndex((function(n){return 0===n[0]}))?(l((function(n){return n+1})),e.unshift(new Array(n[0].length).fill([0,"clear"])),e):(e.push(t),e)}),[])}(r)):r};i((function(n){return t(n)}))}),[n,e]),[o,i,s,d]},rn=function(n,e){var t=Object(F.useRef)((function(){}));Object(F.useEffect)((function(){t.current=n})),Object(F.useEffect)((function(){if(null!==e){var n=setInterval((function(){return t.current()}),e||0);return function(){return clearInterval(n)}}}),[e])},on=A.b.div(u||(u=Object(M.a)(["\n    background: ",";\n    border: "," solid ",";\n    color: ",";\n    font-size: ",";\n    font-family: 'Press Start 2P', cursive;\n    border-radius: 8px;\n    line-height: 45px;\n    margin-top: 20px;\n    padding: 0 20px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-flow: column;\n"])),(function(n){return n.theme.buttonsAndDisplays.background}),(function(n){return n.theme.main.borderWidth}),(function(n){return n.theme.main.borderColor}),(function(n){return n.theme.buttonsAndDisplays.color}),(function(n){return n.theme.main.fontSize})),cn=A.b.button(f||(f=Object(M.a)(["\n    background: ",";\n    border: "," solid ",";\n    color: ",";\n    font-size: ",";\n    display: flex;\n    flex-grow: 1;\n    justify-content: center;\n    align-items: center;\n    outline: none;\n    padding: 0 20px;\n    border-radius: 8px;\n    line-height: 50px;\n    font-family: inherit;\n\n    .custom-fill {\n        fill: ",";\n    }\n\n    &:hover {\n        cursor: pointer;\n        box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);\n    }\n"])),(function(n){return n.theme.buttonsAndDisplays.background}),(function(n){return n.theme.main.borderWidth}),(function(n){return n.theme.main.borderColor}),(function(n){return n.theme.buttonsAndDisplays.color}),(function(n){return n.theme.main.fontSize}),(function(n){return n.theme.buttonsAndDisplays.color})),an=A.b.div(d||(d=Object(M.a)(["\n    width: ",";\n    margin: ",";\n    display: flex;\n    flex-grow: ",";\n    flex-shrink: 0;\n    flex-direction: ",";\n    justify-content: ",";\n    align-items: ","; ;\n"])),(function(n){var e=n.width;return e||"row"}),(function(n){var e=n.margin;return e?e.join(" "):""}),(function(n){var e=n.grow;return e||0}),(function(n){var e=n.direction;return e||"row"}),(function(n){var e=n.justifyContent;return e||"center"}),(function(n){var e=n.alignItems;return e||"stretch"})),sn=A.b.div(b||(b=Object(M.a)(["\n    background: ",";\n    color: ",";\n    padding: 30px;\n    border-radius: 8px;\n"])),(function(n){return n.theme.modal.background}),(function(n){return n.theme.modal.color})),ln=A.b.div(p||(p=Object(M.a)(["\n    color: ",";\n    position: fixed;\n    display: flex;\n    width: 100%;\n    height: 100%;\n    justify-content: center;\n    align-items: center;\n    z-index: 99;\n    display: flex;\n    flex-flow: column wrap;\n    font-family: 'Press Start 2P', cursive;\n    background: ","; ;\n"])),(function(n){return n.theme.main.color}),(function(n){return n.theme.modal.overlay})),un=A.b.div(h||(h=Object(M.a)(["\n    margin-right: 20px;\n    display: flex;\n    flex-flow: column wrap;\n    justify-content: flex-start;\n    align-items: stretch;\n"]))),fn=A.b.div(x||(x=Object(M.a)(["\n    display: flex;\n    flex-flow: column wrap;\n"]))),dn=A.b.div(j||(j=Object(M.a)(["\n    display: none;\n\n    @media (max-width: ","px) {\n        display: flex;\n    }\n\n    position: fixed;\n    top: ",";\n    height: 50px;\n    width: 100%;\n    z-index: 98;\n    justify-content: center;\n    align-items: stretch;\n"])),J.size*R.width+300,(function(){return"".concat(R.height*J.size-50,"px")})),bn=A.b.button(g||(g=Object(M.a)(["\n    display: flex;\n    outline: none;\n    border: none;\n    padding: 0;\n    flex-grow: 1;\n    justify-content: center;\n    background: rgba(255, 255, 255, 0.5);\n    padding: 20px;\n"]))),pn=A.b.div(m||(m=Object(M.a)(["\n    background: ",";\n    width: 100%;\n    display: flex;\n    flex-grow: 1;\n    justify-content: center;\n    align-items: center;\n    flex-flow: row nowrap;\n"])),(function(n){return n.theme.main.background})),hn=A.b.div(O||(O=Object(M.a)(["\n    outline: none;\n    display: flex;\n    flex-grow: 1;\n    flex-flow: row nowrap;\n    justify-content: center;\n    align-items: flex-start;\n    transform-style: preserve-3d;\n    transform: rotateX(",") rotateY(0deg) translateZ(0px);\n    filter: ",";\n    font-family: 'Press Start 2P', cursive;\n\n    // desktop size\n    @media (min-width: ","px) {\n        flex-flow: row nowrap;\n\n        "," {\n            width: 300px;\n        }\n    }\n\n    // mobile size\n    @media (max-width: ","px) {\n        flex-flow: column nowrap;\n        justify-content: center;\n        align-items: center;\n        padding-top: 10px;\n\n        "," {\n            font-size: 14px;\n            margin-top: 0;\n            padding: 8px;\n            line-height: 14px;\n            display: block;\n            border: 0;\n        }\n\n        "," {\n            margin: 0;\n            padding: 20px;\n            order: 2;\n\n            "," {\n                border: "," solid ",";\n                border-radius: 8px;\n                flex-flow: row wrap;\n                margin: 10px 0;\n                background: #fff;\n            }\n        }\n    }\n"])),(function(n){var e=n.tilt;return"".concat(e,"deg")}),(function(n){return n.gameOver?"blur(5px)":"none"}),J.size*R.width+300,un,J.size*R.width+300,on,un,fn,(function(n){return n.theme.main.borderWidth}),(function(n){return n.theme.main.borderColor})),xn=A.b.input(y||(y=Object(M.a)(["\n    width: 100%;\n"]))),jn=A.b.input(w||(w=Object(M.a)(["\n    background: ",";\n    border: "," solid ",";\n    color: ",";\n    font-size: ",";\n    display: flex;\n    flex-grow: 1;\n    justify-content: center;\n    align-items: center;\n    outline: none;\n    padding: 0 20px;\n    border-radius: 8px;\n    line-height: 50px;\n    font-family: inherit;\n\n    &:hover {\n        box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);\n    }\n"])),(function(n){return n.theme.buttonsAndDisplays.background}),(function(n){return n.theme.main.borderWidth}),(function(n){return n.theme.main.borderColor}),(function(n){return n.theme.buttonsAndDisplays.color}),(function(n){return n.theme.main.fontSize})),gn="1vw",mn=A.b.div(v||(v=Object(M.a)(["\n    position: fixed;\n    display: flex;\n    width: 100%;\n    height: 100%;\n    justify-content: center;\n    align-items: center;\n    z-index: 99;\n    color: #000;\n    display: flex;\n    flex-flow: column wrap;\n    font-family: 'Press Start 2P', cursive;\n    font-size: 20px;\n\n    p {\n        margin: 30px 0;\n        font-size: 60px;\n        font-size: 8vw;\n        text-shadow: "," "," 0 #fff, "," 0 0 #fff, 0 "," 0 #fff, -"," "," 0 #fff, 00px 0 #fff,\n            0-"," 0 #fff, "," -"," 0 #fff, -"," -"," 0 #fff, 0 0 30px #000;\n    }\n\n    "," {\n        flex-grow: 0;\n    }\n"])),gn,gn,gn,gn,gn,gn,gn,gn,gn,gn,gn,cn),On=function(n){var e=Object(F.useState)("XXX"),t=Object(L.a)(e,2),r=t[0],o=t[1];return Object(N.jsxs)(mn,{children:[Object(N.jsx)("p",{children:"Game Over"}),Object(N.jsx)("p",{children:n.score}),Object(N.jsxs)(sn,{children:[Object(N.jsxs)(an,{margin:[0,0,"30px",0],alignItems:"center",children:["Your name:",Object(N.jsx)(jn,{value:r,onChange:function(n){o(n.target.value.substring(0,5).toUpperCase())},style:{width:"60px"}})]}),Object(N.jsx)(an,{children:Object(N.jsx)(cn,{onClick:function(){n.onSaveHighscore({name:r,score:n.score,date:Date.now().toString()}),n.onClose()},children:"Save & restart"})})]})]})},yn=function(n){return Object(N.jsxs)(dn,{children:[Object(N.jsx)(bn,{onClick:function(e){n.onPushLeft(),e.preventDefault()},children:"Left"}),Object(N.jsx)(bn,{onClick:function(e){n.onPushRotate(),e.preventDefault()},children:"Rotate"}),Object(N.jsx)(bn,{onClick:function(e){n.onPushDown(),e.preventDefault()},children:"Down"}),Object(N.jsx)(bn,{onClick:function(e){n.onPushRight(),e.preventDefault()},children:"Right"})]})},wn=A.b.div(S||(S=Object(M.a)(["\n    border: "," solid ",";\n    border-radius: 8px;\n    display: flex;\n    flex-flow: row nowrap;\n    align-items: stretch;\n\n    input {\n        display: none;\n    }\n"])),(function(n){return n.theme.main.borderWidth}),(function(n){return n.theme.main.borderColor})),vn=A.b.label(k||(k=Object(M.a)(["\n    display: flex;\n    flex-grow: 1;\n    justify-content: center;\n    padding: 20px;\n    color: ",";\n"])),(function(n){var e=n.checked,t=n.theme;return e?"#F00":t.main.color})),Sn=function(n){return Object(N.jsx)(wn,{children:n.options.map((function(e){return Object(N.jsxs)(vn,{checked:n.selected===e.value,children:[Object(N.jsx)("input",{type:"radio",name:n.name,value:e.value,checked:n.selected===e.value,onChange:function(e){var t=e.target;n.onChange(t.value)}}),e.label]})}))})},kn=A.b.label(z||(z=Object(M.a)(["\n    display: flex;\n    outline: none;\n    line-height: 45px;\n    font-size: 20px;\n    margin-bottom: 12px;\n    margin-top: ",";\n    font-family: inherit;\n"])),(function(n){return n.mt?"30px":"0"})),zn=function(n){return Object(N.jsx)(ln,{children:Object(N.jsxs)(sn,{children:[Object(N.jsx)(kn,{children:"Tilt:"}),Object(N.jsx)(xn,{type:"range",name:"volume",value:n.localSettings.tilt,min:"0",max:"65",onChange:function(e){var t=e.target;n.onLocalSettingsChange(Object(D.a)(Object(D.a)({},n.localSettings),{},{tilt:parseInt(t.value)}))}}),Object(N.jsx)(kn,{mt:!0,children:"Theme:"}),Object(N.jsx)(Sn,{name:"theme",options:[{value:"light",label:"Light"},{value:"dark",label:"Dark"}],selected:n.localSettings.theme,onChange:function(e){n.onLocalSettingsChange(Object(D.a)(Object(D.a)({},n.localSettings),{},{theme:e}))}}),Object(N.jsx)("div",{style:{marginTop:"20px",display:"flex",justifyContent:"center"},children:Object(N.jsx)(cn,{onClick:function(){n.onCloseSettings()},children:"Close"})})]})})};function Tn(){return(Tn=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}function Cn(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var En=F.createElement("g",null,F.createElement("path",{className:"custom-fill",d:"M57,11h-9.5C45.9,5.7,40.3,2.8,35,4.5c-3.1,1-5.6,3.4-6.5,6.5H7c-1.7,0-3,1.3-3,3s1.3,3,3,3h21.5c1.7,5.3,7.3,8.2,12.5,6.5   c3.1-1,5.6-3.4,6.5-6.5H57c1.7,0,3-1.3,3-3S58.7,11,57,11z M38,18c-2.2,0-4-1.8-4-4s1.8-4,4-4s4,1.8,4,4S40.2,18,38,18z"}),F.createElement("path",{className:"custom-fill",d:"M57,29H26.5c-1.7-5.3-7.3-8.2-12.5-6.5c-3.1,1-5.6,3.4-6.5,6.5H7c-1.7,0-3,1.3-3,3c0,1.7,1.3,3,3,3h0.5   c1.7,5.3,7.3,8.2,12.5,6.5c3.1-1,5.6-3.4,6.5-6.5H57c1.7,0,3-1.3,3-3C60,30.3,58.7,29,57,29z M17,36c-2.2,0-4-1.8-4-4s1.8-4,4-4   s4,1.8,4,4S19.2,36,17,36z"}),F.createElement("path",{className:"custom-fill",d:"M57,47h-1.5c-1.7-5.3-7.3-8.2-12.5-6.5c-3.1,1-5.6,3.4-6.5,6.5H7c-1.7,0-3,1.3-3,3s1.3,3,3,3h29.5   c1.7,5.3,7.3,8.2,12.5,6.5c3.1-1,5.6-3.4,6.5-6.5H57c1.7,0,3-1.3,3-3S58.7,47,57,47z M46,54c-2.2,0-4-1.8-4-4s1.8-4,4-4s4,1.8,4,4   S48.2,54,46,54z"}));function In(n,e){var t=n.title,r=n.titleId,o=Cn(n,["title","titleId"]);return F.createElement("svg",Tn({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 64 64",style:{enableBackground:"new 0 0 64 64"},xmlSpace:"preserve",ref:e,"aria-labelledby":r},o),t?F.createElement("title",{id:r},t):null,En)}var Pn,Ln,Fn,Dn,Mn,An,Rn,Jn,Nn,Hn=F.forwardRef(In),Un=(t.p,{tetrominos:{0:{color:"#000"},I:{color:"#9cdaff"},J:{color:"#c568a5"},L:{color:"#ffd265"},O:{color:"#bcff7c"},S:{color:"#cd94ff"},T:{color:"#8aedeb"},Z:{color:"#dea6ec"},"?":{color:"#ece7a6"}},main:{background:"linear-gradient(to top, #ffefba, #ffffff)",color:"#000",borderColor:"#000",borderWidth:"1px",fontSize:"20px"},modal:{overlay:"rgba(0, 0, 0, 0.6)",background:"#FFF",color:"#000"},stage:{background:"#FFF",lines:"#BBB",guide:"rgba(0,0,0,0.05)"},buttonsAndDisplays:{background:"#FFF",color:"#000"}}),Wn={tetrominos:{0:{color:"#000"},I:{color:"#9cdaff"},J:{color:"#c568a5"},L:{color:"#ffd265"},O:{color:"#bcff7c"},S:{color:"#cd94ff"},T:{color:"#8aedeb"},Z:{color:"#dea6ec"},"?":{color:"#ece7a6"}},main:{background:"linear-gradient(to bottom, #0f2027, #203a43, #2c5364)",color:"#FFF",borderColor:"#FFF",borderWidth:"1px",fontSize:"20px"},modal:{overlay:"rgba(255, 255, 255, 0.6)",background:"#000",color:"#FFF"},stage:{background:"#000",lines:"#777",guide:"rgba(255,255,255,0.2)"},buttonsAndDisplays:{background:"#0f2027",color:"#FFF"}},Zn=A.b.div(Pn||(Pn=Object(M.a)(["\n    display: flex;\n    height: ","px;\n    width: 100%;\n"])),J.size),Bn=function(n){return Object(N.jsx)(an,{direction:"column",children:n.shape.map((function(n,e){return Object(N.jsx)(Zn,{children:n.map((function(n,e){return Object(N.jsx)(W,{tetrominoType:n},e)}))},e)}))})},Gn={name:"-----",score:0,date:"0"},Xn=function(n){var e=n.highscores.sort((function(n,e){return n.score>e.score?-1:e.score>n.score?1:0})).slice(0,3),t=[].concat(Object(P.a)(e),[Gn,Gn,Gn]);return Object(N.jsx)(an,{direction:"column",grow:1,width:"100%",children:t.slice(0,3).map((function(n){return Object(N.jsxs)(an,{grow:1,justifyContent:"space-between",children:[Object(N.jsx)(an,{children:n.name.toUpperCase()}),Object(N.jsx)(an,{children:n.score})]})}))})},Yn=function(){var n=Object(F.useState)({tilt:0,theme:"dark"}),e=Object(L.a)(n,2),t=e[0],r=e[1],o=Object(F.useState)(null),i=Object(L.a)(o,2),c=i[0],a=i[1],s=Object(F.useState)(!1),l=Object(L.a)(s,2),u=l[0],f=l[1],d=Object(F.useState)(!1),b=Object(L.a)(d,2),p=b[0],h=b[1],x=Object(F.useState)(!1),j=Object(L.a)(x,2),g=j[0],m=j[1],O=Object(F.useState)(!1),y=Object(L.a)(O,2),w=y[0],v=y[1],S=function(){var n=Object(F.useState)(en),e=Object(L.a)(n,2),t=e[0],r=e[1],o=Object(F.useState)(nn()),i=Object(L.a)(o,2),c=i[0],a=i[1],s=function(n,e){var t=n.map((function(e,t){return n.map((function(n){return n[t]}))}));return e>0?t.map((function(n){return n.reverse()})):t.reverse()},l=Object(F.useCallback)((function(){r({pos:{x:R.width/2-2,y:0},tetromino:c.shape,collided:!1}),a(nn())}),[c]);return{player:t,updatePlayerPosition:function(n){var e=n.x,t=n.y,o=n.collided;r((function(n){return Object(D.a)(Object(D.a)({},n),{},{pos:{x:n.pos.x+=e,y:n.pos.y+=t},collided:o})}))},resetPlayer:l,playerRotate:function(n,e){var o=JSON.parse(JSON.stringify(t));o.tetromino=s(o.tetromino,e);for(var i=o.pos.x,c=1;V(o,n,{x:0,y:0});)if(o.pos.x+=c,(c=-(c+(c>0?1:-1)))>o.tetromino[0].length)return s(o.tetromino,-e),void(o.pos.x=i);r(o)},nextTetromino:c}}(),k=S.player,z=S.updatePlayerPosition,T=S.resetPlayer,C=S.playerRotate,E=S.nextTetromino,I=tn(k,T),M=Object(L.a)(I,4),J=M[0],H=M[1],U=M[2],W=M[3],Z=function(n){var e=Object(F.useState)(0),t=Object(L.a)(e,2),r=t[0],o=t[1],i=Object(F.useState)(0),c=Object(L.a)(i,2),a=c[0],s=c[1],l=Object(F.useState)(0),u=Object(L.a)(l,2),f=u[0],d=u[1],b=[40,100,300,1200],p=Object(F.useCallback)((function(){n>0&&(o((function(e){return e+b[n-1]*(f+1)})),s((function(e){return e+n})))}),[f,b,n]);return Object(F.useEffect)((function(){p()}),[p,n,r]),[r,o,a,s,f,d]}(U),B=Object(L.a)(Z,6),G=B[0],X=B[1],Y=B[2],_=B[3],$=B[4],sn=B[5],ln=Object(F.useState)([]),dn=Object(L.a)(ln,2),bn=dn[0],xn=dn[1],jn=Object(F.useRef)(null),gn=function(n){vn("UNPAUSE"),V(k,J,{x:n,y:0})||z({x:n,y:0,collided:!1})},mn=function(){H(q()),a(1e3),T(),X(0),sn(0),_(0),h(!1),v(!0)},wn=function(n){Y>10*($+1)&&(sn((function(n){return n+1})),a(1e3/($+1)+200));for(var e=0,t=1;t<=n&&!V(k,J,{x:0,y:t});t+=1)e=t;e===n?z({x:0,y:n,collided:!1}):(k.pos.y<1&&e<1&&(v(!1),h(!0),a(null)),z({x:0,y:e,collided:!0}))},vn=function(n){switch(n){case"LEFT":gn(-1);break;case"RIGHT":gn(1);break;case"DOWN":a(null),wn(1);break;case"FULLDOWN":a(null),wn(R.height);break;case"ROTATE":C(J,1);break;case"TOGGLE_PAUSE":g?(m(!1),a(1e3/($+1))):(m(!0),a(null));break;case"UNPAUSE":m(!1),a(1e3/($+1))}};return rn((function(){wn(1)}),c),Object(F.useEffect)((function(){var n=localStorage.getItem("TetrisSettings"),e=localStorage.getItem("TetrisHighscores");n&&r(JSON.parse(n)),e&&xn(JSON.parse(e))}),[xn]),Object(N.jsx)(A.a,{theme:"light"===t.theme?Un:Wn,children:Object(N.jsxs)(pn,{children:[u&&Object(N.jsx)(zn,{localSettings:t,onLocalSettingsChange:function(n){r(n),localStorage.setItem("TetrisSettings",JSON.stringify(n))},onCloseSettings:function(){f(!1)}}),p&&Object(N.jsx)(On,{score:G,onClose:function(){var n;mn(),null===jn||void 0===jn||null===(n=jn.current)||void 0===n||n.focus()},onSaveHighscore:function(n){var e=[].concat(Object(P.a)(bn),[n]);xn(e),localStorage.setItem("TetrisHighscores",JSON.stringify(e))}}),Object(N.jsx)(yn,{onPushLeft:function(){vn("LEFT")},onPushRotate:function(){vn("ROTATE")},onPushRight:function(){vn("RIGHT")},onPushDown:function(){vn("DOWN"),vn("UNPAUSE")}}),Object(N.jsxs)(hn,{ref:jn,tilt:t.tilt,gameOver:p,role:"button",tabIndex:0,onKeyUp:function(n){var e=n.keyCode;p||40!==e&&34!==e&&35!==e||vn("UNPAUSE")},onKeyDown:function(n){!function(n){var e=!0;if(!p)switch(n.keyCode){case 37:vn("LEFT");break;case 39:vn("RIGHT");break;case 40:vn("DOWN");break;case 38:vn("ROTATE");break;case 80:vn("TOGGLE_PAUSE");break;case 34:case 35:vn("FULLDOWN");break;default:console.log("Unused keystroke: ".concat(n.keyCode)),e=!1}e&&n.preventDefault()}(n)},children:[Object(N.jsxs)(un,{children:[Object(N.jsxs)(an,{children:[w?Object(N.jsx)(cn,{onClick:function(){vn("TOGGLE_PAUSE")},children:g?"Continue":"Pause"}):Object(N.jsx)(cn,{onClick:function(){mn()},children:"Start"}),Object(N.jsx)(cn,{onClick:function(){g||vn("TOGGLE_PAUSE"),f(!0)},style:{marginLeft:"10px"},children:Object(N.jsx)(Hn,{style:{height:"30px"}})})]}),Object(N.jsxs)(fn,{children:[Object(N.jsxs)(on,{children:["Score: ",G]}),Object(N.jsxs)(on,{children:["Rows: ",Y]}),Object(N.jsxs)(on,{children:["Level: ",$]}),Object(N.jsxs)(on,{children:[Object(N.jsx)(an,{children:"Scores:"}),Object(N.jsx)(Xn,{highscores:bn})]}),Object(N.jsxs)(on,{children:[Object(N.jsx)(an,{children:"Next:"}),Object(N.jsx)(Bn,{shape:g?Q:E.preview})]})]})]}),Object(N.jsx)(K,{paused:g,stage:J,showInstructions:!w,activeColumns:W})]})]})})},_n={royal:["to bottom","#141e30","#243b55"],greenToBlack:["to bottom","#001510","#00bf8f"],netflix:["to bottom","#8E0E00","#1F1C18"],megatron:["to bottom","#c6ffdd","#fbd786","#f7797d"]},Kn=A.b.div(Ln||(Ln=Object(M.a)(["\n    display: flex;\n    justify-content: space-between;\n    flex-flow: row wrap;\n"]))),qn=A.b.div(Fn||(Fn=Object(M.a)(["\n    display: flex;\n    background: linear-gradient(",");\n    height: 100px;\n    width: 46%;\n    margin-bottom: 20px;\n    cursor: pointer;\n    border: 1px solid #000;\n    border-radius: 4px;\n"])),(function(n){return n.gradient.join(", ")})),Vn=A.b.div(Dn||(Dn=Object(M.a)(["\n    display: flex;\n    background: linear-gradient(",");\n    flex-direction: column;\n    flex-grow: 1;\n    width: 100%;\n    justify-content: center;\n    align-items: center;\n    font-family: 'Asap', sans-serif;\n    color: #fff;\n    line-height: 1.5em;\n\n    > p {\n        max-width: 540px;\n        padding: 20px;\n    }\n\n    a {\n        color: inherit;\n\n        strong {\n            font-size: 130%;\n        }\n    }\n"])),(function(n){var e=n.selectedBackground;return _n[e].join(", ")})),Qn=A.b.button(Mn||(Mn=Object(M.a)(["\n    display: flex;\n    outline: none;\n    border: none;\n    padding: 0;\n    justify-content: center;\n    padding: 12px;\n    border-radius: 4px;\n    cursor: pointer;\n\n    box-shadow: 0 0 0 1px #fff inset;\n    background: rgba(255, 255, 255, 0.1);\n    fill: #fff;\n    color: #fff;\n\n    ","\n"])),(function(n){return n.dark&&"\n        box-shadow: 0 0 0 1px #000 inset;\n        background: rgba(0, 0, 0, 0.1);\n        fill: #000;\n        color: #000;\n    "})),$n=A.b.nav(An||(An=Object(M.a)(["\n    display: flex;\n    flex-flow: row wrap;\n    justify-content: space-between;\n    align-items: stretch;\n    max-width: 100%;\n    width: 580px;\n    box-sizing: content-box;\n\n    a {\n        box-sizing: border-box;\n        color: inherit;\n        display: flex;\n        flex-grow: 1;\n        flex-flow: column;\n        box-shadow: 0 0 0 1px #fff inset;\n        width: calc(50% - 40px);\n        min-width: 180px;\n        margin: 20px;\n        padding: 20px;\n        text-decoration: none;\n        border-radius: 4px;\n        background: rgba(255, 255, 255, 0.1);\n\n        &:hover {\n            background: rgba(255, 255, 255, 0.15);\n        }\n    }\n\n    p {\n        margin-bottom: 0;\n    }\n"]))),ne=Object(A.b)(E.b)(Rn||(Rn=Object(M.a)(["\n    opacity: ",";\n"])),(function(n){return n.disabled?".3":"1"})),ee=A.b.div(Jn||(Jn=Object(M.a)(["\n    background: #fff;\n    color: #000;\n    padding: 30px;\n    border-radius: 4px;\n    width: 300px;\n    max-width: 100%;\n    border: 1px solid #000;\n"]))),te=A.b.div(Nn||(Nn=Object(M.a)(["\n    color: #000;\n    position: fixed;\n    display: flex;\n    width: 100%;\n    height: 100%;\n    justify-content: center;\n    align-items: center;\n    z-index: 99;\n    display: flex;\n    flex-flow: column wrap;\n    font-family: 'Press Start 2P', cursive;\n    background: rgba(0, 0, 0, 0.6);\n"]))),re=function(){return Object(N.jsxs)($n,{children:[Object(N.jsxs)(ne,{to:"/tetris",children:[Object(N.jsx)("strong",{children:"Tetris"}),Object(N.jsx)("p",{children:"This project uses: React, Custom hooks, Typescript, Styled Components, 3D CSS, Theming & LocalStorage"})]}),Object(N.jsxs)(ne,{to:"/",disabled:!0,children:[Object(N.jsx)("strong",{children:"Breakout (soon...)"}),Object(N.jsx)("p",{children:"This project uses: React, Custom hooks, RequestAnimationFrame, Theming, Styled Components, etc."})]})]})};function oe(){return(oe=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}function ie(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var ce=F.createElement("g",null,F.createElement("path",{className:"custom-fill",d:"M57,11h-9.5C45.9,5.7,40.3,2.8,35,4.5c-3.1,1-5.6,3.4-6.5,6.5H7c-1.7,0-3,1.3-3,3s1.3,3,3,3h21.5c1.7,5.3,7.3,8.2,12.5,6.5   c3.1-1,5.6-3.4,6.5-6.5H57c1.7,0,3-1.3,3-3S58.7,11,57,11z M38,18c-2.2,0-4-1.8-4-4s1.8-4,4-4s4,1.8,4,4S40.2,18,38,18z"}),F.createElement("path",{className:"custom-fill",d:"M57,29H26.5c-1.7-5.3-7.3-8.2-12.5-6.5c-3.1,1-5.6,3.4-6.5,6.5H7c-1.7,0-3,1.3-3,3c0,1.7,1.3,3,3,3h0.5   c1.7,5.3,7.3,8.2,12.5,6.5c3.1-1,5.6-3.4,6.5-6.5H57c1.7,0,3-1.3,3-3C60,30.3,58.7,29,57,29z M17,36c-2.2,0-4-1.8-4-4s1.8-4,4-4   s4,1.8,4,4S19.2,36,17,36z"}),F.createElement("path",{className:"custom-fill",d:"M57,47h-1.5c-1.7-5.3-7.3-8.2-12.5-6.5c-3.1,1-5.6,3.4-6.5,6.5H7c-1.7,0-3,1.3-3,3s1.3,3,3,3h29.5   c1.7,5.3,7.3,8.2,12.5,6.5c3.1-1,5.6-3.4,6.5-6.5H57c1.7,0,3-1.3,3-3S58.7,47,57,47z M46,54c-2.2,0-4-1.8-4-4s1.8-4,4-4s4,1.8,4,4   S48.2,54,46,54z"}));function ae(n,e){var t=n.title,r=n.titleId,o=ie(n,["title","titleId"]);return F.createElement("svg",oe({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 64 64",style:{enableBackground:"new 0 0 64 64"},xmlSpace:"preserve",ref:e,"aria-labelledby":r},o),t?F.createElement("title",{id:r},t):null,ce)}var se=F.forwardRef(ae),le=(t.p,function(n){return Object(N.jsx)(te,{children:Object(N.jsxs)(ee,{children:[Object(N.jsx)(Kn,{children:Object.entries(_n).map((function(e){var t=Object(L.a)(e,2),r=t[0],o=t[1];return Object(N.jsx)(qn,{gradient:o,onClick:function(){n.onLocalSettingsChange(Object(D.a)(Object(D.a)({},n.localSettings),{},{selectedBackgroundGradient:r}))}},r)}))}),Object(N.jsx)("div",{style:{marginTop:"20px",display:"flex",justifyContent:"center"},children:Object(N.jsx)(Qn,{dark:!0,onClick:function(){n.onCloseSettings()},children:"Close"})})]})})}),ue=function(){var n=Object(F.useState)(!1),e=Object(L.a)(n,2),t=e[0],r=e[1],o=Object(F.useState)({selectedBackgroundGradient:"royal"}),i=Object(L.a)(o,2),c=i[0],a=i[1];return Object(F.useEffect)((function(){var n=localStorage.getItem("HomepageSettings");n&&a(JSON.parse(n))}),[]),Object(N.jsxs)(Vn,{selectedBackground:c.selectedBackgroundGradient,children:[t&&Object(N.jsx)(le,{localSettings:c,onLocalSettingsChange:function(n){a(n),console.log(n),localStorage.setItem("HomepageSettings",JSON.stringify(n))},onCloseSettings:function(){r(!1)}}),Object(N.jsx)("h1",{children:"Hello World!"}),Object(N.jsxs)("p",{children:["This is my personal website and playground. I am Johan van Tongeren, living in The Netherlands and working as a frontend developer and (UX) designer for"," ",Object(N.jsxs)("a",{href:"https://www.linkedin.com/in/johan-van-tongeren-a963b316b",children:[(new Date).getFullYear()-2004," years"]}),". I also ",Object(N.jsx)("a",{href:"https://www.instagram.com/bad_decision_works",children:"love making stuff"}),". This evolved in"," ",Object(N.jsx)("a",{href:"https://www.baddecision.works",children:"a webshop"})," for custom Volvo parts in 2019."]}),Object(N.jsx)(Qn,{onClick:function(){r(!0)},style:{position:"fixed",bottom:"20px",right:"20px"},children:Object(N.jsx)(se,{style:{height:"20px"}})}),Object(N.jsx)(re,{})]})},fe=function(){return Object(N.jsx)(E.a,{children:Object(N.jsxs)(I.c,{children:[Object(N.jsx)(I.a,{path:"/breakout"}),Object(N.jsx)(I.a,{path:"/tetris",children:Object(N.jsx)(Yn,{})}),Object(N.jsx)(I.a,{path:"/",children:Object(N.jsx)(ue,{})})]})})};C.a.render(Object(N.jsx)(fe,{}),document.getElementById("app"))}},[[37,1,2]]]);
//# sourceMappingURL=main.2c3f8670.chunk.js.map