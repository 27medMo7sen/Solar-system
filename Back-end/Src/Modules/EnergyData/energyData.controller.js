import energyDataModel from "./energyData.schema.js";

export const createEnergyData = async (req, res) => {
  const energyData = new energyDataModel(req.body);
  await energyData.save();
  res.status(201).json(energyData);
};

export const getEnergyData = async (req, res) => {
  const energyData = await energyDataModel.find();
  res.status(200).json(energyData);
};

export const getEnergyDataById = async (req, res) => {
  const energyData = await energyDataModel.findById(req.params.id);
  if (!energyData) {
    return res.status(404).json({ message: "Energy data not found" });
  }
  res.status(200).json(energyData);
};

export const updateEnergyData = async (req, res, next) => {
  const energyData = await energyDataModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  if (!energyData) {
    return next(new Error("Energy data not found", { cause: 404 }));
  }
  res.status(200).json(energyData);
};

export const deleteEnergyData = async (req, res, next) => {
  const energyData = await energyDataModel.findByIdAndDelete(req.params.id);
  if (!energyData) {
    return next(new Error("Energy data not found", { cause: 404 }));
  }
  res.status(200).json({ message: "Energy data deleted successfully" });
};
