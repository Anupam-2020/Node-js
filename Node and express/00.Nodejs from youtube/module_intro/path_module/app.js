const path = require('path');
const rootDir = path.dirname(require.main.filename);

console.log(path.parse(rootDir.toString()+'/app.js'));
