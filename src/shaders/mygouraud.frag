#version 300 es

/* Assignment 5: Artistic Rendering
 * Original C++ implementation by UMN CSCI 4611 Instructors, 2012+
 * GopherGfx implementation by Evan Suma Rosenberg <suma@umn.edu>, 2022-2024
 * License: Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
 * PUBLIC DISTRIBUTION OF SOURCE CODE OUTSIDE OF CSCI 4611 IS PROHIBITED
 */ 

precision mediump float;


// INPUT FROM UNIFORMS SET IN THE MAIN APPLICATION
uniform int useTexture;
uniform sampler2D surfaceTexture;


// INPUT FROM THE VERTEX SHADER AFTER INTERPOLATION ACROSS TRIANGLES BY THE RASTERIZER
in vec4 interpColor;
in vec2 interpTexCoords;


// OUTPUT
out vec4 fragColor;


void main() {
    // PART 2.0: In class example

    fragColor = interpColor;

    if (useTexture == 1) {
        fragColor *= texture(surfaceTexture, interpTexCoords);
    }
}
