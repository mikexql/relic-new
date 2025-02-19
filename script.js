const { StarRail } = require("starrail.js");
const client = new StarRail();

client.fetchUser(801264735).then(user => {
  console.log(user);
});