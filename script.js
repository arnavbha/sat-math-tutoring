const yearNode = document.getElementById("year");
if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

const revealNodes = document.querySelectorAll("[data-reveal]");
if (revealNodes.length > 0) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.15 }
  );
  revealNodes.forEach((node) => observer.observe(node));
}

const filterButtons = document.querySelectorAll("[data-filter]");
const resourceCards = document.querySelectorAll(".resource-card");

if (filterButtons.length > 0 && resourceCards.length > 0) {
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const activeFilter = button.dataset.filter;

      filterButtons.forEach((candidate) => candidate.classList.remove("active"));
      button.classList.add("active");

      resourceCards.forEach((card) => {
        const kinds = card.dataset.kind || "";
        const matches = activeFilter === "all" || kinds.includes(activeFilter);
        card.classList.toggle("hidden", !matches);
      });
    });
  });
}
