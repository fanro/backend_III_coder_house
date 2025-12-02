const logger = (req, res, next) => {
  console.log(
    `${new Date().toISOString().slice(0, 19).replace('T', ' ')} | ${
      req.method
    } | ${req.url}`
  );

  next();
};

export { logger };
