const net = require("net");
const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);

const HOST = "10.40.72.109";
const PORT = 6000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

const client = new net.Socket();
client.connect(PORT, HOST, () => {
  client.write("JS\n");
});

client.on("data", data => {
  const msg = data.toString();
  console.log(`Joel message: ${msg}`);
  navigate(data.toString());
  io.emit("message", msg);
});

client.on("close", () => {
  console.log("Closed :(");
});

io.on("connection", socket => {
  console.log("Connected");
  socket.on("message", msg => {
    console.log(`Client message: ${msg}`);
    client.write(`${msg}\n`);
  });
  socket.on("disconnect", () => {
    console.log("Disconnected");
  });
});

http.listen(3000, () => {
  console.log("Listening on http://localhost:3000");
});

let prev = { direction: "N" };

function goNorth(resObj) {
  prev.direction = "N";
  console.log("Going north");
  return client.write("N\n");
}

function goSouth(resObj) {
  prev.direction = "S";
  console.log("Going south");
  return client.write("S\n");
}

function goEast(resObj) {
  prev.direction = "E";
  console.log("Going east");
  return client.write("E\n");
}

function goWest(resObj) {
  prev.direction = "W";
  console.log("Going west");
  return client.write("W\n");
}

function navigate(response) {
  if (response === "Language/team name?\n") return;
  const resArr = response.split(" ");
  const resObj = resArr.reduce((acc, item) => {
    acc[item[0]] = item[1];
    return acc;
  }, {});
  console.log("Response object", resObj);

  let canGoWest = resObj.W > 0;
  let canGoEast = resObj.E > 0;
  let canGoNorth = resObj.N > 0;
  let canGoSouth = resObj.S > 0;

  // if (prev.direction === "N") {
  //   if (canGoNorth) {
  //     goNorth();
  //   }
  //   if (canGoWest) {
  //     goWest();
  //   }
  //   if (canGoEast) {
  //     goEast();
  //   }
  // }
  // if (prev.direction === "S") {
  //   if (canGoSouth) {
  //     goSouth();
  //   }
  //   if (canGoWest) {
  //     goWest();
  //   }
  //   if (canGoEast) {
  //     goEast();
  //   }
  // }
  // if (prev.direction === "E") {
  //   if (canGoEast) {
  //     goEast();
  //   }
  //   if (canGoNorth) {
  //     goNorth();
  //   }
  //   if (canGoSouth) {
  //     goSouth();
  //   }
  // }
  // if (prev.direction === "W") {
  //   if (canGoWest) {
  //     goWest();
  //   }
  //   if (canGoNorth) {
  //     goNorth();
  //   }
  //   if (canGoSouth) {
  //     goSouth();
  //   }
  // }
}
