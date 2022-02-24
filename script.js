
/*----- cached element references -----*/

let enterStageName = document.querySelector("#enterStageName");

let inputStageName = document.querySelector("#inputStageName");

let displayLyrics = document.querySelector("#displayLyrics");

let showLyrics = document.getElementById("showLyrics");

let choicesText = document.querySelector("#choicesText");

let currentPerformerName = document.querySelector("#currentPerformerName");

let guessListCorrect = document.querySelector("#guessListCorrect");

let guessListIncorrect = document.querySelector("#guessListIncorrect");

const letsPlayButton = document.querySelector("#letsPlayButton");

const nextButton = document.querySelector("#nextButton");

const choiceA = document.querySelector("#choiceAP");
const choiceB = document.querySelector("#choiceBP");
const choiceC = document.querySelector("#choiceCP");
const choiceD = document.querySelector("#choiceDP");

let currentQuestionIndex = 0;
let correctGuesses = [];
let incorrectGuesses = [];
let hasBeenPlayed = [];

let performerStatus = document.querySelector("#performerStatus");

let performerStatusP = document.querySelector("#performerStatusP");

let resultMessage = document.querySelector("#resultMessage");

let blankRules1 = document.getElementById("instructions1");

let blankRules2 = document.getElementById("sideBarInstructions");

let resetButton = document.getElementById("resetButton");

let timeoutID;

function playSong (song, timeout = 20000, currentTime = 10) {
    const audioElement = document.querySelector("#audioPlayer");
    if (timeoutID) {
        clearTimeout(timeoutID);
        }
    timeoutID = setTimeout(function () {
        audioElement.pause();
        },timeout)
    audioElement.src = song;
    audioElement.currentTime = currentTime;
    audioElement.volume = 0.5;
    setTimeout (function() {
        audioElement.play();
    }, 1000)
}

const lyrics = [
    {
        lyricSnippet: "We're talking away / I don't know what I'm to say / I'll say it anyway / Today's another day to find you / Shying away / I'll be coming for your love, okay?", // Take on Me - A-ha
        answers: [
        "Take on Me by A-ha",
        "Super Freak by Rick James", 
        "Purple Rain by Prince",
        "Express Yourself by Madonna",
        ],
        
        play: function () {
            playSong("music/TakeOnMe.mp3", 42000, 0)
        },
        correctAnswer: "choiceA",
        incorrectAnswers: ["choiceB", "choiceC", "choiceD"],
        hasBeenPlayed: false,
    },
    {
        lyricSnippet: "Clock strikes upon the hour / And the sun begins to fade / Still enough time to figure out / How to chase my blues away / I've done alright up 'til now / It's the light of day that shows me how / And when the night falls / Loneliness calls", // I Wanna Dance with Somebody - Whitney Houston
        answers: [
            "Come on Eileen by Dexys Midnight Runners", 
            "Time After Time by Cyndi Lauper", 
            "I Wanna Dance with Somebody by Whitney Houston",
            "It's the End of the World as we Know it by R.E.M.",
            ],
            play: function () {
                    playSong("music/IWannaDanceWithSomebody.mp3", 33000, 30)
            
            },
            correctAnswer: "choiceC",
            incorrectAnswers: ["choiceA", "choiceB", "choiceD"],
            hasBeenPlayed: false,
    },
    {
        lyricSnippet: "I come home, in the mornin' light / My mother says 'When you gonna live your life right?' / Oh momma dear, we're not the fortunate ones", // Girls Just Wanna Have Fun - Cyndi Lauper
        answers: [
            "Never Gonna Give You Up by Rick Astley",
            "Should I Stay or Should I Go by the Clash",
            "Karma Chameleon by Culture Club",
            "Girls Just Wanna Have Fun by Cyndi Lauper",
            ],
        play: function () {
            playSong("music/GirlsJustWannaHaveFun.mp3", 28000, 0)
        
        },
            correctAnswer: "choiceD",
            incorrectAnswers: ["choiceA", "choiceB", "choiceC"],
            hasBeenPlayed: false,
        },
    {
        lyricSnippet: "Every now and then I fall apart! / And I need you now tonight / And I need you more than ever / And if you only hold me tight / We'll be holding on forever / And we'll only be making it right / 'Cause we'll never be wrong / Together we can take it to the end of the line / Your love is like a shadow on me...", // Total Eclipse of the Heart - Bonnie Tyler
        answers: [
            "With or Without You by U2",
            "Total Eclipse of the Heart by Bonnie Tyler", 
            "All Night Long by Lionel Richie",
            "Every Breath you Take by The Police",
            ],
        play: function () {
                playSong("music/TotalEclipseOfTheHeart.mp3", 30000, 46)
        },
            correctAnswer: "choiceB",
            incorrectAnswers: ["choiceA", "choiceC", "choiceD"],
            hasBeenPlayed: false,
    },
    {
        lyricSnippet: "They told him, 'Don't you ever come around here' / 'Don't wanna see your face, you better disappear' / The fire's in their eyes and their words are really clear / So ...", // Beat it - Michael Jackson
        answers: [
            "Beat it by Michael Jackson", 
            "Free Fallin' by Tom Petty",
            "Dancing in the Dark by Bruce Springsteen",
            "What's Love Got to Do With It by Tina Turner",
            ],
            play: function () {
                playSong("music/BeatIt.mp3", 22000, 27)
            },
            correctAnswer: "choiceA",
            incorrectAnswers: ["choiceB", "choiceC", "choiceD"],
            hasBeenPlayed: false,
    },
    {
        lyricSnippet: " ... are made of this / Who am I to disagree / I travel the world and the seven seas / Everybody's looking for something / Some of them want to use you / Some of them want to get used by ...", // Sweet Dreams (Are Made of this) - Annie Lennox, Dave Stewart, and Eurthymics
        answers: [    
            "Don't You (Forget About Me) by Simple Minds",
            "Under Pressure by Queen & David Bowie",
            "Sweet Dreams (Are Made of this) by Annie Lennox, Dave Stewart, and Eurthymics",
            "Where Is My Mind? by the Pixies", 
            ],
            play: function () {
                playSong("music/SweetDreams.mp3")
            },
            correctAnswer: "choiceC",
            incorrectAnswers: ["choiceA", "choiceB", "choiceD"],
            hasBeenPlayed: false,
    },
    {
        lyricSnippet: "Woman, you want me, give me a sign / And catch my breathing even closer behind / Do do do do do do do dodo dododo dodo / In touch with the ground / I'm on the hunt I'm after you / Smell like I sound, I'm lost in a...", // Hungry Like the Wolf - Duran Duran
        answers: [    
            "Push It by Salt-N-Pepa",
            "Tainted Love by Soft Cell", 
            "We Got the Beat by the Go-Go’s", 
            "Hungry Like the Wolf by Duran Duran",
            ],
            play: function () {
                playSong("music/HungryLikeTheWolf.mp3", 25000, 22)
            },
            correctAnswer: "choiceD",
            incorrectAnswers: ["choiceA", "choiceB", "choiceC"],
            hasBeenPlayed: false,
    },
    {
        lyricSnippet: "Razzle 'n' a dazzle 'n' a flash a little light / Television lover, baby, go all night / Sometime, anytime, sugar me sweet / Little miss innocent sugar me, yeah, yeah / Now c'mon, take a bottle, shake it up / Break the bubble, break it up", 
        // Pour Some Sugar On Me - Def Leppard
        answers: [    
            "Whip It by Devo",
            "Pour Some Sugar On Me by Def Leppard",
            "Sweet Child o’ Mine by Guns N’ Roses",
            "I Can’t Go With That by Hall & Oates",
            ],
            //start play at 35 seconds
            play: function () {
                playSong("music/PourSomeSugarOnMe.mp3", 32000, 30)
            },
            correctAnswer: "choiceB",
            incorrectAnswers: ["choiceA", "choiceC", "choiceD"],
            hasBeenPlayed: false,
    },
    {
        lyricSnippet: "Jitterbug / You put the boom-boom into my heart / You send my soul sky-high / When your lovin' starts / Jitterbug into my brain / Goes a bang-bang-bang / 'Til my feet do the same / But something's bugging me / Something ain't right / My best friend told me / What you did last night / You left me sleeping in my bed / I was dreaming / But I should've been with you instead ... ", // Wake Me Up Before You Go-Go
        answers: [    
            "In the Air Tonight by Phil Collins",
            "You Can Call Me Al by Paul Simon",
            "Wake Me Up Before You Go-Go by Wham!",
            "I Can’t Go With That by Hall & Oates",
            ],
            play: function () {
                playSong("music/WakeMeUpBeforeYouGoGo.mp3", 28000, 10)
            },
            correctAnswer: "choiceC",
            incorrectAnswers: ["choiceA", "choiceB", "choiceD"],
            hasBeenPlayed: false,
    },
    {
        lyricSnippet: "He told me several times that he didn't like my kind / 'Cause I was a bit too leisurely / Seems that I was busy doing something close to nothing / But different than the day before / That's when I saw her, ooh, I saw her / She walked in through the out door, out door / She wore a / Raspberry beret / The kind you find in a second hand store", // Raspberry Beret - Prince
        answers: [    
            "Raspberry Beret by Prince",
            "Livin’ on a Prayer by Bon Jovi", 
            "Right Here Waiting by Richard Marx",
            "Summer of ’69 by Bryan Adams",
            ],
            play: function () {
                playSong("music/RaspberryBeret.mp3", 32000, 30)
            },
            correctAnswer: "choiceA",
            incorrectAnswers: ["choiceB", "choiceC", "choiceD"],
            hasBeenPlayed: false,
    },
    {
        lyricSnippet: "Traveling in a fried-out Kombi / On a hippie trail, head full of zombie / I met a strange lady, she made me nervous / She took me in and gave me breakfast / And she ... ", // Down Under - Men at Work
        answers: [    
            "The Tide Is High by Blondie",
            "Sunglasses At Night by Corey Hart",
            "Take Me Home Tonight by Eddie Money",
            "Down Under by Men at Work",
            ],
            play: function () {
                playSong("music/LandDownUnder.mp3")
            },
            correctAnswer: "choiceD",
            incorrectAnswers: ["choiceA", "choiceB", "choiceC"],
            hasBeenPlayed: false,
    },
    {
        lyricSnippet: "He turned to me as if to say / 'Hurry boy, it's waiting there for you' / It's gonna take a lot to drag me away from you / There's nothing that a hundred men or more could ever do / I bless the rains down in...", // Africa - Toto
        answers: [    
            "Uptown Girl by Billy Joel", 
            "True Colors by Cyndi Lauper",
            "Africa by Toto",
            "Waiting For a Girl Like You by Foreigner",
            ],
            play: function () {
                playSong("music/Africa.mp3", 25000, 65)
            },
            correctAnswer: "choiceC",
            incorrectAnswers: ["choiceA", "choiceB", "choiceD"],
            hasBeenPlayed: false,
    },
    
];

let answerButtonsElement = document.querySelectorAll(".answerButtons");

let correctAnswer

/*----- event listeners -----*/

letsPlayButton.addEventListener("click", startGame);

nextButton.addEventListener("click", nextSong);

for(let i=0; i < answerButtonsElement.length; i++) {
    answerButtonsElement[i].addEventListener("click", chooseAnswer);
}

resetButton.addEventListener("click", resetGame);

/*----- functions -----*/

function nextSong () {
    console.log("Next song has been clicked!");
    letsPlayButton.style.visibility="hidden";
    for(let i=0; i < answerButtonsElement.length; i++) {
        answerButtonsElement[i].style.backgroundColor = "#57CFEA";
        answerButtonsElement[i].disabled = false;
    }
    generateRandomLyrics(); 
    resultMessage.innerHTML = "Hmmm...Choose wisely!"
    currentQuestionIndex++;
    console.log(currentQuestionIndex);
    if(currentQuestionIndex === lyrics.length-1) {
        finalScore();
    }
}

function chooseAnswer(event) {
    console.log(event.target.id);
    console.log(correctAnswer);
    event.target.style.backgroundColor = "#FFD540";
    if(correctAnswer === event.target.id) {
        resultMessage.innerHTML = "Correct! You're a rockstar!"
        correctGuesses.push(correctAnswer);
        guessListCorrect.innerHTML = "Encore! You have successfully named " + correctGuesses.length + " tunes!";
        console.log(correctGuesses); 
    }else{
        resultMessage.innerHTML = "Incorrect :( Better luck in the next round!"
        incorrectGuesses.push(incorrectAnswers);
        guessListIncorrect.innerHTML = "Uh-oh! You named " + incorrectGuesses.length + " tunes incorrectly!";
        console.log(incorrectGuesses);
    }
    for(let i=0; i < answerButtonsElement.length; i++) {
        answerButtonsElement[i].disabled = true;
    }
    if(correctGuesses.length <= 3 ) {
        performerStatusP.innerHTML = "80s GarageBand";
    }else if(correctGuesses.length > 3 && correctGuesses.length <= 5) {
        performerStatusP.innerHTML = "80s Rising Star";
    }else if(correctGuesses.length > 5) {
        performerStatusP.innerHTML = "80s Icon!";
    }
}

function finalScore () {
    function removeAllChildNodes(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }
        let parentButton = document.getElementById("button-container");
        removeAllChildNodes(parentButton);

        nextButton.style.visibility ="hidden";

        letsPlayButton.style.visibility = "visible";

        resultMessage.innerHTML = "";

        blankRules1.innerHTML = "";

        blankRules2.innerHTML = "";
    
        if(correctGuesses.length <= 3 ) {
            guessListCorrect.innerHTML = "Final Score: ";
            guessListIncorrect.innerHTML = + correctGuesses.length + " OUT OF " + " 10";
            displayLyrics.innerHTML = "You achieved '80s Garage Band' status! Keep strumming that air guitar, and increase your status next time!";
            performerStatusP.innerHTML = "NOT A WIN :( ";
            
        }else if(correctGuesses.length > 3 && correctGuesses.length <= 5) {
            guessListCorrect.innerHTML = "Final Score: ";
            guessListIncorrect.innerHTML = + correctGuesses.length + " OUT OF " + " 10";
            displayLyrics.innerHTML = "You achieved '80s Rising Star' status! Keep singing in the car and increase your status next time!";
            performerStatusP.innerHTML = "NOT A WIN :( ";

        }else if(correctGuesses.length > 5) {
            guessListCorrect.innerHTML = "Final Score: ";
            guessListIncorrect.innerHTML = + correctGuesses.length + " OUT OF " + " 10";
            displayLyrics.innerHTML = "You achieved '80s ICON' status! Keep selling out those shows until next time!";
            performerStatusP.innerHTML = "WINNER! :)";
        }
        resetButton.style.visibility ="visible";

}

function startGame () {
    letsPlayButton.style.visibility="hidden";
    console.log("Clicked! Great start!");
    if(inputStageName.value !== null) {
        enterStageName.innerHTML = "CURRENTLY ON STAGE: " + inputStageName.value
        inputStageName.style.visibility="hidden";
      }
    currentQuestionIndex = 0;
    nextSong();
}

function generateRandomLyrics () {

        let nextLyric;
        do {
            nextLyric = Math.floor(Math.random() * lyrics.length);
        } 
        while( hasBeenPlayed.includes(nextLyric) )

        hasBeenPlayed.push(nextLyric)

        showLyrics.innerHTML = lyrics[nextLyric].lyricSnippet;
        
        choiceAP.innerHTML = lyrics[nextLyric].answers[0]
        choiceBP.innerHTML = lyrics[nextLyric].answers[1]
        choiceCP.innerHTML = lyrics[nextLyric].answers[2]
        choiceDP.innerHTML = lyrics[nextLyric].answers[3]

        lyrics[nextLyric].play();
        
        correctAnswer = lyrics[nextLyric].correctAnswer

        incorrectAnswers = lyrics[nextLyric].incorrectAnswers[0, 1, 2]
    }

    function resetGame () {
        location.reload();
    }
