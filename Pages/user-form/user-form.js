import User from "../../Models/User.js";

const handleUserForm = {
    validator(data) {
        return data ? true : false;
    },
    storeData(data) {
        const user = new User(data.email, data.password, data.name, data.age);
        console.log(user);
        fetch('../../db/live.json')
        .then((response) => response.json())
        .then((data) => {
            // Add the user to db
            data.users = [...data.users, user];
            JSON.stringify(data);
        })
        .then((jsonText) => {
            // Create a Blob with the updated data
            const updatedDataBlob = new Blob([jsonText], { type: 'application/json' });

            // Create a File from the Blob
            const updatedDataFile = new File([updatedDataBlob], 'live.json', { type: 'application/json' });

            // Save the updated file
            this.saveAs(updatedDataFile);
        })
        .catch((error) => console.log(error));
    },

    saveAs(blob, fileName) {
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = fileName;
        link.click();
    }
}

export default handleUserForm;

// Faire le traitement des données (required, email password) => send error message
// new User(data)
// store user in live-json

// Reprendre la théorie

// Voir si c'est possible de mettre en place des tests (avec un outil)

// Ajouter tailwind pour le css