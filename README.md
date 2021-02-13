# http-json-store
> Simple HTTP server that returns JSON data which was previously posted

## How to use
### Server
#### Node.js
```sh
git clone https://github.com/moritzruth/http-json-store.git
cd http-json-store
HJS_TOKEN=YOUR_TOKEN_HERE npm start # or yarn start
```

#### Docker
```sh
docker build -t hjs https://github.com/moritzruth/http-json-store.git
docker run -d -p 3000:3000 -e HJS_TOKEN=YOUR_TOKEN_HERE hjs
```

### Client
Example using fetch:
```js
// Get data
await fetch("http://localhost:3000").then(response => response.json())

// Set data
await fetch("http://localhost:3000", {
  method: "post",
  body: JSON.stringify({ yourData: "this can be anything" }),
  headers: { 'Content-Type': 'application/json', "Authorization": "Bearer YOUR_TOKEN_HERE" }
})
```
