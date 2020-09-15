var texture = new THREE.TextureLoader().load( 'textures/jupiter.jpg' );
var geometry = new THREE.SphereBufferGeometry( 40, 32, 32 );
var material = new THREE.MeshBasicMaterial( { map: texture } );
jupiter = new THREE.Mesh( geometry, material );
jupiter.position.set(-500,0,500);

var geometry = new THREE.CylinderGeometry(710,710,1,100,0,50);
var material = new THREE.MeshBasicMaterial( { color: 0xFFFFFF, side: THREE.DoubleSide } );
ring = new THREE.Mesh( geometry, material );

ring.position.set(0,0,0);

scene.add( ring );
scene.add( jupiter );

pivotJupiter.add(jupiter);
