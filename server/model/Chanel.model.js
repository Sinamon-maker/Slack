import mongoose from 'mongoose'

mongoose.set('useCreateIndex', true)

const chanelSchema = new mongoose.Schema(
  {
  chanelname: {
    type: String,
    required: true,
    unique: true
  },
  usersIds: { type: [String], default: []},
  data: Buffer
},
  {
    timestamp: true
  }
)

console.log(chanelSchema.path('chanelname'))
export default mongoose.model('chanels', chanelSchema)
