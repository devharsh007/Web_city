javascript
document.getElementById('website-form').addEventListener('submit', function(event) {
 event.preventDefault();

 var websiteName = document.getElementById('website-name').value;
 var websiteLink = document.getElementById('website-link').value;
 var websiteCategory = document.getElementById('website-category').value;

 fetch('/submit-website', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: websiteName,
      link: websiteLink,
      category: websiteCategory
    })
 })
 .then(response => response.json())
 .then(data => {
    if (data.success) {
      alert('Website added successfully!');
    } else {
      alert('Failed to add website. Please try again.');
    }
 })
 .catch(error => {
    console.error('Error:', error);
    alert('Failed to add website. Please try again.');
 });
});