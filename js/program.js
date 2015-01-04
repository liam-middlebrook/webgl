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

var JSONLoader = new THREE.JSONLoader();

var cabinet = null;

JSONLoader.load('models/cabinet.js', function( geometry, material ) {
    cabinet = new THREE.Mesh(
        geometry,
        new THREE.MeshFaceMaterial(material)
    );

    scene.add(cabinet);
});

var ambientLight = new THREE.AmbientLight(0xdddddd);
scene.add(ambientLight);

var directionalLight = new THREE.DirectionalLight(0xffffff);
directionalLight.position.set(1,1,1);
scene.add(directionalLight);

camera.position.z = 5;

function render() {
    requestAnimationFrame( render );

    renderer.render( scene, camera );

    time = clock.getElapsedTime();
    deltaTime = clock.getDelta();
}



// DAT GUI CONFIG
var gui = new dat.GUI({
    height : 5 * 32 -1
});
var params = {
    positionX : 0,
    positionY : 0,
    positionZ : 0,
    rotationX : 0,
    rotationY : 0,
    rotationZ : 0
};

var modelFolder = gui.addFolder("Model");
modelFolder.add(params, "positionX", -100, 100).onChange(function(){
    cabinet.position.x = params.positionX;
});
modelFolder.add(params, "positionY", -100, 100).onChange(function(){
    cabinet.position.y = params.positionY;
});
modelFolder.add(params, "positionZ", -100, 100).onChange(function(){
    cabinet.position.z = params.positionZ;
});
modelFolder.add(params, "rotationX", 0, 2 * Math.PI).onChange(function(){
    cabinet.rotation.x = params.rotationX;
});
modelFolder.add(params, "rotationY", 0, 2 * Math.PI).onChange(function(){
    cabinet.rotation.y = params.rotationY;
});
modelFolder.add(params, "rotationZ", 0, 2 * Math.PI).onChange(function(){
    cabinet.rotation.z = params.rotationZ;
});


render();
