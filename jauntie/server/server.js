const express = require("express");
const app = express();
const port = 5000;

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// Import routes for each table
const toursRoutes = require("./routes/toursRoutes");
const imagesRoutes = require("./routes/imagesRoutes");
const subsRoutes = require("./routes/subsRoutes");
const ticketsRoutes = require("./routes/ticketsRoutes");
const usersRoutes = require("./routes/usersRoutes");

// Register routes
app.use("/", toursRoutes);
app.use("/", imagesRoutes);
app.use("/", subsRoutes);
app.use("/", ticketsRoutes);
app.use("/", usersRoutes);

app.get("/", (req, res) => {
  res.json({ message: "ok" });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
