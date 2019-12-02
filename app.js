(function () {
    'use strict';
    var __env = {};
    if(window){
        Object.assign(__env, window.__env); // env.js config
    }

    angular
        .module('app', [/*injections*/])
        .constant('__env',  __env)
})();