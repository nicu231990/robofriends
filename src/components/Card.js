import React from "react";
import 'tachyons'
import './Card.css'

const Card = ({id, name, email}) => {
    return (
            <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 '>
                <img src={`https://robohash.org/${id}?size=200x200`} alt='robots'/>
                <div>
                    <h3>{name}</h3>
                    <p>{email}</p>
                </div>
            </div>
    );
};

export default Card;