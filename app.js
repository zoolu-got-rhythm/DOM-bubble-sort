/* TODO:get the state working first MVP, flow control
then worry about the view and map
map to console then to dom  */

// sort module (using module pattern)
function bubble(a){
  // private var's
  var temp;

  return {
    // bubble sort through an array
    sort: function() {

      var i = 0;
      document.body.innerHTML = a;

      var sorting = window.setInterval(function(){

        i++;
        // update view every few millasecs.
        visual.barChart(a);
        visual.graph(a);

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


// visual module (using module pattern)
var visual = (function(){

  var knob = true,
      knob2 = true,
      parent;

  return {

    barChart: function(arr, current){
        var bars = [];

        // refresh children of parent
        if(!knob) {
          while(parent.firstChild){
            parent.removeChild(parent.firstChild);
          }
        }
        // create 1 parent
        if(knob){
          parent = document.createElement("div");
          parent.style.background = "#eee";
          parent.style.width = arr.length * 5 + "px";
          parent.style.height = arr.length * 5 + "px";
          document.body.appendChild(parent);
          console.log("parent created");
          knob = false;
        }


        // create and refresh children
        for (var i = 0; i < arr.length; i++) {
          bars.push(arr[i] * 5);
          var bar = document.createElement("div");
          bar.style.width = "5px";
          bar.style.height = bars[i] + "px";
          bar.style.background = "#ccc";
          bar.style.float = "left";
          parent.appendChild(bar);
        }

        // parent.childNodes[current].style.height = bars[arr[i]] + "px";
    },

    graph: function(arr){
      // canvas view
      if(knob2){
        var c = document.createElement("canvas");
        var ctx = c.getContext("2d");
        c.width = arr.length * 5;
        c.height = 200;
        c.style.background = "#eee";
        document.body.appendChild(c);
        knob2 = false;
      }


    }
  }
})();
