import userModel from "./user.schema.js";

export const getUsers = async (req, res) => {
  const users = await userModel.find();
  res.status(200).json(users);
};

export const getUserById = async (req, res, next) => {
  const user = await userModel.findById(req.params.id);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  res.status(200).json(user);
};

export const updateUser = async (req, res, next) => {
  const user = await userModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  res.status(200).json(user);
};

export const deleteUser = async (req, res, next) => {
  const user = await userModel.findByIdAndDelete(req.params.id);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  res.status(200).json({ message: "User deleted successfully" });
};
