const fs = require('fs');
const path = require('path');

function fixEOL(dir) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      fixEOL(fullPath);
    } else if (/\.(ts|tsx|js|json)$/.test(file)) {
      const content = fs.readFileSync(fullPath, 'utf8');
      const fixed = content.replace(/\r\n/g, '\n');
      fs.writeFileSync(fullPath, fixed, 'utf8');
      console.log(`Fixed EOL in: ${fullPath}`);
    }
  });
}

fixEOL(process.cwd());
