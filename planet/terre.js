var texture = new THREE.TextureLoader().load( 'textures/terre.jpg' );
var geometry = new THREE.SphereBufferGeometry( 13, 32, 32 );
var materialterre = new THREE.MeshBasicMaterial( { map: texture } );
terre = new THREE.Mesh( geometry, materialterre );
terre.position.set(300,0,0);

var texture = new THREE.TextureLoader().load( 'textures/moon.jpg' );
var geometry = new THREE.SphereBufferGeometry( 3, 32, 32 );
var materialterre = new THREE.MeshBasicMaterial( { map: texture } );
moon = new THREE.Mesh( geometry, materialterre );
moon.position.set(20,10,0);

var geometry = new THREE.CylinderGeometry(302,302,1,100,0,7);
var material = new THREE.MeshBasicMaterial( { color: 0xFFFFFF, side: THREE.DoubleSide } );
ring = new THREE.Mesh( geometry, material );

ring.position.set(0,0,0);

scene.add( ring );
scene.add( terre );
scene.add( moon );
pivotTerre.add(terre);
pivotMoon.add(moon);
