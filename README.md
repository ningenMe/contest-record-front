# contest-record front
![](https://github.com/ningenMe/contest-record-front/workflows/deploy/badge.svg)  

## これは何？
https://contest-record.ningenme.net のフロントエンド

## アーキテクチャ  
|            |                |  
|----------- |--------------- |  
|rooting     | Cloud Front    |  
|hosting     | S3             |  
|ci/cd       | github actions |  
|application | React          |  

#### ローカルで実行するとき
```
yarn install
yarn start
```
#### ビルドするとき
```
yarn build
```