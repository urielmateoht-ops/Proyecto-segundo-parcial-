// .env
VITE_SUPABASE_URL= "https://xhdwapkypuilqbencmuw.supabase.co"
VITE_SUPABASE_ANON_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhoZHdhcGt5cHVpbHFiZW5jbXV3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE4NTE1NjksImV4cCI6MjA3NzQyNzU2OX0.SQkW-flooCjUlK9r0_I04P4MTjwoEqFV1UejFggmdYU"

// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)