require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace seek surge trip notice crime remember unit harvest clock olympic theory'; 
let testAccounts = [
"0xac3574ad0a4a5ec74d5c7e8952302e287b4704dd9d7ad58ee3e8c9d2660482e4",
"0x331a643adc42f7a44246b6d7fbbadfb7352c21262e47a701cbe866b4d3b6cca7",
"0x2f813a036df29f8f04828b415ba3431b1cbb12fa96e4cebcf020f93c7195e162",
"0x4d152bc404300c69495c99e89615db697f514c4a011828389a5c817b5c952a2e",
"0xfa73fc68886c09199c8165f9d49e88b2179b97b70ed4c588dde5675b1d43f8e9",
"0x4e905a7786660a38fe76ff586599439c8f93c5e24006d11e06854c9e92c56c92",
"0x96f80f78f3d7a4557c744b67eeaaa43bbc768ee05f150e2b1845b8cc3460f2ab",
"0xf56811a05765663eba2d8e28d8ae74272bd4fed535c546b6332f7434dcb70286",
"0xbe327d31b58f3f0cbd40930e090d93b14a28afd3c0f952b96f2c66cf2b88f9b1",
"0x32998f336214cf5c866dcc2d9a4f0a6da42fca96901262262431a5b875477486"
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
