/**
 * Removed element from array
 * @param {Array} arr Array from which we need to remove an element
 * @param {any} element Element that needs to be removed from arr
 * @returns Array with element removed
 */
const removeFromArray = (arr, element) =>
	arr.filter((item) => item !== element);

/**
 * Removed element from array
 * @param {Array} arr Array from which we need to remove an element
 * @param {any} element Element that needs to be removed from arr
 * @returns Array with element removed
 */
const removeObjFromArray = (arr, element) =>
	arr.filter((item) => item._id !== element);

/**
 * Check if its present in the array
 * @param {Array} arr
 * @param {any} element Element that needs to be searched from arr
 * @returns true if element is found else false
 */
const presentInArray = (arr, element) =>
	arr.find((item) => item === element) !== undefined ? true : false;

/**
 * Check if id is present in the array of objects
 * @param {Array} arr Array of objects
 * @param {any} element Element id that needs to be searched from arr
 * @returns true if element is found else false
 */
const presentObjInArray = (arr, element) =>
	arr.find((item) => item._id === element) !== undefined ? true : false;

export {
	removeFromArray,
	presentInArray,
	presentObjInArray,
	removeObjFromArray,
};
