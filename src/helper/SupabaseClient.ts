import { createClient } from "@supabase/supabase-js"

const supabaseUrl= import.meta.env.VITE_SUPABASE_URL
const supabaseAnoKey =  import.meta.env.VITE_SUPABASE_ANO_KEY

const supabase = createClient(supabaseUrl,supabaseAnoKey);
export default supabase;