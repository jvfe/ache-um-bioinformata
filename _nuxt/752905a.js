(window.webpackJsonp=window.webpackJsonp||[]).push([[0,5,7,9,11,12,13,14],{276:function(t,e,n){var content=n(278);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(60).default)("1b19fe7e",content,!0,{sourceMap:!1})},277:function(t,e,n){"use strict";n(276)},278:function(t,e,n){var r=n(59)((function(i){return i[1]}));r.push([t.i,'.lds-dual-ring[data-v-315840e8]{display:inline-block}.lds-dual-ring[data-v-315840e8]:after{content:" ";display:block;border-radius:50%;border-color:#2ba84a transparent;border-style:solid;border-width:6px;-webkit-animation:lds-dual-ring-data-v-315840e8 1.2s linear infinite;animation:lds-dual-ring-data-v-315840e8 1.2s linear infinite}@-webkit-keyframes lds-dual-ring-data-v-315840e8{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes lds-dual-ring-data-v-315840e8{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}',""]),r.locals={},t.exports=r},279:function(t,e,n){"use strict";n.r(e);n(277);var r=n(14),component=Object(r.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("span",{staticClass:"lds-dual-ring"})}),[],!1,null,"315840e8",null);e.default=component.exports},280:function(t,e,n){"use strict";n.d(e,"c",(function(){return f})),n.d(e,"d",(function(){return v})),n.d(e,"a",(function(){return w})),n.d(e,"b",(function(){return m}));var r=n(9),l=(n(46),n(58),n(61)),o=n.n(l),c=function(t){var e;return e=null===t?"\n    ?institution wdt:P17 wd:Q155;\n    wdt:P101 wd:Q128570.\n    ":'\n    BIND(IRI(CONCAT(STR(<http://www.wikidata.org/entity/>), "'.concat(t,'")) AS ?institution)\n    '),'\n  SELECT (REPLACE(STR(?institution), ".*Q", "Q") AS ?qid) ?institutionLabel\n  (GROUP_CONCAT(DISTINCT ?partLabel; SEPARATOR = ", ") AS ?partOfLabel) ?officialWebsite WHERE {\n    '.concat(e,'\n    ?institution wdt:P749 ?part.\n    OPTIONAL { ?institution wdt:P856 ?officialWebsite. }\n    SERVICE wikibase:label {\n      bd:serviceParam wikibase:language "pt-br,en".\n      ?part rdfs:label ?partLabel.\n    }\n    SERVICE wikibase:label { bd:serviceParam wikibase:language "pt-br,en". }\n  }\n  GROUP BY ?institution ?institutionLabel ?officialWebsite\n  ')},d=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(e){var n,r,l,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=encodeURIComponent(e),r="https://query.wikidata.org/sparql?query=".concat(n),t.next=4,o.a.get(r,{mode:"cors",headers:{Accept:"application/sparql-results+json"}});case 4:return l=t.sent,data=l.data,t.abrupt("return",data.results.bindings);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(t){var e='\n  SELECT DISTINCT ?authorLabel ?lattes ?orcid (SAMPLE(?pic) AS ?picture)\n  ?affiliationQID ?affiliationLabel WHERE {\n    BIND(IRI(CONCAT(STR(<http://www.wikidata.org/entity/>), "'.concat(t,'")) AS ?author)\n    ?author wdt:P1416 ?affiliation.\n    BIND(REPLACE(STR(?affiliation), "http://www.wikidata.org/entity/", "") AS ?affiliationQID)\n    OPTIONAL { ?author wdt:P1007 ?lattes. }\n    OPTIONAL { ?author wdt:P496 ?orcid. }\n    OPTIONAL { ?author wdt:P18 ?pic. }\n    SERVICE wikibase:label { bd:serviceParam wikibase:language "pt-br,en". }\n  } GROUP BY ?authorLabel ?lattes ?orcid ?affiliationQID ?affiliationLabel\n    ');return d(e).then((function(e){var n,r,l,o,c=e[0],d=e.map((function(t){return t.affiliationQID.value})),f=e.map((function(t){return t.affiliationLabel.value}));return{id:t,name:null===(n=c.authorLabel)||void 0===n?void 0:n.value,lattes:null===(r=c.lattes)||void 0===r?void 0:r.value,orcid:null===(l=c.orcid)||void 0===l?void 0:l.value,picture:null===(o=c.picture)||void 0===o?void 0:o.value,affiliation:d,affiliationLabel:f,affiliationRole:"professor"}}))},v=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(e){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n='\n  SELECT \n  DISTINCT \n  ?qid\n  ?itemLabel\n  WHERE {\n  \n    {  \n      SERVICE wikibase:mwapi {\n        bd:serviceParam wikibase:api "Search";\n                        wikibase:endpoint "www.wikidata.org";\n                        mwapi:srsearch "'.concat(e,' haswbstatement:P31=Q5 haswbstatement:P1416".\n        ?qid wikibase:apiOutput mwapi:title.\n      }\n    }\n  \n    BIND(IRI(CONCAT(STR(wd:), ?qid)) AS ?item)\n    ?item wdt:P1416 ?part_of.\n    ?part_of wdt:P17 wd:Q155.\n    SERVICE wikibase:label { bd:serviceParam wikibase:language "pt-br,en". }\n  }\n    '),t.next=3,d(n);case 3:return r=t.sent,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(t){var e;return{id:t.qid.value,institution:t.institutionLabel.value,parentOrg:t.partOfLabel.value,officialWebsite:null===(e=t.officialWebsite)||void 0===e?void 0:e.value}},w=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=d(c(t)).then((function(t){return t.map((function(t){return h(t)}))}));return e},m=function(t){var e='\n  SELECT DISTINCT (REPLACE(STR(?researcher), ".*Q", "Q") AS ?qid) ?researcherLabel ?lattes ?orcid\n  (SAMPLE(?pic) AS ?picture)\n  (GROUP_CONCAT(DISTINCT ?orgLabel; SEPARATOR = ", ") AS ?institutionLabel) ?roleLabel WHERE {\n    BIND(IRI(CONCAT(STR(<http://www.wikidata.org/entity/>), "'.concat(t,'")) AS ?org)\n    ?researcher wdt:P1416 ?org.\n    OPTIONAL {\n      ?researcher p:P1416 ?affiliation.\n      ?affiliation pq:P2868 ?role.\n    }\n    OPTIONAL { ?researcher wdt:P1007 ?lattes. }\n    OPTIONAL { ?researcher wdt:P496 ?orcid. }\n    OPTIONAL { ?researcher wdt:P18 ?pic. }\n    SERVICE wikibase:label { bd:serviceParam wikibase:language "pt-br,en".\n                         ?org rdfs:label ?orgLabel}\n    SERVICE wikibase:label { bd:serviceParam wikibase:language "pt-br,en". }\n  } GROUP BY ?researcher ?researcherLabel ?lattes ?orcid ?roleLabel\n  ');return d(e).then((function(e){return e.map((function(e){var n,r,l,o;return{id:e.qid.value,name:e.researcherLabel.value,affiliation:[t],affiliationLabel:[e.institutionLabel.value],affiliationRole:null===(n=e.roleLabel)||void 0===n?void 0:n.value,lattes:null===(r=e.lattes)||void 0===r?void 0:r.value,orcid:null===(l=e.orcid)||void 0===l?void 0:l.value,picture:null===(o=e.picture)||void 0===o?void 0:o.value}}))}))}},281:function(t,e,n){"use strict";n.r(e);var r={props:{imageLink:{type:String,default:null},qid:{type:String,default:"Q42"}}},l=n(14),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"card rounded shadow-lg",class:t.imageLink?"author-section":null},[t.imageLink?n("div",{staticClass:"w-1/2 md:w-11/12"},[n("img",{staticClass:"rounded",attrs:{src:t.imageLink,alt:t.qid+" profile picture"}})]):t._e(),t._v(" "),n("div",{staticClass:"grid justify-start gap-3"},[t._t("default"),t._v(" "),n("div",{staticClass:"grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-2"},[n("a",{staticClass:"btn",attrs:{href:"https://wikidata.org/wiki/"+t.qid,target:"_blank",rel:"noopener noreferrer"}},[n("i",{staticClass:"fa-solid fa-barcode"}),t._v("\n        On Wikidata\n      ")]),t._v(" "),n("a",{staticClass:"btn",attrs:{href:"https://scholia.toolforge.org/"+t.qid,target:"_blank",rel:"noopener noreferrer"}},[n("i",{staticClass:"fa-solid fa-newspaper"}),t._v("\n        On Scholia\n      ")])])],2)])}),[],!1,null,null,null);e.default=component.exports},282:function(t,e,n){"use strict";n.r(e);var r={methods:{refreshPage:function(){window.location.reload()}}},l=n(14),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-col justify-between items-center text-red-700 font-bold text-2xl gap-4 mt-10"},[n("i",{staticClass:"fa-regular fa-circle-xmark text-4xl"}),t._v(" "),n("h3",[t._v("\n    Couldn't retrieve the data, try\n    "),n("button",{staticClass:"simple-link",on:{click:t.refreshPage}},[t._v("refreshing")]),t._v(".\n  ")])])}),[],!1,null,null,null);e.default=component.exports},284:function(t,e,n){"use strict";n.r(e);var r={props:{dataJson:{type:Array,default:function(){return[]}},csvName:{type:String,default:"data"}},computed:{dataCSV:function(){return this.$papa.unparse(this.dataJson)}},methods:{downloadData:function(){this.$papa.download(this.dataCSV,this.csvName)}}},l=n(14),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"btn",on:{click:t.downloadData}},[n("i",{staticClass:"fa-solid fa-download"}),t._v("\n  Baixar como CSV\n")])}),[],!1,null,null,null);e.default=component.exports},285:function(t,e,n){"use strict";n.r(e);var r=n(281),l=n(286),o={components:{GeneralCard:r.default,LattesIcon:l.default},props:{researcher:{type:Object,default:null}}},c=n(14),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("GeneralCard",{attrs:{qid:t.researcher.id,"image-link":t.researcher.picture}},[n("div",{staticClass:"grid gap-0"},[n("nuxt-link",{staticClass:"text-xl md:text-2xl text-brightpurple font-bold simple-link",attrs:{to:"/search/"+t.researcher.id}},[t._v("\n      "+t._s(t.researcher.name)+" - "+t._s(t.researcher.id)+"\n    ")]),t._v(" "),t._l(t.researcher.affiliationLabel,(function(e,r){return n("span",{key:t.researcher.affiliation[r],staticClass:"flex"},[n("p",{staticClass:"pr-1"},[t._v("\n        "+t._s(t.researcher.affiliationRole?t.researcher.affiliationRole:"membro")+"\n        no\n      ")]),t._v(" "),n("nuxt-link",{staticClass:"text-sm md:text-base simple-link",attrs:{to:"/institution/"+t.researcher.affiliation[r]}},[t._v(t._s(e))])],1)}))],2),t._v(" "),n("div",{staticClass:"flex flex-col md:flex-row items-center gap-3 md:gap-2"},[t.researcher.orcid?n("span",{attrs:{title:"Orcid"}},[n("i",{staticClass:"fa-brands fa-orcid icon-style"}),t._v(" "),n("a",{staticClass:"simple-link",attrs:{href:"https://orcid.org/"+t.researcher.orcid,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.researcher.orcid))])]):t._e(),t._v(" "),t.researcher.lattes?n("span",{staticClass:"flex",attrs:{title:"lattes"}},[n("LattesIcon",{staticClass:"w-5 icon-style"}),t._v(" "),n("a",{staticClass:"simple-link",attrs:{href:"https://lattes.cnpq.br/"+t.researcher.lattes,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.researcher.lattes))])],1):t._e()])])}),[],!1,null,null,null);e.default=component.exports},286:function(t,e,n){"use strict";n.r(e);var r=n(14),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{attrs:{version:"1.0",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1068.000000 1087.000000",preserveAspectRatio:"xMidYMid meet"}},[n("g",{attrs:{transform:"translate(0.000000,1087.000000) scale(0.100000,-0.100000)",fill:"currentColor",stroke:"none"}},[n("path",{attrs:{d:"M4125 10311 c-110 -4 -205 -10 -211 -13 -6 -4 -80 -19 -165 -33 -85 -14 -181 -32 -214 -41 -33 -9 -78 -20 -100 -24 -68 -14 -305 -95 -408 -139 -96 -41 -164 -76 -237 -120 -19 -11 -46 -25 -59 -31 -13 -6 -41 -24 -61 -40 -21 -17 -41 -30 -44 -30 -4 0 -12 -4 -19 -10 -7 -5 -68 -54 -137 -108 -69 -55 -165 -141 -213 -193 -75 -79 -263 -317 -304 -384 -70 -114 -163 -279 -163 -290 0 -8 -4 -16 -9 -19 -29 -18 -174 -373 -191 -468 -5 -26 -13 -55 -18 -65 -5 -10 -12 -36 -16 -58 -4 -22 -13 -62 -21 -90 -33 -120 -66 -352 -85 -590 -12 -157 -16 -549 -7 -690 4 -66 10 -160 13 -210 6 -90 23 -235 43 -375 7 -41 16 -106 22 -145 13 -93 37 -217 55 -286 8 -30 14 -68 14 -83 0 -15 5 -36 10 -46 6 -10 14 -45 19 -77 14 -90 32 -174 48 -219 17 -48 40 -62 123 -75 30 -4 116 -20 190 -34 74 -14 164 -30 200 -35 36 -6 115 -19 175 -30 171 -31 332 -60 425 -75 47 -8 94 -17 105 -20 11 -3 63 -12 115 -21 52 -8 131 -22 175 -29 44 -8 134 -23 200 -34 66 -12 172 -30 235 -42 63 -11 153 -27 200 -34 94 -15 231 -40 300 -55 25 -5 122 -23 215 -40 94 -17 213 -40 265 -51 97 -20 219 -27 240 -14 16 10 8 59 -19 118 -12 25 -21 53 -21 61 0 8 -7 32 -16 53 -29 65 -42 96 -59 143 -10 25 -24 63 -32 85 -9 22 -21 54 -28 70 -7 17 -21 50 -30 75 -21 55 -42 106 -61 143 -8 16 -14 35 -14 42 0 14 -20 66 -46 118 -8 16 -14 36 -14 45 0 9 -7 30 -15 46 -8 15 -15 34 -15 42 0 7 -6 28 -14 46 -13 29 -42 124 -93 298 -8 30 -19 65 -24 77 -7 20 -97 383 -118 478 -51 230 -72 349 -91 530 -6 50 -14 126 -19 170 -21 174 -7 627 24 765 33 150 80 291 126 380 114 222 253 383 409 473 111 65 271 138 370 169 36 11 74 23 85 28 30 11 179 46 255 59 167 29 344 42 576 41 327 0 505 -14 929 -71 44 -6 121 -15 170 -20 50 -5 131 -15 180 -22 81 -12 98 -11 170 6 44 10 87 23 96 28 32 16 29 47 -9 99 -37 49 -67 68 -207 130 -27 12 -101 46 -163 76 -62 30 -119 54 -126 54 -8 0 -19 7 -26 15 -7 8 -20 15 -29 15 -9 0 -25 6 -36 13 -11 8 -63 31 -115 51 -52 21 -120 48 -150 61 -195 81 -669 234 -900 290 -58 14 -134 33 -169 42 -240 61 -671 123 -956 138 -229 11 -285 12 -480 6z"}}),t._v(" "),n("path",{attrs:{d:"M5465 8555 c-188 -21 -278 -50 -434 -136 -60 -33 -156 -104 -210 -153 -51 -48 -135 -156 -158 -206 -59 -124 -83 -185 -83 -205 0 -12 -7 -42 -16 -66 -25 -71 -30 -242 -10 -351 18 -95 37 -171 62 -243 8 -23 14 -49 14 -59 0 -10 7 -30 15 -44 8 -15 30 -61 50 -102 39 -85 44 -93 103 -172 23 -31 42 -61 42 -66 0 -5 60 -72 133 -150 127 -136 313 -292 409 -345 22 -12 56 -32 76 -44 67 -39 243 -123 260 -123 4 0 20 -7 36 -15 16 -9 46 -20 65 -25 20 -5 79 -21 131 -34 147 -39 251 -51 420 -49 113 2 177 8 240 22 103 25 319 98 340 115 8 7 49 34 91 59 186 115 350 338 379 517 4 25 15 73 24 107 27 100 13 391 -24 478 -4 11 -18 49 -31 85 -29 82 -97 217 -149 295 -22 33 -43 66 -47 74 -3 8 -14 22 -22 31 -9 9 -34 38 -56 65 -93 113 -150 168 -330 317 -90 74 -415 268 -451 268 -5 0 -26 8 -45 18 -31 16 -154 57 -289 98 -61 18 -320 54 -378 53 -26 -1 -96 -7 -157 -14z"}}),t._v(" "),n("path",{attrs:{d:"M7752 8292 c-7 -2 -18 -16 -26 -30 -25 -50 18 -273 72 -369 7 -12 12 -29 12 -37 0 -8 7 -32 16 -53 27 -63 33 -76 49 -123 122 -348 154 -499 162 -768 11 -355 -36 -563 -186 -827 -31 -55 -94 -155 -113 -180 -5 -5 -33 -44 -64 -85 -88 -116 -235 -257 -419 -398 -73 -56 -284 -183 -406 -244 -169 -85 -284 -138 -298 -138 -5 0 -22 -7 -37 -15 -16 -8 -36 -15 -45 -15 -8 0 -19 -4 -25 -8 -22 -21 -342 -118 -554 -170 -219 -54 -533 -106 -735 -122 -71 -6 -175 -15 -230 -20 -55 -5 -154 -10 -220 -11 -183 -3 -772 20 -935 36 -282 28 -346 35 -400 45 -30 6 -109 19 -175 30 -204 33 -249 41 -290 52 -22 5 -74 16 -115 24 -113 20 -255 54 -431 103 -42 12 -105 28 -140 36 -66 15 -283 71 -379 99 -76 22 -179 40 -187 33 -7 -8 15 -91 34 -127 7 -14 13 -30 13 -37 0 -6 7 -24 15 -40 8 -15 49 -122 91 -238 42 -115 82 -223 89 -240 7 -16 27 -70 45 -120 18 -49 37 -94 42 -99 4 -6 8 -17 8 -25 0 -9 6 -28 14 -43 8 -15 17 -40 21 -57 4 -17 11 -33 16 -36 5 -4 9 -14 9 -23 0 -9 7 -30 15 -46 8 -15 15 -33 15 -38 0 -6 6 -24 14 -41 15 -34 72 -180 101 -262 10 -27 22 -54 27 -60 4 -5 8 -16 8 -25 0 -8 7 -28 15 -44 8 -15 15 -33 15 -38 0 -6 6 -24 14 -41 15 -37 49 -123 91 -237 43 -114 60 -156 67 -164 4 -6 8 -17 8 -25 0 -17 43 -127 54 -138 3 -3 6 -14 6 -24 0 -9 14 -47 30 -84 16 -37 30 -73 30 -80 0 -7 6 -26 14 -42 13 -26 25 -56 62 -155 30 -82 47 -124 60 -156 8 -18 14 -40 14 -50 0 -9 7 -26 15 -36 8 -11 15 -29 15 -40 0 -12 7 -30 15 -40 8 -11 15 -29 15 -40 0 -12 7 -30 15 -40 8 -11 15 -28 15 -37 0 -10 6 -30 14 -46 8 -15 22 -47 30 -70 23 -63 47 -125 57 -148 17 -42 53 -136 96 -250 18 -47 24 -63 52 -129 12 -27 21 -54 21 -61 0 -8 6 -26 14 -42 8 -15 21 -46 29 -68 8 -22 22 -59 31 -82 9 -24 23 -62 32 -85 9 -24 22 -58 30 -76 8 -18 14 -39 14 -47 0 -8 10 -21 23 -29 20 -14 29 -14 77 -1 30 8 69 15 85 15 17 0 52 7 79 15 27 8 64 15 82 15 18 0 43 4 56 9 13 5 68 16 123 26 55 9 126 23 157 31 32 8 71 14 87 14 16 0 41 4 56 10 14 5 49 14 78 20 61 11 208 47 312 76 28 8 109 28 180 44 72 17 139 35 150 39 39 15 123 41 135 41 7 0 26 6 43 13 18 8 59 22 92 32 33 9 78 23 100 30 22 8 55 16 72 20 18 4 35 11 38 16 4 5 16 9 28 9 12 0 35 7 51 15 15 8 36 15 45 15 9 0 25 6 36 14 11 7 31 16 45 19 14 3 50 15 80 26 104 41 135 52 165 60 17 5 44 14 60 21 17 7 44 18 60 25 67 28 126 53 240 105 82 38 106 48 200 90 39 17 77 34 85 39 8 5 78 42 155 82 214 110 237 122 280 150 22 14 47 29 55 33 8 4 24 12 35 19 11 7 38 24 60 37 23 14 50 31 60 38 11 7 32 18 48 25 15 6 27 15 27 19 0 4 5 8 10 8 6 0 32 15 58 33 26 19 99 69 162 112 127 87 170 119 346 262 222 180 486 435 631 608 41 50 85 101 97 115 39 44 153 201 181 248 6 9 21 33 36 52 95 131 294 509 380 720 12 30 32 78 44 105 13 28 28 70 35 95 19 73 66 211 88 260 12 26 23 81 27 130 4 47 14 98 22 114 12 23 17 90 23 295 7 255 2 379 -19 521 -5 36 -16 108 -24 161 -8 53 -17 101 -21 107 -4 7 -11 35 -16 64 -6 29 -17 77 -25 105 -9 29 -22 74 -30 100 -16 57 -34 107 -51 148 -7 17 -20 50 -29 75 -38 102 -110 256 -165 355 -13 22 -33 58 -45 80 -11 22 -33 59 -48 82 -15 24 -27 45 -27 49 0 3 -13 23 -30 44 -16 21 -30 40 -30 44 0 8 -115 171 -174 246 -66 85 -156 191 -220 260 -28 31 -76 84 -106 119 -84 97 -282 301 -292 301 -5 0 -26 8 -47 18 -20 10 -43 16 -49 14z"}})])])}),[],!1,null,null,null);e.default=component.exports},288:function(t,e,n){"use strict";n.r(e);var r={props:{institution:{type:Object,default:null}}},l=n(14),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"centerize"},[n("h1",{staticClass:"main-title"},[t._v(t._s(t.institution.institution))]),t._v(" "),n("p",{staticClass:"text-lg font-medium w-3/4"},[t._v("\n    "+t._s(t.institution.parentOrg)+"\n  ")]),t._v(" "),n("span",{staticClass:"flex gap-2 text-lg font-medium"},[n("a",{staticClass:"simple-link",attrs:{href:"http://wikidata.org/wiki/"+t.institution.id,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.institution.id))]),t._v("\n    -\n    "),t.institution.officialWebsite?n("a",{staticClass:"simple-link",attrs:{href:t.institution.officialWebsite,target:"_blank",rel:"noopener noreferrer"}},[t._v("Site Oficial")]):t._e()])])}),[],!1,null,null,null);e.default=component.exports},291:function(t,e,n){"use strict";n.r(e);var r=n(9),l=(n(58),n(280)),o=n(288),c=n(285),d=n(279),f=n(282),v=n(284),h={components:{ResearcherCard:c.default,InstitutionInfoHeader:o.default,Loading:d.default,ErrorElement:f.default,DownloadButton:v.default},props:{institutionId:{type:String,default:null}},data:function(){return{institution:null,researchers:null}},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(l.a)(t.institutionId);case 2:return n=e.sent,t.institution=n[0],e.next=6,Object(l.b)(t.institutionId);case 6:t.researchers=e.sent;case 7:case"end":return e.stop()}}),e)})))()}},w=n(14),component=Object(w.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"my-10 text-center"},[n("div",{staticClass:"centerize gap-12"},[t.$fetchState.pending?n("Loading",{staticClass:"w-[64px] h-[64px] after:w-[64px] after:h-[64px]"}):t.$fetchState.error?n("ErrorElement"):n("InstitutionInfoHeader",{attrs:{institution:t.institution}}),t._v(" "),0==t.$fetchState.pending?n("DownloadButton",{attrs:{"data-json":t.researchers,"csv-name":t.institutionId+"_researchers"}}):t._e(),t._v(" "),n("div",{staticClass:"grid grid-cols-2 gap-1"},[t.$fetchState.pending?n("Loading",{staticClass:"w-[64px] h-[64px] after:w-[64px] after:h-[64px]"}):t.$fetchState.error?n("ErrorElement"):t._l(t.researchers,(function(e){return n("ResearcherCard",{key:e.id,attrs:{researcher:e,affiliation:t.institution}})}))],2)],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{InstitutionInfoHeader:n(288).default,ResearcherCard:n(285).default})}}]);