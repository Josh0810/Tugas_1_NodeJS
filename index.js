const express = require("express");
const app = express();
const port = 8080;

//import datasiswaApi
const datasiswaApi = require("./datasiswa");
 
app.get("/", (req, res) => {
    res.send("Selamat Datang Di Data Center Siswa Indonesia.")
  });

app.use("/DataSiswa", datasiswaApi);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  