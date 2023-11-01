import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function GigCrad({ item }) {
  return (
    <Link className="link" to="/gig/123">
      <Wrapper>
          <img src={item.img} alt="" />
          <div className="info">
            <div className="user">
                <img src={item.pp} alt="" />
                <span>{item.username}</span>
            </div>
            <p>{item.desc}</p>
            <div className="star">
                <img src="./img/star.png" alt="" />
                <span>{item.star}</span>
            </div>
          </div>
          <hr />
          <div className="details">
            <img src="./img/heart.png" alt="" />
           <div className="right">
           <span>STARTING AT</span>
            <h2>${item.price}</h2>
           </div>
          </div>
        
      </Wrapper>
    </Link>
  );
}
const Wrapper = styled.div`
    width: 324px;
    height: 430px;
    border: 1px solid lightgray;
    margin-bottom: 25px;
    img{
        width: 100%;
        height: 50%;
        object-fit: cover;
    }
    .info{
        padding: 10px 20px ;
        display: flex;
        flex-direction: column;
        gap: 15px;
        .user{
            display: flex;
            align-items: center;
            gap: 10px;
            img{
                height: 40px;
                width: 40px;
                border-radius: 50px;
            }
        }
        p{
            color: #111;
        }
        .star{
            img{
                width: 14px;
                height: 14px;

            }
            span{
                font-size: 15px;
                color: #ffc108;
            }
        }
    }
    hr{
        height: 0;
        border: 1px solid lightgray;
    }
    .details{
        display: flex;
        justify-content: space-between;
        padding: 10px 20px ;
        align-items: center;
        .right{
            
            span{
                color: #999;
                font-size: 12px;
            }
            h2{
                color: #555;
                font-size: 18px;
                font-weight: 400;
            }
        }
        img{
            width: 18px;
            height: 18px;
        }
    }

`;
export default GigCrad;
