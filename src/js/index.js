/* eslint-disable */

import $ from 'jquery'
import router from './modules/Router'
import '../scss/app.scss'

$(() => {
  // スクロールイベント
  $(window).scroll(function() {
    let windowHeight = $(window).height()   ,
        scrollPosi   = $(window).scrollTop();

    // ①underline：伸びる ②TTJロゴ：fadeIn ③bgcolor：大きく濃くなる
    $('#aboutService').each(function() {
      let aboutServicePosi = $(this).offset().top;

      if (scrollPosi > aboutServicePosi - windowHeight + 150) {
        $('#extendUnderline').addClass('extendUnderline');

        for(let i=0; i<3; i++) {
          let delayTime = ['0', '500', '1000'];

          $(`#fadeLogoInitial${i+1}`).delay(delayTime[i]).queue(function() {
            $(this).addClass('fadeLogoInitial');
          })
        }

        $(this).addClass('toDarkBgColor');
      }
    })

    $('#fade-in-up').css('visibility','hidden');
    $(window).scroll(function(){
    var windowHeight = $(window).height(),
        topWindow    = $(window).scrollTop();

      $('#fade-in-up').each(function(){
        var targetPosition = $(this).offset().top;

        if(topWindow > targetPosition - windowHeight + 100){
        $(this).addClass("fadeInDown");
        }
      });

      $('#container').each(function() {
        let aboutServicePosi = $(this).offset().top;

        $(this).css('visibility','hidden');

        if (scrollPosi > aboutServicePosi - windowHeight + 150){
          for(let i=0; i<8; i++) {
            let delayTime = ['0', '500', '1000', '1500', '2000', '2500', '3000', '3500'];

            $(`#fade-in-down${i+1}`).delay(delayTime[i]).queue(function() {
              $(this).addClass('fadeInDown');
            })
          }
        }
      })
    });
  });

  // 「案件を見るボタン」：クリックイベント
  $('#toProject').on('click', function() {
    let $bodyAndHtml = $('body, html'),
        headerHeight = $('#header').innerHeight(); //innerHeight() → paddingも含めた高さ

    $bodyAndHtml.animate({scrollTop: $('#project').offset().top - headerHeight}, 'swing');
  });
})
