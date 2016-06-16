<?php
include_once('DBconfig.php');
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
	case 'createsamplelivedata':
		$exito=false;
		$mensaje ='Datos creados con exito';
		//Los datos son de DBconfig.php
		$conn = new mysqli($servername, $username, $password);
		// Check connection
		if ($conn->connect_error) 
			die("Connection failed: " . $conn->connect_error);
			
		$sql = "CREATE DATABASE IF NOT EXISTS ".$scortsampledb;
		if ($conn->query($sql) === TRUE) {
			mysqli_select_db($conn,$scortsampledb);
			$sql = "CREATE TABLE IF NOT EXISTS samplelivedataset (
				ID INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
				Nombre VARCHAR(30) ,
				Apellido VARCHAR(30) 
				);";
                        $sql3 ="TRUNCATE TABLE samplelivedataset";
                        $sql2= "INSERT INTO `samplelivedataset` (`ID`, `Nombre`, `Apellido`) VALUES
                                (1, 'Javier', 'Castro Miranda'),
                                (2, 'William Edgar ', 'Uria Martinez'),
                                (3, 'Leoncio C&eacute;sar', 'Pe&ntilde;a Villafuerte'),
                                (4, 'Oscar ', 'Guzman Madariaga'),
                                (11, 'Roberto Francisco', 'Salas Valverde'),
                                (12, 'Cesar Hipolito', 'Machacuay Diaz'),
                                (13, 'Jorge Antonio ', 'Cueva Garcia  '),
                                (14, 'Julio Cesar ', 'Incio Quiroz '),
                                (15, ' Edwin Walter ', 'Badillo Ochoa '),
                                (16, 'Marcos Yovan', 'Mallqui Alcocer '),
                                (17, 'David Fredelino ', 'Giraldo Chinchay '),
                                (19, 'Eduardo ', 'Musayon Palma '),
                                (20, 'Richard Domingo ', 'Curi Paco Contreras '),
                                (21, 'Juan Luis ', 'Salazar Carhuachuco '),
                                (22, 'Antidoro Abel ', 'Damian Villar '),
                                (23, 'Jorge Augusto', 'Vargas Ch&aacute;vez '),
                                (24, 'Daniel Eugenio ', 'Angulo P&eacute;rez '),
                                (25, 'Jos&eacute; Luis ', 'Ordo&ntilde;ez Flores '),
                                (26, 'Henry Peter ', 'Vega Ayala '),
                                (27, 'Gerardo Gaudencio ', 'Coronado Godoy '),
                                (28, 'H&eacute;ctor Santiago ', 'Rodr&iacute;guez Telada '),
                                (29, 'Wilfredo Gerardo ', 'Cuervo De La Mata '),
                                (30, 'Anibal Nazario', 'Durand Apaza'),
                                (31, 'Oscar ', 'Trujillo Hermita&ntilde;o '),
                                (32, 'Angel Ernesto Abelardo ', 'Quintanilla Paz Soldan'),
                                (33, 'Cesar Vicente Pucuhuayla Carde', 'Pucuhuayla'),
                                (34, 'Jordy Andres Pucuhuayla Carden', 'Pucuhuayla'),
                                (35, 'Henry Cristian ', 'Rojas Olivares'),
                                (36, 'Juan Alberto ', 'Neyra Ramirez'),
                                (37, 'Rafael Julio Lucero Melgarejo', ''),
                                (38, 'Jimmy Anthony', 'Garcia Pereda'),
                                (39, 'Humberto ', 'R&iacute;os D&aacute;vila'),
                                (40, 'Juan carlos ', 'Almanza Casaverde'),
                                (41, 'Ervert ', 'Condori Valeriano'),
                                (42, 'C&eacute;sar Augusto ', 'Vega Medina'),
                                (43, 'Javier Enrique', 'Castro Miranda'),
                                (44, 'Marco Antonio ', 'Herrera Chehin'),
                                (45, 'Hugo Gustavo Torres Rodriguez', ''),
                                (46, 'Neri Felipe Torres Gutierres', ''),
                                (47, 'Jorge Luis', 'Acosta'),
                                (49, 'Oscar Dongo', ''),
                                (53, 'Luis Alfredo', 'Masias Cisneros'),
                                (55, 'Ernesto Velarde Campos', ''),
                                (56, 'Enrique Seminario Acosta', 'Acosta'),
                                (57, 'Raquel Butron Cadillo', ''),
                                (58, 'Rosio Vargas Fernandez', 'Fernandez'),
                                (59, 'Pedro Due&ntilde;as Cabrera', 'Cabrera'),
                                (60, 'Sonia Ruelas Cayo', ''),
                                (61, 'Samuel Villavicencio Polo', ''),
                                (62, 'Juan Bazan Abanto', '');";
						
                                if ( $conn->query($sql)  === TRUE ) {
                                        $conn->query($sql3);
                                        if ($conn->query($sql2) === TRUE)
                                            $exito=true;
                                }else 
                                        $mensaje = "Error filling table: " . $conn->error;	
		}else 			
			$mensaje = "Error creating database or already exist: " . $conn->error;	
			
		$conn->close();
		$respuesta['resultado'] = $exito;
		$respuesta['mensaje'] = $mensaje;		
	break;
	case 'readsamplelivedata':
			$conn = new mysqli($servername, $username, $password);
			mysqli_select_db($conn,$scortsampledb);
			// Check connection
			if ($conn->connect_error) 
				die("Connection failed: " . $conn->connect_error);
			
			$sql="select * from samplelivedataset LIMIT ".$_REQUEST['start'].",".$_REQUEST['limit'];
                        $sql2="select * from samplelivedataset";                        
                        $rowcount=mysqli_num_rows($conn->query($sql2));
			$response = $conn->query($sql);
			$items = array();
			
			while($row = $response->fetch_array()) {
					$itemarray['ID']= $row['ID'];
					$itemarray['Nombre']=$row['Nombre'];
					$itemarray['Apellido']=$row['Apellido'];
					$itemarray['Fecha']=$row['Fecha'];
					$items[]=$itemarray;
			}
		
			$respuesta['conteo'] = $rowcount;
			$respuesta['Items'] = $items;			
	break;
	case 'Sortlivedata':
			$conn = new mysqli($servername, $username, $password);
			mysqli_select_db($conn,$scortsampledb);
			// Check connection
			if ($conn->connect_error) 
				die("Connection failed: " . $conn->connect_error);
			if($_REQUEST['nextState']=='sortedup'){
				$orderVar = 'ASC';
			}
			else{
				$orderVar = 'DESC';
			}
			$sql="select * from samplelivedataset ORDER BY `".$_REQUEST['field']."` ".$orderVar." LIMIT ".$_REQUEST['start'].",".$_REQUEST['limit'];
                        $sql2="select * from samplelivedataset";                        
                        $rowcount=mysqli_num_rows($conn->query($sql2));
			$response = $conn->query($sql);
			$items = array();
			
			while($row = $response->fetch_array()) {
					$itemarray['ID']= $row['ID'];
					$itemarray['Nombre']=$row['Nombre'];
					$itemarray['Apellido']=$row['Apellido'];
					$itemarray['Fecha']=$row['Fecha'];		
					$items[]=$itemarray;
			}
		
			$respuesta['conteo'] = $rowcount;
			$respuesta['Items'] = $items;			
	break;
		case 'Seachlivedata':
			$conn = new mysqli($servername, $username, $password);
			mysqli_select_db($conn,$scortsampledb);
			// Check connection
			if ($conn->connect_error) 
				die("Connection failed: " . $conn->connect_error);
			
			$sql="select * from samplelivedataset WHERE `".$_REQUEST['field']."` LIKE '%".$_REQUEST['text']."%'";
                        $sql2="select * from samplelivedataset";                        
                        $rowcount=mysqli_num_rows($conn->query($sql2));
			$response = $conn->query($sql);
			$items = array();
			
			while($row = $response->fetch_array()) {
					$itemarray['ID']= $row['ID'];
					$itemarray['Nombre']=$row['Nombre'];
					$itemarray['Apellido']=$row['Apellido'];
					$itemarray['Fecha']=$row['Fecha'];		
					$items[]=$itemarray;
			}
		
			$respuesta['conteo'] = $rowcount;
			$respuesta['Items'] = $items;			
	break;
	case 'insertsamplelivedata':
			$conn = new mysqli($servername, $username, $password);
			mysqli_select_db($conn,$scortsampledb);
			// Check connection
			if ($conn->connect_error) 
				die("Connection failed: " . $conn->connect_error);
			
			if($_REQUEST['ID']==''){				
				$sql="INSERT INTO `samplelivedataset`( `Nombre`, `Apellido`) VALUES ('".escapeHTML($_REQUEST['Nombre'])."','".escapeHTML($_REQUEST['Apellido'])."')";
			}
			else{
				$sql="INSERT INTO `samplelivedataset`(`ID`, `Nombre`, `Apellido`) VALUES ('".escapeHTML($_REQUEST['ID'])."','".escapeHTML($_REQUEST['Nombre'])."','".escapeHTML($_REQUEST['Apellido'])."')";
			}
			$response = $conn->query($sql);
			$sql="Select * from samplelivedataset where `ID` = ".mysqli_insert_id($conn);
			$response2 = $conn->query($sql);
			//$items = array();
			$sql2="select * from samplelivedataset";                        
            $rowcount=mysqli_num_rows($conn->query($sql2));
			while($row = $response2->fetch_array()) {
					$itemarray['ID']= $row['ID'];
					$itemarray['Nombre']=$row['Nombre'];
					$itemarray['Apellido']=$row['Apellido'];
					//$items[]=$itemarray;
			}
			$respuesta['conteo'] = $rowcount;
			$respuesta['Item'] = $itemarray;		
	break;
	case 'updatesamplelivedata':
			$conn = new mysqli($servername, $username, $password);
			mysqli_select_db($conn,$scortsampledb);
			// Check connection
			if ($conn->connect_error) 
				die("Connection failed: " . $conn->connect_error);
			$sql = "UPDATE `samplelivedataset` SET `Fecha` = '".escapeHTML($_REQUEST['Fecha'])."',`Nombre` = '".escapeHTML($_REQUEST['Nombre'])."',`Apellido`='".escapeHTML($_REQUEST['Apellido'])."'  WHERE  ID = '".$_REQUEST['ID']."'";			
			$response = $conn->query($sql);
			$sql="Select * from samplelivedataset where `ID` = ".$_REQUEST['ID'];
			$response2 = $conn->query($sql);
			//$items = array();
			$sql2="select * from samplelivedataset";                        
            $rowcount=mysqli_num_rows($conn->query($sql2));
			while($row = $response2->fetch_array()) {
					$itemarray['ID']= $row['ID'];
					$itemarray['Nombre']=$row['Nombre'];
					$itemarray['Apellido']=$row['Apellido'];
					$itemarray['Fecha']=$row['Fecha'];					
			}
			$respuesta['conteo'] = $rowcount;
			$respuesta['Item'] = $itemarray;		
	break;
	case 'deletesamplelivedata':
			$conn = new mysqli($servername, $username, $password);
			mysqli_select_db($conn,$scortsampledb);
			// Check connection
			if ($conn->connect_error) 
				die("Connection failed: " . $conn->connect_error);
			
				
			
			if(isset($_REQUEST['multiple']))
				$parametros = "ID IN ( ".$_REQUEST['multiple'].")";
			else
				$parametros = "ID = '".$_REQUEST['ID']."'";	
				
			$sql="DELETE FROM `samplelivedataset` WHERE  ".$parametros;			
			if($conn->query($sql)){
				$sql2="select * from samplelivedataset";                        
				$rowcount = mysqli_num_rows($conn->query($sql2));		
				$respuesta['conteo'] = $rowcount;
			}
				
	break;
}
echo json_encode($respuesta);


function escapeHTML($str) {
		
		$values= array("á","é","í","ó","ú","Á","É","Í","Ó","Ú","ñ","Ñ","\"","\'","<",">");
		$substitutes= array("&aacute;","&eacute;","&iacute;","&oacute;","&uacute;","&Aacute;","&Eacute;","&Iacute;","&Oacute;","&Uacute;","&ntilde;","&Ñtilde;","&quot;","&#39;","&lt;","&gt;");
		
		for($x=0;$x<count($values);$x++)		
			$str = str_replace($values[$x],$substitutes[$x],$str);
		
		return	 $str;
}
?>
