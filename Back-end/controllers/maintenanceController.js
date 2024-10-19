import maintenanceModel from '../models/Maintenance.js';
import userModel from '../models/User.js';

export const createMaintenance = async (req, res) => {
  try {
    const { user_id } = req.body;

    const user = await userModel.findById(user_id);
    if (!user) {
      return res.status(400).json({ message: 'Invalid user ID' });
    }

    const maintenance = new maintenanceModel(req.body);
    await maintenance.save();
    res.status(201).json(maintenance);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getMaintenances = async (req, res) => {
  try {
    const maintenances = await maintenanceModel.find();
    res.status(200).json(maintenances);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getMaintenanceById = async (req, res) => {
  try {
    const maintenance = await maintenanceModel.findById(req.params.id);
    if (!maintenance) {
      return res.status(404).json({ message: 'Maintenance not found' });
    }
    res.status(200).json(maintenance);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateMaintenance = async (req, res) => {
  try {
    const { user_id } = req.body;

    if (user_id) {
      const user = await userModel.findById(user_id);
      if (!user) {
        return res.status(400).json({ message: 'Invalid user ID' });
      }
    }

    const maintenance = await maintenanceModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!maintenance) {
      return res.status(404).json({ message: 'Maintenance not found' });
    }
    res.status(200).json(maintenance);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteMaintenance = async (req, res) => {
  try {
    const maintenance = await maintenanceModel.findByIdAndDelete(req.params.id);
    if (!maintenance) {
      return res.status(404).json({ message: 'Maintenance not found' });
    }
    res.status(200).json({ message: 'Maintenance deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};