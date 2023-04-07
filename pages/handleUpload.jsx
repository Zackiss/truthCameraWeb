import axios from "axios";
import {useState} from 'react'

export default function handleUpload(){

    // store file into state
    const [file,setFile] = useState([
        {}
    ])
    let formdata = new FormData();

    formdata.append('image',file);

    axios({
        url:"truthcamera.tech/api/upload",
        method: 'POST',
        Headers:{
        },
        data: formdata
    }).then((res)=>{
        // handle reply
    }).catch(err=>console.log(err))
}