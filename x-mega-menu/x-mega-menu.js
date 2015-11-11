$(function(){
	/**
	 *	X Mega Menu
	 *	Written by: Xuan Hoang
	 *	06-10-2015
	 *	Project: XHFramework
	 */
	
	//Append icon hover: Menu Item level 1
	$(".x-mega-menu-vertical").find(".item-master").each(function(){
		if($(this).hasClass("has-children")){
			$(this).find(".submenu").first().before('<span class="hover-icon">&nbsp;</span>');
		}
	})
	//Append icon open submenu
	$(".x-mega-menu-vertical").find(".item-sub").each(function(){
		if($(this).hasClass("has-children")){
			$(this).find(".link").first().append('<span class="open-sub fa fa-angle-right"></span>');
		}
	})
	var _AnimateInData = ['puffIn', 'spaceInUp', 'spaceInLeft', 'spaceInRight', 'spaceInDown', 'boingInUp', 'foolishIn', 'tinUpIn', 'tinLeftIn', 'tinRightIn', 'tinDownIn', 'swap', 'twisterInUp', 'twisterInDown', 'vanishIn', 'swashIn'];
	var _AnimateOutData = ['spaceOutDown', 'rotateDown', 'slideLeft', 'slideRight', 'slideDown'];
	var _AnimateIn = function(_this){
		_this.parent().find(".submenu").first().removeClass("magictime");
		_this.parent().find(".submenu").first().addClass("magictime");
		_this.parent().find(".submenu").first().fadeIn();
		for(i = 0; i <= _AnimateOutData.length; i++){
			_this.parent().find(".submenu").first().removeClass(_AnimateOutData[i]);
		}
		for(i = 0; i <= _AnimateInData.length; i++){
			_this.parent().find(".submenu").first().removeClass(_AnimateInData[i]);
		}
		var _ran = Math.floor((Math.random() * _AnimateInData.length));
		_this.parent().find(".submenu").first().addClass(_AnimateInData[_ran]);
	}
	var _AnimateOut = function(_this){
		for(i = 0; i <= _AnimateOutData.length; i++){
			_this.find(".submenu").first().removeClass(_AnimateOutData[i]);
		}
		for(i = 0; i <= _AnimateInData.length; i++){
			_this.find(".submenu").first().removeClass(_AnimateInData[i]);
		}
		var _ran = Math.floor((Math.random() * _AnimateOutData.length));
		_this.find(".submenu").first().addClass(_AnimateOutData[_ran]);
		_this.find(".submenu").first().fadeOut();
	}
	$(".x-mega-menu-vertical").find(".item").find(".item-content").mouseenter(function(){
		if(!$(this).parent().hasClass("x-hoverthis")){
			_AnimateIn($(this));
			$(this).parent().addClass("x-hoverthis");
			$(this).css({"z-index": "9999"});
		}
	})
	$(".x-mega-menu-vertical").find(".item").mouseleave(function(){
		$(this).removeClass("x-hoverthis");
		$(this).css({"z-index": "9990"});
		$(this).find(".item-content").css({"z-index": "9990"});
		_AnimateOut($(this));
	})
	
	//multitab process
	$(document).on("click",".multitab .x-tab-master .master-target", function(e){
		e.preventDefault();
		var _Target = $(this).attr("href");
		$(this).parent().find(".active").removeClass("active");
		$(this).addClass("active");
		$(_Target).parent().find(".active").removeClass("active");
		$(_Target).addClass("active");
	})
	
	//test function 
	$.fn.XmegaMenuVertical = function(){
		this.find("p").click(function(e){
			e.preventDefault();
			alert("Hello");
		})
	}
	$(".test-function").XmegaMenuVertical();
})