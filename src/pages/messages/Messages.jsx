import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Messages() {
  const currentUser = {
    id: 1,
    username: "John Doe",
    isSeller: true,
  };
  const message =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti, ea!";
  return (
    <Wrapper>
      <div className="container">
        <div className="title">
          <h1>Orders</h1>
        </div>
        <table>
          <tr>
            <th>Buyer</th>
            <th>Last Message</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
          <tr>
            <td className="active">John Doe</td>
            <td><Link to="/message/123" className="link">{message.substring(0, 100)}...</Link></td>
            <td>1 days ago</td>
            <td>
              <button>Mark As Read</button>
            </td>
          </tr>
          <tr className="active">
            <td>John Doe</td>
            <td><Link to="/message/123" className="link">{message.substring(0, 100)}...</Link></td>
            <td>1 days ago</td>
            <td>
              <button>Mark As Read</button>
            </td>
          </tr>
          <tr>
            <td>John Doe</td>
            <td><Link to="/message/123" className="link">{message.substring(0, 100)}...</Link></td>
            <td>1 days ago</td>
          </tr>
          <tr>
            <td>John Doe</td>
            <td><Link to="/message/123" className="link">{message.substring(0, 100)}...</Link></td>
            <td>1 days ago</td>
          </tr>
          <tr>
            <td>John Doe</td>
            <td><Link to="/message/123" className="link">{message.substring(0, 100)}...</Link></td>
            <td>1 days ago</td>
          </tr>
          <tr>
            <td>John Doe</td>
            <td><Link to="/message/123" className="link">{message.substring(0, 100)}...</Link></td>
            <td>1 days ago</td>
          </tr>
          <tr>
            <td>John Doe</td>
            <td><Link to="/message/123" className="link">{message.substring(0, 100)}...</Link></td>
            <td>1 days ago</td>
          </tr>
        </table>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  .container {
    width: calc(100% - 200px);
    padding: 50px 0;
    .title {
      display: flex;
      justify-content: space-between;
    }
    table {
      width: 100%;
      tr {
        height: 70px;
        th {
          text-align: left;
        }
        td {
          padding: 10px;
          &:first-child {
            font-weight: 500;
          }
          &:nth-child(2),
          &:nth-child(3) {
            color: gray;
          }
          button {
            background-color: #1dbf73;
            color: #fff;
            font-weight: 500;
            border: none;
            padding: 10px;
            cursor: pointer;
          }
        }
        &.active {
          background-color: #1dbf730f;
        }
      }
    }
  }
`;
export default Messages;
