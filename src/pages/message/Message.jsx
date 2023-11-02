import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function Message() {
  return (
    <Wrapper>
      <div className="container">
        <span className="breadcrumbs">
          <Link to={"/messages"} className='link'>MESSAGE</Link>,JOHN DOE
        </span>
        <div className="messages">
          <div className="item">
          <img
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
              mollitia perspiciatis officiis voluptate? Sequi quae officia
              possimus, iusto labore alias mollitia eveniet nemo placeat
              laboriosam nisi animi! Error, tenetur!
            </p>
          </div>
          <div className="item owner">
          <img
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
              mollitia perspiciatis officiis voluptate? Sequi quae officia
              possimus, iusto labore alias mollitia eveniet nemo placeat
              laboriosam nisi animi! Error, tenetur!
            </p>
          </div>
          <div className="item">
          <img
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
              mollitia perspiciatis officiis voluptate? Sequi quae officia
              possimus, iusto labore alias mollitia eveniet nemo placeat
              laboriosam nisi animi! Error, tenetur!
            </p>
          </div>
          <div className="item owner">
          <img
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
              mollitia perspiciatis officiis voluptate? Sequi quae officia
              possimus, iusto labore alias mollitia eveniet nemo placeat
              laboriosam nisi animi! Error, tenetur!
            </p>
          </div>
        </div>
        <hr />
        <div className="write">
          <textarea name="" placeholder='write a message' id="" cols="30" rows="10"></textarea>
          <button>Send</button>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper= styled.section`
display: flex;
justify-content: center;
  .container{
    width: calc(100% - 200px);
    margin: 50px;
    .breadcrumbs{
      font-weight: 300;
      font-size: 13px;
      color: #555;
    }
    .messages{
      margin: 30px 0;
      padding: 50px;
      display: flex;
      flex-direction: column;
      gap: 20px;
      height: 430px;
      overflow: scroll;
      overflow-x: hidden;
      .item{
        display: flex;
        gap: 20px;
        align-items: start;
        max-width: 600px;
        font-size: 18px;

        &.owner{
          flex-direction: row-reverse;
          align-self: flex-end;
          p{
            border-radius: 20px 0px 20px 20px;
            background-color: royalblue;
            color:#fff;
          }
        }

        p{
          padding: 20px;
          background-color: lightgrey;
          border-radius: 0px 20px 20px 20px;
        }
        img{
          width: 50px;
          height: 50px;
          object-fit: cover;
          border-radius: 50%;
        }
        p{

        }
      }
    }
    hr{
      height: 0;
      border: 0cap.5 solid lightgray;
      margin: 20px 0;
    }
    .write{
      display: flex;
      align-items: center;
      justify-content: space-between;
      textarea{
        width: 90%;
        height: 100px;
        padding: 10px;
        border: 1px solid lightgray;
        outline: none;
        border-radius: 10px;
      }
      button{
        background-color: #1dbf73;
            color: #fff;
            font-weight: 500;
            border: none;
            padding: 10px 20px;
            cursor: pointer;
            border-radius: 5px;
            letter-spacing: 1px;
      }
    }
  }

`
export default Message
