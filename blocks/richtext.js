/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var createElement = wp.element.createElement;
var _wp$blockEditor = wp.blockEditor,
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

		var rtProps = {
			tagName: 'div',
			className: getEditorClassName(props),
			allowedFormats: ['core/bold', 'core/italic'],
			value: props.attributes.content || '',
			onChange: onChangeRichText,
			placeholder: 'Heading here ...'
		};

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
		return wp.element.createElement(RichText.Content, {
			className: getClassNames(props),
			tagName: 'div',
			value: props.attributes.content
		});
	}
});
/******/ })()
;