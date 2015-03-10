this["JST"] = this["JST"] || {};

this["JST"]["assets/templates/band.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<a type="button" href="#" ui-sref-active="active" ui-sref="home"><span>Home</span></a>\n<br>\n<h3>Search for available space.</h3>\n<br>\nWhat city do you want to search?\n<br>\n<input type="input" placeholder="City Name" class="city-name"></input>\n<br>\n<button type="button" class="city-search">Search</button>';

}
return __p
};

this["JST"]["assets/templates/home.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '\n<button type="button" href="#" ui-sref-active="active" ui-sref="band"><span>Search for space</span></button><br>\n\n<button type="button" href="#" ui-sref-active="active" ui-sref="master"><span>List your space</span></button><br>\n\n<button type="button" href="#" ui-sref-active="active" ui-sref="logout"><span>Logout</span></button>';

}
return __p
};

this["JST"]["assets/templates/login.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<section class="user-form">\n      <a type="button" href="#" ui-sref-active="active" ui-sref="home"><span>Home</span></a>\n      <div class="avatar"></div>\n      <h1>Log in</h1>\n      <form class="form" ng-submit="login(credentials)">\n            <label ng-class="error.identifier ? \'error\' : \'\'">\n                  <input type="text" placeholder="Email" ng-model="credentials.identifier">\n                  <p class="error" ng-bind="error.identifier"></p>\n            </label>\n            <label ng-class="error.password ? \'error\' : \'\'">\n                  <input type="password" placeholder="Password" ng-model="credentials.password">\n                  <p class="error" ng-bind="error.password"></p>\n            </label>\n            <button type="submit">Submit</button>\n      </form>\n</section>';

}
return __p
};

this["JST"]["assets/templates/master.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<a type="button" href="#" ui-sref-active="active" ui-sref="home"><span>Home</span></a>\n<div class="shared-space">\n<div ng-hide="false">Thanks for sharing your space.<br>You totally rule!</div>\n</div>\n\n<a type="button" href="#" ui-sref-active="active" ui-sref="spaceregister" ng-hide="false"><span>List your space!</span></a>\n<br>\n\n<section class="user-form" >\n\t<h3>Tell us about your space.</h3>\n\t<form class="form" ng-submit="list" novalidate>\n\t\tCity<br>\n\t\t<label ng-class="">\n\t\t\t<input type="text" placeholder="City" ng-model="city">\n\t\t\t<p class="error" ng-bind="error.identifier"></p>\n\t\t</label>\n\t\tType<br>\n\t\t<label ng-class="">\n\t\t\t<input type="text" placeholder="Barn, garage, etc..." ng-model="type">\n\t\t\t<p class="error" ng-bind="error.password"></p>\n\t\t</label>\n\t\tLoading Issues<br>\n\t\t<label ng-class="">\n\t\t\t<input type="text" placeholder="Stairs, rabid dogs, etc..." ng-model="issues">\n\t\t\t<p class="error" ng-bind="error.password"></p>\n\t\t</label>\n\t\t<div> Check box for yes.</div>\n\t\tSecure for overnight storage?\n\t\t<input type="checkbox"></input>\n\t\t<br>\n\t\tAlcohol OK?\n\t\t<input type="checkbox"></input>\n\t\t<br>\n\t\tIndoor smoking OK?\n\t\t<input type="checkbox"></input>\n\t\t<br>\n\t\tGuests allowed?<br>\n\t\tNo\n\t\t<input type="checkbox"></input>\n\t\tWithin Reason\n\t\t<input type="checkbox"></input>\n\t\tHell ya!\n\t\t<input type="checkbox"></input>\n\t\t<br>\n\t\tUpload an image:\n\t\t<form method="get" action="file.doc">\n\t\t\t<button type="submit">Upload!</button>\n\t\t</form>\n\t\t<button type="submit">Submit</button>\n\t</form>\n\n\t\n</section>\n<!-- name: "",\n\tpreferred genres: "",[rock, country, heavy metal, pop]\n\topen practice: booelan, (defined as  guests other than band members allowed)\n\tcity: "",\n\tspace type: "", [garage, bedroom, basement, barn, shed]\n\talcohol ok?: y/n,\n\tsmoking? y/n,\n\tstorage ok?: y/n,\n\tloading issues: {\n\t\t\tstairs: y/n,\n\t\t\tdrive up?: y/n,\n\t\t\tEntrance type:{\n\t\t\t\t\tgarage door\n\t\t\t\t\thouse door\n\t\t\t\t\tbarn door\n\t\t\t\t\tsliding glass\n\t\t\t\t\tchimney\n\t\t\t\t}\n\t\t}\n\tpictures: img,\n\tagree to terms of use?: y/n\n}\n\n -->';

}
return __p
};

this["JST"]["assets/templates/spaceregister.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<section class="user-form">\n\t<a type="button" href="#" ui-sref-active="active" ui-sref="home"><span>Home</span></a>\n\t<div class="avatar"></div>\n\t<h1>Register</h1>\n\t<form class="form" ng-submit="register(credentials)" novalidate>\n\t\t<label ng-class="error.identifier ? \'error\' : \'\'">\n\t\t\t<input type="text" placeholder="Email" ng-model="credentials.identifier">\n\t\t\t<p class="error" ng-bind="error.identifier"></p>\n\t\t</label>\n\t\t<label ng-class="error.password ? \'error\' : \'\'">\n\t\t\t<input type="password" placeholder="Password" ng-model="credentials.password">\n\t\t\t<p class="error" ng-bind="error.password"></p>\n\t\t</label>\n\t\t<button type="submit">Submit</button>\n\t</form>\n\t\t<a type="button" href="#" ui-sref-active="active" ui-sref="login"><span>Login</span></a>\n</section>';

}
return __p
};