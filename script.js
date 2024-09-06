document.addEventListener('DOMContentLoaded', function() {
    var cells = document.querySelectorAll('.rectangle');
  
    cells.forEach(function(cell) {
      cell.addEventListener('click', function() {
        var floor = this.innerText;
        alert("Am ajuns la etajul " + floor);
      });
    });
  });
  document.addEventListener('DOMContentLoaded', function() {
    var svgLogo = document.createElement('img');
    svgLogo.src = 'logo.svg';
    svgLogo.alt = 'Logo';
    svgLogo.classList.add('svg-logo');
  
    document.body.appendChild(svgLogo);
  });
  
    