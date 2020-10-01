require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner argue tackle skull guard render remain proof install clog olympic suggest'; 
let testAccounts = [
"0x1ace88afd8c54df62f046c3f811f6f6ef7fbe1e28ae2349d2bbacc31111476ef",
"0xb0f7742864c74ad3205a4ad6b3489550efeb4cb8c34782a41296576738e8a6d1",
"0x12de3f4ad63c36d9bd402f248252fb2a03a9e142b7559a1d38287c0b4ba76fc3",
"0x14907cc5df86a4b6f588f2d62d40eed1ded5a86fc266e1f1eb05e9a56c4e1a43",
"0x1e97d2d872338bb1df619356a29283b39422d3c8ff9f5979fdfb22faddfd7c37",
"0xb7490032742361461e5f1640c055468a4acbc58f35baeb20658e7331a784e5d1",
"0xed1b5856f490de865c4720fccd5fc38271ca93b5cf8c281effff7064ba9dc038",
"0xa6ac010a971dc5f8fcceba9ea4eb3414e1a9ec9b2ebde8c7df4a6a0c0f42565d",
"0x29b545e13b3eae030460ad157f31568aa6c59cb079e253a5ea8f33f26d0b48b0",
"0xa7dc6a21e6f4934164ee269be17d1ed854c6faa8bf64b04b2fd203499ee60948"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
