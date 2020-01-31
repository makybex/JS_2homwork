var inputData = document.querySelector("input[type='text']");
var ulSpisok = document.querySelector("ul");
var spans = document.getElementsByTagName("span");
var lists = document.getElementsByTagName("li");
var pAll = document.getElementsByTagName("p");
var saveBtn = document.getElementById("save");
var clearBtn = document.getElementById("clear");
var infoBtn = document.getElementById("info");
var container = document.getElementById('form-container');
var form = document.getElementById('form');

function deleteTodo(){
    for(let span of spans){
        span.addEventListener('click', function(){
            span.parentElement.remove();
            event.stopPropagation();
        })
    }
};

function loadTodo(){
    if(localStorage.getItem('TodoAppLication')){
        ulSpisok.innerHTML = localStorage.getItem('TodoAppLication');
    }
    deleteTodo();
}
function performed() {
ulSpisok.addEventListener("click",function(even) {
    if (even.target.tagName === "P") {
        even.target.classList.toggle("pListClick");
      }
    },
false
  );
}




//addEventListener - обработчик события

inputData.addEventListener('keypress', function(keyPressed){
    if(keyPressed.which === 13){   // проверка на enter
        if (this.value != '') {
        var newLi = document.createElement("li");
        var newSpan = document.createElement("span");
        newSpan.innerHTML = 'Удалить';
        var newPdata = document.createElement("p");
        var newPstyle = document.createElement("p");
        newPstyle.innerHTML = this.value;
        var newSpanTodo = this.value;
        newPstyle.className = "valueLi";
        var newData = new Date();
        var curr_date = newData.getDate();
        var curr_month = newData.getMonth() + 1;
        var curr_year = newData.getFullYear();
        var newP = curr_date + "-" + curr_month + "-" + curr_year;
        newPdata.innerHTML = newP;
        ulSpisok.appendChild(newLi).append(newSpan) + newLi.append(newPstyle) + newLi.append(newPdata);
        deleteTodo();
        performed();
        }
    }
    
});


saveBtn.addEventListener('click', function(){
    localStorage.setItem('TodoAppLication', ulSpisok.innerHTML);
});

clearBtn.addEventListener('click', function(){
    ulSpisok.innerHTML = "";
    localStorage.setItem('TodoAppLication', ulSpisok.innerHTML);
});


deleteTodo();
performed();
loadTodo();

function showModal() {
    form.innerHTML = '<p>Русецуий Кирилл</p><button id="exitBtn">Закрыть</button>';
    var exitBtn = document.getElementById("exitBtn");
    container.style.display = 'block';
    exitBtn.onclick = function () {  
    container.style.display = 'none';
    };
};
infoBtn.addEventListener("click", function() {
showModal();
});


//Стили flexBox
function flexStyle() {
  var style = document.createElement('style');
  style.innerHTML = `
    #todo_app {
      display: flex;
      flex-direction: column;
    }
    p {
        display: inline-block;
        margin: 3px;
    }
  `;
  document.head.appendChild(style);
}

flexStyle();