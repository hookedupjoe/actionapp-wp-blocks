/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;


registerBlockType('actappblk/static-mock', {
	title: __('A Mock Static Block Example with JSX'),
	icon: 'lock',
	category: 'actappblk',
	edit: function edit() {
		return wp.element.createElement(
			'p',
			null,
			'A great mock static block example built with JSX and updated.'
		);
	},
	save: function save() {
		return wp.element.createElement(
			'p',
			null,
			'A great mock static block example built with JSX and updated.'
		);
	}
});
/******/ })()
;