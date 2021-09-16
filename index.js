const { mnemonicGenerate, mnemonicToMiniSecret, naclKeypairFromSeed } = require('@polkadot/util-crypto');

(async() => {
  const mnemonic = mnemonicGenerate(12);
  const seed = mnemonicToMiniSecret(mnemonic);
  const { publicKey, secretKey } = naclKeypairFromSeed(seed);
  
  console.log(`Mnemonic: ${mnemonic}`);
  console.log(`PublicKey: ${new Buffer.from(publicKey).toString('hex')}`);
  console.log(`PrivateKey: ${new Buffer.from(secretKey).toString('hex')}`);
})();