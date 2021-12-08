// STRETCH
const cars = [
    {
        vin: '12345678901234567',
        make: 'toyota',
        model: 'prius',
        mileage: 215000,
        title: 'clean',
        transmission: 'manual',
    },
    {
        vin: '12312312312312312',
        make: 'toyota',
        model: 'camry',
        mileage: 415000,
        title: 'salvage',
    },
    {
        vin: '18923845923847567',
        make: 'dodge',
        model: 'charger',
        mileage: 31000,
    },
]

exports.seed = async function (knex) {
    await knex('cars').truncate()
    await knex('cars').insert(cars)
}