For Netlify Configuration
1-Go To Build Folder
2-Create netlify.toml file
3-in netlify.toml file write this:
  `[build]
     publish = "build/"
  [[redirects]]   
     from = "/*"   
     to = "/index.html"   
     status = 200`
