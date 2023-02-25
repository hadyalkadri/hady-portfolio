import React from 'react';
import Card from 'react-bootstrap/Card';

// the issue with the map function was that the arrow function executed was wrapping the jsx element with "{}" instead of "()". You can try replacing that.

function SkillCard({info}) {
 
  return (
    <div className='skill-main-section'>
      <div className='cardConatiner'>
        <h1 className='skillsHd'>Skills</h1>
        <div className='cardHolder'>
            {info && info.map((data, index) => (
              <div className="Card" key={index}>
                <h2>{data.skill}</h2>
                <p className='cardDetails'>{data.skillset}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
    // <div className='cardConatiner'>
    //     <h1 className='skillsHd'>Skills</h1>
    //     {info && info.map((data, index) => (   
    //       <div className='Card' key={index}>
    //         <Card>
    //           <Card.Body>
    //             <Card.Title className='cardTitle'>{data.skill}</Card.Title>
    //             <Card.Text className='cardDetails'>{data.skillset}</Card.Text>
    //           </Card.Body>
    //         </Card>
    //       </div>
    //     ))
    //     }
    // </div>
  )
}

export default SkillCard;