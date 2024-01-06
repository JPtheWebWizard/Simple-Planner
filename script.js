function addTask() {
    var input = document.createElement("input");
    var checkbox = document.createElement("input");
    input.type = "text";
    checkbox.type = "checkbox";

    var listBox = document.getElementById("listBox");
    listBox.appendChild(checkbox);
    listBox.appendChild(input);
    listBox.appendChild(document.createElement("br"));
};