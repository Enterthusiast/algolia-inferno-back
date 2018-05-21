// not used
// building a view to help manipulate the data
module.exports = function () {
    return (`
        <hr>
        <p>
            Easy POST
            <form action="/api/1/apps" method="post">
                App name: <input type="text" name="app_name">
                <br>
                <button type="submit">Submit</button>
            </form>
        </p>
        <p>
            Easy DELETE
            <form method="delete" onsubmit="deleteApp(event)">
                App id: <input type="text" name="app_id" id="input-app-id">
                <br>
                <button type="submit">Submit</button>
            </form>
            <script>
                const deleteApp = (event) => {
                    event.preventDefault();
                    console.log(document.getElementById('input-app-id').value);
                    return false;
                }
            </script>
        </p>
    `);
};
//# sourceMappingURL=appFormView.js.map