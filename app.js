const questionDisplay = document.querySelector('#questions')
const answerDisplay = document.querySelector('#answer')

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
            text: "Whiskey",
            image: "https://images.unsplash.com/photo-1574713600544-ca13b5d573d5?q=80&w=1615&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "Whiskey barrels in a rickhouse",
            credit: "Photo by Daniel Norris on Unsplash",
        },
        {
            text: "Vodka",
            image: "https://images.unsplash.com/photo-1595430712287-744ad635e266?q=80&w=1508&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "A bottle of Absolut Vodka",
            credit: "Photo by Tim Rüßmann on Unsplash",
        },
        {
            text: "Gin",
            image: "https://images.unsplash.com/photo-1597512651354-853bb81bcdad?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "Juniper Berries",
            credit: "Photo by Sébastien Noël on Unsplash",
        },
        {
            text: "Rum",
            image: "https://images.unsplash.com/photo-1613140506142-277c6241b858?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "A bottle of Kraken Rum",
            credit: "Photo by Knighthawk Shoots on Unsplash",
        }
    ]

},
{
    id: 2,
    text: "What flavor do you need in this drink?",
    answers: [
        {
            text: "Sour",
            image: "https://images.unsplash.com/photo-1568569350062-ebfa3cb195df?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "Lemon",
            credit: "Photo by Han Lahandoe on Unsplash",
        },
        {
            text: "Sweet",
            image: "https://images.unsplash.com/photo-1585155113372-6c1808141bf3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "Sugar Cane",
            credit: "Photo by Victoria Priessnitz on Unsplash",
        },
        {
            text: "Bitter",
            image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=1522&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "Coffee Beans",
            credit: "Photo by Mike Kenneally on Unsplash",
        },
        {
            text: "Spicy",
            image: "https://images.unsplash.com/photo-1546860255-95536c19724e?q=80&w=1608&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "Chili Peppers",
            credit: "Photo by Shane Kong on Unsplash",
        }
    ]
}
]

const answers = [
    {
        combination: ["Yes", "Whiskey", "Sour"],
        text: "Whiskey Sour",
        image: "",
        alt: ""
    },
    {
        combination: ["Yes", "Whiskey", "Sweet"],
        text: "Mint Julep",
        image: "",
        alt: ""
    },
    {
        combination: ["Yes", "Whiskey", "Bitter"],
        text: "Old Fashioned",
        image: "",
        alt: ""
    },
    {
        combination: ["Yes", "Whiskey", "Spicy"],
        text: "Spicy Bourbon Sidecar",
        image: "",
        alt: ""
    },
    {
        combination: ["Yes", "Vodka", "Sour"],
        text: "Lemon Drop",
        image: "",
        alt: ""
    },
    {
        combination: ["Yes", "Vodka", "Sweet"],
        text: "Cape Codder/Vodka Cranberry",
        image: "",
        alt: ""
    },
    {
        combination: ["Yes", "Vodka", "Bitter"],
        text: "Espresso Martini",
        image: "",
        alt: ""
    },
    {
        combination: ["Yes", "Vodka", "Spicy"],
        text: "Bloody Mary",
        image: "",
        alt: ""
    },
    {
        combination: ["Yes", "Gin", "Sour"],
        text: "Tom Collins",
        image: "",
        alt: ""
    },
    {
        combination: ["Yes", "Gin", "Sweet"],
        text: "Bramble",
        image: "",
        alt: ""
    },
    {
        combination: ["Yes", "Gin", "Bitter"],
        text: "Negroni",
        image: "",
        alt: ""
    },
    {
        combination: ["Yes", "Gin", "Spicy"],
        text: "Bee Sting",
        image: "",
        alt: ""
    },
    {
        combination: ["Yes", "Rum", "Sour"],
        text: "Lime Daquiri",
        image: "",
        alt: ""
    },
    {
        combination: ["Yes", "Rum", "Sweet"],
        text: "Hurricane, This is Gentleman Gator's favorite",
        image: "",
        alt: ""
    },
    {
        combination: ["Yes", "Rum", "Bitter"],
        text: "Rumpari",
        image: "",
        alt: ""
    },
    {
        combination: ["Yes", "Rum", "Spicy"],
        text: "Spiced Rum Mojito",
        image: "",
        alt: ""
    },
    {
        combination: ["No"],
        text: "",
        image: "",
        alt: ""
    }
]
// need to have a default answer to compensate for lack of combination data

const unansweredQuestions = []
const chosenAnswers = []

const populateQuestions = () => {
    questions.forEach(question => {
        const titleBlock = document.createElement('div')
        titleBlock.id = question.id
        titleBlock.classList.add('title-block')
        const titleHeading = document.createElement('h2')
        titleHeading.textContent = question.text
        titleBlock.append(titleHeading)
        questionDisplay.append(titleBlock)

        const answersBlock = document.createElement('div')
        answersBlock.id = question.id + "-questions"
        answersBlock.classList.add('answer-options')

        unansweredQuestions.push(question.id)

        question.answers.forEach(answer => {
            const answerBlock = document.createElement('div')
            answerBlock.classList.add('answer-block')
            answerBlock.addEventListener('click', () => handleClick(question.id, answer.text))
            const answerImage = document.createElement('img')
            answerImage.setAttribute('src', answer.image)
            answerImage.setAttribute('alt', answer.alt)

            const answerTitle = document.createElement('h3')
            answerTitle.textContent = answer.text

            const answerInfo = document.createElement('p')
            const imageLink = document.createElement('a')
            imageLink.setAttribute('href', answer.image)
            imageLink.textContent = answer.credit
            const sourceLink = document.createElement('a')
            sourceLink.textContent = 'Unsplash'
            sourceLink.setAttribute('src', 'https://www.unsplash.com')
            answerInfo.append(imageLink, ' to ', sourceLink)

            answerBlock.append(answerImage, answerTitle, answerInfo)

            answersBlock.append(answerBlock)
        })

        questionDisplay.append(answersBlock)

    })
}
populateQuestions()

const handleClick = (questionId, chosenAnswer) => {
    if (unansweredQuestions.includes(questionId))
    chosenAnswers.push(chosenAnswer)
    const itemToRemove = unansweredQuestions.indexOf(questionId)

    if (itemToRemove > -1) {
        unansweredQuestions.splice(itemToRemove, 1)
    }
    console.log(chosenAnswers)
    console.log(unansweredQuestions)

    disableQuestionBlock(questionId, chosenAnswer)
    const lowestQuestionId = Math.min(...unansweredQuestions)
    location.href = '#' + lowestQuestionId

    if (!unansweredQuestions.length) {
        location.href = '#answer'
        showAnswer()
    }
}

const showAnswer = () => {
    let result
    answers.forEach(answer => {
        if (
            chosenAnswers.includes(answer.combination[0]) +
            chosenAnswers.includes(answer.combination[1]) +
            chosenAnswers.includes(answer.combination[2])
        ) {
            result = answer
            return
        } else if (!result) {
            //first answer object is default
            result = answers[0]
        }
    })

    const answerBlock = document.createElement('div')
    answerBlock.classList.add('result-block')
    const answerTitle = document.createElement('h3')
    answerTitle.textContent = result.text
    const answerImage = document.createElement('img')
    answerImage.setAttribute('src', result.image)
    answerImage.setAttribute('alt', result.alt)

    answerBlock.append(answerTitle, answerImage)

    answerDisplay.append(answerBlock)

    const allAnswerBlocks = document.querySelectorAll('.answer-block')
    Array.from(allAnswerBlocks).forEach(answerBlock => answerBlock.replaceWith(answerBlock.cloneNode(true)))

}

const disableQuestionBlock = (questionId, chosenAnswer) => {
    const currentQuestionBlock = document.getElementById(questionId + "-questions")

    Array.from(currentQuestionBlock.children).forEach(block => {
        if (block.children.item(1).innerText !== chosenAnswer) {
            block.style.opacity = "50%"
        }
    })
}