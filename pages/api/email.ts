// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
const sgMail = require("@sendgrid/mail");

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const { email, message, firstName, lastName, phone, state, address } =
    req.body;

  console.log(req.body);

  const msg = {
    to: email,
    from: process.env.COMPANY_EMAIL, // Use the email address or domain you verified
    subject: `Message from website from: ${firstName} ${lastName}`,
    message: `
    
      Name: ${firstName} ${lastName}
      Phone: ${phone}
      Address: ${address}
      State: ${state}

      .................................................................

      ${message}
    `,
  };

  sgMail.send(msg).then(
    () => {},
    (error: any) => {
      console.error(error);

      if (error.response) {
        console.error(error.response.body);
        res.status(400).json({ name: "Email not sent. Please try again" });
      } else {
        res.status(200).json({ name: "Email sent" });
      }
    }
  );
}
