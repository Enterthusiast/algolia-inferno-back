module.exports = function() {
    return(`
        <!doctype html>
        <html lang="en">
            <body>
                <h1>Welcome to the live algolia-inferno-back project</h1>
                <h2>Howto</h2>
                Endpoints : 
                <ul>
                    <li>
                        Add an app to Algolia index
                        <pre>POST /api/1/apps</pre>
    <pre>
        {
            name: string
            image: string
            link: string
            category: string
            rank: number
            objectID?: number
        }
    </pre>
                    </li>
                    <li>
                        Remove an app from Algolia index
                        <pre>DELETE /api/1/apps/:id</pre>
    <pre>
        {
            id: number
        }
    </pre>
                </li>
                </ul>
                Tips : you can use <a href="https://www.getpostman.com/">Postman</a> to test
                <h2>Front</h2>
                <p>
                    The front of this project is accessible here : <a href="https://algolia-inferno-front.herokuapp.com/">https://algolia-inferno-front.herokuapp.com/</a>
                </p>
            </body>
        </html>
    `)
}