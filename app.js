'use strict';

const RSVP_LOG_KEY = 'hiba-jalal-rsvp-log';

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
      fields[key].textContent = String(value).padStart(2, '0');
    });
    return true;
  }

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
    submitLabel.textContent = 'Sending…';
    const payload = Object.fromEntries(new FormData(rsvpForm).entries());
    if (payload.attending === 'no') payload.guests = '0';

    try {
      const response = await fetch(rsvpForm.action, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(rsvpForm),
      });
      if (!response.ok) throw new Error('Unable to submit RSVP');

      rememberSubmission(payload);
      rsvpForm.hidden = true;
      success.hidden = false;
      success.focus();
    } catch (_) {
      error.textContent = 'We could not send your response. Please check your connection and try again.';
      error.hidden = false;
      submit.disabled = false;
      submitLabel.textContent = 'Send response';
    }
  });
}
