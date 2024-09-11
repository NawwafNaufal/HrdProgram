const logs = require("./winston")

const logger = (req,res,next) => {
    logs.error("Error" )
    logs.warn("Warning")
    logs.info("Info")
    logs.http("Http")
    logs.verbose("Verbose")
    logs.debug("Debug")
    logs.silly("Silly")
    next()
}

module.exports = {logger}