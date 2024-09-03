// import jwt from "jsonwebtoken";

// export  const ensureAuthenticated = (req, res, next) => {
//   const auth = req.headers["authorization"];
//   if (!auth) {
//     return res
//       .status(403)
//       .json({ message: "Unauthorized, JWT token is require" });
//   }
//   try {
//     const decoded = jwt.verify(auth, process.env.JWT_SECRET);
//     req.user = decoded;
//     next();
//   } catch (err) {
//     return res
//       .status(403)
//       .json({ message: "Unauthorized, JWT token wrong or expired" });
//   }
// };

// module.exports = ensureAuthenticated;
import jwt from "jsonwebtoken";

export const ensureAuthenticated = (req, res, next) => {
  const auth = req.headers["authorization"];
  //   console.log(auth, "jii");
  if (!auth) {
    return res
      .status(403)
      .json({ message: "Unauthorized, JWT token is required" });
  }
  try {
    const decoded = jwt.verify(auth, process.env.ACCESS_TOKEN_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res
      .status(403)
      .json({ message: "Unauthorized, JWT token wrong or expired" });
  }
};