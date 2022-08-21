/**
 * WordPress dependencies
 */
 const { RawHTML } = wp.element;

export default function save( { attributes } ) {
	return <RawHTML>{ attributes.content }</RawHTML>;
}
