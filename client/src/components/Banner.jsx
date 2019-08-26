import React from 'react';
import styled from 'styled-components';


const BannerContainer = styled.div`
  position: relative;
  /*TODO: remove border when ready*/
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
`;

const PhotosContainer = styled.div`
  min-height: 290px;
`;

const CommandsContainer = styled.div`
  position:absolute;
  top: 10px;
  right: 10px;
  height: 90%;
  width: 200px;
  /*TODO: remove border when ready*/
  border: 1px solid #ccc;
`;


const Banner = (props) => {

  return (
    <BannerContainer id="overview-house-banner" >
      <CommandsContainer className="floating-commands" >
        Floating Commands
      </CommandsContainer>
      <PhotosContainer className="photos-container" >
        <center>Photos Container</center>
      </PhotosContainer>
    </BannerContainer>
  );
};

export default Banner;