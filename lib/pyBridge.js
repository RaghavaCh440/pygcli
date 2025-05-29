const { spawn } = require('child_process');

function runPythonScript(scriptPath, args = []) {
  const py = spawn('python3', [scriptPath, ...args], { stdio: 'inherit' });
  py.on('close', (code) => {
    if (code !== 0) {
      console.error(`Python script exited with code ${code}`);
    }
  });
}

module.exports = { runPythonScript };
