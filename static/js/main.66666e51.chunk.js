(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,t,a){},41:function(e,t,a){e.exports=a.p+"static/media/search.c6a0effb.svg"},44:function(e,t,a){e.exports=a(95)},50:function(e,t,a){},95:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(8),s=a.n(r),l=(a(50),a(15)),o=a(16),i=a(18),u=a(17),h=a(19),m=a(14),f=(a(27),a(41)),p=a.n(f),d=(a(51),a(9)),g=a.n(d),y=a(10),b=a.n(y),E=a(43),v=a.n(E),j=a(20),w=a.n(j),x=a(42),q=a.n(x),k=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={showModal:!1,selectedImage:{}},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.props.images;return console.log(t),c.a.createElement(g.a,null,t.map(function(t,a){return c.a.createElement(b.a,{className:"mb-2 hoverfnc",key:a},c.a.createElement("img",{onClick:function(){e.setState({selectedImage:t},function(){e.setState({showModal:!0})})},src:t.src.medium,height:"200",width:"200",style:{objectFit:"cover"}}))}),c.a.createElement(w.a,{show:this.state.showModal,size:"md","aria-labelledby":"contained-modal-title-vcenter",centered:!0},c.a.createElement(w.a.Body,null,this.state.selectedImage.src&&c.a.createElement("div",null,c.a.createElement("img",{width:"460px",src:this.state.selectedImage.src.medium}),c.a.createElement("p",null,c.a.createElement("bold",null,"Photographer: "),this.state.selectedImage.photographer),c.a.createElement("a",{href:this.state.selectedImage.url},"Download"))),c.a.createElement(w.a.Footer,null,c.a.createElement(q.a,{onClick:function(){return e.setState({showModal:!1})}},"Close"))))}}]),t}(n.Component),S=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={images:[],query:"",position:"25vh",currentPage:1,query_result:{}},a.fetchResult=a.fetchResult.bind(Object(m.a)(Object(m.a)(a))),a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"fetchResult",value:function(e){var t=this;e.preventDefault(),fetch("https://api.pexels.com/v1/search?query=".concat(this.state.query,"+query&per_page=20&page=").concat(this.state.currentPage),{headers:{Authorization:"Bearer 563492ad6f917000010000014da165cecd0445eb8634ca17b09378e5"}}).then(function(e){return e.json()}).then(function(e){t.setState({images:e.photos},function(){t.setState({position:"0px"})}),t.setState({query_result:e})}).catch(function(e){console.log(e)})}},{key:"fetchResult1",value:function(){var e=this;fetch("https://api.pexels.com/v1/search?query=".concat(this.state.query,"+query&per_page=20&page=").concat(this.state.currentPage),{headers:{Authorization:"Bearer 563492ad6f917000010000014da165cecd0445eb8634ca17b09378e5"}}).then(function(e){return e.json()}).then(function(t){e.setState({images:t.photos},function(){e.setState({position:"0px"})}),e.setState({query_result:t})}).catch(function(e){console.log(e)})}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;return c.a.createElement(v.a,null,c.a.createElement(g.a,null,c.a.createElement(b.a,{className:"app-header"},"Welcome to Picolo")),c.a.createElement(g.a,{className:"d-flex align-items-center justify-content-center flex-column"},c.a.createElement(g.a,null,c.a.createElement(b.a,{className:"my-5"},c.a.createElement("form",{onSubmit:function(t){return e.fetchResult(t)}},c.a.createElement("div",{id:"search_container",ref:this.searchContainer,style:{display:"flex",justifyContent:"center",alignItems:"center",top:this.state.position}},c.a.createElement("input",{type:"text",className:"searchInput",placeholder:"What are you looking for?",value:this.state.query,onChange:function(t){e.setState({query:t.target.value}),console.log(e.state.query)}}),c.a.createElement("button",{className:"searchButton btn btn-primary",onClick:this.fetchResult,onKeyPress:this.fetchResult,type:"button",tabIndex:0},c.a.createElement("img",{src:p.a,height:"20"})))))),c.a.createElement("div",{id:"#top"}),this.state.images.length>0&&c.a.createElement(k,{images:this.state.images}),c.a.createElement(g.a,{className:"my-5"},this.state.query_result.prev_page&&c.a.createElement(b.a,null,c.a.createElement("a",{href:"#top"},c.a.createElement("button",{className:"btn btn-primary",style:{width:"100px"},onClick:function(){e.setState({currentPage:e.state.currentPage-1},function(){e.fetchResult1()})}},"Previous"))),this.state.query_result.next_page&&c.a.createElement(b.a,null,c.a.createElement("a",{href:"#top"},c.a.createElement("button",{className:"btn btn-primary",style:{width:"100px"},onClick:function(){e.setState({currentPage:e.state.currentPage+1},function(){e.fetchResult1()})}}," Next "))))))}}]),t}(n.Component);s.a.render(c.a.createElement(S,null),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.66666e51.chunk.js.map