const btn = document.getElementById('btn')
const color = document.querySelector('.color')
const input = document.getElementById('color-input')

btn.addEventListener('click', function() {
    let currentColor = input.value;

    if (!currentColor) {
        const randomNumber = getRandomNumber(colors.length);
        currentColor = colors[randomNumber]
    }

    document.body.style.backgroundColor = currentColor;
    color.textContent = currentColor;
    input.value = ''
})


