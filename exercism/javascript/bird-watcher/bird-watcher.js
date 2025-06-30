// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  let totalBirds = 0
  for (let birds of Array.from(birdsPerDay)) {
    totalBirds += birds
  }
  return totalBirds
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {Object.<string, number>} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  let birdsPerDayWeekN = birdsPerDay.values().slice(7 * (week - 1), 7)

  return 1
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {number[]} should not return anything
 */
export function fixBirdCountLog(birdsPerDay) {
  let newBirdsPerDay = [...birdsPerDay]
  const birdCountToAdd = 1
  for (let i = 0; i < birdsPerDay.length; i++) {
    newBirdsPerDay[i] += birdCountToAdd
  }
  return newBirdsPerDay
}
