const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const viewSchema = new mongoose.Schema({
  review: {
    type: String,
    required: true,
  },
  productId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Product',
    required: true,
  },
});
viewSchema.plugin(toJSON);
viewSchema.plugin(paginate);

const View = mongoose.model('View', viewSchema);

module.exports = View;
