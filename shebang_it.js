#!/usr/bin/env node
const fs = require('fs');

const fileWords = fs.readFileSync('dist/index.js', { endoding: 'utf8' });

try {
  fs.unlinkSync('bin/index.js');
} catch (e) { console.log('Unable to clear ./bin/index.js', e); }
try {
  fs.mkdirSync('bin');
} catch (_) {}
try {
  fs.writeFileSync('bin/index.js', `#!/usr/bin/env node\n${fileWords}`, { mode: '0755' });
} catch (_) { throw new Error(`Unable to copy stuff into ./bin/index.js: ${e}`); }
