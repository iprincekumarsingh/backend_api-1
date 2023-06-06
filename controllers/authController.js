const User = require("../models/User");

exports.register = async = (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }

  try {
    // regex to check if email is valid
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ msg: "Please enter a valid email" });
    }

    User.findOne({ email }).then((user) => {
      if (user) return res.status(400).json({ msg: "User already exists" });
    });

    const newUser = new User({
      name,
      email,
      password,
    });
    newUser.save().then((user) => {
      const token = user.generateToken();
      user.password = undefined;
      return res.json({
        status: "success",
        user,
        token,
        message: "User created successfully",
      });
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Server error" });
  }
};

exports.login = async = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ msg: "Please enter a valid email" });
  }

  try {
    User.findOne({ email }).then(async (user) => {
      if (!user) return res.status(400).json({ msg: "User does not exist" });

      if (!(await user.comparePassword(password)))
        return res.status(400).json({
          success: false,
          message: "Incorrect password",
        });

      const token = await user.generateToken();
      user.password = undefined;
      return res.json({
        status: "success",
        user,
        token,
        message: "User logged in successfully",
      });
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Server error" });
  }
};
