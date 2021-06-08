var Notyf=function(){"use strict";var n,t,o=function(){return(o=Object.assign||function(t){for(var i,e=1,n=arguments.length;e<n;e++)for(var o in i=arguments[e])Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o]);return t}).apply(this,arguments)},s=(i.prototype.on=function(t,i){var e=this.listeners[t]||[];this.listeners[t]=e.concat([i])},i.prototype.triggerEvent=function(t,i){var e=this;(this.listeners[t]||[]).forEach(function(t){return t({target:e,event:i})})},i);function i(t){this.options=t,this.listeners={}}(t=n=n||{})[t.Add=0]="Add",t[t.Remove=1]="Remove";var v,e,a=(r.prototype.push=function(t){this.notifications.push(t),this.updateFn(t,n.Add,this.notifications)},r.prototype.splice=function(t,i){var e=this.notifications.splice(t,i)[0];return this.updateFn(e,n.Remove,this.notifications),e},r.prototype.indexOf=function(t){return this.notifications.indexOf(t)},r.prototype.onUpdate=function(t){this.updateFn=t},r);function r(){this.notifications=[]}(e=v=v||{}).Dismiss="dismiss";var c={types:[{type:"success",className:"notyf__toast--success",backgroundColor:"#3dc763",icon:{className:"notyf__icon--success",tagName:"i"}},{type:"error",className:"notyf__toast--error",backgroundColor:"#ed3d3d",icon:{className:"notyf__icon--error",tagName:"i"}}],duration:2e3,ripple:!0,position:{x:"right",y:"bottom"},dismissible:!(e.Click="click")},p=(d.prototype.on=function(t,i){var e;this.events=o(o({},this.events),((e={})[t]=i,e))},d.prototype.update=function(t,i){i===n.Add?this.addNotification(t):i===n.Remove&&this.removeNotification(t)},d.prototype.removeNotification=function(t){var i,e,n=this,o=this._popRenderedNotification(t);o&&((e=o.node).classList.add("notyf__toast--disappear"),e.addEventListener(this.animationEndEventName,i=function(t){t.target===e&&(e.removeEventListener(n.animationEndEventName,i),n.container.removeChild(e))}))},d.prototype.addNotification=function(t){var i=this._renderNotification(t);this.notifications.push({notification:t,node:i}),this._announce(t.options.message||"Notification")},d.prototype._renderNotification=function(t){var i,e=this._buildNotificationCard(t),n=t.options.className;return n&&(i=e.classList).add.apply(i,n.split(" ")),this.container.appendChild(e),e},d.prototype._popRenderedNotification=function(t){for(var i=-1,e=0;e<this.notifications.length&&i<0;e++)this.notifications[e].notification===t&&(i=e);if(-1!==i)return this.notifications.splice(i,1)[0]},d.prototype.getXPosition=function(t){var i;return(null===(i=null==t?void 0:t.position)||void 0===i?void 0:i.x)||"right"},d.prototype.getYPosition=function(t){var i;return(null===(i=null==t?void 0:t.position)||void 0===i?void 0:i.y)||"bottom"},d.prototype.adjustContainerAlignment=function(t){var i=this.X_POSITION_FLEX_MAP[this.getXPosition(t)],e=this.Y_POSITION_FLEX_MAP[this.getYPosition(t)],n=this.container.style;n.setProperty("justify-content",e),n.setProperty("align-items",i)},d.prototype._buildNotificationCard=function(n){var t,o=this,i=n.options,e=i.icon;this.adjustContainerAlignment(i);var s=this._createHTLMElement({tagName:"div",className:"notyf__toast"}),a=this._createHTLMElement({tagName:"div",className:"notyf__ripple"}),r=this._createHTLMElement({tagName:"div",className:"notyf__wrapper"}),c=this._createHTLMElement({tagName:"div",className:"notyf__message"});c.innerHTML=i.message||"";var p,d,l,u,f,h=i.background||i.backgroundColor;e&&"object"==typeof e&&(p=this._createHTLMElement({tagName:"div",className:"notyf__icon"}),d=this._createHTLMElement({tagName:e.tagName||"i",className:e.className,text:e.text}),(l=null!==(t=e.color)&&void 0!==t?t:h)&&(d.style.color=l),p.appendChild(d),r.appendChild(p)),r.appendChild(c),s.appendChild(r),h&&(i.ripple?(a.style.background=h,s.appendChild(a)):s.style.background=h),i.dismissible&&(u=this._createHTLMElement({tagName:"div",className:"notyf__dismiss"}),f=this._createHTLMElement({tagName:"button",className:"notyf__dismiss-btn"}),u.appendChild(f),r.appendChild(u),s.classList.add("notyf__toast--dismissible"),f.addEventListener("click",function(t){var i,e;null!==(e=(i=o.events)[v.Dismiss])&&void 0!==e&&e.call(i,{target:n,event:t}),t.stopPropagation()})),s.addEventListener("click",function(t){var i,e;return null===(e=(i=o.events)[v.Click])||void 0===e?void 0:e.call(i,{target:n,event:t})});var m="top"===this.getYPosition(i)?"upper":"lower";return s.classList.add("notyf__toast--"+m),s},d.prototype._createHTLMElement=function(t){var i=t.tagName,e=t.className,n=t.text,o=document.createElement(i);return e&&(o.className=e),o.textContent=n||null,o},d.prototype._createA11yContainer=function(){var t=this._createHTLMElement({tagName:"div",className:"notyf-announcer"});t.setAttribute("aria-atomic","true"),t.setAttribute("aria-live","polite"),t.style.border="0",t.style.clip="rect(0 0 0 0)",t.style.height="1px",t.style.margin="-1px",t.style.overflow="hidden",t.style.padding="0",t.style.position="absolute",t.style.width="1px",t.style.outline="0",document.body.appendChild(t),this.a11yContainer=t},d.prototype._announce=function(t){var i=this;this.a11yContainer.textContent="",setTimeout(function(){i.a11yContainer.textContent=t},100)},d.prototype._getAnimationEndEventName=function(){var t,i=document.createElement("_fake"),e={MozTransition:"animationend",OTransition:"oAnimationEnd",WebkitTransition:"webkitAnimationEnd",transition:"animationend"};for(t in e)if(void 0!==i.style[t])return e[t];return"animationend"},d);function d(){this.notifications=[],this.events={},this.X_POSITION_FLEX_MAP={left:"flex-start",center:"center",right:"flex-end"},this.Y_POSITION_FLEX_MAP={top:"flex-start",center:"center",bottom:"flex-end"};var t=document.createDocumentFragment(),i=this._createHTLMElement({tagName:"div",className:"notyf"});t.appendChild(i),document.body.appendChild(t),this.container=i,this.animationEndEventName=this._getAnimationEndEventName(),this._createA11yContainer()}function l(t){var n=this;this.dismiss=this._removeNotification,this.notifications=new a,this.view=new p;var i=this.registerTypes(t);this.options=o(o({},c),t),this.options.types=i,this.notifications.onUpdate(function(t,i){return n.view.update(t,i)}),this.view.on(v.Dismiss,function(t){var i=t.target,e=t.event;n._removeNotification(i),i.triggerEvent(v.Dismiss,e)}),this.view.on(v.Click,function(t){var i=t.target,e=t.event;return i.triggerEvent(v.Click,e)})}return l.prototype.error=function(t){var i=this.normalizeOptions("error",t);return this.open(i)},l.prototype.success=function(t){var i=this.normalizeOptions("success",t);return this.open(i)},l.prototype.open=function(i){var t=this.options.types.find(function(t){return t.type===i.type})||{},e=o(o({},t),i);this.assignProps(["ripple","position","dismissible"],e);var n=new s(e);return this._pushNotification(n),n},l.prototype.dismissAll=function(){for(;this.notifications.splice(0,1););},l.prototype.assignProps=function(t,i){var e=this;t.forEach(function(t){i[t]=null==i[t]?e.options[t]:i[t]})},l.prototype._pushNotification=function(t){var i=this;this.notifications.push(t);var e=void 0!==t.options.duration?t.options.duration:this.options.duration;e&&setTimeout(function(){return i._removeNotification(t)},e)},l.prototype._removeNotification=function(t){var i=this.notifications.indexOf(t);-1!==i&&this.notifications.splice(i,1)},l.prototype.normalizeOptions=function(t,i){var e={type:t};return"string"==typeof i?e.message=i:"object"==typeof i&&(e=o(o({},e),i)),e},l.prototype.registerTypes=function(t){var i=(t&&t.types||[]).slice();return c.types.map(function(e){var n=-1;i.forEach(function(t,i){t.type===e.type&&(n=i)});var t=-1!==n?i.splice(n,1)[0]:{};return o(o({},e),t)}).concat(i)},l}();
// 提示弹窗
function warn(msg) {
    new Notyf().error(msg)
}
function notice(msg) {
    new Notyf().success(msg)
}
function params(json) {
    let paramArr = []
    for (let p in json) {
        paramArr.push(p + '=' + json[p])
    }
    return paramArr.join('&')
}
function get(url, data, callback, format) {
    //创建异步对象
    var xhr = null
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else if (window.ActiveXObject) {//IE6及以下
        xhr = new ActiveXObject('Microsoft.XMLHTTP');
    }
    //判断data是否为空
    if (data) {
        url = url + '?' + params(data);
    }
    //设置请求行
    xhr.open('get', url);
    //设置请求头(get可以省略)
    //注册回调函数
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            //调用传递的回调函数
            callback(((format == 'json') ? JSON.parse(xhr.responseText) : xhr.responseText));
        }
    }
    //发送请求主体
    xhr.send(null);
}
function post(url, data, callback, format) {
    //创建异步对象
    var xhr = null
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else if (window.ActiveXObject) {//IE6及以下
        xhr = new ActiveXObject('Microsoft.XMLHTTP');
    }
    //设置请求行
    xhr.open('post', url);
    //设置请求头(post有数据发送才需要设置请求头)
    //判断是否有数据发送
    if (data) {
        xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
    }
    //注册回调函数
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            //调用传递的回调函数
            callback(((format == 'json') ? JSON.parse(xhr.responseText) : xhr.responseText));
        }
    }
    //发送请求主体
    xhr.send(params(data));
}
var root = 'https://w.url.cy'
var nodeTime = new Date("12/2/2019"),
    now = new Date(),
    ile = now.getTime() - nodeTime.getTime(),
    dni = Math.floor(ile / (1000 * 60 * 60 * 24));

var app = new Vue({
    el: '#app',
    data: {
        copyear: now.getFullYear(),
        days: +dni,
        short: {
            postUrl: root + '/api/create',
            url: '',
            dwz: '',
        },
        long: {
            postUrl: root + '/api/restore',
            dwz: '',
            url: '',
        },
        type: true
    },
    methods: {
        create: function () {
            var that = this;
            if (!that.short.url) {
                warn('请先输入源网址')
                return;
            }
            post(that.short.postUrl, {
                url: that.short.url,
                token: '018C943A18A752974758EFAEF2DFC62F'
            }, function (res) {
                if (res.code === 1) {
                    that.short.dwz = res.data;
                    notice(res.msg)
                } else {
                    warn(res.msg)
                    return;
                }
            }, 'json');
        },
        restore: function () {
            var that = this;
            if (!that.long.dwz) {
                warn('请先输入短网址')
                return;
            }
            post(that.long.postUrl, {
                source: that.long.dwz
            }, function (res) {
                if (res.code === 1) {
                    that.long.url = res.data;
                    notice(res.msg)
                } else {
                    warn(res.msg)
                    return;
                }
            }, 'json');
        },
        open: function (url) {
            window.open(url);
        }
    }
})