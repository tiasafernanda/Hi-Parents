const host = 'hi-parent-be.herokuapp.com';
const port = 3000;

module.exports = {
  host,
  port,
  useSSL: true,
  baseUrl: function () {
    return this.useSSL ? `https://${host}` : `https://${host}`;
  },
};
