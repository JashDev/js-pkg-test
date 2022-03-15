/**
 *
 * @param  {...any} args
 * @returns
 */
export const sum = (...args) => {
  return args.reduce((acc, val) => acc + val, 0)
}
