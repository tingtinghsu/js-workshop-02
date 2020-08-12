document.addEventListener("DOMContentLoaded", function(){

  let taskBtn = document.querySelector('#addBtn');
  let ul = document.querySelector('ul');
  ul.addEventListener('click', function(e){
    //如果環境變數的target是x按鈕，移除父元素
    //console.log(e)
    if (e.target.className === 'close'){
      console.log(e.target.parentNode);
      e.target.parentNode.remove('li');
    }
    else{
      e.target.classList.toggle("checked");
    }
  })
  
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

    // ulOrigin.lastChild(spanNew);
    //ulOrigin.appendChild(liNew).innerHTML=taskContent;
  })

  // 拖拉效果
  let dragSource = document.querySelectorAll("li");
    dragSource.forEach(function(dragItem){
      dragItem.addEventListener('drag', function(e){
        // console.log(e.screenX, e.screenY)
        const element = document.elementFromPoint(e.clientX, e.clientY)        
        // console.log(element)
        //element.appendChild(dragItem)
        // console.log(element.parentNode.tagName)
        // 判斷拖拉的範圍
        if (element.parentNode.tagName == "UL"){
          //console.log("yes")
          // dragItem.addEventListener('dragend', function(){
            // console.log("end")
            // console.log(element)
            // 如果在上面，就要放在上面；如果在下面，就放在下面
            // offset-top
            // if (){
            //   element.insertAdjacentElement("afterend", dragItem)
            // }
            // else(){
            //   element.insertAdjacentElement("beforebegin", dragItem)
            // }
            element.after(dragItem)
          }
        
    })

  })
})