import mongoose from "../db/db.js";
const locationSchema = new mongoose.Schema({

    location_name: {
    type: String,
    required: true,
  },
  address: {
    street: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    district: {
        type: String,
        required: true,
    },
    zipCode: {
        type: Number,
        required: true,
    },
},
 
}, {
  versionKey: false
});
locationSchema.virtual("location_id").get(function () {
  return this._id.toString();
});
const locationModel = mongoose.model("location", locationSchema);

export default locationModel;