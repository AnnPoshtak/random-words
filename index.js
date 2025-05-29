document.getElementById('generate').addEventListener('click', function () {
    const words = document.getElementById("words").value
    const howManyRandomWords = document.getElementById("How-many-words").value;
    const array =  words.split(/[\s,]+/).map(word => word.trim().toLowerCase()).filter(word => word.length > 0);
    document.querySelectorAll('.array_of_words').forEach(el => el.innerHTML = '');
    function mixWords(array) {
        const index1 = Math.floor(Math.random() * array.length);
        const index2 = Math.floor(Math.random() * array.length);

        let word = array[index1];
        array[index1] = array[index2];
        array[index2] = word;

        return array;
    }
    for (let j = 0; j < 5; j++) {
        mixWords(array);
    }
    for (let i = 0; i < howManyRandomWords; i++) {
        let newDiv = document.createElement('div');
        newDiv.textContent = array[i];
        newDiv.classList.add('array_of_words');
        document.body.appendChild(newDiv)
    }

})