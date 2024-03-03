import { Schema, model } from "mongoose";

const TwoConvorsationSchema = new Schema({
    id: {
        type: String, unique: true, require: true
    },
    messages: [
        {
            message_id: {type:Number, unique: true, require: true},
            body: {type: String},
            sender_id: {type: String, require: true},
            reciver_id: {type: String, require: true},
            time: {type: Date},
        }   
    ]
});

const TwoConversation = model("TwoConversation", TwoConvorsationSchema);

export default TwoConversation;