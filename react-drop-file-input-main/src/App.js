import { Routes } from 'react-router';
import './App.css';

import DropFileInput from './components/drop-file-input/DropFileInput';
import Navbar from './components/drop-file-input/Navbar/Navbar';

function App() {

    const onFileChange = (files) => {
        console.log(files);
    }

    return (
        <>
        <Navbar/>
        <div className="box">
            <DropFileInput
                onFileChange={(files) => onFileChange(files)}
            />
        </div>
        </>
    );
}

export default App;
