const { utils, ethers } = require('hardhat')

async function deploytUSDT() {
    // const accounts = await ethers.getSigners()

    const tUSDT = await ethers.getContractFactory('tUSDT')
    // const name_ = 'USD-Tether';
    // const symbol_ = 'USDT.t';
    // const decimals_ = 18;
    // const cappedSupply_ = '10e27';
    // const admin_ = '0x14e7bBbDAc66753AcABcbf3DFDb780C6bD357d8E'; // ERC20 address
    const admin_ = '0x39eA12dA7D4991D96572FD8addb8E397C113401B';
    // const admin_ = 'one1znnmh0dvve6n4j4uhu7lmduqc67n2lvw256rhn'; // Harmony equivalent
    const tusdt = await tUSDT.deploy(admin_)
    await tusdt.deployed()
    console.log("tUSDT deployed: ", tusdt.address)

}
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
if (require.main === module) {
    deploytUSDT()
      .then(() => process.exit(0))
      .catch(error => {
        console.error(error)
        process.exit(1)
      })
}