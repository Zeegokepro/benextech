import { z } from "zod"

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email").optional().or(z.literal("")),
  service_type: z.string().min(1, "Please select a service type"),
  device_details: z.string().optional(),
  issue_description: z.string().min(10, "Please describe the issue in detail"),
  preferred_contact_time: z.string().optional(),
})

export type ContactFormData = z.infer<typeof contactFormSchema>