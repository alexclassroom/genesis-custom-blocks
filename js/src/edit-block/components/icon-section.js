/**
 * External dependencies
 */
import * as React from 'react';
import classNames from 'classnames';

/**
 * WordPress dependencies
 */
import { Icon } from '@wordpress/components';
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { useBlock } from '../hooks';
import { getIconComponent, pascalCaseToSnakeCase } from '../../common/helpers';
import * as blockIcons from '../../common/icons';
import { getDefaultBlock } from '../helpers';

/**
 * The icon editor section.
 *
 * @return {React.ReactElement} The icon editor.
 */
const IconSection = () => {
	const { block, changeBlock } = useBlock();
	const [ showIcons, setShowIcons ] = useState( false );
	const currentIcon = block.icon || getDefaultBlock().icon;

	return (
		<div className="mt-5">
			<span className="text-sm">{ __( 'Icon', 'genesis-custom-blocks' ) }</span>
			<button
				className="flex border border-gray-600 rounded-sm mt-2"
				onClick={ () => {
					setShowIcons( ( current ) => ! current );
				} }
			>
				<div className="flex items-center justify-center h-8 w-8 border-r border-gray-600">
					<Icon size={ 24 } icon={ getIconComponent( currentIcon ) } />
				</div>
				<div className="flex items-center h-8 px-3">
					{ showIcons ? __( 'Close', 'genesis-custom-blocks' ) : __( 'Choose', 'genesis-custom-blocks' ) }
				</div>
			</button>
			{ showIcons
				? <div role="listbox" className="grid grid-cols-6 border border-gray-600 rounded-sm h-40 p-1 overflow-auto mt-2" aria-label={ __( 'Icons', 'genesis-custom-blocks' ) } >
					{
						Object.keys( blockIcons ).map( ( iconName, index ) => {
							const snakeCaseIconName = pascalCaseToSnakeCase( iconName );
							const isSelected = currentIcon === snakeCaseIconName;

							return (
								<button
									key={ `block-icon-item-${ index }` }
									className={ classNames(
										'flex items-center justify-center h-8 w-8 hover:border-black',
										isSelected ? 'border-blue-700' : 'border-transparent'
									) }
									type="button"
									role="option"
									aria-selected={ isSelected }
									onClick={ () => {
										changeBlock( { icon: snakeCaseIconName } );
									} }
								>
									{ /* eslint-disable-next-line import/namespace */ }
									<Icon className="w-5 h-5" size={ 24 } icon={ blockIcons[ iconName ] } />
								</button>
							);
						} )
					}
				</div>
				: null
			}
		</div>
	);
};

export default IconSection;
