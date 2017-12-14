
			function gotoMyChannel () {
				if(confirm('Do you want to visit the channel?')){
					window.location = 'https://youtube.com/c/SamSolomonPrabuSD';
				}
			}

			function gotoMyChannelCustom () {
				window.location = 'https://youtube.com/c/SamSolomonPrabuSD';
			}

			var CustomConfirm = new function(){

				this.show = function (msg, callback) {
					var dlg = document.getElementById('dialogCont');
					var dlgBody = dlg.querySelector('#dlgBody');
					dlg.style.top = '30%';
					dlg.style.opacity = 1;
					dlgBody.textContent = msg;
					this.callback = callback;
					document.getElementById('freezeLayer').style.display = '';
				};

				this.okay = function () {
					this.callback();
					this.close();
				};

				this.close = function () {
					var dlg = document.getElementById('dialogCont');
					dlg.style.top = '-30%';
					dlg.style.opacity = 0;
					document.getElementById('freezeLayer').style.display = 'none';
				}
			}
