
function handleCapture() {
  const email = document.getElementById('email-input');
  const success = document.getElementById('capture-success');

  if (!email.value || !email.value.includes('@')) {
    alert('Digite um e-mail válido.');
    return;
  }

  success.style.display = 'block';
  email.value = '';
}
