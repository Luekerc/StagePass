this["JST"] = this["JST"] || {};

this["JST"]["assets/templates/band.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<button type="button" href="#" ui-sref-active="active" ui-sref="home"><span>Home</span></button>\n<br>\n<h3>Find the perfect practice pad!</h3>\n<br>\n<h3>Explore Spaces</h3>\nWhich city? \n<input type="input" placeholder="Type City Name Here" class="city-name"></input>\n<br>\n<br><br>\n<button type="button" class="city-search">Search</button>';

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
__p += '<section class="user-form">\n      <button type="button" href="#" ui-sref-active="active" ui-sref="home"><span>Home</span></button>\n      <div class="avatar"></div>\n      <h1>Log in</h1>\n      <form class="form" ng-submit="login(credentials)">\n            <label ng-class="error.identifier ? \'error\' : \'\'">\n                  <input type="text" placeholder="Email" ng-model="credentials.identifier">\n                  <p class="error" ng-bind="error.identifier"></p>\n            </label>\n            <label ng-class="error.password ? \'error\' : \'\'">\n                  <input type="password" placeholder="Password" ng-model="credentials.password">\n                  <p class="error" ng-bind="error.password"></p>\n            </label>\n            <button type="submit">Submit</button>\n      </form>\n</section>';

}
return __p
};

this["JST"]["assets/templates/master.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<button type="button" href="#" ui-sref-active="active" ui-sref="home"><span>Home</span></button>\n<div class="shared-space">\n<br>\n<div ng-show="submitSuccess">Thanks for sharing your space.<br><br>You totally RULE!</div>\n</div>\n<br>\n\n<section class="user-form" >\n\t<h3>TELL US ABOUT YOUR SPACE!</h3>\n\t<form class="form" ng-submit="list" novalidate>\n\t\tCity\n\t\t<br>\n\t\t<label ng-class="">\n\t\t\t<input type="text" placeholder="Name of city" ng-model="city">\n\t\t\t<p class="error" ng-bind="error.identifier"></p>\n\t\t</label>\n\t\t<br>\n\n\t\tType of place\n\t\t<br>\n\t\t<label ng-class="">\n\t\t\t<input list="spacetypes" ng-model="spacetypes" placeholder="What kind of place?">\n            <datalist id="spacetypes">\n                  <option value="Garage">\n                  <option value="Barn">\n                  <option value="Basement">\n                  <option value="Warehouse">\n                  <option value="Attic">\n                  <option value="Living Room">\n               \t  <option value="Spare Room">\n                  <option value="Other">\n            </datalist>\n            <p class="error" ng-bind="error.password"></p>\n\t\t</label>\n\t\t<br>\n\n\t\tLoading Issues\n\t\t<br>\n\t\t<label ng-class="">\n\t\t\t<input list="loading" ng-model="loading" placeholder="Any obstacles?">\n            <datalist id="loading">\n                  <option value="None">\n                  <option value="Locked Gate">\n                  <option value="Stairs">\n                  <option value="Guard Dogs">\n                  <option value="Limited Parking">\n                  <option value="Moat">\n            </datalist>\n            <p class="error" ng-bind="error.password"></p>\n\t\t</label>\n\t\t<br>\n\n\t\tSecure/Overnight Storage\n\t\t<br>\n\t\t<label ng-class="">\n\t\t\t<input list="storage" ng-model="storage" placeholder="Secure/available?">\n            <datalist id="storage">\n                  <option value="Yes">\n                  <option value="No">\n            </datalist>\n            <p class="error" ng-bind="error.password"></p>\n\t\t</label>\n\t\t<br>\n\n\t\tAlcohol\n\t\t<br>\n\t\t<label ng-class="">\n\t\t\t<input list="alcohol" ng-model="alcohol" placeholder="Alcohol allowed?">\n            <datalist id="alcohol">\n                  <option value="Yes">\n                  <option value="No">\n            </datalist>\n            <p class="error" ng-bind="error.password"></p>\n\t\t</label>\n\t\t<br>\n\n\t\tIndoor smoking \n\t\t<br>\n\t\t<label ng-class="">\n\t\t\t<input list="smoking" ng-model="smoking" placeholder="Smoking allowed?">\n            <datalist id="smoking">\n                  <option value="Yes">\n                  <option value="Nowhere">\n                  <option value="Outside">\n            </datalist>\n            <p class="error" ng-bind="error.password"></p>\n\t\t</label>\n\t\t<br>\n\n\t\tGuests \n\t\t<br>\n\t\t<label ng-class="">\n\t\t\t<input list="guests" ng-model="guests" placeholder="Guests?">\n            <datalist id="guests">\n                  <option value="Yes, come on over!">\n                  <option value="Band only">\n                  <option value="1 per bandmate">\n                  <option value="TBD">\n            </datalist>\n            <p class="error" ng-bind="error.password"></p>\n\t\t</label>\n\t\t<br>\n\n<!-- \t\tUpload an image:\n\t\t<form method="get" action="file.doc">\n\t\t\t<a type="submit">Upload!</a>\n\t\t</form> -->\n\t\t<button type="submit">Submit</button>\n\t</form>\n\n</section>\n<!-- name: "",\n\tuser ID: ,\n\tpreferred genres: "",[rock, country, heavy metal, pop]\n\topen practice: booelan, (defined as  guests other than band members allowed)\n\tcity: "",\n\tspace type: "", [garage, bedroom, basement, barn, shed]\n\talcohol ok?: y/n,\n\tsmoking? y/n,\n\tstorage ok?: y/n,\n\tloading issues: {\n\t\t\tstairs: y/n,\n\t\t\tdrive up?: y/n,\n\t\t\tEntrance type:{\n\t\t\t\t\tgarage door\n\t\t\t\t\thouse door\n\t\t\t\t\tbarn door\n\t\t\t\t\tsliding glass\n\t\t\t\t\tchimney\n\t\t\t\t}\n\t\t}\n\tpictures: img,\n\tagree to terms of use?: y/n\n}\n\n -->';

}
return __p
};

this["JST"]["assets/templates/spaceregister.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<section class="user-form">\n\t<button type="button" href="#" ui-sref-active="active" ui-sref="home"><span>Home</span></button>\n\t<div class="avatar"></div>\n\t<h1>Register</h1>\n\t<form class="form" ng-submit="register(credentials)" novalidate>\n\t\t<label ng-class="error.identifier ? \'error\' : \'\'">\n\t\t\t<input type="text" placeholder="Email" ng-model="credentials.identifier">\n\t\t\t<p class="error" ng-bind="error.identifier"></p>\n\t\t</label>\n\t\t<label ng-class="error.password ? \'error\' : \'\'">\n\t\t\t<input type="password" placeholder="Password" ng-model="credentials.password">\n\t\t\t<p class="error" ng-bind="error.password"></p>\n\t\t</label>\n\t\t<button type="submit">Submit</button>\n\t</form>\n\t\t<a type="button" href="#" ui-sref-active="active" ui-sref="login" ng-hide="true"><span>Login</span></a>\n</section>';

}
return __p
};