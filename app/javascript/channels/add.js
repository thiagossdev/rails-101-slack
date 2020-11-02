$(document).on('turbolinks:load', () => {
  $(".add_channel").on('click', e => {
    $('#add_channel_modal').modal('open');
    return false;
  });

  $('.add_channel_form').on('submit', e => {
    $.ajax(e.target.action, {
        type: 'POST',
        dataType: 'json',
        data: {
          channel: {
            slug: $('#channel_slug').val(),
            team_id: $('#channel_team_id').val()
          }
        },
        success(data, text, jqXHR) {
          window.add(data['slug'], data['id'], 'channel');
          window.open(data['id'], 'channels');
          Materialize.toast('', 4000, 'green');
          M.toast({html: 'Success in add Channel 😁', classes: 'green'});
        },
        error(jqXHR, textStatus, errorThrown) {
          M.toast({html: 'Problem in add Channel ☹️', classes: 'red'});
        }
      }
    );

    $('#add_channel_modal').modal('close');
    return false;
  });
});
