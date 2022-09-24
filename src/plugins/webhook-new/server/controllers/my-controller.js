'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('webhook-new')
      .service('myService')
      .getWelcomeMessage();
  },
});
