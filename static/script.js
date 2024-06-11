document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
  
    loginForm.addEventListener('submit', async (event) => {
      event.preventDefault(); 
  
      const formData = new FormData(loginForm);
  
      try {
        const response = await fetch('/signin', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(Object.fromEntries(formData))
        });
  
        if (response.ok) {
          const data = await response.json();
          console.log(data); 
        } else {
          console.error('Error:', response.statusText);
        }
      } catch (err) {
        console.error('Error:', err);
      }
    });
});
