const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createView = {
  body: Joi.object().keys({
    productId: Joi.string().custom(objectId).required(),
    review: Joi.string().required(),
  }),
};

const getViews = {
  query: Joi.object().keys({
    productId: Joi.string().custom(objectId),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getView = {
  params: Joi.object().keys({
    viewId: Joi.string().custom(objectId),
  }),
};

const updateView = {
  params: Joi.object().keys({
    viewId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      productId: Joi.string().custom(objectId),
      review: Joi.string(),
    })
    .min(1),
};

const deleteView = {
  params: Joi.object().keys({
    viewId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createView,
  getViews,
  getView,
  updateView,
  deleteView,
};
