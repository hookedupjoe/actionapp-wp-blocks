/**
 * WordPress dependencies
 */
const { createBlock } = wp.blocks;

const transforms = {
	from: [
		{
			type: 'block',
			blocks: [ 'core/code' ],
			transform: ( { content } ) => {
				return createBlock( 'core/html', {
					content,
				} );
			},
		},
	],
};

export default transforms;
