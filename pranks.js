var pranks = function (opt) {
	var ncphotos = [
		"http://cdn0.dailydot.com/uploaded/images/original/2015/2/9/nicolas-cage-will-be-in-the-expendables-3.jpg",
		"http://cdn1-www.craveonline.com/assets/uploads/2014/10/Nicolas-Cage-Con-Air.jpg",
		"https://s-media-cache-ak0.pinimg.com/736x/70/27/65/7027655d30001e20f086aacb108fb579.jpg",
		"https://s-media-cache-ak0.pinimg.com/736x/7b/ae/18/7bae18b6c1d482c5690739b426182b56.jpg"
	];
	
	this.opt = opt;
	this.start = function () {
		prompt("start")
		if (this.opt["rickroll"]) {
			$("a")
				.attr("href","https://www.youtube.com/watch?v=dQw4w9WgXcQ");
		}
		if (this.opt["nickcage"]) {
			$("img")
				.attr("src",ncphotos[Math.round(Math.random()*ncphotos.length)]);
		}
		if (this.opt["upsidedown"]) {
			$("body")
				.css("-webkit-transform","rotateZ(180deg)");
		}
		if (this.opt["disappear"]) {
			$("span,p,a,div").mouseover(function () {
				$(this)
					.fadeOut(this.opt["disappear-time"]*1000);
			});	
		}
		if (this.opt["konami"]) {
			$("body").keypress(function (e) {
				if (e.keyCode=="38") {
					$("body").keypress(function (e) {
						if (e.keyCode=="38") {
							$("body").keypress(function (e) {
								if (e.keyCode=="40") {
									$("body").keypress(function (e) {
										if (e.keyCode=="40") {
											$("body").keypress(function (e) {
												if (e.keyCode=="37") {
													$("body").keypress(function (e) {
														if (e.keyCode=="39") {
															$("body").keypress(function (e) {
																if (e.keyCode=="37") {
																	$("body").keypress(function (e) {
																		if (e.keyCode=="39") {
																			$("body").keypress(function (e) {
																				if (e.keyCode=="65") {
																					$("body").keypress(function (e) {
																						if (e.keyCode=="66") {
																							this.opt["result"]();	
																						}	
																					}		
																				}
																			}		
																		}
																	}		
																}
															}		
														}
													}		
												}
											}		
										}	
									}	
								}
							}		
						}	
					}	
				}
			});
		}
		if (this.opt["shyguy"]) {
			var img = document.createElement("IMG");
			img.src = "http://i264.photobucket.com/albums/ii162/I-So-Cunfooosed/Animations/thshyguygb81.gif";
			img.width = 85; img.height = 85; img.style.position = "relative"; img.style.top = "300px";
			$(img).animate({ left: '+=750' }, 1200 );
		}	
	}	
}
