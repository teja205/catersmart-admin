import { baseApi } from "./baseApi";


export function uploadHairstyle(data, onUploadProgress) {
    return baseApi({
      url: "add_caterer",
      method: "POST",
      data,
      onUploadProgress
    });
  }


  export function getUserlogDetails() {
    return baseApi({
      url: "userlogs_details",
      method: "GET",
    });
  }