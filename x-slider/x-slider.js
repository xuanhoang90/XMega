$(function(){
	/**
	 *	X Slider
	 *	Written by: Xuan Hoang
	 *	05-10-2015
	 */
	//Animation
	var _AnimateInData = ['puffIn', 'spaceInUp', 'spaceInLeft', 'spaceInRight', 'spaceInDown', 'boingInUp', 'foolishIn', 'tinUpIn', 'tinLeftIn', 'tinRightIn', 'tinDownIn', 'swap', 'twisterInUp', 'twisterInDown', 'vanishIn', 'swashIn'];
	var _AnimateOutData = ['openDownLeftOut', 'spaceOutUp', 'spaceOutLeft', 'spaceOutRight', 'spaceOutDown', 'boingOutDown', 'bombRightOut', 'bombLeftOut', 'tinUpOut', 'tinLeftOut', 'tinRightOut', 'tinDownOut', 'holeOut', 'foolishOut', 'swashOut', 'puffOut', 'rotateUp', 'rotateLeft', 'rotateRight', 'rotateDown', 'slideUp', 'slideLeft', 'slideRight', 'slideDown', 'vanishOut'];
	var _AnimateIn = function(_this){
		_this.removeClass("magicslidertime");
		_this.addClass("magicslidertime");
		_this.fadeIn();
		for(i = 0; i <= _AnimateOutData.length; i++){
			_this.removeClass(_AnimateOutData[i]);
		}
		for(i = 0; i <= _AnimateInData.length; i++){
			_this.removeClass(_AnimateInData[i]);
		}
		var _ran = Math.floor((Math.random() * _AnimateInData.length));
		_this.addClass(_AnimateInData[_ran]);
		_this.addClass("current");
	}
	var _AnimateOut = function(_this){
		for(i = 0; i <= _AnimateOutData.length; i++){
			_this.removeClass(_AnimateOutData[i]);
		}
		for(i = 0; i <= _AnimateInData.length; i++){
			_this.removeClass(_AnimateInData[i]);
		}
		var _ran = Math.floor((Math.random() * _AnimateOutData.length));
		_this.addClass(_AnimateOutData[_ran]);
		_this.fadeOut();
		_this.removeClass("current");
	}
	//set data 
	var _SliderStartup = function(_this){
		var _Counter = _this.find(".x-item").length;
		//set attributes
		var _tmp = 1;
		_this.find(".x-item").each(function(){
			$(this).addClass("item-"+_tmp).attr({"data": _tmp});
			_tmp ++;
		})
		//append nav
		var _ExHtml = "";
		for(_tmp = 1; _tmp <= _Counter; _tmp ++){
			_ExHtml += "<span class='xbtn' data='"+_tmp+"'></span>";
		}
		_this.find(".x-item").hide();
		_this.find(".x-item").first().addClass("current").show();
		_this.parent().find(".nav-btn").html(_ExHtml);
		_this.parent().find(".nav-btn").find(".xbtn").first().addClass("active");
	}
	//setup
	var _XSlider = $(".x-slider").find(".slider");
	_SliderStartup(_XSlider);
	//slider act
	$(document).on("click", ".x-slider .nav-btn .xbtn", function(e){
		e.preventDefault();
		var _Num = $(this).attr("data");
		$(".x-slider").find(".nav-btn").find(".xbtn").removeClass("active");
		$(this).addClass("active");
		_AnimateOut(_XSlider.find(".current"));
		_AnimateIn(_XSlider.find(".item-"+_Num));
	})
	$(document).on("mouseenter", ".x-slider .nav-btn .xbtn", function(e){
		e.preventDefault();
		$(this).parent().parent().addClass("x-slider-stop");
	})
	$(document).on("mouseleave", ".x-slider .nav-btn .xbtn", function(e){
		e.preventDefault();
		$(this).parent().parent().removeClass("x-slider-stop");
	})
	$(document).on("mouseenter", ".x-slider .x-btn .act", function(e){
		e.preventDefault();
		$(this).parent().parent().addClass("x-slider-stop");
	})
	$(document).on("mouseleave", ".x-slider .x-btn .act", function(e){
		e.preventDefault();
		$(this).parent().parent().removeClass("x-slider-stop");
	})
	var _NavContent = function(val){
		$(".x-slider").find(".nav-btn").find(".xbtn").removeClass("active");
		$(".x-slider").find(".nav-btn").find(".xbtn").each(function(){
			var _test = $(this).attr("data");
			if(_test == val){
				$(this).addClass("active");
			}
		})
		_AnimateOut(_XSlider.find(".current"));
		_AnimateIn(_XSlider.find(".item-"+val));
	}
	//var _ran = Math.floor((Math.random() * 10) + 1);
	$(document).on("click", ".x-slider .x-btn .act", function(e){
		e.preventDefault();
		var _Num = parseInt(_XSlider.find(".current").attr("data"));
		var _Next = _Num + 1;
		var _Prev = _Num - 1;
		var _Max =  $(".x-slider").find(".slider").find(".x-item").length;
		if(_Next > _Max){
			_Next = 1;
		}
		if(_Prev < 1){
			_Prev = _Max;
		}
		if($(this).hasClass("next")){
			_NavContent(_Next);
		}
		if($(this).hasClass("prev")){
			_NavContent(_Prev);
		}
	})
	
	//auto play
	setInterval(function(){
		if($(".x-slider").parent().parent().parent().hasClass("x-hoverthis") && !$(".x-slider").hasClass("x-slider-stop")){
			var _Num = parseInt(_XSlider.find(".current").attr("data"));
			var _Next = _Num + 1;
			var _Max =  $(".x-slider").find(".slider").find(".x-item").length;
			if(_Next > _Max){
				_Next = 1;
			}
			_NavContent(_Next);
		}
	},5000);
})