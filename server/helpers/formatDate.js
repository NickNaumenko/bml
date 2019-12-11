const formatDate = date => {
  const dateNumber = Number(date);
  const stringDate = new Date(dateNumber);

  const format = date => date < 10 ? `0${date}` : date;
  const formattedMonth = format(stringDate.getMonth() + 1);
  const formattedDate = format(stringDate.getDate());

  return `${stringDate.getFullYear()}-${formattedMonth}-${formattedDate}`;
}

module.exports = formatDate;