<?php
// Include header template.
include('templates/header.tpl.php');

// Body
if ($_GET['q'] == 'add-recipe-form') {
  include('templates/add-recipe.tpl.php');
}

// Include footer template.
include('templates/footer.tpl.php');

?>
