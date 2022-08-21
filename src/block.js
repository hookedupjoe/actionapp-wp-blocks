const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

registerBlockType( 'actappblk/static-example', {
	title: __( 'Static Block Example with JSX' ),
	icon: 'lock',
	category: 'actappblk',
	edit() {
		return (
			<div>AA static block example built with JSX and updated.</div>
		);
	},
	save() {
		return (
			<div>AA static block example built with JSX and updated.</div>
		);
	},
} );