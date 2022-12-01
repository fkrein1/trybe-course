db.supplies.updateMany(
  {},
  {
    $pull: {
      items: {
        name: { $in: ['pens', 'envelopes'] },
      },
    },
  },
);

db.profiles.updateOne(
  { _id: 1 },
  {
    $pull: {
      votes: { $gte: 6 },
    },
  },
);
