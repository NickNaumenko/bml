const formatDate = date => {
  const dateNumber = Number(date);
  const startDate = new Date(dateNumber);
  return `${startDate.getFullYear()}-${startDate.getMonth()}-${startDate.getDate()}`;
}

module.exports = formatDate;