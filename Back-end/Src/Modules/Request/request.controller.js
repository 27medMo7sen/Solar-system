import requestModel from "../Request/request.schema.js";

export const createRequest = async (req, res) => {
  const request = new requestModel({ ...req.body });
  await request.save();
  res.status(201).json(request);
};

export const getRequests = async (req, res) => {
  const requests = await requestModel.find();
  res.status(200).json(requests);
};

export const getRequestById = async (req, res) => {
  const request = await requestModel.findById(req.params.id);
  if (!request) {
    return next(new Error("Request not found", { cause: 404 }));
  }
  res.status(200).json(request);
};

export const updateRequest = async (req, res, next) => {
  const request = await requestModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  if (!request) {
    return next(new Error("Request not found", { cause: 404 }));
  }
  res.status(200).json(request);
};

export const deleteRequest = async (req, res, next) => {
  const request = await requestModel.findByIdAndDelete(req.params.id);
  if (!request) {
    return next(new Error("Request not found", { cause: 404 }));
  }
  res.status(200).json({ message: "Request deleted successfully" });
};
