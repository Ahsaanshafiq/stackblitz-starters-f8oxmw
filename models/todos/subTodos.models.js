import mongoose from "mongoose"

const subtoschema = new mongoose.Schema(
  {
      content:{
        type:String,
        required:true,
      },
      complete:{
        type:Boolean,
        default:false,
      },
      createdBY:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
      }
},{timestamp: true}
)

export const subtodos = mongoose.model("subtodo",subtoschema)