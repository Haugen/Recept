<div class="col-xs-12 col-md-6">
  <h1>Lägg till recept</h1>
  <form action="index.php?q=add-recipe" method="POST">
    <input type="text" name="title" class="form-control" placeholder="Titel">
    <h2>Ingridienser</h2>
    <table class="table" id="ingredients-table">
      <tr>
        <th width="15%">Mängd</th>
        <th width="15%">Mått</th>
        <th>Ingridiens</th>
        <th width="9%"></th>
      </tr>

    </table>
    <a href="#" id="add-more-link">+ Lägg till ingrediens</a>
    <br /><br />
    <button class="btn btn-lg btn-primary btn-block" type="submit">Skapa recept</button>
  </form>
</div>
