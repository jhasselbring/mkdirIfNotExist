const fs = require('fs');
function mkdirIfNotExist(dir) {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }
}
module.exports = mkdirIfNotExist;