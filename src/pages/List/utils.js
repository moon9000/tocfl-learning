export const getPagingData = (data, page, limit) => {
  const totalItems = data.length;
  const currentPage = page ? +page : 0;
  const totalPages = Math.ceil(totalItems / limit);
  return { totalItems, totalPages, currentPage };
};
