"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[665],{8665:function(n,e,i){i.r(e),i.d(e,{default:function(){return en}});var t,r,o,a,l,d,s,c,h,u,p,x,f,v,g,m,b,Z=i(1413),j=i(5987),y=i(7904),C=i(168),k=i(9202),w=k.Z.button(t||(t=(0,C.Z)(["\ndisplay: flex;\njustify-content: center;\nalign-items: center;\npadding: 14px 0px;\nwidth: 100%;\nfont-size: var(--fontSize14);\nfont-family: var(--fontFamily);\nfont-weight: var(--fontWeight500);\ncolor: var(--buttonAddCardColor);\nbackground-color: var(--buttonAddCardBgColor);\nborder-radius: var(--borderRadius8);\n"]))),z=k.Z.span(r||(r=(0,C.Z)(["\ndisplay: flex;\n  align-items: center;\n  justify-content: center;\n  width: 28px;\n  height: 28px;\n  margin-right: 8px;\n  background-color: var(--buttonAddCardIconBgColor);\n  border-radius: var(--borderRadius8);\n  "]))),S=k.Z.svg(o||(o=(0,C.Z)(["\nfill: var(--buttonAddCardIconFill);\n"]))),A=i(184),T=["type","onClick","children"],W=function(n){var e=n.type,i=void 0===e?"submit":e,t=n.onClick,r=n.children,o=(0,j.Z)(n,T);return(0,A.jsxs)(w,(0,Z.Z)((0,Z.Z)({type:i,onClick:t},o),{},{children:[(0,A.jsx)(z,{children:(0,A.jsx)(S,{width:"14",height:"14",children:(0,A.jsx)("use",{xlinkHref:"".concat(y.Z,"#icon-plus")})})}),r]}))},D=k.Z.li(a||(a=(0,C.Z)(["\n  border-left: 4px solid teal;\n  border-radius: 8px;\n  width: 100%;\n  height: 154px;\n  padding: 14px 24px;\n  background-color: var(--bgColor);\n  color: var(--textColor);\n"]))),B=k.Z.p(l||(l=(0,C.Z)(["\n  font-size: var(--fontSize14);\n  font-weight: var(--fontWeight500);\n  margin-bottom: 8px;\n  color: var(--titleColor);\n"]))),_=k.Z.p(d||(d=(0,C.Z)(["\n  color: var(--subTitleColor);\n  font-size: var(--fontSize8);\n"]))),F=k.Z.p(s||(s=(0,C.Z)(["\n  color: var(--subTextColor);\n  font-size: var(--fontSize10);\n"]))),I=k.Z.p(c||(c=(0,C.Z)(["\n  font-size: var(--fontSize12);\n  height: 38px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"]))),R=k.Z.span(h||(h=(0,C.Z)(["\n  display: block;\n  height: 1px;\n  width: 100%;\n  background-color: var(--lineColor);\n  margin: 14px 0;\n"]))),q=k.Z.div(u||(u=(0,C.Z)(["\n  display: flex;\n  justify-contact: center;\n  aling-items: center;\n  gap: 14px;\n"]))),H=function(n){var e=n.task,i=e.name,t=e.discription,r=e.priority,o=e.deadline;return(0,A.jsxs)(D,{children:[(0,A.jsx)(B,{children:i}),(0,A.jsx)(I,{children:t}),(0,A.jsx)(R,{}),(0,A.jsxs)(q,{children:[(0,A.jsxs)("div",{children:[(0,A.jsx)(_,{children:"Priority"}),(0,A.jsx)(F,{children:r})]}),(0,A.jsxs)("div",{children:[(0,A.jsx)(_,{children:"Deadline"}),(0,A.jsx)(F,{children:o})]})]})]})},L=k.Z.ul(p||(p=(0,C.Z)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  margin: 0;\n  padding: 0;\n  gap: 8px;\n"]))),Y=k.Z.div(x||(x=(0,C.Z)(["\n  border-radius: 8px;\n  width: 100%;\n  hight: 56px;\n  padding: 14px 24px;\n  background-color: var(--bgColor);\n  color: var(--titleColor);\n  font-weight: var(--fontWeight500);\n  // margin-bottom: 14px;\n"]))),E=k.Z.div(f||(f=(0,C.Z)(["\n  width: 334px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n"]))),N=function(n){var e=n.tasksArray,i=n.titleColumn;return(0,A.jsxs)(E,{children:[(0,A.jsx)(Y,{children:(0,A.jsx)("p",{children:i})}),(0,A.jsx)(L,{children:e.map((function(n){return console.log(n),(0,A.jsx)(H,{task:n},n.id)}))}),(0,A.jsx)(W,{children:"Add another card"})]})},O=i(9439),P=i(2791),V=i(9434),G=i(7322),J=i(1057),K=k.Z.div(v||(v=(0,C.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n"]))),M=k.Z.p(g||(g=(0,C.Z)(["\n  font-size: var(--fontSize14);\n  font-family: var(--fontFamily);\n  font-weight: var(--fontWeight500);\n  letter-spacing: -0.28px;\n  color: var(--themeText);\n"]))),Q=k.Z.ul(m||(m=(0,C.Z)(["\n  display: inline-flex;\n  padding: 18px 44px 18px 18px;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  border-radius: var(--borderRadius8);\n  border: 1px solid var(--themeBorderColor);\n  background-color: var(--themeBgColor);\n  gap: 4px;\n"]))),U=k.Z.li(b||(b=(0,C.Z)(["\n  cursor: pointer;\n  color: var(--themeSelectText);\n  transition: color var(--transition);\n  :hover {\n    color: var(--themeSelectTextAccent);\n  }\n"]))),X=[{name:"Light",value:"light"},{name:"Dark",value:"dark"},{name:"Violet",value:"violet"}],$=function(){var n=(0,V.I0)(),e=(0,P.useState)("dark"),i=(0,O.Z)(e,2),t=i[0],r=i[1],o=(0,P.useState)(!1),a=(0,O.Z)(o,2),l=a[0],d=a[1];(0,P.useEffect)((function(){document.body.setAttribute("data-theme",t)}),[t]);return(0,A.jsxs)("div",{children:[(0,A.jsxs)(K,{onClick:function(){return d(!l)},children:[(0,A.jsx)(M,{children:"Theme"}),(0,A.jsx)(G.x3N,{size:16,color:"var(--themeText)"})]}),(0,A.jsx)(Q,{isOpen:l,children:X.map((function(e){var i=e.value,t=e.name;return(0,A.jsx)(U,{onClick:function(){return e=i,n((0,J.D)(e)),r(e),void d(!1);var e},children:t},i)}))})]})},nn=[{id:"1",name:"The Watch Spot Design1",discription:"Create a visually stunning and eye-catching watch dial design that embodies our brand's essence of sleek aesthetics and modern elegance. Your design should be unique, innovative, and reflective of the latest trends in watch design.",priority:"Low",deadline:"12 / 05 / 2023"},{id:"2",name:"The Watch Spot Design2",discription:"Create a visually stunning and eye-catching watch dial design that embodies our brand's essence of sleek aesthetics and modern elegance. Your design should be unique, innovative, and reflective of the latest trends in watch design.",priority:"High",deadline:"12 / 05 / 2023"}],en=function(){return(0,A.jsxs)("div",{children:[(0,A.jsx)("p",{children:"board "}),(0,A.jsx)(N,{tasksArray:nn,titleColumn:"titleColumn"}),(0,A.jsx)($,{})]})}}}]);
//# sourceMappingURL=665.aee66ee9.chunk.js.map