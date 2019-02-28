'use strict';
console.log('hello pc');
import '../mods/ui/qb';
import( /* webpackChunkName: "test" */ '../mods/ui/asyn/index.js').then((module) => {
    console.log('done.....');
}, () => {
    console.log('error');
});