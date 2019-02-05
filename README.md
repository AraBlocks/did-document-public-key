did-document-public-key
=======================

Decentralized Identity (DID) Document (DDO) Public Key interface

## Abstract

In this module, we provide a class interface for creating
[Public Keys](https://w3c-ccg.github.io/did-spec/#public-keys) suitable
for a [Decentralized Identity (DID)](https://w3c-ccg.github.io/did-spec)
[Document (DDO)](https://w3c-ccg.github.io/did-spec/#did-documents)

## Installation

```sh
$ npm install did-document-public-key
```

## Example Usage

```js
const { Ed25519VerificationKey2018 } = require('ld-cryptosuite-registry')
const { PublicKey } = require('did-document-public-key')
const pk = new PublicKey({
  id: 'did:ara:6d75736963',
  type: Ed25519VerificationKey2018
})

console.log(pk.toJSON()
```

## API

### `pk = new PublicKey(opts)`

where `opts` should be:

```js
{
  id: String // A valid DID URI
  type: String // A valid type from 'ld-cryptosuite-registry'
  owner: String // DEPRECATED: Use 'opts.controller'
  controller: String // An optional DID who owns this public key, defaults to id
}
```

## See Also

TODO

## License

MIT
