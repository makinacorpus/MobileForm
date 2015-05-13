'use strict';

function formMenu(MdNav) {
	var formMenu = MdNav.addMenu('FormMenu','Form Menu',1);
	var menuItem;
	// JSONConsole
	menuItem = {
		id: 'JSONConsole',
		label: 'JSON Console',
		priority: '1',
		state: 'site.form'
	}
	formMenu.addMenuItem(menuItem);
}

module.exports = {
	formMenu: formMenu
};