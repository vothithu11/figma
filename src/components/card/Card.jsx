import "./Card.scss";

export default function Card({moreText}) {
  return (
    <div className="card">
     <img src="./img/user.png" alt="user" />
     <div className="info">
      <p>Anne Couture <span>{moreText}</span></p>
      <span>5 min ago</span>
     </div>
    </div>
  );
}
