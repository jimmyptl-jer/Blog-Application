export const logout = (req, res, next) => {
  try {
    res.cookie('access_token', '', {
      expires: new Date(0)
    })

    res.send()
  } catch (error) {
    next(error); // Pass the error to the error handling middleware
  }
};
