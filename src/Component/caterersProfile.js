import React , { useCallback, useEffect, useRef, useState }  from "react";
import {Multiselect} from "multiselect-react-dropdown";
import { assetsImages } from '../Constant/images';


const CatererProfile = () => {
    const photoUploadRef = useRef();
    const [photos, setPhotos] = useState([]);
    const [videoFile, setVideoFile] = useState([]);
    const [previewVideo, setPreviewVideo] = useState([]);
    const [gifs, setGifs] = useState([]);
  

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


const [cateringoptions] = useState(data)
    return(
        <div className="profile">
            <form>
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
                        <button onClick={onBrowsePhoto}>
                            <img
                                src={assetsImages.uploadIcon}
                                alt="Catersmart Logo"
                                /> 
                        </button>


{/* <div className="custom-input-box">
              <div>
                {photos && photos.length > 0 ? (
                  <>
                    <div
                      className="close-icon-container"
                  
                    >
                    
                    </div>
                    <div className="slide-show-container">
                      {photos.map((photo) => {
                        console.log(photos);
                        return (
                          <>
                            <img
                              src={URL.createObjectURL(photo)}
                              width={"100%"}
                            />
                          </>
                        );
                      })}
                    </div>
                  </>
                ) : (
                  <>
                    
                    <p className="title-txt">Upload Face Image</p>
                    <input
                      hidden
                      type="file"
                      multiple
                      name={"photo"}
                      accept={"image/*"}
                      ref={photoUploadRef}
                      onChange={onFileChange}
                      text="BROWSE"
                      key={File.name}
                    />
                    <div
                      className="browse-button button"
                      onClick={onBrowsePhoto}
                    >
                      <p>BROWSE</p>
                    </div>
                    <p className="size-txt">Maximum size 25MB</p>
                  </>
                )}
              </div>
            </div> */}
                    </div>
                    <div className="col-8 row inputs">
                        <label>Email</label>
                        <input className="col-12" type="email" />
                        <label>Name</label>
                        <input className="col-12"  type="text" />
                        <label>Location</label>
                        <input className="col-12"  type="text" />
                    </div>
                </div>
               
               
           
                <div className="select">
                    <Multiselect options={cateringoptions} displayValue = "CateringType" />
                    <Multiselect options={cateringoptions} displayValue = "CateringType" />
                    <Multiselect options={cateringoptions} displayValue = "CateringType" />
                    <Multiselect options={cateringoptions} displayValue = "CateringType" />
                    <Multiselect options={cateringoptions} displayValue = "CateringType" />
                </div>
            </form>
        </div>
    );
}

export default CatererProfile;