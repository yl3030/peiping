// header
$(window).on("resize scroll",function(){
    if($(window).scrollTop()>0){
        $(".header").addClass("scroll");
    }else {
        $(".header").removeClass("scroll");
    }
})

// 搜尋
$(".header_search_icon").click(function(){
    $(".header_search_hide").fadeToggle(300);
})

// 語系
$(".header_lang_active").click(function(){
    $(".header_lang_list").slideToggle(300);
})

$(document).click(function (event) {
    var LangArea = $(".header_lang");
    if (!LangArea.is(event.target) && LangArea.has(event.target).length === 0) {
        $(".header_lang_list").slideUp(300);
    }

    var searchArea = $(".header_search");
    if (!searchArea.is(event.target) && searchArea.has(event.target).length === 0) {
        $(".header_search_hide").slideUp(300);
    }
});

// nav
$(".header_nav_hasdrop").mouseover(function(){
    if($(window).width()>=992){
        $(".nav_bg").slideDown(300);
        $(".nav_lightBox").fadeIn(300);
        $(".header_nav_first").addClass("drop");
    }
})
$(".header_nav_hasdrop").mouseleave(function(){
    if($(window).width()>=992){
        $(".nav_bg").slideUp(300);
        $(".nav_lightBox").fadeOut(300);
        $(".header_nav_first").removeClass("drop");
    }
})
$(".header_nav_item").mouseover(function(){
    if($(window).width()>=992){
        $(this).find(".header_nav_drop").fadeIn(300);
    }
})
$(".header_nav_item").mouseleave(function(){
    if($(window).width()>=992){
        $(this).find(".header_nav_drop").fadeOut(300);
    }
})
$(".header_nav_drop_item").mouseover(function(){
    if($(window).width()>=992){
        $(this).find(".header_nav_seconddrop").slideDown(300);
    }
})

// menu
$(".header_menu").click(function(){
    $(this).toggleClass("active");
    $(".header_nav").toggleClass("active");
})

// go to top
$(".btn-top").click(function(){
    $("html,body").animate({scrollTop:0},300);
})