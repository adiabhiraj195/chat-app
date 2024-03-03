import { model, Schema } from "mongoose";

const UserSchema = new Schema({
    id: {
        type: String, unique: true, require: true
    },
    username: {
        type: String,
    },
    name: {
        type: String, require: true,
    },
    email: {
        type: String, require: true, unique: true
    },
    salt: {
        type: String
    },
    password: {
        type: String, require: true,
    },
    logs: {
        last_login: { type: Date },
        last_password_reset: { type: Date }
    },
    state: {
        online: { type: Boolean, default: false },
        available: { type: Boolean, default: false }
    },
    friends: [
        {
            id: { type: String },
            conversation_id: {type: String, default: null, }
        }
    ]
});

const User = model("User", UserSchema);

export default User;