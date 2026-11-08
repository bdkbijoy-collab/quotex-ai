const button = document.getElementById('demoBtn');
button.addEventListener('click', () => {
  document.getElementById('signal').textContent = 'WAIT';
  document.getElementById('reason').textContent =
    'এটি শুধু ডেমো। কোনো লাইভ মূল্য বা Quotex OTC ডেটা বিশ্লেষণ করা হচ্ছে না।';
  button.textContent = 'ডেমো দেখানো হয়েছে';
  setTimeout(() => button.textContent = 'ডেমো স্ক্রিন দেখাও', 2200);
});
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js').catch(()=>{}));
}