jQuery(function($){
	$('.map').append('<div class="overlay">').append('<div class="tooltip"></div>');
	$(document).mousemove(function(e){
	/*tooltip code*/
		$('.map .tooltip').css({
			top:e.pageY-$('.map .tooltip').height()-20,
			left:e.pageX-$('.map .tooltip').width()/2
		});
	});
	/*activation coloring*/
	$('.map area').mouseover(function(){
		var regions = [
			{name:"Corse", slug:'corse'},
			{name:"Charentes", slug:'charentes'},
			{name:"Pays de Loire", slug:'paysdeloire'},
			{name:"Bretagne", slug:'bretagne'},
			{name:"Basse-Normandie", slug:'bassenormandie'},
			{name:"Haute-Normandie", slug:'hautenormandie'},
			{name:"Ile de France", slug:'iledefrance'},
			{name:"Centre", slug:'centre'},
			{name:"Acquitaine", slug:'acquitaine'},
			{name:"Limousin", slug:'limousin'},
			{name:"Bourgogne", slug:'bourgogne'},
			{name:"Auvergne", slug:'auvergne'},
			{name:"Languedoc-Rousillon", slug:'languedocrousillon'},
			{name:"Midi-Pyrénées", slug:'midipyrénées'},
			{name:"PACA", slug:'paca'},
			{name:"Rhônes-Alpes", slug:'rhonesalpes'},
			{name:"Franche-Comté", slug:'franchecomte'},
			{name:"Alsace", slug:'alsace'},
			{name:"Hauts-de-France", slug:'hautsdefrance'},
			{name:"Lorraine", slug:'lorraine'},
			{name:"Picardie", slug:'picardie'},
			{name:"Champagne-Ardenne", slug:'champagneardenne'}
		];
		var index = $(this).index();
		var left = -index* 640 - 640 - 90;
		$('.map .tooltip').html(regions[index].name);
		$('.map .tooltip').css({
			opacity : 1
		});
		$('.map .overlay').css({
			backgroundPosition: left+"px 0px"
		});
	});
	/*desactivation coloring*/
	$('.map area').mouseout(function(){
		$('.map .tooltip').css({
			opacity : 0
		});
		$('.map .overlay').css({
			backgroundPosition: "660px 0px"
		});
	});
});