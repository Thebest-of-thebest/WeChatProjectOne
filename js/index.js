FastClick.attach(document.body);


(function (){
	var desW = 640;
	var winW = document.documentElement.clientWidth;
	var bili = winW/desW;
	var main = document.querySelector(".main");
	if(winW > desW){
		main.style.margin = "0 auto";
		main.style.width = desW + "px";
		return
	}
	document.documentElement.style.fontSize=bili*100+"px";
})();
var s = new Swiper(".swiper-container",{
	direction:"vertical",
	loop:true,
 	onSlideChangeEnd:function(swiper){
 		//获取当前一共有多少个活动快(包含Loop模式前后加的两个)
 		var slideAry = swiper.slides;
 		console.log(slideAry);
 		//当前展示这个区域的索引
 		var currentIndex = swiper.activeIndex;
 		var total = slideAry.length;
 		
 		
 		//计算ID是page？
 		var targetID = "page";
 		switch (currentIndex){
 			case 0:
 				targetID = targetID + (total -2); 
 				break;
 			case (total-1):
 				targetID = targetID + 1; 
 				break;
 			default:
 				targetID = targetID + currentIndex;
 				break;
 		}
 		//给当前的活动块设置ID,还要把其余的移除
 		[].forEach.call(slideAry, function(item,index){
 			if(currentIndex===index) {
 				item.id = targetID;
 				return;
 			}
 			item.id = null;
 		});
 	}
});
(function(){
	var musicMenu = document.querySelector("#musicMenu");
	var musicAudio = document.querySelector("#musicAudio");
	musicMenu.addEventListener("click",function(){
		if(musicAudio.paused) {
			musicAudio.play();
			musicMenu.className="music move";
			return;
		}
		musicAudio.pause();
		musicMenu.className="music";
		
	},false);
	function controlMusic (){
		musicAudio.volume=0.3;
		musicAudio.play();
		musicAudio.addEventListener("canplay",function(){
			musicMenu.style.display="block";
			musicMenu.className="music move";
		},false)
	}
	window.setTimeout(controlMusic,1000)
})()
