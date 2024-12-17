// Dropdown and Category Management
document.addEventListener("DOMContentLoaded", () => {
  const dropdownBtn = document.querySelector(".dropdown-btn");
  const dropdownContent = document.querySelector(".dropdown-content");
  const articleContent = document.getElementById("article-content");
  const currentYearElement = document.getElementById("current-year");

  // Update current year dynamically
  currentYearElement.textContent = new Date().getFullYear();

  // Categories with more detailed descriptions
  const categories = {
    AI: `Kecerdasan Buatan (Artificial Intelligence/AI) adalah bidang teknologi yang berfokus pada pengembangan sistem komputer yang mampu meniru kemampuan berpikir, belajar, dan menyelesaikan masalah seperti manusia. AI memanfaatkan algoritma canggih dan data besar (big data) untuk mengidentifikasi pola, mempelajari pengalaman, dan membuat prediksi. Teknologi ini telah mengubah berbagai sektor, seperti kesehatan, industri, pendidikan, dan transportasi. Di bidang kesehatan, AI digunakan untuk mendiagnosis penyakit lebih cepat dan akurat melalui analisis data medis. Dalam industri, AI membantu mengoptimalkan produksi dan meningkatkan efisiensi dengan otomatisasi proses. Pendidikan pun turut merasakan manfaat AI melalui pembelajaran adaptif yang dapat disesuaikan dengan kebutuhan individu. Selain itu, di sektor transportasi, teknologi AI mendukung pengembangan kendaraan otonom yang lebih aman dan efisien. Meskipun menawarkan banyak manfaat, AI juga memunculkan tantangan baru, seperti etika penggunaan, keamanan data, dan dampak terhadap lapangan kerja. Oleh karena itu, pengembangan AI harus diiringi dengan kebijakan yang bijaksana agar teknologi ini dapat memberikan manfaat maksimal tanpa merugikan manusia.

`,
    Space: `Eksploitasi luar angkasa adalah upaya manusia untuk mengeksplorasi dan memanfaatkan sumber daya yang ada di luar Bumi, seperti di planet, bulan, asteroid, dan ruang angkasa itu sendiri. Perkembangan teknologi telah membuka peluang besar bagi eksploitasi luar angkasa, termasuk penelitian ilmiah, eksplorasi planet, dan pencarian sumber daya alam yang dapat digunakan di Bumi. Salah satu fokus utama adalah penambangan asteroid, di mana mineral langka dan logam berharga dapat diekstraksi untuk memenuhi kebutuhan industri di Bumi. Selain itu, eksploitasi luar angkasa juga mencakup pembangunan koloni manusia di planet lain, seperti Mars, yang dipandang sebagai langkah penting untuk keberlanjutan peradaban manusia di masa depan.

Namun, eksploitasi luar angkasa juga menimbulkan berbagai tantangan dan perdebatan. Tantangan teknis, biaya tinggi, dan risiko terhadap kesehatan manusia di lingkungan tanpa gravitasi menjadi hambatan utama. Di sisi lain, muncul pula isu etika tentang kepemilikan sumber daya di luar Bumi serta potensi dampaknya terhadap lingkungan ruang angkasa yang masih belum sepenuhnya dipahami. Oleh karena itu, eksploitasi luar angkasa perlu diatur melalui kerja sama internasional dan kebijakan global yang memastikan pemanfaatan sumber daya dilakukan secara adil, berkelanjutan, dan bertanggung jawab. Dengan pendekatan yang tepat, eksploitasi luar angkasa dapat menjadi solusi inovatif bagi kebutuhan masa depan umat manusia.

`,
    Future: `Inovasi masa depan adalah hasil dari perkembangan teknologi, ilmu pengetahuan, dan kreativitas manusia yang bertujuan untuk meningkatkan kualitas hidup dan menjawab tantangan global. Berbagai bidang tengah mengalami transformasi signifikan, mulai dari kecerdasan buatan (AI), energi terbarukan, hingga teknologi kesehatan dan transportasi. AI diprediksi akan semakin canggih, dengan kemampuan memecahkan masalah kompleks, membantu pengambilan keputusan, dan mengotomatisasi berbagai sektor industri. Di bidang energi, inovasi seperti panel surya generasi terbaru, penyimpanan energi yang efisien, dan eksplorasi sumber energi alternatif berperan penting dalam mengurangi ketergantungan pada bahan bakar fosil.

Di sektor kesehatan, teknologi masa depan seperti pengobatan presisi berbasis genetika, organ buatan hasil bioprinting, dan perangkat medis bertenaga AI akan merevolusi cara kita merawat pasien dan mencegah penyakit. Transportasi pun tidak ketinggalan, dengan hadirnya kendaraan listrik, mobil otonom, dan konsep hyperloop yang menjanjikan perjalanan lebih cepat, aman, dan ramah lingkungan. Selain itu, eksplorasi luar angkasa dan pembangunan kota pintar (smart cities) berbasis teknologi internet of things (IoT) akan semakin membuka jalan bagi kehidupan yang lebih efisien dan berkelanjutan.

Namun, inovasi masa depan juga memerlukan perhatian pada dampak sosial dan etika. Isu seperti hilangnya lapangan pekerjaan akibat otomatisasi, kesenjangan akses teknologi, serta privasi data menjadi tantangan yang harus diatasi. Dengan pendekatan yang seimbang, inovasi masa depan dapat membawa perubahan positif bagi kehidupan manusia, menciptakan dunia yang lebih cerdas, ramah lingkungan, dan inklusif bagi semua.

`,
  };

  // Toggle dropdown with improved accessibility
  dropdownBtn.addEventListener("click", () => {
    const isExpanded = dropdownBtn.getAttribute("aria-expanded") === "true";
    dropdownBtn.setAttribute("aria-expanded", !isExpanded);
    dropdownContent.style.display = isExpanded ? "none" : "block";
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", (e) => {
    if (
      !dropdownBtn.contains(e.target) &&
      !dropdownContent.contains(e.target)
    ) {
      dropdownContent.style.display = "none";
      dropdownBtn.setAttribute("aria-expanded", "false");
    }
  });

  // Update article content with keyboard and click support
  dropdownContent.addEventListener("click", (e) => {
    const categoryButton = e.target.closest("button");
    if (categoryButton) {
      const category = categoryButton.getAttribute("data-category");
      articleContent.textContent = categories[category];
      dropdownContent.style.display = "none";
      dropdownBtn.setAttribute("aria-expanded", "false");
    }
  });

  // Keyboard navigation for dropdown
  dropdownBtn.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      dropdownBtn.click();
    }
  });
});
