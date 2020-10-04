import React, { useReducer, useState, Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import rootStore from '../../rootStore'
import { useSelector, useDispatch, shallowEqual } from "react-redux";
const Recipe = () => {

    const {reciepes, newReciepe, index} = useSelector(state => state.Recipe, shallowEqual)
    const  dispatch  = useDispatch();
   //const {newReciepe} = useSelector(state => state, shallowEqual)
    console.log('reciepes1: ',reciepes)
    console.log('newReciepe1: ',newReciepe)
const submit = (e) => {
   // const { reciepes, newReciepe } = rootStore.getState().Recipe;
   // const { dispatch } = this.props;
        e.preventDefault()
        console.log('newReciepe: ',newReciepe)
        let id = uuidv4()
        let new_recipe = [{ ...newReciepe, id: id }]
        console.log('new_recipe: ',new_recipe)
        dispatch({ type: 'APPEND_NEW_RECIPE', payload: new_recipe})
    }

  const handleChange = (e) => {
        let property = e.target.name;
        let value = e.target.value.split(',')
        const new_recipe = { ...newReciepe, [property]: value }
        console.log('property: ',property)
        console.log('value: ',value)
        console.log('new_recipe: ',new_recipe)
        dispatch({ type: 'HANDLE_CHANGE', payload: new_recipe})
    }
    // const { reciepes, newReciepe } = rootStore.getState().Recipe;
      // const { reciepes, newReciepe } = this.props;
console.log('index1: ',index)
        return (
            <div>
            {/* uuidv4() */}

            <div className='add-recipe'>
                <form onSubmit={  submit }>
                    <label htmlFor="recipe"><b>Recipe</b></label>
                    <input type="text" placeholder="Name" id='name' name="name" value={newReciepe.name} onChange={ handleChange} required />

                    <label htmlFor="ingredients"><b>List Ingredients seperated by a comma.</b></label>
                    <input type="text" placeholder="Ingredient 1, Ingedient 2, ect..." id='ingredients' name="ingredients" value={newReciepe.ingredients} onChange={ handleChange} required />

                    <label htmlFor="steps"><b>List Steps seperated by a comma.</b></label>
                    <input type="text" placeholder="step 1, step 2, ect..." id='steps' name="steps" value={newReciepe.steps} onChange={ handleChange} required />

                    <button type="submit" id='submit' className='btn'>Add Reciepe</button>

                </form>
            </div>

            <div className = 'recipes'>
                {/* {JSON.stringify(reciepes)} */}
                {console.log('this is reciepes in jsx: ',reciepes)}
                {    reciepes && reciepes.map((item) => {
                    if (item.id === index) return (
                        <div key = {item.id} className = 'recipe'>
                     <div className = 'item' >Name: {item.name}</div>
                     <div className = 'item' >Ingredients: {item.ingredients}</div>
                     <div className = 'item' >Steps: {item.steps}</div>
                     </div>

                )
                })
}
            </div>


        </div>
    )
}

export default Recipe;

