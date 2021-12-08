const express = require("express");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");
const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use(express.static("public"));

// http://localhost:3001/api/notes
// app.use("/api", apiRoutes);
app.use(apiRoutes);
app.use("/", htmlRoutes);

app.listen(PORT, () => {
    console.log(`server listening on port: http://localhost:${PORT}`);
})
