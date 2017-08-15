#!/bin/sh
rm /home/pony/sites/gastroprocto/api/forever.log
forever start -l /home/pony/sites/gastroprocto/api/forever.log -o /home/pony/sites/gastroprocto/api/out.log -e /home/pony/sites/gastroprocto/api/err.log /home/pony/sites/gastroprocto/api/server.js 
