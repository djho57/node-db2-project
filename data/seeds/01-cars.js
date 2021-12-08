// STRETCH
const cars = [
    {
        vin: '1111111111111',
        make: 'toyota',
        model: 'prius',
        mileage: 215000,
        title: 'clean',
        transmission: 'manual',
    },
    {
        vin: '1111111111111',
        make: 'toyota',
        model: 'camry',
        mileage: 415000,
        title: 'salvage',
    },
    {
        vin: '1111111111111',
        make: 'dodge',
        model: 'charger',
        mileage: 31000,
    },
]

exports.seed = async function (knex) {
    await knex('cars').truncate()
    await knex('cars').insert(cars)
}