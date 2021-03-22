let speed=1000;

element2.addEventListener("input",vis_speed);

function vis_speed()
{
    let array_speed=element2.value;
    switch(parseInt(array_speed))
    {
        case 1: speed=1;
                break;
        case 2: speed=10;
                break;
        case 3: speed=100;
                break;
        case 4: speed=1000;
                break;
        case 5: speed=10000;
                break;
    }
    
    delay_time=10000/(Math.floor(array_size/10)*speed);       
}

let delay_time=10000/(Math.floor(array_size/10)*speed);        
let total_delay=0;

function div_update(container,height,color)
{
    window.setTimeout(function(){
        container.style=" display: flex; align-self: flex-end; margin:0% " + margin_size + "%; width:" + (100/array_size-(2*margin_size)) + "%; height:" + height + "%; background-color:" + color + ";";
    },total_delay+=delay_time);
}

function enable_buttons()
{
    window.setTimeout(function(){
        for(var i=0;i<algo_buttons.length;i++)
        {
            algo_buttons[i].classList=[];
            algo_buttons[i].classList.add("butt_unselected");

            algo_buttons[i].disabled=false;
            element1.disabled=false;
            element3.disabled=false;
            element2.disabled=false;
        }
    },total_delay+=delay_time);
}

function Merge()
{
    total_delay=0;

    merge_partition(0,array_size-1);

    enable_buttons();
}

function merge_sort(start,mid,end)
{
    let p=start,q=mid+1;

    const Arr=[];
    let k=0;

    for(var i=start; i<=end; i++)
    {
        if(p>mid)
        {
            Arr[k++]=div_sizes[q++];
            div_update(divs[q-1],div_sizes[q-1],"red");
        }
        else if(q>end)
        {
            Arr[k++]=div_sizes[p++];
            div_update(divs[p-1],div_sizes[p-1],"red");
        }
        else if(div_sizes[p]<div_sizes[q])
        {
            Arr[k++]=div_sizes[p++];
            div_update(divs[p-1],div_sizes[p-1],"red");
        }
        else
        {
            Arr[k++]=div_sizes[q++];
            div_update(divs[q-1],div_sizes[q-1],"red");
        }
    }

    for(var t=0;t<k;t++)
    {
        div_sizes[start++]=Arr[t];
        div_update(divs[start-1],div_sizes[start-1],"blue");
    }
}

function merge_partition(start,end)
{
    if(start < end)
    {
        var mid=Math.floor((start + end) / 2);
        div_update(divs[mid],div_sizes[mid],"yellow");

        merge_partition(start,mid);
        merge_partition(mid+1,end);

        merge_sort(start,mid,end);
    }
}

function Bubble()
{
    total_delay=0;

    for(var i=0;i<array_size-1;i++)
    {
        for(var j=0;j<array_size-i-1;j++)
        {
            div_update(divs[j],div_sizes[j],"yellow");

            if(div_sizes[j]>div_sizes[j+1])
            {
                div_update(divs[j],div_sizes[j], "red");
                div_update(divs[j+1],div_sizes[j+1], "red");

                var temp=div_sizes[j];
                div_sizes[j]=div_sizes[j+1];
                div_sizes[j+1]=temp;

                div_update(divs[j],div_sizes[j], "red");
                div_update(divs[j+1],div_sizes[j+1], "red");
            }
            div_update(divs[j],div_sizes[j], "green");
        }
        div_update(divs[j],div_sizes[j], "blue");
    }
    div_update(divs[0],div_sizes[0], "blue");

    enable_buttons();
}

function Insertion()
{
    total_delay=0;

    for(var j=0;j<array_size;j++)
    {
        div_update(divs[j],div_sizes[j],"yellow");

        var key= div_sizes[j];
        var i=j-1;
        while(i>=0 && div_sizes[i]>key)
        {
            div_update(divs[i],div_sizes[i],"red");
            div_update(divs[i+1],div_sizes[i+1],"red");

            div_sizes[i+1]=div_sizes[i];

            div_update(divs[i],div_sizes[i],"red");
            div_update(divs[i+1],div_sizes[i+1],"red");
    
            div_update(divs[i],div_sizes[i],"green");
            if(i==(j-1))
            {
                div_update(divs[i+1],div_sizes[i+1],"yellow");
            }
            else
            {
                div_update(divs[i+1],div_sizes[i+1],"green");
            }
            i-=1;
        }
        div_sizes[i+1]=key;

        for(var t=0;t<j;t++)
        {
            div_update(divs[t],div_sizes[t],"blue");
        }
    }
    div_update(divs[j-1],div_sizes[j-1],"blue");

    enable_buttons();
}
