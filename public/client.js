function action1 () {
    $.ajax( {
        type: 'GET',
        url:'/params',
        data: {
            "name": $("#joueur").val()
        },
        dataType : 'json'
    })
    .done(function (data) {
        
    })
    .fail(function(jq, status,err) {
        console.log("Ajax error",status) ;
    });    

}