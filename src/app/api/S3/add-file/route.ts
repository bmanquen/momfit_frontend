import {
  PutObjectCommand,
  PutObjectCommandInput,
  S3Client,
} from "@aws-sdk/client-s3";
import { fromCognitoIdentityPool } from "@aws-sdk/credential-providers";
import { NextRequest, NextResponse } from "next/server";

const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: fromCognitoIdentityPool({
    clientConfig: { region: process.env.AWS_REGION },
    identityPoolId: "us-east-2:9f3ffd1b-7ef1-4ad6-8fef-21f5569b2337",
  }),
});

async function uploadFileToS3(file: Buffer, fileName: string) {
  const fileBuffer = file;

  const uploadParams: PutObjectCommandInput = {
    ACL: "public-read",
    Bucket: process.env.S3_BUCKET_NAME,
    Key: fileName,
    Body: fileBuffer,
    ContentType: fileBuffer["type"],
  };
  const s3Command = new PutObjectCommand(uploadParams);
  await s3Client.send(s3Command);
  return fileName;
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const imageFile: File = formData.get("file") as File;

    const buffer = Buffer.from(await imageFile.arrayBuffer());
    const fileName = await uploadFileToS3(buffer, imageFile.name);

    const imageUrl = `https://${process.env.S3_BUCKET_NAME}.s3.amazonaws.com/${fileName}`;
    return NextResponse.json(
      { imageUrl },
      {
        status: 201,
      }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "There was a problem uploading your image to S3." },
      {
        status: 500,
      }
    );
  }
}
