const GlobalKeyboardListener = require("node-global-key-listener");
const Client = require( 'node-osc');
const client = new Client.Client('127.0.0.1', 1234);
const v = new GlobalKeyboardListener.GlobalKeyboardListener();

//Log every key that's pressed.
v.addListener(function (e, down) {
    if(e.state == "DOWN"){
        if(e.name in [1,2,3,4,5,6,7,8,9,0]){
            send(e.name)
        }
    }
    //console.log(        `${e.name} ${e.state == "DOWN" ? "DOWN" : "UP  "} [${e.rawKey._nameRaw}]`    );
});

function convert(key){
  switch(key){
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
};

function send(number){
    console.log(number)
    client.send('/key', number, () => {
        
      });
}