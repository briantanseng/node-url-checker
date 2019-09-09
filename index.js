const readline = require('readline');
const fs = require('fs');

const cron = require('node-cron');
const axios = require('axios');

const minute = process.env.MINUTE;
const hour = process.env.HOUR;
const dayOfMonth = process.env.DAY_OF_MONTH;
const month = process.env.MONTH;
const dayOfWeek = process.env.DAY_OF_WEEK;

// export MINUTE=* HOUR=* DAY_OF_MONTH=* MONTH=* DAY_OF_WEEK=*
console.log(`Scheduler started on ${new Date().toUTCString()}`);

const schedule = `${minute} ${hour} ${dayOfMonth} ${month} ${dayOfWeek}`;
cron.schedule(schedule, () => {
    console.log(`Running task on ${new Date().toUTCString()}`);

    let rl = readline.createInterface({
        input: fs.createReadStream('data/url-list.txt')
    });

    let line_no = 0;

    // event is emitted after each line
    rl.on('line', function(line) {
        line_no++;
        console.log(`Checking ${line}`);

        // Make an HTTP request
        axios.get(line)
        .then(function (response) {
            console.log(`${line} ${response.status}`);
        })
        .catch(function (error) {
            console.log(`${line} ${error.status}`);
        })
        .finally(function () {
            // always executed
        });

    });

    // end
    rl.on('close', function(line) {
        console.log('Total lines read: ' + line_no);
    });

});