// main.js
$(function(){
	
	$("#toggle-btn").click(function(){
		$("#main-header nav").toggleClass("on");
	});

	// 모달창

	$(".youtube").click(function(){
		$(".modal").addClass("on")
	});

	$(".btn-close").click(function(){
		$(".modal").removeClass("on")
	});

	AOS.init();

}); //$

//  이미지 및 콘텐츠 로딩 체크
// window.onload = function (){
// 	// AOS 초기화
// 	AOS.init();
// }