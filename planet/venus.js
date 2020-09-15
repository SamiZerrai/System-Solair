var texture = new THREE.TextureLoader().load( 'textures/venus.jpg' );
var geometry = new THREE.SphereGeometry( 16, 32, 32 );
var material = new THREE.MeshBasicMaterial( { map: texture } );
venus = new THREE.Mesh( geometry, material );
venus.position.set(0,0,200);

var geometry = new THREE.CylinderGeometry(200,200,1,100,0,50);
var material = new THREE.MeshBasicMaterial( { color: 0xFFFFFF, side: THREE.DoubleSide } );
ring = new THREE.Mesh( geometry, material );

ring.position.set(0,0,0);

scene.add( ring );
scene.add( venus );

pivotVenus.add( venus );
