import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    username: {
      type: String,
      lowercase: true,
      unique: true,
      trim: true,
      required: true,
      index: true,
    },
    fullname: {
      type: String,
      trim: true,
      required: true,
      index: true,
    },
    email: {
      type: String,
      lowercase: true,
      unique: true,
      trim: true,
      required: true,
    },
    phone: {
      type: String,
      lowercase: true,
      unique: true,
      trim: true,
      required: true,
    },
    avatar: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
  },
  { timestamps: true }
);
