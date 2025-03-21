const mongoose = require("mongoose");
// const {
//   CompetitionDashboard,
//   EventDashboard,
//   WorkshopDashboard,
// } = require("../Models/dashboard");
const Event = require("../Models/events");
const Workshop = require("../Models/workshop");
const Competition = require("../Models/competitions");

const getdashboard = async (req, res) => {
  try {
    // Get total counts
    const user_id = req.user._id;
    const totalEvents = await Event.find({ user_id }).countDocuments();
    const totalWorkshops = await Workshop.find({
      user_id,
    }).countDocuments();
    const totalCompetitions = await Competition.find({
      user_id,
    }).countDocuments();
    // Recent entries from each collection
    const recentEvents = await Event.find({ user_id })
      .sort({ date: -1 })
      .limit(10);
    const recentWorkshops = await Workshop.find({ user_id })
      .sort({ date: -1 })
      .limit(10);
    const recentCompetitions = await Competition.find({ user_id })
      .sort({ date: -1 })
      .limit(10);

    // Participants grouped by type (for Stacked Bar Chart)
    const eventParticipants = await Event.aggregate([
      { $group: { _id: null, count: { $sum: "$participants" } } },
    ]);
    const workshopParticipants = await Workshop.aggregate([
      { $group: { _id: null, count: { $sum: "$participants" } } },
    ]);
    const competitionParticipants = await Competition.aggregate([
      { $group: { _id: null, count: { $sum: "$participants" } } },
    ]);

    const participationData = [
      { name: "Events", count: eventParticipants[0]?.count || 0 },
      { name: "Workshops", count: workshopParticipants[0]?.count || 0 },
      { name: "Competitions", count: competitionParticipants[0]?.count || 0 },
    ];

    // Monthly registration trend for each type (Multi-line Chart)
    const formatTrendData = async (Model, label) => {
      return await Model.aggregate([
        { $match: { date: { $type: "date" } } }, // Ensure only valid dates are processed
        {
          $group: {
            _id: { $dateToString: { format: "%Y-%m", date: "$date" } },
            count: { $sum: 1 },
          },
        },
        { $sort: { _id: 1 } },
        { $project: { date: "$_id", count: 1, name: label, _id: 0 } },
      ]);
    };

    const eventTrend = await formatTrendData(Event, "Events");
    const workshopTrend = await formatTrendData(Workshop, "Workshops");
    const competitionTrend = await formatTrendData(Competition, "Competitions");

    const trendData = [...eventTrend, ...workshopTrend, ...competitionTrend];

    res.json({
      stats: {
        totalEvents,
        totalWorkshops,
        totalCompetitions,
        participationData,
        trendData,
      },
      recent: {
        events: recentEvents,
        workshops: recentWorkshops,
        competitions: recentCompetitions,
      },
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
module.exports = {
  getdashboard,
};
