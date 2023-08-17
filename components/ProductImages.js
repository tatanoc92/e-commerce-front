import { useState } from "react";
import styled from "styled-components";

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const BigImage = styled.img`
  max-width: 100%;
  max-height: 200px;
`;

const BigImageWrapper = styled.div`
  text-align: center;
`;

const ImageButtons = styled.div`
  display: flex;
  gap: 10px;
  flex-grow: 0;
  margin-top: 10px;
`;

const ImageButton = styled.div`
  border: 2px solid #ccc;
  ${(props) =>
    props.active ? `border-color: #ccc;` : `border-color: transparent;`}
  height: 40px;
  padding: 2px;
  cursor: pointer;
  border-radius: 5px;
`;

export default function ProductImages({ images }) {
  const [mainImage, setMainImage] = useState(images[0]);
  return (
    <>
      <BigImageWrapper>
        <BigImage src={mainImage} alt="" />
      </BigImageWrapper>
      <ImageButtons>
        {images.map((image, index) => (
          <ImageButton
            active={image === mainImage}
            onClick={() => setMainImage(image)}
            key={`product-${index}`}
          >
            <Image alt="" src={image} />
          </ImageButton>
        ))}
      </ImageButtons>
    </>
  );
}
