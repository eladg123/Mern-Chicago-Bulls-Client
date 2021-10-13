import './App.css';
import PlaceHolder from './Start Comps/PlaceHolder'

function App() {
  return (
    <div className="App" style={{
      backgroundImage: "url(" + "https://c4.wallpaperflare.com/wallpaper/897/408/938/basketball-chicago-bulls-wallpaper-preview.jpg" + ")", backgroundPosition: '30% 10%',
      backgroundSize: "1700px 800px",
      backgroundRepeat: 'no-repeat'
    }}>
      <PlaceHolder />
    </div>
  );
}

export default App;
