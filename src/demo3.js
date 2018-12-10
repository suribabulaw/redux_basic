// ============= default value========================///
//=============================================///

// const Book = {
// 	// title : 'redux',
// 	// author :'msakdh' ,
// 	publisher : {
// 		name : "redux tech",
// 		pages :500,
// 		day : 'monday'
// 	}
// }

// // const {title,author} = Book
// // console.log(` book name ${title} auther ${author}`)

// console.log(`book name ${re_title} author ${author}`)

// const {title:re_title ='es6', author="NIKHIL"} = Book
// ============= default value========================///
//=============================================///

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     // name: 'Penguin'
//   }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName); //


const Student  = {
	//name : "Suribabu Gangavath",
	id_name : 101
}

const {name = "None" , id_name : roll_no }  = Student

console.log(`Student name is ${name} roll_name ${roll_no}`)