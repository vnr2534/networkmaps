#!/usr/bin/node

const sendmail = require("C:/networkmaps/lib/sendmail");
const config = require('C:/networkmaps/lib/config');


function main() {
    sendmail.initialize(config.sendmail)
    
    setInterval(() => { sendmail.empty_queue() }, 30000);
}

main()
