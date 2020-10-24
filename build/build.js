var canvas;
var myShader;
function preload() {
    myShader = loadShader("shader/myShader.vert", "shader/myShader.frag");
}
function setup() {
    canvas = createCanvas(desiredCanvasWidth(), desiredCanvasHeight(), WEBGL);
    canvas.position((windowWidth - width) / 2, (windowHeight - height) / 2);
}
function draw() {
    shader(myShader);
    myShader.setUniform("uAspectRatio", width / height);
    myShader.setUniform("c2", [mouseX / height, 1 - mouseY / height]);
    myShader.setUniform("uTime", frameCount / 60);
    rect(0, 0, 0, 0);
}
function desiredCanvasWidth() {
    var ratio = sqrt(2);
    var r = windowWidth / windowHeight;
    if (r < ratio)
        return windowWidth - 40;
    else
        return desiredCanvasHeight() * ratio;
}
function desiredCanvasHeight() {
    var ratio = sqrt(2);
    var r = windowWidth / windowHeight;
    if (r > ratio)
        return windowHeight - 40;
    else
        return desiredCanvasWidth() / ratio;
}
function windowResized() {
    resizeCanvas(desiredCanvasWidth(), desiredCanvasHeight());
    canvas.position((windowWidth - width) / 2, (windowHeight - height) / 2);
}
//# sourceMappingURL=../sketch/sketch/build.js.map