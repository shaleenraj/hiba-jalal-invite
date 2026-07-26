'use strict';

const RSVP_LOG_KEY = 'hiba-jalal-rsvp-log';
const LANGUAGE_KEY = 'hiba-jalal-language';

const translations = {
  en: {
    pageTitle: 'Hiba & Jalal · 15 August 2026',
    pageDescription: 'Hiba & Jalal invite you to celebrate their wedding in Bouskoura on 15 August 2026.',
    languageLabel: 'Choose language',
    coverSectionLabel: 'Wedding invitation cover',
    coverVideoLabel: "Play Hiba and Jalal's wedding invitation video",
    itinerarySectionLabel: 'Wedding itinerary',
    itineraryVideoLabel: "Hiba and Jalal's wedding itinerary",
    afterPartyEyebrow: 'After-wedding party with DJ',
    afterPartyTitle: 'Stay with us',
    afterPartyImageAlt: 'Live percussion and DJ for the after-wedding party',
    keepScrolling: 'Keep scrolling to continue',
    countdownEyebrow: 'Until we say I do',
    countdownTitleOne: 'The beginning',
    countdownTitleTwo: 'of forever',
    days: 'Days',
    hours: 'Hours',
    minutes: 'Minutes',
    seconds: 'Seconds',
    countdownFinished: 'Today is the day.',
    weekday: 'Saturday',
    eventDate: '15 August 2026',
    venue: 'Dar El Ghalia · Bouskoura',
    rsvpEyebrow: 'Kindly respond',
    rsvpTitleOne: 'Will you',
    rsvpTitleTwo: 'join us?',
    rsvpIntro: 'We would be honoured to celebrate this beautiful evening with you. Please send one response per invitation.',
    coupleNames: 'Hiba & Jalal',
    cityCountry: 'Dar El Ghalia · Bouskoura',
    fullName: 'Full name',
    fullNamePlaceholder: 'Your full name',
    optional: '(optional)',
    attendanceQuestion: 'Will you be attending?',
    accepts: 'Joyfully accepts',
    declines: 'Regretfully declines',
    guestCount: 'Number of guests',
    guestOne: '1 guest',
    guestTwo: '2 guests',
    guestThree: '3 guests',
    guestFour: '4 guests',
    guestFive: '5 guests',
    guestSix: '6 guests',
    note: 'A note for the couple',
    notePlaceholder: 'Share your wishes with Hiba & Jalal',
    sendResponse: 'Send response',
    sending: 'Sending…',
    formError: 'We could not send your response. Please check your connection and try again.',
    thankYou: 'Thank you',
    successMessage: 'Your response has been received. We cannot wait to celebrate with you.',
    returnInvitation: 'Return to the invitation',
    weddingValue: 'Hiba & Jalal · 15 August 2026',
  },
  ar: {
    pageTitle: 'هبة وجلال · ١٥ أغسطس ٢٠٢٦',
    pageDescription: 'تدعوكم هبة وجلال لمشاركتهما فرحة زفافهما في بوسكورة يوم ١٥ أغسطس ٢٠٢٦.',
    languageLabel: 'اختيار اللغة',
    coverSectionLabel: 'غلاف دعوة الزفاف',
    coverVideoLabel: 'تشغيل فيديو دعوة زفاف هبة وجلال',
    itinerarySectionLabel: 'برنامج حفل الزفاف',
    itineraryVideoLabel: 'فيديو برنامج زفاف هبة وجلال',
    afterPartyEyebrow: 'حفلة ما بعد الزفاف مع الدي جي',
    afterPartyTitle: 'ابقوا معنا',
    afterPartyImageAlt: 'عازف إيقاع ومنسق موسيقي لحفلة ما بعد الزفاف',
    keepScrolling: 'مرّر للأسفل للمتابعة',
    countdownEyebrow: 'حتى نحتفل ببداية العمر',
    countdownTitleOne: 'بداية',
    countdownTitleTwo: 'الأبد',
    days: 'أيام',
    hours: 'ساعات',
    minutes: 'دقائق',
    seconds: 'ثوانٍ',
    countdownFinished: 'اليوم هو يومنا',
    weekday: 'السبت',
    eventDate: '١٥ أغسطس ٢٠٢٦',
    venue: 'دار الغالية · بوسكورة',
    rsvpEyebrow: 'يرجى تأكيد الحضور',
    rsvpTitleOne: 'هل تشاركوننا',
    rsvpTitleTwo: 'فرحتنا؟',
    rsvpIntro: 'يشرفنا أن نحتفل بهذه الأمسية الجميلة معكم. يرجى إرسال رد واحد لكل دعوة.',
    coupleNames: 'هبة وجلال',
    cityCountry: 'دار الغالية · بوسكورة',
    fullName: 'الاسم الكامل',
    fullNamePlaceholder: 'اكتب اسمك الكامل',
    optional: '(اختياري)',
    attendanceQuestion: 'هل ستحضرون؟',
    accepts: 'بكل سرور',
    declines: 'نعتذر عن الحضور',
    guestCount: 'عدد الضيوف',
    guestOne: 'ضيف واحد',
    guestTwo: 'ضيفان',
    guestThree: '٣ ضيوف',
    guestFour: '٤ ضيوف',
    guestFive: '٥ ضيوف',
    guestSix: '٦ ضيوف',
    note: 'رسالة للعروسين',
    notePlaceholder: 'شاركوا هبة وجلال أمنياتكم الجميلة',
    sendResponse: 'إرسال الرد',
    sending: 'جارٍ الإرسال…',
    formError: 'تعذّر إرسال ردكم. يرجى التحقق من الاتصال والمحاولة مرة أخرى.',
    thankYou: 'شكرًا لكم',
    successMessage: 'تم استلام ردكم. يسعدنا أن نحتفل معكم قريبًا.',
    returnInvitation: 'العودة إلى الدعوة',
    weddingValue: 'هبة وجلال · ١٥ أغسطس ٢٠٢٦',
  },
};

const requestedLanguage = new URLSearchParams(window.location.search).get('lang');
let currentLanguage = ['en', 'ar'].includes(requestedLanguage)
  ? requestedLanguage
  : localStorage.getItem(LANGUAGE_KEY) || 'en';
let renderCountdown = () => {};

function text(key) {
  return translations[currentLanguage][key] || translations.en[key] || key;
}

function updateLocalizedVideos(language, revealCoverFrame = false) {
  const videos = [
    {
      element: document.querySelector('#coverVideo'),
      en: 'assets/cover_page_english_new.mp4',
      ar: 'assets/cover_arabic_new_1.mp4',
      enPoster: 'assets/cover-poster.jpg',
      arPoster: null,
    },
    {
      element: document.querySelector('#itineraryVideo'),
      en: 'assets/itinerary_page.mp4?v=2',
      ar: 'assets/itinerary_page_arabic.mp4?v=2',
      enPoster: 'assets/itinerary-poster.jpg',
      arPoster: null,
    },
  ];

  for (const video of videos) {
    if (!video.element) continue;
    const isCover = video.element.matches('#coverVideo');
    const isArabic = language === 'ar';
    const source = isArabic ? video.ar : video.en;
    const poster = isCover && revealCoverFrame
      ? null
      : (isArabic ? video.arPoster : video.enPoster);
    const shouldPlay = video.element.autoplay;

    if (!isCover) {
      video.element.defaultMuted = true;
      video.element.muted = true;
      video.element.playsInline = true;
      video.element.setAttribute('muted', '');
      video.element.setAttribute('playsinline', '');
      video.element.setAttribute('webkit-playsinline', '');
    }
    else if (revealCoverFrame) video.element.pause();

    if (poster) video.element.poster = poster;
    else video.element.removeAttribute('poster');

    const absoluteSource = new URL(source, document.baseURI).href;
    if (video.element.currentSrc !== absoluteSource) {
      video.element.src = source;
      video.element.load();

    }

    if (!poster && !shouldPlay) {
      const revealFirstFrame = () => {
        if (!Number.isFinite(video.element.duration)) return;
        video.element.currentTime = Math.min(0.05, video.element.duration / 2);
      };
      if (video.element.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) revealFirstFrame();
      else video.element.addEventListener('loadeddata', revealFirstFrame, { once: true });
    }

    if (shouldPlay) void video.element.play().catch(() => { /* Playback can be restricted. */ });
  }
}

function applyLanguage(language, updateUrl = true, revealCoverFrame = false) {
  currentLanguage = language === 'ar' ? 'ar' : 'en';
  document.documentElement.lang = currentLanguage;
  document.documentElement.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';
  document.title = text('pageTitle');
  document.querySelector('meta[name="description"]')?.setAttribute('content', text('pageDescription'));

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    element.textContent = text(element.dataset.i18n);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
    element.placeholder = text(element.dataset.i18nPlaceholder);
  });
  document.querySelectorAll('[data-i18n-aria]').forEach((element) => {
    element.setAttribute('aria-label', text(element.dataset.i18nAria));
  });
  document.querySelectorAll('[data-i18n-alt]').forEach((element) => {
    element.setAttribute('alt', text(element.dataset.i18nAlt));
  });
  document.querySelector('input[name="wedding"]')?.setAttribute('value', text('weddingValue'));
  document.querySelectorAll('[data-language]').forEach((button) => {
    button.setAttribute('aria-pressed', String(button.dataset.language === currentLanguage));
  });

  try { localStorage.setItem(LANGUAGE_KEY, currentLanguage); } catch (_) { /* Storage can be unavailable. */ }
  if (updateUrl) {
    const url = new URL(window.location.href);
    if (currentLanguage === 'ar') url.searchParams.set('lang', 'ar');
    else url.searchParams.delete('lang');
    window.history.replaceState({}, '', url);
  }

  renderCountdown();
  updateLocalizedVideos(currentLanguage, revealCoverFrame);
}

document.querySelectorAll('[data-language]').forEach((button) => {
  button.addEventListener('click', () => applyLanguage(button.dataset.language, true, true));
});

const coverVideo = document.querySelector('#coverVideo');
if (coverVideo) {
  async function toggleCoverVideo() {
    if (coverVideo.paused || coverVideo.ended) {
      if (coverVideo.ended) coverVideo.currentTime = 0;
      try { await coverVideo.play(); } catch (_) { /* The poster remains available. */ }
    } else {
      coverVideo.pause();
    }
  }

  coverVideo.addEventListener('click', toggleCoverVideo);
  coverVideo.addEventListener('keydown', (event) => {
    if (event.key !== 'Enter' && event.key !== ' ') return;
    event.preventDefault();
    toggleCoverVideo();
  });
  const visibility = new IntersectionObserver(([entry]) => {
    if (!entry.isIntersecting && !coverVideo.paused) coverVideo.pause();
  }, { threshold: 0.15 });
  visibility.observe(coverVideo);
}

const itineraryVideo = document.querySelector('#itineraryVideo');
if (itineraryVideo) {
  let itineraryIsVisible = false;

  function playVisibleItinerary() {
    if (!itineraryIsVisible || document.hidden) return;
    if (itineraryVideo.ended) itineraryVideo.currentTime = 0;
    void itineraryVideo.play().catch(() => { /* Retry when playback becomes available. */ });
  }

  itineraryVideo.defaultMuted = true;
  itineraryVideo.muted = true;
  itineraryVideo.playsInline = true;
  itineraryVideo.setAttribute('muted', '');
  itineraryVideo.setAttribute('playsinline', '');
  itineraryVideo.setAttribute('webkit-playsinline', '');

  const visibility = new IntersectionObserver(([entry]) => {
    itineraryIsVisible = entry.isIntersecting;
    if (itineraryIsVisible) playVisibleItinerary();
    else if (!itineraryVideo.paused) itineraryVideo.pause();
  }, { threshold: 0.2 });

  visibility.observe(itineraryVideo);
  itineraryVideo.addEventListener('loadeddata', playVisibleItinerary);
  itineraryVideo.addEventListener('canplay', playVisibleItinerary);
  window.addEventListener('pageshow', playVisibleItinerary);
  document.addEventListener('visibilitychange', playVisibleItinerary);
}

const countdown = document.querySelector('[data-countdown]');
if (countdown) {
  const target = new Date(countdown.dataset.date).getTime();
  const fields = {
    days: countdown.querySelector('[data-days]'),
    hours: countdown.querySelector('[data-hours]'),
    minutes: countdown.querySelector('[data-minutes]'),
    seconds: countdown.querySelector('[data-seconds]'),
  };
  const finished = document.querySelector('[data-countdown-finished]');

  function updateCountdown() {
    const remaining = target - Date.now();
    if (remaining <= 0) {
      countdown.hidden = true;
      if (finished) finished.hidden = false;
      return false;
    }

    const totalSeconds = Math.floor(remaining / 1000);
    const values = {
      days: Math.floor(totalSeconds / 86400),
      hours: Math.floor((totalSeconds % 86400) / 3600),
      minutes: Math.floor((totalSeconds % 3600) / 60),
      seconds: totalSeconds % 60,
    };
    Object.entries(values).forEach(([key, value]) => {
      fields[key].textContent = new Intl.NumberFormat(currentLanguage === 'ar' ? 'ar-EG' : 'en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false,
      }).format(value);
    });
    return true;
  }

  renderCountdown = updateCountdown;
  updateCountdown();
  const timer = window.setInterval(() => {
    if (!updateCountdown()) window.clearInterval(timer);
  }, 1000);
}

const rsvpForm = document.querySelector('#rsvpForm');
if (rsvpForm) {
  const submit = rsvpForm.querySelector('button[type="submit"]');
  const submitLabel = submit.querySelector('span');
  const error = rsvpForm.querySelector('[data-form-error]');
  const success = document.querySelector('[data-rsvp-success]');
  const guestField = rsvpForm.querySelector('[data-guest-field]');
  const guests = rsvpForm.querySelector('#guests');

  rsvpForm.querySelectorAll('input[name="attending"]').forEach((input) => {
    input.addEventListener('change', () => {
      const attending = rsvpForm.querySelector('input[name="attending"]:checked')?.value;
      const declined = attending === 'no';
      guestField.hidden = declined;
      guests.disabled = declined;
      if (declined) guests.value = '1';
    });
  });

  function rememberSubmission(data) {
    try {
      const history = JSON.parse(localStorage.getItem(RSVP_LOG_KEY) || '[]');
      history.push({ ...data, submittedAt: new Date().toISOString() });
      localStorage.setItem(RSVP_LOG_KEY, JSON.stringify(history.slice(-5)));
    } catch (_) { /* Storage can be unavailable in private mode. */ }
  }

  rsvpForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    error.hidden = true;

    if (!rsvpForm.checkValidity()) {
      rsvpForm.reportValidity();
      return;
    }

    submit.disabled = true;
    submitLabel.textContent = text('sending');
    const payload = Object.fromEntries(new FormData(rsvpForm).entries());
    if (payload.attending === 'no') payload.guests = '0';
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 15000);

    try {
      const response = await fetch(rsvpForm.action, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(rsvpForm),
        signal: controller.signal,
      });
      if (!response.ok) throw new Error('Unable to submit RSVP');

      rememberSubmission(payload);
      rsvpForm.hidden = true;
      success.hidden = false;
      success.focus();
    } catch (_) {
      error.textContent = text('formError');
      error.hidden = false;
      submit.disabled = false;
      submitLabel.textContent = text('sendResponse');
    } finally {
      window.clearTimeout(timeout);
    }
  });
}

applyLanguage(currentLanguage, false);
