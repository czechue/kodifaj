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
exports.SolutionSchema = new mongoose.Schema({
    repo: String,
    demo: String,
    comment: String,
    phase: String,
    createdAt: { type: Date, default: Date.now },
    _task: { type: mongoose.Schema.Types.ObjectId, ref: "Task" },
    _user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
});
//# sourceMappingURL=solutions.schema.js.map