$(document).ready(function() {
  var rowCounter = 1;

  $('#ingredients-table').append(addNewRow(rowCounter));

  $('#add-more-link').click(function() {
    rowCounter++;
    $('#ingredients-table').append(addNewRow(rowCounter));
  });

  function addNewRow(rowNr) {
    var row  = '<tr class="row-' + rowNr + '">';
    row     += '<td><input type="text" name="amount-' + rowNr + '" class="form-control"></td>';
    row     += '<td>';
    row     += '<select name="unit-' + rowNr + '" class="form-control">';
    row     += '<option value="mg">mg</option>';
    row     += '<option value="dl">dl</option>';
    row     += '<option value="ms">ms</option>';
    row     += '<option value="kr">kr</option>';
    row     += '<option value="l">l</option>';
    row     += '</select>';
    row     += '</td>';
    row     += '<td><input type="text" name="ingredient-' + rowNr + '" class="form-control"></td>';
    row     += '<td><a href="#" class="btn btn-danger delete-row">X</a></td>';
    row     += '</tr>';

    return row;
  }
});

$(document).on('click', '.delete-row', function() {
  $(this).closest('tr').remove();
});
