const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: '135.23.223.133',
    port: 50542
  })

  // interpret incoming data as text
  conn.setEncoding("utf8");

  

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  
  
  // conn.on('connect', () => {
  //   conn.write('Hello from client!');
  // });
  
  return conn;
};

module.exports = connect;