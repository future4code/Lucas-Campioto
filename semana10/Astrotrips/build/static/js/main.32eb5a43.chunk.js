(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{229:function(e,a,t){e.exports=t(368)},368:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),r=t(20),i=t.n(r),l=t(19),c=t(140),u=t(30),p=t(92),m=t(141),s=t.n(m),v=Object(u.createMuiTheme)({palette:{primary:s.a}}),E=t(22),d=t(62),b=t(32),g=t(23),h=t(24),f=t(26),O=t(25),j=t(27),S=t(16),y=t(50),C=t.n(y),T=t(57),w=t.n(T),M=t(17),I=t(44),P=t.n(I),B=t(59),A=t(60),L=t.n(A),D=t(18);function k(){var e=Object(S.a)(["\n  width: 100%;\n  height: 100vh;\n  gap: 10px;\n  place-content: center;\n  justify-items: center;\n  display: grid;\n"]);return k=function(){return e},e}var N=M.a.form(k()),G=function(e){function a(e){var t;return Object(g.a)(this,a),(t=Object(f.a)(this,Object(O.a)(a).call(this,e))).handleFieldChange=function(e){t.setState(Object(b.a)({},e.target.name,e.target.value))},t.handleLoginButton=function(){t.props.login(t.state.email,t.state.password)},t.state={email:"",password:""},t}return Object(j.a)(a,e),Object(h.a)(a,[{key:"render",value:function(){var e=this.state,a=e.email,t=e.password;return o.a.createElement(N,null,o.a.createElement(C.a,{onChange:this.handleFieldChange,name:"email",type:"email",label:"E-mail",value:a}),o.a.createElement(C.a,{onChange:this.handleFieldChange,name:"password",type:"password",label:"Password",value:t}),o.a.createElement(w.a,{onClick:this.handleLoginButton},"Login"))}}]),a}(n.Component),x=Object(l.c)(null,function(e){return{login:function(a,t){return e(function(e,a){return function(){var t=Object(B.a)(P.a.mark(function t(n){var o,r;return P.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return o={email:e,password:a},t.prev=1,t.next=4,L.a.post("https://us-central1-missao-newton.cloudfunctions.net/futureX/lucas/login",o);case 4:r=t.sent,window.localStorage.setItem("token",r.data.token),n(Object(D.d)(we.tripList)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),window.alert("Login Invalido");case 12:case"end":return t.stop()}},t,null,[[1,9]])}));return function(e){return t.apply(this,arguments)}}()}(a,t))}}})(G);function q(){var e=Object(S.a)(["\nfont-weight:bold;\ncolor:\t#FF4500;\nmargin-bottom:30px;\n"]);return q=function(){return e},e}function F(){var e=Object(S.a)(["\nfont-size:45px;\n"]);return F=function(){return e},e}function R(){var e=Object(S.a)(["\nborder:none;\ncursor:pointer;\nmargin-right:15px;\nwidth:auto;\npadding:10px;\nbackground-color: black;\ncolor: white;\nfont-weight:bold;\n:hover{\n    background-color:#98FB98;\n    color:black;\n    font-weight:bold;\n}\n"]);return R=function(){return e},e}function V(){var e=Object(S.a)(["\ntext-align:center;\nmargin:100px auto;\nfont-family: 'Roboto', sans-serif;\n"]);return V=function(){return e},e}var z=M.a.div(V()),U=M.a.button(R()),H=M.a.h1(F()),J=M.a.p(q()),_=function(e){function a(e){var t;return Object(g.a)(this,a),(t=Object(f.a)(this,Object(O.a)(a).call(this,e))).state={},t}return Object(j.a)(a,e),Object(h.a)(a,[{key:"render",value:function(){return o.a.createElement(z,null,o.a.createElement(H,null,"Seja Bem-Vindo!"),o.a.createElement(J,null,"Escolha o que deseja fazer"),o.a.createElement(U,{onClick:this.props.goToLoginPage},"Login"),o.a.createElement(U,{onClick:this.props.goToAppForm},"Cadastro"),o.a.createElement(U,{onClick:this.props.goToCreateTrip},"Criar Nova Viagem"),o.a.createElement(U,{onClick:this.props.goToTripDetails},"Detalhes das Viagens"),o.a.createElement(U,{onClick:this.props.goToTriList},"Lista de Viagens"))}}]),a}(o.a.Component);var Z=Object(l.c)(null,function(e){return{goToAppForm:function(){return e(Object(D.d)(we.applicationForm))},goToLoginPage:function(){return e(Object(D.d)(we.login))},goToCreateTrip:function(){return e(Object(D.d)(we.createNewTrips))},goToTripDetails:function(){return e(Object(D.d)(we.tripDetails))},goToTriList:function(){return e(Object(D.d)(we.tripList))}}})(_);function K(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,n)}return t}function X(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?K(t,!0).forEach(function(a){Object(b.a)(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):K(t).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}function Q(){var e=Object(S.a)(["\nborder:none;\ncursor:pointer;\nmargin-top:20px;\nwidth:auto;\npadding:10px;\nbackground-color: black;\ncolor: white;\n"]);return Q=function(){return e},e}function W(){var e=Object(S.a)(["\nmargin-bottom:10px;\n"]);return W=function(){return e},e}function $(){var e=Object(S.a)(["\ntext-align:center;\nmargin: 100px auto;\nfont-family: 'Roboto', sans-serif;\n"]);return $=function(){return e},e}var Y=[{name:"username",type:"text",label:"Nome",required:!0,pattern:"[a-zA-z]{3,}"},{name:"age",type:"number",label:"Idade",required:!0,pattern:"[0-9]+$",min:"18"},{name:"applicationText",type:"text",label:"Descri\xe7\xe3o",required:!0,pattern:"[A-Za-z\xe1\xe0\xe2\xe3\xe9\xe8\xea\xed\xef\xf3\xf4\xf5\xf6\xfa\xe7\xf1\xc1\xc0\xc2\xc3\xc9\xc8\xcd\xcf\xd3\xd4\xd5\xd6\xda\xc7\xd1 ]{30,}"},{name:"profession",type:"text",label:"Profiss\xe3o",required:!0,pattern:"[A-Za-z\xe1\xe0\xe2\xe3\xe9\xe8\xea\xed\xef\xf3\xf4\xf5\xf6\xfa\xe7\xf1\xc1\xc0\xc2\xc3\xc9\xc8\xcd\xcf\xd3\xd4\xd5\xd6\xda\xc7\xd1 ]{10,}"}],ee=M.a.div($()),ae=M.a.input(W()),te=M.a.button(Q()),ne=function(e){function a(e){var t;return Object(g.a)(this,a),(t=Object(f.a)(this,Object(O.a)(a).call(this,e))).handleInputChange=function(e){var a=e.target,n=a.name,o=a.value;t.setState({form:X({},t.state.form,Object(b.a)({},n,o))})},t.handleOnSubmit=function(e){e.preventDefault(),console.log(t.state.form)},t.state={form:{}},t}return Object(j.a)(a,e),Object(h.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement(ee,null,o.a.createElement("h2",null,"Cadastre-se para viajar"),o.a.createElement("form",{onSubmit:this.handleOnSubmit},Y.map(function(a){return o.a.createElement("div",{key:a.name},o.a.createElement("label",{htmlFor:a.name},a.label,": "),o.a.createElement(ae,{id:a.name,name:a.name,type:a.type,value:e.state.form[a.name]||"",required:a.required,onChange:e.handleInputChange,pattern:a.pattern}))}),o.a.createElement("label",null,"Escolha o pais: "),o.a.createElement("select",{name:"paises",id:"paises"},o.a.createElement("option",{value:"Brasil",selected:"selected"},"Brasil"),o.a.createElement("option",{value:"Afeganist\xe3o"},"Afeganist\xe3o"),o.a.createElement("option",{value:"\xc1frica do Sul"},"\xc1frica do Sul"),o.a.createElement("option",{value:"Alb\xe2nia"},"Alb\xe2nia"),o.a.createElement("option",{value:"Alemanha"},"Alemanha"),o.a.createElement("option",{value:"Andorra"},"Andorra"),o.a.createElement("option",{value:"Angola"},"Angola"),o.a.createElement("option",{value:"Anguilla"},"Anguilla"),o.a.createElement("option",{value:"Antilhas Holandesas"},"Antilhas Holandesas"),o.a.createElement("option",{value:"Ant\xe1rctida"},"Ant\xe1rctida"),o.a.createElement("option",{value:"Ant\xedgua e Barbuda"},"Ant\xedgua e Barbuda"),o.a.createElement("option",{value:"Argentina"},"Argentina"),o.a.createElement("option",{value:"Arg\xe9lia"},"Arg\xe9lia"),o.a.createElement("option",{value:"Arm\xeania"},"Arm\xeania"),o.a.createElement("option",{value:"Aruba"},"Aruba"),o.a.createElement("option",{value:"Ar\xe1bia Saudita"},"Ar\xe1bia Saudita"),o.a.createElement("option",{value:"Austr\xe1lia"},"Austr\xe1lia"),o.a.createElement("option",{value:"\xc1ustria"},"\xc1ustria"),o.a.createElement("option",{value:"Azerbaij\xe3o"},"Azerbaij\xe3o"),o.a.createElement("option",{value:"Bahamas"},"Bahamas"),o.a.createElement("option",{value:"Bahrein"},"Bahrein"),o.a.createElement("option",{value:"Bangladesh"},"Bangladesh"),o.a.createElement("option",{value:"Barbados"},"Barbados"),o.a.createElement("option",{value:"Belize"},"Belize"),o.a.createElement("option",{value:"Benim"},"Benim"),o.a.createElement("option",{value:"Bermudas"},"Bermudas"),o.a.createElement("option",{value:"Bielorr\xfassia"},"Bielorr\xfassia"),o.a.createElement("option",{value:"Bol\xedvia"},"Bol\xedvia"),o.a.createElement("option",{value:"Botswana"},"Botswana"),o.a.createElement("option",{value:"Brunei"},"Brunei"),o.a.createElement("option",{value:"Bulg\xe1ria"},"Bulg\xe1ria"),o.a.createElement("option",{value:"Burkina Faso"},"Burkina Faso"),o.a.createElement("option",{value:"Burundi"},"Burundi"),o.a.createElement("option",{value:"But\xe3o"},"But\xe3o"),o.a.createElement("option",{value:"B\xe9lgica"},"B\xe9lgica"),o.a.createElement("option",{value:"B\xf3snia e Herzegovina"},"B\xf3snia e Herzegovina"),o.a.createElement("option",{value:"Cabo Verde"},"Cabo Verde"),o.a.createElement("option",{value:"Camar\xf5es"},"Camar\xf5es"),o.a.createElement("option",{value:"Camboja"},"Camboja"),o.a.createElement("option",{value:"Canad\xe1"},"Canad\xe1"),o.a.createElement("option",{value:"Catar"},"Catar"),o.a.createElement("option",{value:"Cazaquist\xe3o"},"Cazaquist\xe3o"),o.a.createElement("option",{value:"Chade"},"Chade"),o.a.createElement("option",{value:"Chile"},"Chile"),o.a.createElement("option",{value:"China"},"China"),o.a.createElement("option",{value:"Chipre"},"Chipre"),o.a.createElement("option",{value:"Col\xf4mbia"},"Col\xf4mbia"),o.a.createElement("option",{value:"Comores"},"Comores"),o.a.createElement("option",{value:"Coreia do Norte"},"Coreia do Norte"),o.a.createElement("option",{value:"Coreia do Sul"},"Coreia do Sul"),o.a.createElement("option",{value:"Costa do Marfim"},"Costa do Marfim"),o.a.createElement("option",{value:"Costa Rica"},"Costa Rica"),o.a.createElement("option",{value:"Cro\xe1cia"},"Cro\xe1cia"),o.a.createElement("option",{value:"Cuba"},"Cuba"),o.a.createElement("option",{value:"Dinamarca"},"Dinamarca"),o.a.createElement("option",{value:"Djibouti"},"Djibouti"),o.a.createElement("option",{value:"Dominica"},"Dominica"),o.a.createElement("option",{value:"Egito"},"Egito"),o.a.createElement("option",{value:"El Salvador"},"El Salvador"),o.a.createElement("option",{value:"Emirados \xc1rabes Unidos"},"Emirados \xc1rabes Unidos"),o.a.createElement("option",{value:"Equador"},"Equador"),o.a.createElement("option",{value:"Eritreia"},"Eritreia"),o.a.createElement("option",{value:"Esc\xf3cia"},"Esc\xf3cia"),o.a.createElement("option",{value:"Eslov\xe1quia"},"Eslov\xe1quia"),o.a.createElement("option",{value:"Eslov\xeania"},"Eslov\xeania"),o.a.createElement("option",{value:"Espanha"},"Espanha"),o.a.createElement("option",{value:"Estados Federados da Micron\xe9sia"},"Estados Federados da Micron\xe9sia"),o.a.createElement("option",{value:"Estados Unidos"},"Estados Unidos"),o.a.createElement("option",{value:"Est\xf4nia"},"Est\xf4nia"),o.a.createElement("option",{value:"Eti\xf3pia"},"Eti\xf3pia"),o.a.createElement("option",{value:"Fiji"},"Fiji"),o.a.createElement("option",{value:"Filipinas"},"Filipinas"),o.a.createElement("option",{value:"Finl\xe2ndia"},"Finl\xe2ndia"),o.a.createElement("option",{value:"Fran\xe7a"},"Fran\xe7a"),o.a.createElement("option",{value:"Gab\xe3o"},"Gab\xe3o"),o.a.createElement("option",{value:"Gana"},"Gana"),o.a.createElement("option",{value:"Ge\xf3rgia"},"Ge\xf3rgia"),o.a.createElement("option",{value:"Gibraltar"},"Gibraltar"),o.a.createElement("option",{value:"Granada"},"Granada"),o.a.createElement("option",{value:"Gronel\xe2ndia"},"Gronel\xe2ndia"),o.a.createElement("option",{value:"Gr\xe9cia"},"Gr\xe9cia"),o.a.createElement("option",{value:"Guadalupe"},"Guadalupe"),o.a.createElement("option",{value:"Guam"},"Guam"),o.a.createElement("option",{value:"Guatemala"},"Guatemala"),o.a.createElement("option",{value:"Guernesei"},"Guernesei"),o.a.createElement("option",{value:"Guiana"},"Guiana"),o.a.createElement("option",{value:"Guiana Francesa"},"Guiana Francesa"),o.a.createElement("option",{value:"Guin\xe9"},"Guin\xe9"),o.a.createElement("option",{value:"Guin\xe9 Equatorial"},"Guin\xe9 Equatorial"),o.a.createElement("option",{value:"Guin\xe9-Bissau"},"Guin\xe9-Bissau"),o.a.createElement("option",{value:"G\xe2mbia"},"G\xe2mbia"),o.a.createElement("option",{value:"Haiti"},"Haiti"),o.a.createElement("option",{value:"Honduras"},"Honduras"),o.a.createElement("option",{value:"Hong Kong"},"Hong Kong"),o.a.createElement("option",{value:"Hungria"},"Hungria"),o.a.createElement("option",{value:"Ilha Bouvet"},"Ilha Bouvet"),o.a.createElement("option",{value:"Ilha de Man"},"Ilha de Man"),o.a.createElement("option",{value:"Ilha do Natal"},"Ilha do Natal"),o.a.createElement("option",{value:"Ilha Heard e Ilhas McDonald"},"Ilha Heard e Ilhas McDonald"),o.a.createElement("option",{value:"Ilha Norfolk"},"Ilha Norfolk"),o.a.createElement("option",{value:"Ilhas Cayman"},"Ilhas Cayman"),o.a.createElement("option",{value:"Ilhas Cocos (Keeling)"},"Ilhas Cocos (Keeling)"),o.a.createElement("option",{value:"Ilhas Cook"},"Ilhas Cook"),o.a.createElement("option",{value:"Ilhas Fero\xe9"},"Ilhas Fero\xe9"),o.a.createElement("option",{value:"Ilhas Ge\xf3rgia do Sul e Sandwich do Sul"},"Ilhas Ge\xf3rgia do Sul e Sandwich do Sul"),o.a.createElement("option",{value:"Ilhas Malvinas"},"Ilhas Malvinas"),o.a.createElement("option",{value:"Ilhas Marshall"},"Ilhas Marshall"),o.a.createElement("option",{value:"Ilhas Menores Distantes dos Estados Unidos"},"Ilhas Menores Distantes dos Estados Unidos"),o.a.createElement("option",{value:"Ilhas Salom\xe3o"},"Ilhas Salom\xe3o"),o.a.createElement("option",{value:"Ilhas Virgens Americanas"},"Ilhas Virgens Americanas"),o.a.createElement("option",{value:"Ilhas Virgens Brit\xe2nicas"},"Ilhas Virgens Brit\xe2nicas"),o.a.createElement("option",{value:"Ilhas \xc5land"},"Ilhas \xc5land"),o.a.createElement("option",{value:"Indon\xe9sia"},"Indon\xe9sia"),o.a.createElement("option",{value:"Inglaterra"},"Inglaterra"),o.a.createElement("option",{value:"\xcdndia"},"\xcdndia"),o.a.createElement("option",{value:"Iraque"},"Iraque"),o.a.createElement("option",{value:"Irlanda do Norte"},"Irlanda do Norte"),o.a.createElement("option",{value:"Irlanda"},"Irlanda"),o.a.createElement("option",{value:"Ir\xe3"},"Ir\xe3"),o.a.createElement("option",{value:"Isl\xe2ndia"},"Isl\xe2ndia"),o.a.createElement("option",{value:"Israel"},"Israel"),o.a.createElement("option",{value:"It\xe1lia"},"It\xe1lia"),o.a.createElement("option",{value:"I\xeamen"},"I\xeamen"),o.a.createElement("option",{value:"Jamaica"},"Jamaica"),o.a.createElement("option",{value:"Jap\xe3o"},"Jap\xe3o"),o.a.createElement("option",{value:"Jersey"},"Jersey"),o.a.createElement("option",{value:"Jord\xe2nia"},"Jord\xe2nia"),o.a.createElement("option",{value:"Kiribati"},"Kiribati"),o.a.createElement("option",{value:"Kuwait"},"Kuwait"),o.a.createElement("option",{value:"Laos"},"Laos"),o.a.createElement("option",{value:"Lesoto"},"Lesoto"),o.a.createElement("option",{value:"Let\xf4nia"},"Let\xf4nia"),o.a.createElement("option",{value:"Lib\xe9ria"},"Lib\xe9ria"),o.a.createElement("option",{value:"Liechtenstein"},"Liechtenstein"),o.a.createElement("option",{value:"Litu\xe2nia"},"Litu\xe2nia"),o.a.createElement("option",{value:"Luxemburgo"},"Luxemburgo"),o.a.createElement("option",{value:"L\xedbano"},"L\xedbano"),o.a.createElement("option",{value:"L\xedbia"},"L\xedbia"),o.a.createElement("option",{value:"Macau"},"Macau"),o.a.createElement("option",{value:"Maced\xf4nia"},"Maced\xf4nia"),o.a.createElement("option",{value:"Madag\xe1scar"},"Madag\xe1scar"),o.a.createElement("option",{value:"Malawi"},"Malawi"),o.a.createElement("option",{value:"Maldivas"},"Maldivas"),o.a.createElement("option",{value:"Mali"},"Mali"),o.a.createElement("option",{value:"Malta"},"Malta"),o.a.createElement("option",{value:"Mal\xe1sia"},"Mal\xe1sia"),o.a.createElement("option",{value:"Marianas Setentrionais"},"Marianas Setentrionais"),o.a.createElement("option",{value:"Marrocos"},"Marrocos"),o.a.createElement("option",{value:"Martinica"},"Martinica"),o.a.createElement("option",{value:"Maurit\xe2nia"},"Maurit\xe2nia"),o.a.createElement("option",{value:"Maur\xedcia"},"Maur\xedcia"),o.a.createElement("option",{value:"Mayotte"},"Mayotte"),o.a.createElement("option",{value:"Mold\xe1via"},"Mold\xe1via"),o.a.createElement("option",{value:"Mong\xf3lia"},"Mong\xf3lia"),o.a.createElement("option",{value:"Montenegro"},"Montenegro"),o.a.createElement("option",{value:"Montserrat"},"Montserrat"),o.a.createElement("option",{value:"Mo\xe7ambique"},"Mo\xe7ambique"),o.a.createElement("option",{value:"Myanmar"},"Myanmar"),o.a.createElement("option",{value:"M\xe9xico"},"M\xe9xico"),o.a.createElement("option",{value:"M\xf4naco"},"M\xf4naco"),o.a.createElement("option",{value:"Nam\xedbia"},"Nam\xedbia"),o.a.createElement("option",{value:"Nauru"},"Nauru"),o.a.createElement("option",{value:"Nepal"},"Nepal"),o.a.createElement("option",{value:"Nicar\xe1gua"},"Nicar\xe1gua"),o.a.createElement("option",{value:"Nig\xe9ria"},"Nig\xe9ria"),o.a.createElement("option",{value:"Niue"},"Niue"),o.a.createElement("option",{value:"Noruega"},"Noruega"),o.a.createElement("option",{value:"Nova Caled\xf4nia"},"Nova Caled\xf4nia"),o.a.createElement("option",{value:"Nova Zel\xe2ndia"},"Nova Zel\xe2ndia"),o.a.createElement("option",{value:"N\xedger"},"N\xedger"),o.a.createElement("option",{value:"Om\xe3"},"Om\xe3"),o.a.createElement("option",{value:"Palau"},"Palau"),o.a.createElement("option",{value:"Palestina"},"Palestina"),o.a.createElement("option",{value:"Panam\xe1"},"Panam\xe1"),o.a.createElement("option",{value:"Papua-Nova Guin\xe9"},"Papua-Nova Guin\xe9"),o.a.createElement("option",{value:"Paquist\xe3o"},"Paquist\xe3o"),o.a.createElement("option",{value:"Paraguai"},"Paraguai"),o.a.createElement("option",{value:"Pa\xeds de Gales"},"Pa\xeds de Gales"),o.a.createElement("option",{value:"Pa\xedses Baixos"},"Pa\xedses Baixos"),o.a.createElement("option",{value:"Peru"},"Peru"),o.a.createElement("option",{value:"Pitcairn"},"Pitcairn"),o.a.createElement("option",{value:"Polin\xe9sia Francesa"},"Polin\xe9sia Francesa"),o.a.createElement("option",{value:"Pol\xf4nia"},"Pol\xf4nia"),o.a.createElement("option",{value:"Porto Rico"},"Porto Rico"),o.a.createElement("option",{value:"Portugal"},"Portugal"),o.a.createElement("option",{value:"Quirguist\xe3o"},"Quirguist\xe3o"),o.a.createElement("option",{value:"Qu\xeania"},"Qu\xeania"),o.a.createElement("option",{value:"Reino Unido"},"Reino Unido"),o.a.createElement("option",{value:"Rep\xfablica Centro-Africana"},"Rep\xfablica Centro-Africana"),o.a.createElement("option",{value:"Rep\xfablica Checa"},"Rep\xfablica Checa"),o.a.createElement("option",{value:"Rep\xfablica Democr\xe1tica do Congo"},"Rep\xfablica Democr\xe1tica do Congo"),o.a.createElement("option",{value:"Rep\xfablica do Congo"},"Rep\xfablica do Congo"),o.a.createElement("option",{value:"Rep\xfablica Dominicana"},"Rep\xfablica Dominicana"),o.a.createElement("option",{value:"Reuni\xe3o"},"Reuni\xe3o"),o.a.createElement("option",{value:"Rom\xeania"},"Rom\xeania"),o.a.createElement("option",{value:"Ruanda"},"Ruanda"),o.a.createElement("option",{value:"R\xfassia"},"R\xfassia"),o.a.createElement("option",{value:"Saara Ocidental"},"Saara Ocidental"),o.a.createElement("option",{value:"Saint Martin"},"Saint Martin"),o.a.createElement("option",{value:"Saint-Barth\xe9lemy"},"Saint-Barth\xe9lemy"),o.a.createElement("option",{value:"Saint-Pierre e Miquelon"},"Saint-Pierre e Miquelon"),o.a.createElement("option",{value:"Samoa Americana"},"Samoa Americana"),o.a.createElement("option",{value:"Samoa"},"Samoa"),o.a.createElement("option",{value:"Santa Helena, Ascens\xe3o e Trist\xe3o da Cunha"},"Santa Helena, Ascens\xe3o e Trist\xe3o da Cunha"),o.a.createElement("option",{value:"Santa L\xfacia"},"Santa L\xfacia"),o.a.createElement("option",{value:"Senegal"},"Senegal"),o.a.createElement("option",{value:"Serra Leoa"},"Serra Leoa"),o.a.createElement("option",{value:"Seychelles"},"Seychelles"),o.a.createElement("option",{value:"Singapura"},"Singapura"),o.a.createElement("option",{value:"Som\xe1lia"},"Som\xe1lia"),o.a.createElement("option",{value:"Sri Lanka"},"Sri Lanka"),o.a.createElement("option",{value:"Suazil\xe2ndia"},"Suazil\xe2ndia"),o.a.createElement("option",{value:"Sud\xe3o"},"Sud\xe3o"),o.a.createElement("option",{value:"Suriname"},"Suriname"),o.a.createElement("option",{value:"Su\xe9cia"},"Su\xe9cia"),o.a.createElement("option",{value:"Su\xed\xe7a"},"Su\xed\xe7a"),o.a.createElement("option",{value:"Svalbard e Jan Mayen"},"Svalbard e Jan Mayen"),o.a.createElement("option",{value:"S\xe3o Crist\xf3v\xe3o e Nevis"},"S\xe3o Crist\xf3v\xe3o e Nevis"),o.a.createElement("option",{value:"S\xe3o Marino"},"S\xe3o Marino"),o.a.createElement("option",{value:"S\xe3o Tom\xe9 e Pr\xedncipe"},"S\xe3o Tom\xe9 e Pr\xedncipe"),o.a.createElement("option",{value:"S\xe3o Vicente e Granadinas"},"S\xe3o Vicente e Granadinas"),o.a.createElement("option",{value:"S\xe9rvia"},"S\xe9rvia"),o.a.createElement("option",{value:"S\xedria"},"S\xedria"),o.a.createElement("option",{value:"Tadjiquist\xe3o"},"Tadjiquist\xe3o"),o.a.createElement("option",{value:"Tail\xe2ndia"},"Tail\xe2ndia"),o.a.createElement("option",{value:"Taiwan"},"Taiwan"),o.a.createElement("option",{value:"Tanz\xe2nia"},"Tanz\xe2nia"),o.a.createElement("option",{value:"Terras Austrais e Ant\xe1rticas Francesas"},"Terras Austrais e Ant\xe1rticas Francesas"),o.a.createElement("option",{value:"Territ\xf3rio Brit\xe2nico do Oceano \xcdndico"},"Territ\xf3rio Brit\xe2nico do Oceano \xcdndico"),o.a.createElement("option",{value:"Timor-Leste"},"Timor-Leste"),o.a.createElement("option",{value:"Togo"},"Togo"),o.a.createElement("option",{value:"Tonga"},"Tonga"),o.a.createElement("option",{value:"Toquelau"},"Toquelau"),o.a.createElement("option",{value:"Trinidad e Tobago"},"Trinidad e Tobago"),o.a.createElement("option",{value:"Tun\xedsia"},"Tun\xedsia"),o.a.createElement("option",{value:"Turcas e Caicos"},"Turcas e Caicos"),o.a.createElement("option",{value:"Turquemenist\xe3o"},"Turquemenist\xe3o"),o.a.createElement("option",{value:"Turquia"},"Turquia"),o.a.createElement("option",{value:"Tuvalu"},"Tuvalu"),o.a.createElement("option",{value:"Ucr\xe2nia"},"Ucr\xe2nia"),o.a.createElement("option",{value:"Uganda"},"Uganda"),o.a.createElement("option",{value:"Uruguai"},"Uruguai"),o.a.createElement("option",{value:"Uzbequist\xe3o"},"Uzbequist\xe3o"),o.a.createElement("option",{value:"Vanuatu"},"Vanuatu"),o.a.createElement("option",{value:"Vaticano"},"Vaticano"),o.a.createElement("option",{value:"Venezuela"},"Venezuela"),o.a.createElement("option",{value:"Vietname"},"Vietname"),o.a.createElement("option",{value:"Wallis e Futuna"},"Wallis e Futuna"),o.a.createElement("option",{value:"Zimbabwe"},"Zimbabwe"),o.a.createElement("option",{value:"Z\xe2mbia"},"Z\xe2mbia")),o.a.createElement("div",null,o.a.createElement(te,{type:"submit"},"Enviar"))))}}]),a}(n.Component);function oe(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,n)}return t}var re={allTrips:[]},ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_TRIPS":return function(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?oe(t,!0).forEach(function(a){Object(b.a)(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):oe(t).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}({},e,{allTrips:a.payload.allTrips});default:return e}};function le(){var e=Object(S.a)(["\ntext-align:center;\nmargin:100px auto;\nfont-family: 'Roboto', sans-serif;\n"]);return le=function(){return e},e}var ce=M.a.div(le()),ue=function(e){function a(e){var t;return Object(g.a)(this,a),(t=Object(f.a)(this,Object(O.a)(a).call(this,e))).state={},t}return Object(j.a)(a,e),Object(h.a)(a,[{key:"componentDidMount",value:function(){null===localStorage.getItem("token")&&(this.props.goToLoginPage(),window.alert("\xc1rea restrita. Fa\xe7a seu login")),this.props.getTrips()}},{key:"render",value:function(){return o.a.createElement(ce,null,o.a.createElement("h1",null,"Lista de Viagens"),this.props.getToTrips.map(function(e){return o.a.createElement("p",null,e.name)}))}}]),a}(o.a.Component),pe=Object(l.c)(function(e){return{getToTrips:e.trips.allTrips}},function(e){return{getTrips:function(){return e(function(){var e=Object(B.a)(P.a.mark(function e(a,t){var n;return P.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.a.get("https://us-central1-missao-newton.cloudfunctions.net/futureX/lucas/trips");case 2:n=e.sent,a({type:"SET_TRIPS",payload:{allTrips:n.data.trips}});case 4:case"end":return e.stop()}},e)}));return function(a,t){return e.apply(this,arguments)}}())},goToLoginPage:function(){return e(Object(D.d)(we.login))}}})(ue);function me(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,n)}return t}function se(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?me(t,!0).forEach(function(a){Object(b.a)(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):me(t).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}function ve(){var e=Object(S.a)(["\nborder:none;\ncursor:pointer;\nmargin-top:20px;\nwidth:auto;\npadding:10px;\nbackground-color: black;\ncolor: white;\n"]);return ve=function(){return e},e}function Ee(){var e=Object(S.a)(["\nmargin-bottom:10px;\n"]);return Ee=function(){return e},e}function de(){var e=Object(S.a)(["\ntext-align:center;\nmargin: 100px auto;\nfont-family: 'Roboto', sans-serif;\n"]);return de=function(){return e},e}var be=[{name:"username",type:"text",label:"Nome",required:!0,pattern:"{A-Za-z}{5,}"},{name:"date",type:"date",label:"Data",required:!0},{name:"description",type:"text",label:"Descri\xe7\xe3o",required:!0,pattern:"[A-Za-z\xe1\xe0\xe2\xe3\xe9\xe8\xea\xed\xef\xf3\xf4\xf5\xf6\xfa\xe7\xf1\xc1\xc0\xc2\xc3\xc9\xc8\xcd\xcf\xd3\xd4\xd5\xd6\xda\xc7\xd1 ]{30,}"},{name:"durationDays",type:"number",label:"Dura\xe7\xe3o da Viagem",required:!0,pattern:"[0-9]+$",min:"50"}],ge=M.a.div(de()),he=M.a.input(Ee()),fe=M.a.button(ve()),Oe=function(e){function a(e){var t;return Object(g.a)(this,a),(t=Object(f.a)(this,Object(O.a)(a).call(this,e))).handleInputChange=function(e){var a=e.target,n=a.name,o=a.value;t.setState({form:se({},t.state.form,Object(b.a)({},n,o))})},t.handleOnSubmit=function(e){e.preventDefault(),console.log(t.state.form)},t.state={form:{}},t}return Object(j.a)(a,e),Object(h.a)(a,[{key:"componentDidMount",value:function(){null===localStorage.getItem("token")&&(this.props.goToLoginPage(),window.alert("\xc1rea restrita. Fa\xe7a seu login"))}},{key:"render",value:function(){var e=this;return o.a.createElement(ge,null,o.a.createElement("h2",null,"Criar nova Viagem"),o.a.createElement("form",{onSubmit:this.handleOnSubmit},be.map(function(a){return o.a.createElement("div",{key:a.name},o.a.createElement("label",{htmlFor:a.name},a.label,": "),o.a.createElement(he,{id:a.name,name:a.name,type:a.type,value:e.state.form[a.name]||"",required:a.required,onChange:e.handleInputChange,pattern:a.pattern}))}),o.a.createElement("label",null,"Escolha o planeta: "),o.a.createElement("select",{name:"paises",id:"paises"},o.a.createElement("option",{value:"Mercurio",selected:"selected"},"Mercurio"),o.a.createElement("option",{value:"Venus",selected:"selected"},"V\xeanus"),o.a.createElement("option",{value:"Terra",selected:"selected"},"Terra"),o.a.createElement("option",{value:"Marte",selected:"selected"},"Marte"),o.a.createElement("option",{value:"Jupiter",selected:"selected"},"J\xfapiter"),o.a.createElement("option",{value:"Saturno",selected:"selected"},"Saturno"),o.a.createElement("option",{value:"Urano",selected:"selected"},"Urano"),o.a.createElement("option",{value:"Netuno",selected:"selected"},"Netuno")),o.a.createElement("div",null,o.a.createElement(fe,{type:"submit"},"Enviar"))))}}]),a}(n.Component);var je=Object(l.c)(null,function(e){return{goToLoginPage:function(){return e(Object(D.d)(we.login))}}})(Oe);function Se(){var e=Object(S.a)(["\ntext-align:center;\nmargin: 100px auto;\n"]);return Se=function(){return e},e}var ye=M.a.div(Se()),Ce=function(e){function a(e){var t;return Object(g.a)(this,a),(t=Object(f.a)(this,Object(O.a)(a).call(this,e))).state={form:{}},t}return Object(j.a)(a,e),Object(h.a)(a,[{key:"componentDidMount",value:function(){null===localStorage.getItem("token")&&(this.props.goToLoginPage(),window.alert("\xc1rea restrita. Fa\xe7a seu login"))}},{key:"render",value:function(){return o.a.createElement(ye,null,o.a.createElement("h2",null,"Detalhes das Viagens"))}}]),a}(n.Component);var Te=Object(l.c)(null,function(e){return{goToLoginPage:function(){return e(Object(D.d)(we.login))}}})(Ce),we={root:"/",applicationForm:"/application-form",login:"/login",createNewTrips:"/trips/create",tripList:"/trips/list",tripDetails:"/trips/datails"};var Me=function(e){return o.a.createElement(E.a,{history:e.history},o.a.createElement(d.c,null,o.a.createElement(d.a,{exact:!0,path:we.root,component:Z}),o.a.createElement(d.a,{path:we.login,component:x}),o.a.createElement(d.a,{path:we.applicationForm,component:ne}),o.a.createElement(d.a,{path:we.createNewTrips,component:je}),o.a.createElement(d.a,{path:we.tripList,component:pe}),o.a.createElement(d.a,{path:we.tripDetails,component:Te})))},Ie=t(28),Pe=t(29),Be=function(e){return Object(Pe.c)({router:Object(E.b)(e),trips:ie})},Ae=t(137),Le=Object(Ie.a)(),De=[Object(Pe.a)(Object(Ae.a)(Le),c.a),window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__():function(e){return e}],ke=Object(Pe.e)(Be(Le),Pe.d.apply(void 0,De)),Ne=function(){return o.a.createElement(l.a,{store:ke},o.a.createElement(u.MuiThemeProvider,{theme:v},o.a.createElement(p.a,null),o.a.createElement(Me,{history:Le})))},Ge=Object(Ie.a)(),xe=(Object(Pe.e)(Be(Ge),Object(Pe.a)(Object(Ae.a)(Ge))),document.getElementById("root"));i.a.render(o.a.createElement(Ne,null),xe)}},[[229,1,2]]]);
//# sourceMappingURL=main.32eb5a43.chunk.js.map