var texture = new THREE.TextureLoader().load( 'textures/uranus.jpg' );
var geometry = new THREE.SphereGeometry( 20, 32, 32 );
var material = new THREE.MeshBasicMaterial( { map: texture } );
uranus = new THREE.Mesh( geometry, material );
uranus.position.set(-900,0,700);

var geometry = new THREE.CylinderGeometry(1140,1140,1,100,0,50);
var material = new THREE.MeshBasicMaterial( { color: 0xFFFFFF, side: THREE.DoubleSide } );
ring = new THREE.Mesh( geometry, material );

ring.position.set(0,0,0);
scene.add( ring );
scene.add( uranus );

pivotUranus.add( uranus );
