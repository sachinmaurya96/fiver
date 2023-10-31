import React from "react";
import styled from "styled-components";

function TrustedBy() {
  return (
    <Wrapper>
      <div className="container">
        <span>Trusted By:</span>
        <img
          src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/facebook2x.188a797.png"
          alt=""
        />
        <img
          src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/google2x.06d74c8.png"
          alt=""
        />
        <img
          src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/netflix2x.887e47e.png"
          alt=""
        />
        <img
          src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/pandg2x.6dc32e4.png"
          alt=""
        />
        <img
          src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/paypal2x.22728be.png"
          alt=""
        />
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.section`
display: flex;
align-items: center;
justify-content: center;
background-color: #fafafa;

.container{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    span{
        color: lightgray;
    }
    img{
        height: 50px;
        object-fit: contain;
    }
}
`;
export default TrustedBy;
