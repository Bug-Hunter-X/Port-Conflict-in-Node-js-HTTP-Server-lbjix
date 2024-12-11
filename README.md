# Node.js Port Conflict Bug

This repository demonstrates a common but sometimes tricky bug in Node.js: port conflicts when starting an HTTP server.  The example uses a simple HTTP server, but the issue applies to any server that binds to a specific port.

## Bug Description

The `server.listen()` method might throw an error or simply fail silently if the specified port is already in use. The error message is not always informative and could lead to debugging challenges.

## Solution

The solution involves checking if the port is available before starting the server.  This is done by adding a check and handling the scenario where the port is unavailable.