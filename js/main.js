/*-----------mobile menu--------------*/
$(function($){
    $(function() {
        $('.menu__icon').on('click', function() {
            $(this).closest('.menu-mobile').toggleClass('menu_state_open');
        });
    });
});
/*-----------End mobile menu--------------*/

$(function() {
    $('.item').on('click', function() {
        var $this = $(this).next('.sub');

        $this.toggleClass('opened');
    });
});

$.get( "https://min-api.cryptocompare.com/data/price?fsym=XTZ&tsyms=USD", function( data ) {
    $( "#usd" ).html( data.USD );
});
$.get( "https://min-api.cryptocompare.com/data/price?fsym=XTZ&tsyms=BTC", function( data ) {
    $( "#btc" ).html( data.BTC );
});
$.get( "https://min-api.cryptocompare.com/data/price?fsym=XTZ&tsyms=RUB", function( data ) {
    $( "#rub" ).html( data.RUB );
});
$.get( "https://min-api.cryptocompare.com/data/price?fsym=XTZ&tsyms=USD", function( data ) {
    $( "#usd-m" ).html( data.USD );
});
$.get( "https://min-api.cryptocompare.com/data/price?fsym=XTZ&tsyms=BTC", function( data ) {
    $( "#btc-m" ).html( data.BTC );
});
$.get( "https://min-api.cryptocompare.com/data/price?fsym=XTZ&tsyms=RUB", function( data ) {
    $( "#rub-m" ).html( data.RUB );
});


//цепляем событие на onclick кнопки
var button1 = document.getElementById('userButton1');
button1.addEventListener('click', function () {
    //нашли наш контейнер
    var ta1 = document.getElementById('noda1cont');
    //производим его выделение
    var range = document.createRange();
    range.selectNode(ta1);
    window.getSelection().addRange(range);

    //пытаемся скопировать текст в буфер обмена
    try {
        document.execCommand('copy');
    } catch(err) {
        console.log('Can`t copy, boss');
    }
    //очистим выделение текста, чтобы пользователь "не парился"
    window.getSelection().removeAllRanges();
});
$(function() {
    $('#userButton1').on('click', function() {
        $('.copy-ok-noda1').show();
        setTimeout(function() { $(".copy-ok-noda1").hide('slow'); }, 1000);
    });
});
//цепляем событие на onclick кнопки
var button2 = document.getElementById('userButton2');
button2.addEventListener('click', function () {
    //нашли наш контейнер
    var ta2 = document.getElementById('noda2cont');
    //производим его выделение
    var range = document.createRange();
    range.selectNode(ta2);
    window.getSelection().addRange(range);

    //пытаемся скопировать текст в буфер обмена
    try {
        document.execCommand('copy');
    } catch(err) {
        console.log('Can`t copy, boss');
    }
    //очистим выделение текста, чтобы пользователь "не парился"
    window.getSelection().removeAllRanges();
});
$(function() {
    $('#userButton2').on('click', function() {
        $('.copy-ok-noda2').show();
        setTimeout(function() { $(".copy-ok-noda2").hide('slow'); }, 1000);
    });
});
