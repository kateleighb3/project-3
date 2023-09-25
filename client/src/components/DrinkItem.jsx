import React, { useState } from 'react';

const DrinkItem = ({img, name, ingredients, directions}) => {
    return(

        <div className = 'overlay border-4 border-orange-500 flex flex-row justify-center backdrop-blur'>
            <div className = 'drinkContainer flex flex-row justify-between border-4 border-red-500 m-2'>
                <div className='border-2 border-black w-80 h-96 flex flex-col items-center justify-center '>
                <img src={img} alt={name} className='object-fit' />
                </div>
                <div className = 'drinkContainerRight border-4 border-indigo-500 p-4 w-96 h-96 overflow-auto'>

                <div className = 'content'>
                    <h2 className='font-bold font-yellow text-3xl mb-4'>{name}</h2>
                    <h3 className= 'text-2xl'>Ingredients</h3>
                    <p className='m-2'> {ingredients}</p>
                    <h3 className= 'text-2xl'>Directions</h3>
                    <p className='m-2'>{directions}</p>
                    </div>
                </div>
                </div>

        </div>
        
        
    );
};



export default DrinkItem