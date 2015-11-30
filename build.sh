#!/bin/bash
#electron-packager <sourcedir> <appname> --platform=<platform> --arch=<arch> --version=<Electron version> [optional flags...]
electron-packager app Clipppy --platform=darwin --arch=x64 --version=0.35.2 --out=build --overwrite --icon=app/img/icon-128.icns
