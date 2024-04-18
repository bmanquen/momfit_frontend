import {
  DeleteObjectCommand,
  DeleteObjectCommandInput,
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

export async function DELETE(request: NextRequest) {
  try {
    const { fileName } = await request.json();
    const deleteParams: DeleteObjectCommandInput = {
      Bucket: process.env.S3_BUCKET_NAME,
      Key: fileName,
    };
    const s3DeleteCommand = new DeleteObjectCommand(deleteParams);
    s3Client.send(s3DeleteCommand);
    return NextResponse.json({ status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "There was an issue removing your file from S3." },
      { status: 500 }
    );
  }
}
