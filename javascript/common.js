function getId(value) {
        return document.getElementById(value);
    }
    function getClass(value) {
        return document.getElementsByClassName(value);
    }
    function getTag(value) {
        return document.getElementsByTagName(value);
    }
    //trim
    function trim(value) {
        var text = value ? value.replace(/(^\s+)|(\s+$)/g, '') : '';
        return text;
    }
    //ajax post
    function Post(option) {
        var url = option.url || "";
        var data = (function() {
            var text = '';
            if (option.data && option.data.constructor == Object) {
                var arr = [];
                for (var key in option.data) {
                    arr.push(key + '=' + option.data[key]);
                }
                text = arr.join('&');
            }
            return text;
        })();
        var toJson = option.dataType == 'text' ? false : true;
        var success = option.success || function() {};
        var error = option.error || function() {};
        var timeout = option.timeout || 30000;
        var isTimeout = false;
        var http = new XMLHttpRequest();
        var timer = setTimeout(function() {
            isTimeout = true;
            http.abort();
            error();
        }, timeout);
        http.open("POST", url, true);
        http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        http.onreadystatechange = function() {
            if (http.readyState != 4 || isTimeout) {
                return;
            }
            clearTimeout(timer);
            if (http.status == 200) {
                var response = toJson ? JSON.parse(http.responseText) : http.responseText;
                success(response);
            } else {
                error();
            }
        };
        http.send(data);
    }
    //loading
    function Loading() {
        var obj = document.createElement('div');
        var box = document.createElement('div');
        var img = document.createElement('div');
        var txt = document.createElement('p');
        obj.className = 'circle-box none';
        box.className = 'circle_animate';
        img.className = 'circle';
        box.appendChild(img);
        box.appendChild(txt);
        obj.appendChild(box);
        if (script) {
            script.parentNode.insertBefore(obj, script);
        } else {
            document.body.appendChild(obj);
        }
        this.show = function(value) {
            txt.innerHTML = value || '...';
            obj.classList.remove('none');
        };
        this.hide = function() {
            obj.classList.add('none');
            txt.innerHTML = '';
        };
    }
    //tips
    function Tips() {
        var obj = document.createElement('div');
        var box = document.createElement('div');
        var con = document.createElement('div');
        var txt = document.createElement('div');
        var p = document.createElement('p');
        var btn = document.createElement('span');
        obj.className = 'pop_wrapper none';
        box.className = 'pop_outer';
        con.className = 'pop_cont';
        txt.className = 'pop_tip';
        p.className = 'border b_top';
        btn.className = 'pop_wbtn';
        btn.innerHTML = '知道了';
        p.appendChild(btn);
        con.appendChild(txt);
        con.appendChild(p);
        box.appendChild(con);
        obj.appendChild(box);
        if (script) {
            script.parentNode.insertBefore(obj, script);
        } else {
            document.body.appendChild(obj);
        }
        function hideFun() {
            obj.classList.add('none');
        }
        this.show = function(value, callback) {
            var fun = callback || hideFun;
            txt.innerHTML = value || ' ';
            btn.onclick = callback || hideFun;
            obj.classList.remove('none');
        };
        this.qrcode = function(value, callback) {
            var fun = callback || hideFun;
            txt.innerHTML = value || ' ';
            btn.onclick = callback || hideFun;
            obj.classList.remove('none');
        };
        this.hide = hideFun;
    }
    document.addEventListener('touchmove', function(e) { e.preventDefault(); }, false);
    document.body.addEventListener('touchstart', function() {}, false);
    var ua = navigator.userAgent.toLowerCase();
    var script = document.body.getElementsByTagName('script')[0];
    var loading = new Loading();
    var tips = new Tips();
    //insert
    function keypress(e) {
        e.preventDefault();
        var target = e.target;
        var value = target.getAttribute('data-value');
        var dot = valueCur.match(/\.\d{2,}$/);
        if (!value || (value !== 'delete' && dot)) {
            return;
        }
        switch (value) {
            case '0':
                valueCur = valueCur === '0' ? valueCur : valueCur + value;
                break;
            case 'dot':
                valueCur = valueCur === '' ? valueCur : valueCur.indexOf('.') > -1 ? valueCur : valueCur + '.';
                break;
            case 'delete':
                valueCur = valueCur.slice(0, valueCur.length - 1);
                break;
            default:
                valueCur = valueCur === '0' ? value : valueCur + value;
        }
        format();
    }
    //format
    function format() {
        var arr = valueCur.split('.');
        var right = arr.length === 2 ? '.' + arr[1] : '';
        var num = arr[0];
        var left = '';
        while (num.length > 3) {
            left = ',' + num.slice(-3) + left;
            num = num.slice(0, num.length - 3);
        }
        left = num + left;
        valueFormat = left + right;
        valueFinal = valueCur === '' ? 0 : parseFloat(valueCur);
        check();
    }
    //check
    function check() {
        amount.innerHTML = valueFormat;
        if (valueFormat.length > 0) {
            clearBtn.classList.remove('none');
        } else {
            clearBtn.classList.add('none');
        }
        if (valueFinal === 0 || valueCur.match(/\.$/)) {
            payBtn.classList.add('disable');
        } else {
            payBtn.classList.remove('disable');
        }
    }
    //clear
    function clearFun() {
        valueCur = '';
        valueFormat = '';
        valueFinal = 0;
        amount.innerHTML = '';
        clearBtn.classList.add('none');
        payBtn.classList.add('disable');
    }
    //submit
    function submitFun() {
        if (!submitAble || payBtn.classList.contains('disable')) {
            return;
        }
        if (valueFinal === 0) {
            tips.show('请输入金额！');
            return;
        }
        if (valueFinal > 1000) { tips.show('支付金额不能大于1000');
            return; }
        submitAble = false;
        loading.show();
        callpay();
        return;
    }
    var keyboard = getId('keyboard');
    var amount = getId('amount');
    var clearBtn = getId('clearBtn');
    var payBtn = getId('payBtn');
    var remarkBtn = getId('remarkBtn');
    var remarkPop = getId('remarkPop');
    // var remarkInput = getId('remarkInput');
    var remarkCancel = getId('remarkCancel');
    var remarkConfirm = getId('remarkConfirm');
    var valueCur = '';
    var valueFormat = '';
    var valueFinal = 0;
    var submitAble = true;
    new Hammer(keyboard).on('tap', keypress);
    new Hammer(payBtn).on('tap', submitFun);
    new Hammer(clearBtn).on('tap', clearFun);
    // remarkInput.value = '';
