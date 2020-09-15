var geometry = new THREE.CubeGeometry( 3000, 3000, 3000);
var cubeMaterials =
[
  new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader( ).load( 'textures/space.jpg' ), side:THREE.DoubleSide } ),
  new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader( ).load( 'textures/space.jpg' ), side:THREE.DoubleSide } ),
  new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader( ).load( 'textures/space.jpg' ), side:THREE.DoubleSide } ),
  new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader( ).load( 'textures/space.jpg' ), side:THREE.DoubleSide } ),
  new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader( ).load( 'textures/space.jpg' ), side:THREE.DoubleSide } ),
  new THREE.MeshBasicMaterial( {map: new THREE.TextureLoader( ).load( 'textures/space.jpg' ), side:THREE.DoubleSide } )
];

var cubeMaterial = new THREE.MeshBasicMaterial( cubeMaterials );
var skybox = new THREE.Mesh ( geometry, cubeMaterials );
scene.add( skybox );
