var payload = {"Records":[{"ses":{
    "mail": {
        "timestamp": "2017-11-06T09:17:54.164Z",
        "source": "notification@facebookmail.com",
        "messageId": "kqrmv0kjaqhl3rne8vmq61jlb6sdnh4gmq3haao1",
        "destination": [
            "invite@"
        ],
        "headersTruncated": false,
        "headers": [
            {
                "name": "Return-Path",
                "value": "<notification@facebookmail.com>"
            },
            {
                "name": "Received",
                "value": "from mx-out.facebook.com (66-220-155-158.outmail.facebook.com [66.220.155.158]) by inbound-smtp.us-east-1.amazonaws.com with SMTP id kqrmv0kjaqhl3rne8vmq61jlb6sdnh4gmq3haao1 for invite@; Mon, 06 Nov 2017 09:17:54 +0000 (UTC)"
            },
            {
                "name": "X-SES-Spam-Verdict",
                "value": "PASS"
            },
            {
                "name": "X-SES-Virus-Verdict",
                "value": "PASS"
            },
            {
                "name": "Received-SPF",
                "value": "pass (spfCheck: domain of facebookmail.com designates 66.220.155.158 as permitted sender) client-ip=66.220.155.158; envelope-from=notification@facebookmail.com; helo=66-220-155-158.outmail.facebook.com;"
            },
            {
                "name": "Authentication-Results",
                "value": "amazonses.com; spf=pass (spfCheck: domain of facebookmail.com designates 66.220.155.158 as permitted sender) client-ip=66.220.155.158; envelope-from=notification@facebookmail.com; helo=66-220-155-158.outmail.facebook.com; dkim=pass header.i=@facebookmail.com;"
            },
            {
                "name": "X-SES-RECEIPT",
                "value": "AEFBQUFBQUFBQUFIdUtZQytXdzZ0Y015SHQzTUhpNWY2ZCtiY0RiMTVhYVJjMHFQeUx0M20ySUFsQXkwSzJ5YlRzbWJ2Z1B1bUttOHh0ekRsY0FRRVViRDA4S2JVUzVqZmRiS2JzbHQvYkdGSi9zMzU3NkYrNDMxL2RNWVR6MjltV1kxcmxyaVBPdW5wWXFDeDdmU3h6TzQrdFNVRjl4ZHRYQ1dzSytCV0dKZjl0VDZldXd3TjQzOE50WjJQVUZXcktDcTFCWFVxMGoxdlRBbEV6SUFFYjQ0S1VqSXllOHBkOUxpTjF5UTNueGY0dExER3ErN3JqTkVycDFzU2haMFh6QWwvYllJbGRYSEoybW16YjNHV2lMWlhaSks4L0lTaHRQK3ZWSXBYQklvQy9Uekd6QjgxQmc9PQ=="
            },
            {
                "name": "X-SES-DKIM-SIGNATURE",
                "value": "a=rsa-sha256; q=dns/txt; b=QEbiz0CwpTz32UGcfIOJUHdBN+qv1S69TcMB2/MNpy2vibdVDWWX/DzTQhksPZtVNMN6OAtA2H5LwwI+5Fr0o/Df2DSaaE3nwrvVCMsECWRUzK6NboNbxqPF0hEJb1t3p5NOQt5AwhzzL9J6cP7l+iNQR7wP67yiMLrIZ158xks=; c=relaxed/simple; s=224i4yxa5dv7c2xz3womw6peuasteono; d=amazonses.com; t=1509959874; v=1; bh=odl5CbjhElCw9nyxY5wRJ4nzlTl8xlSz1oMT40W1OG0=; h=From:To:Cc:Bcc:Subject:Date:Message-ID:MIME-Version:Content-Type:X-SES-RECEIPT;"
            },
            {
                "name": "DKIM-Signature",
                "value": "v=1; a=rsa-sha256; c=relaxed/simple; d=facebookmail.com; s=s1024-2013-q3; t=1509959873; bh=odl5CbjhElCw9nyxY5wRJ4nzlTl8xlSz1oMT40W1OG0=; h=Date:To:Subject:From:MIME-Version:Content-Type; b=q4RkzgIsFlbM7AsRKJlDdMi1yY1rxGzPC+6oi7BRWys6U4WbqJlhQMqgLQKw2xChzB0gftFEx3V5xS7h1nG5xcttb/k5hV5KNH4evrsxWok+NCmETSIw+INMDI+PwYzkS3yKNumdaXGm4EJ+qXbre04YE7R7f6GQjTvlgmIpDIQ="
            },
            {
                "name": "Received",
                "value": "from facebook.com (rN4rp174KGynLx9vVMJxyV/OKkzzp/o7Uf+9kQPvPkuruptA+KNi2FDQq8tJ7vez 10.224.41.51) by facebook.com with Thrift id 5e959d26c2d311e782740002c994569c-57fa048; Mon, 06 Nov 2017 01:17:53 -0800"
            },
            {
                "name": "X-Facebook",
                "value": "from 2401:db00:2120:b04e:face:0:57:0 ([MTI3LjAuMC4x])  by www.facebook.com with HTTP (ZuckMail);"
            },
            {
                "name": "Date",
                "value": "Mon, 6 Nov 2017 01:17:53 -0800"
            },
            {
                "name": "To",
                "value": "invite@"
            },
            {
                "name": "Subject",
                "value": " invited you to test1"
            },
            {
                "name": "X-Priority",
                "value": "3"
            },
            {
                "name": "X-Mailer",
                "value": "ZuckMail [version 1.00]"
            },
            {
                "name": "Return-Path",
                "value": "notification@facebookmail.com"
            },
            {
                "name": "From",
                "value": "\"\" <notification@facebookmail.com>"
            },
            {
                "name": "Reply-to",
                "value": "noreply <noreply@facebookmail.com>"
            },
            {
                "name": "Errors-To",
                "value": "notification@facebookmail.com"
            },
            {
                "name": "X-Facebook-Notify",
                "value": "event_invite_off_fb; mailid=HMjc1MzkxOTgzOmludml0ZUBmYWNlYm9vay10ZWxlZ3JhbS5zcHJvY2tldGZveC5pbzo5Mjc"
            },
            {
                "name": "List-Unsubscribe",
                "value": "<https://www.facebook.com/o.php?k=AS3jaMPuVTc_tZFW&e=invite%40&mid=HMjc1MzkxOTgzOmludml0ZUBmYWNlYm9vay10ZWxlZ3JhbS5zcHJvY2tldGZveC5pbzo5Mjc>"
            },
            {
                "name": "Feedback-ID",
                "value": "9999:event_invite_off_fb:Facebook"
            },
            {
                "name": "X-FACEBOOK-PRIORITY",
                "value": "0"
            },
            {
                "name": "X-Auto-Response-Suppress",
                "value": "All"
            },
            {
                "name": "Message-ID",
                "value": "<4134b673101baaef3d941dfceb8b5eb3@www.facebook.com>"
            },
            {
                "name": "MIME-Version",
                "value": "1.0"
            },
            {
                "name": "Content-Type",
                "value": "multipart/alternative; boundary=\"b1_4134b673101baaef3d941dfceb8b5eb3\""
            }
        ],
        "commonHeaders": {
            "returnPath": "notification@facebookmail.com",
            "from": [
                "<notification@facebookmail.com>"
            ],
            "replyTo": [
                "noreply <noreply@facebookmail.com>"
            ],
            "date": "Mon, 6 Nov 2017 01:17:53 -0800",
            "to": [
                "invite@"
            ],
            "messageId": "<4134b673101baaef3d941dfceb8b5eb3@www.facebook.com>",
            "subject": " invited you to test1"
        }
    },
    "receipt": {
        "timestamp": "2017-11-06T09:17:54.164Z",
        "processingTimeMillis": 701,
        "recipients": [
            "invite@"
        ],
        "spamVerdict": {
            "status": "PASS"
        },
        "virusVerdict": {
            "status": "PASS"
        },
        "spfVerdict": {
            "status": "PASS"
        },
        "dkimVerdict": {
            "status": "PASS"
        },
        "dmarcVerdict": {
            "status": "PASS"
        },
        "action": {
            "type": "Lambda",
            "functionArn": "arn:aws:lambda:us-east-1::function:",
            "invocationType": "Event"
        }
    }
}}]}

lambda = require("./index.js")

lambda.handler(payload,{},function(data){console.log("DONE")})
