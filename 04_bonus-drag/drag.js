/**
 * Drag and Drop Basic
 */

let dragSource = document.querySelector('#drag-source')

// 於使用者開始拖曳一個元素或文字選取區塊時觸發。（請參考開始拖曳。）
dragSource.addEventListener('dragstart', dragStart)

// 以上的寫法是簡寫
// dragSource.addEventListener('dragstart', function(e){
//   console.log('dragStart')
//   e.dataTransfer.setData('text/plain', e.target.id)
// })

let dropTarget = document.querySelector('#target-container')
dropTarget.addEventListener('drop', dropped)
dropTarget.addEventListener('dragenter', cancelDefault)
dropTarget.addEventListener('dragover', cancelDefault)

function cancelDefault (e) {
  e.preventDefault()
  e.stopPropagation()
  return false
}

function dragStart (e) {
  console.log('dragStart')
  e.dataTransfer.setData('text/plain', e.target.id)
}

function dropped (e) {
  console.log('dropped')
  cancelDefault(e)
  let id = e.dataTransfer.getData('text/plain')
  e.target.appendChild(document.querySelector('#' + id))
}
// End of Drag and Drop Basic