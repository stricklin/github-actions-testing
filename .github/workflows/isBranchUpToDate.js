const fs = require('fs')

module.exports = (mergingBranchSha, targetBranch) => {
    console.log(`mergingBranchSha: ${mergingBranchSha}`)
    let targetBranchSha = fs.readfilesync(`.git/refs/heads/${targetBranch}`)
    console.log(`targetBranchSha: ${targetBranchSha}`)

}