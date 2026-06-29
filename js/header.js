document.addEventListener("DOMContentLoaded", () => {
  // 1. Header HTML লোড করা
  const headerPlaceholder = document.getElementById("header-placeholder");
  
  if (headerPlaceholder) {
    fetch('/components/header.html')
      .then(response => response.text())
      .then(data => {
        headerPlaceholder.innerHTML = data;
        
        // HTML লোড হওয়ার পর ইভেন্ট লিসেনার অ্যাড করতে হবে
        initSidebar();
      })
      .catch(error => console.log('Header load error:', error));
  }         // হেডার অটো লোড করার ফাংশন
fetch('components/header.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('header').innerHTML = data;
  })
  .catch(error => console.log('Header load error:', error));

  function initSidebar() {
    const menuBtn = document.getElementById("menuBtn");
    const closeBtn = document.getElementById("closeBtn");
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");

    // মেনু বাটন ক্লিক = সাইডবার খুলবে
    menuBtn.addEventListener("click", () => {
      sidebar.classList.add("active");
      overlay.classList.add("active");
    });

    // ক্লোজ বাটন বা Overlay ক্লিক = সাইডবার বন্ধ
    closeBtn.addEventListener("click", closeSidebar);
    overlay.addEventListener("click", closeSidebar);

    function closeSidebar() {
      sidebar.classList.remove("active");
      overlay.classList.remove("active");
    }
  }
});