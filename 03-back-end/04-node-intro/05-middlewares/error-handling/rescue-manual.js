function rescue(action) {
  return async function (req, res, next) {
    try {
      await action(req, res, next);
    } catch (err) {
      next(err);
    }
  };
}

const rescue = action => async (req, res, next) => {
  try {
    await action(req, res, next);
  } catch(err) {
    next(err);
  }
}

