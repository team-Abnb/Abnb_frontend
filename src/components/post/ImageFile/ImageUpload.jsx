/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useRef, useState } from 'react';
import * as S from '../../../style/Main/ImageUpload';
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
            <S.ImgContainer>
                {/* <StImg alt="" src={prevImg} style={{ margin: 'auto' }} /> */}
                {prevImg.map((image, id) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <div key={id}>
                        <S.Img src={image} alt={`${image}-${id}`} />
                        <S.DeleteButton type="button" onClick={() => handleDeleteImage(id)}>
                            x
                        </S.DeleteButton>
                    </div>
                ))}
            </S.ImgContainer>
            <S.Label htmlFor="fileinput">
                <S.ImgUp alt="Logo" type="file" src="https://cdn-icons-png.flaticon.com/512/2360/2360557.png" />
                <S.Input
                    id="fileinput"
                    type="file"
                    multiple
                    ref={fileInput}
                    name="file"
                    onChange={event => {
                        handleImage(event);
                    }}
                />
            </S.Label>
        </div>
    );
}
