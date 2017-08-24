const net = require("net");
const app = require("express")();
const http = require("http").Server(app);

const navigate = require("./navigate");

const HOST = "10.40.72.87";
const PORT = 6000;

const client = new net.Socket();
client.connect(PORT, HOST);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

client.on("data", data => {
  const msg = data.toString();
  console.log(`Joel message: ${msg}`);
  // console.log(navigate(msg) + "\n");
  const resObj = msg.split(" ").reduce((acc, item) => {
    acc[item[0]] = item[1];
    return acc;
  }, {});
  setTimeout(() => {
    console.log("Going: ", navigate(msg));
    client.write(navigate(resObj) + "\n");
  }, 1000);
});

client.on("close", () => {
  console.log("Closed :(");
});

http.listen(3000, () => {
  console.log("Listening on http://localhost:3000");
});
