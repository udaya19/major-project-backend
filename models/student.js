const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    public_id: String,
    url: String,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  role: {
    type: String,
    enum: ["user", "cgdc"],
    default: "user",
  },
  hostelName: {
    type: String,
    enum: ["Apt-A", "Apt-B", "Apt-C", "Apt-D", "newtower", "oldtower"],
  },
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CGDCPosts",
    },
  ],
  gatePassRequests: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Request",
    },
  ],
});

const Student = mongoose.model("User", studentSchema);
module.exports = Student;
