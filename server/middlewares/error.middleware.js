const errorMiddleware = (error, req, res, next) => {
    error.statusCode = error.statusCode || 500;
    error.message = error.message || 'Internal Server Error';


  return res.status(error.statusCode).json({
       status: 'error',
       message: error.message,
         stack: error.stack
   });
}   


export default errorMiddleware;