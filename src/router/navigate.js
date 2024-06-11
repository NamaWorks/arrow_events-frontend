export const navigate = ({ e, page, text, path }) => {
  e.preventDefault();
  window.history.pushState("", "", path);
  // console.log(window.history)
  // page()
};