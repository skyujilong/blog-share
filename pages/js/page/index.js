'use strict';
import '../../scss/base.scss';
console.log('index..................');

// alert('2333');
import '../mods/ui/qb';
import( /* webpackChunkName: "test" */ '../mods/ui/asyn/index.js').then((module) => {
    console.log('done.....');
},()=>{
    console.log('error');
});
if(module.hot){
    module.hot.accept();
}