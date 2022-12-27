import { Injectable } from '@nestjs/common';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable()
export class SupabaseService {
    
    client: SupabaseClient;

    constructor() {
        process.env['supabase_url'] = 'https://vbwgwexedzhcxpxxnhey.supabase.co';
        process.env['supabase_key'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZid2d3ZXhlZHpoY3hweHhuaGV5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzEzNDc4MDMsImV4cCI6MTk4NjkyMzgwM30.HOoqjpMbANvarr0565BgqaG-XSl_qgYm2H6MzZS6ajo';
        
        this.client = createClient(process.env['supabase_url']!, process.env['supabase_key']!);
    }

}