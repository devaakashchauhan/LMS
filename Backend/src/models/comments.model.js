import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const commentsschema = new Schema(
  {
    videoid: {
      type: Schema.Types.ObjectId,
      ref: "Video",
    },
    comment: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    userAvatar: {
      type: String,
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

commentsschema.plugin(mongooseAggregatePaginate);

export const Comment = mongoose.model("Comment", commentsschema);
