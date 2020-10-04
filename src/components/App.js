import React from 'react';
import NavBar from './NavBar/NavBar';
import Recipe from './Recipe/Recipe';

const App = () => {
    return (
        <div className="App">
            <div className='nav-row'>
                <NavBar></NavBar>
            </div>
            <div className='recipe-row'>
                <Recipe></Recipe>
            </div>
        </div>
    );
}

export default App;
