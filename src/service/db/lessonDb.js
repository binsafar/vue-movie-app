import mainImg from "../../assets/videos/mainvideo.png"
import readImg1 from "../../assets/videos/readmore1.png"
import readImg2 from "../../assets/videos/readmore2.png"
import teacherImg from "../../assets/img/header_avatar.png"
import studentImg from "../../assets/img/user_avatar.png"

let lessonDb = {
    id: 1,
    img: mainImg,
    lessonIn: 'Знакомство',
    lessonName: '2. Тренды Продаж',
    lessonDesc: 'Дэн представляет себя, класс, то, что вы узнаете, и объясняет, почему для всех.',
    readMore: [{
        id: 1, type: 'Статья', desc: 'Прогнозы трендов продаж на ближайшие пять лет', img: readImg1
    }, {
        id: 2, type: 'Статья', desc: 'Как себя вели тренды продаж прошедшие 10 лет', img: readImg2
    }],
    cardsInfo: {
        author: {
            id: 1, img: '', name: 'Даниэль Пинк'
        }, lessonScore: {
            id: 1, completed: 13, total: 20
        }, lessons: {
            id: 1, amount: 2
        }, student: {
            id: 1, img: '', name: 'Хасан Ш.'
        }
    },
    lessons: [{
        id: 1, name: 'Знакомство', lessons: [{
            id: 1,
            name: '1. Встречайте, Даниэль Пинк',
            duration: '8 мин',
            desc: 'Дэн представляет себя, класс, то, что вы узнаете, и объясняет, почему для всех.'
        }, {
            id: 2,
            name: '2. Тренды Продаж',
            duration: '8 мин',
            desc: 'Дэн представляет себя, класс, то, что вы узнаете, и объясняет, почему для всех.'
        }, {
            id: 3,
            name: 'Встречайте, Даниэль Пинк',
            duration: '8 мин',
            desc: 'Дэн представляет себя, класс, то, что вы узнаете, и объясняет, почему для всех.'
        }, {
            id: 4,
            name: 'Встречайте, Даниэль Пинк',
            duration: '8 мин',
            desc: 'Дэн представляет себя, класс, то, что вы узнаете, и объясняет, почему для всех.'
        }],
    },
        {
            id: 2, name: 'Теория', lessons: [{
                id: 1,
                name: '5. Создание карты обсуждения',
                duration: '8 мин',
                desc: 'Дэн представляет себя, класс, то, что вы узнаете, и объясняет, почему для всех.'
            }, {
                id: 2,
                name: '6. Cделайте сообщение важным',
                duration: '10 мин',
                desc: 'Дэн представляет себя, класс, то, что вы узнаете, и объясняет, почему для всех.'
            }, {
                id: 3,
                name: '7. Побуждение к действиям',
                duration: '10 мин',
                desc: 'Дэн представляет себя, класс, то, что вы узнаете, и объясняет, почему для всех.'
            }, {
                id: 4,
                name: '8. Побуждение к действиям',
                duration: '10 мин',
                desc: 'Дэн представляет себя, класс, то, что вы узнаете, и объясняет, почему для всех.'
            }],
        }
    ]
}
export default lessonDb