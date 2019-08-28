import React from 'react';
import styled from 'styled-components';


const BannerContainer = styled.div`
  position: relative;
  /*TODO: remove border when ready*/
  border-top: 1px solid #ccc;
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
`;

const SecondaryPhoto = styled.img`
  min-width: 100%;
  max-width: 150%
  min-height: 100%;
  max-height: 150%;
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

  // TODO: Change this to Amazon S3 Storage path later
  let path = '/photos/house/';

  let photo1 = '/default.jpg';
  let photo2 = '/default.jpg';
  let photo3 = '/default.jpg';
  let photo4 = '/default.jpg';
  let photo5 = '/default.jpg';

  const loadPhotos = () => {
    console.log('photos', props.photos);
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
      <CommandsContainer className="floating-commands" >
        Floating Commands
      </CommandsContainer>
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
    </BannerContainer>
  );
};

export default Banner;