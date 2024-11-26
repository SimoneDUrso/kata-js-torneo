// MILESTONE 1
for (let f=0; f<fighters.length; f++) {
    let randomWeaponIndex = Math.floor(Math.random() * weapons.length)
    const fighterPower = fighters[f].power
    const waeponPower = weapons[randomWeaponIndex].power
    const power = fighterPower + waeponPower
    console.log('Potere ' + fighters[f].name + ' iniziale: ' + fighterPower + '. Potere arma '+ weapons[randomWeaponIndex].name + ': ' + waeponPower + '. POTERE FINALE: ' + power)
    weapons.splice(randomWeaponIndex, 1)
}