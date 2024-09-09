import mongoose from "../db/db.js";
const inventorySchema = new mongoose.Schema({

  product_id: {
    type: String,
    required: true,
  },
  location_id: {
    type: String,
    required: true,
  },
  quantity: {
    type: String,
    required: true,
  },
  reorder_point: {
    type: String,
    required: true,
  },
  stock_status: {
    type: String,
    enum:["In Stock","Low Stock"],
    required: true,
  },

  timestamp: {
    type: Date,
    default: Date.now
  },
}, {
  versionKey: false
});
inventorySchema.virtual("inventory_id").get(function () {
  return this._id.toString();
});
const inventoryModel = mongoose.model("inventory", inventorySchema);

export default inventoryModel;