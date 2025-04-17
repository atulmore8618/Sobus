// Example: Alert on clicking a social icon
document.querySelectorAll('.social-icons a').forEach(icon => {
    icon.addEventListener('click', event => {
      event.preventDefault();
      alert('Social link clicked!');
    });
  });
  