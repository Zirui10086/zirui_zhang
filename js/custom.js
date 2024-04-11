document.querySelector('.hover-effect').addEventListener('mouseover', function() {
  this.style.transform = 'translateY(-10px)';
  this.style.filter = 'brightness(1.2)';
});

document.querySelector('.hover-effect').addEventListener('mouseout', function() {
  this.style.transform = '';
  this.style.filter = '';
});
