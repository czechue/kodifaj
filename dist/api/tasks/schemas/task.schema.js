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
exports.TaskSchema = new mongoose.Schema({
    content: String,
    createdAt: { type: Date, default: Date.now },
    images: [String],
    tips: [String],
    tags: [String],
    title: String,
    _user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    _solutions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Solution' }],
});
//# sourceMappingURL=task.schema.js.map