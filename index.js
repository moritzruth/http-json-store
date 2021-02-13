const express = require("express")
const bodyParser = require("body-parser")

const app = express()
const token = process.env.HJS_TOKEN

let data = {}

app.use(bodyParser.json())

app.get("/", (req, res) => {
  res.json(data)
})

app.post("/", (req, res) => {
  if (token === undefined || req.headers.authorization === `Bearer ` + token) {
    data = req.body
    console.log("Data changed: ", data)
    res.status(204)
  } else res.status(403)

  res.send()
})

const port = process.env.PORT ?? 3000
const host = process.env.HOST ?? "127.0.0.1"

app.listen(port, host, () => {
  console.info(`Listening on ${host}:${port}`)
})
