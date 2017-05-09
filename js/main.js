window.onload = function(){
	var c = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');
	var _3ard = 600;
	var _irtifa3 = 585;
	c.width = _3ard;
	c.height = _irtifa3;

	function Itar(x, y){
		this.x = x;
		this.y = y;

		this.xv = 1 + Math.random() * 8;
		this.yv = 7;

		this.width = this.height = this.radi = 20;

		this.r = Math.round(Math.random()*255);
		this.g = Math.round(Math.random()*255);
		this.b = Math.round(Math.random()*255);

		this.rgba = 'rgba('+this.r+', '+this.g+', '+this.b+', 1)';

		this.rsam = function(){
		ctx.fillStyle = this.rgba;
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radi, 0, Math.PI*2, true); 
		ctx.closePath();
		ctx.fill();
			this.tajdid();
		}
		this.tajdid = function(){

			if (this.x < 0) {
				this.x = 0;
				this.xv *= -1;
			}
			this.yv += .25;
			if (this.y < 0) {
				this.y = 0;
				this.yv *= -1;
			}
			if (this.x > _3ard - this.width) {
				this.x = _3ard - this.width;
				this.xv *= -1;
			}
			if (this.y > _irtifa3 - this.height) {
				this.yv *= .7;
				this.xv *= .7;
				this.y = _irtifa3 - this.height;
				this.yv *= -1;
			}

			this.x += this.xv;
			this.y += this.yv;

		}
	}

	// var it = new Itar(75, 75);

	var korat = [];

	function rsam(){
		ctx.globalCompositeOperation = "source-over";
		ctx.fillStyle = 'rgba(230,230,250,0.7)';
		ctx.fillRect(0, 0, _3ard, _irtifa3);
		for (var i = 0; i < korat.length; i++) {
			korat[i].rsam();
		}
		// rsm dwira
		// it.rsam();
		// slat dwira
		tajdid();
	}

	function tajdid(){
		for(var i = 0; i < korat.length; i++){
			korat[i].tajdid();
		}
	}
	setInterval(function(){
		korat.push(new Itar(12, 12));
	}, 300);
	loop();
	function loop(){
		rsam();
		window.requestAnimationFrame(loop);
	}

}