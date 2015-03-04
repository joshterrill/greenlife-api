var request = require("request");
var cheerio = require("cheerio");

exports.verify = function(recId) {
  request({ uri: "https://verify.greenlifemedical.com/recommendations?utf8=%E2%9C%93&rec_id="+ recId + "",}, function(error, response, body) {
    var $ = cheerio.load(body);

    $("#flash_notice").each(function() {
      var result = $(this);
      var text = result.text();

      if(text != "No recommendation found") {
        console.log("Verified");
      } else {
        console.log("Not verified");
      }

    });

  });  
}
