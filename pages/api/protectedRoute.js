// pages/api/protectedRoute.js
import verifyToken from "../../middleware/verifyToken";

export default function handler(req, res) {
  verifyToken(req, res, () => {
    // Your protected route logic here
    res.status(200).json({ message: "Access granted to protected route" });
  });
}
