/**
 * Gets the comparison between two objects.
 *
 * @param {Object} a The first to compare.
 * @param {Object} b The second to compare.
 * @return {number} Either -1, 0, or 1, depending on the comparison.
 */
const compare = ( a, b ) => {
	if ( a.order < b.order ) {
		return -1;
	}
	if ( a.order > b.order ) {
		return 1;
	}
	return 0;
};

/**
 * Gets a simplified and sorted array of the fields.
 *
 * @param {Object} fields The fields to simplify.
 * @return {Array} The simplified fields.
 */
const getFieldsAsArray = ( fields ) => {
	return Object.keys( fields )
		.reduce( ( accumulator, fieldName ) => {
			accumulator.push(
				{
					...fields[ fieldName ],
					name: fieldName,
				}
			);

			return accumulator;
		}, [] )
		.sort( compare );
};

export default getFieldsAsArray;
