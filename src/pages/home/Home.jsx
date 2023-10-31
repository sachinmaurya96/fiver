import React from "react";
import Featured from "../../components/featured/Featured";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import Slide from "../../components/slide/Slide";
import { cards, projects } from "../../data";
import Catcard from "../../components/catCard/Catcard";
import styled from "styled-components";
import ProjectCard from "../../components/projectCard copy/ProjectCard";

function Home() {
  return (
   <Wrapper>
    <Featured/>
    <TrustedBy/>
    <Slide arrowScroll={5} slideToShow={5}>
      {
        cards.map(card=>(
          <Catcard key={card.id} item={card}/>
        ))
      }
    </Slide>
    <div className="features">
      <div className="container">
      <div className="item">
        <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h1>
        <div className="title">
          <img src="./img/check.png" alt="" />
          Lorem ipsum dolor sit amet.
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ex at alias animi sequi ipsam nesciunt debitis, enim cupiditate iste.</p>
        <div className="title">
          <img src="./img/check.png" alt="" />
          Lorem ipsum dolor sit amet.
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ex at alias animi sequi ipsam nesciunt debitis, enim cupiditate iste.</p>
        <div className="title">
          <img src="./img/check.png" alt="" />
          Lorem ipsum dolor sit amet.
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ex at alias animi sequi ipsam nesciunt debitis, enim cupiditate iste.</p>
        <div className="title">
          <img src="./img/check.png" alt="" />
          Lorem ipsum dolor sit amet.
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ex at alias animi sequi ipsam nesciunt debitis, enim cupiditate iste.</p>
      </div>
      <div className="item">
        <video src="https://youtu.be/KI5CnJ9u5ok?si=8U2lJjberB2jjzty" controls></video>
      </div>
      </div>
    </div>
    <div className="features dark">
      <div className="container">
      <div className="item">
        <h1>fiverr <span>businness</span></h1>
        <h1>A business solution design for <span>team</span></h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum impedit, ipsa optio explicabo dolores omnis cum dolorum harum fugiat ex.</p>
        <div className="title">
          <img src="./img/check.png" alt="" />
          Lorem ipsum dolor sit amet.
        </div>
        <div className="title">
          <img src="./img/check.png" alt="" />
          Lorem ipsum dolor sit amet.
        </div>
        <div className="title">
          <img src="./img/check.png" alt="" />
          Lorem ipsum dolor sit amet.
        </div>
        <button>Explore Fiverr Business</button>
      </div>
      <div className="item">
        <img className="team-img" src=" https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png" alt="" />
      </div>
      </div>
    </div>
    <Slide arrowScroll={4} slideToShow={4}>
      {
        projects.map(card=>(
          <ProjectCard key={card.id} item={card}/>
        ))
      }
    </Slide>
   </Wrapper>
  );
}
 const Wrapper = styled.section`
  .features{
    width: 100%;
    background-color: #f1fdf7;
    padding: 100px 0;
    display: flex;
    justify-content: center;

    &.dark{
      background-color: #0d084d;
      color: #fff;
      h1{
        color: #fff !important;
        span{
          font-weight: 300;
          font-style: italic;
        }
      }
      p{
        color: #fff !important;
        margin-bottom: 20px;
        font-size: 20px;
      }
      .title{
        color: #fff !important;
        font-weight: 300 !important;
        font-size: 18px !important;
      }
      .team-img{
        width: 100%;
      }
      button{
        width: max-content;
        padding: 10px 20px;
        letter-spacing: 1px;
        margin-top: 20px;
        background-color: #1dbf73;
        outline: none;
        border: none;
        border-radius: 5px;
        color: #fff;
        cursor: pointer;
      }
    }
    .container{
      display: grid;
    grid-template-columns: 1fr 1.5fr;
    width: calc(100% - 200px);
    gap: 20px;
   
    }
    
    
  
    .item{
      display: flex;
        flex-direction: column;
        gap: 15px;
      h1{
        font-size: 30px;
        
      }
      .title{
        display: flex;
        align-items: center;
        gap: 15px;
        font-weight: 700;
        font-size: 20px;
        color: #4c4c4c;
      }
      p{
        color: gray;
        line-height:28px;
       
      }
      video{
        width: 100%;
      }
      
     
    }
  }

 `
export default Home;
