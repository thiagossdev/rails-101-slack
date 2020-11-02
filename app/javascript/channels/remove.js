$(document).on('turbolinks:load', () => {
  $('body').on('click', 'a.remove_channel', e => {
    $('#remove_channel_modal').modal('open');
    $('.remove_channel_form').attr('action', 'channels/' + e.target.id);
    $('#channel_remove_id').val(e.target.id);

    return false;
  });

  return $('.remove_channel_form').on('submit', e => {
    $.ajax(e.target.action, {
        type: 'DELETE',
        contentType:'application/json',
        dataType: 'json',
        data: {},
        success(data, text, jqXHR) {
          $('.channel_' + $('#channel_remove_id').val()).remove();
          M.toast({html: 'Success in delete Channel 😁', classes: 'green'});
        },
        error(jqXHR, textStatus, errorThrown) {
          M.toast({html: 'Problem to delete Channel ☹️', classes: 'red'});
        }
      }
    );

    $('#remove_channel_modal').modal('close');
    return false;
  });
});
