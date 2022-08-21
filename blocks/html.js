/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/html/preview.js
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var useMemo = wp.element.useMemo;
var _wp$blockEditor = wp.blockEditor,
    transformStyles = _wp$blockEditor.transformStyles,
    store = _wp$blockEditor.store;
var SandBox = wp.components.SandBox;
var useSelect = wp.data.useSelect;

var blockEditorStore = store;

// Default styles used to unset some of the styles
// that might be inherited from the editor style.
var DEFAULT_STYLES = "\n\thtml,body,:root {\n\t\tmargin: 0 !important;\n\t\tpadding: 0 !important;\n\t\toverflow: visible !important;\n\t\tmin-height: auto !important;\n\t}\n";

function HTMLEditPreview(_ref) {
	var content = _ref.content,
	    isSelected = _ref.isSelected;

	var settingStyles = useSelect(function (select) {
		return select(blockEditorStore).getSettings().styles;
	}, []);

	var styles = useMemo(function () {
		return [DEFAULT_STYLES].concat(_toConsumableArray(transformStyles(settingStyles)));
	}, [settingStyles]);

	return wp.element.createElement(
		"div",
		null,
		wp.element.createElement(SandBox, { html: content, styles: styles }),
		!isSelected && wp.element.createElement("div", { className: "block-library-html__preview-overlay" })
	);
}
;// CONCATENATED MODULE: ./src/html/edit.js
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

/**
 * WordPress dependencies
 */
var edit_ = wp.i18n.__;
var _wp$element = wp.element,
    useContext = _wp$element.useContext,
    useState = _wp$element.useState;
var edit_wp$blockEditor = wp.blockEditor,
    BlockControls = edit_wp$blockEditor.BlockControls,
    PlainText = edit_wp$blockEditor.PlainText,
    useBlockProps = edit_wp$blockEditor.useBlockProps;
var _wp$components = wp.components,
    ToolbarButton = _wp$components.ToolbarButton,
    Disabled = _wp$components.Disabled,
    ToolbarGroup = _wp$components.ToolbarGroup;

/**
 * Internal dependencies
 */



function HTMLEdit(_ref) {
	var attributes = _ref.attributes,
	    setAttributes = _ref.setAttributes,
	    isSelected = _ref.isSelected;

	var _useState = useState(),
	    _useState2 = _slicedToArray(_useState, 2),
	    isPreview = _useState2[0],
	    setIsPreview = _useState2[1];

	var isDisabled = useContext(Disabled.Context);

	function switchToPreview() {
		setIsPreview(true);
	}

	function switchToHTML() {
		setIsPreview(false);
	}

	return wp.element.createElement(
		'div',
		useBlockProps({ className: 'block-library-html__edit' }),
		wp.element.createElement(
			BlockControls,
			null,
			wp.element.createElement(
				ToolbarGroup,
				null,
				wp.element.createElement(
					ToolbarButton,
					{
						className: 'components-tab-button',
						isPressed: !isPreview,
						onClick: switchToHTML
					},
					'HTML'
				),
				wp.element.createElement(
					ToolbarButton,
					{
						className: 'components-tab-button',
						isPressed: isPreview,
						onClick: switchToPreview
					},
					edit_('Preview')
				)
			)
		),
		isPreview || isDisabled ? wp.element.createElement(HTMLEditPreview, {
			content: attributes.content,
			isSelected: isSelected
		}) : wp.element.createElement(PlainText, {
			value: attributes.content,
			onChange: function onChange(content) {
				return setAttributes({ content: content });
			},
			placeholder: edit_('Write HTML…'),
			'aria-label': edit_('HTML')
		})
	);
}
;// CONCATENATED MODULE: ./src/html/block.json
const block_namespaceObject = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"actappblk/html","title":"ActApp HTML","category":"actappblk","description":"Add custom HTML code and preview it as you edit.","keywords":["embed"],"textdomain":"default","attributes":{"content":{"type":"string","source":"html"}},"supports":{"customClassName":false,"className":false,"html":false},"editorStyle":"wp-block-html-editor"}');
;// CONCATENATED MODULE: ./src/html/save.js
/**
 * WordPress dependencies
 */
var RawHTML = wp.element.RawHTML;


function save(_ref) {
  var attributes = _ref.attributes;

  return wp.element.createElement(
    RawHTML,
    null,
    attributes.content
  );
}
;// CONCATENATED MODULE: ./src/html/transforms.js
/**
 * WordPress dependencies
 */
var createBlock = wp.blocks.createBlock;


var transforms = {
	from: [{
		type: 'block',
		blocks: ['core/code'],
		transform: function transform(_ref) {
			var content = _ref.content;

			return createBlock('core/html', {
				content: content
			});
		}
	}]
};

/* harmony default export */ const html_transforms = (transforms);
;// CONCATENATED MODULE: ./src/html/index.js
/**
 * WordPress dependencies
 */
var html_ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;

/**
 * Internal dependencies
 */






var html_name = block_namespaceObject.name;


var settings = block_namespaceObject;
Object.assign(settings, {
	icon: 'lock',
	example: {
		attributes: {
			content: '<marquee>' + "TESTING" + '</marquee>'
		}
	},
	edit: HTMLEdit,
	save: save,
	transforms: html_transforms
});

registerBlockType('actappblk/static-example', settings);
/******/ })()
;