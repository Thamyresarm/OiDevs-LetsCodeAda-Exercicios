class HealthController {
    static async check(req, res) {
        return res.send('ok')
    }
}

module.exports = HealthController