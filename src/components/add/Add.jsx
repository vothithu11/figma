import './Add.scss'

function Add() {
  return (
    <div className="add">
        <img src="./img/univer.png" alt="img" className='univer' />
        <div className="descAdd">
            <img src="./img/avt.png" alt="img" className='imgAvt' />
            <div className="addContent">
                <h1>Movie Recapped</h1>
                <p>Discuss your favourite movies and TV series here.</p>
                <div className="addBottom">
                    <img src="./img/icon.png" alt="" className='iconLogo'/>
                    <span>3</span>
                    <span>Members</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Add