This project allow you to see snapshots from ip camera(s) on simple website, without any connection and network settings, thanks to Node.js and [socket.io library](https://socket.io/).

# How to use

1. Install socket [server module](https://github.com/miwaniec/socket-camera-server) on server with public access (default port is 3000).
2. Install **camera module** - this repository.
3. Get snapshots with [website example](https://github.com/miwaniec/socket-camera-client).

# socket-camera
This repository is a camera module, should be installed on computer with local connection to ip camera.

## Installation
```bash
git clone https://github.com/miwaniec/socket-camera.git
cd socket-camera
npm install
```

## Configuration
See [camera.json](https://github.com/miwaniec/socket-camera/blob/617ee7a2e42aac54fd934c7a44e214fc8bfc1dbc/camera.json#L2-L10).
- *server_url* is address of your [server module](https://github.com/miwaniec/socket-camera-server).
- *cams* - all cameras connected to your computer and available for server module. Snapshot of ip camera is available with simple http connection (for most manufacturers) - check ip for your device and credentials.

## Running
```bash
npm start
```
