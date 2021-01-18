$(() => {
  $("#skill").html(DEVCARD());

  String.prototype.toProperCase = function () {
    return this.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  };

  $.getJSON("../data/index.json", (data) => {
    let dom = "";

    data.forEach((d) => {
      let skills = "";

      Object.keys(d.stack).forEach((skill) => {
        skills = skills.concat(`
            <b>${skill.toProperCase()}:</b> ${d.stack[skill]}<br>
        `);
      });

      dom = dom.concat(`
        <li class="collection-item avatar">
            <img src="${d.dp}" alt="" class="circle">
            <span class="title"><b>${d.name}</b></span>
            <br><br>
            <p>${skills}</p>
        </li>
      `);
    });

    $("#collection").html(dom);
  });
});

const DEVCARD = () => {
  return `
    <div class="row center-align">
        <br>
        <h4>Developers and Skills</h4>
    </div>
    <div class="row">
        <ul class="collection" id="collection"></ul>
    </div>
  `;
};
