import jwt from 'jsonwebtoken';

const isLoggedIn = async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
  return next(new AppError('Please login to access this resource', 401));
  }

  const userDetails = await jwt.verify(token, process.env.JWT_SECRET);

  req.user = userDetails;

    next();
};

export default isLoggedIn;