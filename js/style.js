$(function() { 
//revolution
 $('.tp-banner').revolution({ 
  delay:9000, 
  startwidth:1170, 
  startheight:690, 
  hideThumbs:100,
 }); 
 //����������
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
//����������
 
   //�жϵ������Ƿ���ԭ��λ���ϵı�־����ʼΪfalse  
var test = false;  
$(window).scroll(function(){  
        //��ȡ��ǰλ�õ����ڶ����ĸ߶�  
        var h_num=$(window).scrollTop();  
        if(h_num>480){//����ǰ�߶ȴ��ڵ����������ڶ����߶�  
           //�л�������������Ϊ�̶��������  
           $('.nav').addClass('fixer');   
   //����������position�����fixed��ԭ����λ�û��գ���Ҫ��ԭλ�����Ӹ�ռλdiv  
           if(!test){  
                var stayPos = document.createElement("div");  
        stayPos.id= "stayPosDiv";  
    stayPos.style.height = "38px";//�������ĸ߶�  
        var temp = document.getElementById("nav");  
        temp.appendChild(stayPos);  
        test=true;  
    }  
        }else{  
              //����ص�������ԭλ��֮ǰ���滻��ԭ��������  
              $('.nav').removeClass('fixer');  
      if(test){//�Ƴ�ռλdiv  
           var temp = document.getElementById("nav");  
           temp.removeChild(stayPosDiv);  
           test = false;  
      }  
       }     
  }); 
//��ҳ��Ʒ����
$('.block1-box-img').hover(function(){
	$(this).find($('.block1-box-txt')).stop(true,false).fadeToggle();
})
//��ҳ����չʾ
var swiper = new Swiper('.block3-box .swiper-container', {
    pagination: '.block3-box .swiper-pagination',
    slidesPerView: 4,
    paginationClickable: true,
    spaceBetween: 10,
    freeMode: true,
    prevButton:'.block3-box .swiper-button-prev',
    nextButton:'.block3-box .swiper-button-next',
});
//��ҳ�ͻ���֤
var swiper = new Swiper('.block4 .swiper-container', {
    pagination: '.block4 .swiper-pagination',
    paginationClickable: true,
    nextButton: '.block4 .swiper-button-next',
    prevButton: '.block4 .swiper-button-prev',
    parallax: true,
    speed: 600,
});
//��Ʒ�б�ҳ
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
  //�����б�
  $('.news-block:even').find($('.news-block-txt')).css({
    'float':'right',
  });


      //��ʼ����ͼ���󣬼��ص�ͼ
      var map = new AMap.Map("container", {
          resizeEnable: true,
          center: [120.200783,36.263786],//��ͼ���ĵ�
          zoom: 13 //��ͼ��ʾ�����ż���
      });
      //��ӵ��ǣ���ʹ���Լ���icon
      new AMap.Marker({
          map: map,
      position: [120.200783,36.263786],
          icon: new AMap.Icon({            
              size: new AMap.Size(40, 50),  //ͼ���С
              image: "http://webapi.amap.com/theme/v1.3/images/newpc/way_btn2.png",
              imageOffset: new AMap.Pixel(0, -60)
          })        
      });

});