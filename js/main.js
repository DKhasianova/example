$(document).ready(() => {

    $('.workers').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: false,
        arrows: true
    });



    $('.btn-rose').click(() => {
        $('#pop-up').css('display', 'flex');
    });
    $('#reservation-canceled, #pop-up').click((e) => {
        if (e.target.id === 'pop-up' || e.target.id === 'reservation-canceled-close') {
            $('#pop-up').hide();
        }
    });
    $('#call-me-canceled, #call-me').click((e) => {
        if (e.target.id === 'call-me' || e.target.id === 'call-me-canceled-close') {
            $('#call-me').hide();
        }
        });
    $('#call-btn >button').click(() => {
        let name = $('.name')
        let phone = $('.phone')

        if (name.val()  && phone.val() ) {
            //  $('#reservation-sent').show()
            //  $('#reservation-content').hide()
            $.ajax({
                type: 'post',
                url: 'mail.php',
                data: 'name=' + name.val() + '&phone=' + phone.val(),
                success: () => {
                    $('#reservation-sent').show()
                    $('#reservation-content').hide()
                },
                error: () => {
                    $('#pop-up').hide();
                    alert('Ошибка бронирования. Свяжитесь, пожалуйста, по номеру телефона');
                }
            });
        } else {
            $('#reserve-error').show()
        }
    });
    $('#btn-form-id >button').click(() => {
        let surname = $('.surname')
        let contact = $('.contact')

        if (surname.val()  && contact.val() ) {
            //  $('#reservation-sent').show()
            //  $('#reservation-content').hide()
            $.ajax({
                type: 'post',
                url: 'mail.php',
                data: 'surname=' + surname.val() + '&contact=' + contact.val(),
                success: () => {
                    $('#reservation-sent').show()
                },
                error: () => {
                    alert('Ошибка бронирования. Свяжитесь, пожалуйста, по номеру телефона');
                }
            });
        } else {
            $('.reserve-form-error').show()
        }
    });
    $('#btn-call-me>button').click(() => {
        let call = $('.call')

        if (call.val() ) {
            //  $('#reservation-sent').show()
            //  $('#reservation-content').hide()
            $.ajax({
                type: 'post',
                url: 'mail.php',
                data: 'call=' + call.val(),
                success: () => {
                    $('#call-me-sent').show()
                    $('#input-call-me').hide()
                    $('#call-me-text').hide()
                    $('#btn-call-me').hide()
                },
                error: () => {
                    alert('Ошибка бронирования. Свяжитесь, пожалуйста, по номеру телефона');
                }
            });
        } else {
            $('.reserve-call-me-error').show()
        }
    });
    $('.order-btn').click(() => {
        $('#call-me').css('display', 'flex');
    });
    $('.btn-footer').click(() => {
        $('#call-me').css('display', 'flex');
    });




    $('#burger').click(() => {
        $('#header').toggleClass('menu-open');
    })
    $('#header #menu ul li').click(() => {
        $('#header').removeClass('menu-open');
    });


$('#schedule .days .day.two').click(() => {
   $('.day-two').show()
    $('.day-seven').hide()
    $('.day-one').hide()
    $('.day-three').hide()
    $('.day-four').hide()
    $('.day-five').hide()
    $('.day-six').hide()
})

$('#schedule .days .day.one').click(() => {
    $('.day-one').show()
    $('.day-seven').hide()
    $('.day-two').hide()
    $('.day-three').hide()
    $('.day-four').hide()
    $('.day-five').hide()
    $('.day-six').hide()
})

$('#schedule .days .day.three').click(() => {
    $('.day-three').show()
    $('.day-seven').hide()
    $('.day-one').hide()
    $('.day-two').hide()
    $('.day-four').hide()
    $('.day-five').hide()
    $('.day-six').hide()
})

$('#schedule .days .day.four').click(() => {
    $('.day-four').show()
    $('.day-seven').hide()
    $('.day-two').hide()
    $('.day-three').hide()
    $('.day-one').hide()
    $('.day-five').hide()
    $('.day-six').hide()
})
$('#schedule .days .day.five').click(() => {
    $('.day-five').show()
    $('.day-seven').hide()
    $('.day-one').hide()
    $('.day-three').hide()
    $('.day-four').hide()
    $('.day-two').hide()
    $('.day-six').hide()
})
$('#schedule .days .day.six').click(() => {
    $('.day-six').show()
    $('.day-seven').hide()
    $('.day-one').hide()
    $('.day-three').hide()
    $('.day-four').hide()
    $('.day-five').hide()
    $('.day-two').hide()
})
$('#schedule .days .day.seven').click(() => {
    $('.day-seven').show()
    $('.day-two').hide()
    $('.day-one').hide()
    $('.day-three').hide()
    $('.day-four').hide()
    $('.day-five').hide()
    $('.day-six').hide()
})

})