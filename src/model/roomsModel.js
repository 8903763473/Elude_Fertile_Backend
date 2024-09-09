import mongoose from "../db/db.js";

const tableSchema = new mongoose.Schema({
    Tablename: {
        type: String,
        required: true
    }
}, { _id: false });

// Schema for Room Category
const roomCategorySchema = new mongoose.Schema({
    category: {
        type: String,
        required: true,
        enum: ['AC', 'Non-AC', 'Garden']  // Room categories
    },
    tables: [tableSchema]  // List of tables for the room category
}, { _id: false });

// Main Schema
const tablesroomsSchema = new mongoose.Schema({
    Admin_id: {
        type: String,
        required: true
    },
    org_id: {
        type: String,
        required: true
    },
    rooms: [roomCategorySchema]  // List of room categories
}, { versionKey: false });

tablesroomsSchema.virtual("tablerooms_id").get(function () {
    return this._id.toString();
});

const RoomTableModel = mongoose.model("RoomTable", tablesroomsSchema);
export default RoomTableModel;
