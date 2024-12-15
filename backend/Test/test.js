const autocannon = require('autocannon');
const url = "http://localhost:8000"
const duration = 30;

const instance = autocannon({
    url,
    duration,

}, (err, result) => {
    if (err) {
        console.error("error",err);
       
    }else{
  console.log("result",result);
    }

    
});
autocannon.track(instance);