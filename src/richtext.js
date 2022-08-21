const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { createElement } = wp.element;
const { useBlockProps } = wp.blockEditor;
var el = createElement;


function getClassNames( props ){
	var tmpRet = 'ui segment basic pad0 mar0';
	//---ToDo: Add options for padding and margin
	//pad0 mar0
	var tmpAlignCls = '';
	if( props.attributes.alignment === 'center'){
		tmpAlignCls = ' center aligned';
	} else if( props.attributes.alignment === 'right'){
		tmpAlignCls = ' right aligned';
	}
	tmpRet += tmpAlignCls;
	return tmpRet;
}


registerBlockType( 'actappblk/richtext', {
	title: __( 'ActionApp Rich Text' ),
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
	edit: function( props ) {

		function onChangeAlignment( updatedAlignment ) {
			console.log( 'alignment: updatedAlignment', updatedAlignment);
			props.setAttributes( { alignment: updatedAlignment } );
		}

		var tmpClass = '';
		if( props.isSelected ){
			tmpClass = 'actapp-block-box';
		}

		var tmpAs = Object.assign( useBlockProps, {
			tagName: 'div',  // The tag here is the element output and editable in the admin
			className: tmpClass,
			value: props.attributes.content || '', // Any existing content, either from the database or an attribute default
			allowedFormats: [ 'core/bold', 'core/italic' ], // Allow the content to be made bold or italic, but do not allow other formatting options
			onChange: function( content ) {
				props.setAttributes( { content: content } ); // Store updated content as a block attribute
			},
			placeholder: ( 'Heading here ...' ), // Display this text before any content has been added by the user
		} )

		var tmpAligner = el(
			wp.blockEditor.BlockControls,
			{},
			el(
				wp.blockEditor.AlignmentToolbar,
				{
					value: props.attributes.alignment,
					onChange: onChangeAlignment
				}
			)
		);
		return el('div',{className: getClassNames(props)},tmpAligner,el(wp.blockEditor.RichText,tmpAs));
	},
 
	save: function( props ) {
		var blockProps = useBlockProps.save();

		return wp.element.createElement( wp.blockEditor.RichText.Content, Object.assign( blockProps, {
			className: getClassNames(props), tagName: 'div', value: props.attributes.content // Saves <div>Content added in the editor...</div> to the database for frontend display
		} ) );
	},
} );