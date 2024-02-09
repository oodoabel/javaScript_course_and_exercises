function change(event){
    let Gaming = document.querySelector(event)


    if (Gaming.classList.contains('is-toggled')){
        Gaming.classList.remove('is-toggled')
        Gaming.classList.add('not-toggled')
    }else if (Gaming.classList.contains('not-toggled')) {
        Gaming.classList.remove('not-toggled')
        Gaming.classList.add('is-toggled')
    }
    
}