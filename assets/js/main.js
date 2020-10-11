var numbers = document.querySelectorAll('.number');
const speed = 2500

numbers.forEach(number => {
  const updateCount = () => {
    const target = +number.getAttribute('data-number');
    const count = +number.innerText;

    var inc = target / speed * 41.2321;
    if (count < target) {
      number.innerText = Math.ceil(count + inc);
      setTimeout(updateCount, 50)
    } else {
      number.innerText = target;
    }
  }

  updateCount();
})