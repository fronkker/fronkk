# Fronkk

### Publish
```shell
npm config set _auth="AUTH_TOKEN" -L project

npm publish --registry https://nexus.ajdlabs.kr/repository/npm-private/
```

### Install
```shell
echo //nexus.ajdlabs.kr/repository/npm-private/:_auth=${echo -n 'USERNAME:PASSWORD' | openssl base64} > .npmrc

npm install fronkk --registry https://nexus.ajdlabs.kr/repository/npm-private/
```
