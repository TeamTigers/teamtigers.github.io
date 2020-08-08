$(function () {
  $("#contact-form").submit(function () {
    let url = "https://cuntato.herokuapp.com/api/project-data";
    let data = {
      name: $("#name").val(),
      email: $("#email").val(),
      message: $("#message").val(),
    };
    data = JSON.stringify(data);
    let projectID = "lp4qhvtmaa";
    let currentURL = window.location.href;
    $.post(
      url,
      { data, projectID: projectID, currentURL: currentURL },
      function () {}
    )
      .done((res) => {
        M.toast({ html: "Message sent successfully" });
      })
      .fail(() => {
        M.toast({ html: "Something went wrong!" });
      });
  });
});
