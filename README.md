# msx-electron-app

## About

Qiita で紹介した記事「Electron + WebMSX でデスクトップ PC 向け MSX ソフトを作ってみる」のソースコード類です。

## How to use

### Install dependencies

```
npm install
```

### Execute in the local environment

```
./node_modules/.bin/electron .
```

### Make the packages

#### for Intel Mac

```
./node_modules/.bin/electron-packager ./ --platform=darwin --arch=x64
```

#### for Intel Windows

```
./node_modules/.bin/electron-packager ./ --platform=win32 --arch=x64
```

