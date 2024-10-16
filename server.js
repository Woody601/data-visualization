// Pull in modules needed

const http = require("http")

const port = 6969

/**
 *
 * @param {http.ClientRequest} req
 * @param {http.ServerResponse} res
 */
const app = function (req, res) {
  res.write("Hi")
  res.end()
}

const server = http.createServer(app)

server.listen(port)
console.log(`http://localhost:${port}`)