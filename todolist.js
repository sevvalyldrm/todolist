const todoList = document.querySelector("#list")
const inputTask = document.querySelector("#task")
const button = document.querySelector("#liveToastBtn")
const successAlert = document.querySelector("#successToast")
const dangerAlert = document.querySelector("#dangerToast")


// Yeni Element Ekleme ve Ona Özellik Atama

function newElement() {
    const li = document.createElement("li");
    var inputTask = document.getElementById("task").value;
    var t = document.createTextNode(inputTask);
    li.appendChild(t);

    if (inputTask === '') {
        alert("Bir şeyler yazmalısın!");
    } else {
        document.getElementById("list").appendChild(li);
    }


    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    const close = document.getElementsByClassName("close");
    var i;
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
        if (task.value != "") {

            $(".success").toast("show");
        }
        else {
            $(".error").toast("show");
        }
    }
}


for (i = 0; i < inputTask.length; i++) {
    inputTask[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

// Çarpı işaretini oluşturma 

const todoLi = document.getElementsByTagName("li");
var i;
for (i = 0; i < todoLi.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    todoLi[i].appendChild(span);

}

// Tıklandığında check edilmesi

const list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);

// Kapat Düğmesini Çalıştırma

const close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }
}




