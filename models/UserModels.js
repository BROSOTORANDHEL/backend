import pool from '../models/db.js';
import validator from "validator";
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";

export const getUser = async (id) => {
    if (isNaN(parseInt(id))) {
        throw new Error('Invalid id');
    }

    const [user] = await pool.query('SELECT * FROM tbluser WHERE id = ?', [id]);
    return user[0];
};

export const createUser = async (email, password) => {
    if (!email || !validator.isEmail(email)) {
        throw new Error('Invalid Email Format');
    }

    const [existing] = await pool.query(
        "SELECT * FROM tbluser WHERE email = ?",
        [email]
    );

    if (existing.length > 0) {
        throw new Error(`The email ${email} is already used.`);
    }

    if (!password || !validator.isStrongPassword(password)) {
        throw new Error('Password too weak');
    }

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    const [result] = await pool.query(
        "INSERT INTO tbluser(email, password) VALUES(?, ?)",
        [email, hashedPassword]
    );

    return result.insertId;
};

export const login = async (email, password) => {
    if (!email || !password) {
        throw new Error('Email and Password are required');
    }

    const [rows] = await pool.query(
        "SELECT * FROM tbluser WHERE email = ?",
        [email]
    );

    if (rows.length === 0) {
        throw new Error(`An account with email ${email} does not exist.`);
    }

    const user = rows[0];

    if (!user.password) {
        throw new Error('Password not found in database. Check tbluser schema.');
    }

    const isMatch = bcrypt.compareSync(password, user.password);
    if (!isMatch) {
        throw new Error('Incorrect password');
    }

    const token = jwt.sign(
        { id: user.id },
        process.env.SECRET,
        { expiresIn: "1h" }
    );

    return token;
};
