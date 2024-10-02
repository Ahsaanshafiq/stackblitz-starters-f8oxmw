import mongoose from "mongoose"

const todosSchema = new mongoose.Schema(
  {
content:{
  type:String,
  required:true,
},
complete:{
  type:Boolean,
  default:false
},
createdBy:{
  type:mongoose.Schema.Types.ObjectId,
  ref:"user"
},
subtotdos:[{
  type:mongoose.Schema.Types.ObjectId,
  ref:"subtodo",
}]
},{timestamp:true})

export const todos = mongoose.model("todo", todosSchema)