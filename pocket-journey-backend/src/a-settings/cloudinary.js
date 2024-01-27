import multer from "multer"
import { v2 as cloudinary } from "cloudinary"
import { CloudinaryStorage } from "multer-storage-cloudinary"

const avatarUpload = multer({
    storage: new CloudinaryStorage({
      cloudinary,
      params: {
        folder: "Pocket Journey/Avatars"
      },
    }),
  }).single('avatar');
  
  const imageUpload = multer({
    storage: new CloudinaryStorage({
      cloudinary,
      params: {
        folder: "Pocket Journey/Images"
      },
    }),
  }).single('image');

  export default multer