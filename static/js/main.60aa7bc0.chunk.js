(this.webpackJsonpsolpique=this.webpackJsonpsolpique||[]).push([[0],{131:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return s})),n.d(t,"c",(function(){return b})),n.d(t,"b",(function(){return g}));var r=n(29),c=n(8),a=n(3),o=n.n(a),i=n(58);function s(e,t,n){return u.apply(this,arguments)}function u(){return(u=Object(c.a)(o.a.mark((function e(t,n,r){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=n.map((function(e,t){var n=e.publicKey.toBase58();return{account:e,id:t,link:b(n),lamports:e.lamports}})),l(t,c,r),e.abrupt("return",c);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e,t,n){return d.apply(this,arguments)}function d(){return(d=Object(c.a)(o.a.mark((function e(t,n,c){var a,i,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=Object(r.a)(n),e.prev=1,a.s();case 3:if((i=a.n()).done){e.next=9;break}return s=i.value,e.next=7,h(t,s);case 7:e.next=3;break;case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),a.e(e.t0);case 14:return e.prev=14,a.f(),e.finish(14);case 17:c(n);case 18:case"end":return e.stop()}}),e,null,[[1,11,14,17]])})))).apply(this,arguments)}function b(e){return"https://solscan.io/address/"+e}var p=new i.d.PublicKey("metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s");function f(e){return j.apply(this,arguments)}function j(){return(j=Object(c.a)(o.a.mark((function t(n){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.d.PublicKey.findProgramAddress([e.from("metadata"),p.toBuffer(),n.toBuffer()],p);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(e,t){return m.apply(this,arguments)}function m(){return(m=Object(c.a)(o.a.mark((function e(t,n){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f(n.account.mint);case 2:return r=e.sent,n.metadata=r,e.next=6,x(t,r);case 6:n.name=e.sent,console.log(r.toBase58()+" "+n.name);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e,t){return O.apply(this,arguments)}function O(){return(O=Object(c.a)(o.a.mark((function e(t,n){var r,c,a,i,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getAccountInfo(n);case 2:if(!(r=e.sent)){e.next=16;break}c=r.data.slice(69,101),a=r.data.readUInt32LE(65),i="",s=0;case 8:if(!(s<a)){e.next=15;break}if(0!==c.readUInt8(s)){e.next=11;break}return e.abrupt("break",15);case 11:i+=String.fromCharCode(c.readUInt8(s));case 12:s++,e.next=8;break;case 15:return e.abrupt("return",i);case 16:return e.abrupt("return",void 0);case 17:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e,t){return e.filter((function(e){return!t||t.includes(e.id)})).map((function(e){return e.account.publicKey}))}}).call(this,n(25).Buffer)},285:function(e,t,n){},286:function(e,t){},287:function(e,t){},315:function(e,t){},316:function(e,t){},347:function(e){e.exports=JSON.parse('{"version":"0.1.0","name":"frcnt","instructions":[{"name":"initialize","accounts":[{"name":"feecntrAccount","isMut":true,"isSigner":true},{"name":"user","isMut":true,"isSigner":true},{"name":"systemProgram","isMut":false,"isSigner":false}],"args":[]},{"name":"count","accounts":[{"name":"feecntrAccount","isMut":true,"isSigner":false},{"name":"instructionSysvarAccount","isMut":false,"isSigner":false}],"args":[]}],"accounts":[{"name":"FeeCounter","type":{"kind":"struct","fields":[{"name":"closedAccounts","type":"u64"}]}}],"metadata":{"address":"FrctRs3dZ7E234V5DMJLMUvnPkjANWQoaZDRm9rebjC2"}}')},352:function(e,t,n){},353:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(34),o=n.n(a),i=(n(285),n(58)),s=n(15),u=n(462),l=n(463),d=n(464),b=n(450),p=n(451),f=n(465),j=n(459),h=n(160),m=n(250),x=n(452),O=n(30),g=n(29),v=n(8),y=n(6),k=n(48),w=n(3),S=n.n(w),A=n(444),C=n(435),P=n(460),R=n(130),K=n(456),M=n(455),T=n(445),E=n(453),I=n(234),B=n(131),L=n(165),N=.00203928;function U(e){return e.map((function(e){return e.lamports})).reduce((function(e,t){return e+t}),0)/s.LAMPORTS_PER_SOL}function D(e){return e.map((function(e){return e.publicKey}))}function F(e,t){return q.apply(this,arguments)}function q(){return(q=Object(v.a)(S.a.mark((function e(t,n){var r,c;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getAccountInfo(n);case 2:if((r=e.sent)&&r.data){e.next=6;break}return console.log("Could not get account info for "+n.toBase58()),e.abrupt("return",null);case 6:return c=r.data.readInt32LE(8),e.abrupt("return",{totalCloses:c,totalSolRedeemed:N*c});case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(e,t){return W.apply(this,arguments)}function W(){return(W=Object(v.a)(S.a.mark((function e(t,n){var r,c,a,o,i,u,l,d,b,p,f;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getTokenAccountsByOwner(n,{programId:L.a});case 2:r=e.sent,c=[],a=Object(g.a)(r.value),e.prev=5,a.s();case 7:if((o=a.n()).done){e.next=28;break}if(i=o.value,u=!1,l=64,!i.account.data.readBigUInt64LE){e.next=16;break}d=i.account.data.readBigUInt64LE(l),u=0n===d,e.next=25;break;case 16:u=!0,b=0;case 18:if(!(b<8)){e.next=25;break}if(0===i.account.data[l+b]){e.next=22;break}return u=!1,e.abrupt("break",25);case 22:b++,e.next=18;break;case 25:u&&(p=new s.PublicKey(i.account.data.slice(0,32)),f={publicKey:i.pubkey,lamports:i.account.lamports,mint:p},c.push(f));case 26:e.next=7;break;case 28:e.next=33;break;case 30:e.prev=30,e.t0=e.catch(5),a.e(e.t0);case 33:return e.prev=33,a.f(),e.finish(33);case 36:return e.abrupt("return",c);case 37:case"end":return e.stop()}}),e,null,[[5,30,33,36]])})))).apply(this,arguments)}function Y(e,t,n,r,c,a){return J.apply(this,arguments)}function J(){return(J=Object(v.a)(S.a.mark((function e(t,n,r,c,a,o){var u,l,d,b,p,f,j,h,m;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:u=n.map((function(e){return L.b.createCloseAccountInstruction(L.a,e,t,t,[])})),l=[];case 2:if(!(u.length>0)){e.next=20;break}d=new s.Transaction,b=0;case 5:if(!(b<15)){e.next=15;break}if(!(p=u.pop())){e.next=11;break}d.add(p),e.next=12;break;case 11:return e.abrupt("break",15);case 12:b++,e.next=5;break;case 15:a&&o&&(f=d.instructions.length,j=N*f*a/100,h=s.SystemProgram.transfer({fromPubkey:t,toPubkey:o,lamports:s.LAMPORTS_PER_SOL*j}),d.add(h)),r&&c&&(m=c.instruction.count({accounts:{feecntrAccount:r,instructionSysvarAccount:i.d.SYSVAR_INSTRUCTIONS_PUBKEY}}),d.add(m)),l.push(d),e.next=2;break;case 20:return e.abrupt("return",l);case 21:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Q,Z,H,V=n(438),z=n(436),G=n(1),X=function(e){var t=e.emptyAccounts,n=(e.totalRedemptions,t?Math.ceil((null===t||void 0===t?void 0:t.length)/15):0);return Object(G.jsx)(V.a,{container:!0,direction:"row",justifyContent:"center",wrap:"nowrap",children:Object(G.jsx)(V.a,{container:!0,direction:"row",wrap:"nowrap",children:t&&Object(G.jsxs)(V.a,{container:!0,direction:"row",wrap:"nowrap",children:[Object(G.jsxs)(V.a,{container:!0,direction:"column",children:[Object(G.jsx)(z.a,{variant:"body1",color:"textSecondary",children:"Empty Accounts"}),Object(G.jsx)(z.a,{variant:"h6",color:"textPrimary",style:{fontWeight:"bold"},children:"".concat(null===t||void 0===t?void 0:t.length)})]}),Object(G.jsxs)(V.a,{container:!0,direction:"column",children:[Object(G.jsx)(z.a,{variant:"body1",color:"textSecondary",children:"Redeemable"}),Object(G.jsx)(z.a,{variant:"h6",color:"textPrimary",style:{fontWeight:"bold"},children:$(U(t))}),(null===t||void 0===t?void 0:t.length)>0&&Object(G.jsxs)(z.a,{variant:"body2",color:"textSecondary",children:["in ","".concat(n)," transaction",1!==n&&"s"]})]})]})})})},$=function(e){return"\u25ce ".concat(e.toFixed(3))},ee=n(433),te=n(439),ne=Object(R.a)(ee.a)(Q||(Q=Object(k.a)(["\n  width: 100%;\n  height: 60px;\n  margin-top: 10px;\n  margin-bottom: 5px;\n  background: linear-gradient(to bottom right, red, yellow);\n  color: white;\n  font-size: 16px;\n  font-weight: bold;\n"]))),re=function(e){var t=e.onClick,n=e.emptyAccounts,c=Object(r.useState)(!1),a=Object(y.a)(c,2),o=a[0],i=a[1];return Object(G.jsx)(ne,{disabled:o||0===(null===n||void 0===n?void 0:n.length),onClick:Object(v.a)(S.a.mark((function e(){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(!0),e.next=3,t();case 3:i(!1);case 4:case"end":return e.stop()}}),e)}))),variant:"contained",children:o?Object(G.jsx)(te.a,{}):0===(null===n||void 0===n?void 0:n.length)?"NOTHING TO REDEEM":"REDEEM"})},ce=n(466),ae=Object(R.a)(h.a)(Z||(Z=Object(k.a)(["\n  width: 100%;\n  height: 60px;\n  margin-top: 10px;\n  margin-bottom: 5px;\n  background: linear-gradient(to bottom right, red, yellow);\n  color: white;\n  font-size: 16px;\n  font-weight: bold;\n"]))),oe=R.a.div(H||(H=Object(k.a)([""]))),ie=[{field:"id",headerName:"id",width:40},{field:"account",headerName:"address",width:400,renderCell:function(e){var t=e.row.account.publicKey.toBase58();return Object(G.jsx)(ce.a,{href:Object(B.c)(t),target:"_blank",children:t})}},{field:"lamports",headerName:"lamports",width:100},{field:"mint",headerName:"mint",width:400,renderCell:function(e){var t=e.row.account.mint.toBase58();return Object(G.jsx)(ce.a,{href:Object(B.c)(t),target:"_blank",children:t})}},{field:"name",headerName:"name",width:200}],se=function(e){var t=e.connection,c=Object(r.useState)(),a=Object(y.a)(c,2),o=a[0],s=a[1],u=Object(r.useState)(),l=Object(y.a)(u,2),d=l[0],b=l[1],p=Object(r.useState)(),f=Object(y.a)(p,2),j=f[0],h=f[1],m=Object(r.useState)(!1),x=Object(y.a)(m,2),k=x[0],w=x[1],R=Object(r.useState)({open:!1,message:"",severity:void 0}),L=Object(y.a)(R,2),N=L[0],U=L[1],q=Object(r.useState)(),W=Object(y.a)(q,2),J=W[0],Q=W[1],Z=Object(r.useState)(10),H=Object(y.a)(Z,2),V=H[0],z=H[1],$=Object(I.b)(),ee={publicKey:$.publicKey,signAllTransactions:$.signAllTransactions,signTransaction:$.signTransaction},te=new i.b(t,ee,{preflightCommitment:"recent"}),ne=n(347),ce=new i.a(ne,e.frcntrProgramId,te),se=function(){var e=Object(v.a)(S.a.mark((function e(){var n,r,c;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o){e.next=2;break}return e.abrupt("return");case 2:return w(!0),n=function(e){h(void 0),h(e)},e.next=6,Object(B.a)(t,o,n);case 6:(r=e.sent)&&(h(r),c=r.map((function(e){return e.id})),Q(c));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){Object(v.a)(S.a.mark((function n(){var r,c;return S.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if($&&$.publicKey){n.next=2;break}return n.abrupt("return");case 2:return n.next=4,_(t,$.publicKey);case 4:return r=n.sent,s(r),n.next=8,F(t,e.frcntrAccount);case 8:(c=n.sent)&&b(c);case 10:case"end":return n.stop()}}),n)})))()}),[$,t,e.frcntrAccount]);var ue=function(){var n=Object(v.a)(S.a.mark((function n(){var r,c,a,i,s,u,l,d,b,p;return S.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,!($&&$.publicKey&&o&&o.length>0)){n.next=33;break}return r=D(o),c=r,J&&j&&(console.log(J.length+" empty accounts selected."),c=Object(B.b)(j,J)),n.next=7,Y($.publicKey,c,e.frcntrAccount,ce,V,e.donationAddress);case 7:a=n.sent,i=Object(g.a)(a),n.prev=9,i.s();case 11:if((s=i.n()).done){n.next=25;break}return u=s.value,n.next=15,$.sendTransaction(u,t);case 15:return l=n.sent,console.log(l),d=u.instructions.length,console.log("Attempting to close accounts ("+d+" instructions)"),n.next=21,t.confirmTransaction(l,"confirmed");case 21:(b=n.sent).value.err?U({open:!0,message:b.value.err.toString(),severity:"warning"}):U({open:!0,message:"Successfully redeemed some SOL!",severity:"success"});case 23:n.next=11;break;case 25:n.next=30;break;case 27:n.prev=27,n.t0=n.catch(9),i.e(n.t0);case 30:return n.prev=30,i.f(),n.finish(30);case 33:n.next=40;break;case 35:n.prev=35,n.t1=n.catch(0),p=n.t1.msg||"Redeem failed!",console.trace(),U({open:!0,message:p,severity:"error"});case 40:return n.prev=40,n.finish(40);case 42:case"end":return n.stop()}}),n,null,[[0,35,40,42],[9,27,30,33]])})));return function(){return n.apply(this,arguments)}}();return Object(G.jsxs)(A.a,{style:{marginTop:100},children:[Object(G.jsx)(A.a,{maxWidth:"xs",style:{position:"relative"},children:Object(G.jsxs)(C.a,{style:{padding:24,backgroundColor:"#151A1F",borderRadius:6},children:[Object(G.jsx)("h2",{children:"SOLutions Fee Redeemer"}),$.connected?Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)(X,{emptyAccounts:o,totalRedemptions:d}),Object(G.jsxs)(oe,{children:[Object(G.jsxs)(T.a,{spacing:2,direction:"row",alignItems:"center",children:[Object(G.jsx)("p",{children:"Donate:"}),Object(G.jsx)(M.a,{"aria-label":"Donation Percentage",defaultValue:10,step:1,min:0,max:100,onChange:function(e,t){z(t)},color:"primary"}),Object(G.jsxs)("p",{children:[V,"%"]})]}),Object(G.jsx)(re,{emptyAccounts:o,onClick:ue})]})]}):Object(G.jsx)(ae,{children:"Connect Wallet"}),Object(G.jsxs)("p",{style:{color:"gray"},children:["Product by ",Object(G.jsx)("a",{href:"https://twitter.com/solpique",children:"@SolPique"})]}),Object(G.jsxs)("p",{style:{color:"gray"},children:["Powered by ",Object(G.jsx)("a",{href:"https://blockdaemon.com/",children:"BlockDaemon RPC"})]})]})}),k?j&&j.length>0?Object(G.jsxs)("div",{style:{width:"100%"},children:[Object(G.jsx)("br",{}),Object(G.jsx)(E.a,{sx:{color:"white",border:1},autoHeight:!0,rows:j,columns:ie,checkboxSelection:!0,selectionModel:J,onSelectionModelChange:Q})]}):Object(G.jsx)("p",{children:"No empty accounts."}):Object(G.jsx)("p",{onClick:se,style:{color:"lightblue",textAlign:"center",cursor:"pointer"},children:Object(G.jsx)("u",{children:"Show All Empty Accounts"})}),Object(G.jsx)(P.a,{open:N.open,autoHideDuration:6e3,onClose:function(){return U(Object(O.a)(Object(O.a)({},N),{},{open:!1}))},children:Object(G.jsx)(K.a,{onClose:function(){return U(Object(O.a)(Object(O.a)({},N),{},{open:!1}))},severity:N.severity,children:N.message})})]})},ue=Object(m.a)({palette:{type:"dark"}}),le="mainnet-beta",de="https://rpc.ankr.com/solana",be=new i.d.PublicKey("FrctRs3dZ7E234V5DMJLMUvnPkjANWQoaZDRm9rebjC2"),pe=new i.d.PublicKey("CntZ1JuK1kT2VA5QPkQiwU6aYiaPthP9oKeRQ76jYTCb"),fe=new i.d.PublicKey("CNTpku3CKfGR67YaipmYvq1gjHobidjZbcqUPDMGqcKo"),je=new i.d.Connection(de),he=function(){var e=Object(r.useMemo)((function(){return Object(s.clusterApiUrl)(le)}),[]),t=Object(r.useMemo)((function(){return[Object(u.a)(),Object(l.a)(),Object(d.a)(),Object(b.a)({network:le}),Object(p.a)({network:le})]}),[]);return Object(G.jsx)(x.a,{theme:ue,children:Object(G.jsx)(f.a,{endpoint:e,children:Object(G.jsx)(j.a,{wallets:t,autoConnect:!0,children:Object(G.jsx)(h.b,{children:Object(G.jsx)(se,{connection:je,rpcHost:de,frcntrProgramId:be,frcntrAccount:pe,donationAddress:fe})})})})})},me=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,470)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),r(e),c(e),a(e),o(e)}))};n(352);o.a.render(Object(G.jsx)(c.a.StrictMode,{children:Object(G.jsx)(he,{})}),document.getElementById("root")),me()}},[[353,1,2]]]);
//# sourceMappingURL=main.60aa7bc0.chunk.js.map