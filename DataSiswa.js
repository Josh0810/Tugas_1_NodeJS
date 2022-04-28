//import express router from express
const express = require("express");
const datasiswaApi = express.Router();

//Create datasiswa api json
datasiswaApi.get("/", (req, res) => {
  res.json({
    Nama: "Richard Muhammad",
    TanggalLahir: "14 Januari 1994",
    JenisKelamin: "Laki-Laki",
    Hobi: "Membaca Buku",
  });
});

//Export modul
module.exports = datasiswaApi;
