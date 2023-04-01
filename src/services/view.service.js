const httpStatus = require('http-status');
const { View } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a user
 * @param {Object} userBody
 * @returns {Promise<Product>}
 */
const createView = async (viewBody) => {
  return View.create(viewBody);
};

/**
 * Query for users
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryView = async (filter, options) => {
  const view = await View.paginate(filter, options);
  return view;
};

/**
 * Get user by id
 * @param {ObjectId} id
 * @returns {Promise<Product>}
 */
const getViewById = async (id) => {
  return View.findById(id);
};

/**
 * Get user by email
 * @param {string} email
 * @returns {Promise<User>}
 */
const getViewByName = async (name) => {
  return View.findOne({ name });
};

/**
 * Update user by id
 * @param {ObjectId} userId
 * @param {Object} updateBody
 * @returns {Promise<Product>}
 */
const updateViewById = async (viewId, updateBody) => {
  const view = await getViewById(viewId);
  if (!view) {
    throw new ApiError(httpStatus.NOT_FOUND, 'View not found');
  }
  Object.assign(view, updateBody);
  await view.save();
  return view;
};

/**
 * Delete user by id
 * @param {ObjectId} userId
 * @returns {Promise<Product>}
 */
const deleteViewById = async (viewId) => {
  const view = await getViewById(viewId);
  if (!view) {
    throw new ApiError(httpStatus.NOT_FOUND, 'view not found');
  }
  await view.remove();
  return view;
};

module.exports = {
  createView,
  queryView,
  getViewById,
  getViewByName,
  updateViewById,
  deleteViewById,
};
