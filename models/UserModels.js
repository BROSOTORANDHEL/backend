import pool from '../config/db.js';
import validator from "validator";
import bcrypt from 'bcryptjs';



export const createUser = async (email, password) => {
    if(email === ''){
        throw new Error('Invalid Email');
    }



    if(!validator.isEmail(email)){
    throw new Error('Invalid Email Format');
}


    const [user] = await pool.query(
       ( "SELECT * FROM tbluser WHERE email = ?"),
        [email]
    )

    if(user.length > 0) {
        throw new Error('An Account is Already Created with that email')
    }


    if(password === '' ) {
        throw new Error ('Invalid Password');
    }

    if(!validator.isStrongPassword(password)){
        throw new Error ('Password to Weak');
    }

    const salt = bcrypt.genSaltSync(10);
    const newPassword = bcrypt.hashSync(password, salt);

    const [newUser] = await pool.query(
        "INSERT INTO tbluser(email, password) VALUES(?,?)",
        [email, newPassword]
    ) 

    return newUser.insertId;

}




