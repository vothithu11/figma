import './Popular.scss';


function Popular() {
  return (
    <div className="popular">
        <img src="./img/photo.png" alt="image" className='photo'/>
        <div className="description">
            <img src="./img/avatar.png" alt="icon" className='avatar' />
            <div className="descriptionMain">
                <h1>3D Art</h1>
                <p>A great place to discuss art.</p>
                <div className="rightDescription">
                  <img src="./img/icon.png" alt="icon" className='iconBtn' />
                  <span>345,678</span>
                  <span>Members</span>
                </div>
            </div>
        </div>
     
    </div>
  )
}

export default Popular