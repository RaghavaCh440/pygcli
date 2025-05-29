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

## MIT License

Copyright (c) 2025 Raghava Chellu

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Author:
Raghava Chellu
