var request = require('request');

function checkTicket(id){
    var options = {
        'method': 'GET',
        'url': 'https://chatapi.viber.com/pa/send_message',
        'headers': {
          'X-Viber-Auth-Token': '4feb123571e7e4b9-3fd0f7323f765805-72c5dd7ea810f8fe',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "receiver": id,
          "min_api_version": 7,
          "type": "text",
          "text": "Book vé ngay và nhận ngàn ưu đãi bạn nhé",
          "keyboard": {
            "Type": "keyboard",
            "Buttons": [
              {
                "Columns": 3,
                "Rows": 2,
                "Text": "<font color=\"#494E67\">Méo</font><br><br>",
                "TextSize": "medium",
                "TextHAlign": "center",
                "TextVAlign": "bottom",
                "ActionType": "reply",
                "ActionBody": "Back to home",
                "BgColor": "#f7bb3f",
                "Image": "https: //s12.postimg.org/ti4alty19/smoke.png"
              },
              {
                "Columns": 3,
                "Rows": 2,
                "Text": "<font color=\"#494E67\">Mua vé ngay</font><br><br>",
                "TextSize": "medium",
                "TextHAlign": "center",
                "TextVAlign": "bottom",
                "OpenURLType": "internal",
                  "InternalBrowser": {
                    "Mode": "partial-size",
                    "CustomTitle": "VietJet"
                  },
                "ActionType": "open-url",
                "ActionBody": "https://www.vietjetair.com/vi/?utm_source=google-vj-vi&utm_medium=cpc&utm_campaign=ada_awoq32022_kw_rsa_0622awo_brand_name_awoq32022_cpa&gclid=Cj0KCQjwnP-ZBhDiARIsAH3FSRci_cWBXHGt62axjLawmJgbqdhg235ltwvH8306BKFU_j8c6I0Oj4UaAiBOEALw_wcB",
                "BgColor": "#f7bb3f",
                "Image": "https: //s14.postimg.org/us7t38az5/Nonsmoke.png"
              }
            ]
          }
        })
      };
      request(options, function (error, response) {
        if (error) throw new Error(error);
        console.log(response.body);
      });
}

function noBooking(id){
    var options = {
        'method': 'GET',
        'url': 'https://chatapi.viber.com/pa/send_message',
        'headers': {
          'X-Viber-Auth-Token': '4feb123571e7e4b9-3fd0f7323f765805-72c5dd7ea810f8fe',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "receiver": id,
          "min_api_version": 7,
          "type": "text",
          "text": "Hệ thống kiểm tra bạn chưa có vé nào",
        })
      };
      request(options, function (error, response) {
        if (error) throw new Error(error);
        console.log("TEST",response.body);
      });
}


module.exports = {noBooking,checkTicket};

