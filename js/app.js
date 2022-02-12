
// add button event handler
let count = 0;
document.getElementById('add').addEventListener('click', function(){
    count = count + 1;
    document.getElementById('count').innerText = count;
});