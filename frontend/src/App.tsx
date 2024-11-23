import {useState} from 'react';
import './App.css';

const App = () => {
    const [file, setFile] = useState<File | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.files);
        if (event.target.files) {
            setFile(event.target?.files[0]);
        }
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        if (!file) {
            alert('Veuillez sélectionner un fichier à télécharger');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await fetch("http://localhost:8080/upload", {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                const result = await response.json();
                console.log('Fichier téléchargé avec succès:', result);
            } else {
                console.error('Erreur lors du téléchargement du fichier');
            }
        } catch (error) {
            console.error('Erreur de réseau:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="file" onChange={handleFileChange} />
            <button type="submit">Télécharger</button>
        </form>
    );
};

export default App;
