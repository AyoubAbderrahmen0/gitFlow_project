const User = require('../Models/User');

exports.register = async (req, res) => {
  try {
    const { userName, email, password,age,phone } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).send({ msg: "Email already exists!" });
    }

    const newUser = new User({ userName, email, password,age,phone });
    await newUser.save();

    res.status(200).send({ msg: "User registered successfully!", newUser });
  } catch (error) {
    res.status(500).send({ msg: "Error on register", error });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user || user.password !== password) {
      return res.status(400).send({ msg: "Email or password invalid!" });
    }

    res.status(200).send({ msg: "Login successful", user });
  } catch (error) {
    res.status(500).send({ msg: "Error on login", error });
  }
};
