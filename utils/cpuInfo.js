const os = require('os');

let cpuLoads = [];

const broadcast = (interval, callback) => {
    let cpus = os.cpus();

    cpus.map((cpu) => {
        const total = cpu.times.user + cpu.times.idle + cpu.times.sys + cpu.times.irq;
        const load = total - cpu.times.idle;
        cpuLoads.push({total, load})
    });

    setInterval(() => {
        cpus = os.cpus();
        let data = [];

        cpus.map((cpu, i) => {
            const total = cpu.times.user + cpu.times.idle + cpu.times.sys + cpu.times.irq;
            const load = total - cpu.times.idle;

            const diffTotal = total - cpuLoads[parseInt(i)].total;
            const diffLoad = load - cpuLoads[parseInt(i)].load;

            const loadPercent = (diffLoad / diffTotal * 100).toFixed(1);

            cpuLoads[parseInt(i)].total = total;
            cpuLoads[parseInt(i)].load = load;

            data.push({cpu: i, model: cpu.model, loadPercent: loadPercent});
        });

        callback(data);
    }, interval);
}

exports.broadcast = broadcast;