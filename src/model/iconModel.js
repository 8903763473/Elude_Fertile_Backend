import mongoose from "mongoose";
const iconSchma=new mongoose.Schema(
    {
iconName:{
    type:String,
    require:true
},
iconImage:{
    type:String,
    require:true
},
},
{
    versionKey:false
}
);
iconSchma.virtual("icon_id").get(function () {
    return this._id.toString();
  });
const iconModel=mongoose.model("icon",iconSchma);


export default iconModel;