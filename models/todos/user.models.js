import mongoose from "mongoose"

const UserSchema = new mongoose.Schema(
  {
    username:{
      type:String,
      required:true,
      lowercase:true,
    },
    email:{
            typeof:String,
            required:true,
            lowercase:true,
    },
    password:{
      type:String,
      required:[true,"enter password"],
    }


  },{timesstamp: true}
)
export const user = mongoose.model("user", UserSchema)