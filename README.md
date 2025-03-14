# Minimal Node.js Example for Clever Cloud

This repository contains a minimal Node.js application that can be deployed on [Clever Cloud](https://www.clever-cloud.com/). It demonstrates how to create the simplest possible Node.js application with no external dependencies that runs on the Clever Cloud platform.

## Project Structure

- `index.js` - Main application file that creates a simple HTTP server
- `package.json` - Node.js project configuration

## Features

- Minimal HTTP server implementation using Node.js built-in modules
- No external dependencies
- Configurable port via environment variable
- Ready for deployment on Clever Cloud

## Requirements

- Node.js 22 or later (as specified in package.json)

## Local Development

To run this application locally:

```bash
node index.js
```

The server will start on port 8080 by default (unless the PORT environment variable is set differently).

You can access the application at: http://localhost:8080

## Deploying to Clever Cloud

### Using the Clever Cloud CLI

1. Install the Clever Cloud CLI:
   ```bash
   npm install -g clever-tools
   ```

2. Login to your Clever Cloud account:
   ```bash
   clever login
   ```

3. Create a new application (or link to an existing one):
   ```bash
   clever create --type node <app-name>
   ```
   
4. Deploy your application:
   ```bash
   clever deploy
   ```

### Using the Clever Cloud Console

You can also deploy directly from the [Clever Cloud Console](https://console.clever-cloud.com/):

1. Create a new application in the console
2. Select Node.js as the runtime
3. Follow the deployment instructions provided in the console

## Environment Variables

- `PORT` - The port on which the server will listen (defaults to 8080)

## License

[MIT](LICENSE)

## About Clever Cloud

[Clever Cloud](https://www.clever-cloud.com/) is a European cloud provider that automates the deployment and running of applications, allowing developers to focus on code rather than infrastructure.
