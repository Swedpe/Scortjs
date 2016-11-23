<?php
$respuesta=array();
$itemarray = array();
switch($_REQUEST['dataset'])
{
	case 'sampledata1':
		$inicio=isset($_REQUEST['start'])?$_REQUEST['start']:1;
		$final=isset($_REQUEST['limit'])?$_REQUEST['limit']:10;
		$items = array();
		for($x=$inicio;$x<($inicio+$final);$x++){
			$itemarray['id']= $x;
			$itemarray['value']='value'.$x;
			$itemarray['number']=rand();
			$items[]=$itemarray;
		}
		$respuesta['conteo'] = 120;
		$respuesta['Items'] = $items;
	break;
	case 'sampledata2':
		$namesprefix=array('Nombre','Apellido','Direccion');	
		for($x=1;$x<=(15);$x++){
			$item = new stdClass();
			$val= $namesprefix[rand(0,2)];
			$item->value = $val.$x;
			$item->label = $val.$x;
			$item->id = $x;			
			$respuesta[]=$item;
		}
	break;
	case 'sampledata3':
		$namesprefix=array('Nombre','Apellido','Direccion');	
		for($x=1;$x<=(8);$x++){
			$item = new stdClass();
			$val= $namesprefix[rand(0,2)];
			$item->value = $val.$x;
			$item->label = $val.$x;					
			$respuesta[]=$item;
		}
	break;
}
echo json_encode($respuesta);

?>