[![Total Downloads](https://img.shields.io/npm/dt/pygcli.svg)](https://www.npmjs.com/package/pygcli)

# pygcli

pygcli is a versatile command-line toolkit designed to streamline and unify workflows that span traditional Linux shell operations, Google Cloud Platform (GCP) services, and Python scripting. By packaging these capabilities into a single NPM module, pygcli enables developers, DevOps engineers, and cloud administrators to bridge gaps between local system administration, cloud automation, and dynamic scripting. It abstracts complex command sequences into intuitive CLI commands, significantly reducing manual effort and scripting overhead. With support for common Linux utilities, seamless integration with GCP SDK commands, and the ability to execute Python-based automation tasks, pygcli empowers users to orchestrate cross-platform operations from a single interface. This makes it ideal for managing infrastructure, deploying services, or running hybrid workflows across on-premise and cloud environments with speed and consistency.

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
