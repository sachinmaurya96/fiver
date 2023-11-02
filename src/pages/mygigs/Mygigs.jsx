import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function Mygigs() {
  return (
    <Wrapper>
      <div className="container">
        <div className="title">
          <h1>Gigs</h1>
          <Link to={"/add"} className='link'>
            <button>Add new Gig</button>
          </Link>
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Sales</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>
              <img className='img' src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>123</td>
            <td>
              <img className='delete' src="/img/delete.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img className='img' src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>123</td>
            <td>
              <img className='delete' src="/img/delete.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img className='img' src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>123</td>
            <td>
              <img className='delete' src="/img/delete.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img className='img' src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>123</td>
            <td>
              <img className='delete' src="/img/delete.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img className='img' src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>123</td>
            <td>
              <img className='delete' src="/img/delete.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img className='img' src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            </td>
            <td>Gig1</td>
            <td>88</td>
            <td>123</td>
            <td>
              <img className='delete' src="/img/delete.png" alt="" />
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
          .delete{
            width: 20px;
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
export default Mygigs
