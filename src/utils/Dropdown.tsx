export const DropDown = (selector: any) => {
  const dropdown = document.querySelector(`${selector}`);

  setTimeout(() => {
    if (!dropdown?.classList.contains("open")) {
      dropdown?.classList.add("open");
    } else {
      dropdown.classList.remove("close");
    }
  }, 50);
};
