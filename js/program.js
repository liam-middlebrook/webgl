var scene = new THREE.Scene();

// FOV / AspectRatio / Near / Far
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

var clock = new THREE.Clock(true);
var time = 0;
var deltaTime = 0;

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


// Create a new box
var geometry = new THREE.BoxGeometry( 1, 1, 1 );

// Create a new material for it that is CornflowerBlue
var material = new THREE.MeshBasicMaterial( { color : 0x659CEF } );

var cube = new THREE.Mesh( geometry, material );

scene.add( cube );

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
