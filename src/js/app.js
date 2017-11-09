import '../../node_modules/jquery-countdown/dist/jquery.countdown.min.js';
import '../../node_modules/jquery-mask-plugin/dist/jquery.mask.min.js';

$(document).ready(() => {

    $('.wrapper,.head__list li,h1,.timer,.form,.icon-rocket').each(function(i, el) {
        window.setTimeout(function(){
            $(el).addClass('animated');
        },150 * i);
    });

    $('.js_timer').countdown('2017/12/21 00:00:00', (event) => {
        $('.cou_hours').html(event.strftime('%H:'));
        $('.cou_min').html(event.strftime('%M:'));
        $('.cou_sec').html(event.strftime('%S'));
    });

    $('.js_tel_mask').mask('000-0000000');

    $(".js_form").submit(function() {
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "rest.php",
            data: th.serialize()
        }).done(function() {
            th.trigger("reset");
            window.location.replace("http://hotmobile.maxtv.co.il/thanks.html");
        });
        return false;
    });
    /*END FOR ACTION SEND*/
});
