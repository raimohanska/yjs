const verbose = process.argv.includes('--verbose')

/**
 * @param {*} s
 */
export const debug = (...s) => {
  if (!verbose) return
  return console.log(s)
}
