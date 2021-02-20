/**
 * External dependencies
 */
import * as React from 'react';

/**
 * WordPress dependencies
 */
import { applyFilters } from '@wordpress/hooks';

/**
 * Internal dependencies
 */
import * as iconComponents from '../icons';
import { snakeCaseToPascalCase } from '.';

/**
 * Gets the icon component, if it exists.
 *
 * Converts a snake_case icon name to a PascalCase,
 * then gets an icon component of that name if it exists.
 * For example, passing 'genesis_custom_blocks' will return
 * a <GenesisCustomBlocks> icon component.
 *
 * @param {string} iconName The type of setting, like 'text'
 * @return {React.FunctionComponent|null} The settings component, if it exists.
 */
const getIconComponent = ( iconName ) => {
	if ( ! iconName || 'string' !== typeof iconName ) {
		return null;
	}

	const componentName = snakeCaseToPascalCase( iconName );

	const filteredComponents = applyFilters( 'genesisCustomBlocks.iconComponents', iconComponents );
	return filteredComponents[ componentName ] ? filteredComponents[ componentName ] : null; /* eslint-disable-line import/namespace */
};

export default getIconComponent;
