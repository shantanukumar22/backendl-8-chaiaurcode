const asynchandler = (requestHandler) => (req, res, next) => {
  Promise.resolve(requestHandler(req, res, next)).catch((err) => {
    next(err);
  });
};

// const asynchandler = (fn) => async (error,res,req,next) => {

//     try { await fn(req,res,next)

//     } catch (error) {
//         res.status(err.status || 500).json({
//             success: false,
//             message: err.message

//         })  }

// }

// export default asynchandler
