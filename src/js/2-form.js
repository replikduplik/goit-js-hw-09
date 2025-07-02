const form = document.querySelector('.feedback-form');
let formData = { email: '', message: '' };

// Sayfa yüklendiğinde verileri kontrol et ve alanları doldur
const savedData = localStorage.getItem('feedback-form-state');
if (savedData) {
  Object.assign(formData, JSON.parse(savedData));
  if (form.elements.email) form.elements.email.value = formData.email || '';
  if (form.elements.message)
    form.elements.message.value = formData.message || '';
}

// Local Storage input event
form.addEventListener('input', event => {
  if (event.target.name === 'email') {
    formData.email = form.elements.email.value.trim();
  }
  if (event.target.name === 'message') {
    formData.message = form.elements.message.value.trim();
  }
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

// Submit event
form.addEventListener('submit', event => {
  event.preventDefault();
  if (
    !form.elements.email.value.trim() ||
    !form.elements.message.value.trim()
  ) {
    alert('Fill please all fields');
    return;
  }
  // Gönderilen veriyi konsola yazdır
  console.log(formData);
  // localStorage'dan veriyi sil
  localStorage.removeItem('feedback-form-state');
  form.reset();
  formData = { email: '', message: '' };
});
