const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { viewService } = require('../services');

const createView = catchAsync(async (req, res) => {
  const view = await viewService.createView(req.body);
  res.status(httpStatus.CREATED).send(view);
});

const getViews = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['productId']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await viewService.queryView(filter, options);
  res.send(result);
});

const getView = catchAsync(async (req, res) => {
  const view = await viewService.getViewById(req.params.viewId);
  if (!view) {
    throw new ApiError(httpStatus.NOT_FOUND, 'view not found');
  }
  res.send(view);
});

const updateView = catchAsync(async (req, res) => {
  const view = await viewService.updateViewById(req.params.viewId, req.body);
  res.send(view);
});

const deleteView = catchAsync(async (req, res) => {
  await viewService.deleteViewById(req.params.viewId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createView,
  getViews,
  getView,
  updateView,
  deleteView,
};
