import WelcomeTemplate from "@/emails/WelcomeTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
    await resend.emails.send({
        from: "exampe@gmail.com", // have to be a valid email and personal domain email, gmail, outlook will not work
        to: "kutubuddinmondal512@gmail.com",
        subject: "React Email with Resend",
        text: "Test Email"
        // react: <WelcomeTemplate name="Kutub" />
    })
}