import jwt from 'jsonwebtoken';

const verifyToken = (req, res, next) => {
  const token = req.cookies["access_token"];

  if (!token) {
    return res.status(401).json({
      message: "Unauthorized"
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Set userId in the request object
    req.userId = decoded.userId;
    console.log("User ID is ", req.userId);
    req.userName = decoded.username


    // Continue to the next middleware or route handler
    next();
  } catch (error) {
    return res.status(401).json({
      message: "Unauthorized"
    });
  }
};

export default verifyToken;
