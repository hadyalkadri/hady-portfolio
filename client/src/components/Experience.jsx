import React from 'react';

function Experience({image}) {
  let style;

  
  return (
    <span style={style}>
    <div className='container' id='experience'>
      <div className='exCard'>
        {/* <div className='grid-item1a'></div>
        <div className='grid-item2a'></div>
        <div className='grid-item3a'></div> */}
        {image.map((data => (
          
          <div className={`grid-item${data.id}a`} key={data.id}> 
          <div className={`grid-item${data.id} `}>
            <img className = {data.id === 3 ? `expImages${data.id}` : `expImages`} src={data.avatar} />
          </div>
          <div className='expHeaderBox'>
            <h2 className='expHeader' >{data.company}</h2>
          </div>
          <p className='expDetails' style={{'position': 'relative', 'top': '50px', 'color': 'white'}} dangerouslySetInnerHTML={{__html: data.description}}></p>
          </div>
        )))}
        
      </div>
    </div>
    </span>
  )
}

export default Experience;