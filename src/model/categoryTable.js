import mongoose from "../db/db.js";
const mainCategorySchema = new mongoose.Schema(
  {
   
    categoryName: {
      type: String,
      required: true,
    },
    price: {
        type: Number,
        required: true,
      },
 
    timestamp: { type: Date, default: Date.now },
  },
  { versionKey: false }
);
mainCategorySchema.virtual("category_id").get(function () {
  return this._id.toString();
});
const categoryModel = mongoose.model("category", mainCategorySchema);

export default categoryModel;
