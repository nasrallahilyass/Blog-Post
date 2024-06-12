const slugify = (text) => {
  if (!text) {
    throw new Error('Input text is undefined');
  }
  return text
    .toLowerCase()
    .replace(/[^\w\s-]+/g, '') // Allow spaces and hyphens
    .replace(/ +/g, '-'); // Replace spaces with hyphens
};

module.exports = slugify;
