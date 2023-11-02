import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function Orders() {
  const currentUser = {
    id:1,
    username:"John Doe",
    isSeller:true
  }
  return (
    <Wrapper>
      <div className="container">
        <div className="title">
          <h1>Orders</h1>
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>{currentUser?.isSeller? "Buyer":"Seller"}</th>
            <th>Contact</th>
          </tr>
          <tr>
            <td>
              <img className='img' src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>John Doe</td>
            <td>
              <img className='message' src="/img/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img className='img' src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>John Doe</td>
            <td>
              <img className='message' src="/img/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img className='img' src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>John Doe</td>
            <td>
              <img className='message' src="/img/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img className='img' src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>John Doe</td>
            <td>
              <img className='message' src="/img/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img className='img' src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>John Doe</td>
            <td>
              <img className='message' src="/img/message.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img className='img' src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>John Doe</td>
            <td>
              <img className='message' src="/img/message.png" alt="" />
            </td>
          </tr>
        </table>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  .container{
    width: calc(100% - 200px);
    padding: 50px 0;
    .title{
      display: flex;
      justify-content: space-between;
      button{
        background-color: #1dbf73;
        color: #fff;
        font-weight: 500;
        border: none;
        padding: 10px;
        cursor: pointer;
      }
    }
    table{
      width: 100%;
      tr{
        height: 50px;
        th{
          text-align: left;
        }
        td{
          .img{
            width: 50px;
            height: 25px;
            object-fit: cover;
          }
          .message{
            width: 30px;
            cursor: pointer;
          }
        }
        &:nth-child(even){
          background-color: #1dbf730f;
        }
      }
    }
  }
`
export default Orders
