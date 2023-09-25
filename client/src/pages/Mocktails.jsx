import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import drank from '../assets/drank-1.jpg';
import mai from '../assets/maitai.jpg';
import pina from '../assets/pinacolada.jpg';
import cherry from '../assets/cherry-lemon-bomb.jpg';
import minty from '../assets/minty-mango-split.jpg';
import chile from '../assets/chile-lime.webp';
// import React, { useState } from 'react';
import MocktailItem from '../components/MocktailItem';
import { backgroundImage } from '../utils/constants';
import Modal from '../components/Modal';



const Mocktails = () => {

    return (
    <div className={`bg-cover bg-fixed bg-[url("./assets/${backgroundImage}")] relative min-h-screen w-full m-0 p-0`}>
        <div className="row relative w-full h-36"></div>
        <div id="mocktails" className="m-0 p-0 flex items-center justify-center min-h-screen">
        <div className='ml-4 mr-4 grid grid-cols-4 gap-12'>
            {/* <div className="float-left w-1/5 m-3.5 p-4 backdrop-blur border-4 border-white"> */}
                {/* <h4 className="text-white bg-green-950 text-4xl font-yellow text-center">Drink Name</h4> */}
                <MocktailItem img={chile} title="Chile Lime Sublime" recipe={`chile-lime-sublime`} />
                <MocktailItem img={drank} title="Zombie" />
                <MocktailItem img={pina} title="Pina Colada" />
                <MocktailItem img={cherry} title="Cherry Lemon Bomb" />

            
                {/* <h4 className="text-white bg-green-950 text-4xl font-yellow text-center">Recipe</h4> */}

            </div>
</div>

{/* <div>
<button onClick={() => setOpenModal(true)}>Recipe</button>
<Modal open = {openModal} />
</div> */}
   

</div>
// </div>
    );
};

export default Mocktails;