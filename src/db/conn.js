const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/students-api", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true
})
.then(() => {
    console.log("DB connected successfully");
})
.catch((err) => {
    console.log("DB connection failed");
})