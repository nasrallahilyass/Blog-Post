// utils/slugify.js
const slugify = (text) => {
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-');
};

module.exports = slugify;
