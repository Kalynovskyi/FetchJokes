import { useState } from "react";
import Button from "./UI/Button";

const JokeForm = (props: FormProps) => {
    const [number, setNumber] = useState(1);
    const [categories, setCategories] = useState([""]);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        let urlLink = "";
        let linkNumber = "";
        let linkCategories = "";

        if (number > 1) {
            linkNumber = "?amount=" + number;
        }

        if (categories.length > 1) {
            categories.forEach((category, i) => {
                if (category.length === 0) return;
                if (i === 1) {
                    linkCategories = category; //Exclude "," from string
                } else {
                    linkCategories = linkCategories + "," + category;
                }
            });
        } else {
            linkCategories = "Any";
        }

        urlLink = "/" + linkCategories + linkNumber;

        props.getUrl(urlLink);
        props.onSubmitForm();
    };

    const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNumber(+e.target.value);
    };

    const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked === false) {
            categories.splice(
                categories.indexOf(e.target.value),
                categories.indexOf(e.target.value)
            );
        } else {
            categories.push(e.target.value);
        }

        setCategories([...categories]);
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <p>Categories</p>
            <span className="categories space-x-4">
                <label htmlFor="programming_cat">
                    <input
                        id="programming_cat"
                        type="checkbox"
                        value="Programming"
                        onChange={handleCategoryChange}
                    />
                    Programming
                </label>
                <label htmlFor="misc_cat">
                    <input
                        id="misc_cat"
                        type="checkbox"
                        value="Misc"
                        onChange={handleCategoryChange}
                    />
                    Misc
                </label>
                <label htmlFor="dark_cat">
                    <input
                        id="dark_cat"
                        type="checkbox"
                        value="Dark"
                        onChange={handleCategoryChange}
                    />
                    Dark
                </label>
                <label htmlFor="pun_cat">
                    <input
                        id="pun_cat"
                        type="checkbox"
                        value="Pun"
                        onChange={handleCategoryChange}
                    />
                    Pun
                </label>
                <label htmlFor="spooky_cat">
                    <input
                        id="spooky_cat"
                        type="checkbox"
                        value="Spooky"
                        onChange={handleCategoryChange}
                    />
                    Spooky
                </label>
                <label htmlFor="christmas_cat">
                    <input
                        id="christmas_cat"
                        type="checkbox"
                        value="Christmas"
                        onChange={handleCategoryChange}
                    />
                    Christmas
                </label>
            </span>
            <input
                type="number"
                value={number}
                placeholder="Jokes amount"
                className=" p-4 rounded-md "
                onChange={handleNumberChange}
            />
            <Button type="submit">Fetch Data</Button>
        </form>
    );
};

export default JokeForm;
