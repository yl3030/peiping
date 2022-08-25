// AOS
AOS.init();

// header
$(window).on("resize scroll",function(){
    if($(window).scrollTop()>0){
        $(".header").addClass("scroll");
    }else {
        $(".header").removeClass("scroll");
    }
})
if($(window).scrollTop()>0){
    $(".header").addClass("scroll");
}else {
    $(".header").removeClass("scroll");
}

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

$(".header_nav_titleM").click(function(){
    if($(this).hasClass("drop")){
        $(".header_nav_titleM").removeClass("drop");
        $(".header_nav_drop").slideUp(300);
    }else {
        $(".header_nav_titleM").removeClass("drop");
        $(".header_nav_drop").slideUp(300);
        $(this).addClass("drop");
        $(this).parents(".header_nav_item").find(".header_nav_drop").slideDown(300);
    }
    
})

// go to top
$(".btn-top").click(function(){
    $("html,body").animate({scrollTop:0},300);
})
$(window).on("scroll resize", function(){
    let footerTop = $("footer").offset().top - $(window).height() + 70;
    console.log(footerTop);
    if($(window).scrollTop()>=footerTop){
        $(".btn-top").addClass("bottom");
    }else {
        $(".btn-top").removeClass("bottom");
    }
})

// product category
$(".category_menuBtn").click(function(){
    $(".category_mask").fadeIn(300);
    $(".category_menu").addClass("active");
    $("body").css("overflow","hidden");
})
$(".category_mask, .category_menu_title").click(function(){
    $(".category_mask").fadeOut(300);
    $(".category_menu").removeClass("active");
    $("body").css("overflow","visible");
})

// add to inquiry
$(".btn-inquiry").click(function(){
    let inquiryNum = $(".category_inquiryNum").text();
    let inquiryNumInt = parseInt(inquiryNum);
    inquiryNumInt = inquiryNumInt + 1;
    $(".category_inquiryNum").text(inquiryNumInt);

    $(".inquiry-massage").fadeIn(300).delay(1000).fadeOut(300);
})