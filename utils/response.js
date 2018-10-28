const response = (res, status, data, code = null) => {
  let statusCode;
  if (status === 'success') {
    statusCode = code || 200;
    return res.status(statusCode).json({ status, data });
  }
  statusCode = code || 400;
  return res.status(statusCode).json({ status, message: data });
}

export default response;
