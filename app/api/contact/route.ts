import { NextResponse } from "next/server";
import nodemailer from "nodemailer"

export async function POST(req: Request){
  try{
    const { name, email, phone, message } = await req.json();


    const transporter = nodemailer.createTransport({ service:"gmail", auth: { user:"roboticsclubgecpkd@gmail.com", pass: "iawz htzj aymq tmt" } });

    await transporter.sendMail({
      from:email,
      to:"roboticsclubgecpkd@gmail.com",
      subject: `New Message from ${name}`,
      text: `Message: ${message} phoneNumber: ${phone}`
    })
    return NextResponse.json({ message: "Email sent Successfully !" },{ status:200 })
  }
  catch(error){
    console.log("Error sending email: ",error)
    return NextResponse.json({ error: "Failed to send email" },{status:500})
  }
}
