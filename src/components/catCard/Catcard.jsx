import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function Catcard({item}) {
  return (
    <Link to="/gigs?cat=design">
    <Wrapper>
      <img src={item.img} alt="" />
      <span className="desc">{item.desc}</span>
      <span className="title">{item.title}</span>
    </Wrapper>
    </Link>
  )
}
const Wrapper = styled.div`
    width: 252px;
    height: 344px;
    color: #fff;
    border-radius: 5px;
    position: relative;

    img{
        width:100%;
        height: 100%;
        object-fit: cover;
    }
    .desc{
        font-weight: 300;
        position: absolute;
        top: 15px;
        left:15px;
    }
    .title{
        position: absolute;
        font-weight: 500;
        font-size: 24px;
        left: 15px;
        top: 40px;

    }
`
export default Catcard
