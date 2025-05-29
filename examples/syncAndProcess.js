const { runShellCommand } = require('../lib/linuxUtils');
const { uploadToGCS } = require('../lib/gcpUtils');
const { runPythonScript } = require('../lib/pyBridge');

(async () => {
  await runShellCommand('ls -la');
  await uploadToGCS('example.txt', 'your-gcs-bucket');
  runPythonScript('process.py', ['example.txt']);
})();
