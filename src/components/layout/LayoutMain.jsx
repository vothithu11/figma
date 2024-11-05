import './LayoutMain.scss'

function LayoutMain({name, children}) {
  return (
    <div className="layoutMain">
        <div className="name">
            <h1>{name}</h1>
            <span>See all</span>
        </div>
        <div className='context '>
        {children}
        </div>
    </div>
  )
}

export default LayoutMain