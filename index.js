document.getElementById('form').addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const data = Array.from(formData.entries()).reduce(
    (memo, pair) => ({
      ...memo,
      [pair[0]]: pair[1],
    }),
    {}
  );
  console.log(data);
  axios.post('https://tutorplusbackend.herokuapp.com/register', data).then((res) => {
    document.getElementById('form').reset();
    alert(`Form Submitted`);
  });
});
