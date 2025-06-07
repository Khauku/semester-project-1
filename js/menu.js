
const toggle = document.getElementById(`menu-toggle`);

toggle.addEventListener('change', () => {
    toggle.setAttribute('aria-expanded', toggle.checked);
});