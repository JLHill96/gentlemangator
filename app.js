const questionDisplay = document.querySelector('#questions')
const answerDisplay = document.querySelector('#answer')

const questions = [
{
    id: 0,
    text: "Are you of legal drinking age where you are?",
    answers: [
        {
            text: "Yes",
            image: "https://images.unsplash.com/photo-1574352592361-32d1327beef6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "Yes",
            credit: "Photo by Michèle Eckert",
        },
        {
            text: "No",
            image: "https://images.unsplash.com/photo-1566004100631-35d015d6a491?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "Baby under a purple blanket",
            credit: "Photo by Jonathan Borba",
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
            credit: "Photo by Daniel Norris",
        },
        {
            text: "Vodka",
            image: "https://images.unsplash.com/photo-1595430712287-744ad635e266?q=80&w=1508&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "A bottle of Absolut Vodka",
            credit: "Photo by Tim Rüßmann",
        },
        {
            text: "Gin",
            image: "https://images.unsplash.com/photo-1597512651354-853bb81bcdad?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "Juniper Berries",
            credit: "Photo by Sébastien Noël",
        },
        {
            text: "Rum",
            image: "https://images.unsplash.com/photo-1613140506142-277c6241b858?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "A bottle of Kraken Rum",
            credit: "Photo by Knighthawk Shoots",
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
            credit: "Photo by Han Lahandoe",
        },
        {
            text: "Sweet",
            image: "https://images.unsplash.com/photo-1585155113372-6c1808141bf3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "Sugar Cane",
            credit: "Photo by Victoria Priessnitz",
        },
        {
            text: "Bitter",
            image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=1522&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "Coffee Beans",
            credit: "Photo by Mike Kenneally",
        },
        {
            text: "Spicy",
            image: "https://images.unsplash.com/photo-1546860255-95536c19724e?q=80&w=1608&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "Chili Peppers",
            credit: "Photo by Shane Kong",
        }
    ]
}
]

const answers = [
    {
        combination: ["Yes", "Whiskey", "Sour"],
        text: "Whiskey Sour",
        image: "https://t3.ftcdn.net/jpg/04/40/87/10/360_F_440871033_YuaqyTmkWAaQLq439g4PWhVcGe4vBMp7.jpg",
        alt: "Whiskey Sour"
    },
    {
        combination: ["Yes", "Whiskey", "Sweet"],
        text: "Mint Julep",
        image: "https://media.istockphoto.com/id/949615752/photo/homemade-kentucky-mint-julep.jpg?s=612x612&w=0&k=20&c=18B9u88-6KN6WGFTGRc6sz9MpSoywHXPWgCWoaw1gr8=",
        alt: "Mint Julep"
    },
    {
        combination: ["Yes", "Whiskey", "Bitter"],
        text: "Old Fashioned",
        image: "https://plus.unsplash.com/premium_photo-1671647122992-5de89811f4c8?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b2xkJTIwZmFzaGlvbmVkfGVufDB8fDB8fHww",
        alt: "Old Fashioned"
    },
    {
        combination: ["Yes", "Whiskey", "Spicy"],
        text: "Spicy Bourbon Sidecar",
        image: "https://images.unsplash.com/photo-1512103865222-dcf9531c9961?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Spicy Bourbon Sidecar"
    },
    {
        combination: ["Yes", "Vodka", "Sour"],
        text: "Lemon Drop",
        image: "https://images.unsplash.com/photo-1670164704954-aa5829a6c84d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Lemon Drop"
    },
    {
        combination: ["Yes", "Vodka", "Sweet"],
        text: "Cape Codder/Vodka Cranberry",
        image: "https://images.unsplash.com/photo-1652781038612-08b779c71f16?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dm9ka2ElMjBjcmFuYmVycnl8ZW58MHx8MHx8fDA%3D",
        alt: "Vodka Cran"
    },
    {
        combination: ["Yes", "Vodka", "Bitter"],
        text: "Espresso Martini",
        image: "https://images.unsplash.com/photo-1607687331899-4f157b139583?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Espresso Martini"
    },
    {
        combination: ["Yes", "Vodka", "Spicy"],
        text: "Bloody Mary",
        image: "https://images.unsplash.com/photo-1541546339599-ecdbfcf77378?q=80&w=1452&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Bloody Mary"
    },
    {
        combination: ["Yes", "Gin", "Sour"],
        text: "Tom Collins",
        image: "https://media.istockphoto.com/id/537640882/photo/refreshing-classic-tom-collins-cocktail.jpg?s=612x612&w=0&k=20&c=nhkPvxcVpmowmaf4GALp_z_sY9_P-kbQXniUk1-B5uc=",
        alt: "Tom Collins"
    },
    {
        combination: ["Yes", "Gin", "Sweet"],
        text: "Bramble",
        image: "https://images.unsplash.com/photo-1500217052183-bc01eee1a74e?q=80&w=1588&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Gin Bramble"
    },
    {
        combination: ["Yes", "Gin", "Bitter"],
        text: "Negroni",
        image: "https://images.unsplash.com/photo-1626688445658-c948f32d68ba?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Negroni"
    },
    {
        combination: ["Yes", "Gin", "Spicy"],
        text: "Bee Sting",
        image: "https://theboozyginger.com/wp-content/uploads/2023/11/Bee-Sting-6-683x1024.jpg",
        alt: "Bee Sting with apple garnish"
    },
    {
        combination: ["Yes", "Rum", "Sour"],
        text: "Lime Daiquiri",
        image: "https://media.istockphoto.com/id/542331848/photo/classic-lime-daiquiri-cocktail.jpg?s=612x612&w=0&k=20&c=8uAW237dHcpstdN--kQH-aNsj8IjpP2DsETMVmTGvno=",
        alt: "Lime Daiquiri"
    },
    {
        combination: ["Yes", "Rum", "Sweet"],
        text: "Hurricane, This is Gentleman Gator's favorite",
        image: "https://media.istockphoto.com/id/1451354359/photo/hurricane-classic-alcoholic-cocktail-with-dark-and-white-rum-ice-syrup-grenadine-pineapple.jpg?s=612x612&w=0&k=20&c=hTqqS1RtUI7DZz7ex6BgUtxBsBsjXWqWvakyASc1cy8=",
        alt: "Hurricane drink"
    },
    {
        combination: ["Yes", "Rum", "Bitter"],
        text: "Rumpari",
        image: "https://media.istockphoto.com/id/1129164770/photo/splashing-negroni-cocktail-isolated-on-white.jpg?s=612x612&w=0&k=20&c=hD7eDhECgyTUPJ9qIsVlWnifxhXQTIWahFv2A0FAALo=",
        alt: "Rumpari mid air"
    },
    {
        combination: ["Yes", "Rum", "Spicy"],
        text: "Spiced Rum Mojito",
        image: "https://www.marlinmag.com/wp-content/uploads/2023/05/spicey-mojito-cocktail.jpg",
        alt: "Spicy Mojito"
    },
    {
        combination: ["No"],
        text: "Root Beer! Sorry, you aren't of legal drinking age.",
        image: "https://thumbs.dreamstime.com/b/root-beer-float-tasty-summer-treat-green-tree-background-40652616.jpg",
        alt: "Root beer float"
    }
]

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
            chosenAnswers.includes(answer.combination[0]) &
            chosenAnswers.includes(answer.combination[1]) &
            chosenAnswers.includes(answer.combination[2])
        ) {
            result = answer
            return
        } else if (!result) {
            result = answers [16]
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
