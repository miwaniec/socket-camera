const cameraConfig = require('./camera.json');
const request = require('request');
const socket = require('socket.io-client')(cameraConfig.server_url);

let cameraByName = [];
cameraConfig.cams.forEach( function(c, i) {
    cameraByName[c.name] = i;
});

socket.on('connect', function() {

    console.log('> connected');
    socket.emit('register', Object.keys(cameraByName));

});

socket.on('getSnapshot', function(data) {

    if( cameraByName[data.camera] !== undefined ) {
        let camera = cameraConfig.cams[ cameraByName[data.camera] ];
        request.get( {
                url: camera.url,
                encoding: null
            },
            function(err, response, body) {
                if( response !== undefined ) {
                    data.image = 'data:' + response.headers['content-type'] + ';base64,' + new Buffer(body).toString('base64');
                    data.error = 0;
                    socket.emit('sendSnapshot', data);
                } else {
                    data.error = 1;
                    socket.emit('sendSnapshot', data);
                }
                console.log('- sendSnapshot');
            }
        ).auth(camera.login, camera.password, false);
    } else {
        data.error = 1;
        socket.emit('sendSnapshot', data);
    }

});

socket.on('disconnect', function() {

    console.log('< disconnected');

});