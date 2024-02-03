export const asyncHandler = (requestHandler) => {
    (req, resp, next) => {
        Promise.resolve(requestHandler(req, resp, next))
        .catch((err) => next(err))
    }
}





// The above fn using try-catch.........................................................
// export const asyncHandler = (fn) => {
//     return async (req, resp, next) => {
//         try {
//             await fn(req, resp, next)
//         } catch(error) {
//             req.status(error.code || 500).json({
//                 success: false,
//                 message: error.message
//             })
//         }
//     }
// }