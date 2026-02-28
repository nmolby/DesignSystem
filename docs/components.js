const modalBackdrop = document.getElementById("modal-backdrop");
const openModalBtn = document.getElementById("open-modal");
const closeModalBtn = document.getElementById("close-modal");
const cancelModalBtn = document.getElementById("cancel-modal");
const confirmModalBtn = document.getElementById("confirm-modal");
const showToastBtn = document.getElementById("show-toast");
const toastStack = document.getElementById("toast-stack");

function openModal() {
  modalBackdrop.dataset.open = "true";
}

function closeModal() {
  modalBackdrop.dataset.open = "false";
}

function showToast(message, title = "Saved") {
  const toast = document.createElement("article");
  toast.className = "ds-toast";
  toast.innerHTML = `<strong>${title}</strong><span>${message}</span>`;
  toastStack.appendChild(toast);
  setTimeout(() => toast.remove(), 2800);
}

openModalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);
cancelModalBtn.addEventListener("click", closeModal);
confirmModalBtn.addEventListener("click", () => {
  closeModal();
  showToast("Modal action confirmed.", "Updated");
});
showToastBtn.addEventListener("click", () =>
  showToast("Terracotta component docs are loaded.", "Toast")
);

modalBackdrop.addEventListener("click", (event) => {
  if (event.target === modalBackdrop) closeModal();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modalBackdrop.dataset.open === "true") {
    closeModal();
  }
});
