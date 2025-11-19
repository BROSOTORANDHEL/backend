import * as UserModels from "../models/UserModels.js";

export const register = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModels.createUser(email, password);
    res.status(201).json({ success: true, message: user });
  } catch (err) {
    console.log(err);
    res.status(400).json({ success: false, message: err.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const token = await UserModels.login(email, password);

    res.status(200).json({
      success: true,
      message: "Login Successful",
      token
    });

  } catch (err) {
    console.log(err);
    res.status(400).json({ success: false, message: err.message });
  }
};