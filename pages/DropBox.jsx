// handleFile.js
import React, { useCallback, useState} from 'react';
import { useDropzone } from 'react-dropzone';
import { SHA1 } from 'crypto-js';
import axios from 'axios';
import styles from '../styles/Home.module.css';
import { Button } from '@geist-ui/core'
import styled, { createGlobalStyle } from 'styled-components';
import Fireworks from './backupFiles/Fireworks'



const DropzoneContainer = styled.div`
  width: 400px;
  height: 200px;
  border: 2px dashed #0070f3;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-bottom: 20px;
`;


const UploadMessage = styled.p`
  color: #333;
  font-size: 18px;
`;




function DropBox() {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [imageSrc, setImageSrc] = useState(null);
  const [showFireworks, setShowFireworks] = useState(false);

  // const onDrop = useCallback(async (acceptedFiles) => {
  //   const file = acceptedFiles[0];
  //   const reader = new FileReader();
  //   reader.onload = async () => {
  //     const hash = SHA1(reader.result).toString();
  //     const formData = new FormData();
  //     formData.append('hash', hash);
  //     formData.append('image', file);
  //     try {
  //       const response = await axios.post('http://truthcamera.tech:8080/api/upload', formData);
  //       console.log(response);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   reader.readAsArrayBuffer(file);
  // }, []);

  const onDrop = useCallback((acceptedFiles) => {
    // Upload files to the server here
    console.log(acceptedFiles);
    const file = acceptedFiles[0];
    // const reader = new FileReader();

    // reader.onload=()=>{
    //   setImageSrc(reader.result);
    // }

    // reader.readAsDataURL(file)
    setUploadedFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
  }, []);





  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
<>
    <div className={styles.card}>
      <DropzoneContainer {...getRootProps()}>
        <input {...getInputProps()} />
        <p>Drag and drop an image here, or click to select a file.</p>
      </DropzoneContainer>

      <Fireworks show={showFireworks} />

      <ul>
        {uploadedFiles.map((file, index) => (
          <li key={index}>{file.name}</li>
        ))}
      </ul>

    </div>

    <div>
          <Button>Verify</Button>
    </div>
</>
  );
}

export default DropBox;