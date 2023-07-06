# &#x1F374; Recipe Finder &#x1F374;

By: Casey Hill, Eva Kemp, Joshua Khan, Shanay Mohamed, Lindsay Warr

## **Technologies Used**

-   RapidAPI integration
-   Asyncronous programming
-   JavaScript
-   CSS
-   HTML
-   VS Code
-   git
-   GitHub
-   Node Package Manager (npm)
-   JSON
-   Babel (v7.18.6)
-   EsLint v(8.18.0)
-   Jest (v24.9.0)
-   Bootstrap (v5.3.0)
-   webpack (v5.0.0)
    -   webpack-cli (v5.0.0)
    -   webpack-dev-server (v4.0.0)
    -   clean-webpack-plugin (v3.0.0)
    -   dotenv-webpack (v2.0.0)
-   Loaders
    -   css-loader (v3.6.0)
    -   file-loader (v6.2.0)
    -   html-loader (v1.3.2)
    -   style-loader (v1.3.0)

## **Description**

This application takes user inputs for ingredients and searches for recipes that contain those ingredients. The user can specify dietary restrictions and cuisine types to further narrow their search. It will return a list of recipes that match the user's search and allow them to click on their recipe of choice to see the ingredients list and recipe instructions. If there are no recipes found with the user's chosen inputs, it will return a "No recipes match that description" message. The application also offers a light mode and dark mode for your viewing pleasure. 

## **Setup/Installation Requirements** &#x1F4BB;

### **In IDE** (this serves as instructions for VS Code)

-   Clone this repository to your local machine.
-   Open VS Code.
-   Open the top level directory you just cloned.
-   In your terminal enter commands:
    -   `npm install`
    -   `npm run build`
-   Get API key
    -   Navigate to [Rapid API](https://rapidapi.com/apidojo/api/tasty)
    -   Sign up with the basic plan to get a free API key
    -   Navigate  to the [Tasty API](https://rapidapi.com/apidojo/api/tasty)
    -   Copy your key under `Header Parameters` next to `X-RapidAPI-Key`
-   At the root directory, create a `.env` file and enter:
    -   `API_KEY=<paste_your_api_key_here>`<br>
        make sure to remove the angle brackets as well as any whitespaces or extra punctuation.
-   Save and enter `npm run start` into terminal.
-   A new window will open in your browser at port 8080.
    -   Choose between light or dark mode
    -   Enter an ingredient (for multiple ingredients, separate by a single space)
    -   Select a cuisine type
    -   Optionally, filter by vegetarian, gluten-free, or low-carb options
    -   Click find recipes
    -   Click on a recipe that interests you to see a list of ingredients and the recipe steps

    That's it! Enjoy!

### Debugging

If the program does not run, try the following:

-   Check for error messages
    -   All errors will be routed to the DOM and read on the page.
    -   If 404 error:
        -   Check that the API_KEY variable in your .env file has no trailing whitespace or any punctuation. This includes no semicolon at the end of declaration.
        -   Check that your API key/access code from [RapidAPI](https://rapidapi.com/apidojo/api/tasty) is valid.
        -   Try generating the GET request in an API development/testing app or in your browser URL:<br>
        &nbsp;&nbsp;&nbsp;`https://tasty.p.rapidapi.com/recipes/list?q=`<strong>`<ingredient>`</strong>`&from=0&size=5&tags=`<strong>`<cuisine_type>`</strong>&nbsp;&nbsp;&nbsp;{<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;headers: {<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'X-RapidAPI-Key': <strong>`<your_api_key_goes_here>`</strong><br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} <br>
        }
-   Ensure dotenv is installed
    -   In your Terminal enter `npm install dotenv-webpack@2.0.0 --save-dev`

## **Known Bugs**
-   some ingredients listed as n/a

## **License**

[MIT](https://choosealicense.com/licenses/mit/)

Copyright (c) 2023 iamalion
