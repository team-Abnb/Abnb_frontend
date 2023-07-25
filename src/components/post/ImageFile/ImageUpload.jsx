/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useRef, useState } from 'react';
import styled from 'styled-components';

export default function ImageUpload({ setImageFile }) {
    const fileInput = useRef();
    // const [prevImg, setPrevImg] = useState('');
    const [prevImg, setPrevImg] = useState([]);
    /* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */
    const handleImage = event => {
        const imageLists = [];
        const imageUrlLists = [...prevImg];
        for (let i = 0; i < event.target.files.length; i++) {
            imageLists.push(event.target.files[i]);
        }
        console.log(imageLists);

        for (let i = 0; i < imageLists.length; i++) {
            const currentImageUrl = URL.createObjectURL(imageLists[i]);
            imageUrlLists.push(currentImageUrl);
        }
        setImageFile(imageLists);
        setPrevImg(imageUrlLists);
    };

    const handleDeleteImage = id => {
        setPrevImg(prevImg.filter((_, index) => index !== id));
    };

    return (
        <div>
            <StImgContainer>
                {/* <StImg alt="" src={prevImg} style={{ margin: 'auto' }} /> */}
                {prevImg.map((image, id) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <div key={id}>
                        <StImg src={image} alt={`${image}-${id}`} />
                        <StDeleteButton type="button" onClick={() => handleDeleteImage(id)}>
                            x
                        </StDeleteButton>
                    </div>
                ))}
            </StImgContainer>
            <StLabel htmlFor="fileinput">
                <StImgUp alt="Logo" type="file" src="https://cdn-icons-png.flaticon.com/512/2360/2360557.png" />
                <StInput
                    id="fileinput"
                    type="file"
                    multiple
                    ref={fileInput}
                    name="file"
                    onChange={event => {
                        handleImage(event);
                    }}
                />
            </StLabel>
        </div>
    );
}

const StImg = styled.img`
    width: 40%;
    height: 40%;
    object-fit: cover;
`;
const StImgUp = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;
const StInput = styled.input`
    display: none;
`;
const StImgContainer = styled.div`
    /* width: 680px;
  height: 300px; */
    width: 100%;
    height: 40%;
    background: linear-gradient(
        to right,
        rgb(239, 143, 166) 0%,
        rgb(219, 67, 118) 50%,
        rgb(227, 25, 120) 100%
    ) !important;
    border: 4px solid pink;
`;

const StLabel = styled.label`
    display: block;
    margin-bottom: 10px;
    width: 70px;
    height: 70px;
`;

const StDeleteButton = styled.button`
    border-radius: 10px;
    border: 0px;
`;
