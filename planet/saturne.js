var texture = new THREE.TextureLoader().load( 'textures/saturne.jpg' );
var geometry = new THREE.SphereGeometry( 30, 32, 32 );
var material = new THREE.MeshBasicMaterial( { map: texture } );
saturne = new THREE.Mesh( geometry, material );
scene.add( saturne );
saturne.position.set(-600,0,600);

var texture = new THREE.TextureLoader().load( 'textures/ring.jpg', function ( texture ) {

    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.offset.set( 0, 0 );
    texture.repeat.set( 2, 2 );

} )

var geometry = new THREE.RingGeometry(50,39,30,1,0,6.3);
var material = new THREE.MeshBasicMaterial( { map: texture, side: THREE.DoubleSide} );
ringS = new THREE.Mesh( geometry, material );

ringS.position.set(-600,0,600);


var geometry = new THREE.CylinderGeometry(850,850,1,100,0,7);
var materialring1 = new THREE.MeshBasicMaterial( { color: 0xFFFFFF, side: THREE.DoubleSide } );
ring1 = new THREE.Mesh( geometry, materialring1 );

ring1.position.set(0,0,0);

scene.add( ring1 );
scene.add( ringS );

pivotSaturne.add( saturne );
pivotSaturne.add( ringS );
