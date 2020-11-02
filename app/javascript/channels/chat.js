import consumer from './consumer'

window.change_chat = (id, type, team_id) => {
  if (App.chat !== undefined) {
    App.chat.unsubscribe();
  }

  App.chat = consumer.subscriptions.create({
      channel: 'ChatChannel',
      id: id,
      type: type,
      team_id: team_id
  }, {
    received(data) {
      window.add_message(data.message, data.date, data.name);
    }
  });
};
