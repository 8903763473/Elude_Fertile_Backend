import mongoose from "../db/db.js";
const customerSchema = new mongoose.Schema(
  {
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    phone_number:{
        type:Number,
        require:true
    },
    special_requests:{
        type:String,
        require:true
    },
    timestamp:{
        type: Date, 
        default: Date.now
    }
  },
  { versionKey: false }
);
customerSchema.virtual("customer_id,").get(function () {
  return this._id.toString();
});
const userModel= mongoose.model("users", customerSchema);

export default userModel;