# Fronkk

```shell
echo //nexus.ajdlabs.kr/repository/npm-private/:_auth=${echo -n 'username:password' | openssl base64} > .npmrc

npm install fronkk --registry https://nexus.ajdlabs.kr/repository/npm-private/
```
