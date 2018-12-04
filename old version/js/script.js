$(window).on("load", function(){
	$(".ratings").each(function(){
		var rating = $(this).attr("rate");
		var rateString="";
		for(var i=0; i<10; i++)
		{
			if(i < rating)
				rateString +='<i class="fa fa-star hidden-xs" aria-hidden="true"></i>';
			else
				rateString +='<i class="fa fa-star-o hidden-xs" aria-hidden="true"></i>';
		}
		rateString +='<i class="fa fa-trophy visible-xs" aria-hidden="true">'+rating+'</i>';
		$(this).html(rateString);
	});

	///////////////////////////////////////////////////////////Load My Works////////////////////////////////////////////////

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
					for(var i=0 ; i< 6; i++)
					{
						link = items[i].children[2].innerHTML;
						title = items[i].getElementsByTagName("title")[0].innerHTML;
						imgSrc = link+"/image/large.png";
						$(".loadRSS").append("<div class='workTabs col-xs-4 col-md-4 text-center'><a target='_blank' href='"+link.replace('/pen/', '/full/')+"'><img src="+imgSrc+" alt='"+ title +"'><br>"+ title +"</a></div>");
						if((i+1)%3 == 0)
							$(".loadRSS").append("<div class='clearfix'></div>");
						// if((i+1)%2 == 0)
						//  $(".loadRSS").append("<div class='clearfix hidden-md hidden-lg'></div>");
					}
				}
			});
		}

	///////////////////////////////////////////////////////////Load My Works////////////////////////////////////////////////


});