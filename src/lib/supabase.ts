import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://your-project.supabase.co'
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || import.meta.env.VITE_SUPABASE_KEY

if (!supabaseUrl || !supabaseKey) {
  console.error('Supabase environment variables:', { supabaseUrl, supabaseKey })
  throw new Error('Missing Supabase environment variables. Please check your Lovable Cloud setup.')
}

export const supabase = createClient(supabaseUrl, supabaseKey)

export type ContactSubmission = {
  id?: string
  created_at?: string
  name: string
  phone: string
  email?: string
  service_type: string
  device_details?: string
  issue_description: string
  preferred_contact_time?: string
}