const projects = [{
  name: 'Пошук погоди',
  link: '<iframe width="100%" height="auto" src="https://www.youtube.com/embed/fIyoKdv15EA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
}, {
  name: 'Веб гра',
  link: '<iframe width="100%" height="auto" src="https://www.youtube.com/embed/3Cl0bQMYEbs?start=9" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
}, {
  name: 'Вебсайт візитка',
  link: '<iframe width="100%" height="auto" src="https://www.youtube.com/embed/eeYw3EKU77k" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
}, {
  name: 'Вебсайт для держагенства',
  link: '<iframe width="100%" height="auto" src="https://www.youtube.com/embed/GETQIT-SuM4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
}];
/**
 * create cards row
 * container css class is ready-projects-component
 */
function readyProjectsComponent(containerID, projects = []) {
  if (!containerID) {
    return false;
  }

  let html = '<div class="ready-projects-component row">';
  projects.forEach(item => {
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
$(function () {
  console.log('Hello world OK!!');
  readyProjectsComponent('ready-projects-component-index-id', projects);
});