/**
 * WordPress dependencies
 */
 const { __ } = wp.i18n;
const { useMemo } = wp.element;
const {
	transformStyles,
	store,
} = wp.blockEditor;
const { SandBox } = wp.components;
const { useSelect } = wp.data;
const blockEditorStore = store;

// Default styles used to unset some of the styles
// that might be inherited from the editor style.
const DEFAULT_STYLES = `
	html,body,:root {
		margin: 0 !important;
		padding: 0 !important;
		overflow: visible !important;
		min-height: auto !important;
	}
`;

export default function HTMLEditPreview( { content, isSelected } ) {
	const settingStyles = useSelect( ( select ) => {
		return select( blockEditorStore ).getSettings().styles;
	}, [] );

	const styles = useMemo(
		() => [ DEFAULT_STYLES, ...transformStyles( settingStyles ) ],
		[ settingStyles ]
	);

	return (
		<div>
			<SandBox html={ content } styles={ styles } />
			{ /*
				An overlay is added when the block is not selected in order to register click events.
				Some browsers do not bubble up the clicks from the sandboxed iframe, which makes it
				difficult to reselect the block.
			*/ }
			{ ! isSelected && (
				<div className="block-library-html__preview-overlay"></div>
			) }
		</div>
	);
}
