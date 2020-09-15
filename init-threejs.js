  var camera, scene, renderer;
  var mesh;
  init();
  animate();

  function init() {

				renderer = new THREE.WebGLRenderer( { antialias: true } );
				renderer.setPixelRatio( window.devicePixelRatio );
				renderer.setSize( window.innerWidth, window.innerHeight );
				document.body.appendChild( renderer.domElement );
				camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 4000 );
				camera.position.set( 400, 200, 0 );
				// controls
				controls = new THREE.OrbitControls( camera, renderer.domElement );
				//controls.addEventListener( 'change', render ); // call this only in static scenes (i.e., if there is no animation loop)
				controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
				controls.dampingFactor = 0.25;
				controls.screenSpacePanning = false;
				controls.minDistance = 700;
				controls.maxDistance = 1500;
				controls.maxPolarAngle = Math.PI / 2;

    scene = new THREE.Scene();

    var texture = new THREE.TextureLoader().load( 'textures/sun.jpg' );
    var geometry = new THREE.SphereBufferGeometry( 80, 32, 32 );
    var material = new THREE.MeshBasicMaterial( { map: texture } );
    sun = new THREE.Mesh( geometry, material );
    scene.add( sun );

    var geometry = new THREE.SphereBufferGeometry( 1, 1, 1 );
    var material = new THREE.MeshBasicMaterial( { map: texture } );
    pivot = new THREE.Mesh( geometry, material );
    scene.add( pivot );

    var geometry = new THREE.SphereBufferGeometry( 1, 1, 1 );
    var material = new THREE.MeshBasicMaterial( { map: texture } );
    pivotEarth = new THREE.Mesh( geometry, material );
    pivotEarth.position.set(300,0,0);
    scene.add( pivotEarth );

    ppivotEarth = new THREE.Object3D();
    pivot.add(ppivotEarth);

    ppivotEarth.add(pivotEarth);

    pivotMoon = new THREE.Object3D();
    pivotEarth.add(pivotMoon);

    pivotSun = new THREE.Object3D();
    pivot.add(pivotSun);

    pivotMercure = new THREE.Object3D();
    pivot.add(pivotMercure);

    pivotVenus = new THREE.Object3D();
    pivot.add(pivotVenus);

    pivotTerre = new THREE.Object3D();
    pivot.add(pivotTerre);

    pivotMars = new THREE.Object3D();
    pivot.add(pivotMars);

    pivotJupiter = new THREE.Object3D();
    pivot.add(pivotJupiter);

    pivotSaturne = new THREE.Object3D();
    pivot.add(pivotSaturne);

    pivotUranus = new THREE.Object3D();
    pivot.add(pivotUranus);

    pivotNeptune = new THREE.Object3D();
    pivot.add(pivotNeptune);

    //
    window.addEventListener( 'resize', onWindowResize, false );
  }
  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
  	camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
  }
  function animate() {
    requestAnimationFrame( animate );
     pivotMars.rotation.y += 0.0087;
     pivotNeptune.rotation.y += 0.0019;
     pivotSaturne.rotation.y += 0.0034;
     pivotUranus.rotation.y += 0.0024;
     pivotJupiter.rotation.y += 0.0047;
     pivotVenus.rotation.y += 0.0126;
     pivotTerre.rotation.y += 0.0107;
     ppivotEarth.rotation.y += 0.0107;
     pivotMoon.rotation.y += 0.0107;
     pivotMercure.rotation.y += 0.0175;
     pivotSun.rotation.y += 0.0175;
     ringS.rotation.x = 0.90;
     controls.update();

    mercure.rotation.y += 0.03;
    terre.rotation.y += 0.03;
    //moon.rotation.y += 0.03;
    venus.rotation.y += 0.03;
    mars.rotation.y += 0.03;
    mercure.rotation.y += 0.03;
    saturne.rotation.y += 0.03;
    uranus.rotation.y += 0.03;
    neptune.rotation.y += 0.03;
    jupiter.rotation.y += 0.03;
    sun.rotation.y += 0.01;

    renderer.render( scene, camera );
  }
