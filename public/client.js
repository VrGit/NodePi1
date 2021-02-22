function action1 () {
    $.ajax( {
        type: 'GET',
        url:'/params',
        data: {
            "name": $("#joueur").val()
        }
    })
    .done(function (data) {
        alert (data) ;
    })
    .fail(function(jq, status,err) {
        console.log("Ajax error",status) ;
    });    

}