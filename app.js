const questiondisplay = document.querySelector('#questions')
const answerdisplay = document.querySelector('#answer')

const questions = [
{
    id: 0,
    text: "Are you of legal drinking age where you are?",
    answers: [
        {
            text: "Yes"
        },
        {
            text: "No"
        }
    ]

},
{
    id: 1,
    text: "What spirit needs to be the base of this drink?",
    answers: [
        {
            text: "Bourbon",
            image: "",
            alt: "Blanton's Bourbon",
            credit: "",
        },
        {
            text: "Vodka",
            image: "",
            alt: "Grey Goose Vodka",
            credit: "",
        },
        {
            text: "Gin",
            image: "",
            alt: "Bombay Sapphire Gin",
            credit: "",
        },
        {
            text: "Tequila",
            image: "",
            alt: "Casamigos Tequila",
            credit: "",
        }
    ]

},
{
    id: 2,
    text: "What flavor do you need in this drink?",
    answers: [
        {
            text: "Sour",
            image: "",
            alt: "Lemon",
            credit: "",
        },
        {
            text: "Sweet",
            image: "",
            alt: "Sugar",
            credit: "",
        },
        {
            text: "Bitter",
            image: "",
            alt: "Coffee",
            credit: "",
        },
        {
            text: "Spicy",
            image: "",
            alt: "Chili Pepper",
            credit: "",
        }
    ]
},
{
    id: 3,
    text: "How many people are here currently?",
    answers: [
        {
            text: "It's just me",
            image: "",
            alt: "",
            credit: "",
        },
        {
            text: "Myself and a friend",
            image: "",
            alt: "",
            credit: "",
        },
        {
            text: "A small gathering of friends",
            image: "",
            alt: "",
            credit: "",
        },
        {
            text: "A large group",
            image: "",
            alt: "",
            credit: "",
        }
    ]
}
]

const populateQuestions = () => {
    questions.forEach(question => {
        const titleBlock = document.createElement('div')
        titleBlock.id = question.id
        titleBlock.classList.add('title-block')
        const titleHeading = document.createElement('h2')
        titleHeading.textContent = question.text 
        titleBlock.append(titleHeading)
        questiondisplay.append(titleBlock)

        const answersBlock = document.createElement('div')
        answersBlock.id = quesition.id + "-questions"
        answersBlock.classList.add('answer-options')

        question.answers.forEach(answer => { const answerBlock = document.createElement('div')})
        answerBlock.classList.add('answer-block')
        answerBlock.addEventListener('click', handleClick)
        const answerImage = document.createElement('img')
        answerImage.setAttribute('src', answer.image)
        answerImage.setAttribute('alt', answer.alt)

        const answerTitle = document.createElement('h3')
        answerTitle.textContent = answer.text 


        answerBlock.append(answerImage, answerTitle)
        

    })

    questiondisplay.append(answersBlock)
}
populateQuestions()

const handleClick = () => {
    console.log('clicked')
}