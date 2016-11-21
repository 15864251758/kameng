$(function() { 
//revolution
 $('.tp-banner').revolution({ 
  delay:9000, 
  startwidth:1170, 
  startheight:690, 
  hideThumbs:100,
 }); 
 //导航条动画
 $('.nav li').hover(function(){
 	$(this).find('span').stop(true,false).animate({
 		'opacity':'1',
 		'bottom':'10px',
 	},300);
 },function(){
 	$(this).find('span').stop(true,false).animate({
 		'opacity':'0',
 		'bottom':'0px',
 	},300);
 })
//导航条滑出
 
   //判断导航栏是否在原来位置上的标志，初始为false  
var test = false;  
$(window).scroll(function(){  
        //获取当前位置到窗口顶部的高度  
        var h_num=$(window).scrollTop();  
        if(h_num>480){//当当前高度大于导航条到窗口顶部高度  
           //切换导航条的类名为固定后的类名  
           $('.nav').addClass('fixer');   
   //当导航条的position变成了fixed后，原来的位置会变空，需要在原位置增加个占位div  
           if(!test){  
                var stayPos = document.createElement("div");  
        stayPos.id= "stayPosDiv";  
    stayPos.style.height = "38px";//导航条的高度  
        var temp = document.getElementById("nav");  
        temp.appendChild(stayPos);  
        test=true;  
    }  
        }else{  
              //如果回到导航条原位置之前则替换回原来的类名  
              $('.nav').removeClass('fixer');  
      if(test){//移除占位div  
           var temp = document.getElementById("nav");  
           temp.removeChild(stayPosDiv);  
           test = false;  
      }  
       }     
  }); 
//首页产品中心
$('.block1-box-img').hover(function(){
	$(this).find($('.block1-box-txt')).stop(true,false).fadeToggle();
})
//首页餐厅展示
var swiper = new Swiper('.block3-box .swiper-container', {
    pagination: '.block3-box .swiper-pagination',
    slidesPerView: 4,
    paginationClickable: true,
    spaceBetween: 10,
    freeMode: true,
    prevButton:'.block3-box .swiper-button-prev',
    nextButton:'.block3-box .swiper-button-next',
});
//首页客户见证
var swiper = new Swiper('.block4 .swiper-container', {
    pagination: '.block4 .swiper-pagination',
    paginationClickable: true,
    nextButton: '.block4 .swiper-button-next',
    prevButton: '.block4 .swiper-button-prev',
    parallax: true,
    speed: 600,
});
//产品列表页
$('.list-box-more').click(function(){
  // $('.list-box2').slideToggle();

  if( $('.list-box2').css('display')=='none'){
    $('.list-box2').slideDown();
    $('.list-box-more').attr("src","images/more1.png");
  }else{
    $('.list-box2').slideUp();
    $('.list-box-more').attr("src","images/more.png");
  }
})
  //新闻列表
  $('.news-block:even').find($('.news-block-txt')).css({
    'float':'right',
  });


      //初始化地图对象，加载地图
      var map = new AMap.Map("container", {
          resizeEnable: true,
          center: [120.200783,36.263786],//地图中心点
          zoom: 13 //地图显示的缩放级别
      });
      //添加点标记，并使用自己的icon
      new AMap.Marker({
          map: map,
      position: [120.200783,36.263786],
          icon: new AMap.Icon({            
              size: new AMap.Size(40, 50),  //图标大小
              image: "http://webapi.amap.com/theme/v1.3/images/newpc/way_btn2.png",
              imageOffset: new AMap.Pixel(0, -60)
          })        
      });

});