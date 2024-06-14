// middlewares/multer.js
const multer = require('multer');
const { bucket } = require('../firebase');

const storage = multer.memoryStorage();
const upload = multer({ storage }).single('image');

const uploadImageToFirebase = async (file) => {
  const blob = bucket.file(Date.now() + '-' + file.originalname);
  const blobStream = blob.createWriteStream({
    metadata: {
      contentType: file.mimetype,
    },
  });

  return new Promise((resolve, reject) => {
    blobStream.on('error', (error) => reject(error));
    blobStream.on('finish', async () => {
      await blob.makePublic();
      const publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;
      resolve(publicUrl);
    });
    blobStream.end(file.buffer);
  });
};

module.exports = { upload, uploadImageToFirebase };
