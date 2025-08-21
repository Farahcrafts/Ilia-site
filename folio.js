document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("search-student");
  const students = document.querySelectorAll(".aside");
  const searchBtn = document.getElementById("search-loop");

  // Safety check
  if (!searchBtn) {
    console.error("Search button with ID 'search-loop' not found.");
    return;
  }

  if (!searchInput) {
    console.error("Search input with ID 'search-student' not found.");
    return;
  }

  searchBtn.onclick = function () {
    const query = searchInput.value.trim().toLowerCase();

    students.forEach((aside) => {
      const name = aside.textContent.toLowerCase();
      const studentCard = aside.closest(".etudiant"); // Hide the whole card

      if (name.includes(query)) {
        studentCard.style.display = "block";
      } else {
        studentCard.style.display = "none";
      }
    });
  };
});
