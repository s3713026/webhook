module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 5000),
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    defaultHeaders: {
      'Custom-Header': 'my-custom-header',
      Authorization: 'Bearer my-very-secured-token',
    },
  },  
});
