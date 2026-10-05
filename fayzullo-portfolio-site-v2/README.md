# Fayzullo Portfolio

## Run locally

```bash
npm install
npm run dev
```

Open the address printed by Vite.

`npm run dev` is enough to preview the design. The contact form requires the Vercel serverless route, so use `npx vercel dev` after configuring the environment variables if you need to test Telegram delivery on a local computer.

## Contact form → Telegram

The client sends a form submission to `/api/contact`. The serverless function sends the request to Fayzullo's Telegram only when these deployment environment variables are present:

```text
TELEGRAM_BOT_TOKEN=your_new_bot_token
TELEGRAM_CHAT_ID=Fayzullo_numeric_chat_id
```

Do not put either value in client-side JavaScript, an HTML file, or Git.

For Vercel: import this folder or repository, then add both values in **Project Settings → Environment Variables** for Production and Preview, and deploy. After Fayzullo opens the bot and sends it `/start`, retrieve his numeric chat ID through Telegram's `getUpdates` endpoint using the new bot token, then enter that ID as `TELEGRAM_CHAT_ID`.

## Production check

1. Send `/start` to the bot from Fayzullo's Telegram account.
2. Set both environment variables in Vercel.
3. Publish and submit a test request.
4. Confirm the message arrives in Fayzullo's Telegram.

## Publish with a domain

1. Upload this project to a private or public GitHub repository.
2. In Vercel, select **Add New → Project**, import the repository, and deploy with the default Vite settings.
3. Add `TELEGRAM_BOT_TOKEN` and `TELEGRAM_CHAT_ID` under **Project Settings → Environment Variables**, then redeploy.
4. Open **Project Settings → Domains**, add the purchased domain, and copy the exact DNS record Vercel shows into the DNS settings of the domain registrar.
5. Wait for DNS verification in Vercel, then choose the primary domain and enable the suggested `www` redirect if needed.
