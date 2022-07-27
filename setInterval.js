// Set interval has almost the same work as setTime out but its continuesly printing the return after some specific time that you have been set to it.
// for stoping setinterval you have to use clearInterval();

const id = setInterval(()=> {
    return Math.random();
},2000);

// for stopping it
// clearInterval(id).
