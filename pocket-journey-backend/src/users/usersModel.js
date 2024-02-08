import mongoose, { Schema } from "mongoose"
import bcrypt from "bcrypt"

const UsersSchema = new Schema({
    name: {
        type: String,
        /* required: true, */
    },
    lastName: {
        type: String,
       /*  required: true, */
    },
    email: {
        type: String,
      /*   required: true, */
    },
    password: {
        type: String,
    },
    googleId: {
        type: String,
    },
    birthday: {
        type: String,
    },
    avatar: {
      type: String,
      required: false // Imposta su true se l'avatar è obbligatorio
  },
    bio: {
        type: String,
    },
  
   likes:  {
        type: String,
    }
});

/* UsersSchema.pre("save", async function () {
    const newUserData = this
  
    if (newUserData.isModified("password")) {
      const plainPW = newUserData.password
  
      const hash = await bcrypt.hash(plainPW, 11)
      newUserData.password = hash
    }
  })
  
  UsersSchema.methods.toJSON = function () {
    const currentUserDocument = this
    const currentUser = currentUserDocument.toObject()
    delete currentUser.password
    delete currentUser.createdAt
    delete currentUser.updatedAt
    delete currentUser.__v
    return currentUser
  }
  
  UsersSchema.static("checkCredentials", async function (email, plainPW) {
    const user = await this.findOne({ email })
  
    if (user) {
      const passwordMatch = await bcrypt.compare(plainPW, user.password)
  
      if (passwordMatch) {
        return user
      } else {
        return null
      }
    } else {
      return null
    }
  }) */

export const User = mongoose.model("users", UsersSchema)
