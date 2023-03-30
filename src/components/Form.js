import classes from './Form.module.css'

const Form = (props) => {
  return (
    <div className={classes.main}>
      <label htmlFor="title" className={classes.label}>Title</label>
      <input id="title" type="text" className={classes.input}/>
      <label htmlFor="openingText" className={classes.label}>Opening Text</label>
      <input id="openingText" type="text" className={classes.input}/>
      <label htmlFor="releaseDate" className={classes.label}>Release Date</label>
      <input id="releaseDate" type="date" className={classes.input}/>
      <button className={classes.button}>Add Movie</button>
    </div>
  );
};

export default Form;
