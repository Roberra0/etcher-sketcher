
//Add cubes in parent canvas
function canvasCreation(rows=5, columns=5){
    for(h=0; h<rows; h++){ //Creates rows
        let row = document.createElement('div');
        row.classList.toggle('row');
        for (i=0; i<columns; i++){//7171 Creates columns
            let div = document.createElement('div'); //Create the divs
            div.classList.toggle('cube');
            //Create the divs
            row.appendChild(div);
        }
        document.getElementById("sketchCanvas").appendChild(row); //add divs to parent
    }
}

//Color cubes on hover
function colorize() {
    const cubes = document.querySelectorAll('div.cube');
    cubes.forEach((div) => {
        // console.log('mouse');
        div.addEventListener('mouseover',(event)=>{    
            event.target.style.background = "#" + Math.floor(Math.random()*16777215).toString(16); //div.style will target all divs, need to use event to say the specific element in node list that triggered the event
            });
    });
}

//LISTENERS
    //Clear button: clear canvas on button click
function clearCanvasEnabler(){
    const cubes = document.querySelectorAll('div.cube');
    document.getElementById('clear').addEventListener('click',()=>{ //When button clicked
        cubes.forEach((div) => {    //set color to white
            div.style.background = 'white';
        });
    });
}
    // //Resize button: 
    document.getElementById('resize').addEventListener('click',()=>{
        let rows = prompt("Enter # of rows (100 max)");
        let columns = prompt("Enter # of columns (100 max)");
        rows > 100 ?
            rows = 100:
            rows<0 ?
                rows = 5:
                "";
        columns > 100 ?
            columns = 100:
            columns < 0 ?
                columns = 5:
            "";
        deleteCanvas();
        canvasCreation(rows, columns);
        colorize();
        clearCanvasEnabler();
    });

function deleteCanvas () {
    const canvas = document.getElementById("sketchCanvas");
    while(canvas.firstChild){ //While there is a child in canvas, which are all the rows and cubes
        canvas.removeChild(canvas.firstChild); //remove the child
    }
}
    
canvasCreation();
colorize();
clearCanvasEnabler();



