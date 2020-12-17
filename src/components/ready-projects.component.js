/**
 * create cards row
 * container css class is ready-projects-component
 */
function readyProjectsComponent(containerID, projects = []) {
    if(!containerID) {
        return false;
    }

    let html = '<div class="ready-projects-component row">';

    projects.forEach((item) => {
        html += `<div class="col-md-4">
        <div class="card mb-4 shadow-sm">
          ${item.link}
          <div class="card-body">
            <p class="card-text">${item.name}</p>
          </div>
        </div>
      </div>`;
    });

    html += '</div>';
    $('#' + containerID).html(html);
}