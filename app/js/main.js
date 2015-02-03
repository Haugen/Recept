$(document).ready(function() {
  var rowCounter = 0;
  var nrOfStartRows = 3;

  // Helper function to keep width on table cells while they are resorted.
  // Found on http://www.foliotek.com/devblog/make-table-rows-sortable-using-jquery-ui-sortable/
  var fixHelper = function(e, ui) {
    ui.children().each(function() {
        $(this).width($(this).width());
    });
    return ui;
  };

  // Write out a few rows from the get-go.
  for (var i = 0; i < nrOfStartRows; i++) {
    rowCounter++;
    $('#ingredients-table tbody').append(addNewRow(rowCounter));
  }

  // Add a new row to the table.
  $('#add-more-link').click(function() {
    rowCounter++;
    $('#ingredients-table tbody').append(addNewRow(rowCounter));
  });

  // Make the table sortable by jQuery UI.
  $('#ingredients-table tbody').sortable({
    handle: '.reorder',
    helper: 'fixHelper',
  });

});

// To be able to react on dynamically added rows, the handle needs to be outside
// of the scope above.
$(document).on('click', '.delete-row', function() {
  $(this).closest('tr').remove();
});
