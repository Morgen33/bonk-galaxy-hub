import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://your-project.supabase.co'
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'your-anon-key'

export const supabase = createClient(supabaseUrl, supabaseKey)

export interface ProjectSubmission {
  id?: string
  project_name: string
  description: string
  category: string
  website: string
  twitter?: string
  discord?: string
  contract_address: string
  launch_url: string
  telegram_url?: string
  project_image_url?: string
  status: 'pending' | 'approved' | 'rejected'
  created_at?: string
}