
debugger;

var node = document.querySelector(".sports");
for (let k = 0; k < node.children.length; k++){
  node.children[k].onclick = function(event){
    event.target.style.backgroundColor = "yellow";
    console.log(k);
  };
};

