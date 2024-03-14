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
},
{
    id: 3,
    text: "How many people are here currently?",
    answers: [
        {
            text: "It's just me",
            image: "https://images.unsplash.com/photo-1542029001094-3396a824ba27?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "A single chair",
            credit: "Photo by Markus Spiske on Unsplash",
        },
        {
            text: "Myself and a friend",
            image: "https://images.unsplash.com/photo-1581994574720-f60299904853?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "A table for two at a restaturant",
            credit: "Photo by Evelyn Semenyuk on Unsplash",
        },
        {
            text: "A small gathering of friends",
            image: "https://images.unsplash.com/photo-1529903384028-929ae5dccdf1?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "Four women sitting on a bench next to a dog",
            credit: "Photo by Chris Murray on Unsplash",
        },
        {
            text: "A large group",
            image: "https://images.unsplash.com/photo-1581954548122-4dff8989c0f7?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "Many people at a table for a dinner party",
            credit: "Photo by Sebastian Coman Photography on Unsplash",
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