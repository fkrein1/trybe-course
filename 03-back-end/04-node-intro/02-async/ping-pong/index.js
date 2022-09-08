const axios = require('axios');

async function main() {
  const firstRequest = await axios({
    url: 'http://ping-pong-masters.herokuapp.com/ping',
  });
  let pong = firstRequest.data.pong;

  for (let index = 0; index < 200; index++) {
    const request = await axios({
      url: 'http://ping-pong-masters.herokuapp.com/ping',
      data: {
        ping: pong,
      },
    });
    pong = request.data.pong;
    console.log(request.data);
    if (request.data.message) return;
  }
}

main();
