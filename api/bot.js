const { Telegraf } = require('telegraf');

// ضع التوكن الخاص بك هنا
const bot = new Telegraf('7847315022:AAGbUTrd8R1V8bKZMpJCZrVoL3WNiEmDklY');

// ضع رابط موقعك على Vercel هنا
const webAppUrl = 'https://full-mark-access.vercel.app'; 

bot.start((ctx) => {
  ctx.reply('مرحباً بك في بوت FULL MARK التعليمي 🎓\n\nاضغط على الزر أدناه لفتح المنصة والوصول للمحاضرات.', {
    reply_markup: {
      keyboard: [
        [{ text: "🚀 فتح المنصة", web_app: { url: webAppUrl } }]
      ],
      resize_keyboard: true
    }
  });
});

// تشغيل البوت (Webhook mode for Vercel)
module.exports = async (req, res) => {
  try {
    if (req.method === 'POST') {
      await bot.handleUpdate(req.body);
    }
    res.status(200).send('OK');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error');
  }
};
