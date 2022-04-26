import React , { useCallback, useEffect, useRef, useState }  from "react";
import {Multiselect} from "multiselect-react-dropdown";
import { assetsImages } from '../Constant/images';
import Select from 'react-select';
import {getCategories }from '../api/services';
import axios from "axios";
import Catererselect from "./catererselect"

export default function CatererProfile(){
    const userRef = useRef();
    const errRef = useRef();
    const photoUploadRef = useRef();
    const [email, setEmail] = useState('');
    const [name,setName] = useState("");
    const [location,setLocation] = useState("")
    const [photos, setPhotos] = useState([]);
    const [videoFile, setVideoFile] = useState([]);
    const [previewVideo, setPreviewVideo] = useState([]);
    const [gifs, setGifs] = useState([]);
    const [category, setCategory] = useState([])
    const [cateringType, setCateringType] = useState([])
    const [corporarteEvent, setCorporarteEvent] = useState([])
    const [dietary, setDietary] = useState([])
    const [vendortype, setVendortype] = useState([])

    

useEffect(() => {
  fetchData()
  // renderData()
}, []);



// const fetchData = async () => {
//   const response = await fetch(
//     "https://stg-backend.catersmart.in/api/caterer_option"
//   );
//   const data = await response.json();
//   setCategory(data.data);
//   setCateringType(data.data.cateringtype)
//   console.log(category,'category')
//   console.log(cateringType,'cater')
// };

const fetchData = async () => {
  const response = await fetch(
    "https://stg-backend.catersmart.in/api/caterer_option"
  );
  const data = await response.json();
  setCategory(data);
  console.log(category,"category")
};



  

const data = [
    {CateringType : 'Delivery' ,id : 1},
    {CateringType : 'Take Away' ,id : 2},
    {CateringType : 'Dining' ,id : 3}
]



  const onBrowsePhoto = () => {
    photoUploadRef.current.click();
    console.log("open")
  };


const fileSelectedHandler =  (e) => {
   setPhotos(URL.createObjectURL(e.target.files[0]))
}




const onFileChange = (e) => {
    const { name, value, files } = e.target;
    console.log("name = ", name);
    let str = files[0].name;
    let newstr = "";
  
    let ext = "";
    for (var i = newstr.length - 1; i >= 0; i--) {
      ext += newstr[i];
    }
    let format = ext;
    console.log("format of the file uploaded is ", format);
    if (files.length) {
      let file = [];
      let previewFile = [];
      for (let index = 0; index < files.length; index++) {
        const fileSize = files[index].size / 1024 / 1024;
        console.log(fileSize);
        if (Math.floor(fileSize) <= 30) {
          previewFile.push(URL.createObjectURL(files[index]));
          file.push(files[index]);

          console.log("previewFile");
        }
      }
      if (name === "video") {
        if (
          format !== "gif" &&
          format !== "png" &&
          format !== "jpg" &&
          format !== "jpeg"
        ) {
          setVideoFile(file);
          setPreviewVideo(previewFile);
        } else {
          console.log("uploaded gif");
          setGifs(file);
          setPreviewVideo(previewFile);
        }
      } else {
        setPhotos(file);
        console.log(photos);
      }
    }
  };


  const submitForm = async(e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("location", location);
    formData.append("file", photos);
    formData.append("cateringType", cateringType);
    formData.append("dietary", dietary);
    formData.append("vendortype", vendortype);
    console.log(formData,"formdata")

  
    axios
      .post("https://stg-backend.catersmart.in/api/update_caterer", formData)
      .then((res) => {
        alert("File Upload success");
        console.log(res,'response')
      })
      .catch((err) => alert("File Upload Error",err)
     
      );
      
  };

  const onSelect = () => {
    console.log("parent function called")
  }


const [cateringoptions] = useState(data)
const [cateringoptionsr] = useState(cateringType)
    return(
        <div className="profile">
            <form 
              onSubmit={submitForm} 
            >
                <div className="row justify-content-between">
                    <div className="col-3 imgUpload">
                        <input
                            //   hidden
                            type="file"
                            multiple={false}
                            name={"photo"}
                            accept={"image/*"}
                            ref={photoUploadRef}
                            onChange={fileSelectedHandler}
                            key={File.name}
                         
                            />
                        <div className="image"> 
                            <img src={photos} alt="imgpreview"/>
                        </div>
                        {/* <button onClick={onBrowsePhoto}>
                            <img
                                src={assetsImages.uploadIcon}
                                alt="Catersmart Logo"
                                /> 
                        </button> */}
                    </div>
                    <div className="col-8 row inputs">
                        <label>Email</label>
                        <input className="col-12" type="email" 
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}
                        />
                        <label>Name</label>
                        <input className="col-12"  type="text" 
                         value={name}
                         onChange={(e) => setName(e.target.value)}
                        />
                        <label>Location</label>
                        <input className="col-12"  type="text"
                         value={location}
                         onChange={(e) => setLocation(e.target.value)}
                        />
                    </div>
                </div>
               
               
           
                <div className="select">
                    {/* <Multiselect options={cateringoptions} displayValue = "CateringType"
                       value={cateringType}
                       onChange={(e) => {setCateringType(e.target.value)}}
                    /> */}
                    <Catererselect func = {onSelect}/>
                   
                    {/* <Multiselect options={cateringoptions} displayValue = "CateringType" />
                    <Multiselect options={cateringoptions} displayValue = "CateringType" />
                    <Multiselect options={cateringoptions} displayValue = "CateringType" />
                    <Multiselect options={cateringoptions} displayValue = "CateringType" /> */}
                </div>
         
               
                  <button className="btn btn-primary p-4"
                 
                  > Submit</button>
            </form>
        </div>
    );
}

// export default CatererProfile;