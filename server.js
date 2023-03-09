"use strict";
// *************** Imports ***************
const express   = require('express');
const server    = express();
const cors      = require('cors');

// *************** Constants and variables ***************s
const port      = 8000;

// *************** Middleware ***************
server.use(express.json())
// handshake, everybody will be responded
server.use(cors());

// *************** Routes ***************
server.get('/hello', (req, res) => {

    // console.log('Servertime');
    let reply = "Everything's gonna be alright";
    
    res.send(reply);
})

// *************** Functions ***************

const gracefulShutdown = () => {
    teardown()
        .catch(() => {})
        .then(() => process.exit());
};

// *************** Initialisation ***************
const init = () =>{

    server.listen(port, err => console.log(err || `Listening on port ${port}`))

};

process.on('SIGINT', gracefulShutdown);
process.on('SIGTERM', gracefulShutdown);
process.on('SIGUSR2', gracefulShutdown); // Sent by nodemon

init();
