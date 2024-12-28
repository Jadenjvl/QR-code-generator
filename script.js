function generateQRCode() {
  const text = document.getElementById('text-input').value;

  // Check if the input is empty
  if (text.trim() === "") {
    alert("Please enter some text or URL to generate the QR code.");
    return;
  }

  // Clear the previous QR code (if any)
  document.getElementById('qrcode').innerHTML = '';

  // Generate the QR code
  const qrcode = new QRCode(document.getElementById('qrcode'), {
    text: text,
    width: 128,
    height: 128
  });
}
