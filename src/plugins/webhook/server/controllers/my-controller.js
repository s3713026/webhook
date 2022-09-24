'use strict';

module.exports = ({ strapi }) => ({
  send(ctx) {
    ctx.body = strapi
      .plugin('webhook')
      .service('myService')
      .getWelcomeMessage();
  },
});


