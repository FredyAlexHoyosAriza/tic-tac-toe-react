(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{13:function(e,t,c){},8:function(e,t,c){"use strict";c.r(t);var n=c(7),r=c(3),s=c(1),a=c(6),i=c.n(a),o=(c(13),c(0));function l(e){return Object(o.jsx)("button",{className:"square",onClick:e.onClick,children:e.value})}function u(e){var t=function(t){return Object(o.jsx)(l,{value:e.squares[t],onClick:function(){return e.onClick(t)}})};return Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"board-row",children:[t(0),t(1),t(2)]}),Object(o.jsxs)("div",{className:"board-row",children:[t(3),t(4),t(5)]}),Object(o.jsxs)("div",{className:"board-row",children:[t(6),t(7),t(8)]})]})}function j(e){var t=Object(s.useState)([{squares:Array(9).fill(null)}]),c=Object(r.a)(t,2),a=c[0],i=c[1],l=Object(s.useState)(0),j=Object(r.a)(l,2),d=j[0],O=j[1],h=Object(s.useState)(!0),v=Object(r.a)(h,2),f=v[0],x=v[1],m=a[d],g=b(m.squares),k=a.map((function(e,t){var c=t?"Go to move #"+t:"Go to game start";return Object(o.jsx)("li",{children:Object(o.jsx)("button",{onClick:function(){return function(e){O(e),x(e%2===0)}(t)},children:c})},t)})),q="";return q=g?"Winner: "+g:"Next player: "+(f?"X":"O"),Object(o.jsxs)("div",{className:"game",children:[Object(o.jsx)("div",{className:"game-board",children:Object(o.jsx)(u,{squares:m.squares,onClick:function(e){var t=a.slice(0,d+1),c=t[t.length-1].squares.slice();b(c)||c[e]||(c[e]=f?"X":"O",i([].concat(Object(n.a)(t),[{squares:c}])),O(t.length),x(!f))}})}),Object(o.jsxs)("div",{className:"game-info",children:[Object(o.jsx)("div",{children:q}),Object(o.jsx)("ol",{children:k})]})]})}function b(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],c=0;c<t.length;c++){var n=Object(r.a)(t[c],3),s=n[0],a=n[1],i=n[2];if(e[s]&&e[s]===e[a]&&e[s]===e[i])return e[s]}return null}i.a.render(Object(o.jsx)(j,{}),document.getElementById("root"))}},[[8,1,2]]]);
//# sourceMappingURL=main.12a30eab.chunk.js.map