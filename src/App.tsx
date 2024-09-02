import './App.css'
import '@fortawesome/fontawesome-free/css/all.min.css'; // Ensure this is imported in your main CSS file
import ShoesDetailsCard from "./Components/ShoesDetailsCard";

function App() {

  return (
    <>

        <div className="flex justify-center mt-10">
            <div className="p-4 flex flex-wrap gap-4 justify-center">
                <ShoesDetailsCard/>
            </div>
        </div>
    </>
  )
}

export default App
