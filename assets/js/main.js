const counterSection = document.querySelector('#counter');
const numbers = document.querySelectorAll('.number');
const speed = 2500
options = {

}

const counterObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {

    if (entry.isIntersecting) {
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
    } else {
      // uncomment this if u want animate the numbers
      // every times appear on screen.
      // numbers.forEach(number => {
      //   number.innerText = 0;
      // })
    }

  })
}, options)



counterObserver.observe(counterSection)