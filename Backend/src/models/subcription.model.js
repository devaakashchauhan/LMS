import mongoose, { Schema } from "mongoose";

const subsciptionSchema = new Schema(
  {
    subscriber: {
      type: Schema.Types.ObjectId, //student
      ref: "User",
    },
    channel: {
      type: Schema.Types.ObjectId, //teacher
      ref: "User",
    },
  },
  { timestamps: true }
);

export const Subsciption = mongoose.model("Subcription", subsciptionSchema);
