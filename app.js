/* TODO:get the state working first MVP, flow control
then worry about the view and map
map to console then to dom  */

function bubble(a){
  // private var's
  var a,
      temp;

  return {
    // bubble sort through an array
    sort: function() {

      var i = 0;

      var sorting = window.setInterval(function(){

      i++;
      // update visual every few millasecs.
      visual.barChart(a);

      for (var j = 0; j < a.length; j++) {
        if (a[j] > a[j + 1]) {
           temp = a[j];
           // swap(bubble)
           a[j] = a[j + 1];
           a[j + 1] = temp;
        }
      }

      console.log(a);
      if(i === a.length) stopTimer(sorting);

    }, 300 );

    function stopTimer(timer){
      clearInterval(timer);
    }



    },

    // scramble an array
    scramble: function() {
      // keep scrambling untill all random numbers have been placed.
    },

    plain: function(){
      return a;
    }
  }
}



var result = bubble([7, 5, 4, 2, 1, 3, 6, 10, 8, 9]);
console.log(result.plain());
console.log(result.sort());





// function visual(arr, current){
    // map parsed array to a new array, do i need to map?
    // var mapped = old.map(function());
  //   var bars = [];
  //
  //   for (var i = 0; i < mapped.length; i++) {
  //     bars.push(i*5);
  //   }
  //
  //   parent.childNodes[current].style.height = bars[arr[i]] + "px";
  // }





var visual = function(){

  var switch = true;

  return {

  barChart: function(arr, current){
      var bars = [];
      if(switch){
        var parent = document.createElement("div");
        document.appendChild(parent);
      }
      switch = false;

      for (var i = 0; i < arr.length; i++) {
        bars.push(arr[i] * 5);
        var bar = document.createElement("div");
        parent.appendChild(bar)
      }


      parent.childNodes[current].style.height = bars[arr[i]] + "px";
  }
}
}
