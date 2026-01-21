# Local Node Server

A lightweight Node.js server to mock APIs and serve frontend applications locally.  
It is useful for testing frontend projects without relying on external APIs or production servers.

## Features

- Serve static files (HTML, JS, CSS) from the `public/` folder
- Mock APIs via simple Express routes in the `api/` folder
- Easy to add new endpoints for any project
- Works out-of-the-box with minimal setup

## Getting Started

### Install dependencies

```bash
npm install
```

### Start the server

```bash
node server.js
```

The server will run at http://localhost:3000

### Example API

Random quote endpoint: `GET /api/quotes/random`

### Using with your frontend

Place your HTML, JS, and CSS in the public/ folder. Frontend code can call mock APIs like:

```js
axios.get("/api/quotes/random").then((response) => {
  console.log(response.data.quote);
});
```

### Alias for quick start

Add this to your `~/.bashrc` or `~/.personal-bashrc-settings.sh`:

```
alias lns="cd ~/<path to the project dir> && node server.js"
```
