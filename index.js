document.getElementById('generate').addEventListener('click', function () {
    const words = document.getElementById("words").value
    const array =  words.split(/[\s,]+/).map(word => word.trim().toLowerCase()).filter(word => word.length > 0);
    document.querySelectorAll('.array_of_words').forEach(el => el.innerHTML = '')
    for (let i = 0; i < array.length; i++) {
        let newDiv = document.createElement('div');
        newDiv.textContent = array[i];
        newDiv.classList.add('array_of_words');
        document.body.appendChild(newDiv)
    }
})