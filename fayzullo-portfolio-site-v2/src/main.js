import './style.css';
import './refinement.css';

const copy = {
  uz: {
    navWork: 'Ishlar', navAbout: 'Men haqimda', navContact: 'Aloqa', headerCta: 'Loyihani boshlash',
    availability: 'YANGI LOYIHALAR UCHUN OCHIQ', eyebrow: 'GRAFIK DIZAYNER · AI KONTENT MUTAXASSISI',
    heroEm: 'g‘oyani', heroLine: 'ko‘rinishga aylantiradi.',
    heroDesc: 'Brend identifikatsiyasi, vizual tizimlar va AI yordamida yaratilgan kontent. Strategik fikr, aniq kompozitsiya va esda qoladigan obrazlar.',
    viewWork: 'Ishlarni ko‘rish', telegramPortfolio: 'Telegram portfolio', quickSocials: 'TOPING / KUZATING', experience: 'YIL\nTAJRIBA',
    aboutLabel: 'MEN HAQIMDA', introTitle: 'Dizayn — shunchaki chiroyli ko‘rinish emas. U e’tiborni ushlab, brendni tanitadi.',
    introText: 'Men 4+ yildan beri bizneslarga vizual tilda gapirishga yordam beraman. Hozir Anhor Evolution jamoasida, Anhor Park va ekotizimdagi loyihalar uchun kontent hamda dizayn yarataman.',
    talkLink: 'Hamkorlikni muhokama qilaylik ↗', statYears: 'yil dizaynda', statAi: 'yilga yaqin AI kontent', statIdeas: 'g‘oyalar uchun imkon',
    workLabel: 'TANLANGAN ISHLAR', workNote: 'Har bir loyiha - o‘ziga xos ton, tizim va xarakter.', upscaleType: 'Brand identity', kadirovaType: 'Identika va ijtimoiy tarmoq', maqsadType: 'Brand guidelines', allWork: 'Barcha loyihalarni Telegram’da ko‘rish', atlasLabel: 'LOYIHA ICHIDAN',
    filmTitle: 'Rang-barang dunyoga\n<em>xush kelibsiz.</em>', filmText: 'Anhor Parkning eng shaddod, quvnoq va mehribon yenoti Mily Boo bilan katta sarguzasht boshlanadi. Kulgu, do‘stlik va aql bovar qilmas voqealar hali oldinda.', filmCta: 'Treylerni YouTube’da ochish', filmNote: 'TO‘LIQ MULTFILM TEZ ORADA',
    socialLabel: 'KUZATIB BORING', contactEyebrow: 'KEYINGI LOYIHANGIZNI BOSHLAYLIK', contactTitle: 'Yaxshi g‘oya\n<em>kutmasligi</em> kerak.', nameLabel: 'Ismingiz', contactLabel: 'Telefon yoki Telegram', projectLabel: 'Loyiha haqida', namePlaceholder: 'Ismingizni yozing', contactPlaceholder: '+998 / @username', projectPlaceholder: 'Qisqacha aytib bering', sendRequest: 'So‘rov yuborish', backTop: 'Yuqoriga ↑', formSending: 'Yuborilmoqda...', formSuccess: 'Qabul qilindi. Tez orada aloqaga chiqamiz.', formError: 'Xatolik yuz berdi. Telegram orqali yozing.'
  },
  ru: {
    navWork: 'Работы', navAbout: 'Обо мне', navContact: 'Контакты', headerCta: 'Начать проект', availability: 'ОТКРЫТ ДЛЯ НОВЫХ ПРОЕКТОВ', eyebrow: 'ГРАФИЧЕСКИЙ ДИЗАЙНЕР · AI-КОНТЕНТ-СПЕЦИАЛИСТ', heroEm: 'идею', heroLine: 'превращает в образ.', heroDesc: 'Айдентика, визуальные системы и контент, созданный с помощью AI. Стратегическое мышление, точная композиция и запоминающиеся образы.', viewWork: 'Смотреть работы', telegramPortfolio: 'Telegram-портфолио', quickSocials: 'НАЙТИ / ПОДПИСАТЬСЯ', experience: 'ЛЕТ\nОПЫТА', aboutLabel: 'ОБО МНЕ', introTitle: 'Дизайн — это не просто красиво. Он удерживает внимание и делает бренд узнаваемым.', introText: 'Более 4 лет я помогаю бизнесам говорить на визуальном языке. Сейчас создаю контент и дизайн для проектов Anhor Evolution, Anhor Park и экосистемы холдинга.', talkLink: 'Обсудить сотрудничество ↗', statYears: 'года в дизайне', statAi: 'года в AI-контенте', statIdeas: 'возможностей для идей', workLabel: 'ИЗБРАННЫЕ РАБОТЫ', workNote: 'У каждого проекта - свой тон, система и характер.', upscaleType: 'Айдентика бренда', kadirovaType: 'Айдентика и соцсети', maqsadType: 'Бренд-гайдлайн', allWork: 'Смотреть все проекты в Telegram', atlasLabel: 'ИЗНУТРИ ПРОЕКТА', filmTitle: 'Добро пожаловать\nв <em>яркий мир.</em>', filmText: 'Большое приключение начинается вместе с самым шустрым, весёлым и добрым енотом Anhor Park — Mily Boo. Впереди смех, дружба и невероятные истории.', filmCta: 'Открыть трейлер на YouTube', filmNote: 'ПОЛНЫЙ МУЛЬТФИЛЬМ СКОРО', socialLabel: 'СЛЕДИТЕ ЗА МНОЙ', contactEyebrow: 'ДАВАЙТЕ НАЧНЁМ ВАШ ПРОЕКТ', contactTitle: 'Хорошая идея\n<em>не должна ждать.</em>', nameLabel: 'Ваше имя', contactLabel: 'Телефон или Telegram', projectLabel: 'О проекте', namePlaceholder: 'Напишите ваше имя', contactPlaceholder: '+998 / @username', projectPlaceholder: 'Расскажите кратко', sendRequest: 'Отправить заявку', backTop: 'Наверх ↑', formSending: 'Отправляем...', formSuccess: 'Заявка принята. Скоро свяжемся.', formError: 'Не удалось отправить. Напишите в Telegram.'
  },
  en: {
    navWork: 'Work', navAbout: 'About', navContact: 'Contact', headerCta: 'Start a project', availability: 'OPEN FOR NEW PROJECTS', eyebrow: 'GRAPHIC DESIGNER · AI CONTENT SPECIALIST', heroEm: 'ideas', heroLine: 'into visual impact.', heroDesc: 'Brand identities, visual systems and AI-generated content. Strategic thinking, precise composition and memorable imagery.', viewWork: 'View work', telegramPortfolio: 'Telegram portfolio', quickSocials: 'FIND / FOLLOW', experience: 'YEARS\nEXPERIENCE', aboutLabel: 'ABOUT', introTitle: 'Design is not simply beautiful. It holds attention and makes a brand recognisable.', introText: 'For 4+ years I have helped businesses speak visually. I now create content and design for Anhor Evolution, Anhor Park and projects in the holding ecosystem.', talkLink: 'Let’s discuss a project ↗', statYears: 'years in design', statAi: 'years in AI content', statIdeas: 'possibilities for ideas', workLabel: 'SELECTED WORK', workNote: 'Every project has its own tone, system and character.', upscaleType: 'Brand identity', kadirovaType: 'Identity & social', maqsadType: 'Brand guidelines', allWork: 'See all projects on Telegram', atlasLabel: 'FROM THE SYSTEM', filmTitle: 'Welcome to a\n<em>world of color.</em>', filmText: 'A big adventure begins with Mily Boo — Anhor Park’s most spirited, cheerful and kind raccoon. Laughter, friendship and unbelievable stories lie ahead.', filmCta: 'Open the trailer on YouTube', filmNote: 'FULL ANIMATION COMING SOON', socialLabel: 'FOLLOW ALONG', contactEyebrow: 'LET’S START YOUR NEXT PROJECT', contactTitle: 'A good idea\n<em>should not wait.</em>', nameLabel: 'Your name', contactLabel: 'Phone or Telegram', projectLabel: 'About the project', namePlaceholder: 'Enter your name', contactPlaceholder: '+998 / @username', projectPlaceholder: 'Tell me briefly', sendRequest: 'Send request', backTop: 'Back to top ↑', formSending: 'Sending...', formSuccess: 'Received. I will be in touch soon.', formError: 'Could not send. Please write on Telegram.'
  }
};

let language = 'uz';
const setLanguage = (lang) => {
  language = lang;
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const value = copy[lang][element.dataset.i18n];
    if (value) element.innerHTML = value.replaceAll('\n', '<br>');
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
    element.placeholder = copy[lang][element.dataset.i18nPlaceholder];
  });
  document.querySelectorAll('[data-lang]').forEach((button) => button.classList.toggle('active', button.dataset.lang === lang));
  localStorage.setItem('fayzullo-language', lang);
};

document.querySelectorAll('[data-lang]').forEach((button) => button.addEventListener('click', () => setLanguage(button.dataset.lang)));
setLanguage(localStorage.getItem('fayzullo-language') || 'uz');
document.getElementById('year').textContent = new Date().getFullYear();

const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
  if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
}), { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

window.addEventListener('pointermove', (event) => {
  const glow = document.querySelector('.cursor-glow');
  glow.style.left = `${event.clientX}px`;
  glow.style.top = `${event.clientY}px`;
}, { passive: true });

const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');
form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const button = form.querySelector('button');
  const data = Object.fromEntries(new FormData(form));
  status.className = 'form-status';
  status.textContent = copy[language].formSending;
  button.disabled = true;
  try {
    const response = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
    if (!response.ok) throw new Error('Request failed');
    form.reset();
    status.classList.add('success');
    status.textContent = copy[language].formSuccess;
  } catch {
    status.classList.add('error');
    status.textContent = copy[language].formError;
  } finally { button.disabled = false; }
});
