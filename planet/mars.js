var texture = new THREE.TextureLoader().load( 'textures/mars.jpg' );
var geometry = new THREE.SphereGeometry( 9, 32, 32 );
var material = new THREE.MeshBasicMaterial( { map: texture } );
mars = new THREE.Mesh( geometry, material );
mars.position.set(300,0,400);

var geometry = new THREE.CylinderGeometry(500,500 ,1,100,0,7);
var materialring1 = new THREE.MeshBasicMaterial( { color: 0xFFFFFF, side: THREE.DoubleSide } );
ring1 = new THREE.Mesh( geometry, materialring1 );

ring1.position.set(0,0,0);

scene.add( ring1 );
scene.add( mars );
pivotMars.add(mars);
