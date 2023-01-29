const checkBox = document.querySelectorAll(`.inbox input[type="checkbox"]`);

let lastcheck;
function handelChek(e){

    let between = false;

    if(e.shiftKey && this.checked){
    checkBox.forEach( checkBox => {
        if(checkBox === this || checkBox === lastcheck){
            between = !between;
        }
    });
    }
    lastcheck = true;
}
checkBox.forEach(checkBox => checkBox.addEventListener('click', handelChek));