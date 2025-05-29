const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Serve static files (CSS, JS, images, etc.)
app.use(express.static(path.join(__dirname, '.')));

// Route for index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Route for about-us.html
app.get('/about-us', (req, res) => {
  res.sendFile(path.join(__dirname, 'about-us.html'));
});

// Route for contact-us.html
app.get('/contact-us', (req, res) => {
  res.sendFile(path.join(__dirname, 'contact-us.html'));
});

// Route for emergency-contacts.html
app.get('/emergency-contacts', (req, res) => {
  res.sendFile(path.join(__dirname, 'emergency-contacts.html'));
});

// Route for login.html
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'login.html'));
});

// Route for pannic_button.html
app.get('/pannic_button', (req, res) => {
  res.sendFile(path.join(__dirname, 'pannic_button.html'));
});

// Route for privacy.html
app.get('/privacy', (req, res) => {
  res.sendFile(path.join(__dirname, 'privacy.html'));
});

// Route for real-time-location-tracking.html
app.get('/real-time-location-tracking', (req, res) => {
  res.sendFile(path.join(__dirname, 'real-time-location-tracking.html'));
});

// Route for sos-alert.html
app.get('/sos-alert', (req, res) => {
  res.sendFile(path.join(__dirname, 'sos-alert.html'));
});

// Route for terms.html
app.get('/terms', (req, res) => {
  res.sendFile(path.join(__dirname, 'terms.html'));
});

// Route for urgent-sos.html
app.get('/urgent-sos', (req, res) => {
  res.sendFile(path.join(__dirname, 'urgent-sos.html'));
});

// Route for voice-activation.html
app.get('/voice-activation', (req, res) => {
  res.sendFile(path.join(__dirname, 'voice-activation.html'));
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});