(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{240:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=(a(29),a(3),a(173),a(298)),i=a(364),l=a(365),c=function(e){var t=e.biographyList,a=["#ABBEEA","#6577A0"],n=t.map(function(e,t){var n=e.search(/[a-zа-я]/i),i=e.slice(0,n-2),l=e.slice(n)[0].toUpperCase()+e.slice(n+1),c=a[t%a.length];return r.a.createElement(o.TimelineItem,{dateText:i,key:t.toString(),dateInnerStyle:{background:c,color:"black"}},l)});return r.a.createElement(i.a,null,r.a.createElement(l.a,{variant:"h4",align:"center"},"Biography"),r.a.createElement(o.Timeline,{lineColor:"#ddd"},n))},s=a(256),u=a(307),m=a.n(u);a(313);var p=function(e){var t,a;function n(){var t;return(t=e.call(this)||this).state={isOpen:!1},t.openModal=t.openModal.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t)),t}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var o=n.prototype;return o.openModal=function(){this.setState({isOpen:!0})},o.render=function(){var e=this,t="https://img.youtube.com/vi/"+this.props.videolink+"/hqdefault.jpg";return r.a.createElement("div",{style:{display:"block",margin:"100px auto",maxWidth:"800px",height:"550px",cursor:"pointer"}},r.a.createElement(m.a,{channel:"youtube",isOpen:this.state.isOpen,videoId:this.props.videolink,onClose:function(){return e.setState({isOpen:!1})}}),r.a.createElement("img",{style:{maxWidth:"100%",height:"550px"},src:t,onClick:this.openModal}))},n}(r.a.Component),h=a(370),d=a(366),g=Object(d.a)(function(e){var t;return{root:(t={flexGrow:1,width:"100%",overflowX:"hidden","& p":{fontSize:"1.1rem"}},t[e.breakpoints.down("md")]={"& h1":{fontSize:"2.5rem",textAlign:"center"},"& h2":{fontSize:"1.5rem"}},t),photographerInfo:{marginTop:40,marginRight:"auto",marginBottom:50,marginLeft:"auto",width:"70%"},photographerPic:{width:200,height:200,marginTop:0,marginRight:"auto",marginBottom:30,marginLeft:"auto"}}}),f=function(e){var t=g(),a=e.initials,n=e.photo,o=e.bio,i=e.years;return r.a.createElement("div",{className:t.photographerInfo},r.a.createElement("div",null,r.a.createElement(h.a,{src:n.resolutions.src,className:t.photographerPic}),r.a.createElement(l.a,{gutterBottom:!0,variant:"h6",component:"h2",align:"center"},a),r.a.createElement(l.a,{align:"center",color:"textSecondary",gutterBottom:!0},i)),r.a.createElement(l.a,{paragraph:!0,className:t.photographerDescription,align:"center",gutterBottom:!0,variant:"body2"},o))},E=a(373),v=a(374),b=Object(d.a)(function(){return{photoGallery:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden"},gridList:{flexWrap:"nowrap",transform:"translateZ(0)"},galleryHeading:{marginBottom:30}}}),y=function(e){var t=b(),a=e.photos;return r.a.createElement("div",{className:t.photoGallery},r.a.createElement(l.a,{className:t.galleryHeading,gutterBottom:!0,variant:"h4",component:"h3",align:"center"},"Photo Gallery"),r.a.createElement(E.a,{cellHeight:320,className:t.gridList,cols:2.5},a.map(function(e){return r.a.createElement(v.a,{key:e.id},r.a.createElement("img",{src:e.file.url,alt:e.title}))})))};var w=function(e){return r.a.createElement("div",{style:{display:"block",margin:"100px auto",maxWidth:"800px",width:"100%",height:"550px"},dangerouslySetInnerHTML:{__html:e.mapCode}})},k=a(257),x=Object(d.a)(function(){return{worksList:{marginTop:40,marginRight:"auto",marginBottom:50,marginLeft:"auto",width:"50%"}}}),C=function(e){var t=x(),a=e.works;return r.a.createElement("div",{className:t.worksList},r.a.createElement(l.a,{className:t.worksHeading,gutterBottom:!0,variant:"h4",component:"h3",align:"center"},"Works"),Object(k.a)(a.json))};a.d(t,"PhotographerQuery",function(){return O});t.default=function(e){var t=e.data,a=t.contentfulAuthors,n=a.yearsOfLife,o=a.works,i=a.workExamples||[],l=a.biography.biography,u=a.biographyList,m=t.contentfulAuthors.videolink,h=a.mapCode.mapCode;return r.a.createElement(s.a,null,r.a.createElement(f,{photo:a.photo,initials:a.initials,bio:l,years:n}),r.a.createElement(c,{biographyList:u}),r.a.createElement(y,{photos:i}),r.a.createElement(C,{works:o}),r.a.createElement(p,{videolink:m}),r.a.createElement(w,{mapCode:h}))};var O="2726888588"},247:function(e,t,a){var n;e.exports=(n=a(254))&&n.default||n},249:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(95),i=a.n(o);a.d(t,"a",function(){return i.a}),a.d(t,"b",function(){return o.navigate});a(247),a(17).default.enqueue,r.a.createContext({})},254:function(e,t,a){"use strict";a.r(t);a(40);var n=a(0),r=a.n(n),o=a(128);t.default=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json)):null}},255:function(e,t,a){e.exports=a.p+"static/photo-icon-e5b7a65824c4a2f8f847f0ec6eb9d316.png"},256:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(372),i=(a(173),a(249)),l=a(366),c=a(274),s=a(368),u=a(369),m=a(371),p=a(365),h=a(381),d=a(382),g=a(379),f=a(262),E=a.n(f),v=a(263),b=a.n(v),y=a(370),w=a(364),k=a(255),x=a.n(k),C=Object(l.a)(function(e){var t,a,n,r;return{grow:{flexGrow:1},titleLink:{textDecoration:"none",color:"white","&:hover":{color:"#e7fcff"},minWidth:0},search:(t={position:"relative",borderRadius:e.shape.borderRadius},t[e.breakpoints.up("md")]={backgroundColor:Object(c.b)(e.palette.common.white,.15)},t["&:hover"]={backgroundColor:Object(c.b)(e.palette.common.white,.25)},t.marginRight=e.spacing(2),t.marginLeft=0,t.width="100%",t[e.breakpoints.up("xs")]={marginLeft:e.spacing(3),width:"auto"},t),searchIcon:{width:e.spacing(7),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:(a={padding:e.spacing(1,1,1,7),transition:e.transitions.create("width"),width:"100%"},a[e.breakpoints.up("md")]={width:120,"&:focus":{width:200}},a[e.breakpoints.down("sm")]={width:0,"&:focus":{width:120}},a),sectionDesktop:(n={display:"none"},n[e.breakpoints.up("md")]={display:"flex"},n),sectionMobile:(r={display:"flex"},r[e.breakpoints.up("md")]={display:"none"},r),bigAvatar:{margin:5,marginLeft:0,width:50,height:50,marginRight:e.spacing(2),"&:hover":{backgroundColor:Object(c.b)(e.palette.common.white,.15)},transition:e.transitions.create("backgroundColor")}}});function O(){var e=C(),t=r.a.useState(null),a=t[0],n=t[1],o=Boolean(a);function l(){n(null)}var c="primary-search-languages-menu",f=r.a.createElement(g.a,{anchorEl:a,anchorOrigin:{vertical:"top",horizontal:"right"},id:c,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:o,onClose:l},r.a.createElement(d.a,{onClick:l},"En"),r.a.createElement(d.a,{onClick:l},"Ru"));return r.a.createElement("div",{className:e.grow},r.a.createElement(s.a,{position:"static"},r.a.createElement(w.a,null,r.a.createElement(u.a,null,r.a.createElement(i.a,{to:"/"},r.a.createElement(y.a,{alt:"Logo",src:x.a,className:e.bigAvatar})),r.a.createElement(i.a,{to:"/photographers-list/",className:e.titleLink},r.a.createElement(p.a,{className:e.title,variant:"h6",noWrap:!0},"Photographers of Belarus")),r.a.createElement("div",{className:e.grow}),r.a.createElement("div",{className:e.search},r.a.createElement("div",{className:e.searchIcon},r.a.createElement(E.a,null)),r.a.createElement(h.a,{placeholder:"Search…",classes:{root:e.inputRoot,input:e.inputInput},inputProps:{"aria-label":"search"}})),r.a.createElement(m.a,{edge:"end","aria-label":"languages","aria-controls":c,"aria-haspopup":"true",onClick:function(e){n(e.currentTarget)},color:"inherit"},r.a.createElement(b.a,null))))),f)}function L(){return r.a.createElement(p.a,{variant:"body2",color:"textSecondary",style:{textAlign:"center"}},"Built with love by the ",r.a.createElement("a",{color:"inherit",href:"https://rs.school/",style:{textDecoration:"none",fontWeight:"bold",color:"#3f51b5"},target:"_blank",rel:"noopener noreferrer"},"RSSstudents")," team.")}var N=Object(l.a)(function(e){return{footer:{padding:e.spacing(2),marginTop:"auto",backgroundColor:"#3f80b512"}}});function B(){var e=N();return r.a.createElement("footer",{className:e.footer},r.a.createElement(w.a,{maxWidth:"sm"},r.a.createElement(p.a,{variant:"body1",style:{textAlign:"center"}},"Group 16, 2019"),r.a.createElement(L,null)))}var S=Object(l.a)(function(e){return{root:{display:"flex",flexDirection:"column",minHeight:"100vh"}}});t.a=function(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:S().root},r.a.createElement(o.a,null),r.a.createElement(O,null),t,r.a.createElement(B,null)))}},257:function(e,t,a){"use strict";a.d(t,"a",function(){return b});var n,r,o=a(0),i=a.n(o),l=a(286),c=a(288),s=a(378),u=a(365),m=function(e){var t=e.children;return i.a.createElement(s.a,{fontWeight:"fontWeightMedium",component:"strong"},t)},p=function(e){var t=e.children;return i.a.createElement(u.a,{variant:"body1"},t)},h=function(e){var t=e.children;return i.a.createElement(u.a,{variant:"h1",color:"primary"},t)},d=function(e){var t=e.children;return i.a.createElement(u.a,{variant:"h2",color:"primary"},t)},g=function(e){var t=e.children;return i.a.createElement(u.a,{variant:"h3",color:"primary"},t)},f=function(e){var t=e.children;return i.a.createElement(u.a,{variant:"h4",color:"primary"},t)},E=function(e){var t=e.children;return i.a.createElement(u.a,{variant:"h5",color:"primary"},t)},v={renderMark:(n={},n[l.MARKS.BOLD]=function(e){return i.a.createElement(m,null,e)},n),renderNode:(r={},r[l.BLOCKS.PARAGRAPH]=function(e,t){return i.a.createElement(p,null,t)},r[l.BLOCKS.HEADING_1]=function(e,t){return i.a.createElement(h,null,t)},r[l.BLOCKS.HEADING_2]=function(e,t){return i.a.createElement(d,null,t)},r[l.BLOCKS.HEADING_3]=function(e,t){return i.a.createElement(g,null,t)},r[l.BLOCKS.HEADING_4]=function(e,t){return i.a.createElement(f,null,t)},r[l.BLOCKS.HEADING_5]=function(e,t){return i.a.createElement(E,null,t)},r)};function b(e){return Object(c.documentToReactComponents)(e,v)}}}]);
//# sourceMappingURL=component---src-components-photographer-js-f4e1022e7dd0af30c303.js.map