import mongoose from "../db/db.js";
const reservationSchema = new mongoose.Schema(
  {
    customer_id:{
        type:String,
        require:true
    },
    table_id:{
        type:String,
        require:true
    },
    reservation_date:{
        type: Date, 
        default: Date.now
    },
    reservation_time:{
        type:String,
        require:true
    },
    
  },
  { versionKey: false }
);
reservationSchema.virtual("reservation_id").get(function () {
  return this._id.toString();
});
const reservationModel = mongoose.model("reservations", reservationSchema);

export default reservationModel;