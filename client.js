const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: '135.23.223.133',
    port: 50542
  })


  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('connect',()=>{
    console.log("Successfully connected to game server")
  });

  conn.on('connect', ()=>{
    conn.write('Name: CYL');
  });

  // conn.on('connect',()=>{
  //   conn.write("Move: up")
  // });

  // conn.on('connect',()=>{
  //   conn.write("Move: left")
  // });

  conn.on('connect',()=>{
    conn.write("Move: right")
  });
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  
  
  
  
  return conn;
};

module.exports = connect;