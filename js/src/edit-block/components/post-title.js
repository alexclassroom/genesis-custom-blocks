/**
 * External dependencies
 */
import * as React from 'react';
import TextareaAutosize from 'react-autosize-textarea';

/**
 * WordPress dependencies
 */
// @ts-ignore
import { VisuallyHidden } from '@wordpress/components';
import { useInstanceId } from '@wordpress/compose';
import { useSelect } from '@wordpress/data';
import { useEffect, useRef } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { convertToSlug } from '../helpers';
import { useBlock } from '../hooks';

/**
 * Forked from Gutenberg, so this can end autoslugging during onBlur.
 *
 * @see https://github.com/WordPress/gutenberg/blob/d7e7561b7ea8128766f4f9f4150dc7c039c2cdeb/packages/editor/src/components/post-title/index.js
 *
 * @return {React.ReactElement} The post title editing area.
 */
const PostTitle = () => {
	const { block, changeBlock } = useBlock();
	const instanceId = useInstanceId( PostTitle );
	const ref = useRef( null );
	const { isCleanNewPost, title } = useSelect( ( select ) => {
		const {
			getEditedPostAttribute,
			isCleanNewPost: _isCleanNewPost,
		} = select( 'core/editor' );

		return {
			isCleanNewPost: _isCleanNewPost(),
			title: getEditedPostAttribute( 'title' ),
		};
	} );
	const isAutoSlugging = useRef( ! block || ! block.name );

	useEffect( () => {
		const { ownerDocument: { activeElement, body } } = ref.current;

		// Only autofocus the title when the post is entirely empty. This should
		// only happen for a new post, which means we focus the title on new
		// post so the author can start typing right away, without needing to
		// click anything.
		if ( isCleanNewPost && ( ! activeElement || body === activeElement ) ) {
			ref.current.focus();
		}
	}, [ isCleanNewPost ] );

	const onUpdate = ( newTitle ) => {
		if ( ! block.name ) {
			isAutoSlugging.current = true;
		}

		const newBlock = { title: newTitle };
		if ( isAutoSlugging.current ) {
			newBlock.name = convertToSlug( newTitle );
		}

		changeBlock( newBlock );
	};

	const onChange = ( event ) => onUpdate( event.target.value );
	const onBlur = () => {
		if ( block.name ) {
			isAutoSlugging.current = false;
		}
	};
	const placeholder = __( 'Block title', 'genesis-custom-blocks' );

	return (
		<div className="wp-block editor-post-title editor-post-title__block">
			<VisuallyHidden as="label" htmlFor={ `post-title-${ instanceId }` }	>
				{ placeholder }
			</VisuallyHidden>
			<TextareaAutosize
				ref={ ref }
				id={ `post-title-${ instanceId }` }
				className="editor-post-title__input"
				value={ title }
				onChange={ onChange }
				placeholder={ placeholder }
				onBlur={ onBlur }
			/>
		</div>
	);
};

export default PostTitle;
