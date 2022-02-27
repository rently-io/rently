import Styling from '../styles/searchBarAlt.module.css';
import { useRouter } from 'next/router';

export default function SearchBarAlt({ prevSearch, pixelWidth, percentageWidth }) {
  const router = useRouter();

  const handleClick = () => {
    const search = document.getElementById('searchInput').value;
    router.push(`/adverts${search != '' ? `?search=${search}` : ''}`);
  };

  return (
    <div className={Styling.searchBar} style={{ width: percentageWidth == null ? `${pixelWidth}px` : pixelWidth == null ? `${percentageWidth}%` : 'auto' }}>
      <div className={Styling.searchBtn} onClick={handleClick}>
        <div className={Styling.btnText}>Search</div>
      </div>
      <input id="searchInput" className={Styling.input} placeholder={ prevSearch != null & prevSearch != '' ? prevSearch : "Find something..." } />
    </div>
  );
}