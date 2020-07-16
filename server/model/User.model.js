import mongoose from 'mongoose'
import bcrypt from 'bcrypt-nodejs'

mongoose.set('useCreateIndex', true)

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true
    },
    role: {
      type: [String],
      default: ['user']
    },
    password: {
      type: String,
      required: true
    },
    picture: {
      type: String
    },
    hashtag: {
      type: String
    }
  },
  {
    timestamp: true
  }
)

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next()
  }

  this.password = bcrypt.hashSync(this.password)

  return next()
})

userSchema.method({
  passwordMatches(password) {
    console.log(bcrypt.hashSync(password), this.password)
    return bcrypt.compareSync(password, this.password)
  }
})

userSchema.statics = {
  async findAndValidateUser({ username, password }) {
    if (!username) {
      throw new Error('No Email')
    }
    if (!password) {
      throw new Error('No Password')
    }

    const user = await this.findOne({ username }).exec()
    if (!user) {
      throw new Error('No User')
    }

    const isPasswordOk = await user.passwordMatches(password)

    if (!isPasswordOk) {
      throw new Error('PasswordIncorrect')
    }

    return user
  }
}

export default mongoose.model('users', userSchema)
