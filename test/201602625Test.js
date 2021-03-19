const assert = require('chai').assert;
const carne = require('../201602625');


describe('201602625', function(){

        describe('doProduct()', function(){

      it('doProduct should return the result of the product', function(){
        let result = carne.doProduct(6,6);
        assert.equal(result, 36);
      });

      it('doProduct should return the result of the product', function(){
        let result = carne.doProduct(10,10);
        assert.equal(result, 100);
      });
  
    });

        describe('getAbs()', function(){
        
        it('getAbs should return the absolute value of a number', function(){
          let result = carne.getAbs(-666);
          assert.equal(result, 666);
        });
  
        it('getAbs should return the absolute value of a number', function(){
            let result = carne.getAbs(101010);
            assert.equal(result, 101010);
          });
    
    });

        describe('doFactorial()', function(){
        
        it('doFactorial should return the factorial of a number', function(){
          let result = carne.doFactorial(5);
          assert.equal(result, 120);
        });
  
        it('doFactorial should return the factorial of a number', function(){
            let result = carne.doFactorial(16);
            assert.equal(result, 20922789888000);
          });
    
    });

        describe('SNK()', function(){
        it('SNK() deberia devolver un tipo string', function(){
            let result = carne.SNK();
            assert.typeOf(result, 'string');
          });
          
    });
  
        describe('raisedToTheCube()', function(){
        
        it('raisedToTheCub should return the cube of a number', function(){
          let result = carne.raisedToTheCube(3);
          assert.equal(result, 27);
        });
  
        it('raisedToTheCub should return the cube of a number', function(){
            let result = carne.raisedToTheCube(4);
            assert.equal(result, 64);
          });

    });
   
  });
  