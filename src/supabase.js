import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://setpvqrccelfjmovdfrv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNldHB2cXJjY2VsZmptb3ZkZnJ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU3MjUyNDAsImV4cCI6MjAxMTMwMTI0MH0.MizcAIuKVp9_LAIG5wRdCOfOaSIPcQsVB2-3Nk1nMI4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
