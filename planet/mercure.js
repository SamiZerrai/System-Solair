var texture = new THREE.TextureLoader().load( 'textures/mercure.jpg' );
var geometry = new THREE.SphereGeometry( 12, 32, 32 );
var material = new THREE.MeshBasicMaterial( { map: texture } );
mercure = new THREE.Mesh( geometry, material );
mercure.position.set(100,0,100);

var geometry = new THREE.CylinderGeometry(142,142,1,100,0,7);
var materialring1 = new THREE.MeshBasicMaterial( { color: 0xFFFFFF, side: THREE.DoubleSide } );
ring1 = new THREE.Mesh( geometry, materialring1 );

ring1.position.set(0,0,0);

scene.add( ring1 );
scene.add( mercure );

pivotMercure.add( mercure );
