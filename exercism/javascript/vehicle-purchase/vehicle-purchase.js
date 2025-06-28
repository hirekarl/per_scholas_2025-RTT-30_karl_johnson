// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * A frozen, immutable array of vehicles that require a license.
 *
 * @constant
 * @readonly
 * @type {readonly string[]}
 */
const LICENSE_REQUIRED = Object.freeze(["car", "truck"]);

/**
 * A frozen, immutable enum-like Object to avoid magic numbers.
 *
 * @constant
 * @readonly
 * @type {Object.<string, number>}
 */
const DISCOUNT_RATES = Object.freeze({
  FIFTY_PERCENT: 0.5,
  SEVENTY_PERCENT: 0.7,
  EIGHTY_PERCENT: 0.8,
});

/**
 * Determines whether or not you need a license to operate a certain kind of vehicle.
 *
 * @param {string} kind
 * @returns {boolean} whether a license is required
 */
export function needsLicense(kind) {
  return LICENSE_REQUIRED.includes(kind);
}

/**
 * Helps choosing between two options by recommending the one that
 * comes first in dictionary order.
 *
 * @param {string} option1
 * @param {string} option2
 * @returns {string} a sentence of advice which option to choose
 */
export function chooseVehicle(option1, option2) {
  const sorting = option1.localeCompare(option2);
  const firstInAlphabet = sorting < 1 ? option1 : option2;

  return `${firstInAlphabet} is clearly the better choice.`;
}

/**
 * Calculates an estimate for the price of a used vehicle in the dealership
 * based on the original price and the age of the vehicle.
 *
 * @param {number} originalPrice
 * @param {number} age
 * @returns {number} expected resell price in the dealership
 */
export function calculateResellPrice(originalPrice, age) {
  if (age < 3) {
    return originalPrice * DISCOUNT_RATES.EIGHTY_PERCENT;
  } else if (age >= 3 && age <= 10) {
    return originalPrice * DISCOUNT_RATES.SEVENTY_PERCENT;
  } else {
    return originalPrice * DISCOUNT_RATES.FIFTY_PERCENT;
  }
}
