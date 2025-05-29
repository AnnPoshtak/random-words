document.getElementById('generate').addEventListener('click', function () {
    let m = 1
    const words = document.getElementById("words").value
    const howManyRandomWords = document.getElementById("How-many-words").value;
    const array =  words.split(/[\s,]+/).map(word => word.trim().toLowerCase()).filter(word => word.length > 0);
    document.querySelectorAll('.array_of_words').forEach(el => el.innerHTML = '');
    function mixWords(array) {
        for (let i = 0; i<30;i++) {
            const index1 = Math.floor(Math.random() * array.length);
            const index2 = Math.floor(Math.random() * array.length);

            let word = array[index1];
            array[index1] = array[index2];
            array[index2] = word;
        }
        return array;
    }
    mixWords(array);
    for (let i = 0; i < howManyRandomWords; i++) {
        let newDiv = document.createElement('div');
        if (m == 1||m == 21) {
            newDiv.textContent = m + "-ше слово: "+array[i]
        } else if (m == 2||m == 22) {
            newDiv.textContent = m + "-ге слово: "+array[i]
        } else if (m == 3|| m == 23) {
            newDiv.textContent = m + "-тє слово: "+array[i]
        } else if (m == 4||m == 5||m <= 9||m >= 20||m == 24||m == 25||m == 29||m == 30) {
            newDiv.textContent = m + "-те слово: "+array[i]
        } else if (m == 6||m == 7||m == 8||m == 27 || m == 28) {
            newDiv.textContent = m + "-ме слово: "+array[i]
        }
        document.body.appendChild(newDiv)
        newDiv.classList.add('array_of_words');
        newDiv.style.textAlign = "center";
        newDiv.style.color = "black";
        newDiv.style.fontSize = "35px";
        m+=1
    }

})