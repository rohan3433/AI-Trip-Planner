import Trip from "../models/trip.js";

export const createTrip = async (req, res) => {
  try {
    const { destination, startDate, endDate, activities } = req.body;
    const newTrip = new Trip({
      userId: req.user.userId,
      destination,
      startDate,
      endDate,
      activities,
    });
    await newTrip.save();
    res.status(201).json({ message: "Trip saved successfully", trip: newTrip });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

export const getTrips = async (req, res) => {
  try {
    const trips = await Trip.find({ userId: req.user.userId });
    res.status(200).json(trips);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

