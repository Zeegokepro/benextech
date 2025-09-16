import { createClient, type SupabaseClient } from '@supabase/supabase-js'

// Read possible keys without crashing the app if missing
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
  || (typeof window !== 'undefined' ? (window as any).__LOVABLE_SUPABASE_URL : undefined)

const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY
  || import.meta.env.VITE_SUPABASE_KEY
  || (typeof window !== 'undefined' ? (window as any).__LOVABLE_SUPABASE_ANON_KEY : undefined)

// Don't throw at import time to avoid blank screen on pages that don't need Supabase
let _client: SupabaseClient | null = null

export const isSupabaseConfigured = Boolean(
  supabaseUrl && supabaseKey && !String(supabaseUrl).includes('your-project')
)

export function getSupabase(): SupabaseClient {
  if (!_client) {
    if (!isSupabaseConfigured) {
      throw new Error('Supabase is not configured. Open the Cloud tab to connect the project, then refresh.')
    }
    _client = createClient(supabaseUrl as string, supabaseKey as string)
  }
  return _client
}

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