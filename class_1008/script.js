function append_li_Tag() {
    if(textBox.value.length > 0) {
        let new_li = document.createElement('li');
        let text = document.createTextNode(textBox.value);
    
        new_li.appendChild(text);
        ul.appendChild(new_li);
        textBox.value = "";
    }
}

let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let textBox = document.getElementById("txt");

btn.addEventListener("click", function(e) {
    append_li_Tag();
})

textBox.addEventListener("keypress", function(e) {
    if(e.key === "Enter") { append_li_Tag(); }
})