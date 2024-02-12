const mongoose = require("mongoose");

const listingSchema = new mongoose.Schema({
  hotel_name: String,
  location: {
    type: { type: String, default: "Point" },
    coordinates: [Number],
  },
  rooms: [
    {
      type: String,
      quantity: Number,
      price_per_night: Number,
    },
  ],
  amenities: [String],
  images: [String],
  host: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  bookings: [{ type: mongoose.Schema.Types.ObjectId, ref: "Booking" }],
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }],
});

listingSchema.index({ location: "2dsphere" });

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;
