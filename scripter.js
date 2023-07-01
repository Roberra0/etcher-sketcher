
//Add cubes in parent canvas

for (i=0; i<7171; i++){//7171
    let div = document.createElement('div'); //Create the divs
    div.setAttribute('id','cube');
    //Create the divs
    document.getElementById("sketchCanvas").appendChild(div); //add divs to parent
}

//Color cubes on hover
const cubes = document.querySelectorAll('div#cube');
cubes.forEach((div) => {
    // console.log('mouse');
    div.addEventListener('mouseover',(event)=>{    
        event.target.style.background = "#" + Math.floor(Math.random()*16777215).toString(16); //div.style will target all divs, need to use event to say the specific element in node list that triggered the event
        });

});

//clear canvas on button click
document.getElementById('clear').addEventListener('click',()=>{ //When button clicked
    cubes.forEach((div) => {    //set color to white
        div.style.background = 'white';
    });
});