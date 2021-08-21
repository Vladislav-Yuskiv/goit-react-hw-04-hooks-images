import { useState } from "react";
import PropTypes from "prop-types";
import s from './Searchbar.module.css';

function Searchbar ({onSubmit}) {

    const [value , setValue] = useState('')

    const handleChange = (e) => {
        setValue(e.currentTarget.value);
        }

    const handleSumbit = (e) => {
        e.preventDefault();
        if (value.trim() === "") {
            return;
        }
        onSubmit(value)
    }

        return (
            <header className={s.Searchbar} >
                < form className={s.SearchForm} onSubmit={handleSumbit}>
                    < button type=" submit " className={s.SearchForm_button} >
                        < span className={s.SearchForm_button_label} > Search </ span >
                    </ button >

                    <input
                        className={s.SearchForm_input}
                        type="text"
                        //autocomplete="off"
                        //autofocus
                        placeholder="Search images and photos"
                        onChange={handleChange}
                        value={value}
                    />
                </form >
            </header >
        )
    }

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired
}

export default Searchbar;