console.log('suri@GANGAVATH_SURI')
const Person = {
	name : 'suri babu',
	age  : 25,
	location: {
		city : "hydrebad",
		temp  : 75
	}
}
const {name,age} = Person ;
console.log(` ${name} age ${age} `)

const {city , temp } = Person.location
console.log(` living in ${city} temp ${temp}`)

// ============= rename========================///
//=============================================///
const {name : rename , age: rename_age} = Person
console.log(` rename:== name is ${rename } age ${rename_age}`)




