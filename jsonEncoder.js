require('dotenv').config()
//console.log(process.env.CLIENTSECRET)

const sampleDataInvalid = 'invalid json'
const sampleDataValid = {
    "type": "service_account",
    "project_id": "productdevcms",
    "private_key_id": "010ff97efefe4461784bbb1c8e3928c9cfab9667",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCs4wbjn00A7WUm\n6cR3/Rz7/hxPYa8BteE1gDHHfP4avXldhvUogWgaToSXnlmc6AaamKN8Ux2SRzxo\nfYKXB53+/RFi8+pxisOsCfMp+yH9tN8JGzWh8Hcx2H7JshamyFrWQm44Se3+jtQM\n6eULemitEZt1rnL5koO5EilyKzE6SyPVrz/Taeta8xlT/xB+57SUn1KlYOeuRl1A\nG8ZHESJ4qnmAS7qvJgAmmc9atgHvv35bbNOls+5QzgIUVQJqh7jzkuLrq+ItgWdn\nGur2GY01z6EkxfgULN4Z/p33vIMYNpGIRYFbOzJef9UHGysk7xBmkDI4mvMiM5rz\nSejfuJKFAgMBAAECggEAA95B2DPx6sm6T/2TqhpIB2dZxiOUYSsVnTcqEKGTpJDa\nt09UCueiUacHa8Zc5kLWwFIWo6skZ+fKH+MMWfQPV+uHnmQrZFugzHzzK4b1Qrzv\nmeo5mqRLtm92nsKqTmmrMUy5NJngMP2McbbbVhS+D36WW4gKBdrTsaoIsrI+tA7S\n4KMg/+WumPNYaw9dWIwggjdXTSryHA7Fugec9dR0XxCZzQS+P6YD6AYgAwzu1+L2\nieDox+koUItVtn07iVwGh6TD62+wevxQ7XOWc0JJMPz26NzM7WkEYWnnWEKTfHYC\nj1njzZAIy6JUTvNJzWglhreMclXyPoaxRxIjnA/jXQKBgQDnN9H8j2TCZmF/dRMK\ni0tzDiiWEolUEAacGTbAu2Givaesa8JyySH6W53b867zCjCFtninT53WV6Xp1vuR\nFUyyGRFwwI0nl99K1R6uHz1U+iTFGQUV1csYC41VSS2jQZu/kytdmdKe5NcQ0txj\nYPeCtiqzvtNM8EjvI2HM7sQR4wKBgQC/arWyAZ3ztnwQDWZHQwWyEp+seyv4HtKP\nXxwiVUJKN364x0ZPVlgiTTgeQvTNsQrLVouKLZfjLyolEsKYvncpXN6ElMEMo1g4\nFDGtiBw2uviRWoq9qRApnHJuicrq8nOmtrJZ2yi7VqmIcnfL5HLhZbgaOdApKvG/\nO36oRcZWdwKBgQCih8Z/9nwperZGVhGQc+IRen5lH5qREMLUr5ShXhZ/wzk+JnGF\nJoVP617H4j+0cBEzrNSbJ4gXx3zFJ22myoYjGyP7Uh7nGgbIH491blg6h6uZMME2\nXBZrTJOIw+vkupW00MrG/P3k24+iL9bjtKHHrC3QM+9sQevCzehNmfkRaQKBgQCk\nwZt8iMnEkMh+JJppMfYADOmk0yvIV/dSckHMB2iUaunG77bD6QTZGW/5FBaTyRQK\nawaWO6IlaF41JM2cHSyBzK62nTcAwsPXGQKdY68tKId0zOLoVlFUD5WrMS0YRvFm\niJBAqVOI1BH+INCeDZcYDK6G3EYgeRc1S2c8PTp3BwKBgBu7MPaPnDFuPPo3FDN1\nzFJBagO0510Bo0HT+c7jF8Y/yHhq2sn09S+5PxMM8slWis9T2b/onE6cjYu0qtM+\n/EXLfxNJ2O+SlLrOh13J4soJVHd6pC6jz0Gn05yz1BM90bUPDQkA8aD2P0Ws3OpU\nYrxwwDZn3XJFwDnW27d98FRs\n-----END PRIVATE KEY-----\n",
    "client_email": "productdevserviceaccount@productdevcms.iam.gserviceaccount.com",
    "client_id": "117610332186909293918",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/productdevserviceaccount%40productdevcms.iam.gserviceaccount.com"
  };
const sampleDataEmpty = ''

const minifyAndEncode = (jsonData) => {
    if(!jsonData) {
        console.log('no data passed in')
        return
    }
    if(!isJsonString) {
        console.log('Data is not valid JSON')
        return
    }

    //let stringData = JSON.stringify(jsonData)
    let parsedData = JSON.parse(jsonData)

    console.log(parsedData.type)
    return 
}

function isJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

minifyAndEncode(process.env.CLIENTSECRET)