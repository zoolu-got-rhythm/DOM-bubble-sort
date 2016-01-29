/* TODO:get the state working first MVP, flow control
then worry about the view and map  */

function bubble(a){
  // private var's
  var a,
      temp;



  return {
    // bubble sort through an array
    sort: function() {
      for (var i = 0; i < a.length; i++) {
        for (var j = 0; j < a.length; j++) {
          if (a[j] > a[j + 1]) {
             temp = a[j];
             // swap(bubble)
             a[j] = a[j + 1];
             a[j + 1] = temp;
          }
        }
      }

    return a;
    },
    // scramble an array
    scramble: function() {
      // keep scrambling untill all random numbers have been placed.
      var index;
      while(!randomNumbers){
      // index1 = random number;
      // loop through and check what numbers are left to scramble and narrow down.

      }
      Math.random(a.length);


    },

    plain: function(){
      return a;
    }
  }
}



var result = bubble([7, 5, 4, 2, 1, 3, 6, 10, 8, 9]);
console.log(result.plain());
console.log(result.sort());
console.log(result.scramble());
