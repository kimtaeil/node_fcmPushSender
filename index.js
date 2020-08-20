const FCM = require('fcm-node');

//var serverKey = 'AAAA48_VRVU:APA91bG_aYQQc3ihnu6CwXORu5RyuakL0v1VwzSqVnVpJ9yq72DFUdwOo64BXOwyx36zJW-McBjiMttGgAYGOSHPCtlI_u0VS12rL4ApUxc31ufUxsdCe3f1qSRhaQCIhqhr5qqHBiy9'; // 공구우먼
//const serverKey = 'AAAAk75HQKc:APA91bEmKW8d39m7H09G22QKVCkKT__7SXWXgHEb9Eu60ZJon7x-FH5PrhCjjBPI_2D3H36YlFX5rsCuwi4niZtc5YA1aNDnHkxwzGWsf3oUfqjMEVLHesIZBU_RdHTcV1fI72ZdDIsn'; // Mapp
// const serverKey = 'AAAALwXkTrU:APA91bEF_EcazZgrK87s0qi5P4pAauQyFd5uOJ2l93hlxayqpE8b4WAFkhw2vgaIs99_aD5qZEldorNlKE9oKQ-1ORcfnvRnGuYpUZyE2DW5j93x9_cPrEAEyeli-Vn7nswU7WxOWn2g';
const serverKey = 'AAAALwXkTrU:APA91bEF_EcazZgrK87s0qi5P4pAauQyFd5uOJ2l93hlxayqpE8b4WAFkhw2vgaIs99_aD5qZEldorNlKE9oKQ-1ORcfnvRnGuYpUZyE2DW5j93x9_cPrEAEyeli-Vn7nswU7WxOWn2g';
// const serverKey = 'AAAAn-qfysk:APA91bEbXcubx8J6rJdlmLpFlAAFBdpyDzuySOTGfJS2YBADp0Z8iGMsZnAtycxtgbeBm8G8qEwOA7T5hgQpcZefRUowv_WWqWTHzHZtyYTi9aD9WWj9MuHnfz8HWCuF7SiHxIAANNUp';

const tokens = [
    'eoRVForkM0OwohM-Ngkawp:APA91bEpEAe8rnB0mnBD7w-Ve-QBi_FPFDFUTDBud-C5PnOrLRlypmyp46jWIq3VUcuD62Xeoe134bbojll3Kdhz5tlsHUemXyzkq9_q-mZHif-F3DoSm-Vnuw7xAZdLrfvWi8YB67ox'
    // 'c0jmAMVyJ8k:APA91bHareUR3ELFO6bUzvytZNTURniu_z0i7UTcHSsZoNwyah-L1FQZtTm50ZHclMnGCH6OARnkmrd5HYyZIlH1RMp-aDlaCQPuGKDziLonj4ImXT4Ki_pijXML1D4-kC6qW29w_hpx',
    // 'dkea_22yzc0:APA91bEfvSRqLAeRqUH0qzEJI0gmE-mKO6RYfCyDgNg2LWo20CSh9hRBsZS3-qqjI53rwHbwUAu76ItHRXjwEmFNFRL-Bp-EtKHVkxNlU9nyA02x5KuCnqX3AoRBoFNuTiMJAGdeQp_e'
    // 'dHumeeGrUhE:APA91bFfaI0k4Qj7smzL3DYdMw-HtlKBNEj3nK0kx1NzyQIj1KQpjdNvg5AeFqU-a70IiO47v9xVvgSA1QHplUjp-jvH8nfoiy2-a1Kwd-JHz1Y97qON-_xfLVLWHGk-avc41iCfvpYA',  // 넥서스 6P
    // 'dMdYP71iBy0:APA91bEmDhRMFGqX80R_CmgRdVn-BmNsB9Kj7M6x81GtVaZaRRNtumgC2BKDJnhA8E9AkjCfNlDtF2VP2Q2OOrPSMww3DIdr3AmDek3Y_wjrtwWj8NRDC2efNO5yc7uEvMI0oEZKSIZQ',  // A7
    // 'fRqhNMjOb_8:APA91bFJFGZ-Nq1WO65ikkZaeBlw1oM6wdN0x4TR_lxa543ChkdEMdWh4XupmxV2e5Q28bq3Zgv8tcuVbVq6DbdrnJgT2gLSLzMMvukygiFaELA1m73pff709BurhM46E1amwtlzsE5R',  // iPad
    // 'dc6EDv6_RBM:APA91bFw0u538mRmj9KoXHa-zBDPWxtgDrGUNNglQUIR1EDVNlq9DKBWWVItRYykdH45LFVv7HC7Zr9IubXBQ8rIwOT02DvIH5k9ezZWjF6N1NgxZSNCve4o3hQ2XoFzA1sZ1DRtyUuu',  // iphone 7+
    // 'c--BWIW8V6g:APA91bFP6zcvs9qUJLXa4AJJV5T47hEy55qrwDVRzDxlN-HNbrDqhFf-0m-OieRLxo8uxCo8Puw0Jr3RL_VtbVjVQ842J3zS02zC1VNwTiEgYdnhYjKdRSKFIu7653jQq-K7yw3rB6XI',  // LG G6
    // 'dcaFG4wIbcU:APA91bF5NR4caoCIWmbF3EvHVRgGjoX5Inxv9IHBs57m2WwTd4r9Mbaxceeu0dlNbzQB65fkGf7h_JyZrvXIqeYHPIx4j4FYIyfuzS92w4deDMDJlXmQCYdZFg5D7WTZIqcTnScgX9pd'   // 갤 s 7
];

function getPushData(token) {
    /** 발송할 Push 메시지 내용 */

    // iOS 푸시 데이터 구조 (FIXED)
    const push_data_ios = {
        to: token,
        mutable_content: true,
        content_available: true,
        priority: 'high',
        notification: {
            click_action: 'myapp',
            title: 'Test-title--1-2-141243--5',
            body: 'test-body--2---222222',
            sound: 'default',
            collapse_key : 'myapp'
        },
        data: {
            message_id: 9876,
            date: '2018.08.24 13:56:50',
            image: 'http://g509womenapp.godomall.com/data/mPush/img/8b583_20180858.jpg',   // 필드명 수정 가능
            thumbnail: 'https://myappimg.godo.co.kr/app-images/AN3RNAEG/t/push/200217/3228292660362211.jpeg',
            link: 'https://m.naver.com'
            // ... 기타 custom data
        }
    }

    // Android 푸시 데이터 구조 (FIXED)
    const push_data_android_data = {
        to: token,
        data: {
            message_id: "912461245",
            title: "123",
            body: "8812푸카푸카.....",
            sound: "default",
            customData: "custom data hahahah",
            priority: "high",
            show_in_foreground: true,
            image: 'http://g509womenapp.godomall.com/data/mPush/img/8b583_20180858.jpg',
            link: 'https://m.naver.com'
        }
    };

    return push_data_ios;
}

const fcm = new FCM(serverKey);

console.log('--- start ---');
for (let i = 0; i < tokens.length; i++) {
    fcm.send(getPushData(tokens[i]), function (err, response) {
        if (err) {
            console.error('Push 메시지 발송 실패\n' + err);
            return;
        }

        console.log('Push 메시지 발송 성공\n' + response);
    });
}
console.log('--- end ---');
