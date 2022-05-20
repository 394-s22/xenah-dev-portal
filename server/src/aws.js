const { S3Client, AbortMultipartUploadCommand } = require("@aws-sdk/client-s3");
const {path} = require("path");
const {fs} = require("fs");
const {hash} = require("object-hash");

const client = new S3Client({ region: "us-east-2" });
const storeBase64 = async (base64File) => {

    const params = {
        Key: hash (base64File),
        Body: Buffer.from(base64File, 'base64'), // <---------
        Bucket: "xenahtestbucket",
        ContentType: 'application/pdf'
    };

    return await client.upload(params).promise();
};

module.exports = {storeBase64};

