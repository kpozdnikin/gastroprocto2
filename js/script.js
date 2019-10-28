$(document).ready(function() {

        var user = JSON.parse(localStorage.getItem("user_auth_data")) || null;
        console.log(user);

        // fix menu when passed
        /*$('.masthead')
            .visibility({
                once: false,
                onBottomPassed: function() {
                    $('.fixed.menu').transition('fade in');
                },
                onBottomPassedReverse: function() {
                    $('.fixed.menu').transition('fade out');
                }
            });


        $('#what-is-pain')
            .visibility({
                once       : false,
                continuous : true,
                onPassing  : function(calculations) {
                    var newFontSize = 1.5 + calculations.percentagePassed +'em';
                    $('#help-link')
                        .css({'font-size': newFontSize});
                }
            });

        $('#help')
            .visibility({
                once       : false,
                continuous : true,
                onPassing  : function(calculations) {
                    var newFontSize = 1.5 + calculations.percentagePassed/2 +'em';
                    $('#main-btn')
                        .css({'font-size': newFontSize});
                }
            });

        $('#aboutus')
            .visibility({
                once       : false,
                continuous : true,
                onPassing  : function(calculations) {
                    var newFontSize = 0.5 + calculations.percentagePassed/2 +'em';
                    $('#our-blog-old')
                        .css({'font-size': newFontSize});
                }
            });

        $('#first-btn')
            .animate({ fontSize: '1.8rem' }, 1500);
        // create sidebar and attach to menu open
        $('.ui.sidebar').sidebar('attach events', '.toc.item');*/

    $('.ui.sidebar').sidebar('attach events', '.toc.item');
        //smooth scroll
        $('a[href^="#"], a[href^="."]').click( function(){ // если в href начинается с # или ., то ловим клик
            var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href
            if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
                var top = $(scroll_el).offset().top;
                $('html, body').animate({ scrollTop: top}, 500); // анимируем скроолинг к элементу scroll_el
            }
            return false; // выключаем стандартное действие
        });


        //Появление вступления на главной
        var fadeIn = $('.intro');
        fadeIn.transition('fade in', '1000ms');

        // lazy load images
        $('.image').visibility({
            type: 'image',
            transition: 'vertical flip in',
            duration: 500
        });

        $('.ui.vertical.masthead.center.aligned.segment.blog-old-top-header').animate({
            minHeight: 0,
            height: 'auto',
            textAlign: 'left',
            paddingBottom: 0
        }, 500, function() {
            $('#blog-old-header-block').animate(
                {
                    height: 0
                }, 500, function(){
                    $('#blog-old-header-block').css({ display: 'none' })
                })
        });

        $('.ui.embed').embed();

        //крутилка в блоге слева
        var shape = $('.myshape .sides .side');
        shape.remove();
        var i = 0;
        function tick() {
            $('.myshape .sides').prepend(shape[i]);
            $(shape[i]).transition({
                animation: 'scale',
                duration: '2s',
                onComplete: function () {
                    setTimeout(function(){
                        $(shape[i]).transition({
                            animation: 'scale',
                            duration: '2s',
                            onComplete: function () {
                                if(i < shape.length - 1)
                                    i++;
                                else {
                                    i = 0;
                                }
                                requestAnimationFrame(tick);
                            }
                        });
                    }, 1000);
                }
            });
            checkShaked(shape[i]);
        }
        tick();

        var zonesSvg = $('#left-svg-block'),
            shapeAbout  = $('.shape-about .sides .side'),
            shapeAbout1 = $('#zone-1'),
            shapeAbout2 = $('#zone-2'),
            shapeAbout3 = $('#zone-3'),
            shapeAbout4 = $('#zone-4'),
            shapeAbout5 = $('#zone-5'),
            shapeAbout6 = $('#zone-6'),
            shapeAbout7 = $('#zone-7'),
            nexTexElem = $('#next-text');

        if(zonesSvg && zonesSvg.length > 0 && nexTexElem) {
            var nextText = nexTexElem.offset().top,
                zoneSvgWidth = zonesSvg.outerWidth(),
                zoneSvgleft = zonesSvg.offsetLeft,
                zoneOffsetTop = zonesSvg.offset().top,
                doPainOffsetTop = $('#do-pain').offset().top,
                svgHeight = zonesSvg.outerHeight();

            $(window).scroll(function() {
                var marked = {
                        'stroke': 'red',
                        'stroke-width': '2',
                        'fill': 'rgba(255, 0, 0, 0.34)'
                    },
                    notMarked = {
                        'stroke': '#00b2f3',
                        'stroke-width': '2',
                        'fill': 'none'
                    },
                    allSvg = $('.svg-1, .svg-2, .svg-3, .svg-4, .svg-5, .svg-6, .svg-7, .svg-8, .svg-9'),
                    zone1 = $('#svg-1'), zone2 = $('#svg-2'), zone3 = $('#svg-1, #svg-2, #svg-3'),
                    zone4 = $('#svg-5, #svg-6'), zone5 = $('#svg-8, #svg-9'), zone6 = $('#svg-7'),
                    zone7 = $('#svg-4');
                allSvg.css(notMarked);

                wS = $(this).scrollTop();
                if( wS > zoneOffsetTop - 100 && !zonesSvg.hasClass('fixed')) {
                    zonesSvg.addClass('fixed');
                    zonesSvg.css({ 'width': zoneSvgWidth, 'left': zoneSvgleft })
                }
                console.log('zoneOffsetTop', wS, doPainOffsetTop, svgHeight);

                if(wS > (doPainOffsetTop - 500) && zonesSvg.hasClass('fixed')) {
                    zonesSvg.removeClass('fixed');
                }

                if(wS < zoneOffsetTop && zonesSvg.hasClass('fixed')) {
                    zonesSvg.removeClass('fixed');
                }

                if (wS > shapeAbout1.offset().top - 200){
                    shapeAbout.remove();
                    $('.shape-about .sides').prepend(shapeAbout[0]);
                    $(shapeAbout[0]).css({ 'display': 'inherit' });
                    allSvg.css(notMarked);
                    zone1.css(marked);
                }
                if (wS > shapeAbout2.offset().top - 200){
                    shapeAbout.remove();
                    $('.shape-about .sides').prepend(shapeAbout[1]);
                    $(shapeAbout[1]).css({ 'display': 'inherit' });
                    allSvg.css(notMarked);
                    zone2.css(marked);
                }
                if (wS > shapeAbout3.offset().top - 200){
                    shapeAbout.remove();
                    $('.shape-about .sides').prepend(shapeAbout[2]);
                    $(shapeAbout[2]).css({ 'display': 'inherit' });
                    allSvg.css(notMarked);
                    zone3.css(marked);
                }
                if (wS > shapeAbout4.offset().top - 200){
                    shapeAbout.remove();
                    $('.shape-about .sides').prepend(shapeAbout[3]);
                    $(shapeAbout[3]).css({ 'display': 'inherit' });
                    allSvg.css(notMarked);
                    zone4.css(marked);
                }
                if (wS > shapeAbout5.offset().top - 200){
                    shapeAbout.remove();
                    $('.shape-about .sides').prepend(shapeAbout[4]);
                    $(shapeAbout[4]).css({ 'display': 'inherit' });
                    allSvg.css(notMarked);
                    zone5.css(marked);
                }
                if (wS > shapeAbout6.offset().top - 150){
                    shapeAbout.remove();
                    $('.shape-about .sides').prepend(shapeAbout[5]);
                    $(shapeAbout[5]).css({ 'display': 'inherit' });
                    allSvg.css(notMarked);
                    zone6.css(marked);
                }
                if (wS > shapeAbout7.offset().top - 200){
                    shapeAbout.remove();
                    $('.shape-about .sides').prepend(shapeAbout[6]);
                    $(shapeAbout[6]).css({ 'display': 'inherit' });
                    allSvg.css(notMarked);
                    zone7.css(marked);
                }
            });
        }
        });

function checkShaked(elem){
    var itemText = $(elem).children().html();
    $('path').css({
        'stroke-width':'2',
        'fill':'none',
        'stroke':'#BCBDBD'
    });
    var all = $('.st2, .st3, .st4, .st5, .st8, .st9, .st10');
    var stomatch = $('.st2');
    var stomatchAndGulletAndDuodenum = $('.st3, .st2, .st8');
    var stomatchAndDuodenum = $('.st2, .st8');
    var smallIntestine = $('.st4');
    var largeIntestineAndRectum = $('.st9, .st10');
    var rectum = $('.st10');
    var marked = {
        'stroke': '#00b2f3',
        'stroke-width': '2',
        'fill': 'rgba(0, 177, 239, 0.26)'
    };

    switch (itemText){
        case 'Фиброгастродуоденоскопия, ФГДС':
            stomatchAndGulletAndDuodenum.css(marked);
            break;
        case 'БИОПСИЯ':
            all.css(marked);
            break;
        case 'Helicobakter pylori':
            stomatchAndGulletAndDuodenum.css(marked);
            break;
        case 'Кислотопродуцирующая функция':
            stomatch.css(marked);
            break;
        case 'Ректороманоскопия, РРС':
            rectum.css(marked);
            break;
        case 'Фиброколоноскопия, ФКС':
            largeIntestineAndRectum.css(marked);
            break;
    }
}
