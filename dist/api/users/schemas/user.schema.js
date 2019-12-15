"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = __importStar(require("mongoose"));
exports.UserSchema = new mongoose.Schema({
    googleId: String,
    githubId: String,
    login: String,
    photo: String,
    _solutions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Solution' }],
    _tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Task' }],
});
//# sourceMappingURL=user.schema.js.map