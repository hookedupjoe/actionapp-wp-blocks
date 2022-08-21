/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;


registerBlockType('actappblk/static-example', {
	title: __('Static Block Example with JSX'),
	icon: 'lock',
	category: 'actappblk',
	edit: function edit() {
		return wp.element.createElement(
			'div',
			null,
			'AA static block example built with JSX and updated.'
		);
	},
	save: function save() {
		return wp.element.createElement(
			'div',
			null,
			'AA static block example built with JSX and updated.'
		);
	}
});
/******/ })()
;