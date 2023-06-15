import React from 'react'
import { useGlobalContext } from '../context/context';
import { useEffect } from 'react';
import Hero from '../components/hero/Hero';
import Categories from '../components/categories/Categories';

const Home = () => {
  const { state, setActiveNavlink } = useGlobalContext();

  useEffect(() => {
    setActiveNavlink(1);
  }, []);

  return (
  <section className='home'>
    <Hero/>
    <Categories/>
  </section>
  )
}

export default Home
