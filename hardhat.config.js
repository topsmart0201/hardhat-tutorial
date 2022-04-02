require("@nomiclabs/hardhat-waffle");
require('dotenv').config();


// const ALCHEMY_API_KEY = "MgnteiHFiKuNieqqijiCO8491QQ5OXPx";
const GANACHE_PRIVATE_KEY = "1bb0749622e8b7f88c5c00b4e99975f647c47691966bd678b21686aaebccd092";
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
   solidity: "0.7.3",
   networks: {
   //   ropsten: {
   //     url: `https://eth-ropsten.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
   //     accounts: [`${ROPSTEN_PRIVATE_KEY}`]
   //   }
      ganache: {
         url: "http://127.0.0.1:7545",
         accounts: [GANACHE_PRIVATE_KEY]
      },
   }
};