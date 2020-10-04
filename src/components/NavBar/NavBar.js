import React, { useReducer, useState } from 'react';
import reducer from '../../rootReducer';
import { useSelector, useDispatch, shallowEqual } from "react-redux";

const NavBar = () => {
    const dispatch = useDispatch();
    const {reciepes, newReciepe} = useSelector(state => state.Recipe, shallowEqual)
 console.log('this is recipes nav: ',reciepes)

 const updateFilter = (e) => {
     console.log('e.id: ',e.target.id)
    dispatch({ type: 'UPDATE_FILTER', payload: e.target.id })
 }
    return (
        <div>
            <div className = 'navbar'> 
                {reciepes && reciepes.map(item => {
                    {console.log('item: ',item)}
                    {console.log('item.name: ',item.name)}
                   return <button key = {item.id} id = {item.id} className = 'nav-item' onClick = {updateFilter} >{item.name} </button>
                })}
            </div>


        </div>
    )
}

export default NavBar;