const express = require("express");
const multer = require("multer");
const path = require("path"); // To work with file paths
const cors = require("cors")

// Set up Multer for file upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images');
  },
  filename: function (req, file, cb) {
    const fileName = new Date().getTime() + '_' + file.originalname;
    cb(null, fileName);
  }
});

const upload = multer({ storage: storage });

const app = express();
app.use(cors())
app.post('/upload', upload.single('image'), (req, res) => {
  console.log(req.file);
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }
  res.status(200).send('File uploaded successfully.');
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`SERVER LISTENING ON PORT : ${PORT}...`);
});