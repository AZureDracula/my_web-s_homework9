

			var ph = document.getElementById("title_name");
			var otime = null;
			var num = -300;

			function tomove() {

				otime = setInterval(function() {
					num += 8;
					if(num == 1100) {
						num = -300;
						clearInterval(otime);
					}
					ph.style.backgroundPosition = num + "px 0px";

				}, 40)
			}
			tomove();
			setInterval(function() {
				tomove();
			}, 3000);

