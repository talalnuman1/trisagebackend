const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createProducts = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    price: Joi.string().required(),
    description: Joi.string().required(),
    category: Joi.string().required(),
    brand: Joi.string().required(),
    image: Joi.string().required(),
  }),
};

const getProducts = {
  query: Joi.object().keys({
    name: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getProduct = {
  params: Joi.object().keys({
    productId: Joi.string().custom(objectId),
  }),
};

const updateProduct = {
  params: Joi.object().keys({
    productId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      name: Joi.string(),
      price: Joi.string(),
      description: Joi.string(),
      category: Joi.string(),
      brand: Joi.string(),
      image: Joi.string(),
    })
    .min(1),
};

const deleteProduct = {
  params: Joi.object().keys({
    productId: Joi.string().custom(objectId),
  }),
};
function deleteAllProducts(products) {
  if (!products || !Array.isArray(products)) {
    throw new Error('Invalid input: products must be an array.');
  }

  if (products.length === 0) {
    throw new Error('Invalid input: products array is empty.');
  }
  return true;
}

module.exports = {
  createProducts,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
  deleteAllProducts,
};
