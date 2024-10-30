const box = document.getElementById('box');

const moveBox = (event) => {
  box.style.left = `${event.pageX}px`;
  box.style.top = `${event.pageY}px`;
};

document.addEventListener('mousemove', debounce(moveBox, 100));
