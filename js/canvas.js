import frag from '/shader.js';

const loadCanvas = () => {
// Ensure the DOM is fully loaded before executing the script
		document.addEventListener("DOMContentLoaded", function() {
// Select the canvas element
				const canvas = document.getElementById("canvas");
      canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

// Create a new GlslCanvas instance
				const sandbox = new GlslCanvas(canvas);



            // Load the shader code
				sandbox.load(frag);
// Create a WebGL texture with GL_NEAREST filtering
        
                // Set the texture to GlslCanvas
                sandbox.setUniform("bgImage", "https://uploads-ssl.webflow.com/669ca40edd7e9603b944e526/669cc39ebac66066286a3326_bg-min.avif");
  // Mouse move event listener
    canvas.addEventListener('mousemove', (e) => {
        const rect = canvas.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        sandbox.setUniform("u_mouse", [mouseX, mouseY]);
    });
        });
    };
export default loadCanvas;