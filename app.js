const express = require("express");

const cors = require("cors");

require("./utils/db_connection");

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

const caseRouter = require("./routes/case");
const policeRouter = require("./routes/police_register");

app.use("/api", caseRouter);
app.use("/api", policeRouter);

app.listen(port, () => {
    console.log("App is running on ", port);
});
