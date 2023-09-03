const fs = require('fs');
const commander = require('commander');
const serverConfig = require('./configs/serverConfig')

commander
  .command('init')
  .description('Initializing the .mondal configuration file')
  .action(() => {
    if (!fs.existsSync('.mondal')) {
      fs.writeFileSync('.mondal', JSON.stringify(serverConfig, null, 2));
      console.log('.mondal configuration file created.');
    } else {
      console.log('.mondal configuration file already exists.');
    }
  });


commander.parse(process.argv);
