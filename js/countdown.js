// Apertura: 1 de diciembre de 2026 a las 00:00, hora peninsular española.
const openingDate = new Date("2026-12-01T00:00:00+01:00");
const units = {
  days: document.getElementById("days"),
  hours: document.getElementById("hours"),
  minutes: document.getElementById("minutes"),
  seconds: document.getElementById("seconds")
};
function updateCountdown() {
  const remaining = openingDate.getTime() - Date.now();
  if (remaining <= 0) {
    Object.values(units).forEach((element) => element.textContent = "00");
    return; // Permanece visible en cero. No se oculta ni redirige.
  }
  const total = Math.floor(remaining / 1000);
  units.days.textContent = String(Math.floor(total / 86400)).padStart(2, "0");
  units.hours.textContent = String(Math.floor((total % 86400) / 3600)).padStart(2, "0");
  units.minutes.textContent = String(Math.floor((total % 3600) / 60)).padStart(2, "0");
  units.seconds.textContent = String(total % 60).padStart(2, "0");
}
updateCountdown();
const timer = setInterval(() => {
  updateCountdown();
  if (Date.now() >= openingDate.getTime()) clearInterval(timer);
}, 1000);
