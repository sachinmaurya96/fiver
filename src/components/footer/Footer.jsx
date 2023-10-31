import React from 'react'
import styled from 'styled-components'

function Footer() {
  return (
    <Wrapper>
      <div className="container">
        <div className="top">
          <div className="item">
            <h2>Categories</h2>
            <span>Graphics Design</span>
            <span>Digital Marketing</span>
            <span>Writting and Translation</span>
            <span>Video & Animation</span>
            <span>Music And Audio</span>
            <span>Programming And Tech</span>
            <span>data</span>
            <span>Business</span>
            <span>Lifestyle</span>
            <span>Photography</span>
            <span>Sitemap</span>
          </div>
          <div className="item">
            <h2>Categories</h2>
            <span>Graphics Design</span>
            <span>Digital Marketing</span>
            <span>Writting and Translation</span>
            <span>Video & Animation</span>
            <span>Music And Audio</span>
            <span>Programming And Tech</span>
            <span>data</span>
            <span>Business</span>
            <span>Lifestyle</span>
            <span>Photography</span>
            <span>Sitemap</span>
          </div>
          <div className="item">
            <h2>Categories</h2>
            <span>Graphics Design</span>
            <span>Digital Marketing</span>
            <span>Writting and Translation</span>
            <span>Video & Animation</span>
            <span>Music And Audio</span>
            <span>Programming And Tech</span>
            <span>data</span>
            <span>Business</span>
            <span>Lifestyle</span>
            <span>Photography</span>
            <span>Sitemap</span>
          </div>
          <div className="item">
            <h2>Categories</h2>
            <span>Graphics Design</span>
            <span>Digital Marketing</span>
            <span>Writting and Translation</span>
            <span>Video & Animation</span>
            <span>Music And Audio</span>
            <span>Programming And Tech</span>
            <span>data</span>
            <span>Business</span>
            <span>Lifestyle</span>
            <span>Photography</span>
            <span>Sitemap</span>
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <h2>fiverr</h2>
            <span>Fiverr Tnternational ltd. 2023</span>
          </div>
          <div className="right">
            <div className="social">
              <img src="./img/twitter.png" alt="" />
              <img src="./img/facebook.png" alt="" />
              <img src="./img/linkedin.png" alt="" />
              <img src="./img/pinterest.png" alt="" />
              <img src="./img/instagram.png" alt="" />
            </div>
            <div className="link">
              <img src="./img/language.png" alt="" />
              <span>English</span>
            </div>
            <div className="link">
              <img src="./img/coin.png" alt="" />
              <span>USD</span>
            </div>
            <img src="./img/accessibility.png" alt="" />
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.footer`
display: flex;
justify-content: center;
  .container{
    width: calc(100% - 200px);
    .top{
      display: flex;
      justify-content: space-between;
      .item{
        display: flex;
        flex-direction: column;
        gap: 10px;
        h2{
          font-size: 18px;
        }
        span{
          color: gray;
          font-size: 15px;
        }

      }
    }
    hr{
      margin: 40px 0;
      height: 0;
      border: 1px solid lightgray;
    }
    .bottom{
      display: flex;
      justify-content: space-between;
      margin-bottom: 30px;
      .left{
        display: flex;
        gap: 15px;
        align-items: center;

        span{
          color: gray;
          font-size: 13px;
        }
      }
      .right{
        display: flex;
        gap: 15px;

        .social{
          display: flex;
          align-items: center;
          gap: 15px;
          img{
          width: 30px;
          height:30px
        }
        }
        img{
          width: 30px;
          height:30px
        }
        .link{
          display: flex;
          align-items: center;
          gap: 10px;
        }
       
      }
    }
  }

`
export default Footer
