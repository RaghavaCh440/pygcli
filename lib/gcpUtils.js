const { Storage } = require('@google-cloud/storage');

const storage = new Storage();

async function uploadToGCS(filePath, bucketName) {
  try {
    await storage.bucket(bucketName).upload(filePath);
    console.log(`File uploaded to gs://${bucketName}/${filePath}`);
  } catch (err) {
    console.error('GCP Upload Error:', err.message);
  }
}

module.exports = { uploadToGCS };
