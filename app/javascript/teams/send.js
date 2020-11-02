$(document).on('turbolinks:load', () => {
  let newMessage = $('.new_message');
  newMessage.on('keypress', (e) => {
    if (e.key === 'Enter' && e.shiftKey === false) {
      App.chat.send({ message: newMessage.val() });
      
      setTimeout(function () {
        newMessage.val('');
        newMessage.css({height: '46px'});
      }, 100);
    }
  });
});