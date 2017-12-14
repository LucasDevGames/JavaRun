			function confirm () {
				location.reload();
			}

			var CustomConfirm = new function(){

				this.show = function (msg, callback) {
					var dlg = document.getElementById('dialogCont');
					var dlgBody = dlg.querySelector('#dlgBody');
					dlg.style.top = '30%';
					dlg.style.opacity = 1;
					dlgBody.textContent = msg;
					this.callback = callback;
				};

				this.okay = function () {
					this.callback();
					this.close();
				};

				this.close = function () {
					var dlg = document.getElementById('dialogCont');
					dlg.style.top = '-30%';
					dlg.style.opacity = 0
				}
			}
