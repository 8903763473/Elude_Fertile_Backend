import mongoose from "../db/db.js";
const waitingListSchema = new mongoose.Schema(
  {
    waitlist_id:{
        type:String,
        require:true
    },
    customer_id:{
        type:String,
        require:true
    },
    waitlist_date:{
        type: Date,
        default: Date.now
    },
    //estimated_wait_time:{
    //    type:String,
    //    require:true
    //},
    status:{
        Waiting:{
            type:String,
            require:true
        },
        Seated:{
            type:String,
            require:true
        }
    }
  },
  { versionKey: false }
);
waitingListSchema.virtual("turnover_id").get(function () {
  return this._id.toString();
});
const  waitingListModel= mongoose.model("waitingList", waitingListSchema);

export default waitingListModel;