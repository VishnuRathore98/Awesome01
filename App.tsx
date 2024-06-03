import {ScrollView, View} from 'react-native';
import FlatCards from './components/FlatCards.tsx';
import React from 'react';
import ElevatedCards from './components/ElevatedCards.tsx';
import FancyCard from './components/FancyCard.tsx';
import ActionCard from './components/ActionCard.tsx';
import ContactCards from './components/ContactCards.tsx';

export default function App() {
  return (
    <ScrollView>
      <FlatCards />
      <ElevatedCards />
      <FancyCard />
      <ActionCard />
      <ContactCards />
    </ScrollView>
  )
}
