/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { useContext, useState } = wp.element;
const {
	BlockControls,
	PlainText,
	useBlockProps,
} = wp.blockEditor;
const { ToolbarButton, Disabled, ToolbarGroup } = wp.components;

/**
 * Internal dependencies
 */
import Preview from './preview';

export default function HTMLEdit( { attributes, setAttributes, isSelected } ) {
	const [ isPreview, setIsPreview ] = useState();
	const isDisabled = useContext( Disabled.Context );

	function showInPopup(){
		console.log('attributes',attributes);
		ThisApp.confirm('Change this?', 'Update HTML').then(function(theReply){
			if(theReply){
				setAttributes({content:'wow <b>z</b>'});
			}
		})
		
		//alert('showInPopup');
	}
	function switchToPreview() {
		setIsPreview( true );
	}

	function switchToHTML() {		
		setIsPreview( false );
	}

	return (
		<div { ...useBlockProps( { className: 'actappblk-html__edit' } ) }>
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton
						className="components-tab-button"
						isPressed={ ! isPreview }
						onClick={ switchToHTML }
					>
						HTML
					</ToolbarButton>
					<ToolbarButton
						className="components-tab-button"
						isPressed={ isPreview }
						onClick={ switchToPreview }
					>
						{ __( 'Preview' ) }
					</ToolbarButton>
					<ToolbarButton
						className="components-tab-button"
						isPressed={ false }
						onClick={ showInPopup }
					>
						{ __( 'Editor' ) }
					</ToolbarButton>
				</ToolbarGroup>
			</BlockControls>
			{ isPreview || isDisabled ? (
				<Preview
					content={ attributes.content }
					isSelected={ isSelected }
				/>
			) : (
				<PlainText
					value={ attributes.content }
					onChange={ ( content ) => setAttributes( { content } ) }
					placeholder={ __( 'Write HTML…' ) }
					aria-label={ __( 'HTML' ) }
				/>
			) }
		</div>
	);
}
