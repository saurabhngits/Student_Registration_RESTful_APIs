const express = require("express");
const app = express();

const port = process.env.PORT || 8000;
const studentRouter = require('./routers/students');

app.use(express.json());
app.use(studentRouter);

app.listen(port, () => {
    console.log(`Server is listing at port ${port}`);
})