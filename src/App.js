import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import Empty from "./components/Empty";
import Loading from "./components/Loading";
import Movie from "./components/Movie";
import {getWhatIsNext} from './features/mcu';
import logo from "./media/marvel-logo.png";

function App() {
  const dispatch = useDispatch();
  const {days_until,overview,poster_url,release_date,title,type,nextoverview,nextposter,nexttitle,isLoading,isError,nextdate,following_production} = useSelector((state)=>state.mcu.value);

  useEffect(()=>{
    dispatch(getWhatIsNext());
  },[dispatch])
  return (
    <div className="flex flex-col min-h-screen min-w-screen justify-center items-center">
      <img src={logo} alt="marvel-logo" className="mt-1 w-1/3"/>
      {isLoading && <Loading/>}
      {!isLoading && !isError && <Movie days_until={days_until} overview={overview} poster_url={poster_url} release_date={release_date} title={title} type={type} nextoverview={nextoverview} nextimage={nextposter}  nexttitle={nexttitle} nextdate={nextdate} following_production={following_production}/>}
      {!isLoading && isError && <Empty/>}
    </div>
  );
}

export default App;
