var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var addressSchema = new Schema(
  {
    village: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String },
    pin: { type: Number },
    user: [{ type: Schema.Types.ObjectId, ref: 'userSchema' }],
  },
  { timestamps: true }
);
var address = mongoose.model('Address', addressSchema);
module.exports(address);
