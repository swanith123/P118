array_1=["pen","paper","book", "bottle"];
random_number = Math.floor((Math.random()*array_1.length)+1)
console.log(random_number = quick_draw_data_set);
quick_draw_data_set = array_1[random_number];
document.getElementById.innerHTML = ("span_score" + "span_timer" = 'Sketch To Be Drawn: ' + drawn_sketch);

timer_counter = 0;
timer_check = "";
drawn_sketch = "";
sketch = "";
answer_holder = "";
score = 0;

function draw(){
    if (check = drawn_sketch){
answer_holder = "set";
score = score + 1;
score = document.getElementById("span_score").innerHTML = score;
    }
}

function check_Sketch(){
    timer_counter = timer_counter + 1;
    document.getElementById("span_timer").value = timer_counter;
    console.log(timer_counter);
    if (timer_counter = 400)
    timer_counter = 0;
    timer_counter = "Completed";
    }
    if (timer_check = "Completed"){
        timer_check = "";
        answer_holder = "";
    }
    if (answer_holder = "Completed"){
        timer_check = "";
        answer_holder = "";
    }



function updateCanvas(){
    background("white");
    check = document.getElementById("canvas").innerHTML = Math.floor((Math.random()*quick_draw_data_set.length)+1);
    
}

function setup(){
    canvas = createCanvas(280, 280);
    canvas.center()
    background("white");
    }

    

    