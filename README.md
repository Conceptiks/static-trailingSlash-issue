# Issue

When building with the `export const trailingSlash="always"` (installl with `npm i --force`),
the build doesn't generate `index.html` files for the contents of `/blog`.

When building with the `export const trailingSlash="never"` (installl with `npm i --force`),
the build doesn't generate `index.html` files but rather `[nameOfParentdir].html` files.
