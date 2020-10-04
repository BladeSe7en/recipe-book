import { combineReducers }     from 'redux';
import RecipeReducer       from './components/Recipe/RecipeReducer';

const rootReducer = combineReducers({
    Recipe      : RecipeReducer

});

export default rootReducer; 
