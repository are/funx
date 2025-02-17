/**
 * This operator sets the input data for the effect to an arbitrary
 * value.
 *
 * @param {any} input A value that will become the new input data
 * @return {Operator} An instance of this operator
 */
export function source(input) {
    return {
        invariant(_, ctx) {
            if (input === undefined || input === null) {
                throw new Error('input cannot be undefined or null')
            }
        },

        async preprocess(data, ctx) {
            return input
        }
    }
}

export default source
