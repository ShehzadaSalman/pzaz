const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    // Forward the client IP so ipapi.co detects the real user location
    const clientIp = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? '';
    const url = clientIp
      ? `https://ipapi.co/${clientIp}/json/`
      : 'https://ipapi.co/json/';

    const response = await fetch(url, {
      headers: { 'User-Agent': 'pzaz-geo-detect/1.0' },
    });

    if (!response.ok) {
      throw new Error(`ipapi.co responded with ${response.status}`);
    }

    const data = await response.json();

    return new Response(
      JSON.stringify({
        country_code: data.country_code ?? '',
        continent_code: data.continent_code ?? '',
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  } catch (err) {
    console.error('geo-detect error:', err);
    // Return empty strings so the client falls back to default currency (EUR)
    return new Response(
      JSON.stringify({ country_code: '', continent_code: '' }),
      {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});
