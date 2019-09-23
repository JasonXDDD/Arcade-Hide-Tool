const hide = () => {
  console.log("Hide")
  document.body.getElementsByClassName('blocklyToolboxDiv')[0].style.display = 'none';
};
const reset = () => {
  document.body.getElementsByClassName('blocklyToolboxDiv')[0].style.display = 'block';  
}

const onMessage = (message) => {
  switch (message.action) {
    case 'HIDE':
      hide();
      break;
    case 'RESET':
      reset();
      break;
    default:
      break;
  }
}

chrome.runtime.onMessage.addListener(onMessage);