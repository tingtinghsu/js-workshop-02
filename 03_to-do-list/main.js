document.addEventListener("DOMContentLoaded", function(){
  // 
  function checkedRemoved(){
    let allList = document.querySelectorAll('li');
    allList.forEach(function(pickedList){
      pickedList.addEventListener('click', function(){
        pickedList.classList.toggle("checked")
      })
      pickedList.querySelector('span').addEventListener('click', function(){
        this.parentNode.remove('li')
      })
    })
  }


  let taskBtn = document.querySelector('#addBtn');
  taskBtn.addEventListener('click', function(){
    // 取值
    let taskContent = document.querySelector('#input').value;

    let liNew = document.createElement("li");
    let spanNew = document.createElement("span");
    spanNew.classList.add("close");
    spanNew.textContent = "x";
    let ulOrigin = document.querySelector("ul");


    liNew.innerHTML=taskContent;
     //  li 包 span
    ulOrigin.appendChild(liNew).appendChild(spanNew);

    let allList = document.querySelectorAll('li');
    allList.forEach(function(pickedList){
      pickedList.addEventListener('click', function(){
        pickedList.classList.toggle("checked")
      })
      pickedList.querySelector('span').addEventListener('click', function(){
        this.parentNode.remove('li')
      })
    })

    // ulOrigin.lastChild(spanNew);
    //ulOrigin.appendChild(liNew).innerHTML=taskContent;
  })
})
