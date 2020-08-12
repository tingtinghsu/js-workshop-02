document.addEventListener('DOMContentLoaded',function(){
  let outer = document.querySelector('.outer')
  let inner = document.querySelector('.inner')
  let link = document.querySelector('a')

  // event bubbling
  outer.addEventListener('click', function(){
    console.log('outer')
  })

  inner.addEventListener('click', function(){
    console.log('inner')
  })

  // // event capturing
  // outer.addEventListener('click', function(){
  //   console.log('outer')
  // }, true)

  // inner.addEventListener('click', function(){
  //   console.log('inner')
  // }, true)


  // // stopPropagation
  // outer.addEventListener('click', function(){
  //   console.log('outer')
  // })

  // e.stopPropagation();讓inner不要再bubbling往上傳，只秀出inner就好了
  // inner.addEventListener('click', function(e){
  //   e.stopPropagation();
  //   console.log('inner')
  // })

  // // preventDefault
  // link.addEventListener('click', function(e){
  // 防止網頁跳轉
  //   e.preventDefault();
  //   console.log('link');
  // })
})
