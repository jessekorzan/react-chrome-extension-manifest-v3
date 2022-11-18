# react-chrome-extension-manifest-v3
## Manifest v3 Chrome Extension
### Stater kit for building Extensions with React (CRA)


Instructions (old): https://github.com/jessekorzan/react-chrome-extension

Download the repo

### Install
```
npm install
```

### develop (work on the thing)
```
npm start
```

### deploy (test in Chrome as an extension)
```
npm run build
```
REMEMBER THIS ... zip your /build folder = `build.zip` 


## add extension to Chrome (developer mode)
```
chrome://extensions/
```
Turn on Developer Mode and `load unpacked` (good thing we remembered that zip file)  

Go test your thing ... remember to re-build and upload every.single.time. you edit your react code.  And refresh your tab.

