import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email?: string;
  phone: string;
  service_type: string;
  device_details?: string;
  issue_description: string;
  preferred_contact_time?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const contactData: ContactEmailRequest = await req.json();
    console.log("Processing contact form submission:", contactData);

    const emailPromises = [];

    // Send confirmation email to user (if email provided)
    if (contactData.email) {
      const userEmailPromise = resend.emails.send({
        from: "Benextech <onboarding@resend.dev>",
        to: [contactData.email],
        subject: "We received your service request!",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h1 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">Thank you for contacting Benextech!</h1>
            
            <p>Dear ${contactData.name},</p>
            
            <p>We have received your service request and will get back to you as soon as possible. Here's a summary of your submission:</p>
            
            <div style="background: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
              <h3 style="margin-top: 0; color: #007bff;">Service Request Details</h3>
              <p><strong>Service Type:</strong> ${contactData.service_type}</p>
              <p><strong>Phone:</strong> ${contactData.phone}</p>
              ${contactData.device_details ? `<p><strong>Device Details:</strong> ${contactData.device_details}</p>` : ''}
              <p><strong>Issue Description:</strong> ${contactData.issue_description}</p>
              ${contactData.preferred_contact_time ? `<p><strong>Preferred Contact Time:</strong> ${contactData.preferred_contact_time}</p>` : ''}
            </div>
            
            <div style="background: #e3f2fd; padding: 15px; border-radius: 5px; margin: 20px 0;">
              <h4 style="margin-top: 0; color: #1976d2;">What's Next?</h4>
              <ul style="margin-bottom: 0;">
                <li>Our technical team will review your request</li>
                <li>You'll receive a call or message within 24 hours</li>
                <li>We provide free diagnostics for all device issues</li>
                <li>Transparent pricing with no hidden costs</li>
              </ul>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd;">
              <h4 style="color: #333;">Need Immediate Help?</h4>
              <p>For urgent issues, contact us directly:</p>
              <p>📞 <strong>Phone:</strong> +1 (555) 123-4567</p>
              <p>💬 <strong>WhatsApp:</strong> +1 (555) 987-6543</p>
              <p>⏰ <strong>Emergency Line:</strong> Available 24/7</p>
            </div>
            
            <div style="margin-top: 30px; text-align: center; color: #666; font-size: 14px;">
              <p>Best regards,<br><strong>The Benextech Team</strong></p>
              <p>Professional Tech Support & Device Repair Services</p>
            </div>
          </div>
        `,
      });
      emailPromises.push(userEmailPromise);
    }

    // Send notification email to business
    const businessEmailPromise = resend.emails.send({
      from: "Benextech Contact Form <onboarding@resend.dev>",
      to: ["benextech@gmail.com"],
      subject: `New Service Request from ${contactData.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #dc3545; border-bottom: 2px solid #dc3545; padding-bottom: 10px;">🚨 New Service Request</h1>
          
          <div style="background: #fff3cd; border: 1px solid #ffeaa7; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #856404;">Customer Information</h3>
            <p><strong>Name:</strong> ${contactData.name}</p>
            <p><strong>Phone:</strong> ${contactData.phone}</p>
            ${contactData.email ? `<p><strong>Email:</strong> ${contactData.email}</p>` : '<p><em>No email provided</em></p>'}
            ${contactData.preferred_contact_time ? `<p><strong>Preferred Contact Time:</strong> ${contactData.preferred_contact_time}</p>` : ''}
          </div>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #007bff;">Service Request Details</h3>
            <p><strong>Service Type:</strong> <span style="background: #007bff; color: white; padding: 3px 8px; border-radius: 3px; font-size: 12px;">${contactData.service_type}</span></p>
            ${contactData.device_details ? `<p><strong>Device Details:</strong> ${contactData.device_details}</p>` : '<p><em>No device details provided</em></p>'}
            <div style="margin-top: 15px;">
              <strong>Issue Description:</strong>
              <div style="background: white; padding: 10px; border-left: 4px solid #007bff; margin-top: 5px;">
                ${contactData.issue_description}
              </div>
            </div>
          </div>
          
          <div style="background: #d4edda; border: 1px solid #c3e6cb; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <h4 style="margin-top: 0; color: #155724;">⚡ Action Required</h4>
            <ul style="margin-bottom: 0;">
              <li>Contact customer within 24 hours</li>
              <li>Schedule diagnostic appointment if needed</li>
              <li>Update CRM system with this request</li>
              <li>Follow up on service completion</li>
            </ul>
          </div>
          
          <div style="margin-top: 30px; text-align: center; padding: 20px; background: #f1f3f4; border-radius: 5px;">
            <p style="margin: 0; color: #666; font-size: 14px;">
              <strong>Timestamp:</strong> ${new Date().toLocaleString()}<br>
              <strong>Submission ID:</strong> ${Date.now()}
            </p>
          </div>
        </div>
      `,
    });
    emailPromises.push(businessEmailPromise);

    // Wait for all emails to be sent
    const emailResults = await Promise.allSettled(emailPromises);
    
    // Check for any failures
    const failures = emailResults.filter(result => result.status === 'rejected');
    if (failures.length > 0) {
      console.error("Some emails failed to send:", failures);
      return new Response(
        JSON.stringify({ 
          error: "Some emails failed to send",
          details: failures 
        }),
        {
          status: 500,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    console.log("All emails sent successfully");
    return new Response(
      JSON.stringify({ 
        success: true,
        message: "Emails sent successfully",
        userEmailSent: !!contactData.email
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );

  } catch (error: any) {
    console.error("Error in send-contact-emails function:", error);
    return new Response(
      JSON.stringify({ 
        error: "Failed to send emails",
        message: error.message 
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);