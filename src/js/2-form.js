const form = document.querySelector('.feedback-form');
let formData = { email: '', message: '' };

//Local Storage input event
form.addEventListener('input', event => {
  event.preventDefault();
  if (event.target.name === 'email') {
    formData.email = form.elements.email.value.trim();
  }
  if (event.target.name === 'message') {
    formData.message = form.elements.message.value.trim();
  }
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

// Sayfa yüklendiğinde verileri kontrol et
const savedData = localStorage.getItem('feedback-form-state');
if (savedData) {
  Object.assign(formData, JSON.parse(savedData));
  if (form.elements.email) form.elements.email.value = formData.email || '';
  if (form.elements.message)
    form.elements.message.value = formData.message || '';
}

//Submit event
form.addEventListener('submit', event => {
  event.preventDefault();
  if (
    !form.elements.email.value.trim() ||
    !form.elements.message.value.trim()
  ) {
    alert('Fill please all fields');
    localStorage.removeItem('feedback-form-state');
    return;
  }
  form.reset();
  formData = { email: '', message: '' };
});
