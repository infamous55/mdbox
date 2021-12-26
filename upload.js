const multer = require('multer');
const path = require('path');

const directory = './files/';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, directory);
  },
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (path.extname(file.originalname) === '.md') {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error('Only .md format allowed!'));
    }
  },
  limits: { fileSize: 1048576 }, // 10 Mb
});

const uploadSingleFile = upload.single('file');

module.exports = uploadSingleFile;
