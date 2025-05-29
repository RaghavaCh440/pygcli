# pygcli

pygcli is a command-line toolkit that unifies Linux shell commands, Google Cloud operations, and Python workflows in one NPM package.

##  Features
- Run Linux shell commands from Node.js
- Upload files to Google Cloud Storage
- Trigger Python scripts with arguments

##  Installation
```bash
npm install -g pygcli
```

## Usage
```bash
pygcli shell "ls -la"
pygcli upload ./file.txt your-bucket-name
pygcli python script.py arg1 arg2
```

## Example
```bash
node examples/syncAndProcess.js
```

---

##  Requirements
- Node.js >= 16
- Python 3.x installed
- GCP SDK configured (via GOOGLE_APPLICATION_CREDENTIALS env var)

## License
MIT

## Author:
Raghava Chellu
