import mongoose from "../db/db.js";
const statusSchema = new mongoose.Schema(
  {
   
    statusColor: {
      type: String,
      required: true,
    },
    statusName: {
        type: String,
        required: true,
      },
 
    timestamp: { type: Date, default: Date.now },
  },
  { versionKey: false }
);
statusSchema.virtual("status_id").get(function () {
  return this._id.toString();
});
const statusColorModel = mongoose.model("statusColor", statusSchema);

export default statusColorModel;
