const crypto = require("crypto");
const fs = require("fs");

function encryptFile(inputFile, outputFile, algo, callback) {
  const input = fs.readFileSync(inputFile);
  const n = algo.replace(/[^0-9]/g, "");
  const key = crypto.randomBytes(n / 8);
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv(algo, key, iv);
  const encrypted = Buffer.concat([iv, cipher.update(input), cipher.final()]);
  fs.writeFile(outputFile, encrypted, (err) => {
    if (err) {
      callback(err, null);
    } else {
      fs.unlink(`${inputFile}`, (err) => {
        if (err) throw err;
      });
      callback(null, key);
    }
    return key;
  });
}

module.exports = encryptFile;
