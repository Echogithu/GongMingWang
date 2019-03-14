$(window).resize(function(){
	//窗口大小改变时及时调整二维码的位置
	var height=$('#erweima').height()+9;
    $('#erweima').css('top','-'+height+'px');
    //窗口大小改变时及时调整图片-更多资讯中的图片与其下文字的位置
    var height2=$('.mycontent-left').eq(1).height();
    $('.mycontent').eq(1).css('height',height2+'px');
    //窗口大小改变时及时调整侧边回到顶部图标的位置
    var juli=$('.mycontent').eq(0).offset().left;
    $('.meum-up').css('right',juli+'px');
    
});
$(window).load(function(){
	//加载完毕后及时调整二维码位置
	var height=$('#erweima').height()+9;
    $('#erweima').css('top','-'+height+'px');
    //加载完毕后及时调整图片-更多资讯中的图片与其下文字的位置
    var height2=$('.mycontent-left').eq(1).height();
    $('.mycontent').eq(1).css('height',height2+'px');
    //加载完毕后及时调整侧边回到顶部图标的位置
    var juli=$('.mycontent').eq(0).offset().left;
    $('.meum-up').css('right',juli+'px');
   
});
//页脚微信微博进入时图标及文字变亮
$('.hoverp').on('mouseenter',function(){
	var obj=$(this).find('.hoverable');
	var objs=obj.attr('src').split('.');
	var newsrc=objs[0]+'hover.png';
	obj.attr('src',newsrc);
	var text=$(this).find('a');
	text.css("color","rgb(255,255,255)");
});
//页脚微信微博离开时图标及文字变亮
$('.hoverp').on('mouseleave',function(){
	var obj=$(this).find('.hoverable');
	var objs=obj.attr('src').split('.');
	var newsrc=objs[0].substring(0,objs[0].length-5)+".png";
	obj.attr('src',newsrc);
	var text=$(this).find('a');
	text.css("color","rgb(165,165,165)");
});
//点击产看更多后背景颜色改变
$('.see-more').find('a').mouseenter(function(){
	$(this).parents('.see-more').css('background-color',"rgb(104,190,4)");
});
//松开鼠标后背景颜色改变
$('.see-more').find('a').mouseleave(function(){
	$(this).parents('.see-more').css('background-color',"rgb(133,133,133)");
});
//输入框输入时及时更改字数显示
$('textarea').bind('input propertychange',function(){
	var newnum;
    newnum=$(this).val().length;
    if(newnum>140){
       $(this).val(this.value.substring(0,140));
       newnum=140;
    }
    $(this).next().children('span').text(newnum);
});
//鼠标进入在侧边微信图标上时
$('.vx').on('mouseenter',function(){
    $(this).attr('src','../images/huigu/官方微信.png');
    $('#erweima2').css('display','inline-block');
    //及时调整侧边回到顶部二维码的位置
    var kuan=$('#erweima2').width();
    $('#erweima2').css('left','-'+kuan+'px');
    var height3=$('#erweima2').height();
    var height4=$('.meum-up ul').height();
    var newheight=(height3-height4)/2;
    $('#erweima2').css('top','-'+newheight+'px');
});
//鼠标离开在侧边微信图标上时
$('.vx').on('mouseleave',function(){
    $(this).attr('src','../images/huigu/weixin2.png');
    $('#erweima2').css('display','none');
});
//监听滚动条位置，切换侧边回到顶部的出现与隐藏
$(window).scroll(function(){
	var t=$(window).scrollTop();
	if(t>1500){
		$('.meum-up').css('display','inline-block');
	}else{
		$('.meum-up').css('display','none');
	}
});
//点赞效果
function up(){
	$('.myup').on('click',function(){
		//获取当前评论数的容器
	    var number=$(this).parent().children('.up-number');
	    //获取存放点赞字样的容器
	    var text=$(this).parent().children('.up-text');
	    var newnum;
	    //判断当前字体颜色,相应改变字体颜色和评论数
	    if(number.css('color')=='rgb(187, 187, 187)'){
	    	//改变字体为红色
	        number.css('color','red');
	        //改变文字为红色
	        text.css('color','red');
	        //评论数加一
	        newnum=Number(number.text())+1;
	    }else{
	        number.css('color','rgb(187, 187, 187)');
	        text.css('color','rgb(187, 187, 187)');
	        newnum=Number(number.text())-1;
	    }
	    if(newnum==1000)newnum=999+'+';
	    number.text(newnum);
	});
}
up();
//点击发送添加评论
$('.submit').on('click',function(){
		//获得当前月份和号数
		var date=new Date();
		var month=date.getMonth()+1;
	    if(month<10)month='0'+month;
		var day=date.getDate();
		if(day<10)day='0'+day;
		var time=month+'-'+day;
	    //获取输入框内容
	    var content=$('#inputText').val();
	    if(content=='')return;
	    //获取媒体列表
	    var lists=$('.showcomment').children('.media-list');
	    //获取媒体列表内容
	    var listcontent=lists.html();
	    //建立新的媒体对象内容
	    var html='<li class="media"><!--头像--><div class="media-left media-head"><a href="#"><img src="./images/huigu/head1.png" alt="head" class="media-object"></a></div><!--文字--><div class="media-body"><!--昵称--><h4 class="media-heading media-name"><a href="#">Wposion</a><span>'+time+'</span></h4><!--评论--><p>'+content+'</p></div><!--点赞评论--><div class="comment-up"><!--点赞--><span><a class="myup"><img src="./images/huigu/dianzan.jpg" alt="thumb-up"></a><span class="up-text">点赞</span><span class="up-number">0</span></span><!--评论--><span><a href="#"><img src="./images/huigu/comment.jpg" alt="thumb-up"></a><span>评论</span><span>0</span></span></div></li>';
	    //将原先的内容与新内容连接作为新内容赋值给媒体列表
	    lists.html(html+listcontent);
	    //清空输入框
	    $('#inputText').val('');
	    //输入字数归零
	    $('#inputText').next().find('span').text(0);
	    //评论数加一
	    var com=Number($('.title-comment').text().match(/\d/g))+1;
	    $('.title-comment').text('('+com+')');
		//绑定点赞效果
		up();
});




