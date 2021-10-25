const colors = ['green', 'red', 'rgba(133, 122, 200)', '#f15025']

const btn = document.getElementById('btn')
const color = document.querySelector('.color')
const input = document.getElementById('color-input')

btn.addEventListener('click', function() {
    let currentColor = input.value;

    if (!currentColor) {
        const randomNumber = getRandomNumber();
        currentColor = colors[randomNumber]
    }

    document.body.style.backgroundColor = currentColor;
    color.textContent = currentColor;
    input.value = ''
})

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length)
}
