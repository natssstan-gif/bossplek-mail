export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', 'https://bossplek.nl');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { voornaam, achternaam, email, telefoon, datum, sessie, personen, dieet, verhaal } = req.body || {};

  if (!voornaam || !email || !datum) {
    return res.status(400).json({ error: 'Vul naam, e-mail en datum in.' });
  }

  const html = `
    <h2>Nieuwe aanmelding Bossplek</h2>
    <p><strong>Naam:</strong> ${voornaam} ${achternaam || ''}</p>
    <p><strong>E-mail:</strong> ${email}</p>
    <p><strong>Telefoon:</strong> ${telefoon || '-'}</p>
    <p><strong>Datum:</strong> ${datum}</p>
    <p><strong>Sessie:</strong> ${sessie || '-'}</p>
    <p><strong>Personen:</strong> ${personen || '-'}</p>
    <p><strong>Dieetwensen:</strong> ${dieet || '-'}</p>
    <p><strong>Over zichzelf:</strong> ${verhaal || '-'}</p>
  `;

  try {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: 'Bossplek aanmeldingen <bossplek@stanbroere.nl>',
        to: ['bossplek@stanbroere.nl'],
        reply_to: email,
        subject: `Nieuwe aanmelding: ${voornaam} ${achternaam || ''} — ${datum}`,
        html
      })
    });

    const data = await r.json();

    if (!r.ok) {
      return res.status(500).json({ error: data });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
