exports.addDaysToDate = (daysToAdd, currentDate = new Date()) => currentDate
  .setDate(currentDate.getDate() + daysToAdd);


exports.formatDate = (date = new Date()) => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}
