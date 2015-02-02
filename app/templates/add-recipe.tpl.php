<div class="col-xs-6">
  <h1>Lägg till recept</h1>
  <form action="index.php?q=add-recipe" method="POST">
    <input type="text" name="title" class="form-control" placeholder="Titel">
    <h2>Ingridienser</h2>
    <table class="table">
      <tr>
        <th>Mängd</th>
        <th>Mått</th>
        <th>Ingridiens</th>
      </tr>
      <tr>
        <td><input type="text" name="amount" class="form-control"></td>
        <td>
          <select class="form-control">
            <option>mg</option>
            <option>dl</option>
            <option>ms</option>
            <option>kr</option>
            <option>l</option>
          </select>
        </td>
        <td><input type="text" name="ingredient" class="form-control"></td>
      </tr>
    </table>
    <button class="btn btn-lg btn-primary btn-block" type="submit">Skapa recept</button>
  </form>
</div>
