this["JST"] = this["JST"] || {};

this["JST"]["assets/templates/band.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<html ng-controller="BandCtrl">\n   <div id="band-div"><button id="band-button" type="button" href="#" ui-sref-active="active" ui-sref="home">\n      Home\n   </button>\n   </div>\n   <br>\n   <div id="search-form">\n   <h3>Find the perfect practice pad!</h3>\n   <strong>Which city? </strong>\n   <input type="input" placeholder="Type City Name Here" class="city-name"  ng-model="usercity">\n   </input>\n   <br><br>\n   <button type="submit" id="search-button" ng-click="findCityBand()">Search\n   </button>\n   </div>\n<div id="mobile-list" class="table-data">\n   <br>\n   <ul ng-repeat="data in response" class="container"><!--user-->\n      <li>{{data.username}}</li>\n      <li>{{data.city}}</li>\n      <li>{{data.spacetypes}}</li>\n      <li>{{data.loading}}</li>\n      <li>{{data.storage}}</li>\n      <li>{{data.alcohol}}</li>\n      <li>{{data.smoking}}</li>\n      <li class="mobile-list">{{data.guests}}</li>\n   </ul>\n   <br>\n</div>\n\t<table class="table table-striped table-bordered table-hover table-condensed table-responsive" ng-hide="schotz">\n<!--       <table class="appts_table" id="main-table" ng-hide="schotz"> -->\n         <!-- <tr id="column-headers" class="table-head"> -->\n         <tr>\n               <th>Username/Email </th>\n               <th> City</th>\n               <th>Type</th>\n               <th> Loading</th>\n               <th> Storage</th>\n               <th> Alcohol</th>\n               <th> Smoking</th>\n               <th> Guests</th>\n         </tr>\n         <tr ng-repeat="data in response">\n               <td>{{data.username}}</td>\n               <td>{{data.city}}</td>\n               <td>{{data.spacetypes}}</td>\n               <td>{{data.loading}}</td>\n               <td>{{data.storage}}</td>\n               <td>{{data.alcohol}}</td>\n               <td>{{data.smoking}}</td>\n               <td>{{data.guests}}</td>\n         </tr>\n    </table>\n</div>\n</html>';

}
return __p
};

this["JST"]["assets/templates/home.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div id="all-buttons">\n<button id="all-button" type="button" href="#" ui-sref-active="active" ui-sref="band"><span>Search for space</span></button><br>\n\n<button id="all-button" type="button" href="#" ui-sref-active="active" ui-sref="spaceregister"><span>List your space</span></button><br>\n\n<button id="all-button" type="button" href="#" ui-sref-active="active"  ng-click="logout()"><span>Logout</span></button>\n<br>\n<br>\n<br>\n{{logout}}\n</div>';

}
return __p
};

this["JST"]["assets/templates/login.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<section class="user-form">\n      <button id="all-button" type="button" href="#" ui-sref-active="active" ui-sref="home"><span>Home</span></button>\n      <div class="avatar"></div>\n      <h1>Log in</h1>\n      <form class="form" ng-submit="login(credentials)">\n            <label ng-class="error.identifier ? \'error\' : \'\'">\n                  <input type="text" placeholder="Email" ng-model="credentials.identifier">\n                  <p class="error" ng-bind="error.identifier"></p>\n            </label>\n            <label ng-class="error.password ? \'error\' : \'\'">\n                  <input type="password" placeholder="Password" ng-model="credentials.password">\n                  <p class="error" ng-bind="error.password"></p>\n            </label>\n            <button type="submit" id="all-button">Submit</button>\n      </form>\n</section>';

}
return __p
};

this["JST"]["assets/templates/master.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<button type="button" id="all-button" href="#" ui-sref-active="active" ui-sref="home"><span>Home</span></button>\n<div class="shared-space">\n<br>\n<div ng-show="submitSuccess">Thanks for sharing your space.<br><br>You totally RULE!</div>\n</div>\n<br>\n\n<section class="user-form" >\n\t<h3>TELL US ABOUT YOUR SPACE!</h3>\n\n</section>\n';

}
return __p
};

this["JST"]["assets/templates/spaceregister.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<section class="user-form">\n\t<div id="button-div">\n\t<button id="all-button" type="button" href="#" ui-sref-active="active" ui-sref="home"><span>Home</span></button>\n\t</div>\n\t<div class="avatar"></div>\n\t<p ng-hide="billy" class="rock-text">\n\t<strong>Thanks for posting!\n\t<br>\n\tYOU ROCK! </strong>\n\t</p>\n\n\t<form class="form" ng-submit="register(credentials)"  ng-show="goat" novalidate>\n\t\t<h1>Register</h1>\n\t\tUsername (email)<br>\n\t\t<label ng-class="error.identifier ? \'error\' : \'\'">\n\t\t\t<input type="text" placeholder="Email" ng-model="credentials.identifier">\n\t\t\t<p class="error" ng-bind="error.identifier"></p>\n\t\t</label>\n\t\t<div>\n\t\tPassword <br>\n\t\t<label ng-class="error.password ? \'error\' : \'\'">\n\t\t\t<input type="password" placeholder="8 Ltr/Nbr combo" ng-model="credentials.password">\n\t\t\t<p class="error" ng-bind="error.password"></p>\n\t\t</label>\n\t\t</div>\n\t\t<div>\n\t\tCity\n\t\t<br>\n\t\t<label ng-class="error.city ? \'error\' : \'\'">\n\t\t\t<input type="text" placeholder="Name of city" ng-model="credentials.city" class="error">\n\t\t\t<p class="error" ng-bind="error.city"></p>\n\t\t</label>\n\t\t</div>\n\t\t<div>\n\t\tType of place\n\t\t<br>\n\t\t<label ng-class="">\n\t\t\t<input list="spacetypes" ng-model="spacetypes" placeholder="What kind of place?">\n            <datalist id="spacetypes">\n                  <option value="Garage">hi</option>\n                  <option value="Barn">\n                  <option value="Basement">\n                  <option value="Warehouse">\n                  <option value="Attic">\n                  <option value="Living Room">\n               \t  <option value="Spare Room">\n                  <option value="Other">\n            </datalist>\n           <!--  <p class="error" ng-bind="error.password"></p> -->\n\t\t</label>\n\t\t</div>\n\t\t<br>\n\t\t<div>\n\t\tLoading Issues\n\t\t<br>\n\t\t<label ng-class="">\n\t\t\t<input list="loading" ng-model="loading" placeholder="Any obstacles?">\n            <datalist id="loading">\n                  <option value="None"></option>\n                  <option value="Locked Gate"></option>\n                  <option value="Stairs"></option>\n                  <option value="Guard Dogs"></option>\n                  <option value="Limited Parking"></option>\n                  <option value="Moat"></option>\n            </datalist>\n           <!--  <p class="error" ng-bind="error.password"></p> -->\n\t\t</label>\n\t\t</div>\n\t\t<br>\n\t\t<div>\n\t\tSecure Overnight Storage\n\t\t<br>\n\t\t<label ng-class="">\n\t\t\t<input list="storage" ng-model="storage" placeholder="Secure/available?">\n            <datalist id="storage">\n                  <option value="Yes"></option>\n                  <option value="No"></option>\n            </datalist>\n           <!--  <p class="error" ng-bind="error.password"></p> -->\n\t\t</label>\n\t\t</div>\n\t\t<br>\n\t\t<div>\n\t\tAlcohol\n\t\t<br>\n\t\t<label ng-class="">\n\t\t\t<input list="alcohol" ng-model="alcohol" placeholder="Alcohol allowed?">\n            <datalist id="alcohol">\n                  <option value="Yes"></option>\n                  <option value="No"></option>\n            </datalist>\n           <!--  <p class="error" ng-bind="error.password"></p> -->\n\t\t</label>\n\t\t</div>\n\t\t<br>\n\t\t<div>\n\t\tIndoor smoking \n\t\t<br>\n\t\t<label ng-class="">\n\t\t\t<input list="smoking" ng-model="smoking" placeholder="Smoking allowed?">\n            <datalist id="smoking">\n                  <option value="Yes"></option>\n                  <option value="Nowhere"></option>\n                  <option value="Outside"></option>\n            </datalist>\n           <!--  <p class="error" ng-bind="error.password"></p> -->\n\t\t</label>\n\t\t<br><br>\n\t\t<div>\n\t\tGuests \n\t\t<br>\n\t\t<label ng-class="">\n\t\t\t<input list="guests" ng-model="guests" placeholder="Guests?">\n            <datalist id="guests">\n                  <option value="Yes, come on over!"></option>\n                  <option value="Band only"></option>\n                  <option value="1 per bandmate"></option>\n                  <option value="TBD">\n            </datalist>\n           <!--  <p class="error" ng-bind="error.password"></p> -->\n\t\t</label>\n\t\t</div>\n\t\t<br>\n\t\t<button type="submit" id="form-button">Submit</button>\n\t</form>\n\t\t<a type="button" href="#" ui-sref-active="active" ui-sref="login" ng-hide="true"><span>Login</span></a>\n\t\t<span>{{errormessage}}</span>\n</section>';

}
return __p
};