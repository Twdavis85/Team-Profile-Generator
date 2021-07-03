let employeeCards = [];

function employeeHTML(team) {
  let employee;
  for (let i = 0; i < team.length; i++) {
    if (team[i].getRole() === "Manager") {
      employee = `<div class="col">
            <div class="card">
              <div class="card-body">
              <div class="card-header">
              <h2>${team[i].name}</h2>
              <h4>${team[i].getRole()}</h4>
            </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">${team[i].id}</li>
                  <li class="list-group-item">${team[i].email}</li>
                  <li class="list-group-item">${team[i].officeNumer}</li>
                </ul>
              </div>
            </div>
          </div>`;

      employeeCards.push(employee);
    } else if (team[i].getRole() === "Engineer") {
      employee = `<div class="col">
            <div class="card">
              <div class="card-body">
              <div class="card-header">
              <h2>${team[i].name}</h2>
              <h4>${team[i].getRole()}</h4>
            </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">${team[i].id}</li>
                  <li class="list-group-item">${team[i].email}</li>
                  <li class="list-group-item">${team[i].gitHub}</li>
                </ul>
              </div>
            </div>
          </div>`;

      employeeCards.push(employee);
    } else {
      employee = `<div class="col">
            <div class="card">
              <div class="card-body">
              <div class="card-header">
              <h2>${team[i].name}</h2>
              <h4>${team[i].getRole()}</h4>
            </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">${team[i].id}</li>
                  <li class="list-group-item">${team[i].email}</li>
                  <li class="list-group-item">${team[i].school}</li>
                </ul>
              </div>
            </div>
          </div>`;

      employeeCards.push(employee);
    }
  }
}

function generateHTML(team) {
  employeeHTML(team);

  return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
      crossorigin="anonymous"
    />
    <title>Document</title>
  </head>
  <body>
  <div class="row row-cols-1 row-cols-md-3 g-4">
    ${employeeCards.toString()}
  </div>
  </body>
</html>`;
}

module.exports = {
    generateHTML,
    employeeHTML 
}
