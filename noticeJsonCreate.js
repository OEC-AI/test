var fs = require('fs');
var omkhome = "C:/Git_Dev/iot_OMK_local/omk/";//"/home/pi/omk/";var fs = require('fs');
var CR = '\n';

var nudgeID = "100";
var OMKID = "OMK99";
var noticeText = "test,\"test\",test";
var noticeImage = "https://s3-ap-northeast-1.amazonaws.com/iot-notice-image/1_A.jpg";
var notAchieveFlg = false;
var notAchieveNoticeText = "teste";
var notAchieveNoticeImage = null;

function createJsonFile(){
  var noticeJsonData = {
    nudgeID               : nudgeID,
    OMKID                 : OMKID,
    noticeText            : noticeText,
    noticeImage           : noticeImage,
    notAchieveFlg         : notAchieveFlg,
    notAchieveNoticeText  : notAchieveNoticeText,
    notAchieveNoticeImage : notAchieveNoticeImage
  };

  fs.writeFile(omkhome + 'notice.json', JSON.stringify(noticeJsonData, null, '  '), (e) => {
    if (e) console.log("failed...");
    else console.log("success!");
  });
}

createJsonFile();
