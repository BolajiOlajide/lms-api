const response = (res, status, data, code = null) => {
  let statusCode;
  if (status === 'success') {
    statusCode = (code === null) ? 200 : code;
    return res.status(statusCode).json({ status, data });
  }
  statusCode = (code === null) ? 400 : code;
  return res.status(400).json({ status, message: data });
}

export default response;
