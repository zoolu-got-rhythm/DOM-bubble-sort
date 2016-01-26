/* TODO:get the state working first MVP, flow control
then worry about the view */
function bubbleSort(a){
  var a;
  var temp;
  console.log(a);
  for (var i = 0; i < a.length; i++) {
    for (var j = 0; j < a.length; j++) {
      if (a[j] > a[j + 1]) {
         temp = a[j];
         // swap
         a[j] = a[j + 1];
         a[j + 1] = temp;
      }
    }
  }

  console.log(a);
}

bubbleSort([7, 5, 4, 2, 1, 3, 6]); 
