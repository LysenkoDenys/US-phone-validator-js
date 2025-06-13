document.addEventListener('DOMContentLoaded', () => {
  const nodeInput = document.getElementById('user-input');
  const nodeResult = document.getElementById('results-div');
  const nodeButtonCheck = document.getElementById('check-btn');
  const nodeButtonClear = document.getElementById('clear-btn');

  const regex = /^(?:\d{10}|1?\s*(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4})$/gi;

  const getCheckedNumber = () => {
    if (nodeInput.value === '') {
      alert('Please provide a phone number');
      return;
    }
    const isValid = nodeInput.value.match(regex);
    const message = isValid
      ? `Valid US number: ${nodeInput.value}`
      : `Invalid US number: ${nodeInput.value}`;

    nodeResult.innerHTML = `<p>${message}</p>` + nodeResult.innerHTML;
    nodeInput.value = '';
    return;
  };

  nodeInput.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
      nodeButtonCheck.click();
    }
  });

  const getInputClear = () => {
    nodeResult.innerText = '';
    nodeInput.value = '';
  };

  nodeButtonCheck.addEventListener('click', getCheckedNumber);
  nodeButtonClear.addEventListener('click', getInputClear);
});
