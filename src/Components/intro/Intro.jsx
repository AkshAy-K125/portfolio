import './intro.css';
import { TypeAnimation } from 'react-type-animation';


function Intro() {
  return (
    <div id="home" className='intro__container'>
      <div className='intro__container-photo'>
      </div>
      <div className='intro__container-text'>
        <p className='intro__container-text_line1'>Hey, I'am</p>
        <TypeAnimation
          sequence={[
            'KUMAR',
            1000,
            'AKSHAY KUMAR',
          ]}
          wrapper="span"
          cursor={true}
          repeat={0}
          speed={200}
          style={{ display: 'inline-block', fontWeight: 'bold', fontSize: '60px', padding: '10px' }}
        />
      </div>
    </div>
  )
}

export default Intro