export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, contact, project } = req.body || {};
  if (!name?.trim() || !contact?.trim()) {
    return res.status(400).json({ error: 'Name and contact are required' });
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) {
    return res.status(503).json({ error: 'Telegram is not configured yet' });
  }

  const message = [
    'NEW PORTFOLIO REQUEST',
    '',
    `Name: ${name.trim()}`,
    `Contact: ${contact.trim()}`,
    `Project: ${(project || 'Not specified').trim()}`,
    `Source: fayzullo.ai portfolio`
  ].join('\n');

  const telegram = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: chatId, text: message })
  });

  if (!telegram.ok) {
    return res.status(502).json({ error: 'Telegram delivery failed' });
  }

  return res.status(200).json({ ok: true });
}
