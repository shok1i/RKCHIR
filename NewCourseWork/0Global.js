function burger(){
    let btn = document.getElementById('burger');

    if (btn.style.display === 'none')
        btn.style.display = 'flex';
    else
        btn.style.display = 'none';
}