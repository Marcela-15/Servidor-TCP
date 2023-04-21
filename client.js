const net =  require('net');



const client =  new net.Socket();

client.connect(3000,'127.0.0.1', ()=>{
    console.log('/// conexion TCP existosa ///');
});


client.on('close',()=>{
    console.log('conection terminated');
});

client.on('data', (data)=>{
    console.log(data);
});

client.on('data', (data)=>{
    console.log(`Info: ${data}`);
});

