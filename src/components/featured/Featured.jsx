import React from 'react'
import styled from 'styled-components'

function Featured() {
  return (
    <Wrapper>
      <div className="container">
        <div className="left">
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing.</h1>
            <div className="search">
                <div className="serachInput">
                    <img src="./img/search.png" alt="" />
                    <input type="text" />
                </div>
                <button>search</button>
            </div>
            <div className="popular">
                <span>Popular</span>
                <button>Web Design</button>
                <button>Logo Design</button>
                <button>Wordpress</button>
                <button>Ai Services</button>
            </div>
        </div>
        <div className="right">
            <img src="./img/man.png" alt="" />
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
    height: 550px;
    display: flex;
    justify-content: center;
    background-color: #013914;
    color: #fff;
    .container{
        width: calc(100% - 200px);
        padding: 0 auto;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        .left{
            display: flex;
            flex-direction: column;
            gap: 25px;
            justify-content: center;
            h1{
                font-size: 40px;
            }
            .search{
                display: flex;
                background: #fff;
                justify-content: space-between;
               border-radius: 5px;
                .serachInput{
                    display: flex;
                    align-items: center;
                  
                    padding: 10px 10px 10px 15px;
                    input{
                        height: 100%;
                        padding: 0 20px;
                        border: none;
                        outline: none;
                        width: 300px;
                    }
                    img{
                        width: 20px;
                    }
                }
                button{
                    border: none;
                    background-color: #1dbf73;
                    color: #fff;
                    font-weight: 400;
                    padding: 0 10px;
                    letter-spacing: 1px;
                    text-transform: capitalize;
                    border-top-right-radius: 5px;
                    border-bottom-right-radius: 5px;
                    cursor: pointer;
                }
            }
            .popular{
                display: flex;
                gap: 15px;
                align-items: center;

                button{
                    padding: 5px 10px;
                    background: transparent;
                    color: #fff;
                    border: 1px solid #fff;
                   border-radius: 10px;
                    cursor: pointer;
                }
            }
        }

        .right{
            display: flex;
            align-items: end;
            justify-content: end;
            
            img{
                width: 500px;
                height: auto;
            }
        }
    }

`

export default Featured
