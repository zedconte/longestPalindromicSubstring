var startTime, endTime;

const start = () => {
    console.log('start');

  startTime = performance.now();
};

const stop = () => {
  console.log('stop');
  endTime = performance.now();
  var timeDiff = endTime - startTime; //in ms
  // strip the ms
  //timeDiff /= 1000;

  // get ms 
  //var ms = Math.round(timeDiff);
  console.log(timeDiff + " ms");
};

const sayst = (something) => {
  
    if (typeof window !== 'undefined') {
      //console.log(alert === window.alert); // 👉️ true    
      alert(something);// 👉️ can use alert()
    } else {
      console.log(something);    // 👉️ can't use alert()
    }
  };
  if (typeof module === 'object') {
    module.exports = { start, stop, sayst, }
  }