const express = require("express");

require("./utils/db_connection");

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const caseRouter = require("./routes/case");
const policeRouter = require("./routes/police_register");

app.use("/api", caseRouter);
app.use("/api", policeRouter);

app.listen(port, () => {
    console.log("App is running on ", port);
});
