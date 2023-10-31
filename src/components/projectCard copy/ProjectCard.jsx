import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function ProjectCard({item}) {
  return (
    <Link to="/gigs?cat=design" className='link'>
    <Wrapper>
      <img src={item.img} alt="" />
     <div className="info">
      <img src={item.pp} alt="" />
      <div className="text">
        <h2>{item.cat}</h2>
        <span>{item.username}</span>
      </div>
     </div>
    </Wrapper>
    </Link>
  )
}
const Wrapper = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
margin: 10px;
  img{
    width: 100%;
    height: 70%;
    object-fit: cover;
  }
  .info{
    padding: 20px 0 0 20px;
    display: flex;
    align-items: center;
    gap: 20px;

    img{
      width: 40px;
      height: 40px;
      border-radius: 50%;
      object-fit: cover;
    }

    .text{
  
      h2{
        font-size: 15px;
        font-weight: bold;
      }
      span{
        font-size: 13px;
      }
    }
  }
`
export default ProjectCard
