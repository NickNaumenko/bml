function paginate(totalItems, currentPage, pageSize) {
  const pagesCount = Math.ceil(totalItems / pageSize);

  if (currentPage < 1) {
    currentPage = 1;
  }
  if (currentPage > pagesCount) {
    currentPage = pagesCount;
  }

  return {
    offset: currentPage * pageSize - pageSize,
    limit: pageSize,
    pagesCount,
    currentPage
  };
};

module.exports = paginate;