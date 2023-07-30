const HiddenButton = document.querySelector("button");
const Games = document.getElementById("Games");
const Objects = document.getElementById("Objects");
const Points = document.getElementById("Points");
const Timer = document.getElementById("Timer");
let GetTimer = 30;
let IntervalCounter = 1000; // Change the interval to 1 second (1000 milliseconds)
let GetPoints = 0;
let Interval;
let Colors = [`#C8CEFC`, `#C8FCE8`, `#E3EA01`, `#8E56F7`, `#F756D7`, `#0A2395`, `#FF0000`, `#00FFFB`];
let ColorsTwo = [`blue`, `green`, `red`, `orange`, `purple`, `pink`, `white`, `black`];

function initializeGame() {
    // Reset the game state
    GetPoints = 0;
    HiddenButton.style.display = 'block';
    Objects.style.display = 'none';
    Games.style.backgroundColor = ''; // Reset background color
}

function startGame() {
    Points.textContent = 'POINT: ' + GetPoints;
    Timer.textContent = 'TIMER: ' + GetTimer;
    initializeGame(); // Reset the game when starting
    HiddenButton.style.display = 'none';
    Objects.style.display = 'block';
    Interval = setInterval(startTimer, IntervalCounter);
    changeBackgroundColor(); // Change the background color initially
}

function changeBackgroundColor() {
    let RandomIndex = Math.floor(Math.random() * Colors.length);
    let RandomColors = Colors[RandomIndex];
    Games.style.backgroundColor = RandomColors;
}

if (Objects && Points && Timer) {
    // Check if the required elements exist before updating text content
    Points.textContent = 'POINT: ' + GetPoints;
    Timer.textContent = 'TIMER: ' + GetTimer;

    Objects.addEventListener('click', function () {
        GetPoints++;
        Points.textContent = 'POINT: ' + GetPoints;
        let RandomPosX = Math.floor(Math.random() * 1000);
        let RandomPosY = Math.floor(Math.random() * 300);
        let RandomIndexTwo = Math.floor(Math.random() * ColorsTwo.length);
        let RandomColorsTwo = ColorsTwo[RandomIndexTwo];
        let RandomScale = Math.floor(Math.random() * 100);

        if (RandomScale < 20) {
            RandomScale = 50;
        }

        Objects.style.marginLeft = RandomPosX + 'px';
        Objects.style.marginTop = RandomPosY + 'px';
        Objects.style.backgroundColor = RandomColorsTwo;
        Objects.style.width = RandomScale + 'px';
        Objects.style.height = RandomScale + 'px';
        changeBackgroundColor(); // Change the background color whenever a new object appears
    });
}

function startTimer() {
    GetTimer--;
    if (Timer) {
        Timer.textContent = 'TIMER: ' + GetTimer;
    }

    if (GetTimer < 1) {
        clearInterval(Interval);
        EndGame();
    }
}

function EndGame() {
    swal('Your Time Is Out!', 'Your Score Is ' + GetPoints, {
        button: 'Play Again',
    }).then(() => {
        startGame(); // Restart the game when the user clicks "Play Again"
    });
}

initializeGame(); // Initialize the game on page load