const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

const btn = document.getElementById('btn')
const color = document.querySelector('.color')

btn.addEventListener('click', function() {
    let hexColor = '#'
    let i = 0

    while(i < 6) {
        const randValue = getRandomNumber()
        hexColor += hex[randValue]

        i++
    }

    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor;
})

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length)
}
