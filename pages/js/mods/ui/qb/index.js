'use strict';

let qqLib = '//jsapi.qq.com/get?api=app.share';

let script = document.createElement('script');
script.src = qqLib;
var UA = navigator.userAgent;
script.onload = ()=>{
    // alert('load......');
    // var UA = navigator.appVersion;
    // alert(UA.split("MQQBrowser/").length > 1);
    // alert(browser.app);
    // browser.app.share({
    //     title: '11111',
    //     description: '22222',
    //     url: location.href,
    //     img_url: 'http://n.sinaimg.cn/blog/0977ce10/20171220/blogShareLogo.png',
    //     // from: 'web',
    //     to_app: 1
    // });
}
document.body.append(script);

let sp = document.createElement('span');
sp.innerHTML = UA;
document.body.append(sp);
// alert(1111);
// alert(browser.app);

// browser.app.share({
//     title: 11111,
//     description: 22222,
//     url: location.href,
//     img_url: '',
//     from: 'web',
//     to_app: 1
// });


