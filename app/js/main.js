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

  // The markup for a new row.
  function addNewRow(rowNr) {
    var row  = '<tr class="row-' + rowNr + '">';
    row     += '<td class="reorder" width="4%">*</td>';
    row     += '<td width="15%"><input type="text" name="amount-' + rowNr + '" class="form-control"></td>';
    row     += '<td width="15%">';
    row     += '<select name="unit-' + rowNr + '" class="form-control">';
    row     += '<option value="mg">mg</option>';
    row     += '<option value="dl">dl</option>';
    row     += '<option value="ms">ms</option>';
    row     += '<option value="kr">kr</option>';
    row     += '<option value="l">l</option>';
    row     += '</select>';
    row     += '</td>';
    row     += '<td><input type="text" name="ingredient-' + rowNr + '" class="form-control"></td>';
    row     += '<td width="9%"><a href="#" class="btn btn-danger delete-row">X</a></td>';
    row     += '</tr>';

    return row;
  }

});

// To be able to react on dynamically added rows, the handle needs to be outside
// of the scope above.
$(document).on('click', '.delete-row', function() {
  $(this).closest('tr').remove();
});
