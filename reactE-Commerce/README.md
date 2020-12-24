# For Netlify Configuration
  - Go To Build Folder 
  - Create netlify.toml file 
  - in netlify.toml file write this
  `[build] publish = "build/" [[redirects]] from = "/*" to = "/index.html" status = 200`
