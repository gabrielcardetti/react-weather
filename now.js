{
  "version": 2,
  "name": "my-react-app",
  "builds": [
    {
      "src": "package.json",
      "use": "@now/static-build",
      "config": { "distDir": "build" }
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/public/index.html"
    },
  ]
}
