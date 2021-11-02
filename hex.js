const btn = document.getElementById('btn')
const color = document.querySelector('.color')

btn.addEventListener('click', function() {
    let hexColor = '#'
    let i = 0

    while(i < 6) {
        const randValue = getRandomNumber(hex.length)
        hexColor += hex[randValue]

        i++
    }

    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor;
})
