const express = require('express');
const cors = require('cors');
const parseMD = require('parse-md').default;
const uuid = require('uuid');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(express.json());
app.use(cors());
const uploadSingleFile = require('./upload');

app.use(express.static(path.join(__dirname, 'frontend/build')));

app.post('/upload', (req, res) => {
  uploadSingleFile(req, res, (err) => {
    if (err)
      return res.status(500).json({ success: false, error: err.message });

    try {
      const fileContents = fs.readFileSync(
        `/tmp/files/${req.file.filename}`,
        'utf-8'
      );
      const { content } = parseMD(fileContents);
      fs.unlinkSync(`/tmp/files/${req.file.filename}`);

      res.json({ success: true, content });
    } catch (error) {
      res.status(500).json({ success: false, error });
    }
  });
});

app.post('/download', (req, res) => {
  if (typeof req.body.data === 'string') {
    const filePath = `/tmp/files/${uuid.v4()}.md`;

    fs.writeFile(filePath, req.body.data, (err) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ success: false, error: err.message });
      }

      res.download(filePath, (error) => {
        if (error) {
          return res.status(500).json({ success: false, error: error.message });
        }

        fs.unlinkSync(filePath);
      });
    });
  } else {
    res.json({ success: false, error: 'Valid data is required.' });
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/frontend/build/index.html'));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
  fs.mkdirSync('/tmp/files');
});
