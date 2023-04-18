if (typeof module !== 'undefined' && module.exports) {
   
    const benchmark = require('../support/benchmark');

    // code for Node.js 
    module.exports = {
       
       // exported functions or objects for Node.js
       greet: function(name) {
          console.log('Hello, ' + name + '!');
       },
       goodbye: function(name) {
          console.log('Goodbye, ' + name + '!');
       },
       longestPalindromicSubstring: function(s) {
            benchmark.start();
            let max = 0;
        
            for(let i = 0; i < s.length; i++){
                for(let j = 0; j <= 1; j++){
                    let l = i;
                    let r = i + j;
        
                    while(l >= 0 && r < s.length && s[l] === s[r]){
                        let len = r - l + 1;
                        if(len > max){
                            res = s.substring(l, r + 1);
                            max = len;
                        }
                        l--;
                        r++;
                    }
                }
            }
            benchmark.stop();
            return res;
        }
    };
 } else {
    
    // code for the browser
    window.myLibrary = {
       
       // exported functions or objects for the browser
       greet: function(name) {
          alert('Hello, ' + name + '!');
       },
       goodbye: function(name) {
          alert('Goodbye, ' + name + '!');
       },

       longestPalindromicSubstring: function(s) {
            let res = "";
            let max = 0;
        
            for(let i = 0; i < s.length; i++){
                for(let j = 0; j <= 1; j++){
                    let l = i;
                    let r = i + j;
        
                    while(l >= 0 && r < s.length && s[l] === s[r]){
                        let len = r - l + 1;
                        if(len > max){
                            res = s.substring(l, r + 1);
                            max = len;
                        }
                        l--;
                        r++;
                    }
                }
            }
            return res;
        }
    };
 }