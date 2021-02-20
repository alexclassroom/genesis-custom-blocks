/**
 * External dependencies
 */
import * as React from 'react';

/**
 * Internal dependencies
 */
import { SvgContainer } from '../components';

/**
 * The AddAPhoto icon.
 *
 * @return {React.ReactElement} The AddAPhoto icon.
 */
const AddAPhoto = () => (
	<SvgContainer>
		<path fill="none" d="M0 0h24v24H0z" />
		<path d="M21 6h-3.17L16 4h-6v2h5.12l1.83 2H21v12H5v-9H3v9c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM8 14c0 2.76 2.24 5 5 5s5-2.24 5-5-2.24-5-5-5-5 2.24-5 5zm5-3c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3zM5 6h3V4H5V1H3v3H0v2h3v3h2z" />
	</SvgContainer>
);

export default AddAPhoto;
