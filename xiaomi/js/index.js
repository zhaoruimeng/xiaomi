$(document).ready(
    function(){
        $('.search_text').focus(function () {
            $('.search_hot_words').addClass("hidden");
            $('.search_text').addClass("search_text_focus");
            $('.search_btn').addClass("search_btn_focus");
            $('.search_hot_list').addClass("show");
        });

        $('.search_text').blur(function(){
            $('.search_hot_words').removeClass("hidden");
            $('.search_text').removeClass("search_text_focus");
            $('.search_btn').removeClass("search_btn_focus");
            $('.search_hot_list').removeClass("show");
        });
        $('.search_form').hover(function(){
            var isFocus = $('.search_text').is(":focus");
            if(true==focus){
                return false;
            }else{
                $(this).addClass("search_form_hover");
            }
        },function(){
            $(this).removeClass("search_form_hover");
        });

        //    头部轮播图
        var mySwiper = new Swiper('.banner .swiper-container',{
            direction:'horizontal',
            loop:true,
            //停留时间
            autoplay:2000,
            //切换速度
            speed:500,
            effect:'fade',
            pagination:'.swiper-pagination',
            nextButton:'.swiper-button-next',
            prevButton:'.swiper-button-prev',
            //小圆点可点
            paginationClickable:true,
            //点击之后继续轮播
            autoplayDisableOnInteraction:false
        });
        //    明星单品轮播图
        var swiper = new Swiper('.stargoods .swiper-container', {
            direction:'horizontal',
            loop:false,
            autoplay:5000,
            speed:500,
            effect:'slide',
            pagination:'.more',
            autoplayDisableOnInteraction:false,
            paginationType:'custom',
            paginationCustomRender:function(swiper,current,total){
                for(var i = 1; i <= total; i ++){
                    if(current == i){
//                    debugger;
                        $('.more').children("li").eq(i-1).removeClass("active");
                    }else{
                        $('.more').children("li").eq(i-1).addClass("active");
                    }
                }
            }
        });
        $('.more li').on('click',function(){
            var index = $('.more li').index(this);
            swiper.slideTo(index,500,false);
        })

    }
);

$(function(){

    //家电、智能区域
    $('.jd .home_more_ul li').hover(function(){
        var index = $('.jd .home_more_ul li').index(this);
        $('.jd .home_more_ul li').removeClass("tab_active");
        $('.jd .box_right .box_tab1').removeClass("box_tab_active");
        $('.jd .box_right').children('.box_tab1').eq(index).addClass("box_tab_active");
        $(this).addClass("tab_active");
    });
    $('.zn .home_more_ul li').hover(function(){
        var index = $('.zn .home_more_ul li').index(this);
        $('.zn .home_more_ul li').removeClass("tab_active");
        $('.zn .box_right .box_tab1').removeClass("box_tab_active");
        $('.zn .box_right').children('.box_tab1').eq(index).addClass("box_tab_active");
        $(this).addClass("tab_active");
    });


    //内容区域
    $('.conitem_li_book .pagers_ul .pager').click(function(){
        if(!$(this).hasClass("pager_active")){
            var index = $('.conitem_li_book .pagers_ul .pager').index(this);
            var left = -296 * index;
            var margin = left + "px";
            $('.conitem_li_book .conitem_wrapper_ul').css("margin-left",margin);
            $('.conitem_li_book .pagers_ul .pager').removeClass("pager_active");
            $(this).addClass("pager_active");
        }
    });
    $('.conitem_li_book .control_prev').click(function(){
        var left = parseInt($('.conitem_li_book .conitem_wrapper_ul').css("marginLeft"));
        var margin;
        if(left < 0 && (left%296==0)){
            margin = (left + 296) + "px";
            $('.conitem_li_book .conitem_wrapper_ul').css("margin-left",margin);
            var active = $('.conitem_li_book .pager_active');
            var pre = active.prev();
            active.removeClass("pager_active");
            pre.addClass("pager_active");
        }
    });
    $('.conitem_li_book .control_next').click(function(){
        var left = parseInt($('.conitem_li_book .conitem_wrapper_ul').css("marginLeft"));
        var width = parseInt($('.conitem_li_book .conitem_wrapper_ul').css("width"));
        var margin;
        if(left != (-width+296) && (left%296==0)){
            margin = (left - 296) + "px";
            $('.conitem_li_book .conitem_wrapper_ul').css("margin-left",margin);
            var active = $('.conitem_li_book .pager_active');
            var next = active.next();
            active.removeClass("pager_active");
            next.addClass("pager_active");
        }
    });

    //内容区域
    $('.conitem_li_mu .pagers_ul .pager').click(function(){
        if(!$(this).hasClass("pager_active")){
            var index = $('.conitem_li_mu .pagers_ul .pager').index(this);
            var left = -296 * index;
            var margin = left + "px";
            $('.conitem_li_mu .conitem_wrapper_ul').css("margin-left",margin);
            $('.conitem_li_mu .pagers_ul .pager').removeClass("pager_active");
            $(this).addClass("pager_active");
        }
    });
    $('.conitem_li_mu .control_prev').click(function(){
        var left = parseInt($('.conitem_li_mu .conitem_wrapper_ul').css("marginLeft"));
        var margin;
        if(left < 0 && (left%296==0)){
            margin = (left + 296) + "px";
            $('.conitem_li_mu .conitem_wrapper_ul').css("margin-left",margin);
            var active = $('.conitem_li_mu .pager_active');
            var pre = active.prev();
            active.removeClass("pager_active");
            pre.addClass("pager_active");
        }
    });
    $('.conitem_li_mu .control_next').click(function(){
        var left = parseInt($('.conitem_li_mu .conitem_wrapper_ul').css("marginLeft"));
        var width = parseInt($('.conitem_li_mu .conitem_wrapper_ul').css("width"));
        var margin;
        if(left != (-width+296) && (left%296==0)){
            margin = (left - 296) + "px";
            $('.conitem_li_mu .conitem_wrapper_ul').css("margin-left",margin);
            var active = $('.conitem_li_mu .pager_active');
            var next = active.next();
            active.removeClass("pager_active");
            next.addClass("pager_active");
        }
    });

    //内容区域
    $('.conitem_li_game .pagers_ul .pager').click(function(){
        if(!$(this).hasClass("pager_active")){
            var index = $('.conitem_li_game .pagers_ul .pager').index(this);
            var left = -296 * index;
            var margin = left + "px";
            $('.conitem_li_game .conitem_wrapper_ul').css("margin-left",margin);
            $('.conitem_li_game .pagers_ul .pager').removeClass("pager_active");
            $(this).addClass("pager_active");
        }
    });
    $('.conitem_li_game .control_prev').click(function(){
        var left = parseInt($('.conitem_li_game .conitem_wrapper_ul').css("marginLeft"));
        var margin;
        if(left < 0 && (left%296==0)){
            margin = (left + 296) + "px";
            $('.conitem_li_game .conitem_wrapper_ul').css("margin-left",margin);
            var active = $('.conitem_li_game .pager_active');
            var pre = active.prev();
            active.removeClass("pager_active");
            pre.addClass("pager_active");
        }
    });
    $('.conitem_li_game .control_next').click(function(){
        var left = parseInt($('.conitem_li_game .conitem_wrapper_ul').css("marginLeft"));
        var width = parseInt($('.conitem_li_game .conitem_wrapper_ul').css("width"));
        var margin;
        if(left != (-width+296) && (left%296==0)){
            margin = (left - 296) + "px";
            $('.conitem_li_game .conitem_wrapper_ul').css("margin-left",margin);
            var active = $('.conitem_li_game .pager_active');
            var next = active.next();
            active.removeClass("pager_active");
            next.addClass("pager_active");
        }
    });

    //内容区域
    $('.conitem_li_app .pagers_ul .pager').click(function(){
        if(!$(this).hasClass("pager_active")){
            var index = $('.conitem_li_app .pagers_ul .pager').index(this);
            var left = -296 * index;
            var margin = left + "px";
            $('.conitem_li_app .conitem_wrapper_ul').css("margin-left",margin);
            $('.conitem_li_app .pagers_ul .pager').removeClass("pager_active");
            $(this).addClass("pager_active");
        }
    });
    $('.conitem_li_app .control_prev').click(function(){
        var left = parseInt($('.conitem_li_app .conitem_wrapper_ul').css("marginLeft"));
        var margin;
        if(left < 0 && (left%296==0)){
            margin = (left + 296) + "px";
            $('.conitem_li_app .conitem_wrapper_ul').css("margin-left",margin);
            var active = $('.conitem_li_app .pager_active');
            var pre = active.prev();
            active.removeClass("pager_active");
            pre.addClass("pager_active");
        }
    });
    $('.conitem_li_app .control_next').click(function(){
        var left = parseInt($('.conitem_li_app .conitem_wrapper_ul').css("marginLeft"));
        var width = parseInt($('.conitem_li_app .conitem_wrapper_ul').css("width"));
        var margin;
        if(left != (-width+296) && (left%296==0)){
            margin = (left - 296) + "px";
            $('.conitem_li_app .conitem_wrapper_ul').css("margin-left",margin);
            var active = $('.conitem_li_app .pager_active');
            var next = active.next();
            active.removeClass("pager_active");
            next.addClass("pager_active");
        }
    })

});
