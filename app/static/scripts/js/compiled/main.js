var AboutPrashantComponent=React.createClass({displayName:"AboutPrashantComponent",render:function(){return React.createElement("section",{id:"about",className:"content-section text-center"},React.createElement("div",{className:"row"},React.createElement("div",{className:"col-lg-8 col-lg-offset-2"},React.createElement("h2",null,"About Me"),React.createElement("p",null,"Hi there! I'm Prashant Khanduri"),React.createElement("p",null,"I'm originally from India. Although most of my school days were spent in India (New Delhi), a few of them slipped into Nepal (Kathmandu), Canada (Waterloo) and United States (Los Angeles)"),React.createElement("p",null,"On a day to day basis, I tell computers what to do and they seem to obey me (for the most part). I end up getting paid for ",React.createElement("a",{href:"#","ng-click":"scroll('#experience')"},"some of it"),", the other portion ends up on a ",React.createElement("a",{href:"https://github.com/khanduri/"},"public domain")),React.createElement("p",null,"I also ",React.createElement("a",{href:"http://khanduri.github.io/"},"blog"),", but I haven't really scoped out the topics I'd like to talk about. For now, I'm just using it to collect ideas that I find interesting. I hope someday a pattern will emerge"),React.createElement("p",null),React.createElement("p",null,"In case you're wondering, the above picture is me trying to slide down Mt Rainier (Paradise snowplay area) and not doing a great job at it. I like the picture though"),React.createElement("p",null,"You know a lot about me now! .. ",React.createElement("a",{href:"#contact","class":"page-scroll"},"Ok your turn")))))}});"prashant"==info.about&&React.render(React.createElement(AboutPrashantComponent,null),document.getElementById("about"));
var ContactComponent=React.createClass({displayName:"ContactComponent",render:function(){var e=this.props.items;return React.createElement("section",{id:"contact",className:"container content-section text-center"},React.createElement("div",{className:"row"},React.createElement("div",{className:"col-lg-8 col-lg-offset-2"},React.createElement("h2",null,"Contact"),React.createElement("ul",{className:"list-inline banner-social-buttons"},e.twitter?React.createElement("li",null,React.createElement("a",{href:"https://twitter.com/"+e.twitter,className:"btn btn-default btn-lg"},React.createElement("i",{className:"fa fa-twitter fa-fw"})," ",React.createElement("span",{className:"network-name"},"Twitter"))):null,e.github?React.createElement("li",null,React.createElement("a",{href:"https://github.com/"+e.github,className:"btn btn-default btn-lg"},React.createElement("i",{className:"fa fa-github fa-fw"})," ",React.createElement("span",{className:"network-name"},"Github"))):null,e.linkedin?React.createElement("li",null,React.createElement("a",{href:"https://www.linkedin.com/in/"+e.linkedin,className:"btn btn-default btn-lg"},React.createElement("i",{className:"fa fa-linkedin fa-fw"})," ",React.createElement("span",{className:"network-name"},"LinkedIn"))):null,e.facebook?React.createElement("li",null,React.createElement("a",{href:"https://www.facebook.com/"+e.facebook,className:"btn btn-default btn-lg"},React.createElement("i",{className:"fa fa-facebook fa-fw"})," ",React.createElement("span",{className:"network-name"},"Facebook"))):null))))}});info.contact&&React.render(React.createElement(ContactComponent,{items:info.contact}),document.getElementById("contact"));
var EducationDisplayComponent=React.createClass({displayName:"EducationDisplayComponent",render:function(){var e=this.props.items;return React.createElement("li",{className:"timeline-inverted",key:e.id},React.createElement("div",{className:"timeline-badge"},React.createElement("i",{className:"fa fa-graduation-cap"})),React.createElement("div",{className:"timeline-panel"},React.createElement("div",{className:"timeline-heading"},React.createElement("div",{className:"timeline-title"},e.title),React.createElement("div",{className:"timeline-dates"},e.dates),React.createElement("div",{className:"timeline-location"},e.loc),React.createElement("br",null),React.createElement("div",{className:"timeline-course"},e.course),React.createElement("div",{className:"timeline-body"},e.desc))))}}),EducationComponent=React.createClass({displayName:"EducationComponent",render:function(){var e=[],t=this.props.items;return t.institutes.map(function(t){e.push(React.createElement(EducationDisplayComponent,{items:t}))}),React.createElement("section",{id:"education",className:""},React.createElement("div",{className:"content-section education-section"},React.createElement("div",{className:"row"},React.createElement("div",{className:"col-lg-8 col-lg-offset-2"},React.createElement("h2",{className:"text-center"},"Education"),React.createElement("div",{className:"container"},React.createElement("ul",{className:"timeline"},e))))))}});info.education&&React.render(React.createElement(EducationComponent,{items:info.education,key:"education"}),document.getElementById("education"));
var ExperienceDutyDisplayComponent=React.createClass({displayName:"ExperienceDutyDisplayComponent",render:function(){var e=this.props.items;return React.createElement("div",null," - ",e)}}),ExperienceContentDisplayComponent=React.createClass({displayName:"ExperienceContentDisplayComponent",render:function(){var e=this.props.items,t=[];return e.duties.map(function(e){t.push(React.createElement(ExperienceDutyDisplayComponent,{items:e}))}),React.createElement("div",{className:"timeline-body"},React.createElement("br",null),React.createElement("div",null,React.createElement("b",null,e.team_name,":")),e.team_desc,t)}}),ExperienceDisplayComponent=React.createClass({displayName:"ExperienceDisplayComponent",render:function(){var e=this.props.items,t=[];return e.body.map(function(e){t.push(React.createElement(ExperienceContentDisplayComponent,{items:e}))}),React.createElement("li",{className:"timeline-inverted"},React.createElement("div",{className:"timeline-badge"},React.createElement("i",{className:"fa "+e.fa_class})),React.createElement("div",{className:"timeline-panel"},React.createElement("div",{className:"timeline-heading"},React.createElement("h4",{className:"timeline-title"},e.title),React.createElement("div",{className:"timeline-location"},e.loc),React.createElement("div",{className:"timeline-dates"},e.dates),React.createElement("div",{className:"timeline-position"},e.position),t)))}}),ExperienceComponent=React.createClass({displayName:"ExperienceComponent",render:function(){var e=[],t=this.props.items;return t.map(function(t){e.push(React.createElement(ExperienceDisplayComponent,{items:t}))}),React.createElement("section",{id:"experience",className:""},React.createElement("div",{className:"content-section experience-section"},React.createElement("div",{className:"row"},React.createElement("div",{className:"col-lg-8 col-lg-offset-2"},React.createElement("h2",{className:"text-center"},"Experience"),React.createElement("div",{className:"container"},React.createElement("ul",{className:"timeline"},e))))))}});info.experience&&React.render(React.createElement(ExperienceComponent,{items:info.experience}),document.getElementById("experience"));
var ProgressDisplayComponent=React.createClass({displayName:"ProgressDisplayComponent",render:function(){var e=this.props.title,t=this.props.items;return React.createElement("div",{className:"row"},React.createElement("h2",{className:"text-center"},e),React.createElement("div",{className:"row"},Object.keys(t).map(function(e){return React.createElement("div",{className:"col-md-4"},React.createElement("div",{className:"middle"},e.toUpperCase()),React.createElement("br",null),t[e].sort(function(e,t){return-(e[1]-t[1])}).map(function(e){return React.createElement("div",{className:"progress"},React.createElement("div",{className:"progress-bar prog-"+e[1]},e[0]))}))})))}}),LearnComponent=React.createClass({displayName:"LearnComponent",render:function(){var e=[],t=this.props.items.current;e.push(React.createElement(ProgressDisplayComponent,{items:t,title:"Current interest"}));var a=this.props.items.past;return e.push(React.createElement(ProgressDisplayComponent,{items:a,title:"In the Past"})),React.createElement("section",{id:"learn",className:"content-section"},React.createElement("div",{className:"content-section learn-section"},React.createElement("div",{className:"row"},React.createElement("div",{className:"col-lg-8 col-lg-offset-2"},e))))}});info.learn&&React.render(React.createElement(LearnComponent,{items:info.learn}),document.getElementById("learn"));
var NavigationComponent=React.createClass({displayName:"NavigationComponent",render:function(){var a=this.props.items,e=[];return a.map(function(a){"profile"!=a&&e.push(React.createElement("li",null,React.createElement("a",{className:"page-scroll",href:"#"+a},a)))}),React.createElement("nav",{className:"navbar navbar-custom navbar-fixed-top",role:"navigation"},React.createElement("div",{className:"container"},React.createElement("div",{className:"navbar-header"},React.createElement("button",{type:"button",className:"navbar-toggle","data-toggle":"collapse","data-target":".navbar-main-collapse"},React.createElement("i",{className:"fa fa-bars"})),React.createElement("a",{className:"navbar-brand page-scroll",href:"#page-top"},React.createElement("i",{className:"fa fa-play-circle"}),"  ",React.createElement("span",{className:"light"},"HOME"))),React.createElement("div",{className:"collapse navbar-collapse navbar-right navbar-main-collapse"},React.createElement("ul",{className:"nav navbar-nav"},React.createElement("li",{className:"hidden"},React.createElement("a",{href:"#page-top"})),e))))}});info.navigation&&React.render(React.createElement(NavigationComponent,{items:info.navigation}),document.getElementById("navigation"));
var HeaderComponent=React.createClass({displayName:"HeaderComponent",render:function(){var e=this.props.items;return React.createElement("div",{className:"intro-body"},React.createElement("div",{className:"container"},React.createElement("div",{className:"row"},React.createElement("div",{className:"col-md-8 col-md-offset-2"},React.createElement("h1",{className:"brand-heading"},e.name.first," ",e.name.last),React.createElement("p",{className:"intro-text"}," ",e.desc.first,React.createElement("br",null),e.desc.second),React.createElement("a",{href:"#about",className:"btn btn-circle page-scroll"},React.createElement("i",{className:"fa fa-angle-double-down animated"}))))))}}),FooterComponent=React.createClass({displayName:"FooterComponent",render:function(){var e=this.props.items;return React.createElement("div",{className:"container text-center"},React.createElement("p",null,"Copyright © ",e.name.first," ",e.name.last," - ",(new Date).getFullYear()))}});info.profile&&(React.render(React.createElement(HeaderComponent,{items:info.profile}),document.getElementById("header")),React.render(React.createElement(FooterComponent,{items:info.profile}),document.getElementById("footer")));
var ActivitiesComponent=React.createClass({displayName:"ActivitiesComponent",render:function(){var e=this.props.items;return React.createElement("section",{id:"projects",className:""},React.createElement("div",{className:"content-section projects-section"},React.createElement("div",{className:"row"},React.createElement("div",{className:"col-lg-8 col-lg-offset-2"},React.createElement("h2",{className:"text-center"},"Activities"),React.createElement("div",{className:"row"},Object.keys(e).map(function(t){return React.createElement("div",{className:"col-md-4"},React.createElement("div",{className:"middle"},t.toUpperCase()),React.createElement("br",null),e[t].map(function(e){var t=e.link,a=e.name;return t?React.createElement("div",{className:"well"},React.createElement("a",{href:""+t},a)):React.createElement("div",{className:"well"},a)}))}))))))}});info.activities&&React.render(React.createElement(ActivitiesComponent,{items:info.activities}),document.getElementById("activities"));