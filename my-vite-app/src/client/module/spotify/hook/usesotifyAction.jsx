import { useDispatch } from "react-redux";
import {
  SearchTrack,
  getnewReleases,
  searchAlbum,
  getcurrentPlaying,
} from "@src/redux/slice/SpotifySlice";
const useSpotifyAction = () => {
  const dispatch = useDispatch();
  const searchTrack = async (query) => {
    return await dispatch(SearchTrack({ query }));
  };
  const getNewReleases = async () => {
    return await dispatch(getnewReleases());
  };
  const searchAlbumClient = async (query) => {
    return await dispatch(searchAlbum({ query }));
  };
  const getCurrentPlaying = async () => {
    return await dispatch(getcurrentPlaying());
  };
  return { searchTrack, getNewReleases, searchAlbumClient, getCurrentPlaying };
};
export default useSpotifyAction;
