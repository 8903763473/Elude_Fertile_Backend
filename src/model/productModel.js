import mongoose from "../db/db.js";
const productSchema = new mongoose.Schema({
    ProductImage: {
        type: String,
        require: true
    },
    ProductName: {
        type: String,
        require: true
    },
    ProductCatagory: {
        type: String,
        require: true
    },
    Price: {
        type: Number,
        require: true
    },
    stock_quantity: {
        type: Number,
        require: true
    },
    supplier_id:{
        type: String,
        require: true
    },
}, {
    versionKey: false
});
productSchema.virtual("Product_id").get(function () {
    return this._id.toString();
});
const ProductModel = mongoose.model("Product", productSchema);
export default ProductModel;