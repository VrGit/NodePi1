function action1 () {
    $.ajax( {
        type: 'POST',
        url:'/params',
        data: {
            "name": $("#joueur").val()
        }
    })
    .done(function (data) {
        let all = $("#all") ;
        all.html(data) ;
    })
    .fail(function(jq, status,err) {
        console.log("Ajax error",status) ;
    });    

}