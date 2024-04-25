import User from "../models/user.js";
import bcrypt from "bcrypt";

export const signupPersistence = async (user) => {
  try {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    const newUser = new User({
      username: user.username,
      email: user.email,
      password: hashedPassword,
    });

    const createdUser = await newUser.save();
    return createdUser;
  } catch (error) {
    throw new Error("Failed to Signup: " + error.message);
  }
};

export const loginPersistence = async (email, password) => {
  try {
    const user = await findUserByEmail(email);
    if (!user) return null;

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) return null;

    return user;
  } catch (error) {
    throw new Error("Failed to Login: " + error.message);
  }
};

export const findUserByEmail = async (email) => {
  return await User.findOne({ email: email });
};
