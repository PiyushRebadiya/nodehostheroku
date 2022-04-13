const jwt = require("jsonwebtoken");

const config = process.env;

const verifyToken = (req, res, next) => {
    console.log("++++++++++req",req.cookies.jwToken);
    console.log("++++++++++ressss",res.cookies);
    const token = req.headers["x-access-token"] || req.cookies.jwToken || req.body.token || req.query.token ;

  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    const decoded = jwt.verify(token, config.SECRET_KEY);
    req.user = decoded;
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};

module.exports = verifyToken;