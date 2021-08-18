(this["webpackJsonpJohans-Resume-Website"]=this["webpackJsonpJohans-Resume-Website"]||[]).push([[0],{24:function(n,e,t){"use strict";t.r(e);var r,o,i,c,a,s,l,u,f,d,b,p,h,x,j,m,g,O,y,v,w,S,k,z,T=t(13),C=t.n(T),P=t(6),I=t(4),E=t(1),L=t(5),D=t(3),F=t(2),A={width:10,height:20},J={size:32,spacing:0},M=t(0),R=F.b.div(r||(r=Object(D.a)(["\n    width: ","px;\n    height: ","px;\n    position: relative;\n    transform-style: preserve-3d;\n    transform: translateX(","px) translateY(","px)\n        translateZ(","px);\n    transition: transform 1s;\n\n    ","\n"])),J.size,J.size,J.spacing/2,J.spacing/2,J.size,(function(n){return!n.transparent&&"\n        &::after {\n            content: '';\n            position: absolute;\n            width: ".concat(J.size,"px;\n            height: ").concat(J.size,"px;\n            background: rgba(0,0,0,.1);\n            box-shadow: 0 0 10px rgba(0,0,0,.1);\n            transform: translateZ(-").concat(J.size,"px);\n        }\n    ")})),N=F.b.div(o||(o=Object(D.a)(["\n    position: absolute;\n    width: ","px;\n    height: ","px;\n    background: ",";\n    line-height: ","px;\n    font-size: 40px;\n    font-weight: bold;\n    color: white;\n    text-align: center;\n    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1) inset;\n    transform: ",";\n"])),J.size-2*J.spacing,J.size-2*J.spacing,(function(n){var e=n.tetrominoType;return n.theme.tetrominos[e].color}),J.size,(function(n){var e=n.face;return"".concat(function(n){switch(n){case"right":return"rotateY(90deg)";case"back":return"rotateY(180deg)";case"left":return"rotateY(-90deg)";case"top":return"rotateX(90deg)";case"bottom":return"rotateX(-90deg)";default:case"front":return"rotateY(0deg)"}}(e)," translateZ(").concat(J.size/2-J.spacing,"px)")})),U=function(n){return 0===n.tetrominoType?Object(M.jsx)(R,{transparent:!0}):Object(M.jsxs)(R,{children:[Object(M.jsx)(N,{face:"front",tetrominoType:n.tetrominoType}),Object(M.jsx)(N,{face:"back",tetrominoType:n.tetrominoType}),Object(M.jsx)(N,{face:"right",tetrominoType:n.tetrominoType}),Object(M.jsx)(N,{face:"left",tetrominoType:n.tetrominoType}),Object(M.jsx)(N,{face:"top",tetrominoType:n.tetrominoType}),Object(M.jsx)(N,{face:"bottom",tetrominoType:n.tetrominoType})]})},W=F.b.div(i||(i=Object(D.a)(["\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: ",";\n    padding: 20px;\n"])),(function(n){return n.theme.modal.color})),Z=function(){return Object(M.jsxs)(W,{children:["Keybindings:",Object(M.jsx)("br",{}),Object(M.jsx)("br",{}),"Up = Rotate tetromino",Object(M.jsx)("br",{}),Object(M.jsx)("br",{}),"Left = Move tetromino left one cell",Object(M.jsx)("br",{}),Object(M.jsx)("br",{}),"Right = Move tetromino right one cell",Object(M.jsx)("br",{}),Object(M.jsx)("br",{}),"Down = Move tetromino down one cell",Object(M.jsx)("br",{}),Object(M.jsx)("br",{}),"PageDown or End = Move tetromino all the way down"]})},H=F.b.div(c||(c=Object(D.a)(["\n    width: ",";\n    height: ",";\n    display: flex;\n    flex-flow: column nowrap;\n    justify-content: flex-end;\n    align-items: flex-end;\n    background: ",";\n\n    ","\n\n    box-shadow: 0 0 0 1px "," inset;\n    border: "," solid ",";\n    border-radius: 8px;\n    position: relative;\n\n    "," {\n        box-shadow: none;\n        filter: ",";\n    }\n"])),(function(){return"".concat(A.width*J.size,"px")}),(function(){return"".concat(A.height*J.size,"px")}),(function(n){return n.theme.stage.background}),(function(n){var e=n.showInstructions,t=n.theme;return!e&&"\n        background-image: linear-gradient(".concat(t.stage.lines," 1px, transparent 1px),\n            linear-gradient(90deg, ").concat(t.stage.lines," 1px, transparent 1px);\n        background-size: ").concat(J.size,"px ").concat(J.size,"px,\n            ").concat(J.size,"px ").concat(J.size,"px;\n        background-position: -1px -1px, -1px -1px;\n    ")}),(function(n){return n.theme.stage.lines}),(function(n){return n.theme.main.borderWidth}),(function(n){return n.theme.main.borderColor}),R,(function(n){return n.paused?"blur(15px)":"none"})),G=F.b.div(a||(a=Object(D.a)(["\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: ",";\n    padding: 20px;\n    font-size: 40px;\n"])),(function(n){return n.theme.modal.color})),X=F.b.div(s||(s=Object(D.a)(["\n    display: flex;\n    height: ","px;\n    width: 100%;\n"])),J.size),Y=F.b.div(l||(l=Object(D.a)(["\n    position: absolute;\n    left: ",";\n    width: ",";\n    top: 0;\n    bottom: 0;\n    background: ",";\n"])),(function(n){var e=n.left,t=n.columnWidth;return"".concat(e*t,"px")}),(function(n){var e=n.size,t=n.columnWidth;return"".concat(e*t,"px")}),(function(n){return n.theme.stage.guide})),B=function(n){return Object(M.jsxs)(H,{showInstructions:n.showInstructions,paused:n.paused,children:[n.showInstructions&&Object(M.jsx)(Z,{}),n.paused&&Object(M.jsx)(G,{children:"Paused"}),n.activeColumns.size>0&&Object(M.jsx)(Y,Object(L.a)(Object(L.a)({},n.activeColumns),{},{columnWidth:J.size})),n.stage.map((function(n,e){return Object(M.jsx)(X,{children:n.map((function(n,t){var r=Object(I.a)(n,1)[0];return Object(M.jsx)(U,{tetrominoType:r},e+t)}))},e)}))]})},_=function(){return Array.from(Array(A.height),(function(){return new Array(A.width).fill([0,"clear"])}))},K=function(n,e,t){for(var r=t.x,o=t.y,i=0;i<n.tetromino.length;i+=1)for(var c=0;c<n.tetromino[i].length;c+=1)if(0!==n.tetromino[i][c]&&(!e[i+n.pos.y+o]||!e[i+n.pos.y+o][c+n.pos.x+r]||"clear"!==e[i+n.pos.y+o][c+n.pos.x+r][1]))return!0},q=[[0,"?",0],["?",0,"?"],[0,0,"?"],[0,"?",0],[0,0,0],[0,"?",0]],Q={0:{shape:[[0]],preview:[[0]]},I:{shape:[[0,"I",0,0],[0,"I",0,0],[0,"I",0,0],[0,"I",0,0]],preview:[["I"],["I"],["I"],["I"]]},J:{shape:[[0,"J",0],[0,"J",0],["J","J",0]],preview:[[0,"J"],[0,"J"],["J","J"]]},L:{shape:[[0,"L",0],[0,"L",0],[0,"L","L"]],preview:[["L",0],["L",0],["L","L"]]},O:{shape:[["O","O"],["O","O"]],preview:[["O","O"],["O","O"]]},S:{shape:[[0,"S","S"],["S","S",0],[0,0,0]],preview:[[0,"S","S"],["S","S",0]]},T:{shape:[[0,0,0],["T","T","T"],[0,"T",0]],preview:[["T","T","T"],[0,"T",0]]},Z:{shape:[["Z","Z",0],[0,"Z","Z"],[0,0,0]],preview:[["Z","Z",0],[0,"Z","Z"]]}},V=function(){var n="IJLOSTZ",e=n[Math.floor(Math.random()*n.length)];return Q[e]},$={pos:{x:0,y:0},tetromino:Q[0].shape,collided:!1},nn=function(n,e){var t=Object(E.useState)(_()),r=Object(I.a)(t,2),o=r[0],i=r[1],c=Object(E.useState)(0),a=Object(I.a)(c,2),s=a[0],l=a[1],u=Object(E.useState)({left:0,size:0}),f=Object(I.a)(u,2),d=f[0],b=f[1];return Object(E.useEffect)((function(){l(0);var t=function(t){var r=t.map((function(n){return n.map((function(n){return"clear"===n[1]?[0,"clear"]:n}))})),o=n.tetromino.map((function(n){var e=n.map((function(n,e){return 0!==n?e+1:0})).filter((function(n){return n>0}));return e.length>0?[Math.min.apply(Math,Object(P.a)(e)),Math.max.apply(Math,Object(P.a)(e))]:[]})).filter((function(n){return n.length>0})).flat();return b({left:n.pos.x+(Math.min.apply(Math,Object(P.a)(o))-1),size:Math.max.apply(Math,Object(P.a)(o))-Math.min.apply(Math,Object(P.a)(o))+1}),n.tetromino.forEach((function(e,t){e.forEach((function(e,o){if(0!==e){var i=t+n.pos.y,c=o+n.pos.x;r[i][c]=[e,n.collided?"merged":"clear"]}}))})),n.collided?(e(),function(n){return n.reduce((function(e,t){return-1===t.findIndex((function(n){return 0===n[0]}))?(l((function(n){return n+1})),e.unshift(new Array(n[0].length).fill([0,"clear"])),e):(e.push(t),e)}),[])}(r)):r};i((function(n){return t(n)}))}),[n,e]),[o,i,s,d]},en=function(n,e){var t=Object(E.useRef)((function(){}));Object(E.useEffect)((function(){t.current=n})),Object(E.useEffect)((function(){if(null!==e){var n=setInterval((function(){return t.current()}),e||0);return function(){return clearInterval(n)}}}),[e])},tn=F.b.div(u||(u=Object(D.a)(["\n    background: ",";\n    border: "," solid ",";\n    color: ",";\n    font-size: ",";\n    font-family: 'Press Start 2P', cursive;\n    border-radius: 8px;\n    line-height: 45px;\n    margin-top: 20px;\n    padding: 0 20px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-flow: column;\n"])),(function(n){return n.theme.buttonsAndDisplays.background}),(function(n){return n.theme.main.borderWidth}),(function(n){return n.theme.main.borderColor}),(function(n){return n.theme.buttonsAndDisplays.color}),(function(n){return n.theme.main.fontSize})),rn=F.b.button(f||(f=Object(D.a)(["\n    background: ",";\n    border: "," solid ",";\n    color: ",";\n    font-size: ",";\n    display: flex;\n    flex-grow: 1;\n    justify-content: center;\n    align-items: center;\n    outline: none;\n    padding: 0 20px;\n    border-radius: 8px;\n    line-height: 50px;\n    font-family: inherit;\n\n    .custom-fill {\n        fill: ",";\n    }\n\n    &:hover {\n        cursor: pointer;\n        box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);\n    }\n"])),(function(n){return n.theme.buttonsAndDisplays.background}),(function(n){return n.theme.main.borderWidth}),(function(n){return n.theme.main.borderColor}),(function(n){return n.theme.buttonsAndDisplays.color}),(function(n){return n.theme.main.fontSize}),(function(n){return n.theme.buttonsAndDisplays.color})),on=F.b.div(d||(d=Object(D.a)(["\n    width: ",";\n    margin: ",";\n    display: flex;\n    flex-grow: ",";\n    flex-shrink: 0;\n    flex-direction: ",";\n    justify-content: ",";\n    align-items: ","; ;\n"])),(function(n){var e=n.width;return e||"row"}),(function(n){var e=n.margin;return e?e.join(" "):""}),(function(n){var e=n.grow;return e||0}),(function(n){var e=n.direction;return e||"row"}),(function(n){var e=n.justifyContent;return e||"center"}),(function(n){var e=n.alignItems;return e||"stretch"})),cn=F.b.div(b||(b=Object(D.a)(["\n    background: ",";\n    color: ",";\n    padding: 30px;\n    border-radius: 8px;\n"])),(function(n){return n.theme.modal.background}),(function(n){return n.theme.modal.color})),an=F.b.div(p||(p=Object(D.a)(["\n    color: ",";\n    position: fixed;\n    display: flex;\n    width: 100%;\n    height: 100%;\n    justify-content: center;\n    align-items: center;\n    z-index: 99;\n    display: flex;\n    flex-flow: column wrap;\n    font-family: 'Press Start 2P', cursive;\n    background: ","; ;\n"])),(function(n){return n.theme.main.color}),(function(n){return n.theme.modal.overlay})),sn=F.b.div(h||(h=Object(D.a)(["\n    margin-right: 20px;\n    display: flex;\n    flex-flow: column wrap;\n    justify-content: flex-start;\n    align-items: stretch;\n"]))),ln=F.b.div(x||(x=Object(D.a)(["\n    display: flex;\n    flex-flow: column wrap;\n"]))),un=F.b.div(j||(j=Object(D.a)(["\n    display: none;\n\n    @media (max-width: ","px) {\n        display: flex;\n    }\n\n    position: fixed;\n    top: ",";\n    height: 50px;\n    width: 100%;\n    z-index: 98;\n    justify-content: center;\n    align-items: stretch;\n"])),J.size*A.width+300,(function(){return"".concat(A.height*J.size-50,"px")})),fn=F.b.button(m||(m=Object(D.a)(["\n    display: flex;\n    outline: none;\n    border: none;\n    padding: 0;\n    flex-grow: 1;\n    justify-content: center;\n    background: rgba(255, 255, 255, 0.5);\n    padding: 20px;\n"]))),dn=F.b.div(g||(g=Object(D.a)(["\n    background: ",";\n    width: 100%;\n    display: flex;\n    flex-grow: 1;\n    justify-content: center;\n    align-items: center;\n    flex-flow: row nowrap;\n"])),(function(n){return n.theme.main.background})),bn=F.b.div(O||(O=Object(D.a)(["\n    outline: none;\n    display: flex;\n    flex-grow: 1;\n    flex-flow: row nowrap;\n    justify-content: center;\n    align-items: flex-start;\n    transform-style: preserve-3d;\n    transform: rotateX(",") rotateY(0deg) translateZ(0px);\n    filter: ",";\n    font-family: 'Press Start 2P', cursive;\n\n    // desktop size\n    @media (min-width: ","px) {\n        flex-flow: row nowrap;\n\n        "," {\n            width: 300px;\n        }\n    }\n\n    // mobile size\n    @media (max-width: ","px) {\n        flex-flow: column nowrap;\n        justify-content: center;\n        align-items: center;\n        padding-top: 10px;\n\n        "," {\n            font-size: 14px;\n            margin-top: 0;\n            padding: 8px;\n            line-height: 14px;\n            display: block;\n            border: 0;\n        }\n\n        "," {\n            margin: 0;\n            padding: 20px;\n            order: 2;\n\n            "," {\n                border: "," solid ",";\n                border-radius: 8px;\n                flex-flow: row wrap;\n                margin: 10px 0;\n                background: #fff;\n            }\n        }\n    }\n"])),(function(n){var e=n.tilt;return"".concat(e,"deg")}),(function(n){return n.gameOver?"blur(5px)":"none"}),J.size*A.width+300,sn,J.size*A.width+300,tn,sn,ln,(function(n){return n.theme.main.borderWidth}),(function(n){return n.theme.main.borderColor})),pn=F.b.input(y||(y=Object(D.a)(["\n    width: 100%;\n"]))),hn=F.b.input(v||(v=Object(D.a)(["\n    background: ",";\n    border: "," solid ",";\n    color: ",";\n    font-size: ",";\n    display: flex;\n    flex-grow: 1;\n    justify-content: center;\n    align-items: center;\n    outline: none;\n    padding: 0 20px;\n    border-radius: 8px;\n    line-height: 50px;\n    font-family: inherit;\n\n    &:hover {\n        box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);\n    }\n"])),(function(n){return n.theme.buttonsAndDisplays.background}),(function(n){return n.theme.main.borderWidth}),(function(n){return n.theme.main.borderColor}),(function(n){return n.theme.buttonsAndDisplays.color}),(function(n){return n.theme.main.fontSize})),xn="1vw",jn=F.b.div(w||(w=Object(D.a)(["\n    position: fixed;\n    display: flex;\n    width: 100%;\n    height: 100%;\n    justify-content: center;\n    align-items: center;\n    z-index: 99;\n    color: #000;\n    display: flex;\n    flex-flow: column wrap;\n    font-family: 'Press Start 2P', cursive;\n    font-size: 20px;\n\n    p {\n        margin: 30px 0;\n        font-size: 60px;\n        font-size: 8vw;\n        text-shadow: "," "," 0 #fff, "," 0 0 #fff, 0 "," 0 #fff, -"," "," 0 #fff, 00px 0 #fff,\n            0-"," 0 #fff, "," -"," 0 #fff, -"," -"," 0 #fff, 0 0 30px #000;\n    }\n\n    "," {\n        flex-grow: 0;\n    }\n"])),xn,xn,xn,xn,xn,xn,xn,xn,xn,xn,xn,rn),mn=function(n){var e=Object(E.useState)("XXX"),t=Object(I.a)(e,2),r=t[0],o=t[1];return Object(M.jsxs)(jn,{children:[Object(M.jsx)("p",{children:"Game Over"}),Object(M.jsx)("p",{children:n.score}),Object(M.jsxs)(cn,{children:[Object(M.jsxs)(on,{margin:[0,0,"30px",0],alignItems:"center",children:["Your name:",Object(M.jsx)(hn,{value:r,onChange:function(n){o(n.target.value.substring(0,5).toUpperCase())},style:{width:"60px"}})]}),Object(M.jsx)(on,{children:Object(M.jsx)(rn,{onClick:function(){n.onSaveHighscore({name:r,score:n.score,date:Date.now().toString()}),n.onClose()},children:"Save & restart"})})]})]})},gn=function(n){return Object(M.jsxs)(un,{children:[Object(M.jsx)(fn,{onClick:function(e){n.onPushLeft(),e.preventDefault()},children:"Left"}),Object(M.jsx)(fn,{onClick:function(e){n.onPushRotate(),e.preventDefault()},children:"Rotate"}),Object(M.jsx)(fn,{onClick:function(e){n.onPushDown(),e.preventDefault()},children:"Down"}),Object(M.jsx)(fn,{onClick:function(e){n.onPushRight(),e.preventDefault()},children:"Right"})]})},On=F.b.div(S||(S=Object(D.a)(["\n    border: "," solid ",";\n    border-radius: 8px;\n    display: flex;\n    flex-flow: row nowrap;\n    align-items: stretch;\n\n    input {\n        display: none;\n    }\n"])),(function(n){return n.theme.main.borderWidth}),(function(n){return n.theme.main.borderColor})),yn=F.b.label(k||(k=Object(D.a)(["\n    display: flex;\n    flex-grow: 1;\n    justify-content: center;\n    padding: 20px;\n    color: ",";\n"])),(function(n){var e=n.checked,t=n.theme;return e?"#F00":t.main.color})),vn=function(n){return Object(M.jsx)(On,{children:n.options.map((function(e){return Object(M.jsxs)(yn,{checked:n.selected===e.value,children:[Object(M.jsx)("input",{type:"radio",name:n.name,value:e.value,checked:n.selected===e.value,onChange:function(e){var t=e.target;n.onChange(t.value)}}),e.label]})}))})},wn=F.b.label(z||(z=Object(D.a)(["\n    display: flex;\n    outline: none;\n    line-height: 45px;\n    font-size: 20px;\n    margin-bottom: 12px;\n    margin-top: ",";\n    font-family: inherit;\n"])),(function(n){return n.mt?"30px":"0"})),Sn=function(n){return Object(M.jsx)(an,{children:Object(M.jsxs)(cn,{children:[Object(M.jsx)(wn,{children:"Tilt:"}),Object(M.jsx)(pn,{type:"range",name:"volume",value:n.localSettings.tilt,min:"0",max:"65",onChange:function(e){var t=e.target;n.onLocalSettingsChange(Object(L.a)(Object(L.a)({},n.localSettings),{},{tilt:parseInt(t.value)}))}}),Object(M.jsx)(wn,{mt:!0,children:"Theme:"}),Object(M.jsx)(vn,{name:"theme",options:[{value:"light",label:"Light"},{value:"dark",label:"Dark"}],selected:n.localSettings.theme,onChange:function(e){n.onLocalSettingsChange(Object(L.a)(Object(L.a)({},n.localSettings),{},{theme:e}))}}),Object(M.jsx)("div",{style:{marginTop:"20px",display:"flex",justifyContent:"center"},children:Object(M.jsx)(rn,{onClick:function(){n.onCloseSettings()},children:"Close"})})]})})};function kn(){return(kn=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}function zn(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var Tn=E.createElement("g",null,E.createElement("path",{className:"custom-fill",d:"M57,11h-9.5C45.9,5.7,40.3,2.8,35,4.5c-3.1,1-5.6,3.4-6.5,6.5H7c-1.7,0-3,1.3-3,3s1.3,3,3,3h21.5c1.7,5.3,7.3,8.2,12.5,6.5   c3.1-1,5.6-3.4,6.5-6.5H57c1.7,0,3-1.3,3-3S58.7,11,57,11z M38,18c-2.2,0-4-1.8-4-4s1.8-4,4-4s4,1.8,4,4S40.2,18,38,18z"}),E.createElement("path",{className:"custom-fill",d:"M57,29H26.5c-1.7-5.3-7.3-8.2-12.5-6.5c-3.1,1-5.6,3.4-6.5,6.5H7c-1.7,0-3,1.3-3,3c0,1.7,1.3,3,3,3h0.5   c1.7,5.3,7.3,8.2,12.5,6.5c3.1-1,5.6-3.4,6.5-6.5H57c1.7,0,3-1.3,3-3C60,30.3,58.7,29,57,29z M17,36c-2.2,0-4-1.8-4-4s1.8-4,4-4   s4,1.8,4,4S19.2,36,17,36z"}),E.createElement("path",{className:"custom-fill",d:"M57,47h-1.5c-1.7-5.3-7.3-8.2-12.5-6.5c-3.1,1-5.6,3.4-6.5,6.5H7c-1.7,0-3,1.3-3,3s1.3,3,3,3h29.5   c1.7,5.3,7.3,8.2,12.5,6.5c3.1-1,5.6-3.4,6.5-6.5H57c1.7,0,3-1.3,3-3S58.7,47,57,47z M46,54c-2.2,0-4-1.8-4-4s1.8-4,4-4s4,1.8,4,4   S48.2,54,46,54z"}));function Cn(n,e){var t=n.title,r=n.titleId,o=zn(n,["title","titleId"]);return E.createElement("svg",kn({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 64 64",style:{enableBackground:"new 0 0 64 64"},xmlSpace:"preserve",ref:e,"aria-labelledby":r},o),t?E.createElement("title",{id:r},t):null,Tn)}var Pn,In=E.forwardRef(Cn),En=(t.p,{tetrominos:{0:{color:"#000"},I:{color:"#9cdaff"},J:{color:"#c568a5"},L:{color:"#ffd265"},O:{color:"#bcff7c"},S:{color:"#cd94ff"},T:{color:"#8aedeb"},Z:{color:"#dea6ec"},"?":{color:"#ece7a6"}},main:{background:"linear-gradient(to top, #ffefba, #ffffff)",color:"#000",borderColor:"#000",borderWidth:"1px",fontSize:"20px"},modal:{overlay:"rgba(0, 0, 0, 0.6)",background:"#FFF",color:"#000"},stage:{background:"#FFF",lines:"#BBB",guide:"rgba(0,0,0,0.05)"},buttonsAndDisplays:{background:"#FFF",color:"#000"}}),Ln={tetrominos:{0:{color:"#000"},I:{color:"#9cdaff"},J:{color:"#c568a5"},L:{color:"#ffd265"},O:{color:"#bcff7c"},S:{color:"#cd94ff"},T:{color:"#8aedeb"},Z:{color:"#dea6ec"},"?":{color:"#ece7a6"}},main:{background:"linear-gradient(to bottom, #0f2027, #203a43, #2c5364)",color:"#FFF",borderColor:"#FFF",borderWidth:"1px",fontSize:"20px"},modal:{overlay:"rgba(255, 255, 255, 0.6)",background:"#000",color:"#FFF"},stage:{background:"#000",lines:"#777",guide:"rgba(255,255,255,0.2)"},buttonsAndDisplays:{background:"#0f2027",color:"#FFF"}},Dn=F.b.div(Pn||(Pn=Object(D.a)(["\n    display: flex;\n    height: ","px;\n    width: 100%;\n"])),J.size),Fn=function(n){return Object(M.jsx)(on,{direction:"column",children:n.shape.map((function(n,e){return Object(M.jsx)(Dn,{children:n.map((function(n,e){return Object(M.jsx)(U,{tetrominoType:n},e)}))},e)}))})},An=function(n){return Object(M.jsx)(on,{direction:"column",grow:1,width:"100%",children:n.highscores.sort((function(n,e){return n.score>e.score?-1:e.score>n.score?1:0})).slice(0,3).map((function(n){return Object(M.jsxs)(on,{grow:1,justifyContent:"space-between",children:[Object(M.jsx)(on,{children:n.name.toUpperCase()}),Object(M.jsx)(on,{children:n.score})]})}))})},Jn=function(){var n=Object(E.useState)({tilt:0,theme:"dark"}),e=Object(I.a)(n,2),t=e[0],r=e[1],o=Object(E.useState)(null),i=Object(I.a)(o,2),c=i[0],a=i[1],s=Object(E.useState)(!1),l=Object(I.a)(s,2),u=l[0],f=l[1],d=Object(E.useState)(!1),b=Object(I.a)(d,2),p=b[0],h=b[1],x=Object(E.useState)(!1),j=Object(I.a)(x,2),m=j[0],g=j[1],O=Object(E.useState)(!1),y=Object(I.a)(O,2),v=y[0],w=y[1],S=function(){var n=Object(E.useState)($),e=Object(I.a)(n,2),t=e[0],r=e[1],o=Object(E.useState)(V()),i=Object(I.a)(o,2),c=i[0],a=i[1],s=function(n,e){var t=n.map((function(e,t){return n.map((function(n){return n[t]}))}));return e>0?t.map((function(n){return n.reverse()})):t.reverse()},l=Object(E.useCallback)((function(){r({pos:{x:A.width/2-2,y:0},tetromino:c.shape,collided:!1}),a(V())}),[c]);return{player:t,updatePlayerPosition:function(n){var e=n.x,t=n.y,o=n.collided;r((function(n){return Object(L.a)(Object(L.a)({},n),{},{pos:{x:n.pos.x+=e,y:n.pos.y+=t},collided:o})}))},resetPlayer:l,playerRotate:function(n,e){var o=JSON.parse(JSON.stringify(t));o.tetromino=s(o.tetromino,e);for(var i=o.pos.x,c=1;K(o,n,{x:0,y:0});)if(o.pos.x+=c,(c=-(c+(c>0?1:-1)))>o.tetromino[0].length)return s(o.tetromino,-e),void(o.pos.x=i);r(o)},nextTetromino:c}}(),k=S.player,z=S.updatePlayerPosition,T=S.resetPlayer,C=S.playerRotate,D=S.nextTetromino,J=nn(k,T),R=Object(I.a)(J,4),N=R[0],U=R[1],W=R[2],Z=R[3],H=function(n){var e=Object(E.useState)(0),t=Object(I.a)(e,2),r=t[0],o=t[1],i=Object(E.useState)(0),c=Object(I.a)(i,2),a=c[0],s=c[1],l=Object(E.useState)(0),u=Object(I.a)(l,2),f=u[0],d=u[1],b=[40,100,300,1200],p=Object(E.useCallback)((function(){n>0&&(o((function(e){return e+b[n-1]*(f+1)})),s((function(e){return e+n})))}),[f,b,n]);return Object(E.useEffect)((function(){p()}),[p,n,r]),[r,o,a,s,f,d]}(W),G=Object(I.a)(H,6),X=G[0],Y=G[1],Q=G[2],cn=G[3],an=G[4],un=G[5],fn=Object(E.useState)([]),pn=Object(I.a)(fn,2),hn=pn[0],xn=pn[1],jn=Object(E.useRef)(null),On=function(n){wn("UNPAUSE"),K(k,N,{x:n,y:0})||z({x:n,y:0,collided:!1})},yn=function(){U(_()),a(1e3),T(),Y(0),un(0),cn(0),h(!1),w(!0)},vn=function(n){Q>10*(an+1)&&(un((function(n){return n+1})),a(1e3/(an+1)+200));for(var e=0,t=1;t<=n&&!K(k,N,{x:0,y:t});t+=1)e=t;e===n?z({x:0,y:n,collided:!1}):(k.pos.y<1&&e<1&&(w(!1),h(!0),a(null)),z({x:0,y:e,collided:!0}))},wn=function(n){switch(n){case"LEFT":On(-1);break;case"RIGHT":On(1);break;case"DOWN":a(null),vn(1);break;case"FULLDOWN":a(null),vn(A.height);break;case"ROTATE":C(N,1);break;case"TOGGLE_PAUSE":m?(g(!1),a(1e3/(an+1))):(g(!0),a(null));break;case"UNPAUSE":g(!1),a(1e3/(an+1))}};return en((function(){vn(1)}),c),Object(E.useEffect)((function(){var n=localStorage.getItem("TetrisSettings"),e=localStorage.getItem("TetrisHighscores");n&&r(JSON.parse(n)),e&&xn(JSON.parse(e))}),[xn]),Object(M.jsx)(F.a,{theme:"light"===t.theme?En:Ln,children:Object(M.jsxs)(dn,{children:[u&&Object(M.jsx)(Sn,{localSettings:t,onLocalSettingsChange:function(n){r(n),localStorage.setItem("TetrisSettings",JSON.stringify(n))},onCloseSettings:function(){f(!1)}}),p&&Object(M.jsx)(mn,{score:X,onClose:function(){var n;yn(),null===jn||void 0===jn||null===(n=jn.current)||void 0===n||n.focus()},onSaveHighscore:function(n){var e=[].concat(Object(P.a)(hn),[n]);xn(e),localStorage.setItem("TetrisHighscores",JSON.stringify(e))}}),Object(M.jsx)(gn,{onPushLeft:function(){wn("LEFT")},onPushRotate:function(){wn("ROTATE")},onPushRight:function(){wn("RIGHT")},onPushDown:function(){wn("DOWN"),wn("UNPAUSE")}}),Object(M.jsxs)(bn,{ref:jn,tilt:t.tilt,gameOver:p,role:"button",tabIndex:0,onKeyUp:function(n){var e=n.keyCode;p||40!==e&&34!==e&&35!==e||wn("UNPAUSE")},onKeyDown:function(n){!function(n){var e=!0;if(!p)switch(n.keyCode){case 37:wn("LEFT");break;case 39:wn("RIGHT");break;case 40:wn("DOWN");break;case 38:wn("ROTATE");break;case 80:wn("TOGGLE_PAUSE");break;case 34:case 35:wn("FULLDOWN");break;default:console.log("Unused keystroke: ".concat(n.keyCode)),e=!1}e&&n.preventDefault()}(n)},children:[Object(M.jsxs)(sn,{children:[Object(M.jsxs)(on,{children:[v?Object(M.jsx)(rn,{onClick:function(){wn("TOGGLE_PAUSE")},children:m?"Continue":"Pause"}):Object(M.jsx)(rn,{onClick:function(){yn()},children:"Start"}),Object(M.jsx)(rn,{onClick:function(){m||wn("TOGGLE_PAUSE"),f(!0)},style:{marginLeft:"10px"},children:Object(M.jsx)(In,{style:{height:"30px"}})})]}),Object(M.jsxs)(ln,{children:[Object(M.jsxs)(tn,{children:["Score: ",X]}),Object(M.jsxs)(tn,{children:["Rows: ",Q]}),Object(M.jsxs)(tn,{children:["Level: ",an]}),Object(M.jsxs)(tn,{children:[Object(M.jsx)(on,{children:"Scores:"}),Object(M.jsx)(An,{highscores:hn})]}),Object(M.jsxs)(tn,{children:[Object(M.jsx)(on,{children:"Next:"}),Object(M.jsx)(Fn,{shape:m?q:D.preview})]})]})]}),Object(M.jsx)(B,{paused:m,stage:N,showInstructions:!v,activeColumns:Z})]})]})})};C.a.render(Object(M.jsx)(Jn,{}),document.getElementById("tetris"))}},[[24,1,2]]]);
//# sourceMappingURL=main.49dbb796.chunk.js.map