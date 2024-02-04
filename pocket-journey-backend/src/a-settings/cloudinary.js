import multer from "multer"
import { v2 as cloudinary } from "cloudinary"
import { CloudinaryStorage } from "multer-storage-cloudinary"

const avatarUpload = multer({
    storage: new CloudinaryStorage({
      cloudinary,
      params: {
        folder: "Pocket Journey"
      },
    }),
  }).single('avatar');
  
  /* const imageUpload = multer({
    storage: new CloudinaryStorage({
      cloudinary,
      params: {
        folder: "Pocket Journey"
      },
    }),
  }).single('image'); */

  export default avatarUpload