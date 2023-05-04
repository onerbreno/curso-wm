const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 23 * * 3', () => {
    console.log('Executando tarefa 1!', new Date().getSeconds())
})

setTimeout(function () {
    tarefa1.cancel()
    console.log('Cancelando Tarefa 1')
}, 20000)

// setImmediate
// setInterval

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)]
regra.hour = 23
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, () => {
    console.log('Executando tarefa 2!', new Date().getSeconds())
})