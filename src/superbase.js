import { createClient } from '@supabase/supabase-js'
const projectURL = import.meta.env.VITE_PROJECT_URL;
const anonKey = import.meta.env.VITE_ANON_KEY;

export const supabase = createClient(projectURL,anonKey)