require("dotenv").config();
const server = require("./api/server.js");
const port = process.env.PORT || 5011;

server.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
