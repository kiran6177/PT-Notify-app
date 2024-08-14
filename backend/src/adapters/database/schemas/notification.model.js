import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema({
    channel:{
        type:String,
        required:true
    },
    reciever_details:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    channel_type:{
        type:String,
    },
    status:{
        type:String,
        enum:['INITIAL','PENDING','SENT','FAILED','RETRYING','DEAD'],
        required:true
    },
    createdAt:{
        type:Date,
        required:true
    }
});

export default mongoose.model('notification',notificationSchema);