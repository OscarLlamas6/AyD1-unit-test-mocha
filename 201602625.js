module.exports = {
    doProduct: function(value1, value2){
      return value1 * value2;
    },
    getAbs: function(number){      
        return(Math.abs(number));
    },
    doFactorial: function(n) {
        var total = 1; 
        for (i=1; i<=n; i++) {
            total = total * i; 
        }
        return total; 
    },
    SNK: function(){
        return 'AMSS';
      },
    raisedToTheCube: function(number){
        return Math.pow(number,3);
      }
  }
  