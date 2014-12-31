var scene = new THREE.Scene();

// FOV / AspectRatio / Near / Far
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

var clock = new THREE.Clock(true);
var time = 0;
var deltaTime = 0;

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColor( new THREE.Color( 100, 149, 237 ) );
document.body.appendChild( renderer.domElement );

var texture = THREE.ImageUtils.loadTexture( "textures/magic.jpg" );

// Create a new box
var geometry = new THREE.BoxGeometry( 1, 1, 1 );

// Create a new material for it that is CornflowerBlue
var material = new THREE.MeshLambertMaterial( { map: texture } );

var cube = new THREE.Mesh( geometry, material );

scene.add( cube );

var ambientLight = new THREE.AmbientLight(0xbbbbbb);
scene.add(ambientLight);

var directionalLight = new THREE.DirectionalLight(0xffffff);
directionalLight.position.set(1,1,1).normalize();
scene.add(directionalLight);

camera.position.z = 5;

function render() {
    requestAnimationFrame( render );

    cube.rotation.x += 1000.0 * deltaTime;
    cube.rotation.y += 5000.0 * deltaTime;

    renderer.render( scene, camera );

    time = clock.getElapsedTime();
    deltaTime = clock.getDelta();
}

render();
