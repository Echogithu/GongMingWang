
    /*轮播图*/
    window.onload = function () {  
        /*左边*/
        //获取图片  
        var img = document.getElementById("leftWhiteBtn");  
        //鼠标经过图片  
        img.onmouseover = function () {  
            this.src = "images/lunbo/btn1_1.png" ,
             $('.myCarousel').css("box-shadow","0px 8px 17.1px 0.9px rgba(0,0,0,0.24)")
        }  
        //鼠标离开图片  
        img.onmouseout = function () {  
            this.src = "images/lunbo/btn1.png";  
            $('.myCarousel').css("box-shadow","0px 8px 17.1px 0.9px rgba(0,0,0,0.12)")
        }  
        /*右边*/
        var img1 = document.getElementById("rightWhiteBtn");  
        img1.onmouseover = function () {  
            this.src = "images/lunbo/btn2_1.png",
            $('.myCarousel').css("box-shadow","0px 8px 17.1px 0.9px rgba(0,0,0,0.24)")
        }  
        img1.onmouseout = function () {  
            this.src = "images/lunbo/btn2.png",
            $('.myCarousel').css("box-shadow","0px 8px 17.1px 0.9px rgba(0,0,0,0.12)")
        }  
    } 

    /*视频框按钮*/
    $(function(){
        $(".playBtn >img,.vTitle,.videoBox").mouseover(function(){
            $('.playBtn>img').animate({"top":-32},1000);/*改*/
        }).mouseout(function(){
            $('.playBtn>img').animate({"top":0},1000);
        });

        // $(".vTitle").mouseover(function(){
        //     $('.playBtn>img').animate({"top":-32},1000);/*改*/
        // }).mouseout(function(){
        //     $('.playBtn>img').animate({"top":0},1000);
        // });(this).parents().find
    });

    /*搜索框*/
    $('#searchImg2').click(function(){
        var $body = $(this).closest('.navbar').find('#searchInput2');
        var $navCenter = $(this).closest('.navbar').find('#navCenter');
        if($body.is(':hidden')){
            $body.show('slow');
            $navCenter.hide('slow');
        }else{
            $body.hide('slow');
            $navCenter.show('slow');
        }
    })

    // 底栏
    $(function () {
        $(window).scroll(function () {
            if ($(window).scrollTop() >= 50) {
                $('#bottomNav').fadeIn(1000);   
            }
            else {
                $('#bottomNav').fadeOut(1000); 
            }
        });
    });

    /*二维码返回顶部*/
    $(function () {
        $(window).scroll(function () {
            if ($(window).scrollTop() >= 50) {
                $('#btn_top').fadeIn();
            }
            else {
                $('#btn_top').fadeOut();
            }
        });
    });
    $('#btn_top').click(function () {
        $('html,body').animate({ scrollTop: 0 }, 500);
    });
    /*二维码文字 */
    $('.weixin a').mouseover(function(){
        $(this).find('img').hide();
        $(this).find('p').show();
        $(this).parent().parent().find('hr:first').css("marginBottom","8px");
        $(this).parent().parent().find('hr:last').css("marginTop","0px");
    });
    $('.weixin a').mouseout(function(){
        $(this).find('img').show();
        $(this).find('p').hide();
        $(this).parent().parent().find('hr:first').css("marginBottom","0px");
        $(this).parent().parent().find('hr:last').css("marginTop","14px");
    });

    /*讲座预告*/ 
    

    $('.tabMenu .active').find('img').show();
    $('.tabMenu li a').mouseover(function (e) {
        $('.tabMenu .active').find('img').hide();
        e.preventDefault()
        $(this).tab('show').find('img').show();
      })
 

    /*讲座预告 */
    $(".linkRead a").mouseover(function(){
        $(this).parents('.panelBody').find('h5>a').css("color","#68be04");
    });
    $(".linkRead a").mouseout(function(){
        $(this).parents('.panelBody').find('h5>a').css("color","#333");
    });

    $(document).ready(function() {
        // 导航栏下拉菜单--hover
        $(".hoverDropDown").hover(function() {
            $(this).addClass("dropdownHover");
            $(this).find("ul").slideToggle(200);
        });
        $(".hoverDropDown").mouseover(function() {
            $(this).addClass("dropdownHover");
        });
        $(".hoverDropDown").mouseout(function() {
            $(this).removeClass("dropdownHover");
        });
        // END-
    
        // 修改下拉菜单图标hover效果--更换图片
        $(".dropdownMenu li").mouseover(function() {
            let img = $(this).find("a img");
            let data = $(this).attr("data-num");
            if (data == 1) {
                img.attr("src", "images/nav/1i.jpg");
            } else if (data == 2) {
                img.attr("src", "images/nav/2i.png");
            } else {
                img.attr("src", "images/nav/4i.png");
            }
        });
        $(".dropdownMenu li").mouseout(function() {
            let img = $(this).find("a img");
            let data = $(this).attr("data-num");
            if (data == 1) {
                img.attr("src", "images/nav/1i.png");
            } else if (data == 2) {
                img.attr("src", "images/nav/2i.jpg");
            } else {
                img.attr("src", "images/nav/3i.png");
            }
        });
        // END-
    
    });
    
    $(function() {
        // PC端搜索框
        $(".rightNav .search").click(function(e) {
            $(".searchForm").slideToggle();
            $(".rightNav .search").slideUp();
            $(".navList").slideUp();
            setTimeout('$(".searchForm input").focus();', 400);
    
        });
        // END-
    
        var width768 = window.matchMedia('(max-width:768px)');
    
        // 小屏幕初始化搜索弹出框css规则
        if (width768.matches != 0) $(".searchForm").attr("class", "searchForm");
        // END-
    
        // phone端搜索框
        $(".phoneSearch .search").click(function() {
            $(".phoneNav .logo").slideToggle();
            $(".searchForm").slideToggle();
            setTimeout('$(".searchForm input").focus();', 400);
        });
        // END-
    
    
        // phone、PC、Pad公用
        // 隐藏搜索框
        // $(document).mousedown(function(e) {
        //     if (!($(".searchForm").is(":hidden"))) {
        //         // 点击的地方的父节点是否为.searchForm
        //         if ($(e.target).parents(".searchForm").length == 0) {
        //             $(".searchForm").slideUp();
        //             if (width768.matches != 0) { //移动显示隐藏logo
        //                 // phone端
        //                 $(".phoneNav .logo").slideToggle();
        //             } else {
    
        //                 $(".rightNav .search").slideDown();
        //                 $(".navList").slideDown();
        //             }
        //         }
        //     } else {
        //         return false;
        //     }
        // });
        // 关闭按钮
        $(".closeBtn").click(function() {
            $(".searchForm").slideUp();
            if (width768.matches != 0) { //移动显示隐藏logo
                // phone端
                $(".phoneNav .logo").slideToggle();
            } else {
                $(".rightNav .search").slideDown();
                $(".navList").slideDown();
            }
        });
        // END-
    
    
        // 测试导航栏
        // $(".rightNav .search").hide();
        // $(".navList").hide();
        // $(".searchForm").show();
    
    
        // 面包屑导航栏
        $(".navToggle i").click(function() {
            var iClass = $(this).attr("class");
            console.log(iClass);
            if (iClass == "iconfont icon-mianbaoxiedaohangxiaoxian") {
                $(this).attr("class", "iconfont icon-fanhui");
            } else {
                $(this).attr("class", "iconfont icon-mianbaoxiedaohangxiaoxian");
            }
            $(".breadNav").slideToggle();
        });
        // END-
    });


    /*预告模块 */
    // $('.videoBox>a').mouseover(function(){
    //     $('.hiddenVideo').show();
    // });