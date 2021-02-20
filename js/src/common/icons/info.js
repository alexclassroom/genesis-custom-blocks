/**
 * External dependencies
 */
import * as React from 'react';

/**
 * Internal dependencies
 */
import { SvgContainer } from '../components';

/**
 * The Info icon.
 *
 * @return {React.ReactElement} The Info icon.
 */
const Info = () => (
	<SvgContainer>
		<path fill="none" d="M0 0h24v24H0V0z" />
		<path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
	</SvgContainer>
);

export default Info;
