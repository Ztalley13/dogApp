import React, { useState } from 'react';
// import PhotoCamera from '@material-ui/icons/PhotoCamera';

export default function Main() {
    const [image, setImage] = useState({url: ""});
    const uploadImage = () => {
        console.log(image)
    }
    const uploadWidget = () => {
        const config = {
            cloud_name: 'dtorrdy3z',
            upload_preset: 'dogApp', 
            tags:['dogs']
        };
        window.cloudinary.openUploadWidget(config, (error, result) => {
            if (error) {
                console.log(error);
            } else {
                setImage(result[0]);
                uploadImage();
            }
        });
    };
    return (
        <div className="main">
            <div className="upload">
                <button onClick={uploadWidget} className="upload-button">
                    Button
                </button>
            </div>
        </div>
    );
}
