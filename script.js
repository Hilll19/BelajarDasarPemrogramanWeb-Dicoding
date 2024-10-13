document.addEventListener("DOMContentLoaded", function () {
  // Ambil elemen tombol navigasi
  const homeBtn = document.getElementById('home-btn');
  const aboutBtn = document.getElementById('about-btn');
  const sedekahBtn = document.getElementById('sedekahbumi-btn');
  const maulidBtn = document.getElementById('maulidnabi-btn');
  const contactBtn = document.getElementById('contact-btn');

  // Ambil elemen content
  const content = document.getElementById('content');

  // Fungsi untuk mengubah konten
  function updateContent(title, text) {
    content.innerHTML = `
      <article>
        <h2>${title}</h2>
        <p>${text}</p>
      </article>
    `;
  }

  // Event listeners untuk setiap tombol
  homeBtn.addEventListener('click', function () {
    updateContent('Selamat Datang di Desa Megal', 'Desa Megal adalah sebuah desa indah yang terletak di tengah-tengah alam...');
  });

  aboutBtn.addEventListener('click', function () {
    updateContent('Tentang Desa Megal', 'Desa Megal memiliki sejarah yang kaya dan merupakan salah satu tujuan wisata...');
  });

  sedekahBtn.addEventListener('click', function () {
    updateContent('Sedekah Bumi', '"Sedekah Bumi" adalah istilah yang umumnya merujuk pada praktik memberi atau berbagi hasil bumi kepada orang-orang yang membutuhkan, sebagai bentuk syukur kepada Tuhan atas nikmat yang diberikan. Dalam konteks budaya, sedekah bumi bisa juga diartikan sebagai perayaan atau acara yang bertujuan untuk menjaga kelestarian alam dan memperkuat hubungan sosial di masyarakat.');
  });

  maulidBtn.addEventListener('click', function () {
    updateContent('Maulid Nabi', 'Maulid Nabi adalah perayaan yang dilakukan untuk memperingati kelahiran Nabi Muhammad SAW. Kata "maulid" sendiri berasal dari bahasa Arab yang berarti "kelahiran." Perayaan ini biasanya diadakan setiap tahun pada tanggal 12 Rabiul Awal dalam kalender Hijriyah.Maulid Nabi tidak hanya sekadar perayaan, tetapi juga merupakan momen untuk merenungkan ajaran dan teladan Nabi Muhammad, serta untuk memperkuat iman dan meningkatkan rasa cinta kepada beliau. Dalam berbagai tradisi, perayaan ini biasanya diisi dengan kegiatan seperti pembacaan puji-pujian (sholawat), ceramah, dan acara sosial untuk membantu sesama.');
  });

  contactBtn.addEventListener('click', function () {
    content.innerHTML = `
      <article>
        <h2>Galeri Foto</h2>
        <img style="width:320px; height:400px;" src="image/balaidesa.png" alt="Contact Image" />
        <p>*Foto diambil dari map google.</p>
      </article>
    `;
  });

  // Dropdown menu functionality
  var dropdown = document.querySelector(".dropdown");
  var dropdownContent = document.querySelector(".dropdown-content");

  // Toggle dropdown ketika tombol diklik
  dropdown.addEventListener("click", function (event) {
    dropdownContent.style.display =
      dropdownContent.style.display === "block" ? "none" : "block";
    event.stopPropagation();
  });

  // Tutup dropdown jika klik di luar dropdown
  document.addEventListener("click", function () {
    dropdownContent.style.display = "none";
  });
});
