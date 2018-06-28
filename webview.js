module.exports = (Franz) => {
  const getMessages = () => {
    let count = 0;

    const elements = document.querySelectorAll('.counter');
    for (let i = 0; i < elements.length; i += 1) {
      if (parseInt(elements[i].innerText, 10) !== 0) {
        count += parseInt(elements[i].innerText, 10);
      }
    }

    // set Franz badge
    Franz.setBadge(count,0);
  };
  Franz.loop(getMessages);

  // inject franz.css stylesheet
  Franz.injectCSS(path.join(__dirname, 'service.css'));
};  
