import { pool } from "../config/db.js";

export const addBooksQueries = async (title, author, year) => {
    try {
      const sql = {
        text: "INSERT INTO books (title, author, year) VALUES ($1, $2, $3) RETURNING *",
        values: [title, author, year],
      };
  
      const result = await pool.query(sql);
      if (result.rowCount > 0) {
        return result.rows[0];
      } else {
        return new Error("Error adding book");
      }
    } catch (error) {
      console.log("Error Code:" + error.code, "Error Message:" + error.message);
    }
  };
  