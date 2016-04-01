<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>ButtonItem ejemplo3</title>
  <?php
    echo $_GET['theme'];
	
  ?>
  
  
  <link rel="stylesheet" href="//code.jquery.com/ui/1.11.2/themes/<?php echo $_GET['theme'];
?>/jquery-ui.css" id="theme">
  
  <script src="//code.jquery.com/jquery-1.10.2.js"></script>
  <script src="//code.jquery.com/ui/1.11.2/jquery-ui.js"></script>
	<!--<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>	-->
	
		<script src="../jqfu/vendor/jquery.ui.widget.js"></script>
		
		<script src="../jqfu/jquery.iframe-transport.js"></script>	
			<script src="../jqfu/jquery.fileupload.js"></script>
			<script src="../jqfu/jquery.fileupload-process.js"></script>
			<script src="../JquerySVG/jquery.svg.js"></script>
			<script src="../JquerySVG/jquery.svganim.js"></script>
	
	
		<script src="../components/Components.js"></script>	
        <script src="../functions.js"></script>		
        <script src="../components/containers/WindowContainer.js"></script>
		<script src="../components/items/Image.js"></script>
		<script src="../components/items/ButtonItem.js"></script>
		<script src="../components/items/SplitButtonItem.js"></script>
		
		<link rel="stylesheet" href="../css_components/css_window.css" />
		<link rel="stylesheet" href="../css_components/css_principal.css" />
       
		<link rel="stylesheet" href="../css_components/css_buttonItem.css" />
		<style type="text/css">
		
		body {
			font-family: Arial, Helvetica, sans-serif;
			font-size: 11px;
		}
		</style>	
	<script id="customscript">
	$( document ).ready(function(){
			try{
				Components.create('Button',{		 
				scale: 'medium',
				State:'error',
				text:'Estado error',
				tooltip:'Tamaño Personalizado',	  
				handler: function() {
								alert('error');
							}  
			}).show();

			Components.create('Button',{		
					scale: 'medium',
					text:'Estado highlight',
					State:'highlight',
					tooltip:'texto + icono',	  
					handler: function() {
								alert('highlight');
							}  
				}).show();
				
			Components.create('Button',{		
					scale: 'medium',
					text:'Estado default',
					icon: 
					{
								type:'image',
								image:'images/plussymbol.png',  
								position:'left'
							
					},
					
					
					tooltip:'Small button',	  
					handler: function() {
									alert('default');
								}  
					}).show();
			Components.create('Button',{		
					State:'active',
					scale: 'medium',
					text:'Estado active',
					tooltip:'Medium button',	  
					handler: function() {
						alert('active');
					}  
				}).show();
			Components.create('Button',{
					State:'info',	
					scale: 'medium',
					text:'Estado info',
					tooltip:'Boton Info',	  
					handler: function() {
						alert('info');
					}  
				}).show();

			Components.create('Button',{
					State:'warning',		
					scale: 'medium',
					text:'Estado warning',
					tooltip:'Boton Warning',	
				}).show();
				
			Components.create('Button',{		
					id:"botontoggle",
					State:'info',		//estado 1 
					State2:'error',		//estado 2 
					scale: 'medium',
					icon: 'images/ok.png',
					tooltip:'Toggle Button',
					text:'Toggle Info-Error',
					enableToggle:true,
					handler: function() {
							 console.log("ee");
					}    
													
				 }).show();

}catch(err){			
				alert("Codigo No valido "+err);			
			}
	
	});  
	</script>	
   <!---script id="switchthemescript"> 
	$(function() {
		$('#theme-switcher').change(function () {
			var theme = $('#theme');
			theme.prop(
				'href',
				theme.prop('href').replace(
					/[\w\-]+\/jquery-ui.css/,
					$(this).val() + '/jquery-ui.css'
				)
			);
		});
	});
  </script>
</head>
<body>
Theme Switcher:
 <select id="theme-switcher" class="pull-right">
        <option value="black-tie">Black Tie</option>
        <option value="blitzer">Blitzer</option>
        <option value="cupertino">Cupertino</option>
        <option value="dark-hive" selected>Dark Hive</option>
        <option value="dot-luv">Dot Luv</option>
        <option value="eggplant">Eggplant</option>
        <option value="excite-bike">Excite Bike</option>
        <option value="flick">Flick</option>
        <option value="hot-sneaks">Hot sneaks</option>
        <option value="humanity">Humanity</option>
        <option value="le-frog">Le Frog</option>
        <option value="mint-choc">Mint Choc</option>
        <option value="overcast">Overcast</option>
        <option value="pepper-grinder">Pepper Grinder</option>
        <option value="redmond">Redmond</option>
        <option value="smoothness">Smoothness</option>
        <option value="south-street">South Street</option>
        <option value="start" selected >Start</option>
        <option value="sunny">Sunny</option>
        <option value="swanky-purse">Swanky Purse</option>
        <option value="trontastic">Trontastic</option>
        <option value="ui-darkness">UI Darkness</option>
        <option value="ui-lightness">UI Lightness</option>
        <option value="vader">Vader</option>
    </select--->
 
</body>
</html>