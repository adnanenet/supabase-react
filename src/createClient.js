import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient(
    'https://wftpuavbkksfvosehsao.supabase.co',
    'token'
)