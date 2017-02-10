$(document).ready(function(){
    //variables
    //var url1='https://api.github.com/users/'+username;
   //var url2='https://api.github.com/users/'+username+'/repos';
   $("#load").hide();
   $("#repoh").hide();
    $(".info").click(function(){
    	var username=$("#ghname").val();
    	$("#load").show();
          if(username.length>0)  {
            $.ajax({
		url: "https:api.github.com/users/"+username,
		type: 'GET',
		dataType: 'json',
		success:function(data){
			var name=data.name;
			var photo=data.avatar_url;
			var followers=data.followers;
			var follow=data.following;
			var repos=data.public_repos;
            $("#load").hide();
            var display="<img src="+photo+"><h3 id=text>"+name+"</h3><p id=text>Followers:"+followers+"  Following:"+follow+"</br>Repos:"+repos+"</p>";
            $(".ghuserdata").html(display).fadeIn(2000);
            //funciton for repo call
            if(repos>0){
           $.ajax({
           	 url: "https:api.github.com/users/"+username+"/repos",
		    type: 'GET',
		    dataType: 'json',
		    success:function(data2){
		    	$("#repoh").show();
                var out="";
		    	for(var i=0;i<data2.length;i++){
                out=out+"<li><a href="+data2[i].html_url+" target=_blank>"+data2[i].name+"</a></li>";
		    	$(".allrepo").html(out);
		    }}
           });
         }
        },

		error:function(){
			alert("There was some error");
		}
	});
              
          }  
    });

});