
import Add from "../add/Add";
import Feature from "../feature/Feature";
import LayoutMain from "../layout/LayoutMain";
import Popular from "../popular/Popular";
import "./MainContent.scss";

export const MainContent = () => {
  return (
    <div className="mainContent">
      <div className="header">
        <div className="search">
          <img src="./img/search.png" alt="search" />
          <input type="text" placeholder="Explore" />
        </div>
      </div>
      <div className="box">
        <div className="banner">
        <img src="./img/banner.png" alt="" />
        <h1>Find Your Community <br/> on Daccord</h1>
        </div>
        <LayoutMain name='Featured Community'>
         {Array.from({length: 2},(index)=><Feature key={index}/>)}
        </LayoutMain>
        <LayoutMain name='Popular Right Now'>
         {Array.from({length: 2},(index)=><Popular key={index}/>)}
        </LayoutMain>
        <LayoutMain name='Recent Add'>
         {Array.from({length: 3},(index)=><Add key={index}/>)}
        </LayoutMain>
      </div>
    </div>
  );
};
