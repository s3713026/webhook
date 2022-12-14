'use strict';
const vMes = require ('./message');
var request = require('request');
module.exports = ({ strapi }) => ({
  send(ctx) {
    ctx.body = strapi
      .plugin('webhook')
      .service('myService')
      .getWelcomeMessage();
      console.log(ctx.request.body)

      let data = ctx.request.body;
      // console.log(data.sender.id)
      // console.log(data.event)
      // console.log(data.sender.name)
      // console.log(data.message.text)
      let id = '';
      let name ='';
      let message ='';
      if(data.event == 'conversation_started' || data.message.text == 'Back to home'){
        if(data.event == 'conversation_started'){
          id = data.user.id 
          name = data.user.name;
        }else{
          id = data.sender.id;
          name = data.sender.name;
        }
        
        var options = {
          'method': 'GET',
          'url': 'https://chatapi.viber.com/pa/send_message',
          'headers': {
            'X-Viber-Auth-Token': '4feffbba4367e257-50449034ca590392-d2a0f6775587dbe',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            "receiver": id,
            "min_api_version": 7,
            "type": "text",
            "text": `Chào ${name}, bạn cần hỗ trợ dịch vụ gì `,
            "keyboard": {
              "Type": "keyboard",
              "Buttons": [
                {
                  "Columns": 2,
                  "Rows": 2,
                  "Text": "<br><font color=\"#494E67\"><b>Kiểm tra vé</b></font>",
                  "TextSize": "large",
                  "TextHAlign": "center",
                  "TextVAlign": "middle",
                  "ActionType": "reply",
                  "ActionBody": "Kiểm tra vé",
                  "BgColor": "#f7bb3f",
                  "Image": "https://static.thenounproject.com/png/383236-200.png"
                },
                {
                  "Columns": 2,
                  "Rows": 2,
                  "Text": "<br><font color=\"#494E67\"><b>Đặt Vé</b></font>",
                  "TextSize": "large",
                  "TextHAlign": "center",
                  "TextVAlign": "middle",
                  "ActionType": "open-url",
                  "OpenURLType": "internal",
                  "InternalBrowser": {
                    "Mode": "partial-size",
                    "CustomTitle": "VietJet"
                  },
                  "ActionBody": "https://www.vietjetair.com/vi",
                  "BgColor": "#7eceea",
                  "Image": "https://cdn1.iconfinder.com/data/icons/travel-and-vacation-set-1/64/book_flight-512.png"
                },
                {
                  "Columns": 2,
                  "Rows": 2,
                  "Text": "<br><font color=\"#494E67\"><b>Check-in Online</b></font>",
                  "TextSize": "large",
                  "TextHAlign": "center",
                  "TextVAlign": "middle",
                  "ActionType": "open-url",
                  "OpenURLType": "internal",
                  "InternalBrowser": {
                    "Mode": "fullscreen",
                    "CustomTitle": "Your Title"
                  },
                  "ActionBody": "https://www.vietjetair.com/vi/checkin",
                  "BgColor": "#f6f7f9",
                  "Image": "https://cdn0.iconfinder.com/data/icons/airplane-sign-1/64/check-in-online-plane-tickle-512.png"
                },
                {
                  "Columns": 2,
                  "Rows": 2,
                  "Text": "<br><font color=\"#494E67\"><b>Sky Holiday</b></font>",
                  "TextSize": "large",
                  "TextHAlign": "center",
                  "TextVAlign": "middle",
                  "OpenURLType": "internal",
                  "InternalBrowser": {
                    "Mode": "fullscreen",
                    "CustomTitle": "Your Title"
                  },
                  "ActionType": "open-url",
                  "ActionBody": "https://skyholidays.vietjetair.com/vi/",
                  "BgColor": "#dd8157",
                  "Image": "http://channel.mediacdn.vn/2019/6/28/photo-1-1561701666662578266614.jpg"
                },
                {
                  "Columns": 2,
                  "Rows": 2,
                  "Text": "<br><font color=\"#494E67\"><b>Dịch vụ khác</b></font>",
                  "TextSize": "large",
                  "TextHAlign": "center",
                  "TextVAlign": "middle",
                  "ActionType": "reply",
                  "ActionBody": "Dịch vụ khác",
                  "BgColor": "#f6f7f9",
                  "Image": "https://banner2.cleanpng.com/20180411/cue/kisspng-airplane-cargo-aircraft-flight-icon-a5-airplane-5ace19b686fba2.8375169615234564385529.jpg"
                },
                {
                  "Columns": 2,
                  "Rows": 2,
                  "Text": "<br><font color=\"#494E67\"><b>Tổng đài hỏi đáp</b></font>",
                  "TextSize": "large",
                  "TextHAlign": "center",
                  "TextVAlign": "middle",
                  "ActionType": "reply",
                  "ActionBody": "Tổng đài hỏi đáp",
                  "BgColor": "#a8aaba",
                  "Image": "https://cdn-icons-png.flaticon.com/512/950/950299.png"
                }
              ]
            }
          })
        
        };
        request(options, function (error, response) {
          // if (error) throw new Error(error);
          console.log(response.body);
        });
      }
      else if(data.event == 'message'){
        id = data.sender.id;
        name = data.sender.name;
        message = data.message.text;
        if (message == "Kiểm tra vé"){
          vMes.noBooking(id);
          vMes.checkTicket(id);
        }
      }
  },
});


