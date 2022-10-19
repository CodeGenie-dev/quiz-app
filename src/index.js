const fireworksDiv = document.querySelector('.fireworksDiv')


// Create and reference video element
const vid = document.createElement('video');
const themeAudio = document.getElementById("audio1");
const hahaAudio = document.getElementById("audio2")
const screamAudio = document.getElementById("audio3")
const krustyAudio = document.getElementById("audio4")
const dohAudio = document.getElementById("audio5")
const excellentAudio = document.getElementById("audio6")
const woohooAudio = document.getElementById("audio7")
const loser1Audio = document.getElementById("audio8")
const loser2Audio = document.getElementById("audio9")
const iWinAudio = document.getElementById("audio10")
const victoryAudio = document.getElementById("audio11")


// Add class for styling
vid.classList.add('playing');

// Add a src to .vid
vid.src = '../assets/sounds/theSimpsons.mp4';

// Load .vid
vid.muted = true;
vid.load();

// Add .vid to body
document.body.appendChild(vid);

// Play video
vid.play();

// Play audio
function autoPlay() {
    themeAudio.play();
}

/* Register ended event to vid
|| After video has ended...
*/
vid.addEventListener('ended', function(e) {

    // Pause vid
    // vid.pause()

    /* Reset time played. This method used
    || along with .pause() is equivelant to "stop"
    */
    vid.currentTime = 0;

    // Simulate a `non-playing state`
    vid.classList.remove('playing');

    /* Delay the call to remove vid in order
    || to preserve the fade ouyt effect.
    */
    setTimeout(function() {
            document.body.removeChild(vid);
        }, 2000);
}, false);

const fireworks = new Fireworks(fireworksDiv, {
    autoresize: true,
    opacity: 0.5,
    acceleration: 1.05,
    friction: 0.97,
    gravity: 1.5,
    particles: 50,
    traceLength: 3,
    traceSpeed: 10,
    explosion: 5,
    intensity: 30,
    flickering: 50,
    lineStyle: 'round',
    hue: {
        min: 0,
        max: 360
    },
    delay: {
        min: 30,
        max: 60
    },
    rocketsPoint: {
        min: 50,
        max: 50
    },
    lineWidth: {
        explosion: {
        min: 1,
        max: 3
        },
        trace: {
        min: 1,
        max: 2
        }
    },
    brightness: {
        min: 50,
        max: 80
    },
    sound: {
        enabled: true,
        files: [
        '../assets/sounds/firework1.mp3',
        '../assets/sounds/firework2.mp3',
        '../assets/sounds/firework3.mp3'
        ],
        volume: {
        min: 4,
        max: 8
        }
    },
    decay: {
        min: 0.015,
        max: 0.03
    },
    mouse: {
        click: false,
        move: false,
        max: 1
    }
})

const quizData = [
    {
        question: 'In what year did the first episode of The Simpsons air?',       
        a: '1985',
        b: '1991',
        c: '1989',
        d: '1981',
        answer: 'c',
        img: '../assets/images/homerDonut.png'
    },
    {
        question: 'What\'s the name of the Simpsons\' pet dog?',
        a: 'Itchy',
        b: 'Belvedere',
        c: 'Duffy',
        d: 'Santa\'s Little Helper',
        answer: 'd',
        img: '../assets/images/slh.png'
    },
    {
        question: 'Which cartoon inspired The Itchy & Scratchy Show?',
        a: 'Looney Tunes',
        b: 'Tom and Jerry',
        c: 'Biker Mice',
        d: 'Dexter\'s Laboratory',
        answer: 'b',
        img: '../assets/images/ins.png'
    },
    {
        question: 'What\'s Marge\'s natural hair colour?',
        a: 'Blonde',
        b: 'Blue',
        c: 'Grey',
        d: 'Black',
        answer: 'c',
        img: '../assets/images/marge.png'
    },
    {
        question: 'Who composed The Simpsons\' theme tune?',
        a: 'Danny Brasco',
        b: 'Danny Elfman',
        c: 'Beethoven',
        d: 'Lady Gaga',
        answer: 'b',
        img: '../assets/images/wiggum.png'
    },
    {
        question: 'How many cats have the Simpsons had?',
        a: 'One',
        b: 'Ten',
        c: 'Five',
        d: 'Eight',
        answer: 'c',
        img: '../assets/images/mns.png'
    },
    {
        question: 'What\'s Mr Burns\' catchphrase?',
        a: 'Splendid!',
        b: 'Groovy!',
        c: 'Excellent!',
        d: 'Ay Caramba!',
        answer: 'c',
        img: '../assets/images/Burns.png'
    },
    {
        question: 'How many times has Krusty the Clown been married?',
        a: 'Fifteen',
        b: 'One',
        c: 'Eight',
        d: 'Twelve',
        answer: 'a',
        img: '../assets/images/krusty.png'
    },
    {
        question: 'Which Springfield resident often appears as the Devil?',
        a: 'Reverend Lovejoy',
        b: 'Homer Simpson',
        c: 'Montgomery Burns',
        d: 'Ned Flanders',
        answer: 'd',
        img: '../assets/images/lovejoy.png'
    },
    {
        question: 'What\'s the name of the retirement home where Homer\'s father, Abraham Simpson, lives?',
        a: 'Springfield Care Home',
        b: 'Springfield Retirement Castle',
        c: 'Springfield Home for the Nearly Dead',
        d: 'Springfield Old Folks Home',
        answer: 'b',
        img: '../assets/images/abe.png'
    },
    {
        question: 'What are the names of Marge\'s sisters?',
        a: 'Patty & Selma',
        b: 'Louise & Kathy',
        c: 'Maud & Wilma',
        d: 'Gwenevier & Siobhan',
        answer: 'a',
        img: '../assets/images/pns.png'
    },
    {
        question: 'What\'s Marge\'s maiden name?',
        a: 'Bartholemew',
        b: 'Bordeux',
        c: 'Bouvier',
        d: 'Boris',
        answer: 'c',
        img: '../assets/images/barney.png'
    },
    {
        question: 'What\'s comic book guy\'s real name?',
        a: 'Nerdelbaum Frink Jr.',
        b: 'Greg Cutter',
        c: 'Jeff Albertson',
        d: 'Brian McCoist',
        answer: 'c',
        img: '../assets/images/cbg.png'
    },
    {
        question: 'What\'s the first name of Mr Burns\'s assistant, Mr Smithers?',
        a: 'Wyatt',
        b: 'William',
        c: 'Warren',
        d: 'Waylon',
        answer: 'd',
        img: '../assets/images/smithers.png'
    },
    {
        question: 'How old is Bart?',
        a: '12',
        b: '8',
        c: '10',
        d: '13',
        answer: 'c',
        img: '../assets/images/bart.png'
    },
    {
        question: 'Who did Marge go with to her High School\'s senior prom?',
        a: 'Artie',
        b: 'Homer',
        c: 'Mr Burns',
        d: 'Ned Flanders',
        answer: 'a',
        img: '../assets/images/ned.png'
    },
    {
        question: 'What\'s Lisa\'s IQ?',
        a: '169',
        b: '115',
        c: '159',
        d: '129',
        answer: 'c',
        img: '../assets/images/lisa.png'
    },
    {
        question: 'In season one, episode one, what did Bart want for Christmas?',
        a: 'An Elephant',
        b: 'A Football',
        c: 'A Tattoo',
        d: 'A Watch',
        answer: 'c',
        img: '../assets/images/Bart2.png'
    },
    {
        question: 'Who was Milhouse\'s first girlfriend?',
        a: 'Jessica Gafinkis',
        b: 'Claire Finchley',
        c: 'Shaniqua Jerome',
        d: 'Samantha Stanky',
        answer: 'd',
        img: '../assets/images/milhouse.png'
    },
    {
        question: 'Nelson is a schoolyard bully who commonly uses which of these phrases?',
        a: 'Eat my shorts',
        b: 'Thank you, come again',
        c: 'HA HA!',
        d: 'Smokey!',
        answer: 'c',
        img: '../assets/images/nelson.png'
    }
]

const bodyContainer = document.getElementById('bodyContainer')
const startButton = document.getElementById('start-btn')
const prevBtn = document.getElementById('prev-btn')
const nextBtn = document.getElementById('next-btn')
const questionContainer = document.getElementById('question-container')
const questionElement = document.getElementById('question')    
const answerRadios = document.querySelectorAll('.radio')
const answerA = document.getElementById('answer-a')
const answerB = document.getElementById('answer-b')
const answerC = document.getElementById('answer-c')
const answerD = document.getElementById('answer-d')
const quizCount = document.getElementById('quiz-count')
const img = document.createElement('img')
const img2 = document.createElement('img')
const img3 = document.createElement('img')
const imgOne = document.getElementById('img-one')

let score = 0;
let answered;
let currentQuestionIndex = 0;


startButton.addEventListener('click', startQuiz)

  
function startQuiz() {
    startButton.classList.add('hide')
    questionContainer.classList.remove('hide')
    nextQuestion()
    imgOne.classList.add('hide')
}

function nextQuestion() {
    resetState()
    showQuestion(quizData[currentQuestionIndex])
    if (currentQuestionIndex === quizData.length - 1) {
        nextBtn.innerText = 'Finish'
    }
    quizCount.innerHTML = `<h3>Question ${currentQuestionIndex + 1} of ${quizData.length}</h3>`
}

function prevQuestion () {
    resetState()
    if (currentQuestionIndex === 1) {
        prevBtn.classList.add('hide')
    }
    showQuestion(quizData[currentQuestionIndex - 1])
    quizCount.innerHTML = `<h3>Question ${currentQuestionIndex} of ${quizData.length}</h3>`
}
    
function showQuestion(question) {
    questionElement.innerText = question.question        
    answerA.innerHTML = question.a;
    answerB.innerHTML = question.b;
    answerC.innerHTML = question.c;
    answerD.innerHTML = question.d;
    img.src = question.img
    bodyContainer.appendChild(img).classList.add('question-img')  
    selectedAnswer()
}

nextBtn.addEventListener('click', () => {
    if (answered) {
        if (answered === quizData[currentQuestionIndex].answer) {
            score++
        }
        currentQuestionIndex++                
        if (currentQuestionIndex < quizData.length) {
            prevBtn.classList.remove('hide')
            nextQuestion()
        } else {
            questionContainer.innerHTML = `<h2>You answered ${score} out of ${quizData.length} questions correctly</h2>
            
            <button class='btn' onclick ='location.reload()'>Restart</button>`
            nextBtn.classList.add('hide')
            prevBtn.classList.add('hide')
            
            if (score <= 10) {
                img2.src = '../assets/images/scream.png'
                bodyContainer.appendChild(img2).classList.add('img-left')

                img3.src = '../assets/images/haha.png'
                bodyContainer.appendChild(img3).classList.add('img-right')

                img.classList.add('hide')
                screamAudio.play();
                setTimeout(function() {
                    hahaAudio.play();
                }, 1000);
                setTimeout(function() {
                    loser1Audio.play();
                }, 3000);
            } else if (score > 10 && score <= 15) {
                img2.src = '../assets/images/doh.png'
                bodyContainer.appendChild(img2).classList.add('img-left')

                img3.src = '../assets/images/krustyLaugh.png'
                bodyContainer.appendChild(img3).classList.add('img-right')

                img.classList.add('hide')
                dohAudio.play();
                setTimeout(function() {
                    krustyAudio.play();
                }, 1000);
                setTimeout(function() {
                    loser2Audio.play();
                }, 3000);
            } else if (score > 15 && score <= 19) {
                img2.src = '../assets/images/excellent.png'
                bodyContainer.appendChild(img2).classList.add('img-left')

                img3.src = '../assets/images/woohoo.png'
                bodyContainer.appendChild(img3).classList.add('img-right')

                img.classList.add('hide')
                woohooAudio.play();
                setTimeout(function() {
                    excellentAudio.play();
                }, 1000);
            } else if (score == 20) {
                img2.src = '../assets/images/excellent.png'
                bodyContainer.appendChild(img2).classList.add('img-left')

                img3.src = '../assets/images/woohoo.png'
                bodyContainer.appendChild(img3).classList.add('img-right')

                img.classList.add('hide')
                iWinAudio.play();
                victoryAudio.play();
                setTimeout(function() {
                    excellentAudio.play();
                    fireworks.start()
                }, 7000);
            }
        }
    }
})

prevBtn.addEventListener('click', () => {
    prevQuestion()
    currentQuestionIndex--
    if (score > 0) {
        score--
    }
})

function resetState() {
    nextBtn.innerText ='Next >'
    nextBtn.classList.add('hide')
    answerRadios.forEach(answerRadio => answerRadio.checked = false)
}


function selectedAnswer() {
    answerRadios.forEach(answerRadio => {
        answerRadio.addEventListener('click', () => {                
            nextBtn.classList.remove('hide')
            if (answerRadio.checked) {
                answered = answerRadio.id
            }
            return answered
        })
    })
}