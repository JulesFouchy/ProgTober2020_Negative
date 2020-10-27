precision mediump float;

varying vec2 vTexCoord;
uniform float uAspectRatio;

const vec2 c1 = vec2(0.5, 0.3);
uniform vec2 c2;
uniform float uTime;
const float r1 = 0.1;
const float r2 = 0.01;

void main() {
    vec2 uv = vTexCoord;
    uv.x *= uAspectRatio;
    uv *= 0.5;

    float t  = fract((uTime-0.9)*0.18);
    float id = floor((uTime-0.9)*0.18);
    t = int(mod(id, 2.)) == 1 ? 0. : t;
    t = 4. * (t-0.5)*(t-0.5)*(t-0.5) + 0.5;
    float x = 2. * c1.x * t;
    vec2 c = vec2(
        x,
        - c1.y * x * (x-2.*c1.x) / c1.x / c1.x
    );
    vec3 col = vec3(1.);

    float d1 = length(c1 - uv);
    float d2 = length(c - uv);
    col = min(col, 1.2*vec3(1., 0.5, 0.5) * (1. - smoothstep(max(d1 - r1, 0.), 0., 0.01)));
    col = min(col, vec3(0.5, 0.5, 1.) * (smoothstep(max(d2 - r2, 0.), 0., 0.1)));

    col *= 1.5;
    //col = smoothstep(vec3(0), vec3(1), col);
    col = pow(col, vec3(0.7));
    gl_FragColor = vec4(col, 1.);
}
