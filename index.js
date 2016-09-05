function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.getElementById('nested').querySelectorAll('div.target')[0]
}

function increaseRankBy(n){
  var lis = document.getElementById("app").querySelectorAll('ul.ranked-list li')
  for (var i = 0, l = lis.length; i < l; i++){
  lis[i].innerHTML = parseInt(lis[i].innerHTML) + n
  }
}

function deepestChild(){

  return document.getElementById('grand-node').getElementsByTagName("div")[0]
}
