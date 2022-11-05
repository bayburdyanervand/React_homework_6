import {createStore} from "redux";
import {ADD_CAR} from "./constant/constant";
import {ADD_MUS} from "./constant/constant";
import {DEL} from "./constant/constant";

const store = createStore(function (state, action) {
    switch (action.type) {
        case ADD_CAR:
            return {
                ...state,
                cars: [
                    ...state.cars,
                    {
                        id: Math.random(),
                        name: action.payload.name,
                        year: action.payload.year
                    }
                ]
            }
        case ADD_MUS:
            return {
                ...state,
                music: [
                    ...state.music,
                    {
                        id: Math.random(),
                        singer: action.payload.singer,
                        song: action.payload.song
                    }
                ]
            }
        case DEL:
            return state.filter((elem) => elem.id !== action.payload.id)
        default:
            return state
    }

}, {
    cars: [
        {
            id: Math.random(),
            name: 'Audi',
            speed: 234.45,
            year: 2010,

        },
        {
            id: Math.random(),
            name: 'BMW',
            speed: 200,
            year: 2000,

        },
        {
            id: Math.random(),
            name: 'Mercedes',
            speed: 220,
            year: 2001,

        },
    ],
    music: [
        {
            id: Math.random(),
            singer: 'Ирина Аллегрова',
            song: 'Угнала Тебя, Угнала',
            duration: 3.12
        },
        {
            id: Math.random(),
            singer: 'Miyagi & Эндшпиль',
            song: 'Не Теряя',
            duration: 3.00
        },
        {
            id: Math.random(),
            singer: 'Dj Smash, Nivesta',
            song: 'Позвони',
            duration: 3.00
        }
    ]
})

export default store