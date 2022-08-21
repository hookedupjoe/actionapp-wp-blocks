const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { createElement } = wp.element;
const { useBlockProps, BlockControls, AlignmentToolbar, RichText } = wp.blockEditor;

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

function getEditorClassName(props){
	var tmpClass = '';
	if( props.isSelected ){
		tmpClass = 'actapp-block-box';
	}
	return tmpClass;
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
		function onChangeRichText( content ) {
			props.setAttributes( { content: content } ); 
		}

		return <div
			className={getClassNames(props)}
		>
		<BlockControls>
			<AlignmentToolbar
				value={props.attributes.alignment} 
				onChange={onChangeAlignment}
			></AlignmentToolbar>
		</BlockControls>,
		<RichText
			tagName="div"
			className={getEditorClassName(props)}
			value={props.attributes.content}
			allowedFormats={[ 'core/bold', 'core/italic' ]}
			onChange={onChangeRichText}
			placeholder="Heading here ...'"
		></RichText>		

		</div>
	},
 
	save: function( props ) {
		var blockProps = useBlockProps.save();
		return wp.element.createElement( wp.blockEditor.RichText.Content, Object.assign( blockProps, {
			className: getClassNames(props), tagName: 'div', value: props.attributes.content // Saves <div>Content added in the editor...</div> to the database for frontend display
		} ) );
	},
} );