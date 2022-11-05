const initialCar = [
    {
        id: Math.random(),
        name: 'Audi',
        speed: 234.45,
        weight: 1.4,

    },
    {
        id: Math.random(),
        name: 'BMW',
        speed: 200,
        weight: 1.7,

    },
    {
        id: Math.random(),
        name: 'Mercedes',
        speed: 220,
        weight: 1.1,

    },


]

function carReducer(state = initialCar, action) {
    console.log(action);
    switch (action.type) {
        case 'add-car':
            return [
                ...state,
                {
                    id: Math.random(),
                    name: action.payload,
                    year: action.payload,
                }
            ]
        default:
            return state

    }

}



