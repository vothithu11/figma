import Card from '../card/Card'
import LayoutInspector from '../layout/LayoutInspector'
import './Inspector.scss'

export const Inspector = () => {
  return (
    <div className="inspector">
      <div className="header">
        <img src="./img/mail.png" alt="image" />
        <img src="./img/mail.png" alt="image" />
        <img src="./img/mail.png" alt="image" />
        <img src="./img/mail.png" alt="image" />
      </div>
      <div className="user">
        <img src="./img/user.png" alt="user" />
        <h1>Sophie Fortune</h1>
        <p>@sophiefortune</p>
      </div>
      <LayoutInspector title="New Members">
        {Array.from({ length: 4 }, (_, index) => (
          <Card key={index} />
        ))}
      </LayoutInspector>
      <LayoutInspector title="Recent Activity">
        <Card
          moreText="invited you to a channel"
        />
         <Card
          moreText="invited you to a chat"
        />
      </LayoutInspector>
    </div>
  );
}
