document.addEventListener("DOMContentLoaded", function(){
  let circle = document.querySelector('#circle')
  let target = document.querySelector('#target')

  //source
  circle.addEventListener('drag', function(){
    console.log('drag')
  })
  // 針對要被拖曳的元素（dragSource） 監聽 dragstart 事件
  circle.addEventListener('dragstart', function(){
    console.log('dragstart')
  })

  circle.addEventListener('dragend', function(){
    console.log('dragend')
  })

  //針對要被置放的容器 dropTarget 監聽 drop 事件，來處理當使用者放掉的時候要執行的行為
  target.addEventListener('drop', dropped)

  // 監聽 dragenter 和 dragover 事件來避免預設行為：
  dropTarget.addEventListener('dragenter', cancelDefault)
  dropTarget.addEventListener('dragover', cancelDefault)
  

  


  // //target
  // target.addEventListener('dragenter', function(){
  //   console.log('dragenter target')
  // })

  // target.addEventListener('dragover', function(){
  //   console.log('dragover target')
  // })

  // target.addEventListener('dragleave', function(){
  //   console.log('dragleave target')
  // })

  // target.addEventListener('drop', function(){
  //   console.log('drop')
  // })
})
