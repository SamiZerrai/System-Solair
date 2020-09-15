var texture = new THREE.TextureLoader().load( 'textures/neptune.jpg' );
var geometry = new THREE.SphereGeometry( 20, 32, 32 );
var material = new THREE.MeshBasicMaterial( { map: texture } );
neptune = new THREE.Mesh( geometry, material );
neptune.position.set(-800,0,900);

var geometry = new THREE.CylinderGeometry(1210,1210,1,100,0,50);
var material = new THREE.MeshBasicMaterial( { color: 0xFFFFFF, side: THREE.DoubleSide } );
ring = new THREE.Mesh( geometry, material );

ring.position.set(0,0,0);
scene.add( ring );

scene.add( neptune );

pivotNeptune.add( neptune );
