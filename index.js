const simpleParser = require('mailparser').simpleParser;
const fs = require('fs')
const cheerio = require('cheerio')
const AWS = require('aws-sdk');
const s3 = new AWS.S3();
const TelegramBot = require('node-telegram-bot-api');
const bot = new TelegramBot(process.env.TELEGRAM_API_KEY, { polling: false });

const bucketName = 'facebooktelegram';

function readEmail(stream, callback){
    simpleParser(stream, (err, mail)=>{
        var $ = cheerio.load( mail.html );
        var elements = $('td');
        var event = $("#email_content table tbody tr td table tbody tr td table tbody tr td strong a")
        var event_title = event.text()
        var event_url = event.attr('href')
        var time = $("#email_content > table > tbody > tr:nth-child(2) > td:nth-child(2) > table > tbody > tr:nth-child(8) > td > table > tbody > tr:nth-child(2) > td > table > tbody > tr > td.ib_mid > span").text()
        var location = $("#email_content > table > tbody > tr:nth-child(2) > td:nth-child(2) > table > tbody > tr:nth-child(8) > td > table > tbody > tr:nth-child(3) > td > table > tbody > tr > td.ib_mid > span > span").text()
        var description = $("#email_content > table > tbody > tr:nth-child(2) > td:nth-child(2) > table > tbody > tr:nth-child(8) > td > table > tbody > tr:nth-child(4) > td > span").text()
        console.log(event_title)
        console.log(event_url)
        console.log(time)
        console.log(location)
        console.log(description)
        var message="<b>"+event_title+"</b>\n"
        message += "<i>"+description+"</i>\n"
        message += "Time: " + time + "\n"
        message += "Location: " + location + "\n"
        console.log(message)
        bot.sendMessage(process.env.CHANNEL, message, { "parse_mode": "HTML" }).then(
            function (data) {
                console.log("resolving bot send")
                callback(null, null);
            }
        );
        
    })
}

exports.handler = function(event, context, callback) {
    console.log('Process email');
 
    var sesNotification = event.Records[0].ses;
    console.log("SES Notification:\n", JSON.stringify(sesNotification, null, 2));
    
    // Retrieve the email from your bucket
    s3.getObject({
            Bucket: bucketName,
            Key: sesNotification.mail.messageId
        }, function(err, data) {
            if (err) {
                console.log(err, err.stack);
                callback(err);
            } else {

                readEmail(data.Body, callback);
                // Custom email processing goes here
                
                
            }
        });
};