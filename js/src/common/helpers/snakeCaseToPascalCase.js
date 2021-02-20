/**
 * Capitalizes the first character in a string.
 *
 * @param {string} name The string to capitalize.
 * @return {string} The capitalized string.
 */
const capitalize = ( name ) => name.charAt( 0 ).toUpperCase() + name.slice( 1 );

/**
 * Gets a PascalCase string from a snake_case one.
 *
 * @param {string} snakeCase A snake_case string.
 * @return {string} A PascalCase string.
 */
const snakeCaseToPascalCase = ( snakeCase ) => {
	return snakeCase
		.split( '_' )
		.reduce( ( accumulator, currentValue ) => {
			return capitalize( accumulator ) + capitalize( currentValue );
		}, '' );
};

export default snakeCaseToPascalCase;
