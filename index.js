import fs from 'fs';
import yargs from 'yargs';
yargs.command({
    command: 'add',
    description: 'add new user',
    builder: {

        name: {
            demandOption: true,
        },
    },
    handler(argv) {
        // console.log(argv.name);
        fs.readFile('./users.json',{encoding: "utf-8"},(error,data) => {
            let users = JSON.parse(data);
            let id = users[users.length - 1].id +1 ;
            users.push({id, name: argv.name});// id: id => this equal to id. it's ways called distruction;
            fs.writeFileSync('./users.json',JSON.stringify(users));
            console.log(`${argv.name} is added`);
        });
    }
});
yargs.command({
    command: 'show',
    description: 'show user',
    builder: {
        id: {
            demandOption: true,
        },
        
    },
    handler(argv) {
       
        fs.readFile('./users.json',{encoding: "utf-8"},(error,data) => {
            let users = JSON.parse(data);
             console.log(users[argv.id-1]);
        });
    }
});
yargs.command({
    command: 'delete',
    description: 'delete user',
    builder: {
        id: {
            demandOption: true,
        },
        
    },
    handler(argv) {
       
        fs.readFile('./users.json',{encoding: "utf-8"},(error,data) => {
            let users = JSON.parse(data);
            users.splice(argv.id-1,1);
            fs.writeFileSync('./users.json',JSON.stringify(users));
            console.log( "user deleted");
        });
    }
});
yargs.command({
    command: 'update',
    description: 'edit on user',
    builder: {
        id: {
            demandOption: true,
        },
        name: {
            demandOption: true,
        },

        
    },
    handler(argv) {
       
        fs.readFile('./users.json', {encoding: "utf-8"}, (error,data) => {
            let users = JSON.parse(data);
            let x = users.splice(argv.id - 1, 1, {id: argv.id, name: argv.name});
            fs.writeFileSync('./users.json',JSON.stringify(users));
            console.log( "new edit done");
        });
    }
});

yargs.parse();

// let cmd = process.argv[2];
// switch(cmd) {
//     case "add":
//         break;
//     case "delete":
//         break;
//     case "update":
//         break;
//     case "show":
//         break;
// }
// fs.readFile("./users.json",{encoding: "utf-8"},(err,data) =>{
//     let users = JSON.parse(data);
//     console.log(users[1]);
// });


// fs.readFile('./users.json',{encoding: "utf-8"},(error,data) => {
//     let users = JSON.parse(data);
//     users.splice(9,1);
//     // console.log( users);
//     fs.writeFileSync('./users.json',JSON.stringify(users));

// });

// fs.readFile('./users.json',{encoding: "utf-8"},(error,data) => {
//     let users = JSON.parse(data);
//     users.splice(1,1,{id:1,name:'raba'});
//     // console.log(res);
//     // JSON.stringify(res);
//     // console.log(users);
//     fs.writeFileSync('./users.json',JSON.stringify(users));
//     // console.log( "new edit done");
// });