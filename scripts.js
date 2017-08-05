var statBTN = document.getElementById('start');
var intro = document.getElementById('intro');
var step1 = document.getElementById('step1');
var next2 = document.getElementById('next2');
var step2 = document.getElementById('step2');
var nextStudent = document.getElementById('nextStudent');
var step3s = document.getElementById('step3s');
var warning = document.getElementById('importantMessage');
var verifiedS = document.getElementById('verifiedS');
var studentInfo = verifiedS.getAttribute('disabled');
var phase1 = document.getElementById('step3s').querySelectorAll('input');
var one = document.getElementById('1');
var two = document.getElementById('2');
var three = document.getElementById('3');
var four = document.getElementById('4');
var five = document.getElementById('5');
var six = document.getElementById('6');
var copyUserNameBtn = document.getElementById('copy1');
var copyPassword = document.getElementById('copy2');
var userName = document.getElementById('copy-username');
var password = document.getElementById('copy-password');
var copied1 = document.getElementById('copied1');
var copied2 = document.getElementById('copied2');
var step4s = document.getElementById('step4s');
var nextVerification = document.getElementById('nextVerification');
var phase2Needed = document.getElementById('phase2Needed');
var phase2Container = document.getElementById('phase2Container');
var faqs = document.getElementById('faqs');
var credentials = document.getElementById('credentials');
var step5s = document.getElementById('step5s');
var nextTeacher = document.getElementById('nextTeacher');
var step3t = document.getElementById('step3t');

statBTN.addEventListener("click", function () {
    intro.classList.add("animated", "bounceOut");
    credentials.classList.add('hideItem');
    setTimeout(function () {
        intro.classList.add("hideItem");
        step1.classList.remove('hideItem');
        step1.classList.add('animated', 'bounceInUp');
    }, 750)
});
next2.addEventListener('click', function () {
    step1.classList.add("animated", "slideOutLeft");
    setTimeout(function () {
        step1.classList.add('hideItem');
        step2.classList.remove('hideItem');
        step2.classList.add("animated", "slideInRight")
    }, 750)

});
nextStudent.addEventListener("click", function () {
    step2.classList.add("animated", "slideOutLeft");
    credentials.classList.remove('hideItem');
    setTimeout(function () {
        step2.classList.add('hideItem');
        step3s.classList.remove('hideItem');
        step3s.classList.add("animated", "fadeInDownBig");
    }, 750)
    credentials.classList.add('animated', 'fadeIn');
    setTimeout(function () {
        warning.classList.remove('infinite');
    }, 7700)
});
verifiedS.addEventListener('click', function () {
    if (one.checked === true && two.checked === true && three.checked === true && four.checked === true && five.checked === true || six.checked === true) {
        step4s.classList.add("animated", "slideOutLeft");
        window.scroll(0, 0);
        setTimeout(function () {
            step4s.classList.add('hideItem');
            step5s.classList.remove('hideItem');
            step5s.classList.remove('animated', 'bouceInUp');
        }, 750)

    }
});
nextVerification.addEventListener('click', function () {
    step3s.classList.add('animated', "slideOutLeft");
    window.scroll(0, 0);
    setTimeout(function () {
        step3s.classList.add('hideItem');
        step4s.classList.remove('hideItem');
        step4s.classList.add("animated", "slideInRight");

    }, 750)

});
function checked() {
    if (one.checked === true && two.checked === true && three.checked === true && four.checked === true && five.checked === true) {
        verifiedS.textContent = "YAY! -Next Step";
        verifiedS.classList.toggle('cursorDisabled');
        verifiedS.classList.toggle('pointer');
        phase2Needed.classList.add('hideItem');
    } else if (six.checked === true) {
        verifiedS.textContent = "YAY! -Next Step";
        verifiedS.classList.toggle('cursorDisabled');
        verifiedS.classList.add('pointer');
    } else {
        verifiedS.textContent = "COLLECT INFO BEFORE PROCEEDING";
        verifiedS.classList.add('cursorDisabled');
    }
}
copyUserNameBtn.addEventListener('click', function () {
    userName.select();
    document.execCommand('copy');
    copied1.classList.remove('hideItem');
});
copyPassword.addEventListener('click', function () {
    password.select();
    document.execCommand('copy');
    copied2.classList.remove('hideItem');
});

phase2Needed.addEventListener('click', function () {
    this.classList.add('animated', 'bounceOutDown');
    setTimeout(function () {
        phase2Needed.classList.add('hideItem');
        phase2Container.classList.remove('hideItem');
        phase2Container.classList.add('animated', 'jackInTheBox');
    }, 750)
});

function on() {
    document.getElementById("overlay").style.display = "block";
}

function off() {
    document.getElementById("overlay").style.display = "none";
}

nextTeacher.addEventListener('click', function () {
    step2.classList.add("animated", "slideOutLeft");
    credentials.classList.remove('hideItem');
    setTimeout(function () {
        step2.classList.add('hideItem');
        step3t.classList.remove('hideItem');
        step3t.classList.add('animated', 'fadeIn');
    }, 750)

});

verifiedT.addEventListener('click', function () {
    alert('I have verified their identity by checking their courses in Canvas');
    step3t.classList.add('animated', 'slideOutLeft');
    setTimeout(function () {
        step3t.classList.add('hideItem');
        
    }, 750)
});