import { NextResponse } from "next/server";
import { sendMail } from '../../libs/sendMail';

export async function POST(request) {
  try {
    const formData = await request.json();
    await sendMail(formData);
    return NextResponse.json({ message: 'Email sent!' });
  } catch (error) {
    console.log('Backend Error:', error);
    console.log('Backend Error Object:', JSON.stringify(error, null, 2));
    return NextResponse.json({ error: error.message });
  }
}