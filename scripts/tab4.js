$(document).ready(function(){
	$(".tabs").lightTabs();
});

(function($){
	jQuery.fn.lightTabs = function(options){

		var createTabs = function(){
			tabs = this;
			i = 0;

			showPage = function(i){
				$(tabs).children("div").children("div").hide();
				$(tabs).children("div").children("div").eq(i).show();
				$(tabs).children("ul").children("li").removeClass("active");
				$(tabs).children("ul").children("li").eq(i).addClass("active");
			}

			showPage(0);

			$(tabs).children("ul").children("li").each(function(index, element){
				$(element).attr("data-page", i);
				i++;
			});

			$(tabs).children("ul").children("li").click(function(){
				showPage(parseInt($(this).attr("data-page")));
			});
		};
		return this.each(createTabs);
	};
	$('#btn_start').click(function(){
		$('#message')
			.html("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")
			.css("background-color", "green")
			.parent()
			.css("background-color", "#fff4dd")
			.width(500)
			.height(80)
	});
	$('#btn_reset').click(function(){
		location.reload();
	});
})(jQuery);
