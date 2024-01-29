import React from 'react';
import { useSelector } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';

import Carousels from '../components/template/Carousels';
import Banner from '../components/template/Banner';
import useFetchAndDispatchAiringTodayTv from '../hooks/televison/useFetchAndDispatchAiringTodayTv'
import useFetchAndDispatchOnTheAirTv from '../hooks/televison/useFetchAndDispatchOnTheAirTv'
import useFetchAndDispatchPopularTv from '../hooks/televison/useFetchAndDispatchPopularTv'
import useFetchAndDispatchTopRatedTv from '../hooks/televison/useFetchAndDispatchTopRatedTv'

const selectedTopRatedTv = createSelector(
  state => state.tv.topRatedTv,
  topRatedTv => {
    const randomIndex = Math.floor(Math.random() * topRatedTv.length);
    return topRatedTv[randomIndex] || {};
  }
)

const TvPage = () => {

  useFetchAndDispatchAiringTodayTv();
  useFetchAndDispatchOnTheAirTv();
  useFetchAndDispatchPopularTv();
  useFetchAndDispatchTopRatedTv();

  const tv = useSelector(store => store.tv ?? []);

  const banner = useSelector(selectedTopRatedTv)


  return (
    <div className='flex flex-col'>

      <Banner banner={banner} />

      <Carousels title={"Popular Shows"} movies={tv.popularTv} />
      <Carousels title={"Airing Today shows"} movies={tv.airingToday} />
      <Carousels title={"Top rated shows"} movies={tv.topRatedTv} />
      <Carousels title={"on the air shows"} movies={tv.onTheAirTv} />
    </div>
  )
}

export default TvPage