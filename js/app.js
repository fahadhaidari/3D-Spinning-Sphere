const UPDATE_DELAY = 100;
var renderer = undefined;
var light = undefined;
var pointLight = undefined;
var camera = undefined;
var scene = undefined;
var geometry = undefined;
var material = undefined;
var mesh = undefined;
var xRotationSpeed = 0.06;
var yRotationSpeed = 0.2;
var zRotationSpeed = 0.09;
const ROTATION_FRICTION = 0.99;
const YSPEED_FRICTION = 0.999;
var xSpeed = 1;
var ySpeed = 1;
var zSpeed = 1;
var sceneColor = "#111111";
var meshColor = "#FFFFFF";
var delta = 1;

window.onload = function() {
  console.log("App is loaded");
  renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById("canvas"),
    antialias: true
  });
  renderer.setClearColor(sceneColor);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);

  camera = new THREE.PerspectiveCamera(10, window.innerWidth / window.innerHeight, 0.1, 3000);
  scene = new THREE.Scene();
  geometry = new THREE.SphereGeometry(60);
  material = new THREE.MeshBasicMaterial(

    {
      color: meshColor,
      wireframe: true
    });

  mesh = new THREE.Mesh(geometry, material);

  mesh.position.set(0, 0, -1000);

  scene.add(mesh);

  requestAnimationFrame(render);

}

function render() {
  mesh.position.y += ySpeed;
  mesh.rotation.y += yRotationSpeed
  yRotationSpeed *= ROTATION_FRICTION;
  ySpeed *= YSPEED_FRICTION;
  renderer.render(scene, camera);
  requestAnimationFrame(render);

  if (mesh.position.y > 20 || mesh.position.y < -20) {
    ySpeed *= -1;
  }
}

$("html").click(function() {
  yRotationSpeed += 0.1;
  ySpeed += 0.5;
});
