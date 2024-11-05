
import './LayoutInspector.scss'

export default function LayoutInspector({title, children}) {
  return (
    <div className="layout">
        <div className="title">
            <span>{title}</span>
            <span>See all</span>
        </div>
        {children}
    </div>
  )
}
