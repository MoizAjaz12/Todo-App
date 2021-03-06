var list = document.getElementById("list");

function add() {
    var regex = /\s\s+/g;
    var input = document.getElementById("input");

    if (input.value == "" || regex.test(input.value)) {
        alert("Write Something.....")
        input.value = ""
    }

    else {
        var li = document.createElement("li");
        li.setAttribute("class", "li");
        var p = document.createElement("p");
        p.setAttribute("class", "text");
        var pText = document.createTextNode(input.value);
        p.appendChild(pText);
        li.appendChild(p);

        var editBtn = document.createElement("button");
        editBtn.setAttribute("class", "edit");
        editBtn.setAttribute("onclick", "edit(this)");
        var editText = document.createTextNode("Edit");
        editBtn.appendChild(editText);
        li.appendChild(editBtn);

        var delBtn = document.createElement("button");
        delBtn.setAttribute("class", "delete");
        delBtn.setAttribute("onclick", "del(this)");
        var delText = document.createTextNode("Delete");
        delBtn.appendChild(delText);
        li.appendChild(delBtn);

        list.appendChild(li);

        input.value = "";
    }
}

function clearAll() {
    list.innerHTML = "";
}

function edit(e) {
    var regex = /\s\s+/g;
    var val = e.parentNode.firstChild.firstChild.nodeValue;
    var editValue = prompt("Edit New Value : ");
    if (regex.test(editValue) || editValue == "") {
        alert("Write Something")
    }
    else {
        e.parentNode.firstChild.firstChild.nodeValue = editValue;
    }
}

function del(g) {
    g.parentNode.remove();
}
