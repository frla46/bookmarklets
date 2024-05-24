javascript: (function () {
  const inputs = Array.from(
    document.querySelectorAll("[type=radio], [type=checkbox]"),
  );
  const groups = {};
  inputs.forEach((input) => {
    if (input.name && !groups[input.name]) {
      groups[input.name] = [];
    }
    if (!groups[input.name]) return;
    groups[input.name].push(input);
  });
  Object.keys(groups).forEach((groupName) => {
    const randomInput =
      groups[groupName][Math.floor(Math.random() * groups[groupName].length)];
    randomInput.click();
  });
})();
