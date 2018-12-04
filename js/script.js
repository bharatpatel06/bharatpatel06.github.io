$(document).ready(function(){
	$(window).scrollTop( 0 );
	$(window).scroll(function(){
		var scrollTop = $(window).scrollTop() ;
		$(".atmospheres").css("bottom", "-"+scrollTop+"px");
		$(".parallax").each(function(){
			$(this).css($(this).attr("parallax-Side"), scrollTop*$(this).attr("parallax-Depth")+"px");
		});
	});
	$(window).on("mousemove", function(e){
		var c = $(window).width();
		var diff = e.pageX - c;
		$(".mleft").each(function(){

			$(this).css("margin-left", diff*$(this).attr("depth"));
		});
		$(".mright").each(function(){
			$(this).css("margin-left", -diff*$(this).attr("depth"));
		});
	})




	var flag=0, link = "", title = "", imgSrc = "";
	if(flag==0)
	{
		flag=1;
		var yql = "https://codepen.io/bharatpatel/public/feed";
		$.ajax({
			url:        yql,
			dataType:   "html",
			success:    function(data){
				data = $.parseHTML(data);
				var items = data[0].getElementsByTagName("item");
				for(var i=1 ; i< 6; i++)
				{
					link = items[i].children[2].innerHTML;
					title = items[i].getElementsByTagName("title")[0].innerHTML;
					imgSrc = link+"/image/small.png";
					$(".loadRSS").append("<div class='workTabs text-center'><a target='_blank' href='"+link.replace('/pen/', '/full/')+"'><img src="+imgSrc+" alt='"+ title +"'><br>"+ title +"</a></div>");
					if((i+1)%3 == 0)
						$(".loadRSS").append("<div class='clearfix'></div>");
					// if((i+1)%2 == 0)
					//  $(".loadRSS").append("<div class='clearfix hidden-md hidden-lg'></div>");
				}
			}
		});
	}
});