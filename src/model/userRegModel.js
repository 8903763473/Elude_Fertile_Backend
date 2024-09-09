import mongoose from "../db/db.js";
const registerSchema = new mongoose.Schema({

  admin_id: {
    type: String,
    required: true,
  },
  
  userName: {
    type: String,

    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  applogo_id: {
    type: String,
    required: true,
  },


  timestamp: {
    type: Date,
    default: Date.now
  },
}, {
  versionKey: false
});
registerSchema.virtual("downloadApp_id").get(function () {
  return this._id.toString();
});
const downloadedAppModel = mongoose.model("downloadedApp", registerSchema);

export default downloadedAppModel;