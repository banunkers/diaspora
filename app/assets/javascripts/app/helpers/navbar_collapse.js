/* function auto_collapse() {
	var navbar = $('#navbar-collapse');
	var left_comp_width = $('#left-nav').width();
	var right_comp_user_menu_width = $('#navbar-right-user-menu').width();
	var right_comp_search_width = $('#header-search-form').width();
	var navbar_width = left_comp_width + right_comp_search_width + right_comp_user_menu_width;
	console.log("left com = ", left_comp_width);
	console.log("right compt user menu = ", right_comp_user_menu_width);
	console.log("right comp search = ", right_comp_search_width);
	console.log("Total width of header = ", left_comp_width + right_comp_search_width + right_comp_user_menu_width);
	console.log("navbar innerwidth = ", navbar.innerWidth());
	navbar.removeClass('collapsed');
	if (navbar.innerWidth() <= navbar_width) {
		console.log("In IF");
		navbar.addClass('collapsed');
	}
} */

function auto_collapse() { 
	var navbar = $('#navbar-collapse')
	console.log("innerHeight = ", navbar.innerHeight());
	navbar.removeClass('collapsed');
	if (navbar.innerHeight() > 50) {
		console.log("in if");
		navbar.addClass('collapsed');
	}
}

$(document).on('ready', auto_collapse);
$(window).on('resize', auto_collapse);