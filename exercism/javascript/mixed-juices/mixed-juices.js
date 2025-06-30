// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  let juiceTime

  switch (name) {
    case "Pure Strawberry Joy":
      juiceTime = 0.5
      break
    case "Energizer":
    case "Green Garden":
      juiceTime = 1.5
      break
    case "Tropical Island":
      juiceTime = 3.0
      break
    case "All or Nothing":
      juiceTime = 5.0
      break
    default:
      juiceTime = 2.5
      break
  }

  return juiceTime
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  let remainingWedges = wedgesNeeded
  let limesUsed = 0

  for (let i = 0; i < limes.length; i++) {
    let wedgesThisLime

    if (remainingWedges > 0) {
      limesUsed++
      switch (limes[i]) {
        case "small":
          wedgesThisLime = 6
          break
        case "medium":
          wedgesThisLime = 8
          break
        case "large":
          wedgesThisLime = 10
          break
        default:
          throw Error("Invalid lime size.")
      }

      remainingWedges -= wedgesThisLime
    }
  }

  return limesUsed
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  let timeToMix = timeLeft

  for (let i = 0; i < orders.length; i++) {
    if (timeToMix < 0) break
    let timeToMixOrder = timeToMixJuice(orders[i])
    timeToMix -= timeToMixOrder

    orders.shift()
  }

  return orders
}
