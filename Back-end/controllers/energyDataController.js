import energyDataModel from '../models/EnergyData.js';

export const createEnergyData = async (req, res) => {
  try {
    const energyData = new energyDataModel(req.body);
    await energyData.save();
    res.status(201).json(energyData);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getEnergyData = async (req, res) => {
  try {
    const energyData = await energyDataModel.find();
    res.status(200).json(energyData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getEnergyDataById = async (req, res) => {
  try {
    const energyData = await energyDataModel.findById(req.params.id);
    if (!energyData) {
      return res.status(404).json({ message: 'Energy data not found' });
    }
    res.status(200).json(energyData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateEnergyData = async (req, res) => {
  try {
    const energyData = await energyDataModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!energyData) {
      return res.status(404).json({ message: 'Energy data not found' });
    }
    res.status(200).json(energyData);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteEnergyData = async (req, res) => {
  try {
    const energyData = await energyDataModel.findByIdAndDelete(req.params.id);
    if (!energyData) {
      return res.status(404).json({ message: 'Energy data not found' });
    }
    res.status(200).json({ message: 'Energy data deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};