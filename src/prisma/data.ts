enum enumAirType {
  Manual = 'Manual',
  Automatic = 'Automatic',
}

export const products = [
  {
    name: 'Car',
    brand: 'Ford',
    model: 'Escape',
    type: 'SUV',
    engine: '4 cylinders',
    power: '250 HP',
    topSpeed: '190 km/h',
    traction: '4WD',
    navigationSystem: 'GPS',
    airConditioning: enumAirType.Automatic,
    safety: ['ABS brakes', 'Airbags', 'Stability system'],
    offroad: ['4x4 mode', 'Locking differential system'],
    warranty: '3 years',
    weight: '2.045 kg',
    connectivity: ['Bluetooth', 'Wi-Fi', 'Apple CarPlay'],
    passed: true,
  },
  {
    name: 'Car',
    brand: 'Chevrolet',
    model: 'Equinox',
    type: 'SUV',
    engine: '4 cylinders',
    power: '185 HP',
    topSpeed: '170 km/h',
    traction: '4WD',
    navigationSystem: 'GPS',
    airConditioning: enumAirType.Manual,
    safety: ['ABS brakes', 'Airbags', 'Stability system'],
    offroad: ['4x4 mode', 'Locking differential system'],
    warranty: '2 years',
    weight: '1.845 kg',
    connectivity: ['Bluetooth', 'Wi-Fi', 'Android Auto'],
    passed: true,
  },
  {
    name: 'Car',
    brand: 'Toyota',
    model: 'RAV4',
    type: 'SUV',
    engine: '4 cylinders',
    power: '203 HP',
    topSpeed: '180 km/h',
    traction: '4WD',
    navigationSystem: 'GPS',
    airConditioning: enumAirType.Automatic,
    safety: ['ABS brakes', 'Airbags', 'Stability system'],
    offroad: ['4x4 mode', 'Locking differential system'],
    warranty: '3 years',
    weight: '1.955 kg',
    connectivity: ['Bluetooth', 'Wi-Fi', 'Android Auto', 'Apple CarPlay'],
    passed: true,
  },
  {
    name: 'Car',
    brand: 'Ford',
    model: 'Escape',
    type: 'SUV',
    engine: '3 cylinders',
    power: '250 HP',
    topSpeed: '190 km/h',
    traction: '4WD',
    navigationSystem: 'GPS',
    airConditioning: enumAirType.Automatic,
    safety: ['ABS brakes', 'Airbags', 'Stability system'],
    offroad: ['4x4 mode', 'Locking differential system'],
    warranty: '3 years',
    weight: '2.045 kg',
    connectivity: ['Bluetooth', 'Wi-Fi', 'Apple CarPlay'],
    passed: false,
  },
  {
    name: 'Car',
    brand: 'Chevrolet',
    model: 'Equinox',
    type: 'SUV',
    engine: '4 cylinders',
    power: '185 HP',
    topSpeed: '170 km/h',
    traction: '4WD',
    navigationSystem: 'GPS',
    airConditioning: enumAirType.Manual,
    safety: ['ABS brakes', 'Stability system'],
    offroad: ['4x4 mode', 'Locking differential system'],
    warranty: '2 years',
    weight: '1.845 kg',
    connectivity: ['Bluetooth', 'Wi-Fi', 'Android Auto'],
    passed: false,
  },
  {
    name: 'Car',
    brand: 'Toyota',
    model: 'RAV4',
    type: 'SUV',
    engine: '4 cylinders',
    power: '203 HP',
    topSpeed: '180 km/h',
    traction: '4WD',
    navigationSystem: 'GPS',
    airConditioning: enumAirType.Manual,
    safety: ['ABS brakes', 'Airbags', 'Stability system'],
    offroad: ['4x4 mode', 'Locking differential system'],
    warranty: '3 years',
    weight: '1.955 kg',
    connectivity: ['Bluetooth', 'Wi-Fi', 'Android Auto', 'Apple CarPlay'],
    passed: true,
  },
]
