$(function() {
  var url = 'https://restcountries.eu/rest/v2/name/';
  var countriesList = $('#countries');
  var countryNameinp = $('#country-name');

  $('#search').click(searchCountries);
  $('#country-name').focus(clearImput);

  function searchCountries() {
    /* pobiera wartość wpisaną przez użytkownika i przypisuje ją do zmiennej: */
    var countryName = $('#country-name').val();
    if (!countryName.length) countryName = 'Poland';
    $.ajax({
      url: url + countryName,
      method: 'GET',
      success: showCountriesList
    });
  }

  function showCountriesList(resp) {
    /* wyczyszczenie listy krajów po poprzednim zapytaniu: */
    countriesList.empty();
    /* parametr resp, czyli obiekt JSON, który przesyła do funkcji metoda .ajax(), each - forEach - czyli przeiteruj po wszystkich elementach tablicy */
    resp.forEach(function(item) {
      $('<li>').text("Kraj: " + item.name).appendTo(countriesList);
      $('<li>').text("Stolica: " + item.capital).appendTo(countriesList);
      $('<li>').text("Kontynent: " + item.region).appendTo(countriesList);
      $('<li>').text("Populacja: " + item.population).appendTo(countriesList);
      $('<li>').text("Powierzchnia: " + item.area + " km2").appendTo(countriesList);
    });
  }

});
