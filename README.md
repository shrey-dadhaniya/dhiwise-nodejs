# Node.js Code Generator

A monorepo project for generating Node.js code with a React frontend and Express backend.

## Prerequisites

- **Node.js**: Version 18 or above (tested with v23.0.0)
- **npm**: Version 9 or above

To check your Node.js version:

```bash
node --version
```

If you need to install or switch Node.js versions, consider using [nvm](https://github.com/nvm-sh/nvm) (Node Version Manager).

## Project Structure

This is a monorepo managed by Lerna with the following packages:

- `packages/client` - React frontend application
- `packages/server` - Express backend API server

## Setup Instructions

### 1. Clone the Repository

```bash
git clone <repository-url>
cd node-api-crud
```

### 2. Install Root Dependencies

Install the root dependencies (including Lerna) using:

```bash
npm install --legacy-peer-deps
```

**Note**: The `--legacy-peer-deps` flag is required to resolve peer dependency conflicts.

### 3. Install Package Dependencies

The root `install` script will automatically clean and bootstrap all packages:

```bash
npm run install
```

Alternatively, you can manually install dependencies for each package:

```bash
# Install client dependencies
cd packages/client
npm i --force
cd ../..

# Install server dependencies
cd packages/server
npm i --force
cd ../..
```

**Note**: The `--force` flag is required for the client and server packages due to peer dependency conflicts.

### 4. Post-Installation Notes

- A patch-package warning for `monaco-jsx-highlighter` may appear but does not prevent the application from running.
- The project uses MongoDB Memory Server, which will automatically start when the server runs.

## Running the Project

### Start Both Servers

From the root directory, run:

```bash
npm start
```

This command will start both the client and server using Lerna:

- **Client (React App)**: http://localhost:3000
- **Server (API)**: http://localhost:5053

### Start Individual Packages

You can also start packages individually:

**Client only:**

```bash
cd packages/client
npm start
```

**Server only:**

```bash
cd packages/server
npm start
```

## Available Scripts

### Root Level

- `npm start` - Start both client and server
- `npm run install` - Clean and bootstrap all packages
- `npm test` - Run tests
- `npm run lint` - Lint code

### Client Package

- `npm start` - Start React development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run watch:css` - Watch and compile Tailwind CSS

### Server Package

- `npm start` - Start Express server with debugging enabled

## Troubleshooting

### Port Already in Use

If ports 3000 or 5053 are already in use, you can:

1. Stop the existing process using those ports
2. Or modify the port in the respective configuration files

### Dependency Installation Issues

If you encounter dependency issues:

1. Clear node_modules and package-lock files:

   ```bash
   rm -rf node_modules packages/*/node_modules
   rm -rf package-lock.json packages/*/package-lock.json
   ```

2. Reinstall dependencies following the setup instructions above

### Webpack/Module Errors

The project includes webpack configuration fixes for:

- Monaco Editor module parsing
- Process polyfill for browser compatibility
- React JSX runtime resolution

If you encounter module errors, ensure all dependencies are properly installed.

## Technology Stack

- **Frontend**: React 17, Redux, Recoil, Tailwind CSS, Monaco Editor
- **Backend**: Express.js, MongoDB (Memory Server), Mongoose
- **Build Tools**: Webpack, Babel, PostCSS
- **Monorepo**: Lerna

## License

ISC

## Author

DhiWise - https://www.dhiwise.com
