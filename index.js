const express = require("express");
const axios = require("axios");
const app = express();
const { Queue } = require("queue-you-js");
const port = 5000;
const queue = new Queue();
queue.enqueue("test");
app.get("/", (req, res) => {
  const url =
    "https://www.myaccountaccess.com/onlineCard/public/publicAppInfo.action?host=www.myaccountaccess.com";
  axios
    .get(url)
    .then((r) => res.json({ r: r.data, queue: queue.getItems() }))
    .catch((err) => res.json({ err }));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
