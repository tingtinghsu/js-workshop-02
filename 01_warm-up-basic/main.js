// TO DO
window.addEventListener('DOMContentLoaded', function(){
  const myBtn = document.querySelector('button');
  
  myBtn.addEventListener('click',function(){
    let circle = document.querrySelector('t#circle')
    var clone = document.importNode(circle.content, true);
    
    document.querySelector('.box').appendChild(clone)
  })
})