'use strict';

var request = require('request');
var cheerio = require('cheerio');
var zipObject = require('lodash.zipobject');

var url = 'https://verify.greenlifemedical.com/recommendations?rec_id=';
var keys = ['initials', 'issued', 'expires', 'doctor'];

exports.verify = function(id, callback) {
  function parseContent(err, res, body) {
    if (err) {
      return callback(err);
    }

    var $ = cheerio.load(body);
    var notice = $('#flash_notice')[0];

    if (notice && $(notice).text().trim() === 'No recommendation found') {
      return callback(null, false);
    }

    var result = $('#container .result')
      .text()
      .trim()
      .split('\n')
      .filter(function (val) {
        return val.trim();
      })
      .slice(2)
      .map(function(val) {
        return val.split(': ')[1];
      });

    result = zipObject(keys, result);
    callback(null, true, result);
  }

  request({uri: url + id}, parseContent);
};
