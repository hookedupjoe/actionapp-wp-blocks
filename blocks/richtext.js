/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var createElement = wp.element.createElement;
var _wp$blockEditor = wp.blockEditor,
    useBlockProps = _wp$blockEditor.useBlockProps,
    BlockControls = _wp$blockEditor.BlockControls,
    AlignmentToolbar = _wp$blockEditor.AlignmentToolbar,
    RichText = _wp$blockEditor.RichText;


function getClassNames(props) {
	var tmpRet = 'ui segment basic pad0 mar0';
	//---ToDo: Add options for padding and margin
	//pad0 mar0
	var tmpAlignCls = '';
	if (props.attributes.alignment === 'center') {
		tmpAlignCls = ' center aligned';
	} else if (props.attributes.alignment === 'right') {
		tmpAlignCls = ' right aligned';
	}
	tmpRet += tmpAlignCls;
	return tmpRet;
}

function getEditorClassName(props) {
	var tmpClass = '';
	if (props.isSelected) {
		tmpClass = 'actapp-block-box';
	}
	return tmpClass;
}

registerBlockType('actappblk/richtext', {
	title: __('ActionApp Rich Text'),
	icon: 'lock',
	category: 'actappblk',
	attributes: {
		alignment: {
			type: 'string'
		},
		content: {
			type: 'string',
			source: 'html',
			selector: 'div'
		}
	},
	edit: function edit(props) {

		function onChangeAlignment(updatedAlignment) {
			console.log('alignment: updatedAlignment', updatedAlignment);
			props.setAttributes({ alignment: updatedAlignment });
		}
		function onChangeRichText(content) {
			props.setAttributes({ content: content });
		}

		//const blockProps = useBlockProps.save();
		var rtProps = {
			tagName: 'div',
			className: getEditorClassName(props),
			allowedFormats: ['core/bold', 'core/italic'],
			value: props.attributes.content || '',
			onChange: onChangeRichText,
			placeholder: 'Heading here ...'
		};
		//{...blockProps}
		return wp.element.createElement(
			'div',
			null,
			wp.element.createElement(
				BlockControls,
				null,
				wp.element.createElement(AlignmentToolbar, {
					value: props.attributes.alignment,
					onChange: onChangeAlignment
				})
			),
			wp.element.createElement(RichText, rtProps)
		);
	},

	save: function save(props) {
		//blockProps = useBlockProps.save();
		//{...blockProps}
		return wp.element.createElement(RichText.Content, {
			className: getClassNames(props),
			tagName: 'div',
			value: props.attributes.content
		});
	}
});

/***/ })
/******/ ]);