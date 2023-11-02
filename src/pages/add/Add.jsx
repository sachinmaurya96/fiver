import React from 'react'
import styled from 'styled-components'

function Add() {
  return (
    <Wrapper>
      <div className="container">
        <h1>Add New Gig</h1>
        <div className="sections">
        <div className="info">
            <label htmlFor="">Title</label>
            <input
              type="text"
              placeholder="e.g. I will do something I'm really good at"
            />
            <label htmlFor="">Category</label>
            <select name="cats" id="cats">
              <option value="design">Design</option>
              <option value="web">Web Development</option>
              <option value="animation">Animation</option>
              <option value="music">Music</option>
            </select>
            <label htmlFor="">Cover Image</label>
            <input type="file" />
            <label htmlFor="">Upload Images</label>
            <input type="file" multiple />
            <label htmlFor="">Description</label>
            <textarea name="" id="" placeholder="Brief descriptions to introduce your service to customers" cols="0" rows="16"></textarea>
            <button>Create</button>
          </div>
          <div className="details">
            <label htmlFor="">Service Title</label>
            <input type="text" placeholder="e.g. One-page web design" />
            <label htmlFor="">Short Description</label>
            <textarea name="" id="" placeholder="Short description of your service" cols="30" rows="10"></textarea>
            <label htmlFor="">Delivery Time (e.g. 3 days)</label>
            <input type="number" />
            <label htmlFor="">Revision Number</label>
            <input type="number" />
            <label htmlFor="">Add Features</label>
            <input type="text" placeholder="e.g. page design" />
            <input type="text" placeholder="e.g. file uploading" />
            <input type="text" placeholder="e.g. setting up a domain" />
            <input type="text" placeholder="e.g. hosting" />
            <label htmlFor="">Price</label>
            <input type="number" />
          </div>
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
    padding: 50px 0;
    h1{
      color: gray;
      font-weight: 300;
      margin-bottom: 30px;

    }
    .sections{
      display: flex;
      justify-content: space-between;
      gap: 100px;
      .info,
      .details{
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 10px;
        justify-content: space-between;
        label{
          color: gray;
          font-size: 18px;
        }
        input,select,textarea{
          padding: 15px;
          font-size: 15px;
          outline: none;
        }
        button{
          background-color: #1dbf73;
            color: #fff;
            font-weight: 500;
            border: none;
            padding: 15px 20px;
            cursor: pointer;
            border-radius: 5px;
            letter-spacing: 1px;
        }
      }
    }
  }
`

export default Add
