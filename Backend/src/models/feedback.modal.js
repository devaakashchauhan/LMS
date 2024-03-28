import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const feedbackschema = new Schema(
  {
    feedback: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    fullname: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    avatar: {
      type: String, //cloudinary url
      required: true,
      trim: true,
      index: true,
    },
  },
  { timestamps: true }
);

feedbackschema.plugin(mongooseAggregatePaginate);

export const Feedback = mongoose.model("Feedback", feedbackschema);
