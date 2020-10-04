const initialState = {
    reciepes: [],
    newReciepe: {
        name: '',
        ingredients: [],
        steps: [],
        id: ''
    },
    index: 0
}

export default function RecipeReducer(state = initialState, action) {
    const { payload, type } = action;
    switch (type) {
        case 'APPEND_NEW_RECIPE': {
            let oldRecipes = state.reciepes
            console.log('payload: ',payload[0])
            return {
                ...state,
                reciepes: [...oldRecipes, ...payload],
                newReciepe: {
                    name: '',
                    ingredients: [],
                    steps: [],
                    id: ''
                },
                index: payload[0].id
              //  ...arrayOfObj[0]
            }
        }
            case 'HANDLE_CHANGE': {
                return {
                    ...state,
                    newReciepe: payload
                  //  ...arrayOfObj[0]
                }
            }

            case 'UPDATE_FILTER': {
                return {
                    ...state,
                    index: payload
                }
            }
        default: {
        return state
        }
    }

}
