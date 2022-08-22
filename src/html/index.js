/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;


/**
 * Internal dependencies
 */
import edit from './edit';
import metadata from './block.json';
import save from './save';
import transforms from './transforms';

const { name } = metadata;

var settings = metadata;
Object.assign(settings, {
	icon: 'lock',
	example: {
		attributes: {
			content:
				'<marquee>' +
				"TESTING" +
				'</marquee>',
		},
	},
	edit,
	save,
	transforms,
} );


registerBlockType( name, settings);
