// Global variable for device width
var viewWidth = Ti.Platform.displayCaps.platformWidth;
// Main Window
var win = Ti.UI.createWindow({
	title : 'Main Window',
	backgroundColor : '#28292c',
	barColor : '#28292c'
});
win.open();

// View for Menu items
var menuView = Ti.UI.createView({
	top : 0,
	left : viewWidth,
	width : 150,
	backgroundColor : 'red',

});
win.add(menuView);
var menuTitles = [{
	title : 'Menu 1'
}, {
	title : 'Menu 2'
}, {
	title : 'Menu 3'
}, {
	title : 'Menu 4'
}, {
	title : 'Menu 5'
}, {
	title : 'Menu 6'
}];
// Tableview
var tableView = Ti.UI.createTableView({
	data : menuTitles
});
menuView.add(tableView);

//Another view
var View = Ti.UI.createView({
	top : 0,
	right : 0,
	backgroundColor : 'white',

});
win.add(View);
var menuButton = Ti.UI.createButton({
	title : 'Menu',
	toggle : false // Custom property for menu toggle
});
View.add(menuButton);
menuButton.addEventListener('click', function(e) {
	// If the menu is opened
	if (e.source.toggle == true) {
		menuView.animate({
			left : viewWidth,
			duration : 400,

		});
		e.source.toggle = false;

	}
	// If the menu isn't opened
	else {
		menuView.animate({
			left : viewWidth - 150,
			duration : 400,

		});
		e.source.toggle = true;

	}
}); 