// replace 'test-form' with the id of the form
$(function () {
  let $form = $("#contact-form"),
    url =
      "https://script.google.com/macros/s/AKfycbxrUI3NshPXWzeUs3X-I-cLyFyZwlZIR9mmDnhoTLNskdn1OB-H/exec";

  // #submit-form is the id of the submit button: change it
  $("#submit-contact-form").on("click", function (e) {
    e.preventDefault();
    let jqxhr = $.ajax({
      url: url,
      method: "GET",
      dataType: "json",
      data: $form.serialize(),
      success: function () {
        M.toast({ html: "Message Sent!" });
      },
    });
  });
});
