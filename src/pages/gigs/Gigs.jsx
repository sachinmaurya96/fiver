import React, { useState } from 'react'
import styled from 'styled-components'
import { gigs } from '../../data';
import GigCrad from '../../components/gigCard/GigCrad';

function Gigs() {
  const [rightMenu,setRightMenu] = useState(false);
  const [sort,setSort] = useState("sales")

  const resort =(type)=>{
    setSort(type)
    setRightMenu(false)
  } 

  return (
    <Wrapper>
      <div className="container">
        <span className="breadcrumbs">
          FIVERR,GRAPHICS & DESIGN 
        </span>
        <h1>AI Artist</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, laboriosam.</p>
        <div className="menu">
          <div className="left">
            <span>Budget</span>
            <input type="number" placeholder='min'/>
            <input type="number" placeholder='max'/>
            <button>Apply</button>
          </div>
          <div className="right">
            <span className="sortBy">SortBy</span>
            <span className="sortType">
              {sort==="sales"? "best seling":"Newets"}
            </span>
            <img src="./img/down.png" alt="" onClick={()=>setRightMenu(!rightMenu)}/>
            {
              rightMenu && <div className="rightMenu">
                {
                  sort==="sales"?  <span onClick={()=>resort("createdAt")}>Newest</span>
                  :
                  <span onClick={()=>resort("sales")}>Best Selling</span>
                }
            </div>
            }
          </div>
        </div>
        <div className="cards">
          {
            gigs.map(gig=>(
              <GigCrad item={gig} key={gig.id}/>
            ))
          }
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  .container{
    width: calc(100% - 200px);
    padding: 30px 0;
    display: flex;
    flex-direction: column;
    gap: 15px;
    .breadcrumbs{
      font-weight: 300;
      font-size: 13px;
      color: #555;
    }
    h1{

    }
    p{
      color: #999;
      font-weight: 300;
    }
    .menu{
      display: flex;
      justify-content: space-between;
      align-items: center;
      .left{
        display: flex;
        gap: 15px;
        color: #555;
        font-weight: 300;
        align-items: center;
        span{}
        input{
          padding: 5px;
          border: 1px soid lightgray;
          outline: none;
          &::placeholder{
            color: #b6b6b6;
          }
        }
        button{
          padding: 6px 15px;
          border-radius: 5px;
          border: none;
          background-color: #1dbf73;
          color: #fff;
          letter-spacing: 1px;
        }
      }
      .right{
        display: flex;
        gap: 10px;
        align-items: center;
        position: relative;
        .sortBy{
          color: #555;
          font-weight: 300;
        }
        .sortType{
          font-weight: 500;
          text-transform: capitalize;
        }
        img{
          width: 15px;
          cursor: pointer;
        }
        .rightMenu{
          display: flex;
          flex-direction: column;
          gap: 10px;
          background-color: #fff;
          position: absolute;
          padding: 10px;
          box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
          top: 20px;
          right: 0px;
          color: gray;
          border-radius: 3px;
          span{
            cursor: pointer;
          }
        }
      }
    }
    .cards{
      display: grid;
      grid-template-columns: repeat(4 , 1fr);
    }
  }

`
export default Gigs
