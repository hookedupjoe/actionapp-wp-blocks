const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

registerBlockType( 'actappblk/static-mock', {
	title: __( 'A Mock Static Block Example with JSX' ),
	icon: 'lock',
	category: 'actappblk',
	edit() {
		return (
			<p>A great mock static block example built with JSX and updated.</p>
		);
	},
	save() {
		return (
			<p>A great mock static block example built with JSX and updated.</p>
		);
	},
} );