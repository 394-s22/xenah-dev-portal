const { S3 } = require("@aws-sdk/client-s3");
const { uuid } = require("uuidv4")

const s3Bucket = new S3({ region: 'us-east-2', params: { Bucket: 'xenahtestbucket'} });

const storeBase64 = async (base64File) => {
    const fileKey = uuid();
    const data = {
        Key: fileKey,
        Body: Buffer.from(base64File, 'base64'),
        Bucket: "xenahtestbucket",
        ContentType: 'application/pdf'
    };
    const url = `https://xenahtestbucket.s3.us-east-2.amazonaws.com/${fileKey}`;

    console.log(url);
    s3Bucket.putObject(data, (err, data) => {
        if (err) {
            console.log(err)
        } else {
            console.log('WOOOOO');
            console.log(data);
        }
    });
    return 'boo'
};

module.exports = {storeBase64};

