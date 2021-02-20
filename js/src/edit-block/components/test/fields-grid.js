/**
 * External dependencies
 */
import * as React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';

/**
 * Internal dependencies
 */
import { FieldsGrid } from '../../components';
import { BLOCK_PANEL } from '../../constants';

const mockUrlField = {
	control: 'url',
	label: 'Url Example',
	location: 'editor',
	name: 'url-example',
	type: 'string',
};

const mockBlock = {
	name: 'testing-block',
	title: 'Testing Block',
	category: {
		icon: null,
		slug: 'text',
		title: 'Text',
	},
	icon: 'genesis_custom_blocks',
	keywords: [],
	excluded: [],
	fields: {
		[ mockUrlField.name ]: mockUrlField,
	},
};

jest.mock( '../../hooks/useBlock', () => {
	return jest.fn( () => ( {
		block: mockBlock,
		changeBlock: jest.fn(),
	} ) );
} );

jest.mock( '../../hooks/useField', () => {
	return jest.fn( () => ( {
		getFieldsForLocation: () => [ mockUrlField ],
		addNewField: jest.fn(),
	} ) );
} );

global.gcbEditor = { controls: {} };

describe( 'FieldsGrid', () => {
	it( 'displays the main editor area', async () => {
		const { getByText } = render(
			<FieldsGrid
				currentLocation="editor"
				panelDisplaying={ BLOCK_PANEL }
				selectedField={ { name: mockUrlField.name } }
				setPanelDisplaying={ jest.fn() }
				setIsNewField={ jest.fn() }
				setSelectedField={ jest.fn() }
			/>
		);

		expect( getByText( mockUrlField.name ) ).toBeInTheDocument();
		expect( getByText( mockUrlField.label ) ).toBeInTheDocument();
	} );
} );
