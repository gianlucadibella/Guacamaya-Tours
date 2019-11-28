const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');

admin.initializeApp();

/**
* Here we're using Gmail to send 
*/
let authData = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'guacamayatoursoficial@gmail.com',
        pass: 'guacamayabros'
    }
});

exports.sendMailNotification = functions.firestore.document('submissions/{docId}')
.onCreate((snap,ctx)=>{

        const data=snap.data();

        authData.sendMail({
            from: 'guacamayatoursoficial@gmail.com',
            to: data.email,
            subject: 'Your submission info',
            text: data.name + ', Papi lo logramos',
            html: data.name + ', Papi lo logramos',
        }).then(res=>console.log('Succesfuly sent that email')).catch(
            err=>console.log(err)
        );
        })
        
      
//         // getting dest email by query string
//         const dest = req.query.dest;

//         const mailOptions = {
//             from: 'Gianluca Di Bella <gianluca.dibella@correo.unimet.edu.ve>', // Something like: Jane Doe <janedoe@gmail.com>
//             to: dest,
//             subject: 'I\'M A PICKLE!!!', // email subject
//             html: `<p style="font-size: 16px;">Pickle Riiiiiiiiiiiiiiiick!!</p>
//                 <br />
//                 <img src="https://images.prod.meredith.com/product/fc8754735c8a9b4aebb786278e7265a5/1538025388228/l/rick-and-morty-pickle-rick-sticker" />
//             ` // email content in HTML
//         };
  
//         // returning result
//         return transporter.sendMail(mailOptions, (erro, info) => {
//             if(erro){
//                 return res.send(erro.toString());
//             }
//             return res.send('Sended');
//         });
//     });    
// });

