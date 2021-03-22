let element1=document.getElementById('array-size'),array_size=element1.value;
let element2=document.getElementById("array-speed");
let element3=document.getElementById("array-create");

let algo_buttons=document.querySelectorAll(".algos button");
const div_sizes=[];
const divs=[];
let margin_size;
let container=document.getElementById("array_container");
container.style="flex-direction:row";

element3.addEventListener("click",generate_array);
element1.addEventListener("input",update_array_size);

function generate_array()
{
    container.innerHTML="";

    for(var i=0;i<array_size;i++)
    {
        div_sizes[i]=Math.floor(Math.random() * 80 ) + 10;
        divs[i]=document.createElement("div");
        container.appendChild(divs[i]);
        margin_size=0.1;
        divs[i].style=" display: flex; align-self: flex-end; margin:0% " + margin_size + "%; background-color:darkslategrey; width:" + (100/array_size-(2*margin_size)) + "%; height:" + (div_sizes[i]) + "%;";
    }
}

function update_array_size()
{
    array_size=element1.value;
    generate_array();
}

window.onload=update_array_size();

for(var i=0;i<algo_buttons.length;i++)
{
    algo_buttons[i].addEventListener("click",run_algorithm);
}

function disable_buttons()
{
    for(var i=0;i<algo_buttons.length;i++)
    {
        algo_buttons[i].classList=[];
        algo_buttons[i].classList.add("butt_locked");

        algo_buttons[i].disabled=true;
        element1.disabled=true;
        element3.disabled=true;
        element2.disabled=true;
    }
}

function run_algorithm()
{
    disable_buttons();

    this.classList.add("butt_selected");
    switch(this.innerHTML)
    {
        case "Merge":Merge();
                         break;
        case "Bubble":Bubble();
                        break;
        case "Insertion":Insertion();
                        break;

    }
}

