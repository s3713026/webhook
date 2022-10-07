'use strict';
var request = require('request');
module.exports = ({ strapi }) => ({
  send(ctx) {
    ctx.body = strapi
      .plugin('webhook')
      .service('myService')
      .getWelcomeMessage();
      console.log(ctx.request.body)

      let data = ctx.request.body;
      console.log(data)
      let id = '';
      let name ='';
      let message ='';
      if(data.event == 'mesage'){
        id = data.sender.id;
        name = data.sender.name;
        message = data.message.text;
        console.log(id + name + message);
        if (message == "Hello"){
          var options = {
            'method': 'GET',
            'url': 'https://chatapi.viber.com/pa/send_message',
            'headers': {
              'X-Viber-Auth-Token': '4feb123571e7e4b9-3fd0f7323f765805-72c5dd7ea810f8fe',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              "receiver": id,
              "min_api_version": 1,
              "sender": {
                "name": "Aka bot "
              },
              "tracking_data": "tracking data",
              "type": "text",
              "text": `Chào ${name} bạn khỏe không, mình là bot!`
            })
          
          };
          request(options, function (error, response) {
            if (error) throw new Error(error);
            console.log(response.body);
          });
          
        }
      }
  },
});


