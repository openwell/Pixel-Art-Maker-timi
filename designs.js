// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()


(function() {

  /*
   *  @description Create a new grid to replace the old grid, the size of 
   *  the new grid depends on two input tags (input_height and input_width).
   */
  function makeGrid() {
    let table = document.getElementById('pixel_canvas');
    const colorPicker = $('#colorPicker');
    const [colNum, rowNum] = [$('#input_width').val(), $('#input_height').val()];

    if (rowNum < 1 || rowNum > 48) {
      alert("The range of Grid Height between 1 and 48");
      return;
    }

    if (colNum < 1 || colNum > 48) {
      alert("The range of Grid Width between 1 and 48");
      return;
    }

    table.innerHTML = '';
    for (let i = 0; i < rowNum; ++i) {
      const row = table.insertRow(i);
      for (let j = 0; j < colNum; ++j) {
        const cell = row.insertCell(j);
        cell.onclick = () => {
          cell.style.backgroundColor = colorPicker.val();
        }
     	 }
    	} 
  		}

  $('#submit').click(makeGrid);
  makeGrid();
}) ();



// function makeGrid(h,w) {

// // Your code goes here!

// var hei = "";
// var wei = "";
// var tot = "";
// for (var i = 1; i <= h; i++) {
// 	hei += '<tr>'
// 	tot += '</tr>'
// }
// for (var j = 1; j <= w; j++) {
// 	wei += '<td></td>'
// }
// $("#canvas").html(
// 	hei+wei+tot
// )

// }


// $(document).ready(function(){
// 	$("#sizePicker").submit(function(e){
// 		e.preventDefault()

// 		a = $("#inputHeight").val()
// 		b = $("#inputWeight").val()

// 		makeGrid(a,b)
// 	})
// })