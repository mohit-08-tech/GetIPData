
window.onload = function(e){
$.getJSON ("https://api.ipify.org?format=json",function(data){
       var info = data.ip
       storeData(info)
   });

    function storeData(info){
    jQuery.ajax({
        url:'https://script.google.com/macros/s/AKfycbx3QiX0A3dbGLTZbnaysXUUuZH8SlZMpb4VJuS1ctNV36mVxuYKRn0_hCTg4uc008K5/exec',
        type:'post',
        data: { "IP": info},
        success:function(result){
          
        }
    });
}
}