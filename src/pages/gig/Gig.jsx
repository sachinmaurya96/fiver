import React from "react";
import styled from "styled-components";
import Slider from "infinite-react-carousel";
function Gig() {
  return (
    <Wrapper>
      <div className="container">
        <div className="left">
          <span className="breadCrumbs">FIVERR,GRAPHICS & DESIGN</span>
          <h1>I will create ai generated art for you</h1>
          <div className="user">
            <img
              className="pp"
              src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <span>John Doe</span>
            <div className="stars">
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <span>5</span>
            </div>
          </div>
          <Slider slidesToShow={1} arrowsScroll={1} className="slider">
            <img
              src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <img
              src="https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <img
              src="https://images.pexels.com/photos/1054777/pexels-photo-1054777.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
          </Slider>
          <h2>About This Gig</h2>
          <p>
            I use an AI program to create images based on text prompts. This
            means I can help you to create a vision you have through a textual
            description of your scene without requiring any reference images.
            Some things I've found it often excels at are: Character portraits
            (E.g. a picture to go with your DnD character) Landscapes (E.g.
            wallpapers, illustrations to compliment a story) Logos (E.g. Esports
            team, business, profile picture) You can be as vague or as
            descriptive as you want. Being more vague will allow the AI to be
            more creative which can sometimes result in some amazing images. You
            can also be incredibly precise if you have a clear image of what you
            want in mind. All of the images I create are original and will be
            found nowhere else. If you have any questions you're more than
            welcome to send me a message.
          </p>
          <div className="seller">
            <h2>About the Seller</h2>
            <div className="user">
              <img
                src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="info">
                <div className="stars">
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <span>5</span>
                </div>
                <button>Contact Me</button>
              </div>
            </div>
            <div className="box">
              <div className="items">
                <div className="item">
                  <span className="title">From</span>
                  <span className="desc">USA</span>
                </div>
                <div className="item">
                  <span className="title">Member since</span>
                  <span className="desc">Aug 2022</span>
                </div>
                <div className="item">
                  <span className="title">Avg. response time</span>
                  <span className="desc">4 hours</span>
                </div>
                <div className="item">
                  <span className="title">Last delivery</span>
                  <span className="desc">1 day</span>
                </div>
                <div className="item">
                  <span className="title">Languages</span>
                  <span className="desc">English</span>
                </div>
              </div>
              <hr />
              <p>
                My name is Anna, I enjoy creating AI generated art in my spare
                time. I have a lot of experience using the AI program and that
                means I know what to prompt the AI with to get a great and
                incredibly detailed result.
              </p>
            </div>
          </div>
          <div className="reviews">
            <h2>Reviews</h2>
            <div className="item">
              <div className="user">
                <img
                  className="pp"
                  src="https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <div className="info">
                  <span>John Doe</span>
                  <div className="country">
                    <img
                      src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                      alt=""
                    />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span>5</span>
              </div>
              <p>
                I just want to say that art_with_ai was the first, and after
                this, the only artist Ill be using on Fiverr. Communication was
                amazing, each and every day he sent me images that I was free to
                request changes to. They listened, understood, and delivered
                above and beyond my expectations. I absolutely recommend this
                gig, and know already that Ill be using it again very very soon
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="/img/like.png" alt="" />
                <span>Yes</span>
                <img src="/img/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
            <hr />
            <div className="item">
              <div className="user">
                <img
                  className="pp"
                  src="https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <div className="info">
                  <span>John Doe</span>
                  <div className="country">
                    <img
                      src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                      alt=""
                    />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span>5</span>
              </div>
              <p>
                I just want to say that art_with_ai was the first, and after
                this, the only artist Ill be using on Fiverr. Communication was
                amazing, each and every day he sent me images that I was free to
                request changes to. They listened, understood, and delivered
                above and beyond my expectations. I absolutely recommend this
                gig, and know already that Ill be using it again very very soon
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="/img/like.png" alt="" />
                <span>Yes</span>
                <img src="/img/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
            <hr />
            <div className="item">
              <div className="user">
                <img
                  className="pp"
                  src="https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <div className="info">
                  <span>John Doe</span>
                  <div className="country">
                    <img
                      src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                      alt=""
                    />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span>5</span>
              </div>
              <p>
                I just want to say that art_with_ai was the first, and after
                this, the only artist Ill be using on Fiverr. Communication was
                amazing, each and every day he sent me images that I was free to
                request changes to. They listened, understood, and delivered
                above and beyond my expectations. I absolutely recommend this
                gig, and know already that Ill be using it again very very soon
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="/img/like.png" alt="" />
                <span>Yes</span>
                <img src="/img/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
            <hr />
            <div className="item">
              <div className="user">
                <img
                  className="pp"
                  src="https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <div className="info">
                  <span>John Doe</span>
                  <div className="country">
                    <img
                      src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                      alt=""
                    />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span>5</span>
              </div>
              <p>
                I just want to say that art_with_ai was the first, and after
                this, the only artist Ill be using on Fiverr. Communication was
                amazing, each and every day he sent me images that I was free to
                request changes to. They listened, understood, and delivered
                above and beyond my expectations. I absolutely recommend this
                gig, and know already that Ill be using it again very very soon
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="/img/like.png" alt="" />
                <span>Yes</span>
                <img src="/img/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="price">
              <h3>1 AI generated image</h3>
              <h2>$ 59.99</h2>
          </div>
          <p>I will create a unique high quality AI generated image based on a
            description that you give me</p>
          <div className="details">
          <div className="item">
              <img src="/img/clock.png" alt="" />
              <span>2 Days Delivery</span>
            </div>
            <div className="item">
              <img src="/img/recycle.png" alt="" />
              <span>3 Revisions</span>
            </div>
          </div>
          <div className="features">
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>Prompt writing</span>
            </div>
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>Artwork delivery</span>
            </div>
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>Image upscaling</span>
            </div>
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>Additional design</span>
            </div>
          </div>
          <button>Continue</button>
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  .container {
    width: calc(100% - 200px);
    display: flex;
    gap: 50px;

    .left {
      flex: 2;
      display: flex;
      flex-direction: column;
      gap: 20px;
      .breadCrumbs {
        font-weight: 300;
        font-size: 13px;
        color: #555;
        margin: 20px 0 0 0;
      }
      .user {
        display: flex;
        align-items: center;
        gap: 10px;
        .pp {
          height: 32px;
          width: 32px;
          border-radius: 50%;
          object-fit: cover;
        }
        span {
          font-size: 14px;
          font-weight: 500;
        }
        .stars {
          display: flex;
          align-items: center;
          gap: 5px;
          img {
            width: 14px;
            height: 14px;
          }
          span {
            font-size: 14px;
            font-weight: bold;
            color: #ffc108;
          }
        }
      }
      .slider {
        img {
          max-height: 500px;
          object-fit: contain;
        }
      }
      h2 {
        font-weight: 400;
      }
      p {
        font-weight: 300;
        color: #555;
        line-height: 25px;
      }
      .seller {
        margin-top: 50px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        .user {
          display: flex;
          align-items: center;
          gap: 20px;
          img {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            object-fit: cover;
            cursor: pointer;
          }
          .info {
            display: flex;
            flex-direction: column;
            gap: 20px;
            .stars {
              display: flex;
              align-items: center;
              gap: 5px;
              img {
                width: 20px;
                height: 20px;
              }
              span {
                font-size: 20px;
                font-weight: bold;
                color: #ffc108;
              }
            }
            button {
              padding: 8px 0;
              border-radius: 5px;
              border: none;
              background: #1dbf73;
              color: #fff;
              letter-spacing: 1px;
              cursor: pointer;
            }
          }
        }
        .box {
          border: 1px solid lightgray;
          border-radius: 5px;
          padding: 20px;
          margin-top: 20px;

          .items {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            .item {
              width: 300px;
              display: flex;
              flex-direction: column;
              gap: 10px;
              margin-bottom: 20px;
              .title {
                font-weight: 300;
              }
              .desc {
              }
            }
          }
          hr {
            height: 0;
            border: 1px solid lightgray;
            margin-bottom: 20px;
          }
        }
      }
      .reviews {
        margin: 50px 0;
        .item {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin: 20px 0px;
          .user {
            display: flex;
            align-items: center;
            .pp {
              height: 50px;
              width: 50px;
              border-radius: 50px;
            }
            .country {
              display: flex;
              align-items: center;
              gap: 10px;
              color: gray;
              img {
                width: 20px;
                height: 20px;
              }
            }
          }
          .stars {
            display: flex;
            gap: 5px;
            align-items: center;
            img {
              width: 20px;
              height: 20px;
            }
            span {
              font-weight: bold;
              font-size: 20px;
              color: #ffc108;
            }
          }
          .helpful {
            display: flex;
            align-items: center;
            gap: 10px;

            img{
              width: 15px;
              cursor: pointer;
            }
          }
        }
        hr{
          height: 0;
          border: 1px solid lightgray;
          margin: 50px 0;
        }
      }
    }
    .right {
      flex: 1;
      border: 1px solid lightgray;
      padding: 20px;
      border-radius: 5px;
      display: flex;
      flex-direction: column;
      gap: 20px;
      position: sticky;
      top: 150px;
      max-height: 500px;
      height: max-content;
      margin: 50px 0;
      .price{
        display: flex;
        align-items: center;
        justify-content: space-between;
        h2{
          font-weight: 300;
        }
        h3{
          font-weight: 500;
        }
      }
      p{
        color: gray;
        margin: 10px 0px;

      }
      .details{
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 14px;
        .item{
          display: flex;
          align-items: center;
          gap: 10px;
          img{
            width: 20px;
          }
        }
      }
      .features{
        display: flex;
        flex-direction: column;
        gap: 10px;
        .item{
          display: flex;
          gap: 10px;
          font-weight: 10px;
          color: gray;
          img{
            width: 15px;
          }
        }
      }
      button{
        padding: 10px 0;
        color: #fff;
        letter-spacing: 1px;
        border: none;
        background: #1dbf73;
        font-size: 15px;
      }
    }
  }
`;
export default Gig;
