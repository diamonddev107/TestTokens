const { utils, ethers } = require('hardhat')

async function deploytUSDC() {
    // const accounts = await ethers.getSigners()

    const tUSDC = await ethers.getContractFactory('tUSDC')
    // const name_ = 'USD-Coin';
    // const symbol_ = 'USDC.t';
    // const decimals_ = 18;
    // const cappedSupply_ = '10e27';
    const admin_ = '0x39eA12dA7D4991D96572FD8addb8E397C113401B';
    // const admin_ = '0x14e7bBbDAc66753AcABcbf3DFDb780C6bD357d8E'; // ERC20 address
    // const admin_ = 'one1znnmh0dvve6n4j4uhu7lmduqc67n2lvw256rhn'; // Harmony equivalent
    const tusdc = await tUSDC.deploy(admin_)
    await tusdc.deployed()
    console.log("tUSDC deployed: ", tusdc.address)

}
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
if (require.main === module) {
    deploytUSDC()
      .then(() => process.exit(0))
      .catch(error => {
        console.error(error)
        process.exit(1)
      })
}
