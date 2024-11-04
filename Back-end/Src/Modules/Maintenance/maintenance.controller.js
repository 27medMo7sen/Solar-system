import maintenanceModel from "./maintenance.schema.js";

export const createMaintenance = async (req, res) => {
  const maintenance = new maintenanceModel(req.body);
  await maintenance.save();
  res.status(201).json(maintenance);
};

export const getMaintenances = async (req, res) => {
  const maintenances = await maintenanceModel.find();
  res.status(200).json(maintenances);
};

export const getMaintenanceById = async (req, res, next) => {
  const maintenance = await maintenanceModel.findById(req.params.id);
  if (!maintenance) {
    return next(new Error("Maintenance not found", { cause: 404 }));
  }
  res.status(200).json(maintenance);
};

export const updateMaintenance = async (req, res, next) => {
  const maintenance = await maintenanceModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  if (!maintenance) {
    return next(new Error("Maintenance not found", { cause: 404 }));
  }
  res.status(200).json(maintenance);
};

export const deleteMaintenance = async (req, res, next) => {
  const maintenance = await maintenanceModel.findByIdAndDelete(req.params.id);
  if (!maintenance) {
    return next(new Error("Maintenance not found", { cause: 404 }));
  }
  res.status(200).json({ message: "Maintenance deleted successfully" });
};
