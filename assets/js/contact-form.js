$(function () {
  $("#contact-form").submit(function (e) {
    e.preventDefault();
    $("#submit-contact-form").attr("disabled", true);
    $("#submit-contact-form").prop("value", "Sending message");
    let url = "https://cuntato.herokuapp.com/api/project-data";
    let data = {
      name: $("#name").val(),
      email: $("#email").val(),
      message: $("#message").val(),
    };
    data = JSON.stringify(data);
    let projectID = "lp4qhvtmaa";
    let currentURL = window.location.href;
    $.post(url, { data, projectID: projectID, currentURL: currentURL }, function () {})
      .done((res) => {
        $("#submit-contact-form").attr("disabled", false);
        $("#submit-contact-form").prop("value", "Submit");
        M.toast({ html: "Message sent successfully" });
      })
      .fail(() => {
        $("#submit-contact-form").attr("disabled", false);
        $("#submit-contact-form").prop("value", "Submit");
        M.toast({ html: "Something went wrong!" });
      });
  });
});
