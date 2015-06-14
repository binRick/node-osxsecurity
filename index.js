var fs = require('fs'),
    child = require('child_process');


module.exports.Config = {
    getImageCommand: function() {
        return 'imagesnap -w 1.15 -q image.png';
    },
};
