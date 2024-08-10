const formatISODate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleString("ru-RU", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

export default formatISODate;
