<?php
/**
 * Server Side Blocks Manager: ActAppBlocks
 * 
 * Copyright (c) 2021-2022 Joseph Francis / hookedup, inc. 
 *
 * This code is released under the GNU General Public License.
 * See COPYRIGHT.txt and LICENSE.txt.
 *
 * This code is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * This header and all notices must be kept intact.
 *
 * @author Joseph Francis
 * @package actappblk
 * @since actappblk 1.0.0
 */


class ActAppBlocks {
	private static $instance;
	public static function get_instance() {
		if ( null == self::$instance ) {
			self::$instance = new ActAppBlocks();
		}
		return self::$instance;
	}


	public static function actapp_block_category( $categories, $post ) {
		return array_merge(
			array(
				array(
					'slug' => 'actappblk',
					'title' => __( 'Action App Blocks'),
				),
			),
			$categories
		);
	}

	
	public static function loadStandardBlock($theName, $theFileName = '', $theDependencies = null){
		$tmpDepDefaults = array('wp-blocks','wp-editor','wp-element');

		$tmpFN = $theFileName;
		if( $tmpFN == ''){
			$tmpFN = $theName;
		}
		
		wp_enqueue_script(
			$theName, 
			ACTAPPBLK_URL . '/blocks/' . $tmpFN . '.js',
			$tmpDepDefaults,
			true
		);
		//wp_enqueue_style ( 'aa-core-blocks_css' );
	}

	public static function actapp_init_blocks_content($theHook) {
		// $tmpConfig = array(
		// 	'baseURL'=> ACTAPPBLK_URL,
		// 	'catalogURL'=> ACTAPPBLK_URL . '/catalog'
		// );

		// wp_register_style( 'actapp-blocks-content_css',   ACTAPPBLK_URL . '/css/wp-blocks-content.css', false,  $my_css_ver );
		// wp_enqueue_style ( 'actapp-blocks-content_css' );

		// $tmpJson = json_encode($tmpConfig);
		// $tmpScript = 'window.ActionAppCore.ActAppBlkConfig = ' . $tmpJson;
		// ActAppCommon::setup_scripts($theHook);
		// wp_add_inline_script( 'app-only-preinit', $tmpScript );

		// //--- Load the action app core components and ActionAppCore.common.blocks add on
		// wp_enqueue_script(
		// 	'actapp-blocks-controller', 
		// 	ACTAPPBLK_URL . '/js/ActAppBlocksController.js',
		// 	array(),
		// 	true
		// );
	}

	public static function actapp_init_admin_scripts(){
		// wp_register_style( 'aa-core-admin_css',   ACTAPPBLK_URL . '/css/wp-admin.css', false,  $my_css_ver );
		// wp_enqueue_style ( 'aa-core-admin_css' );
	}
	
	public static function actapp_init_blocks($theHook) {
		
	
		// wp_register_style( 'aa-core-blocks_css',   ACTAPPBLK_URL . '/css/wp-blocks.css', false,  $my_css_ver );
		// //--- Load the action app core components and ActionAppCore.common.blocks add on
		// wp_enqueue_script(
		// 	'actapp-blocks-editor', 
		// 	ACTAPPBLK_URL . '/js/BlockEditor.js',
		// 	array('wp-blocks','wp-editor','wp-element'),
		// 	true
		// );
		//--- Load standardly created widgets;
		//$tmpWidgetList = array('segment','header','card', 'cards', 'message', 'button', 'image', 'cardsection','dropindicator','spot','richtext');
		//'block','mockblock', 'richtext'
		$tmpWidgetList = array('html');
		foreach ($tmpWidgetList as $aName) {
			self::loadStandardBlock($aName);
		}
			
	}

	
	public static function init() {
//		add_action( 'admin_menu', array( 'ActAppBlocks', 'registerAdminPageWidgetsSettings' ) );
		
		

		add_filter('block_categories',  array('ActAppBlocks','actapp_block_category'), 10, 2);
		// add_action('enqueue_block_editor_assets',  array('ActAppBlocks','actapp_init_blocks_content'),10,2);
		add_action('enqueue_block_editor_assets',  array('ActAppBlocks','actapp_init_blocks'),10,2);
		
		// add_action('wp_enqueue_scripts', array('ActAppCommon','setup_scripts'),20);
		// add_action('wp_enqueue_scripts',  array('ActAppBlocks','actapp_init_blocks_content'),20,2);
		
		

		// add_action('admin_enqueue_scripts', array('ActAppCommon','setup_scripts'),20);
		// add_action('admin_enqueue_scripts',  array('ActAppBlocks','actapp_init_blocks_content'),20,2);
		// add_action('admin_enqueue_scripts',  array('ActAppBlocks','actapp_init_admin_scripts'),20);


		// self::setup_data();
	}

	// //Custom acf endpoint;
	// public static function dev_endpoint( $request_data ) {
	// 	return array('version'=>'V1.1.1');
	// }

	
	public static function setup_data() {
		
// // register the endpoint;
// add_action( 'rest_api_init', function () {
// 	register_rest_route( 'aawm/v1', 'blocksdev/', array(
// 		'methods' => 'GET',
// 		'callback' => array('ActAppBlocks', 'dev_endpoint'),
// 		)
// 	);
// });
	}

	
	public static function baseDir() {
		return ACTAPPBLK_DIR;
	}
	public static function baseURL() {
		return ACTAPPBLK_URL;
	}
	

	//---- Admin Settings
	public static function showAdminPageWidgetsSettings(){
		//include ACTAPPBLK_DIR . '/tpl/widgets-settings.php';
		//get_template_part( 'tpl/widgets-settings' );
		//echo 'hi';
		include(ACTAPPBLK_DIR . '/tpl/widgets-settings.php');
		
	}

	
	public static function getWidgetUI(){
		return 'List UI Widget options here';
	}
	public static function registerAdminPageWidgetsSettings(){
		add_menu_page( 
			__( 'Action App Block Settings'),
			'ActApp Blocks',
			'manage_options',
			'actappblksettings',
			array( 'ActAppBlocks', 'showAdminPageWidgetsSettings' ),
			plugins_url( 'actapp-blocks/images/icon.png' ),
			81
		); 
	}

}

//--- Demo of a widget that uses server side rendering
//--- *** This is a Designer Widget, Setup in ActAppDesigner
//require_once ACTAPPBLK_DIR . '/blocks/actappdesign/ActAppDynamicDemo/Object.php';

add_action( 'init', array( 'ActAppBlocks', 'init' ) );



