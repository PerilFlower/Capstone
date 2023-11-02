import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String
  },
  msg: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  }
});

const Contact = mongoose.model("Contact", contactSchema);

export default Contact;
