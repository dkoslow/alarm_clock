var spawn  = require('child_process').spawn
  , stdin  = process.stdin
  , stdout = process.stdout

stdout.write('Wake up in this many hours: ');
stdin.on('data', getAlarmTime);

function getAlarmTime (data) {
  var time = data * 1000 * 60 * 60;
  setAlarm(time);
}

function setAlarm(time) {
  setTimeout( function() {
    spawn('open', ['http://www.listenonrepeat.com/watch?v=VgSMxY6asoE']);
  }, time);
  stdin.pause();
}