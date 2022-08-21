const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { createElement } = wp.element;
const { useBlockProps, BlockControls, AlignmentToolbar, RichText } = wp.blockEditor;

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
			selector: 'div',
		},
	},
	edit: function (props) {

		function onChangeAlignment(updatedAlignment) {
			console.log('alignment: updatedAlignment', updatedAlignment);
			props.setAttributes({ alignment: updatedAlignment });
		}
		function onChangeRichText(content) {
			props.setAttributes({ content: content });
		}

		//const blockProps = useBlockProps.save();
		const rtProps = {
			tagName: 'div',
			className: getEditorClassName(props),
			allowedFormats: ['core/bold', 'core/italic'],
			value: props.attributes.content || '',
			onChange: onChangeRichText,
			placeholder: ('Heading here ...'),
		};
//{...blockProps}
		return <div>
			<BlockControls>
				<AlignmentToolbar
					value={props.attributes.alignment}
					onChange={onChangeAlignment}
				></AlignmentToolbar>
			</BlockControls>
			<RichText
				{...rtProps}
			></RichText>
		</div>
	},

	save: function (props) {
		//blockProps = useBlockProps.save();
		//{...blockProps}
		return <RichText.Content
			className={getClassNames(props)}
			tagName="div"
			value={props.attributes.content}
		></RichText.Content>
		
	},
});