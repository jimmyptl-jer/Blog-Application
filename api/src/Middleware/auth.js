import jwt from 'jsonwebtoken';

const verifyToken = (req, res, next) => {
  const token = req.cookies["access_token"];

  if (!token) {
    return res.status(401).json({
      message: "Unauthorized"
    });
  }
  try {
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        return next(errorHandler(401, 'Unauthorized'));
      }
      req.user = user;
      next();
    });
  } catch (error) {
    return res.status(401).json({
      message: "Unauthorized"
    });
  }
};

export default verifyToken;
