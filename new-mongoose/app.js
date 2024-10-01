const mongoose = require("mongoose");
const validate = require("validator");
mongoose.connect("mongodb://localhost:27017/mongoose-test");

const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        if (!validate.isEmail(v)) {
          throw new Error("Invalid email");
        }
      },
    },
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  age: {
    type: Number,
  },
});

const User = mongoose.model("User", userSchema);

// const newUser = new User({
//   name: "gildong",
//   email: "789@gmail.com",
//   password: "12345    ",
// });

// newUser.save().then((value) => console.log("value:", value));

User.find({ name: "chulsoo" }).select('name email -_id').then((value) => console.log("value:", value));
