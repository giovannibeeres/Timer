# Timer
Simple JS Timer for node.js

## Usage

Typical usage:

```javascript
let
Timer = require('Timer'),
timer = Timer()

timer.start()

setTimeout(() => {
	timer.update()
	console.log(timer.msToString(), timer.elapsed)
}, 1200)
```

It is possible to give the Timer some head time.

```javascript
timer.start(1000) // 1 sec head time
```
