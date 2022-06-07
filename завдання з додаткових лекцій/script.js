userCraitor = () => {
    let users = [
        {name: 'Dima', age: 26, status: true},
        {name: 'Anna', age: 6, status: false},
        {name: 'Olia', age: 21, status: true},
        {name: 'Roma', age: 18, status: true},
        {name: 'Oleg', age: 14, status: false},
        {name: 'Tanya', age: 51, status: true},
        {name: 'Katya', age: 8, status: false},
        {name: 'Oleg', age: 15, status: false},
        {name: 'Dima', age: 31, status: true},
        {name: 'Miasha', age: 25, status: true},
    ];
    return {
        addUser: (user) => {

            if (user.name && user.age && user.status) {
                users.push(user)
                console.log('good job, user add')
            } else console.log('trololo, eror')
        },
        usersLog: () => {
            console.log(users)
        },
        getStatus: (status) => console.log(users.filter(u => u.status === status)),
        getUserAge:(age)=> console.log(users.filter(u=>u.age === age )),
        getUserAgeMore:(age)=> console.log(users.filter(u=>u.age >= age )),
        getUserAgeLess:(age)=> console.log(users.filter(u=>u.age <= age )),
        sortUserAge:(direction)=>{
            if (direction ==='descending'){console.log(users.sort((a,b)=>b.age- a.age))}
            else console.log(users.sort((a,b)=>a.age- b.age))
        }
    };
}

let newUsers = userCraitor();
newUsers.addUser({name: 'Ivan', age: 25, status: true});
newUsers.usersLog();
newUsers.getStatus(true);
newUsers.getUserAge(15)
newUsers.getUserAgeMore(15)
newUsers.getUserAgeLess(15)
newUsers.sortUserAge()