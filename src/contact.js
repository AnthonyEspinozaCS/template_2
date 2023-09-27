const public_key = "ECZnDfndQHxfORbGd";

(function () {
  // https://dashboard.emailjs.com/admin/account
  emailjs.init(public_key);
})();

window.onload = function () {
  document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();
    this.client.value = "aespinoza.cs@gmail.com";
    this.client_name.value = "test";
    // these IDs from the previous steps
    emailjs.sendForm("contact_service", "contact_form", this).then(
      () => {
        alert("Your form has been submitted successfully!!");
      },
      (error) => {
        alert(JSON.stringify(error));
      }
    );
    this.reset();
  });
};
