const checkBox = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastcheck;
function handelChek(e){

    let between = false;

    if(e.shiftKey && this.checked){
    checkBox.forEach( checkbox => {
        if(checkbox === this || checkbox === lastcheck){
            between = !between;
        }
        if(between){
            checkbox.checked = true;
        }
    });
    }
    lastcheck = this;
}
checkBox.forEach(checkbox => checkbox.addEventListener('click', handelChek));
