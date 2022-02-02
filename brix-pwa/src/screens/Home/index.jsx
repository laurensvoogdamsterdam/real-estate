import React from "react";
import Card from "../../components/Card";

export default function Home() {
  return (
    <div className='mx-auto bg-gray-50'>
      <div className='max-w-5xl space-y-4 mx-auto overflow-y-hidden'>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
