'use strict'

const registry = require('ld-cryptosuite-registry')
const { PublicKey } = require('./')
const test = require('tape')

function toJSON(pk) {
  return pk.toJSON()
}

test("PublicKey", (t) => {
  t.true('function' == typeof PublicKey)
  t.end()
})

test("new PublicKey(opts) throws", (t) => {
  t.throws(() => PublicKey(), TypeError)
  // incorrect object values
  t.throws(() => new PublicKey(), TypeError)
  t.throws(() => new PublicKey(null), TypeError)
  t.throws(() => new PublicKey(true), TypeError)
  t.throws(() => new PublicKey([]), TypeError)
  t.throws(() => new PublicKey(1), TypeError)

  // incorrect parameters
  t.throws(() => new PublicKey({}), TypeError)
  t.throws(() => new PublicKey({id: null}), TypeError)
  t.throws(() => new PublicKey({id: 123}), TypeError)
  t.throws(() => new PublicKey({id: {}}), TypeError)
  t.throws(() => new PublicKey({id: false}), TypeError)
  t.throws(() => new PublicKey({id: 'did:foo:123', type: null}), TypeError)
  t.throws(() => new PublicKey({id: 'did:foo:123', type: false}), TypeError)
  t.throws(() => new PublicKey({id: 'did:foo:123', type: {}}), TypeError)
  t.throws(() => new PublicKey({id: 'did:foo:123', type: []}), TypeError)
  t.throws(() => new PublicKey({id: 'did:foo:123', type: 123}), TypeError)
  t.throws(() => new PublicKey({id: 'did:foo:123', type: 'SOME TYPE'}), TypeError)
  t.throws(() => new PublicKey({id: 'did:foo:123', type: registry.RsaVerificationKey2018, owner: null}), TypeError)
  t.throws(() => new PublicKey({id: 'did:foo:123', type: registry.RsaVerificationKey2018, owner: false}), TypeError)
  t.throws(() => new PublicKey({id: 'did:foo:123', type: registry.RsaVerificationKey2018, owner: {}}), TypeError)
  t.throws(() => new PublicKey({id: 'did:foo:123', type: registry.RsaVerificationKey2018, owner: 123}), TypeError)
  t.end()
})

test("new PublicKey({id, type})", (t) => {
  const id = 'did:test:1234'
  const type = registry.Ed25519VerificationKey2018
  const pk = new PublicKey({id, type})
  t.true(pk)
  t.true('object' == typeof pk)
  t.true(id == pk.id)
  t.true(type == pk.type)
  t.true(id == pk.owner)
  t.true(null == pk.publicKeyPem)
  t.true(null == pk.publicKeyJwk)
  t.true(null == pk.publicKeyHex)
  t.true(null == pk.publicKeyBase58)
  t.true(null == pk.publicKeyBase64)
  t.end()
})

test("new PublicKey({id, type, owner})", (t) => {
  const id = 'did:test:1234'
  const type = registry.Ed25519VerificationKey2018
  const owner = 'did:test:5678'
  const pk = new PublicKey({id, type, owner})
  t.true(pk)
  t.true('object' == typeof pk)
  t.true(id == pk.id)
  t.true(type == pk.type)
  t.true(owner == pk.owner)
  t.end()
})

test("new PublicKey({id, type, publicKeyPem})", (t) => {
  const id = 'did:test:1234'
  const type = registry.Ed25519VerificationKey2018
  const publicKeyPem = 'key'
  const pk = new PublicKey({id, type, publicKeyPem})
  t.true(publicKeyPem == pk.publicKeyPem)
  t.end()
})

test("new PublicKey({id, type, publicKeyJwk})", (t) => {
  const id = 'did:test:1234'
  const type = registry.Ed25519VerificationKey2018
  const publicKeyJwk = 'key'
  const pk = new PublicKey({id, type, publicKeyJwk})
  t.true(publicKeyJwk == pk.publicKeyJwk)
  t.end()
})

test("new PublicKey({id, type, publicKeyHex})", (t) => {
  const id = 'did:test:1234'
  const type = registry.Ed25519VerificationKey2018
  const publicKeyHex = 'key'
  const pk = new PublicKey({id, type, publicKeyHex})
  t.true(publicKeyHex == pk.publicKeyHex)
  t.end()
})

test("new PublicKey({id, type, publicKeyBase58})", (t) => {
  const id = 'did:test:1234'
  const type = registry.Ed25519VerificationKey2018
  const publicKeyBase58 = 'key'
  const pk = new PublicKey({id, type, publicKeyBase58})
  t.true(publicKeyBase58 == pk.publicKeyBase58)
  t.end()
})

test("new PublicKey({id, type, publicKeyBase64})", (t) => {
  const id = 'did:test:1234'
  const type = registry.Ed25519VerificationKey2018
  const publicKeyBase64 = 'key'
  const pk = new PublicKey({id, type, publicKeyBase64})
  t.true(publicKeyBase64 == pk.publicKeyBase64)
  t.end()
})
