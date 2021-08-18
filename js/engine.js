//Add attribute 
function addAttr(el, attNm, attVal){
  try {
    return el.setAttribute(attNm,attVal);
} catch (error) {
    handleError(error);
}
  
}

//Remove attribute
function rmvAttr(el, attNm){
  try {
    return el.removeAttribute(attNm);
  } catch {
    handleError(error);
  }
  
}

//Check attribute
function checkAttr(el, attNm){
  try {
    return el.getAttribute(attNm);
  } catch {
    handleError(error);
  }

}

//Toggle value
function toggle(el, attNm, attVal){
  if(checkAttr(el, attNm)){
    rmvAttr(el, attNm);
  } else {
    addAttr(el, attNm, attVal);
  }
}

// Toggle hide and show answer
function toggleAns(ansId, text) {
  let el = document.getElementById(ansId);
  if (el.style.display === "none" || !checkAttr(el, 'style')) {
    el.style.display = "block";
    addInner(el, text);
  } else {
    el.style.display = "none";
  }
}

//Toggle icon
function flipIcon(el){
  if(el.style.transform === 'rotate(0deg)' || !checkAttr(el, 'style')) {
    el.style.transform = 'rotate(180deg)';
  } else {
    el.style.transform = 'rotate(0deg)';
  }
}

//Add inner text
function addInner(el, text){
  if (!el.innerHTML){
  return el.innerHTML = text;
  }
}

//Handle error
function handleError(error) {
  switch (error.name) {
      case 'ReferenceError':
          console.log("Reference error: " + error.message);
          break;
      case 'RangeError':
          console.log("Range error: " + error.message);
          break;
      case 'TypeError':
          console.log("Type error: " + error.message);
          break;
      case 'URIError':
          console.log("URI error: " + error.message);
          break;
      case 'SyntaxError':
          console.log("Syntax error: " + error.message);
          break;
      case 'EvalError':
          console.log("Evaluation error: " + error.message);
          break;
      default:
          console.log("Error Type: " + error.name + " - Message: " + error.message);
          break;
  }
}
