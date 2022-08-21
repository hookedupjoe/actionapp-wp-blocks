<?php
/**
 * Plugin Name: Action App: JSX Blocks Library
 * Plugin URI: https://wp.actionapp.hookedup.com
 * Description: Action App for WordPress blocks
 * @author Joseph Francis
 * @package actionappwp
 * Author URI: https://www.hookedup.com/
 * Version: 1.0.0
 * License: GPL2+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 * 
 * @package actappblk
 * @since actappblk 1.0.0
 */

defined( 'ABSPATH' ) || exit;

if ( !defined( 'ABSPATH' ) ) {
	exit;
}

define( 'ACTAPPBLK_FILE', __FILE__ );

if ( !defined( 'ACTAPPBLK_DIR' ) ) {
	define( 'ACTAPPBLK_DIR', untrailingslashit( plugin_dir_path( __FILE__ ) ) );
}

if ( !defined( 'ACTAPPBLK_URL' ) ) {
	define( 'ACTAPPBLK_URL', plugins_url( 'actionapp-wp-blocks' ) );
}

if ( !defined( 'ACTAPPBLK_IMAGE_PATH' ) ) {
	define( 'ACTAPPBLK_IMAGE_PATH', ACTAPPBLK_URL.'/images/' );
}


define( 'ACTAPPBLK_FILE', __FILE__ );
if ( !defined( 'ACTAPPBLK_BASE_DIR' ) ) {
	define( 'ACTAPPBLK_BASE_DIR', untrailingslashit( plugin_dir_path( __FILE__ ) ) );
}

if ( !defined( 'ACTAPPBLK_BASE_URL' ) ) {
	define( 'ACTAPPBLK_BASE_URL', plugins_url( 'actionapp-wp' ) );
}

if ( !defined( 'ACTAPPBLK_CORE_LIB_URL' ) ) {
	define( 'ACTAPPBLK_CORE_LIB_URL', ACTAPPBLK_BASE_URL . '/core' );
}

if ( !defined( 'ACTAPPBLK_CORE_LIB' ) ) {
	define( 'ACTAPPBLK_CORE_LIB', ACTAPPBLK_BASE_DIR . '/core' );
}


//---- Blocks Module
define( 'ACTAPPBLK_BLOCKS_VERSION', '1.0.3' );
define( 'ACTAPPBLK_BLOCKS_FILE', __FILE__ );

if ( !defined( 'ACTAPPBLK_BLOCKS_DIR' ) ) {
	define( 'ACTAPPBLK_BLOCKS_DIR', ACTAPPBLK_BASE_DIR );
}

if ( !defined( 'ACTAPPBLK_BLOCKS_URL' ) ) {
	define( 'ACTAPPBLK_BLOCKS_URL', ACTAPPBLK_BASE_URL );
}

require_once ACTAPPBLK_BASE_DIR . '/cls/ActAppBlocks.php';

// function actappblk_backend_enqueue() {
// 	wp_enqueue_script(
// 		'actappblk-backend-script', // Unique handle.
// 		plugins_url( 'js/block.build.js', __FILE__ ), // block.js: We register the block here.
// 		array( 'wp-blocks', 'wp-i18n', 'wp-element' ) // Dependencies, defined above.
// 	);
// }
// add_action( 'enqueue_block_editor_assets', 'actappblk_backend_enqueue' );