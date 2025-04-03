import { NextResponse } from "next/server";
import nodemailer from "nodemailer"

export async function POST(req: Request){
  try{
    const { name, email, phone, message } = await req.json();


    const transporter = nodemailer.createTransport({ service:"gmail", auth: { user:"mohammedmuflih704@gmail.com", pass: "hhxk ltsu zozr teic" } });

    await transporter.sendMail({
      from:email,
      to:"mohammedmuflih704@gmail.com",
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
