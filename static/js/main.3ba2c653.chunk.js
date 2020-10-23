(this["webpackJsonpgame-of-life"]=this["webpackJsonpgame-of-life"]||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(6),r=a.n(i),c=(a(12),a(4)),o=a(1),s=function(e){var t=e.changeCell,a=e.cell,n=a.alive,i=a.x,r=a.y;return l.a.createElement("div",{key:i+r,className:"".concat(n?"alive":""," cell"),onClick:function(){return t({x:i,y:r})}})};var u=function(e){var t=e.grid,a=e.changeCell;return l.a.createElement("div",{className:"game-screen"},l.a.createElement("div",{className:"grid"},t.map((function(e,t){return l.a.createElement("div",{className:"row",key:t},e.map((function(e){return l.a.createElement(s,{cell:e,changeCell:a})})))}))))};var h=function(e){var t=e.generations,a=e.speed,i=e.setSpeed,r=e.setPlay,c=e.play,s=e.updateGrid,u=e.clearGrid,h=e.nextGen,m=Object(n.useState)(25),d=Object(o.a)(m,2),v=d[0],f=d[1];return l.a.createElement("div",{className:"buttons"},l.a.createElement("p",null,"Generations: ",t),l.a.createElement("button",{className:c?"running":"",onClick:function(){r(!c)}},c?"Pause":"Play"),l.a.createElement("button",{disabled:c,onClick:h},"Next Generation"),l.a.createElement("div",{className:"speed"},l.a.createElement("button",{onClick:function(){return i(2*a)}},"Slower"),l.a.createElement("p",null,"Speed: ",a,"ms"),l.a.createElement("button",{onClick:function(){return i(a/2)}},"Faster")),l.a.createElement("button",{onClick:u},"Clear"),l.a.createElement("div",null,l.a.createElement("p",{htmlFor:"speedRange"},"Grid Size: ",v),l.a.createElement("input",{disabled:c,type:"range",min:"4",max:"50",value:v,class:"slider",id:"speedRange",onChange:function(e){f(e.target.value)},onMouseUp:function(){return s(v)}})))};var m=function(e){return l.a.createElement("div",{className:"rules"},l.a.createElement("section",null,l.a.createElement("h2",null,"Rules"),l.a.createElement("p",null,"The universe of the Game of Life is an infinite, two-dimensional orthogonal grid of square cells, each of which is in one of two possible states, live or dead, (or populated and unpopulated, respectively). Every cell interacts with its eight neighbours, which are the cells that are horizontally, vertically, or diagonally adjacent. At each step in time, the following transitions occur:"),l.a.createElement("ol",{type:"1"},l.a.createElement("li",null,"Any live cell with fewer than two live neighbours dies, as if by underpopulation."),l.a.createElement("li",null,"Any live cell with two or three live neighbours lives on to the next generation."),l.a.createElement("li",null,"Any live cell with more than three live neighbours dies, as if by overpopulation."),l.a.createElement("li",null,"Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.")),l.a.createElement("p",null,"These rules, which compare the behavior of the automaton to real life, can be condensed into the following:"),l.a.createElement("ol",null,l.a.createElement("li",null,"Any live cell with two or three live neighbours survives."),l.a.createElement("li",null,"Any dead cell with three live neighbours becomes a live cell."),l.a.createElement("li",null,"All other live cells die in the next generation. Similarly, all other dead cells stay dead.")),l.a.createElement("p",null,"The initial pattern constitutes the seed of the system. The first generation is created by applying the above rules simultaneously to every cell in the seed; births and deaths occur simultaneously, and the discrete moment at which this happens is sometimes called a tick. Each generation is a pure function of the preceding one. The rules continue to be applied repeatedly to create further generations.")))};function d(e){for(var t=[],a=0;a<e;a++){for(var n=[],l=0;l<e;l++){var i={alive:!1,x:l,y:a};n.push(i)}t.push(n)}return t}function v(e){for(var t=Object(c.a)(e),a=[],n=0;n<t.length;n++){for(var l=[],i=0;i<t[n].length;i++){var r={alive:!1,x:i,y:n},o=0;n-1>=0&&i-1>=0&&t[n-1][i-1].alive&&(o+=1),n-1>=0&&t[n-1][i].alive&&(o+=1),n-1>=0&&i+1<t[n].length&&t[n-1][i+1].alive&&(o+=1),i-1>=0&&t[n][i-1].alive&&(o+=1),i+1<t[n].length&&t[n][i+1].alive&&(o+=1),n+1<t.length&&i-1>=0&&t[n+1][i-1].alive&&(o+=1),n+1<t.length&&t[n+1][i].alive&&(o+=1),n+1<t.length&&i+1<t[n].length&&t[n+1][i+1].alive&&(o+=1),t[n][i].alive?2!==o&&3!==o||(r.alive=!0):3===o&&(r.alive=!0),l.push(r)}a.push(l)}return a}a(13);var f=function(){var e=Object(n.useState)(25),t=Object(o.a)(e,2),a=t[0],i=t[1],r=Object(n.useState)([[]]),s=Object(o.a)(r,2),f=s[0],p=s[1],g=Object(n.useState)(!1),E=Object(o.a)(g,2),b=E[0],y=E[1],w=Object(n.useState)(0),j=Object(o.a)(w,2),O=j[0],S=j[1],x=Object(n.useState)(200),C=Object(o.a)(x,2),N=C[0],k=C[1];return Object(n.useEffect)((function(){var e=d(a);p(e)}),[a]),Object(n.useEffect)((function(){b&&setTimeout((function(){S(O+1),p(v(f))}),N)}),[f,b]),l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"header"},l.a.createElement("h1",null,"Game of Life")),l.a.createElement("div",{className:"content"},l.a.createElement(h,{speed:N,setSpeed:k,generations:O,setPlay:y,play:b,gridSize:a,updateGrid:function(e){i(e)},clearGrid:function(){y(!1);var e=d(a);setTimeout((function(){p(e),S(0),k(200)}),N)},nextGen:function(){var e=v(f);S(O+1),p(e)}}),l.a.createElement(u,{grid:f,changeCell:function(e){var t=e.x,a=e.y;if(!b){var n=Object(c.a)(f);n[a][t].alive=!n[a][t].alive,p(n)}}}),l.a.createElement(m,null)))};r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(f,null)),document.getElementById("root"))},7:function(e,t,a){e.exports=a(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.3ba2c653.chunk.js.map