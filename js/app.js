
/* // add button event handler
let count = 0;
document.getElementById('add').addEventListener('click', function () {
    count = count + 1;
    document.getElementById('count').innerText = count;
});

// minus button event handler
document.getElementById('minus').addEventListener('click', function () {
    if (count > 0) {
        count = count - 1;
        document.getElementById('count').innerText = count;
    }
    else (
        window.alert('Number should be positive')
    )
}); */


// counting using direct function 

let count = 0;
function add() {
    count++;
    control('count');
}

function minus() {
    if (count > 0) {
        count--;
        control('count');
    }
    else (
        window.alert('Number should be positive')
    )
}

function control(id) {
    document.getElementById(id).innerText = count;
}