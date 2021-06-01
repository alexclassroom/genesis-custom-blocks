<?php
/**
 * Queries for the blocks on the site.
 *
 * @package Genesis\CustomBlocks
 */

namespace Genesis\CustomBlocks\Cli;

use WP_CLI;
use WP_Query;

/**
 * Gets the field types (controls) and their counts.
 *
 * @return array[] $fields {
 *     The fields in all of the blocks.

 *     @type string $field The type (control) of the field, like 'text'.
 *     @type int    $count The count of that type in all of the blocks.
 * }
 */
function get_fields() {
	$block_query = new WP_Query(
		[
			'post_type'      => 'genesis_custom_block',
			'post_status'    => 'publish',
			'posts_per_page' => 99,
		]
	);

	$field_histogram = [];
	foreach ( $block_query->posts as $post ) {
		$block_json = json_decode( $post->post_content, true );
		$fields     = $block_json[ 'genesis-custom-blocks/' . $post->post_name ]['fields'];
		if ( empty( $fields ) ) {
			break;
		}

		foreach ( $fields as $field_name => $field ) {
			$field_histogram[ $field['control'] ] = ! empty( $field_histogram[ $field['control'] ] ) && is_int( $field_histogram[ $field['control'] ] )
				? $field_histogram[ $field['control'] ] + 1
				: 1;
		}
	}

	$table_fields = [];
	foreach ( $field_histogram as $field => $count ) {
		$table_fields[] = compact( 'field', 'count' );
	}

	return $table_fields;
}

/**
 * Queries the blocks on the site and logs the results.
 */
function query_blocks() {
	$post_count = wp_count_posts( 'genesis_custom_block' );
	if ( empty( $post_count->publish ) ) {
		WP_CLI::log( 'There is no GCB block' );
		return;
	}

	WP_CLI::log( sprintf( 'There are %1$d GCB blocks', $post_count->publish ) );
	WP_CLI::log( "\n" );

	$table_fields = [ 'field', 'count' ];
	$assoc_args   = [ 'fields' => 'field,count' ];

	WP_CLI::log( 'Total counts of each field type (control):' );
	$formatter = new WP_CLI\Formatter( $assoc_args, $table_fields );
	$formatter->display_items( get_fields() );
}

if ( ! defined( 'WP_CLI' ) ) {
	echo "Please run this with WP-CLI: wp eval-file bin/query-blocks.php\n";
	exit( 1 );
}

if (
	! is_plugin_active( 'genesis-custom-blocks/genesis-custom-blocks.php' )
	&& ! is_plugin_active( 'genesis-custom-blocks-pro/genesis-custom-blocks-pro.php' )
) {
	echo "Genesis Custom Blocks is not active\n";
}

query_blocks();
