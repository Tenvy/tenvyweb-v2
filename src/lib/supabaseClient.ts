import { createClient } from "@supabase/supabase-js";

const supabaseObject: any = {
    url: process.env.REACT_APP_SUPABASE_URL,
    key: process.env.REACT_APP_ANON_KEY
}

const supabase = createClient(supabaseObject.url, supabaseObject.key)

export { supabase }