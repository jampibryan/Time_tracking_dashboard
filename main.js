import datos from './data.json' assert{type: 'json'}

// console.log(datos);

let bgColors = [
    'hsl(15, 100%, 70%)',
    'hsl(195, 74%, 62%)',
    'hsl(348, 100%, 68%)',
    'hsl(145, 58%, 55%)',
    'hsl(264, 64%, 52%)',
    'hsl(43, 84%, 65%)'
]

let dailyArray = datos.map(item => item.timeframes.daily)
let weeklyArray = datos.map(item => item.timeframes.weekly)
let monthlyArray = datos.map(item => item.timeframes.monthly)

let dailyBtn = document.querySelector('#daily')
let weeklyBtn = document.querySelector('#weekly')
let monthlyBtn = document.querySelector('#monthly')
let secondSection = document.querySelector('.second-section')


drawElement(dailyArray)

dailyBtn.addEventListener('click', () => {
    drawElement(dailyArray)
})

weeklyBtn.addEventListener('click', () => {
    drawElement(weeklyArray)
})

monthlyBtn.addEventListener('click', () => {
    drawElement(monthlyArray)
})


function drawElement(array) {
    secondSection.innerHTML = '';

    array.forEach((element, index) => {
        let title = datos[index].title
        let titleLowerCase = title.toLocaleLowerCase()

        if (titleLowerCase == 'self care') {
            titleLowerCase = 'self-care'
        }

        console.log(title);
        secondSection.innerHTML += `
        <div class="card">
            <div class="card__backgroung" style="background-color: ${bgColors[index]}">
                <img class="card__image" src="images/icon-${titleLowerCase}.svg" alt="" />
            </div>
            <div class="card__details">
                <div class="card__activity">
                    <div class="card__title">${title}</div>
                    <img
                    class="card__dots"
                    src="images/icon-ellipsis.svg"
                    alt="three dots"
                    />
                </div>
                <div class="card__time">
                    <p class="card__hour">${element.current}hrs</p>
                    <p class="card__previous">Previous - ${element.previous}hrs</p>
                </div>
            </div>
      </div>
        `
    })
}