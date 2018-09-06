$(document).ready(function(){
	
	//Load the local header file - NB some browsers prevent this locally 
	$('#header_container').load('html/header.html', function(response, status, xhr){
		
		$('.menu_item_container').hover(function(){
			$(this).addClass('nav_menu_hover')
				.find('.sub_menu')
					.addClass('ui-corner-all')
					.toggle();
			
			
		}, function(){
			
			$(this)
				.removeClass('nav_menu_hover')
				.find('.sub_menu').toggle();
			
		});
		
		$('.menu_item_sub_link').hover(function(){
			
			$(this).addClass('menu_item_sub_link_hover');
			
			
		}, function(){
			
			$(this).removeClass('menu_item_sub_link_hover');
			
		});	
		
		
	});
	
	$('#footer_container').load('html/footer.html');
	
	
});
