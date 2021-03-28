const os = require('os');

let cpuLoads = [];

const broadcast = (interval, callback) => {
    let cpus = os.cpus();

    for (let i = 0; i < cpus.length; i++) {
        const cpu = cpus[i];

        const total = cpu.times.user + cpu.times.idle + cpu.times.sys + cpu.times.irq;
        const load = total - cpu.times.idle;
        cpuLoads.push({total, load})
    }

    setInterval(() => {
        cpus = os.cpus();
        let data = [];

        for (let i = 0; i < cpus.length; i++) {
            const cpu = cpus[i];

            const total = cpu.times.user + cpu.times.idle + cpu.times.sys + cpu.times.irq;
            const load = total - cpu.times.idle;

            const diffTotal = total - cpuLoads[i].total;
            const diffLoad = load - cpuLoads[i].load;

            const loadPercent = (diffLoad / diffTotal * 100).toFixed(1);

            cpuLoads[i].total = total;
            cpuLoads[i].load = load;

            data.push({cpu: i, model: cpu.model, loadPercent: loadPercent})
        }

        callback(data);
    }, interval);
}

exports.broadcast = broadcast;