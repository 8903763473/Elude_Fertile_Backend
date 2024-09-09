import mongoose from "../db/db.js";
const tableAssignmentsSchema = new mongoose.Schema(
  {
    order_ide:{
        type:String,
        require:true
    },
    table_id:{
        type:String,
        require:true
    },
    assignment_date:{
        type: Date,
        default: Date.now 
    },
    //assignment_time:{
      //  type:String,
        //require:true
    //}
    
  },
  { versionKey: false }
);
tableAssignmentsSchema.virtual("assignment_id").get(function () {
  return this._id.toString();
});
const  tableAssignmentModel= mongoose.model("tableAssignments", tableAssignmentsSchema);

export default tableAssignmentModel;