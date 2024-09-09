import User from "../models/UsersModel";
import "dotenv/config.js";

//***********************************************CREATE A NEW USER************************** */
const createUser = async (req, res) => {
  const { name, email, password, phone, description } = req.body;

  const user = await User.findOne({ email });

  if (user) {
    res
      .status(400)
      .json({ error: "Email already exists, please select another email!" });
  } else {
    try {
      const user = await User.create({
        name,
        email,
        password,
        phone,
        description,
      });
      res.status(200).json({ success: "Create a new user is successful!" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

//***********************************************GET ALL USER************************** */
const getAllUsers = async (req, res) => {
  try {
    const user = await User.find({});
    if (user) {
      return res.status(200).json({ user });
    } else {
      return res.status(400).json({ error: "User not found!" });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export { createUser, getAllUsers };
