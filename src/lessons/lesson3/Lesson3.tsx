import React, {useState} from 'react';
import API from './API';
import './lesson_3';

const Lesson3 = () => {

    const [searchName, setSearchName] = useState('');
    const [searchResult, setSearchResult] = useState('');
    const [searchNameByType, setSearchNameByType] = useState('');
    const [searchResultByType, setSearchResultByType] = useState('');

    // const searchFilm = () => {
    //     API.searchFilmsByTitle(searchName)
    //         .then(({data}) => {
    //             const {Search, Error, Response} = data;
    //             Response === 'True' ? setSearchResult(JSON.stringify(Search)) : setSearchResult(Error)
    //         })
    // };

    const searchFilm = async () => {
        try {
            const {data} = await API.searchFilmsByTitle(searchName)
            const {Search, Error, Response} = data;
            Response === 'True' ? setSearchResult(JSON.stringify(Search)) : setSearchResult(Error)
        } catch (err) {
            console.log('err', err)
        }
    };

    // const searchByType = (e: React.MouseEvent<HTMLButtonElement>) => {
    //     const type: string = e.currentTarget.dataset.t ? e.currentTarget.dataset.t : '';
    //     API.searchFilmsByType(searchNameByType, type)
    //         .then(({data}) => {
    //             const {Search, Error, Response} = data;
    //             Response === 'True' ? setSearchResultByType(JSON.stringify(Search)) : setSearchResultByType(Error)
    //         })
    // }

    const searchByType = async (e: React.MouseEvent<HTMLButtonElement>) => {
        const type: string = e.currentTarget.dataset.t ? e.currentTarget.dataset.t : '';
        try {
            const {data} = await API.searchFilmsByType(searchNameByType, type)
            const {Search, Error, Response} = data;
            Response === 'True' ? setSearchResultByType(JSON.stringify(Search)) : setSearchResultByType(Error)
        } catch (err) {
            console.log('err', err)
        }
    }

    return (
        <div>
            <h1>Promises</h1>
            <div>
                <h3><p>Search by name:</p></h3>
                <input type="text" value={searchName} onChange={(e) => setSearchName(e.currentTarget.value)}/>
                <button onClick={searchFilm}>Search</button>
                <div>
                    {searchResult}
                </div>
            </div>

            <div>
                <h3><p>Search by type:</p></h3>
                <input type="text" value={searchNameByType}
                       onChange={(e) => setSearchNameByType(e.currentTarget.value)}/>
                <button onClick={searchByType} data-t="movie">Movie</button>
                <button onClick={searchByType} data-t="series">Series</button>
                <div>
                    {searchResultByType}
                </div>
            </div>
        </div>
    );
}
export default Lesson3;