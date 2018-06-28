module.exports = (Franz) => {
  const getMessages = () => {
    let count = 0;
    let count2 = 0;

    const elements = document.querySelectorAll('.counter');
    for (let i = 0; i < elements.length; i += 1) {
      if (parseInt(elements[i].innerText, 10) !== 0) {
        count += parseInt(elements[i].innerText, 10);
      }
    }

    const elements2 = document.querySelectorAll('.badge');
    for (let i = 0; i < elements2.length; i += 1) {
      if (parseInt(elements2[i].innerText, 10) !== 0) {
        count2 += parseInt(elements2[i].innerText, 10);
      }
    }

    // set Franz badge
    Franz.setBadge(count,count2);
  };
  Franz.loop(getMessages);

  // inject franz.css stylesheet
  Franz.injectCSS(path.join(__dirname, 'service.css'));
};  
