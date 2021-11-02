const ioHook = require('iohook');
const Client = require( 'node-osc');
const client = new Client.Client('127.0.0.1', 1234);

ioHook.on("keypress", event => {
  //console.log(event);
  switch(event.keychar){
  case 49:
      send(1)
  break
  case 50:
    send(2)
  break
  case 51:
    send(3)
  break
  case 52:
    send(4)
  break
  case 53:
    send(5)
  break
  case 54:
    send(6)
  break
  case 55:
    send(7)
  break
  case 56:
    send(8)
  break
  case 57:
    send(9)
  break
  case 48:
    send(0)
  break

  }
});
ioHook.start();
function send(number){
    console.log(number)
    client.send('/key', number, () => {
        
      });
}