import './index.scss';

export default function Pacman() {
  return (
    <div className='content'>

      <p>
        <strong>
          Instructions:
        </strong>
        Create a simple animation of pacman chomping and chasing a ghost along this container element!
      </p>

      <section>
        <div className='path'>
          <div className='pacman'></div>
          <div className='ghost'>
            <div className='eyes'></div>
            <div className='skirt'></div>
          </div>
        </div>
      </section>
      
    </div>
    
  )
}
