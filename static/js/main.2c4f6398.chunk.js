(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,,function(t,e,n){t.exports={option:"Statistics_option__2B9c4",total:"Statistics_total__1sLlD",percent:"Statistics_percent__1rbnt"}},,,function(t,e,n){t.exports={section:"Section_section__38hZS",title:"Section_title__1PVku"}},,,,,function(t,e,n){t.exports={button:"FeedbackOptions_button__3-zHS"}},function(t,e,n){t.exports={message:"Notification_message__3A931"}},,,,,,,function(t,e,n){},function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),o=n(6),s=n.n(o),i=(n(18),n(7)),r=n(8),l=n(9),u=n(3),b=n(13),d=n(12),j=(n(19),n(2)),p=n.n(j),h=n(0);var f=function(t){var e=t.good,n=t.neutral,a=t.bad,c=t.total,o=t.positivePercentage;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("p",{className:p.a.option,children:["Good: ",e]}),Object(h.jsxs)("p",{className:p.a.option,children:["Natural: ",n]}),Object(h.jsxs)("p",{className:p.a.option,children:["Bad: ",a]}),Object(h.jsxs)("p",{className:p.a.total,children:["Total: ",c]}),Object(h.jsxs)("p",{className:p.a.percent,children:["Positive feedback: ",o,"%"]})]})},v=n(10),O=n.n(v);var g=function(t){var e=t.options,n=t.onLeaveFeedback;return e.map((function(t){return Object(h.jsx)("button",{type:"button",className:O.a.button,onClick:function(){return n(t)},children:t},t)}))},x=n(11),k=n.n(x);var _=function(t){var e=t.message;return Object(h.jsx)("p",{className:k.a.message,children:e})},m=n(5),F=n.n(m);var N=function(t){var e=t.title,n=t.children;return Object(h.jsxs)("section",{className:F.a.section,children:[Object(h.jsx)("h2",{className:F.a.title,children:e}),n]})},S=function(t){Object(b.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={good:0,neutral:0,bad:0},t.onLeaveFeedback=function(e){t.setState((function(t){return Object(i.a)({},e,t[e]+1)}))},t.countTotalFeedback=function(){var e=t.state;return e.good+e.neutral+e.bad},t.countPositiveFeedbackPercentage=function(){var e=t.state.good,n=Object(u.a)(t).countTotalFeedback;return e>0?Math.round(e/n()*100):0},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.good,n=t.neutral,a=t.bad,c=this.onLeaveFeedback,o=this.countTotalFeedback,s=this.countPositiveFeedbackPercentage;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(N,{title:"Please leave feedback",children:Object(h.jsx)(g,{options:Object.keys(this.state),onLeaveFeedback:c})}),Object(h.jsx)(N,{title:"Statistics",children:o()?Object(h.jsx)(f,{good:e,neutral:n,bad:a,total:o(),positivePercentage:s()}):Object(h.jsx)(_,{message:"No feedback given"})})]})}}]),n}(a.Component),P=S;s.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(P,{})}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.2c4f6398.chunk.js.map