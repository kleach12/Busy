If server states port is in use 
- run lsof -wni tcp:3001 to find the current PID
- then run kill -9 <PID>
