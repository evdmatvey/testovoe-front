const bidForm = document.querySelector('.bid-form__form');
const bidFormButton = bidForm.querySelector('button[type="submit"]');

const bidFormHandler = (event) => {
  event.preventDefault();
  event.stopPropagation();

  const nameValue = bidForm.querySelector('input[name="name"]').value;
  const phoneValue = bidForm.querySelector('input[name="phone"]').value;
  const emailValue = bidForm.querySelector('input[name="email"]').value;
  const innValue = bidForm.querySelector('input[name="inn"]').value;

  const dto = {
    name: nameValue,
    phone: phoneValue,
    email: emailValue,
    inn: innValue,
  };

  console.log('Данные формы заказа: ', dto);
};

bidFormButton.addEventListener('click', bidFormHandler);
