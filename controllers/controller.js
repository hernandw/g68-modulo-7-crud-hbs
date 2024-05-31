import { addBooksQueries} from "../models/queries.js";

export const home = (req, res) => {
    res.render('home',{
        title: 'Home Page'
    })
}

export const bookFormAdd = (req, res) => {
    res.render("agregar", {
      title: "agregar libros",
    });
  };

  export const addBooks = async (req, res) => {
    try {
      const { title, author, year } = req.body;
  
      await addBooksQueries(title, author, year);
      res.redirect("/");
    } catch (error) {
      console.log(error.message);
    }
  };