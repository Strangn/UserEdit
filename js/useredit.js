var url = "https://localhost8080"

$().ready(() => {

    $("#getuser").click(()  => {
        getUserByPrimaryKey($("#userid").val()
    });
    $("#save").click(() => {
        updateUser();
    });

});

function updateUser()  {
    var id = $("#pid").val();
    var username = $("#pusername").val();
    var password = $("#ppassword").val();
    var firstname = $("#pfirstname").val();
    var lastname = $("#plastname").val();
    var phone = $("#pphone").val();
    var email = $("#pemail").val();
    var reviewer = $("#pfirstnamereviewer").val();
    var admin = $("#padmin").val();
    var active = $("#pactive").val();

    var user = {
        id: id,
        username: username,
        password: password,
        firstname: firstname,
        lastname: lastname,
        phone: phone,
        email: email,
        reviewer: reviewer,
        admin: admin,
        active: active
    }
    $.post(url+"change", user)
    .then((resp) =>   {
        console.log(resp);
    });
}


function getUserByPrimaryKey(id) {
    console.log("getUserByPrimaryKey()");
    $.getJSON(url+"Get/"+id)
        .then((resp) => {
            render(resp.data);
        });
}

function render(user)  {
    $("#pid").val(user.id);
    $("#pfname").val(user.firstname);
    $("#plname").val(user.lastname);
    $("#pusername").val(user.username);
    $("#ppassword").val(user.password);
    $("#pphone").val(user.phonenumber);
    $("#pemail").val(user.email);
    $("#previewer").prop("checked", user.reviewer);
    $("#padmin").prop("checked", user.admin);
}
