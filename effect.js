var images = [];

function preload() {
    for (var i = 0; i < arguments.length; i++) {
        images[i] = new Image();
        images[i].src = preload.arguments[i];
    }
}

//-- usage --//
preload(
    "adesh.jpg",
    "harshita.jpg",
    "tanya.jpg",
    "tanya.gif",
    "final-1.jpg",
    "final-2.jpg",
    "final-3.jpeg"
);
//$('#balloons_flying,#confetti_falling').fadeIn('slow');

let typeSpeed = 100;

function firstConversation() {
    const adeshOptions = {
        strings: ['^100Hmm^300.^300.^200.^400', 'You choose &#128521;'],
        typeSpeed: typeSpeed,
        showCursor: false,
        onComplete: function () {
            console.log("Typed event is firing!");
            //$('#bannar_coming').fadeIn('slow');
            $('#balloons_flying,#confetti_falling').fadeIn('slow');
        }
    };

    const harshitaOptions = {
        strings: ['^150 <i>Hey !</i> ^300', 'What\'s next ?^200'],
        typeSpeed: typeSpeed,
        showCursor: false,
        onComplete: function () {
            $('#character-box-adesh-1').show().on('animationend', function () {
                new Typed('#adesh-says-text-1', adeshOptions);
            });
        }
    };

    $('#character-box-harshita-1').show().on('animationend', function () {
        new Typed('#harshita-says-text-1', harshitaOptions);
    });
}

animationCount = 0;

function completeAnimation() {
    if (animationCount > 0) {
        $('.cake').fadeIn('slow', function () {
            $('#light_candle').fadeIn('slow');
        });
    } else animationCount++;
}

function secondConversation() {

    const harshitaOptions = {
        strings: ['^100 Awww^50.^50.^50.', 'Thank you &#128522;'],
        typeSpeed: typeSpeed,
        showCursor: false,
        onComplete: function () {
            $('#character-box-adesh-2').fadeTo('slow', 0);
            $('#character-box-harshita-2').addClass('move-h-up').on('transitionend', completeAnimation);
            $('#banner').animate({height: 0}, {
                duration: 1000,
                complete: completeAnimation
            });
        }
    };

    const adeshOptions = {
        strings: ['^200 Listen...', '^200 I got a cake!^300'],
        typeSpeed: typeSpeed,
        showCursor: false,
        onComplete: function () {
            $('#character-box-harshita-2').show().on('animationend', function () {
                new Typed('#harshita-says-text-2', harshitaOptions);
            });
        }
    };

    $('#character-box-adesh-2').show().on('animationend', function () {
        new Typed('#adesh-says-text-2', adeshOptions);
    });
}

function thirdConversation() {

    const tanyaOptions = {
        strings: ['^200 Eeeeeeeeeeek!!!^300', '^200 Let\'s run Harshu!^300'],
        typeSpeed: typeSpeed,
        showCursor: false,
        onComplete: function () {
            $('#run_away').fadeIn('slow');
        }
    };

    $('#character-box-tanya-1 .character').show().on('animationend', function () {
        new Typed('#tanya-says-text-1', tanyaOptions);
    });
}

function applyFixes() {
    if (window.innerHeight < 600) {
        let gutter = 70;
        let splitHeight = Math.floor((window.innerHeight - gutter) / 2);
        $('.custom-message,.message-col,.photo-col').css('height', splitHeight + "px");
    }

    if (window.innerHeight > 700) {
        let gutter = (window.innerHeight - 700);
        $('#main-content').css('margin-top', (gutter > 200 ? 200 : gutter) + "px");
    }
    $('body').removeClass('peach-after');
}

function finalArc() {
    const options3 = {
        strings: ['^200 I made a <u>SPECIAL</u> friend'],
        typeSpeed: typeSpeed,
        showCursor: false,
        onComplete: finalArc2
    };

    const options2 = {
        strings: ['^200 I <u>LAUGH</u> a lot more'],
        typeSpeed: typeSpeed,
        showCursor: false,
        onComplete: function () {
            new Typed('#quote-3', options3);
        }
    };

    const options1 = {
        strings: ['^200 I <u>TRUST</u> a little more'],
        typeSpeed: typeSpeed,
        showCursor: false,
        onComplete: function () {
            new Typed('#quote-2', options2);
        }
    };

    const options0 = {
        strings: ['^200 Because of you'],
        typeSpeed: typeSpeed,
        showCursor: false,
        onComplete: function () {
            new Typed('#quote-1', options1);
        }
    };

    applyFixes();
    $('.custom-message').show();
    $('#message-col-1').show();
    $('#photo-col-1').show().on('animationend', function () {
        new Typed('#because-1', options0);
    });
}


function finalArc2() {

    const options3 = {
        strings: ['^200 You are <u>PRECIOUS</u> to us'],
        typeSpeed: typeSpeed,
        showCursor: false,
        onComplete: finalArc3
    };

    const options2 = {
        strings: ['^200 Above all, always <u>remember</u>'],
        typeSpeed: typeSpeed,
        showCursor: false,
        onComplete: function () {
            new Typed('#quote-6', options3);
        }
    };

    const options1 = {
        strings: ['You are <u>FUNNY</u>', 'You are <u>SMART</u>', 'You are <u>CUTE</u>', 'You are <u>BEAUTIFUL</u>'],
        typeSpeed: typeSpeed,
        backSpeed: 150,
        startDelay: 200,
        showCursor: false,
        onComplete: function () {
            new Typed('#quote-5', options2);
        }
    };

    const options0 = {
        strings: ['^200 Beautiful you'],
        typeSpeed: typeSpeed,
        showCursor: false,
        onComplete: function () {
            new Typed('#quote-4', options1);
        }
    };

    setTimeout(function () {
        $('#photo-col-1').removeClass('animate__fadeInLeft').addClass('animate__fadeOutRight').fadeOut('slow');
        $('#message-col-1').fadeOut('slow', function () {
            $('#message-col-2').show();
            $('#photo-col-2').show().on('animationend', function () {
                new Typed('#because-2', options0);
            });
        });
    }, 500);
}


function finalArc3() {

    const options3 = {
        strings: ['^200 is already <u>YOURS!</u>'],
        typeSpeed: typeSpeed,
        showCursor: false,
        onComplete: function () {
            $('#heart').fadeTo('slow', 1, function () {
                finalArc4();
            });
        }
    };

    const options2 = {
        strings: ['^200 because the very <u>BEST</u>'],
        typeSpeed: typeSpeed,
        showCursor: false,
        onComplete: function () {
            new Typed('#quote-9', options3);
        }
    };

    const options1 = {
        strings: ['^200 Besties are hard to find'],
        typeSpeed: typeSpeed,
        backSpeed: 150,
        startDelay: 200,
        showCursor: false,
        onComplete: function () {
            new Typed('#quote-8', options2);
        }
    };

    const options0 = {
        strings: ['^200 Besties forever'],
        typeSpeed: typeSpeed,
        showCursor: false,
        onComplete: function () {
            new Typed('#quote-7', options1);
        }
    };

    setTimeout(function () {
        $('#photo-col-2').removeClass('animate__fadeInLeft').addClass('animate__fadeOutRight').fadeOut('slow');
        $('#message-col-2').fadeOut('slow', function () {
            $('#message-col-3').show();
            $('#photo-col-3').show().on('animationend', function () {
                new Typed('#because-3', options0);
            });
        });
    }, 500);
}

function finalArc4() {
    const options1 = {
        strings: ['^200 And finally', 'I want to wish you!'],
        typeSpeed: typeSpeed,
        backSpeed: 150,
        startDelay: 200,
        showCursor: false,
        onComplete: finalArc5
    };

    const options0 = {
        strings: ['^200 Birthday wishes'],
        typeSpeed: typeSpeed,
        showCursor: false,
        onComplete: function () {
            new Typed('#quote-10', options1);
        }
    };

    setTimeout(function () {
        $('#photo-col-3').removeClass('animate__fadeInLeft').addClass('animate__fadeOutRight').fadeOut('slow');
        $('#message-col-3').fadeOut('slow', function () {
            $('#message-col-4').show();
            new Typed('#because-4', options0);
        });
    }, 1000);
}

function fadeInSeries(n, end) {
    if (n > 6) end();
    else
        $('#name-letter-' + n).fadeIn('slow', function () {
            fadeInSeries(n + 1, end);
        })
}

calledOnce = false;

function finalArc5() {

    function expand() {

        const options6 = {
            strings: ['nyielding spirit'],
            startDelay: 200,
            cursor: false,
            typeSpeed: typeSpeed,
            onComplete: function () {
                setTimeout(() => {
                    $('.made-with-love').show();
                }, 800);
            }
        };

        const options5 = {
            strings: ['eavenly smile'],
            startDelay: 200,
            cursor: false,
            typeSpeed: typeSpeed,
            onComplete: function () {
                new Typed('#name-letter-6 .name-letter-expanded', options6);
            }
        };

        const options4 = {
            strings: ['exy', 'tunning eyes'],
            startDelay: 200,
            cursor: false,
            typeSpeed: typeSpeed,
            onComplete: function () {
                new Typed('#name-letter-5 .name-letter-expanded', options5);
            }
        };

        const options3 = {
            strings: ['adiant personality'],
            startDelay: 200,
            cursor: false,
            typeSpeed: typeSpeed,
            onComplete: function () {
                new Typed('#name-letter-4 .name-letter-expanded', options4);
            }
        };

        const options2 = {
            strings: ['ngelic face'],
            startDelay: 200,
            cursor: false,
            typeSpeed: typeSpeed,
            onComplete: function () {
                new Typed('#name-letter-3 .name-letter-expanded', options3);
            }
        };

        new Typed('#name-letter-1 .name-letter-expanded', {
            strings: ['eartwarming presence'],
            startDelay: 800,
            cursor: false,
            typeSpeed: typeSpeed,
            onComplete: function () {
                new Typed('#name-letter-2 .name-letter-expanded', options2);
            }
        })
    }

    function rest() {
        fadeInSeries(1, function () {
            $('.name-letter').css('transform', 'translateX(-35%)').on('transitionend', function () {
                if (!calledOnce) {
                    calledOnce = true;
                    expand();
                }
            });
        })
    }

    $('#message-col-4').fadeOut('slow');
    $('#message-col-5').show();
    $('#bulbs').fadeOut('slow');
    $('body')
        .css('transition', 'background-color linear 3s')
        .css('background-color', '#2d1b55')
        .on('transitionend', function () {
            $('#birthday-message').show().on('animationend', rest);
        });
}

$(window).load(function () {
    applyFixes();

    $('.loading').fadeOut('fast');
    $('.container').fadeIn('fast');
});

$('document').ready(function () {
    var audio = $('.song')[0];
    var darkAudio = $('.darkSong')[0];
    let peachAnimationEnded = false;

    function checkIfPeachAnimationEnded() {
        if (peachAnimationEnded)
            $('body').addClass('peach-after');
        else
            setTimeout(checkIfPeachAnimationEnded, 200);
    }

    $('#turn_on').click(function () {
        $('#bulb_yellow').addClass('bulb-glow-yellow');
        $('#bulb_red').addClass('bulb-glow-red');
        $('#bulb_blue').addClass('bulb-glow-blue');
        $('#bulb_green').addClass('bulb-glow-green');
        $('#bulb_pink').addClass('bulb-glow-pink');
        $('#bulb_orange').addClass('bulb-glow-orange');
        $('body').addClass('peach');
        setTimeout(() => {
            peachAnimationEnded = true;
        }, 5000);
        $(this).fadeOut('slow').delay(0).promise().done(function () {
            $('#play').fadeIn('fast');
        });
    });
    $('#play').click(function () {
        audio.play();
        $('#bulb_yellow').addClass('bulb-glow-yellow-after');
        $('#bulb_red').addClass('bulb-glow-red-after');
        $('#bulb_blue').addClass('bulb-glow-blue-after');
        $('#bulb_green').addClass('bulb-glow-green-after');
        $('#bulb_pink').addClass('bulb-glow-pink-after');
        $('#bulb_orange').addClass('bulb-glow-orange-after');
        //$('body').css('backgroud-color', '#FFF');
        checkIfPeachAnimationEnded();

        $(this).fadeOut('slow');
        $(this).delay(1600).promise().done(firstConversation);
    });

    $('#bannar_coming').click(function () {
        $('.bannar').addClass('bannar-come');
        $(this).fadeOut('slow').delay(6000).promise().done(function () {
            $('#balloons_flying,#confetti_falling').fadeIn('slow');
        });
    });

    function animate() {
        const balloonSpace = 100;
        const numBalloonsPerRow = Math.ceil(window.innerWidth / balloonSpace) + 1;
        let balloonsAnimated = 0;
        let rows = 1;
        let balloons = 0;
        $('.balloons').each(function () {
            const $balloon = $(this);
            if (balloonsAnimated === numBalloonsPerRow) {
                balloonsAnimated = 0;
                rows++;
            }

            if (++balloons % 2 === 0) {
                $balloon.addClass('balloons-rotate-behaviour-one');
            } else {
                $balloon.addClass('balloons-rotate-behaviour-two');
            }

            $balloon.css('bottom', -250 * rows);
            $balloon.css('left', balloonsAnimated === 0 ? 50 * Math.random() : balloonSpace * balloonsAnimated + (150 * Math.random()));
            $balloon.animate({
                top: -400
            }, 14000);
            balloonsAnimated++;
        });
    }

    $('#balloons_flying').click(function () {
        $('.balloon-border').animate({top: -500}, 10000);
        animate();

        $('#balloons_flying,#confetti_falling').fadeOut('slow').delay(2000).promise().done(function () {
            $('.character-box').fadeOut('slow', function () {
                setTimeout(() => {
                    $('#cake_fadein').fadeIn('slow');
                    $('#test-1').hide();
                }, 1500);
            });
        });
    });

    $('#confetti_falling').click(function () {
        confetti.speed = 1;
        confetti.frameInterval = 40;
        confetti.start();

        $('#balloons_flying,#confetti_falling').fadeOut('slow').delay(2000).promise().done(function () {
            $('.character-box').fadeOut('slow', function () {
                setTimeout(() => {
                    $('#cake_fadein').fadeIn('slow');
                    $('#test-1').hide();
                }, 1500);
            });
        });
    });


    $('#cake_fadein').click(function () {
        $('.balloons').fadeOut({queue: false, duration: 'slow'}, function () {
            $('.balloons').remove();
        });
        confetti.stop();
        $(this).fadeOut('slow');
        $(this).delay(1600).promise().done(secondConversation);
    });

    $('#light_candle').click(function () {
        $('.fuego').fadeIn('slow');
        $(this).fadeOut('slow').delay(2000).promise().done(function () {

            $('#wish_message').fadeIn('slow');

            let isShown = sessionStorage.getItem("burn-tanya");
            isShown = isShown == null ? 0 : parseInt(isShown);
            if (isShown !== 0 && ((isShown % Math.round(5 * Math.random())) === 0 || isShown === 1)) {
                $('#burn_tanya').fadeIn('slow');
            }
            sessionStorage.setItem('burn-tanya', isShown + 1);
        });
    });

    $('#burn_tanya').click(function () {
        $('#wish_message').fadeOut('slow');
        $(this).fadeOut('slow');
        audio.pause();
        darkAudio.play();
        $('#character-box-harshita-2').fadeOut('slow');
        $('body').removeClass('peach').removeClass('peach-after').addClass('darkness').addClass('darkness-after');
        $('#test-1, #test-2').hide();
        $('#character-box-tanya-1').show();
        $('.cake').show();
        $(this).delay(1500).promise().done(() => {
            $('#tanyaBurning').fadeIn('slow', function () {
                setTimeout(thirdConversation, 1000);
            });
        });

    });

    $('#run_away').click(function () {
        $(this).fadeOut('slow');
        darkAudio.pause();
        audio.play();

        $('#tanyaBurning').addClass('animate__backOutDown').hide().on('animationend');
        $('body').removeClass('darkness').removeClass('darkness-after').addClass('peach').addClass('peach-after');
        $('.cake').removeClass('animate__jackInTheBox').addClass('animate__fadeOutBottomLeft').fadeOut("slow", function () {
            $('#character-box-tanya-1').fadeOut('slow', function () {
                $('#test-3').hide();
                finalArc();
            });
        });
    });


    $('#wish_message').click(function () {
        $('#burn_tanya').fadeOut('slow');
        vw = $(window).width() / 2;

        $('#b1,#b2,#b3,#b4,#b5,#b6,#b7').hide().stop();
        $(this).fadeOut('slow').delay(1000).promise().done(function () {
            $('.cake').removeClass('animate__jackInTheBox').addClass('animate__fadeOutBottomLeft').fadeOut("slow", function () {
                $(this).remove();
                setTimeout(function () {
                    $('#character-box-harshita-2').addClass('animate__animated animate__lightSpeedOutRight')
                        .fadeOut('slow', function () {
                            finalArc();
                            $('#test-1,#test-2').remove();
                        });
                }, 200);
            });
        });
    });

});


//alert('hello');
