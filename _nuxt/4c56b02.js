(window.webpackJsonp=window.webpackJsonp||[]).push([[18,6,8,11,12,13,14],{276:function(t,e,n){var content=n(278);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(60).default)("1b19fe7e",content,!0,{sourceMap:!1})},277:function(t,e,n){"use strict";n(276)},278:function(t,e,n){var r=n(59)((function(i){return i[1]}));r.push([t.i,'.lds-dual-ring[data-v-315840e8]{display:inline-block}.lds-dual-ring[data-v-315840e8]:after{content:" ";display:block;border-radius:50%;border-color:#2ba84a transparent;border-style:solid;border-width:6px;-webkit-animation:lds-dual-ring-data-v-315840e8 1.2s linear infinite;animation:lds-dual-ring-data-v-315840e8 1.2s linear infinite}@-webkit-keyframes lds-dual-ring-data-v-315840e8{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes lds-dual-ring-data-v-315840e8{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}',""]),r.locals={},t.exports=r},279:function(t,e,n){"use strict";n.r(e);n(277);var r=n(14),component=Object(r.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("span",{staticClass:"lds-dual-ring"})}),[],!1,null,"315840e8",null);e.default=component.exports},280:function(t,e,n){"use strict";n.d(e,"c",(function(){return f})),n.d(e,"d",(function(){return v})),n.d(e,"a",(function(){return m})),n.d(e,"b",(function(){return h}));var r=n(9),l=(n(46),n(58),n(61)),o=n.n(l),c=function(t){var e;return e=null===t?"\n    ?institution wdt:P17 wd:Q155;\n    wdt:P101 wd:Q128570.\n    ":'\n    BIND(IRI(CONCAT(STR(<http://www.wikidata.org/entity/>), "'.concat(t,'")) AS ?institution)\n    '),'\n  SELECT (REPLACE(STR(?institution), ".*Q", "Q") AS ?qid) ?institutionLabel\n  (GROUP_CONCAT(DISTINCT ?partLabel; SEPARATOR = ", ") AS ?partOfLabel) ?officialWebsite WHERE {\n    '.concat(e,'\n    ?institution wdt:P749 ?part.\n    OPTIONAL { ?institution wdt:P856 ?officialWebsite. }\n    SERVICE wikibase:label {\n      bd:serviceParam wikibase:language "pt-br,en".\n      ?part rdfs:label ?partLabel.\n    }\n    SERVICE wikibase:label { bd:serviceParam wikibase:language "pt-br,en". }\n  }\n  GROUP BY ?institution ?institutionLabel ?officialWebsite\n  ')},d=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(e){var n,r,l,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=encodeURIComponent(e),r="https://query.wikidata.org/sparql?query=".concat(n),t.next=4,o.a.get(r,{mode:"cors",headers:{Accept:"application/sparql-results+json"}});case 4:return l=t.sent,data=l.data,t.abrupt("return",data.results.bindings);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(t){var e='\n  SELECT DISTINCT ?authorLabel ?lattes ?orcid (SAMPLE(?pic) AS ?picture)\n  ?affiliationQID ?affiliationLabel WHERE {\n    BIND(IRI(CONCAT(STR(<http://www.wikidata.org/entity/>), "'.concat(t,'")) AS ?author)\n    ?author wdt:P1416 ?affiliation.\n    BIND(REPLACE(STR(?affiliation), "http://www.wikidata.org/entity/", "") AS ?affiliationQID)\n    OPTIONAL { ?author wdt:P1007 ?lattes. }\n    OPTIONAL { ?author wdt:P496 ?orcid. }\n    OPTIONAL { ?author wdt:P18 ?pic. }\n    SERVICE wikibase:label { bd:serviceParam wikibase:language "pt-br,en". }\n  } GROUP BY ?authorLabel ?lattes ?orcid ?affiliationQID ?affiliationLabel\n    ');return d(e).then((function(e){var n,r,l,o,c=e[0],d=e.map((function(t){return t.affiliationQID.value})),f=e.map((function(t){return t.affiliationLabel.value}));return{id:t,name:null===(n=c.authorLabel)||void 0===n?void 0:n.value,lattes:null===(r=c.lattes)||void 0===r?void 0:r.value,orcid:null===(l=c.orcid)||void 0===l?void 0:l.value,picture:null===(o=c.picture)||void 0===o?void 0:o.value,affiliation:d,affiliationLabel:f,affiliationRole:"professor"}}))},v=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(e){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n='\n  SELECT \n  DISTINCT \n  ?qid\n  ?itemLabel\n  WHERE {\n  \n    {  \n      SERVICE wikibase:mwapi {\n        bd:serviceParam wikibase:api "Search";\n                        wikibase:endpoint "www.wikidata.org";\n                        mwapi:srsearch "'.concat(e,' haswbstatement:P31=Q5 haswbstatement:P1416".\n        ?qid wikibase:apiOutput mwapi:title.\n      }\n    }\n  \n    BIND(IRI(CONCAT(STR(wd:), ?qid)) AS ?item)\n    ?item wdt:P1416 ?part_of.\n    ?part_of wdt:P17 wd:Q155.\n    SERVICE wikibase:label { bd:serviceParam wikibase:language "pt-br,en". }\n  }\n    '),t.next=3,d(n);case 3:return r=t.sent,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),w=function(t){var e;return{id:t.qid.value,institution:t.institutionLabel.value,parentOrg:t.partOfLabel.value,officialWebsite:null===(e=t.officialWebsite)||void 0===e?void 0:e.value}},m=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=d(c(t)).then((function(t){return t.map((function(t){return w(t)}))}));return e},h=function(t){var e='\n  SELECT DISTINCT (REPLACE(STR(?researcher), ".*Q", "Q") AS ?qid) ?researcherLabel ?lattes ?orcid\n  (SAMPLE(?pic) AS ?picture)\n  (GROUP_CONCAT(DISTINCT ?orgLabel; SEPARATOR = ", ") AS ?institutionLabel) ?roleLabel WHERE {\n    BIND(IRI(CONCAT(STR(<http://www.wikidata.org/entity/>), "'.concat(t,'")) AS ?org)\n    ?researcher wdt:P1416 ?org.\n    OPTIONAL {\n      ?researcher p:P1416 ?affiliation.\n      ?affiliation pq:P2868 ?role.\n    }\n    OPTIONAL { ?researcher wdt:P1007 ?lattes. }\n    OPTIONAL { ?researcher wdt:P496 ?orcid. }\n    OPTIONAL { ?researcher wdt:P18 ?pic. }\n    SERVICE wikibase:label { bd:serviceParam wikibase:language "pt-br,en".\n                         ?org rdfs:label ?orgLabel}\n    SERVICE wikibase:label { bd:serviceParam wikibase:language "pt-br,en". }\n  } GROUP BY ?researcher ?researcherLabel ?lattes ?orcid ?roleLabel\n  ');return d(e).then((function(e){return e.map((function(e){var n,r,l,o;return{id:e.qid.value,name:e.researcherLabel.value,affiliation:[t],affiliationLabel:[e.institutionLabel.value],affiliationRole:null===(n=e.roleLabel)||void 0===n?void 0:n.value,lattes:null===(r=e.lattes)||void 0===r?void 0:r.value,orcid:null===(l=e.orcid)||void 0===l?void 0:l.value,picture:null===(o=e.picture)||void 0===o?void 0:o.value}}))}))}},281:function(t,e,n){"use strict";n.r(e);var r={props:{imageLink:{type:String,default:null},qid:{type:String,default:"Q42"}}},l=n(14),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"card rounded shadow-lg",class:t.imageLink?"author-section":null},[t.imageLink?n("div",{staticClass:"w-1/2 md:w-11/12"},[n("img",{staticClass:"rounded",attrs:{src:t.imageLink,alt:t.qid+" profile picture"}})]):t._e(),t._v(" "),n("div",{staticClass:"grid justify-start gap-3"},[t._t("default"),t._v(" "),n("div",{staticClass:"grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-2"},[n("a",{staticClass:"btn",attrs:{href:"https://wikidata.org/wiki/"+t.qid,target:"_blank",rel:"noopener noreferrer"}},[n("i",{staticClass:"fa-solid fa-barcode"}),t._v("\n        On Wikidata\n      ")]),t._v(" "),n("a",{staticClass:"btn",attrs:{href:"https://scholia.toolforge.org/"+t.qid,target:"_blank",rel:"noopener noreferrer"}},[n("i",{staticClass:"fa-solid fa-newspaper"}),t._v("\n        On Scholia\n      ")])])],2)])}),[],!1,null,null,null);e.default=component.exports},282:function(t,e,n){"use strict";n.r(e);var r={methods:{refreshPage:function(){window.location.reload()}}},l=n(14),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-col justify-between items-center text-red-700 font-bold text-2xl gap-4 mt-10"},[n("i",{staticClass:"fa-regular fa-circle-xmark text-4xl"}),t._v(" "),n("h3",[t._v("\n    Couldn't retrieve the data, try\n    "),n("button",{staticClass:"simple-link",on:{click:t.refreshPage}},[t._v("refreshing")]),t._v(".\n  ")])])}),[],!1,null,null,null);e.default=component.exports},283:function(t,e,n){"use strict";n.r(e);var r={components:{GeneralCard:n(281).default},props:{institution:{type:Object,default:null}}},l=n(14),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("GeneralCard",{attrs:{qid:t.institution.id}},[n("div",{staticClass:"grid gap-0"},[n("nuxt-link",{staticClass:"text-xl md:text-2xl text-brightpurple font-bold simple-link",attrs:{to:"/institution/"+t.institution.id}},[t._v("\n      "+t._s(t.institution.institution)+" - "+t._s(t.institution.id)+"\n    ")]),t._v(" "),n("span",{staticClass:"flex flex-col gap-1"},[n("p",[t._v("\n        "+t._s(t.institution.parentOrg)+"\n      ")]),t._v(" "),t.institution.officialWebsite?n("a",{staticClass:"simple-link",attrs:{href:t.institution.officialWebsite,target:"_blank",rel:"noopener noreferrer"}},[t._v("Site Oficial")]):t._e()])],1)])}),[],!1,null,null,null);e.default=component.exports},284:function(t,e,n){"use strict";n.r(e);var r={props:{dataJson:{type:Array,default:function(){return[]}},csvName:{type:String,default:"data"}},computed:{dataCSV:function(){return this.$papa.unparse(this.dataJson)}},methods:{downloadData:function(){this.$papa.download(this.dataCSV,this.csvName)}}},l=n(14),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"btn",on:{click:t.downloadData}},[n("i",{staticClass:"fa-solid fa-download"}),t._v("\n  Baixar como CSV\n")])}),[],!1,null,null,null);e.default=component.exports},289:function(t,e,n){"use strict";n.r(e);var r=n(9),l=(n(58),n(280)),o=n(283),c=n(279),d=n(282),f=n(284),v={components:{InstitutionCard:o.default,Loading:c.default,ErrorElement:d.default,DownloadButton:f.default},data:function(){return{institutions:[]}},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(l.a)();case 2:t.institutions=e.sent;case 3:case"end":return e.stop()}}),e)})))()}},w=n(14),component=Object(w.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"my-10 text-center"},[n("div",{staticClass:"centerize gap-12"},[n("div",{staticClass:"centerize gap-3"},[n("h1",{staticClass:"main-title"},[t._v("Instituições & Programas")]),t._v(" "),n("p",{staticClass:"text-medium w-3/4"},[t._v("\n        Lista de instituições e programas de pós-graduação brasileiros da área\n        de bioinformática\n      ")]),t._v(" "),0==t.$fetchState.pending?n("DownloadButton",{attrs:{"data-json":t.institutions,"csv-name":"institutions"}}):t._e()],1),t._v(" "),n("div",{staticClass:"grid grid-cols-2 gap-1"},[t.$fetchState.pending?n("Loading",{staticClass:"w-[64px] h-[64px] after:w-[64px] after:h-[64px]"}):t.$fetchState.error?n("ErrorElement"):t._l(t.institutions,(function(t){return n("InstitutionCard",{key:t.id,attrs:{institution:t}})}))],2)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{InstitutionCard:n(283).default})},293:function(t,e,n){"use strict";n.r(e);var r={name:"Institutions"},l=n(14),component=Object(l.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("InstitutionListPage")}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{InstitutionListPage:n(289).default})}}]);