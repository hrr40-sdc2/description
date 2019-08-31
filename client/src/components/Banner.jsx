import React from 'react';
import styled from 'styled-components';
import Share from './icons/Share.jsx';
import Heart from './icons/Heart.jsx';


const BannerContainer = styled.div`
  position: relative;
  border-bottom: 1px solid #ccc;
`;

const PhotosContainer = styled.div`
  position: relative;
  min-height: 290px;
`;

const PrimaryPhotoContainer = styled.div`
  float: left;
  width: 49.5%;
  height: 290px;
  border: 1px solid #222;
  overflow: hidden;
`;

const SecondaryPhotoContainer = styled.div`
  float: left;
  width: 25%;
  height: 144px;
  border: 1px solid #222;
  overflow: hidden;
`;

const PrimaryPhoto = styled.img`
  min-width: 100%;
  max-width: 150%
  min-height: 100%;
  max-height: 150%;
  cursor: pointer;
`;

const SecondaryPhoto = styled.img`
  min-width: 100%;
  max-width: 150%
  min-height: 100%;
  max-height: 150%;
  cursor: pointer;
`;

const CommandsContainer = styled.div`
  position:absolute;
  top: 13px;
  right: 10px;
  height: 92%;
  z-index: 2;
`;

const SocialItem = styled.div`
  margin: 10px;
  padding: 10px 12px;
  display: inline-block;
  width: 70px;
  font-weight: 600;
  line-height: 16px;
  cursor: pointer;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.14);
`;

const Icon = styled.svg`
  margin-right: 10px;
  float: left;
  height: 15px;
  width: 15px;
  overflow: visible;
`;

const CommandItem = styled.div`
  margin: 10px;
  padding: 10px 12px;
  display: inline-block;
  position: absolute;
  bottom: 0;
  right: 0;
  font-weight: 600;
  line-height: 16px;
  cursor: pointer;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.14);
`;



const Banner = (props) => {

  // TODO: Change this to Amazon S3 Storage path later
  let path = '/photos/house/';

  let photo1 = 'default.jpg';
  let photo2 = 'default.jpg';
  let photo3 = 'default.jpg';
  let photo4 = 'default.jpg';
  let photo5 = 'default.jpg';

  const loadPhotos = () => {
    if (!props.photos) {
      return;
    }
    if (props.photos[0]) {
      photo1 = props.photos[0].file_path;
    }
    if (props.photos[1]) {
      photo2 = props.photos[1].file_path;
    }
    if (props.photos[2]) {
      photo3 = props.photos[2].file_path;
    }
    if (props.photos[3]) {
      photo4 = props.photos[3].file_path;
    }
    if (props.photos[4]) {
      photo5 = props.photos[4].file_path;
    }
  };

  loadPhotos();

  return (
    <BannerContainer id="overview-house-banner" >
      <PhotosContainer className="photos-container" >
        <PrimaryPhotoContainer>
          <PrimaryPhoto src={path + photo1}></PrimaryPhoto>
        </PrimaryPhotoContainer>

        <SecondaryPhotoContainer>
          <SecondaryPhoto src={path + photo2}></SecondaryPhoto>
        </SecondaryPhotoContainer>
        <SecondaryPhotoContainer>
          <SecondaryPhoto src={path + photo3}></SecondaryPhoto>
        </SecondaryPhotoContainer>
        <SecondaryPhotoContainer>
          <SecondaryPhoto src={path + photo4}></SecondaryPhoto>
        </SecondaryPhotoContainer>
        <SecondaryPhotoContainer>
          <SecondaryPhoto src={path + photo5}></SecondaryPhoto>
        </SecondaryPhotoContainer>
      </PhotosContainer>

      <CommandsContainer className="floating-commands" >
        <SocialItem>
          <Icon viewBox="0 0 24 24" fill="transparent" fill-opacity="0" stroke="currentColor" stroke-width="2.25" focusable="false" aria-hidden="true" role="presentation" stroke-linecap="round" stroke-linejoin="round">
            <Share />
          </Icon>
          Share
        </SocialItem>
        <SocialItem>
          <Icon viewBox="0 0 24 24" fill="transparent" fill-opacity="0" stroke="#484848" stroke-width="2.25" focusable="false" aria-label="Save this listing." role="img" stroke-linecap="round" stroke-linejoin="round">
            <Heart />
          </Icon>
          Save
        </SocialItem>
        <CommandItem>View Photos</CommandItem>
      </CommandsContainer>
    </BannerContainer>
  );
};

export default Banner;