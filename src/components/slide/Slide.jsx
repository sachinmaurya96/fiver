import React from "react";
import styled from "styled-components";
import Slider from "infinite-react-carousel";
function Slide({children,slideToShow,arrowScroll}) {
  return (
    <Wrapper>
      <div className="container">
        <Slider className="slider" slidesToShow={slideToShow} arrowsScroll={arrowScroll}>
          {
           children
          }
        </Slider>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.section`
display: flex;
justify-content: center;
padding: 100px 0;
.container{
  width: calc(100% - 210px);
  .carousel-prev,.carousel-next{
    width: 50px;
    height: 50px;
    background-color: rgb(226, 226, 226);
    border-radius: 50%;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
  }
}

`;
export default Slide;
