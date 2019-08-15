var server = require('ws').Server;
var s = new server({ port : 5001});

//connected to the websocket
s.on('connection', function(ws) {
    ws.on('message', function(message) {
        console.log("Received: " +message);
        
        //sending the message over the websocket - Each client connected gets the message
        s.clients.forEach(function(client){
            
            //don't send message to the client that sent       
            if(client !== ws)
            client.send("Received: " + message);
        });
    });
    
    //When a client closes the websocket/disconnects.
    ws.on('close', function(){
      console.log("I lost a client");  
    });
    
    console.log("one more client connected");
});
    



