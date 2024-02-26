import User from "../../../models/User";
import bcrypt from "bcryptjs";

export default async function registerUser(req, res) {
  const { username, email, password } = req.body;

  try {
    // Convert email to lowercase to ensure consistency
    const emailLower = email.toLowerCase();

    // Check if user already exists
    const existingUser = await User.findOne({ email: emailLower });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10); // Hashing the password here

    // Create a new user with the lowercase email
    const user = new User({
      username,
      email: emailLower,
      password: hashedPassword,
    });

    // Save the new user
    await user.save();

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
