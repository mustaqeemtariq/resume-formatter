import mongoose from 'mongoose';

const Response = mongoose.model('Response', {
    id: String,
    data: Object,
  });

  export default Response;