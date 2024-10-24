const User = require('../Models/User');
const bcrypt = require('bcrypt');

exports.register = async (req, res) => {
  try {
    const { userName, email, password, age, phone } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).send({ msg: "Email already exists!" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({ userName, email, password: hashedPassword, age, phone });
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
    if (!user) {
      return res.status(400).send({ msg: "Email or password invalid!" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).send({ msg: "Email or password invalid!" });
    }

    res.status(200).send({ msg: "Login successful", user });
  } catch (error) {
    res.status(500).send({ msg: "Error on login", error });
  }
};

// Suppression d'un utilisateur
exports.deleteUser = async (req, res) => {
  try {
    const { _id } = req.params;

    await User.deleteOne({ _id });

    res.status(200).send({ msg: "User deleted successfully!" });
  } catch (error) {
    res.status(500).send({ msg: "Error deleting user", error });
  }
};

// Réinitialisation du mot de passe
exports.resetPassword = async (req, res) => {
  try {
    const { _id } = req.params;
    const { newPassword } = req.body;

    if (!newPassword) {
      return res.status(400).send({ msg: "New password is required!" });
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(newPassword, saltRounds);

    await User.updateOne({ _id }, { $set: { password: hashedPassword } });

    res.status(200).send({ msg: "Password updated successfully!" });
  } catch (error) {
    res.status(500).send({ msg: "Error on updating password", error });
  }
};



