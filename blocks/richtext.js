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
var useBlockProps = wp.blockEditor.useBlockProps;

var el = createElement;

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

		var tmpClass = '';
		if (props.isSelected) {
			tmpClass = 'actapp-block-box';
		}

		var tmpAs = Object.assign(useBlockProps, {
			tagName: 'div', // The tag here is the element output and editable in the admin
			className: tmpClass,
			value: props.attributes.content || '', // Any existing content, either from the database or an attribute default
			allowedFormats: ['core/bold', 'core/italic'], // Allow the content to be made bold or italic, but do not allow other formatting options
			onChange: function onChange(content) {
				props.setAttributes({ content: content }); // Store updated content as a block attribute
			},
			placeholder: 'Heading here ...' // Display this text before any content has been added by the user
		});

		var tmpAligner = el(wp.blockEditor.BlockControls, {}, el(wp.blockEditor.AlignmentToolbar, {
			value: props.attributes.alignment,
			onChange: onChangeAlignment
		}));
		return el('div', { className: getClassNames(props) }, tmpAligner, el(wp.blockEditor.RichText, tmpAs));
	},

	save: function save(props) {
		var blockProps = useBlockProps.save();

		return wp.element.createElement(wp.blockEditor.RichText.Content, Object.assign(blockProps, {
			className: getClassNames(props), tagName: 'div', value: props.attributes.content // Saves <div>Content added in the editor...</div> to the database for frontend display
		}));
	}
});

/***/ })
/******/ ]);