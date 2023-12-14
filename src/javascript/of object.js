
const arrayOfObject = [
    {
        users: ['Tahir', 'Shahid', 'Ahmad','Asim']
    },
    {
        emails: ['tmtahir732@gmail.com', 'shahid335@gamil.com', 'ahmad03@gmail.com', 'asim23@gmail.com' ]
    },
    {
        city: ['Multan', 'Lahore', 'Bahawalpur', 'Islamabad']
    }
]
console.log(arrayOfObject)
console.log(arrayOfObject[0].users[0])
console.log(arrayOfObject[0].users[1])
console.log(arrayOfObject[0].users[2])
console.log(arrayOfObject[0].users[3])
console.log(arrayOfObject[1].emails[0])
console.log(arrayOfObject[1].emails[1])
console.log(arrayOfObject[1].emails[2])
console.log(arrayOfObject[1].emails[3])
console.log(arrayOfObject[2].city[0])
console.log(arrayOfObject[2].city[1])
console.log(arrayOfObject[2].city[2])
console.log(arrayOfObject[2].city[3])

let contactus = {
    user1: {
        name: 'Tahir',
        email: 'tmtahir732@gmail.com',
        city: 'Multan',
        submit: [
            {
                message: 'successful submitted',
            }
        ],
       
    }
    
}

console.log(contactus);
console.log(contactus.user1);



